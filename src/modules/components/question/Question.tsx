import { useEffect, useState } from 'react';
import {
  BottomPart,
  LeftContainer,
  OldQuestion,
  PastQuestionsTitle,
  QuestionContainer,
  QuestionNumber,
  QuestionPage,
  QuestionPart,
  QuestionText,
  ResponsesPart,
  RightContainer,
} from './styles';
import Response from './Response';
import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { createGameActionAsync, respondeGameActionAsync } from '../../../store/actions/game-actions';
import { gameSelector } from '../../../store/selectors/game-selectors';

const Question = () => {
  const dispatch = useAppDispatch();
  const [answer, setAnswer] = useState(0);
  const [count, setCount] = useState(1);
  const game = useAppSelector(gameSelector);

  useEffect(() => {
    dispatch(createGameActionAsync());
  }, [dispatch]);

  useEffect(() => {
    if (answer >= 1 && answer <= 3) {
      dispatch(respondeGameActionAsync(answer));
      setCount(prev => prev + 1);
      setAnswer(0);
    }
  }, [answer, dispatch]);

  if (!game) {
    return null;
  }
  // eslint-disable-next-line react/no-unstable-nested-components

  return (
    <QuestionPage>
      <QuestionContainer>
        <LeftContainer>
          <QuestionPart>
            <QuestionNumber>{`Question ${count}`}</QuestionNumber>
            <QuestionText>{game.newQuestion.question}</QuestionText>
          </QuestionPart>
          <ResponsesPart>
            <Response setAnswer={setAnswer} nr={1} answer={game.newQuestion.answer1} />
            <Response setAnswer={setAnswer} nr={2} answer={game.newQuestion.answer2} />
            <Response setAnswer={setAnswer} nr={3} answer={game.newQuestion.answer3} />
          </ResponsesPart>
          <BottomPart />
        </LeftContainer>
        <RightContainer>
          <PastQuestionsTitle>Past questions</PastQuestionsTitle>
          {game.historyQuestions.map(question => (
            <OldQuestion>{question.question.length < 30 ? question.question : `${question.question.slice(0, 30)}...`}</OldQuestion>
          ))}
        </RightContainer>
      </QuestionContainer>
    </QuestionPage>
  );
};

export default Question;
