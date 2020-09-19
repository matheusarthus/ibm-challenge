import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
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
});

export default mongoose.model('Question', QuestionSchema);
