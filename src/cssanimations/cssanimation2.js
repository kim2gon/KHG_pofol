import React from 'react';
import '../styles/animation2.css'

const Cssanimation2 = () => {
    return (
        <div class="eggcon">
            <div class="egg-container">
                <div class="egg">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <div class="face">
                            <div class="eyes"></div>
                            <div class="smile"></div>
                            <div class="cheeks"></div>
                            <div class="shine"></div>
                        </div>
                    </ul>
                </div>
                <div class="shadow" id="egg-shadow"></div>
                <div class="heart">
                    <div class="light"></div>
                </div>
                <div class="ghost">
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
                    <div class="face">
                        <div class="eyes"></div>
                        <div class="smile"></div>
                        <div class="cheeks"></div>
                    </div>
                </div>
                <div class="shadow" id="ghost-shadow"></div>
            </div>
        </div>
    );
};

export default Cssanimation2;