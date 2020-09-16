import React, { useState, useContext, useEffect } from "react";

import { AnswerContext } from "../contexts/AnswerContext";
import { LevelContext } from "../contexts/LevelContext";

import Tooltip from '../components/Tooltip';

// SECTION LEFT
const SectionLeft = ({task, elements}) => {
    const {closeCounterList} = useContext(LevelContext);
    
    return (
        <section className="section-left" onClick={closeCounterList}>
            <Task task={task}/>
            <Game elements={elements}/>
        </section>
    )
}

const Task = ({task}) => {
    return (
        <div className="task">
            {task.map((el) => {
                return <span key={el.id} className={el.bold ? "bold" : ""}>{el.text}</span>
            })}
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
            <h4 className="game-hint">Hover or tap the element to peek its HTML structure.</h4>
        </>
    )
}


export default SectionLeft;