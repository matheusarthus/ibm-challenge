import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import axios from 'axios';

import parse from 'html-react-parser';

import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

import { searchMok } from '../../moks/search';
import { answersMok } from '../../moks/answers';

import {
  Container,
  Header,
  Form,
  Logo,
  QuestionsContainer,
  AnswersContainer,
  Answer,
} from './styles';

import Question from './Question';

import thisIsFine from '../../assets/this_is_fine.jpg';

function Dashboard({ user }) {
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [hasMoreQuestions, setHasMoreQuestion] = useState(true);
  const [noAnswers, setNoAnsers] = useState(false);
  const [page, setPage] = useState(1);

  const logOut = () => {
    window.open('http://localhost:3333/auth/logout', '_self');
  };

  const searchQuestions = async () => {
    if (search.length > 0) {
      try {
        const response = await axios.get(
          `https://api.stackexchange.com/2.2/search`,
          {
            params: {
              page,
              pagesize: 10,
              order: 'desc',
              sort: 'relevance',
              intitle: search,
              site: 'stackoverflow',
              filter: '!9_bDDxJY5',
              key: 'djDoiXwMGc7fHjosrpUb1A((',
            },
          }
        );

        setQuestions(response.data.items);
        setHasMoreQuestion(response.data.has_more);

        if (response.data.items.length === 0) {
          setNoAnsers(true);
        } else {
          setNoAnsers(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const searchAnswersQuestion = async () => {
    /*     if (search.length > 0) {
      try {
        const response = await axios.get(
          `https://api.stackexchange.com/2.2/search`,
          {
            params: {
              page,
              pagesize: 10,
              order: 'desc',
              sort: 'relevance',
              intitle: search,
              site: 'stackoverflow',
              filter: '!9_bDDxJY5',
              key: 'djDoiXwMGc7fHjosrpUb1A((',
            },
          }
        );

        setQuestions(response.data.items);
        setHasMoreQuestion(response.data.has_more);

        if (response.data.items.length === 0) {
          setNoAnsers(true);
        } else {
          setNoAnsers(false);
        }
      } catch (err) {
        console.log(err);
      }
    } */
  };

  useEffect(() => {
    searchQuestions();
  }, [page]);

  useEffect(() => {
    searchAnswersQuestion();
  }, []);

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
              console.log(questions);
              console.log(selectedQuestion);
              console.log(selectedQuestion.length);
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
                setSearch(item.target.value);
              }}
            />
            <button
              type="button"
              onClick={() => {
                setPage(1);
                searchQuestions();
              }}
            >
              GO!
            </button>
          </div>
        </Form>

        {!selectedQuestion && (
          <QuestionsContainer>
            {noAnswers && (
              <div id="noAnswers">
                <strong>No answers for this ERROR...</strong>
                <img src={thisIsFine} alt="dog in burning room" />
              </div>
            )}
            {questions.length > 0 && (
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
            {questions &&
              questions.map((question) => (
                <Question
                  key={question.question_id}
                  question={question}
                  setSelectedQuestion={setSelectedQuestion}
                />
              ))}
          </QuestionsContainer>
        )}
        {!selectedQuestion && (
          <AnswersContainer>
            <h4>{searchMok[0].title}</h4>
            <div>
              <div id="metrics">
                <strong>Respostas:</strong>
                <span>{searchMok[0].answer_count}</span>
              </div>
              <div id="metrics">
                <strong>Votos:</strong>
                <span>{searchMok[0].score}</span>
              </div>
              <div id="metrics">
                <strong>Visitas:</strong>
                <span>{searchMok[0].view_count}</span>
              </div>
            </div>
            <div className="tags">
              {searchMok[0].tags &&
                searchMok[0].tags.map((tag) => (
                  <div id="tag" key={tag}>
                    <span>{tag}</span>
                  </div>
                ))}
            </div>
            <div className="dates">
              <strong>Criação:</strong>
              <span>
                {format(
                  new Date(searchMok[0].creation_date * 1000),
                  'dd/MM/yyyy - HH:mm:ss'
                )}
              </span>
              <strong>Atualização:</strong>
              <span>
                {format(
                  new Date(searchMok[0].last_activity_date * 1000),
                  'dd/MM/yyyy - HH:mm:ss'
                )}
              </span>
            </div>
            <div id="body">{parse(searchMok[0].body)}</div>
            <h4>Answers:</h4>
            {answersMok &&
              answersMok.map((answer) => (
                <Answer key={answer.answer_id}>
                  <div id="answerBody">{parse(answer.body)}</div>
                  <div />
                </Answer>
              ))}
          </AnswersContainer>
        )}
      </Container>
    </>
  );
}

export default Dashboard;
