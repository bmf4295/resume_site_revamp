import { useEffect, useRef } from 'react';

const SkillBar = ({ name, level }) => {
    const barRef = useRef(null);

    useEffect(() => {
        const bar = barRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(() => {
                            bar.style.setProperty('--target-width', `${level}%`);
                            bar.classList.remove('w-0');
                            bar.classList.add('fill-animation');
                        });
                    } else {
                        requestAnimationFrame(() => {
                            bar.classList.remove('fill-animation');
                            bar.classList.add('w-0');
                        });
                    }
                });
            },
            { 
                threshold: [0.1, 0.2], // Multiple thresholds for better mobile detection
                rootMargin: '-20px 0px', // Reduced margin for mobile
            }
        );

        if (bar) {
            observer.observe(bar);
        }

        return () => {
            if (bar) {
                observer.unobserve(bar);
            }
        };
    }, [level]);

    return (
        <div className="mb-6 w-full">
            <div className="flex justify-between items-center mb-1">
            </div>
            <div className="w-full bg-gray-200 rounded-lg h-10 dark:bg-gray-700 overflow-hidden">
                <div 
                    ref={barRef}
                    className="bg-blue-600 h-10 rounded-lg w-0 flex items-center px-4 transition-all duration-1000"
                >
                    <span className="text-white font-medium truncate">{name}</span>
                </div>
            </div>
        </div>
    );
};

export default SkillBar;