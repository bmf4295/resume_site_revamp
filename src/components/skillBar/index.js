const SkillBar = ({ name, level }) => (
    <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-lg h-10 dark:bg-gray-700">
            <div 
                className="bg-blue-600 h-10 rounded-lg transition-all duration-500 ease-out flex items-center px-4"
                style={{ width: `${level}%` }}
            >
                <span className="text-white font-medium truncate">{name}</span>
            </div>
        </div>
    </div>
);

export default SkillBar;