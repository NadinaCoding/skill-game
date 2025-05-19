type SubjectButtonProps = {
  subject: string;
  onClick?: (subject: string) => void;
};

const SubjectButton = ({ subject, onClick }: SubjectButtonProps) => {
  return (
    <button
      className="bg-yellow-300 hover:bg-yellow-400 text-indigo-900 text-lg font-semibold py-4 px-6 rounded-xl shadow-md transition-all"
      onClick={() => onClick?.(subject)}
    >
      {subject}
    </button>
  );
};

export default SubjectButton;
