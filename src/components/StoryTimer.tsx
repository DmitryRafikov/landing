import React, { useEffect, useState, useRef } from 'react';

interface IStoryTimerProps {
    duration: number;
}

const StoryTimer: React.FC<IStoryTimerProps> = ({ duration }) => {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current?.parentElement;

        if (container) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        if (container.classList.contains('active')) {
                            setProgress(100);
                        } else {
                            setProgress(0);
                        }
                    }
                });
            });

            observer.observe(container, {
                attributes: true,
                attributeFilter: ['class'],
            });

            // Initial check in case the active class is already present
            if (container.classList.contains('active')) {
                setProgress(100);
            }

            return () => {
                observer.disconnect();
            };
        }
    }, [containerRef]);

    useEffect(() => {
        const container = containerRef.current?.parentElement;

        if (container && !container.classList.contains('active')) {
            setProgress(0);
        }
    }, []);

    return (
        <div 
            className="story-pagination"
            ref={containerRef}
        >
            <div
                className="story-pagination-filler"
                style={{
                    width: `${progress}%`,
                    height: '100%',
                    transition: progress === 0 ? 'none' : `width ${duration}ms linear`
                }}
            ></div>
        </div>
    );
};

export default StoryTimer;
