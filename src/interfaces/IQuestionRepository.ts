import {Question} from "../entities/Question"
type QueryObject = {
  [key: string]: string;
};
export interface IQuestionRepository {
  create(data: Question): Promise<Question>;
  findByField(obj:QueryObject):Promise<Question[]>;
}
