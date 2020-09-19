/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Header, Form, Logo } from './styles';

import QuestionsContainer from './QuestionsContainer';
import AnswersContainer from './AnswersContainer';

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

        setSelectedQuestion(null);
        setAnswers(null);

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
    searchQuestions();
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

        {selectedQuestion ? (
          <AnswersContainer
            user={user}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            answers={answers}
            setAnswers={setAnswers}
          />
        ) : (
          <QuestionsContainer
            noAnswers={noAnswers}
            page={page}
            setPage={setPage}
            questions={questions}
            hasMoreQuestions={hasMoreQuestions}
            setSelectedQuestion={setSelectedQuestion}
            setAnswers={setAnswers}
          />
        )}
      </Container>
    </>
  );
}

export default Dashboard;
