import mongoose, { Schema, Document } from 'mongoose';

interface IQuestion extends Document {
  quiz_id:Schema.Types.ObjectId
  question: string;
  options: string[];
  correct_option: string;
}

const QuizSchema: Schema = new Schema(
  {
    quiz_id: { type: Schema.Types.ObjectId, required: true, ref: 'Quiz' },
    question: { type: String, required: true },
    options: {
      type: [String],
      required: true,
      validate: {
        validator: function (v: string[]) {
          return v.length === 4;
        },
        message: 'Options array must have exactly 4 elements',
      },
    },
    correct_option: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Question = mongoose.model<IQuestion>('question', QuizSchema);

 