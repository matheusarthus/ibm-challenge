import mongoose from 'mongoose';
import AnswerSchema from './Schemas/Answer';

const QuestionSchema = new mongoose.Schema({
  user_id: String,
  id: String,
  title: String,
  link: String,
  profile_image: String,
  display_name: String,
  reputation: Number,
  answer_count: Number,
  score: Number,
  view_count: Number,
  creation_date: Date,
  last_activity_date: Date,
  body: String,
  answers: [AnswerSchema],
});

export default mongoose.model('Question', QuestionSchema);
