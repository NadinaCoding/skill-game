//FeedbackMessage.jsx
const FeedbackMessage = ({ isCorrect, message }) => {
  return (
    <div className={`p-3 rounded-md mb-4 ${
      isCorrect 
        ? 'bg-green-100 text-green-800'
        : 'bg-red-100 text-red-800'
    }`}>
      {message}
    </div>
  );
};

export default FeedbackMessage;