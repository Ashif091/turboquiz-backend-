import { Question } from "../../entities/Question";
import {IQuestionRepository } from "../../interfaces/IQuestionRepository";
import {Question as QuestionModel} from "../models/Question";
type QueryObject = {
    [key: string]: string;
  };

export class QuestionRepository implements IQuestionRepository {
    async create(data:Question):Promise<Question>{
        const newUserDocument = await QuestionModel.create(data);
        const newQuestion :Question = {
            quiz_id:newUserDocument.quiz_id,
            question: newUserDocument.question,
            options: newUserDocument.options,
            correct_option: newUserDocument.correct_option,
        }
        return newQuestion
    }
    async findByField(obj:QueryObject):Promise<Question[]>{
        const data = await QuestionModel.find(obj)
        return data
    }
}