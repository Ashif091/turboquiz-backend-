import mongoose, { Schema, Document } from 'mongoose';

interface IQuiz extends Document {
  name: string;
  status: boolean;
}

const QuizSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    status: { type: Boolean, required: true,default:true },
  },
  { timestamps: true }
);

export const Quiz = mongoose.model<IQuiz>('quiz', QuizSchema);

 