// src/components/QuestionRenderer.tsx
import { Question } from "../data/questions";
import MultipleChoice from "./MultipleChoice";
import WordPicker from "./WordPicker";

const QuestionRenderer = ({ question }: { question: Question }) => {
  switch (question.type) {
    case "multiple-choice":
      return <MultipleChoice question={question} />;
    case "word-picker":
      return <WordPicker question={question} />;
    default:
      return <div>Unknown question type</div>;
  }
};

export default QuestionRenderer;
