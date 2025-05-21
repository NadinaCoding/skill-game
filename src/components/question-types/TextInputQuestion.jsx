//TexinputQuestion.jsx
const TextInputQuestion = ({ value, onChange, isAnswered }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your answer here..."
        value={value}
        onChange={onChange}
        disabled={isAnswered}
      />
    </div>
  );
};

export default TextInputQuestion;