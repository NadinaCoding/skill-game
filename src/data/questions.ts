import maths from './maths.json';

export type Question =
  | MultipleChoiceQuestion
  | WordPickerQuestion;

export interface BaseQuestion {
  id: number;
  subject: string;
  topic: string;
  level: number;
  type: string;
  prompt: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple-choice";
  correctAnswer: string | number;
  options: (string | number)[];
}

export interface WordPickerQuestion extends BaseQuestion {
  type: "word-picker";
  sentence: string;
  words: { text: string; isCorrect: boolean }[];
}

// Define the shape of the JSON data
interface SubjectData {
  subject: string;
  topics: {
    name: string;
    level: number;
    questions: any[];
  }[];
}

// Type assertion to ensure the JSON data matches the expected structure
const subjectData = maths as SubjectData;

// Flatten and transform the question list
export const questions: Question[] = subjectData.topics.flatMap((topic) =>
  topic.questions.map((q) => {
    const base = {
      id: q.id,
      subject: subjectData.subject,
      topic: topic.name,
      level: topic.level,
      type: q.type,
      prompt: q.prompt,
    };

    if (q.type === "multiple-choice") {
      return {
        ...base,
        correctAnswer: q.correctAnswer,
        options: q.options,
      } as MultipleChoiceQuestion;
    }

    if (q.type === "word-picker") {
      return {
        ...base,
        sentence: q.sentence,
        words: q.words,
      } as WordPickerQuestion;
    }

    throw new Error(`Unsupported question type: ${q.type}`);
  })
);
