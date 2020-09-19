import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
  is_accepted: Boolean,
  profile_image: String,
  display_name: String,
  reputation: Number,
  body: String,
});

export default mongoose.model('Answer', AnswerSchema);
