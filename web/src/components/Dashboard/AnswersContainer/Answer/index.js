/* eslint-disable react/prop-types */
import React from 'react';

import { BsStarFill } from 'react-icons/bs';
import parse from 'html-react-parser';
import { Container } from './styles';

function Answer({ answer }) {
  return (
    <Container accepted={answer.is_accepted}>
      <div id="owner">
        <img src={answer.owner.profile_image} alt="profile" />
        <div>
          <strong>{answer.owner.display_name}</strong>
          <div id="reputation">
            <BsStarFill color="#ffbf00" />
            <span>{answer.owner.reputation}</span>
          </div>
        </div>
      </div>
      <div id="answerBody">{parse(answer.body)}</div>
    </Container>
  );
}

export default Answer;
