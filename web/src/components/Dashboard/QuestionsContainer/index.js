/* eslint-disable react/prop-types */
import React from 'react';

import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { Container } from './styles';

import Question from './Question';

import thisIsFine from '../../../assets/this_is_fine.jpg';

function QuestionsContainer({
  noAnswers,
  questions,
  setQuestions,
  searchQuestions,
  hasMoreQuestions,
  setSelectedQuestion,
  setAnswers,
  areMyErrors,
  page,
  setPage,
}) {
  return (
    <Container>
      {noAnswers && (
        <div id="noAnswers">
          <strong>No help for this ERROR...</strong>
          <img src={thisIsFine} alt="dog in burning room" />
        </div>
      )}
      {!areMyErrors && questions && questions.length > 0 && (
        <div id="containerPagination">
          {page !== 1 && (
            <button
              className="pagination"
              type="button"
              onClick={() => {
                setPage(page - 1);
                searchQuestions(page - 1);
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
                searchQuestions(page + 1);
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
            questions={questions}
            setQuestions={setQuestions}
            setSelectedQuestion={setSelectedQuestion}
            setAnswers={setAnswers}
            areMyErrors={areMyErrors}
          />
        ))}
    </Container>
  );
}

export default QuestionsContainer;
