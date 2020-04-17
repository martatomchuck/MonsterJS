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
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseHover = () => {
        setIsHovering(true);
    }

    const handleMouseHoverLeave = () => {
        setIsHovering(false);
    }

    return (
        <>
            <div className="game">
                {elements.map((monster) => {
                    return (
                        <div>
                            <div key={monster.id} className={`element ${monster.class}`} onMouseOver={handleMouseHover} onMouseLeave={handleMouseHoverLeave}></div>
                            {isHovering && <Tooltip elements={elements}/>}
                        </div>
                    )
                })}
            </div>
            <h4 className="game-hint">Hover the element to peek its HTML structure.</h4>
        </>
    )
}

const Tooltip = () => {

    return (
        <div className={"tooltip"}></div>
    )
}

export default SectionLeft;