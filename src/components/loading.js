import React, { useEffect, useState } from 'react';
import '../styles/loadinganimation.css';

const Loading = ({ triggerScroll, onWheel }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (triggerScroll) {
            setIsScrolled(true);
        }
    }, [triggerScroll]);

    return (
        <div
            className={`absolute w-screen h-screen left-0 top-0 loading-wrapper ${isScrolled ? 'scrolled' : ''} ${isScrolled ? 'z-20' : 'z-[99999]'}`}
        >
            <div className="loadingbg">
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="fallingstars">
                    {[...Array(10)].map((_, i) => (
                        <span key={i}></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Loading;