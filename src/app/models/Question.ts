import { Answer } from './Answer';
export interface Question {
  content: string;
  answers: Array<Answer>
}
