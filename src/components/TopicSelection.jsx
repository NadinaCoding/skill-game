//TopicSelection.jsx
import { useState } from 'react';

const TopicSelection = ({ topics, onTopicSelect }) => {
  const [selectedTopic, setSelectedTopic] = useState("");
  
  const handleChange = (e) => {
  console.log("Selected topic value:", e.target.value);
  setSelectedTopic(e.target.value);
};

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTopic) {
      onTopicSelect(selectedTopic);
    }
  };
  
  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select a topic to practice:
        </label>
        <select 
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={handleChange}
          value={selectedTopic}
          required
        >
          <option value="">-- Select Topic --</option>
          {topics
          .filter((topic) => topic && topic.name) // filter out invalid entries
          .map((topic) => (
            <option key={topic.name} value={topic.name}>
              {topic.name} {topic.level ? `(Level ${topic.level})` : ""}
            </option>
        ))}
        </select>
        <button 
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md disabled:bg-blue-300"
          disabled={!selectedTopic}
        >
          Start Practice
        </button>
      </form>
    </div>
  );
};

export default TopicSelection;