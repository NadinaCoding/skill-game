import { useEffect, useState } from 'react';
import TopicSelection from './components/TopicSelection';
import QuestionContainer from './components/QuestionContainer';
import { loadMathsTopics } from './loadTopics';
import type { Topic } from './types';

function App() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    loadMathsTopics().then(setTopics);
  }, []);

  const handleTopicSelect = (topicName: string) => {
    const topic = topics.find((t) => t.name === topicName);
    if (topic) {
      setSelectedTopic(topic);
      setCurrentQuestionIndex(0);
    }
  };

  const handleNextQuestion = () => {
    if (selectedTopic) {
      const hasNext = currentQuestionIndex < selectedTopic.questions.length - 1;
      if (hasNext) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        alert('Practice complete!');
        setSelectedTopic(null);
      }
    }
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Maths Practice</h1>

      {!selectedTopic ? (
        <TopicSelection topics={topics} onTopicSelect={handleTopicSelect} />
      ) : (
        <QuestionContainer
          questions={selectedTopic.questions}
          currentQuestionIndex={currentQuestionIndex}
          onBackToTopics={handleBackToTopics}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
}

export default App;
