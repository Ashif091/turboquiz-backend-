import {Quiz} from "../entities/Quiz"

export interface IQuizRepository {
  create(data: Quiz): Promise<Quiz>;
  findById(id:String):Promise<Quiz|null>;
  find():Promise<Quiz[]|[]>
}