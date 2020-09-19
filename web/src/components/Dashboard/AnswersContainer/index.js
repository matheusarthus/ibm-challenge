/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { format } from 'date-fns';

import parse from 'html-react-parser';

import { BsStarFill } from 'react-icons/bs';
import { MdBackup } from 'react-icons/md';
import { Container } from './styles';

import Answer from './Answer';

import api from '../../../services/api';

function AnswersContainer({
  user,
  selectedQuestion,
  setSelectedQuestion,
  answers,
  setAnswers,
  areMyErrors,
}) {
  const [saved, setSaved] = useState(areMyErrors);

  async function saveQuestion() {
    const id = user.facebookId || user.googleId || user.twitterId;

    try {
      await api.post(
        `questions/${id}`,
        {
          question: selectedQuestion,
        },
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
          },
        }
      );

      setSaved(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <div id="header">
        <div id="titles">
          <h4>{selectedQuestion.title}</h4>
          <a href={selectedQuestion.link}>see on stackoverflow</a>
          <div id="owner">
            <img src={selectedQuestion.owner.profile_image} alt="profile" />
            <div>
              <strong>{selectedQuestion.owner.display_name}</strong>
              <div id="reputation">
                <BsStarFill color="#ffbf00" />
                <span>{selectedQuestion.owner.reputation}</span>
              </div>
            </div>
          </div>
        </div>
        <div id="buttons">
          <button
            id="back"
            type="button"
            onClick={() => {
              setSelectedQuestion(null);
              setAnswers([]);
            }}
          >
            Voltar
          </button>
          {saved ? (
            <MdBackup size={32} color="#00f" />
          ) : (
            <button
              id="save"
              type="button"
              onClick={() => {
                saveQuestion();
              }}
            >
              salvar
            </button>
          )}
        </div>
      </div>
      <div>
        <div id="metrics">
          <strong>Respostas:</strong>
          <span>{selectedQuestion.answer_count}</span>
        </div>
        <div id="metrics">
          <strong>Votos:</strong>
          <span>{selectedQuestion.score}</span>
        </div>
        <div id="metrics">
          <strong>Visitas:</strong>
          <span>{selectedQuestion.view_count}</span>
        </div>
      </div>
      <div className="tags">
        {selectedQuestion.tags &&
          selectedQuestion.tags.map((tag) => (
            <div id="tag" key={tag}>
              <span>{tag}</span>
            </div>
          ))}
      </div>
      <div className="dates">
        <strong>Criação:</strong>
        <span>
          {format(
            new Date(selectedQuestion.creation_date * 1000),
            'dd/MM/yyyy - HH:mm:ss'
          )}
        </span>
        <strong>Atualização:</strong>
        <span>
          {format(
            new Date(selectedQuestion.last_activity_date * 1000),
            'dd/MM/yyyy - HH:mm:ss'
          )}
        </span>
      </div>
      <div id="body">{parse(selectedQuestion.body)}</div>
      <h4>Answers:</h4>
      {answers.length > 0 ? (
        answers.map((answer) => (
          <Answer answer={answer} key={answer.answer_id} />
        ))
      ) : (
        <span id="noAnswers">no answers for this question...</span>
      )}
    </Container>
  );
}

export default AnswersContainer;
