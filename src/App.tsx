// src/App.tsx

import { useState } from "react";
import MainScreen from "./screens/MainScreen";
import QuestionRenderer from "./components/QuestionRenderer";
import { questions } from "./data/questions";

function App() {
  const [started, setStarted] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {started ? (
        <QuestionRenderer question={questions[0]} />
      ) : (
        <MainScreen
          onStart={() => setStarted(true)}
          onSelectSubject={(subject: string) => {
          setSelectedSubject(subject);
          console.log("Subject selected:", subject);
        }}

        />
      )}
    </div>
  );
}

export default App;

