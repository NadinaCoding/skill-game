// src/components/MultipleChoice.tsx
import { MultipleChoiceQuestion } from "../data/questions";

const MultipleChoice = ({ question }: { question: MultipleChoiceQuestion }) => {
  return (
    <div className="p-4">
      <p className="text-xl font-semibold mb-4">{question.prompt}</p>
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((opt, index) => (
          <button
            key={index}
            className="bg-blue-200 hover:bg-blue-300 p-3 rounded text-lg"
            onClick={() => {
              const correct = opt === question.correctAnswer;
              alert(correct ? "✅ Correct!" : "❌ Try again!");
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoice;
