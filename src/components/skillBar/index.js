import { useEffect, useRef } from 'react';

const SkillBar = ({ name, level }) => {
    const barRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const bar = barRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        requestAnimationFrame(() => {
                            bar.style.setProperty('--target-width', `${level}%`);
                            bar.classList.remove('w-0');
                            bar.classList.add('fill-animation');
                            hasAnimated.current = true;
                            observer.unobserve(bar);
                        });
                    }
                });
            },
            { 
                threshold: [0.2, 0.3],
                rootMargin: '-20px 0px',
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
        <div data-testid="skillBar" className="mb-6 w-full">
            <div className="flex justify-between items-center mb-1">
            </div>
            <div className="w-full  rounded-lg h-10 bg-gray-700 overflow-hidden">
                <div 
                    ref={barRef}
                    className="bg-blue-600 h-10 rounded-lg w-0 flex items-center px-4"
                >
                    <span className="text-white font-medium truncate">{name}</span>
                </div>
            </div>
        </div>
    );
};

export default SkillBar;