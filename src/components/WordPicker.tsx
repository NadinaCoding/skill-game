// src/components/WordPicker.tsx
import { WordPickerQuestion } from "../data/questions";
import { useState } from "react";

const WordPicker = ({ question }: { question: WordPickerQuestion }) => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (i: number) => {
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const checkAnswers = () => {
    const correctIndexes = question.words
      .map((w, i) => (w.isCorrect ? i : null))
      .filter((v) => v !== null);
    const isCorrect =
      correctIndexes.length === selected.length &&
      selected.every((i) => correctIndexes.includes(i));
    alert(isCorrect ? "✅ Good job!" : "❌ Try again!");
  };

  return (
    <div className="p-4">
      <p className="text-xl font-semibold mb-4">{question.prompt}</p>
      <div className="flex flex-wrap gap-2">
        {question.words.map((word, i: number) => (
          <button
            key={i}
            onClick={() => toggleSelect(i)}
            className={`px-3 py-1 rounded border ${
              selected.includes(i)
                ? "bg-green-300 border-green-600"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            {word.text}
          </button>
        ))}
      </div>
      <button
        onClick={checkAnswers}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Check Answer
      </button>
    </div>
  );
};

export default WordPicker;
