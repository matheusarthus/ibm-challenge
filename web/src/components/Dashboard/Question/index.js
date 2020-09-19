import React from 'react';
import { format } from 'date-fns';

import { Container } from './styles';

function Question({ answer }) {
  return (
    <Container
      hasAnswer={answer.is_answered}
      key={answer.question_id}
      onClick={() => {
        console.log(answer);
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
    </Container>
  );
}

export default Question;
