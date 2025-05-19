export interface QuestionProgress {
  id: number;
  correctCount: number;
  incorrectCount: number;
  lastAnsweredAt?: string;
  lastResult?: "correct" | "incorrect";
}
export {};