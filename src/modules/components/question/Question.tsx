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
import { myQuestion, oldQuestions } from './constants';

const Question = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const OldQuestionsList = () => (
    <>
      {oldQuestions.map(question => (
        <OldQuestion>{question.question.length < 30 ? question.question : `${question.question.slice(0, 30)}...`}</OldQuestion>
      ))}
    </>
  );

  return (
    <QuestionPage>
      <QuestionContainer>
        <LeftContainer>
          <QuestionPart>
            <QuestionNumber>Question 1</QuestionNumber>
            <QuestionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia magnam vel perspiciatis qui iure beatae aperiam dolorum nobis tempore, minima optio eius
              eos sed minus. Est odit saepe quasi.
            </QuestionText>
          </QuestionPart>
          <ResponsesPart>
            <Response nr={1} answer={myQuestion.answer1} />
            <Response nr={2} answer={myQuestion.answer2} />
            <Response nr={3} answer={myQuestion.answer3} />
          </ResponsesPart>
          <BottomPart />
        </LeftContainer>
        <RightContainer>
          <PastQuestionsTitle>Past questions</PastQuestionsTitle>
          <OldQuestionsList />
        </RightContainer>
      </QuestionContainer>
    </QuestionPage>
  );
};

export default Question;
