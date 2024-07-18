import {Quiz} from "../../entities/Quiz"
import {IQuizRepository} from "../../interfaces/IQuizRepository"
import {Quiz as QuizModel} from "../models/Quiz"

export class QuizRepository implements IQuizRepository {
  async create(data: Quiz): Promise<Quiz> {
    const newQuizDocument = await QuizModel.create(data)
    const newQuiz = {
      name: newQuizDocument.name,
      id: newQuizDocument._id,
      status: newQuizDocument.status,
    }
    return newQuiz
  }
  async findById(id: string): Promise<Quiz | null> {
    console.log("_______________")
    const Quiz = await QuizModel.findOne({_id: id})
    console.log("_______________"+Quiz)

    if (Quiz) {
      const QuizData: Quiz = {
        name: Quiz.name,
        status: Quiz.status,
      }
      return QuizData
    }
    return null
  }
}
