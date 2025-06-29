const SkillDisplay = ({ name, years }) => {
  return (
    <div className="flex justify-between items-center my-2 bg-gray-700 text-white p-4 rounded-lg shadow-md">
      <span className="font-medium text-lg">{name}</span>
      <span className="text-gray-300">{years} Years of Experience</span>
    </div>
  );
};

export default SkillDisplay;