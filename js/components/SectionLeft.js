import React, { useState, useContext, useEffect } from "react";
import { AnswerContext } from "../contexts/AnswerContext";

// SECTION LEFT
const SectionLeft = ({task, elements}) => {
    return (
        <section className="section-left">
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

const Tooltip = ({tooltip}) => {

    return (
        <div className="tooltip">
            <span>{tooltip.start}</span>

            {/* Tag name */}
            <span style={{color: "#ff2e63", fontWeight: "600"}}>{tooltip.tag} </span>   

            {/* For attribute */}
            {tooltip.for && <span>for = </span>}
            <span style={{color: "#9BDEAC", fontWeight: "600"}}> {tooltip.for} </span>

            {/* From attribute */}
            {tooltip.from && <span>from = </span>}
            <span style={{color: "#9BDEAC", fontWeight: "600"}}> {tooltip.from} </span>

            {/* Class */}
            {tooltip.class && <span>class = </span>}
            <span style={{color: "#ff9d9d", fontWeight: "600"}}> {tooltip.class} </span>

            {/* Id */}
            {tooltip.id && <span>id = </span>}
            <span style={{color: "#ffb921", fontWeight: "600"}}> {tooltip.id} </span>

            <span>{tooltip.end}</span>

            <br/>
            <span style={{display: "inline-block", marginLeft: "15px"}}> {tooltip.innertext} </span>
            <br/>

            <span>{tooltip.start}/ </span>
            <span style={{color: "#ff2e63", fontWeight: "600"}}>{tooltip.tag} </span>
            <span>{tooltip.end}</span>
            
        </div>
    )
}

export default SectionLeft;