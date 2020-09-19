import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

import {
  Container,
  Header,
  Form,
  Logo,
  QuestionsContainer,
  AnswersContainer,
  Answers,
} from './styles';

import Question from './Question';

import thisIsFine from '../../assets/this_is_fine.jpg';

function Dashboard({ user }) {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);
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
              console.log(questions);
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
          {questions && questions.map((answer) => <Question answer={answer} />)}
        </QuestionsContainer>
        <AnswersContainer />
      </Container>
    </>
  );
}

export default Dashboard;
