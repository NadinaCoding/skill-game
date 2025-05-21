//MultipleChoiceQuestion.jsx
const MultipleChoiceQuestion = ({ options, selectedOption, onOptionSelect, isAnswered }) => {
  return (
    <div className="grid grid-cols-2 gap-3 mb-4">
      {options.map((option) => (
        <button
          key={option}
          className={`p-3 border rounded-md transition-colors ${
            selectedOption === option
              ? 'bg-blue-500 text-white'
              : 'bg-white hover:bg-blue-50'
          } ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => onOptionSelect(option)}
          disabled={isAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestion;