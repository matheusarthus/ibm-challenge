import Question from '../Models/Question';

class SaveQuestions {
  async store(req, res) {
    const { id } = req.params;
    const { question, answers } = req.body;

    const questionMongo = await Question.findOne({
      id: question.question_id,
    });

    if (!questionMongo) {
      const newQuestion = await Question.create({
        user_id: id,
        id: question.question_id,
        title: question.title,
        link: question.link,
        profile_image: question.profile_image,
        display_name: question.display_name,
        reputation: question.reputation,
        answer_count: question.answer_count,
        score: question.score,
        view_count: question.view_count,
        creation_date: question.creation_date,
        last_activity_date: question.last_activity_date,
        body: question.body,
        answers,
      });

      return res.json({ newQuestion });
    }

    return res.status(401).json({ Error: 'Question ready exists' });
  }
}

export default new SaveQuestions();
