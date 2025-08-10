import React from 'react';
import '../styles/animation2.css'

const Cssanimation2 = () => {
    return (
        <div className="eggcon">
            <div className="egg-container">
                <div className="egg">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <div className="face">
                            <div className="eyes"></div>
                            <div className="smile"></div>
                            <div className="cheeks"></div>
                            <div className="shine"></div>
                        </div>
                    </ul>
                </div>
                <div className="shadow" id="egg-shadow"></div>
                <div className="heart">
                    <div className="light"></div>
                </div>
                <div className="ghost">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="face">
                        <div className="eyes"></div>
                        <div className="smile"></div>
                        <div className="cheeks"></div>
                    </div>
                </div>
                <div className="shadow" id="ghost-shadow"></div>
            </div>
        </div>
    );
};

export default Cssanimation2;