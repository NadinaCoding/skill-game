type SubjectStatsProps = {
  subject: string;
  correctAnswers: number;
  totalQuestions: number;
  lastWeekPercentage: number;
};

const SubjectStat = ({
  subject,
  correctAnswers,
  totalQuestions,
  lastWeekPercentage,
}: SubjectStatsProps) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const difference = percentage - lastWeekPercentage;
  const diffText =
    difference > 0 ? `+${difference}% 📈` : `${difference}% 📉`;

  return (
    <div className="bg-white p-4 rounded-lg shadow text-center">
      <h3 className="text-lg font-bold text-gray-700 mb-2">{subject}</h3>
      <p className="text-xl text-indigo-600 font-semibold">{percentage}% correct</p>
      <p className="text-sm text-gray-500">({diffText} vs last week)</p>
    </div>
  );
};

// Wrap multiple SubjectStat cards
const ProgressStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
      <SubjectStat
        subject="Maths"
        correctAnswers={8}
        totalQuestions={10}
        lastWeekPercentage={70}
      />
      <SubjectStat
        subject="English"
        correctAnswers={6}
        totalQuestions={10}
        lastWeekPercentage={60}
      />
    </div>
  );
};

export default ProgressStats;
