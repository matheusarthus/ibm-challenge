/* eslint-disable react/prop-types */
import React from 'react';
import { format } from 'date-fns';

import axios from 'axios';
import { RiDeleteBin6Line } from 'react-icons/ri';
import api from '../../../../services/api';
import { Container, Question } from './styles';

function Questions({
  question,
  questions,
  setQuestions,
  setSelectedQuestion,
  setAnswers,
  areMyErrors,
}) {
  const searchAnswersQuestion = async (questionId) => {
    try {
      const response = await axios.get(
        `https://api.stackexchange.com/2.2/questions/${questionId}/answers`,
        {
          params: {
            pagesize: 10,
            order: 'desc',
            sort: 'votes',
            site: 'stackoverflow',
            filter: '!9_bDE(fI5',
            key: 'djDoiXwMGc7fHjosrpUb1A((',
          },
        }
      );

      setAnswers(response.data.items);
      setSelectedQuestion(question);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } catch (err) {
      console.log(err);
    }
  };

  async function deleteMyError() {
    try {
      await api.delete(`questions/${question.question_id}`, {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      });

      const questionsAux = questions.slice(0);

      const index = questionsAux.findIndex(
        (element) => element.question_id === question.question_id
      );

      questionsAux.splice(index, 1);

      console.log(questionsAux);

      setQuestions(questionsAux);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Question
        hasAnswer={question.is_answered}
        onClick={() => {
          searchAnswersQuestion(question.question_id);
        }}
      >
        <h4>{question.title}</h4>
        <div>
          <div id="metrics">
            <strong>Respostas:</strong>
            <span>{question.answer_count}</span>
          </div>
          <div id="metrics">
            <strong>Votos:</strong>
            <span>{question.score}</span>
          </div>
          <div id="metrics">
            <strong>Visitas:</strong>
            <span>{question.view_count}</span>
          </div>
        </div>
        <div className="tags">
          {question.tags &&
            question.tags.map((tag) => (
              <div id="tag" key={tag}>
                <span>{tag}</span>
              </div>
            ))}
        </div>
        <div className="dates">
          <strong>Criação:</strong>
          <span>
            {format(
              new Date(question.creation_date * 1000),
              'dd/MM/yyyy - HH:mm:ss'
            )}
          </span>
          <strong>Atualização:</strong>
          <span>
            {format(
              new Date(question.last_activity_date * 1000),
              'dd/MM/yyyy - HH:mm:ss'
            )}
          </span>
        </div>
      </Question>

      {areMyErrors && (
        <div id="delete">
          <button
            type="button"
            onClick={() => {
              deleteMyError();
            }}
          >
            <RiDeleteBin6Line size={32} color="#f00" />
          </button>
        </div>
      )}
    </Container>
  );
}

export default Questions;
