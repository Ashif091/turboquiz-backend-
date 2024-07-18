import { Schema } from 'mongoose';

export interface Question {
  quiz_id:Schema.Types.ObjectId
  question: string
  options: string[]
  correct_option: string
}
