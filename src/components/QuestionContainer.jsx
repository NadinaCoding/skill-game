//QuestionContainer.jsx
import { useState, useEffect } from 'react';
import MultipleChoiceQuestion from './question-types/MultipleChoiceQuestion';
import TextInputQuestion from './question-types/TextInputQuestion';
import FeedbackMessage from './FeedbackMessage';

const QuestionContainer = ({ questions, currentQuestionIndex, onBackToTopics, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const currentQuestion = questions?.[currentQuestionIndex];
  
  // Reset state when question changes
  useEffect(() => {
    resetQuestion();
  }, [currentQuestionIndex]);
  
  const resetQuestion = () => {
    setSelectedOption(null);
    setTextAnswer("");
    setFeedback(null);
    setIsAnswered(false);
  };
  
  const handleOptionSelect = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
    }
  };
  
  const handleTextAnswerChange = (e) => {
    if (!isAnswered) {
      setTextAnswer(e.target.value);
    }
  };
  
  const checkAnswer = () => {
    let isCorrect = false;
    
    if (currentQuestion.type === "multiple-choice") {
      isCorrect = selectedOption === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === "text-input") {
      // Compare as strings and trim whitespace
      isCorrect = textAnswer.trim() === currentQuestion.correctAnswer.toString();
    }
    
    setFeedback({
      isCorrect,
      message: isCorrect ? "Correct! Well done!" : `Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`
    });
    
    setIsAnswered(true);
  };
  
  const isAnswerSelected = () => {
    if (currentQuestion.type === "multiple-choice") {
      return selectedOption !== null;
    } else if (currentQuestion.type === "text-input") {
      return textAnswer.trim() !== "";
    }
    return false;
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button 
          className="text-blue-500 hover:text-blue-700"
          onClick={onBackToTopics}
        >
          ← Back to Topics
        </button>
        <span className="text-sm text-gray-500">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-4">{currentQuestion.prompt}</h2>
        
        {currentQuestion.type === "multiple-choice" && (
          <MultipleChoiceQuestion 
            options={currentQuestion.options}
            selectedOption={selectedOption}
            onOptionSelect={handleOptionSelect}
            isAnswered={isAnswered}
          />
        )}
        
        {currentQuestion.type === "text-input" && (
          <TextInputQuestion 
            value={textAnswer}
            onChange={handleTextAnswerChange}
            isAnswered={isAnswered}
          />
        )}
        
        {feedback && (
          <FeedbackMessage 
            isCorrect={feedback.isCorrect}
            message={feedback.message}
          />
        )}
        
        <div className="flex justify-between">
          {!isAnswered ? (
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md disabled:bg-green-300"
              onClick={checkAnswer}
              disabled={!isAnswerSelected()}
            >
              Check Answer
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              onClick={onNextQuestion}
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;