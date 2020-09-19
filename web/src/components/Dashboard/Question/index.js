import React from 'react';
import { format } from 'date-fns';

import { Container } from './styles';

function Question({ question, setSelectedQuestion }) {
  return (
    <Container
      hasAnswer={question.is_answered}
      onClick={() => {
        setSelectedQuestion(question);
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
    </Container>
  );
}

export default Question;
