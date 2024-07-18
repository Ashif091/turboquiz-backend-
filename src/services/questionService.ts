import {Question} from "../entities/Question"
import {IQuestionRepository} from "../interfaces/IQuestionRepository"
import {IQuestionService} from "../interfaces/IQuestionService"

export class QuestionService implements IQuestionService {
    private repository:IQuestionRepository;
    constructor (repository: IQuestionRepository){
        this.repository = repository;
    }
    async createQuestion(data:Question):Promise<Question>{
        //validatation can perform here 
        const newQuestion = await this.repository.create(data)
        return newQuestion
    }
    async findQuestionByQuizId(id: string){
        const Questions = await this.repository.findByField({quiz_id:id})
        return Questions
    }
}