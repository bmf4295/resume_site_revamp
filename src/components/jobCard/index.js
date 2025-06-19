import { useEffect, useRef } from 'react';

const JobCard = ({ title, period, company, responsibilities }) => {
    const cardRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const dot = dotRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        card.classList.remove('invisible');
                        card.classList.add('slide-in-left');
                        dot.classList.remove('invisible');
                        dot.classList.add('slide-in-dot');
                        observer.unobserve(entry.target);
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
        <div data-testid="jobCard" className="mb-8 relative">
            <div 
                ref={dotRef} 
                className="absolute left-8 top-0 -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full border-2 border-blue-500 flex items-center justify-center invisible"
            >
                <i className="fas fa-briefcase text-blue-500"></i>
            </div>
            <div ref={cardRef} className="ml-20 p-6 bg-gray-900 rounded-lg shadow-lg invisible">
                <div className="flex flex-col text-left sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-3">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <span className="text-gray-400 text-sm sm:text-base sm:text-right">{period}</span>
                </div>
                <div className="text-left">
                    <p className="text-gray-300 mb-5">{company}</p>
                    <ul className="list-disc space-y-2 ml-4">
                        {responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-white">
                                {responsibility}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default JobCard;