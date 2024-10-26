import { Router, Request, Response } from 'express';
import {quizController} from "../controllers/quizController"
import {QuestionRepository} from "../../database/repository/QuestionRepository"
import {QuestionService} from "../../services/questionService"
import {QuizRepository} from "../../database/repository/QuizRepository"
import {QuizService} from "../../services/quizService"
import path from 'path';
const router: Router = Router();
const repository = new QuestionRepository()
const quizRepository = new QuizRepository()
const Question = new QuestionService(repository)
const Quiz = new QuizService(quizRepository)
const controller = new quizController(Question,Quiz)


router.get("/", controller.onQuizList.bind(controller))
router.get("/:id", controller.onQuizFindWithQuestion.bind(controller))
router.delete("/:id", controller.onDeleteQuiz.bind(controller))
router.delete("/:id/:Q_id", controller.onDeleteQuesion.bind(controller))
router.post("/:id/questions", controller.onCreatquestion.bind(controller))
router.post("/create", controller.onCreatquiz.bind(controller)) 

export default router; 