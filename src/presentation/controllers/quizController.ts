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
      return res.json(data)
    } catch (error) {
      console.log(error) 
      next(error)
    }
  }
  async onCreatquiz(req: Request, res: Response, next: NextFunction) {
    try {
      const body: Quiz = req.body
      const data = await this.quizService.createQuiz(body)
      return res.json(data)
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
}
