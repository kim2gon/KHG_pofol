import React, { useState } from "react";
import "../styles/animation8.css";


const Cssanimation8 = () => {
  const [jump, setJump] = useState(false);

  const handleClick = () => {
    setJump(true);
    setTimeout(() => setJump(false), 1000);
  };

  return (
    <div className="dinoanimation">
      <div className="dinocon">
        <div className="grass"></div>
        <div
          className={`content ${jump ? "jump" : ""}`}
          onClick={handleClick}
        >
          <div className="dino-shape-top">
            <div></div>
            <div></div>
          </div>
          <div className="momton">
            <div className="dino">
              <div className="dino-body">
                <div className="dino-eyes">
                  <div></div>
                  <div></div>
                </div>
                <div className="dino-check">
                  <div></div>
                  <div></div>
                </div>
                <div className="dino-sa">
                  <div className="dino-stom"></div>
                  <div className="dino-arm"></div>
                </div>
              </div>
              <div className="dino-foot">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="dino-shape-right">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cssanimation8;
