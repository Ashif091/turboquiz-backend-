import {Quiz} from "../entities/Quiz"

export interface IQuizService {
    createQuiz(data:Quiz):Promise<Quiz>,
    quizFindById(id:String):Promise<Quiz|null>
    quizList():Promise<Quiz[]|[]>
}