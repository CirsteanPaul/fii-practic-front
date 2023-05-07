import IGame from './IGame';
import IQuestion from './IQuestion';

interface IQuestionResponse {
  game: IGame;
  historyQuestions: IQuestion[];
  newQuestion: IQuestion;
}

export default IQuestionResponse;
