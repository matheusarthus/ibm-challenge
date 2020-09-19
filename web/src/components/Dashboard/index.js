import React, { useState } from 'react';
import { toDate, format } from 'date-fns';
import axios from 'axios';
import {
  Container,
  Header,
  Form,
  Logo,
  AnswersContainer,
  Answer,
} from './styles';

function Dashboard({ user }) {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);

  const logOut = () => {
    // window.open('http://localhost:3333/auth/logout', '_self');
    console.log(answers);
  };

  const searchQuestion = async () => {
    try {
      const response = await axios.get(
        `https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${question}&site=stackoverflow`
      );

      setAnswers(response.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header>
        <div>
          <Logo>This Error will be fine.</Logo>
        </div>
        <div className="buttons">
          <button
            id="errors"
            type="button"
            onClick={() => {
              logOut();
            }}
          >
            my Errors
          </button>
          <button
            type="button"
            onClick={() => {
              logOut();
            }}
          >
            Log-out
          </button>
        </div>
      </Header>
      <Container>
        <Form>
          <h2>{`Hello, ${user && user.username.split(' ')[0]}.`}</h2>
          <div>
            <input
              placeholder="What is your ERROR?"
              onChange={(item) => {
                setQuestion(item.target.value);
              }}
            />
            <button
              type="button"
              onClick={() => {
                searchQuestion();
              }}
            >
              GO!
            </button>
          </div>
        </Form>
        <AnswersContainer>
          {answers &&
            answers.map((answer) => (
              <Answer
                key={answer.question_id}
                onClick={() => {
                  console.log('teste');
                }}
              >
                <h4>{answer.title}</h4>
                <div>
                  <div id="metrics">
                    <strong>Respostas:</strong>
                    <span>{answer.answer_count}</span>
                  </div>
                  <div id="metrics">
                    <strong>Votos:</strong>
                    <span>{answer.score}</span>
                  </div>
                  <div id="metrics">
                    <strong>Visitas:</strong>
                    <span>{answer.view_count}</span>
                  </div>
                </div>
                <div className="tags">
                  {answer.tags &&
                    answer.tags.map((tag) => (
                      <div id="tag" key={tag}>
                        <span>{tag}</span>
                      </div>
                    ))}
                </div>
                <div className="dates">
                  <strong>Criação:</strong>
                  <span>
                    {format(
                      new Date(answer.creation_date * 1000),
                      'dd/MM/yyyy - HH:mm:ss'
                    )}
                  </span>
                  <strong>Atualização:</strong>
                  <span>
                    {format(
                      new Date(answer.last_activity_date * 1000),
                      'dd/MM/yyyy - HH:mm:ss'
                    )}
                  </span>
                </div>
              </Answer>
            ))}
        </AnswersContainer>
      </Container>
    </>
  );
}

export default Dashboard;
