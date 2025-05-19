import SubjectButton from "../components/SubjectButton";
import ProgressStats from "../components/ProgressStats";

type MainScreenProps = {
  onStart: () => void;
  onSelectSubject: (subject: string) => void;
};

const MainScreen = ({ onStart, onSelectSubject }: MainScreenProps) => {
  const subjects = ["Maths", "English", "Latvian", "Reading", "Science"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-100 p-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mt-6 mb-8 drop-shadow-sm">
        🎓 BrainBoost
      </h1>

      {/* Start Button */}
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-8 text-xl rounded-full shadow-lg transition mb-10"
        onClick={onStart}
      >
        🚀 Start Today’s Mixed Questions
      </button>

      {/* Subject Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full max-w-2xl mb-12">
        {subjects.map((subject) => (
          <SubjectButton
            key={subject}
            subject={subject}
            onClick={onSelectSubject}
          />
        ))}
      </div>

      {/* Progress Section */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 mb-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">📊 Progress Stats</h2>
        <ProgressStats />
      </div>

      {/* Footer */}
      <footer className="mt-auto text-sm text-gray-400 pt-6">
        Made with ❤️ by your family
      </footer>
    </div>
  );
};

export default MainScreen;
