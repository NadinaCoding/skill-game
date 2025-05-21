// src/types.ts

export interface Question {
  id: number;
  prompt: string;
  type: 'multiple-choice' | 'text-input';
  correctAnswer: string | number;
  options?: (string | number)[];
}

export interface Topic {
  name: string;
  level: number;
  questions: Question[];
}
