import React, { useState, useEffect, useContext } from "react";

import { LevelContext } from "../contexts/LevelContext";
import { CheckContext } from "../contexts/CheckContext";
import { AnswerContext } from "../contexts/AnswerContext";

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
    const {clearAnswer, handleClick} = useContext(AnswerContext);

    return (
        <div className="counter">
            <div id="counter-prev" onClick={() => {
                handlePrevBtn();
                handleUnCheck();
                clearAnswer();
                handleClick();
            }}></div>
            <div id="counter-level">Level {level} of {datasetLength}</div>
            <div id="counter-next" onClick={() => {
                handleNextBtn();
                handleUnCheck();
                clearAnswer();
                handleClick();
            }}></div>
        </div>
    )
}

const Game = ({elements}) => {
    const [isHovering, setIsHovering] = useState(null);

    const handleMouseHover = (id) => {
        setIsHovering(id);
    }

    const handleMouseHoverLeave = () => {
        setIsHovering(null);
    }

    const {isCorrect} = useContext(AnswerContext);

    return (
        <>
            <div className="game">
                {elements.map((monster) => {
                    return (
                        <>
                            <div key={monster.id} className={`element ${monster.class}`} style={isCorrect && monster.disappear ? {display: "none"} : {display: "block"}} onMouseOver={() => handleMouseHover(monster.id)} onMouseLeave={handleMouseHoverLeave}>
                                {isHovering === monster.id && <Tooltip tooltip={monster.tooltip} />}
                            </div>
                        </>
                    )
                })}
            </div>
            <h4 className="game-hint">Hover or tap the element to peek its HTML structure.
            <span>Designed with <div></div> by <a href={"https://github.com/mtomchuck"} target={"_blank"}>mtomchuck</a> &bull; <a href={"https://github.com/mtomchuck/monster-village"} target={"_blank"}>GitHub</a></span>
            <span>Images made by Freepik & Smashicons & Dimitry Miroliubov from flaticon.com</span></h4>
        </>
    )
}

const Tooltip = ({tooltip}) => {
    return <div className={"tooltip"}>{tooltip}</div>
}

export default SectionLeft;