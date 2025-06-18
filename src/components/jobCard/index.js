import { useEffect, useRef } from 'react';

const JobCard = ({ title, period, company, responsibilities }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        card.classList.remove('invisible');
                        card.classList.add('slide-in-left');
                        observer.unobserve(card);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (card) {
            observer.observe(card);
        }

        return () => {
            if (card) {
                observer.unobserve(card);
            }
        };
    }, []);

    return (
        <div ref={cardRef} className="mb-8 relative invisible">
            <div className="absolute left-8 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <i className="fas fa-briefcase text-blue-500"></i>
            </div>
            <div className="ml-20 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold dark:text-white">{title}</h3>
                    <span className="text-gray-600 dark:text-gray-400">{period}</span>
                </div>
                <div className=" text-left mb-5">
                    <p className="text-gray-500 dark:text-gray-300">{company}</p>
                </div>
                <ul className="list-disc space-y-2 ml-4">
                    {responsibilities.map((responsibility, index) => (
                        <li key={index} className="dark:text-white text-left pl-2">
                            {responsibility}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default JobCard;