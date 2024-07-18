import {Question} from "../entities/Question"

export interface IQuestionService {
    createQuestion(data:Question):Promise<Question>,
    findQuestionByQuizId(id:String):Promise<Question[]>
}