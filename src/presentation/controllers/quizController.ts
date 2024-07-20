import {NextFunction, Request, Response} from "express"
import {Question} from "../../entities/Question"
import {IQuestionService} from "../../interfaces/IQuestionService"
import {IQuizService} from "../../interfaces/IQuizService"
import { Quiz } from "../../entities/Quiz"
import { Schema, Types } from "mongoose"

export class quizController {
  private questionService: IQuestionService
  private quizService : IQuizService
  constructor(questionService: IQuestionService,quizService:IQuizService) {
    this.questionService = questionService,
    this.quizService = quizService 
  }
  async onCreatquestion(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body
      body.quiz_id = new Types.ObjectId(req.params.id) 
      const data = await this.questionService.createQuestion(body)
      const allQuestions = await this.questionService.findQuestionByQuizId(req.params.id)
      return res.json(allQuestions)
    } catch (error) {
      console.log(error) 
      next(error)
    }
  }
  async onCreatquiz(req: Request, res: Response, next: NextFunction) {
    try {
      const body: Quiz = req.body
      const data = await this.quizService.createQuiz(body)
      const allQuiz = await this.quizService.quizList()
      return res.json(allQuiz)
    } catch (error) {
      next(error)
    }
  }

  
  async onQuizFindWithQuestion (req:Request , res:Response,next:NextFunction){
    try {
      const id = req.params.id
      const quizData = await this.quizService.quizFindById(id)
      if(quizData){ 
        const questions = await this.questionService.findQuestionByQuizId(id) 
        const responseData = {
          ...quizData,
          questions,
        };
        return res.json(responseData)
      }
      return null
    } catch (error) {
      next(error)
    }
  }
  async onQuizList(req:Request , res:Response,next:NextFunction){
    try {
      const allData = await this.quizService.quizList()
      return res.json(allData)
    } catch (error) {
      next(error)
    }
  }
  async onDeleteQuiz(req:Request , res:Response,next:NextFunction){
    try {
      const id = req.params.id
      const allData = await this.quizService.deleteById(id)
      const allQuiz = await this.quizService.quizList()
      return res.json(allQuiz)
    } catch (error) {
      next(error)
    }
  }
  async onDeleteQuesion(req:Request , res:Response,next:NextFunction){
    try {
      const Q_id = req.params.Q_id
      const id = req.params.id
      const allData = await this.questionService.deleteQuestionById(Q_id)
      const allQuestions = await this.questionService.findQuestionByQuizId(id)
      return res.json(allQuestions)
    } catch (error) {
      next(error)
    }
  }
}
