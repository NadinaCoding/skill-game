import React from 'react';

const SelectFromTextQuestion = ({ sentence, selectableParts, selectedPart, onSelect, isAnswered, correctAnswer }) => {
  const renderSentence = () => {
    return sentence.map((part, index) => {
      const isSelectable = selectableParts.includes(index);
      const isSelected = selectedPart === index;
      const isCorrect = correctAnswer === index;

      if (!isSelectable) {
        return <span key={index}>{part} </span>;
      }

      let className = "inline mx-1 px-2 py-1 rounded-md transition-colors ";

      if (isAnswered) {
        if (isSelected && isCorrect) {
          className += "bg-green-500 text-white";
        } else if (isSelected && !isCorrect) {
          className += "bg-red-500 text-white";
        } else if (isCorrect) {
          className += "bg-green-200 text-green-800 font-semibold";
        } else {
          className += "bg-yellow-100";
        }
      } else {
        className += isSelected ? "bg-blue-500 text-white" : "bg-yellow-100 hover:bg-yellow-200";
      }

      return (
        <button
          key={index}
          className={className}
          onClick={() => !isAnswered && onSelect(index)}
          disabled={isAnswered}
        >
          {part}
        </button>
      );
    });
  };

  return <div className="mb-4 text-lg leading-relaxed">{renderSentence()}</div>;
};

export default SelectFromTextQuestion;
