const JobCard = ({ title, period, company, responsibilities }) => {
    return (
        <div className="mb-8 relative">
            <div className="absolute left-8 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <i className="fas fa-briefcase text-blue-500"></i>
            </div>
            <div className="ml-20 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                {/* Title row with job title and duration */}
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold dark:text-white">{title}</h3>
                    <span className="text-gray-600 dark:text-gray-400">{period}</span>
                </div>
                
                {/* Company name row - increased spacing */}
                <div className="mb-5">
                    <p className="text-gray-500 dark:text-gray-300 text-left">{company}</p>
                </div>
                
                {/* Responsibilities list */}
                <ul className="list-disc space-y-2 ml-4">
                    {responsibilities.map((responsibility, index) => (
                        <li key={index} className="dark:text-white">
                            {responsibility}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default JobCard;