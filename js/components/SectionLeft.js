import React, { useState, useEffect, useContext } from "react";

import { LevelContext } from "../contexts/LevelContext";
import { CheckContext } from "../contexts/CheckContext";

// SECTION LEFT
const SectionLeft = ({datasetLength, level, elements}) => {
    return (
        <section className="section-left">
            <Counter datasetLength={datasetLength} level={level}/>
            <Game elements={elements}/>
        </section>
    )
}

const Counter = ({datasetLength, level}) => {
    const {handlePrevBtn, handleNextBtn} = useContext(LevelContext);
    const {handleUnCheck} = useContext(CheckContext);

    return (
        <div className="counter">
            <div id="counter-prev" onClick={() => {
                handlePrevBtn();
                handleUnCheck();
            }}></div>
            <div id="counter-level">Level {level} of {datasetLength}</div>
            <div id="counter-next" onClick={() => {
                handleNextBtn();
                handleUnCheck();
            }}></div>
        </div>
    )
}

const Game = ({elements}) => {
    const [isHovering, setIsHovering] = useState(null);

    const handleMouseHover = (key) => {
        setIsHovering(key);
    }

    const handleMouseHoverLeave = () => {
        setIsHovering(null);
    }


    return (
        <>
            <div className="game">
                {elements.map((monster) => {
                    return (
                        <>
                            <div key={monster.id} className={`element ${monster.class}`} onMouseOver={() => handleMouseHover(monster.id)} onMouseLeave={handleMouseHoverLeave}>
                                {isHovering === monster.id && <Tooltip tooltip={monster.tooltip} />}
                            </div>
                        </>
                    )
                })}
            </div>
            <h4 className="game-hint">Hover the element to peek its HTML structure.
            <span>* Icons made by Smashicons from flaticon.com</span></h4>
        </>
    )
}

const Tooltip = ({tooltip}) => {
    return <div className={"tooltip"}>{tooltip}</div>
}

export default SectionLeft;