import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import {
  Container,
  Header,
  Form,
  Logo,
  AnswersContainer,
  Answer,
} from './styles';

import thisIsFine from '../../assets/this_is_fine.jpg';

function Dashboard({ user }) {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [hasMoreQuestions, setHasMoreQuestion] = useState(true);
  const [noAnswers, setNoAnsers] = useState(false);
  const [page, setPage] = useState(1);

  const logOut = () => {
    window.open('http://localhost:3333/auth/logout', '_self');
  };

  const searchQuestion = async () => {
    if (question.length > 0) {
      try {
        const response = await axios.get(
          `https://api.stackexchange.com/2.2/search`,
          {
            params: {
              page,
              pagesize: 10,
              order: 'desc',
              sort: 'relevance',
              intitle: question,
              site: 'stackoverflow',
              key: 'djDoiXwMGc7fHjosrpUb1A((',
            },
          }
        );

        setAnswers(response.data.items);
        setHasMoreQuestion(response.data.has_more);

        if (response.data.items.length === 0) {
          setNoAnsers(true);
        } else {
          setNoAnsers(false);
        }
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    searchQuestion();
  }, [page]);

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
              console.log(answers);
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
                setPage(1);
                searchQuestion();
              }}
            >
              GO!
            </button>
          </div>
        </Form>

        <AnswersContainer>
          {noAnswers && (
            <div id="noAnswers">
              <strong>No answers for this ERROR...</strong>
              <img src={thisIsFine} alt="dog in burning room" />
            </div>
          )}
          {answers.length > 0 && (
            <div id="containerPagination">
              {page !== 1 && (
                <button
                  className="pagination"
                  type="button"
                  onClick={() => {
                    setPage(page - 1);
                  }}
                >
                  <BiLeftArrow size={32} />
                </button>
              )}
              <span id="page">{page}</span>
              {hasMoreQuestions && (
                <button
                  className="pagination"
                  type="button"
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  <BiRightArrow size={32} />
                </button>
              )}
            </div>
          )}
          {answers &&
            answers.map((answer) => (
              <Answer
                hasAnswer={answer.is_answered}
                key={answer.question_id}
                onClick={() => {
                  console.log(answer.question_id);
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
