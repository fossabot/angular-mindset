import { Question } from './Question';
export interface Task {
  title: string;
  id: number;
  questions: Array<Question>
}
