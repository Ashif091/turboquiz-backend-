import { Router, Request, Response } from 'express';
import {quizController} from "../controllers/quizController"
import {QuestionRepository} from "../../database/repository/QuestionRepository"
import {QuestionService} from "../../services/questionService"
import {QuizRepository} from "../../database/repository/QuizRepository"
import {QuizService} from "../../services/quizService"
const router: Router = Router();
const repository = new QuestionRepository()
const quizRepository = new QuizRepository()
const Question = new QuestionService(repository)
const Quiz = new QuizService(quizRepository)
const controller = new quizController(Question,Quiz)

router.get('/', (req: Request, res: Response) => {
  const response = {
    "/quiz": {
      "method":"get"
    },
    "/quiz/create": {
      "method":"post",
      "body":{
        "name": "string",
        "status": "boolean"
      }
    },
    "/quiz/:id/questions": {
      "method":"post",
      "body":{
        "question": "string",
        "options": "string[]",
        "correct_option": "string",
      }
    },
    "/quiz/:id":{
      "method":"get",
    },
    "/quiz/id":{
      "method":"Delete",
    }

  }
  res.send(response);
});
router.get("/quiz", controller.onQuizList.bind(controller))
router.get("/quiz/:id", controller.onQuizFindWithQuestion.bind(controller))
router.delete("/quiz/:id", controller.onDeleteQuiz.bind(controller))
router.post("/quiz/:id/questions", controller.onCreatquestion.bind(controller))
router.post("/quiz/create", controller.onCreatquiz.bind(controller)) 

export default router; 