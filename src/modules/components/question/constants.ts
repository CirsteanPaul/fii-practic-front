export interface questionDetails {
  id: number;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
}

export const myQuestion: questionDetails = {
  id: 1,
  question: 'lorem',
  answer1: 'answer1',
  answer2: 'answer2',
  answer3: 'answer3',
};

export const oldQuestions: questionDetails[] = [
  {
    id: 1,
    question: 'lorem',
    answer1: 'answer1',
    answer2: 'answer2',
    answer3: 'answer3',
  },
  {
    id: 2,
    question: 'morem',
    answer1: 'answer1',
    answer2: 'answer2',
    answer3: 'answer3',
  },
];
