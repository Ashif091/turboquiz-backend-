import {Quiz} from "../entities/Quiz"
import {IQuizRepository} from "../interfaces/IQuizRepository"
import {IQuizService} from "../interfaces/IQuizService"

export class QuizService implements IQuizService {
    private repository:IQuizRepository;
    constructor (repository: IQuizRepository){
        this.repository = repository;
    }
    async createQuiz(data:Quiz):Promise<Quiz>{
        //validatation can perform here 
        const newQuiz = await this.repository.create(data)
        return newQuiz
    }
    async quizFindById(id:string):Promise<Quiz|null>{
        const Quiz = await this.repository.findById(id)
        return Quiz
    }
    async quizList(){
        const allQuiz = await this.repository.find()
        return allQuiz
    }
}