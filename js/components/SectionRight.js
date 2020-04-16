import React, { useState, useEffect, useContext, useReducer  } from "react";

import { LevelContext } from '../contexts/LevelContext';
import { AnswerContext } from "../contexts/AnswerContext";

const SectionRight = ({description, instructions, example, defaultInput, expectedInput}) => {
    return (
        <section className="section-right">
            <Name/>
            <Instructions description={description} instructions={instructions} example={example}/>
            <Console defaultInput={defaultInput} expectedInput={expectedInput}/>
            <div className="console-buttons">
                <BtnNext/>
            </div>
        </section>
    )
}

const Name = () => {
    return <div className="title">Selector game</div>
}

const Instructions = ({description, instructions, example}) => {
    return (
        <div className="description">
                {description.map((el) => {
                    return <span key={el.id} className={el.bold ? "bold" : ""}>{el.text}</span>
                })} 

                <ol>
                    {instructions.map((el) => {
                        return <li key={el.id}>{el.bullet.map((el2) => {
                            return <span key={el2.id} className={el2.bold ? "bold" : ""}>{el2.text}</span>
                        })}</li>
                    })}
                </ol>

                {example.map((el) => {
                    return <span key={el.id} className={el.bold ? "bold" : ""}>{el.text}</span>
                })}
        </div>
    )
}

const Console = ({defaultInput, expectedInput}) => {
    const [answerSubmit, setAnswerSubmit] = useState(false);
    const handleCheck = () => {
        setAnswerSubmit(true);
    }
    return answerSubmit ? (
        <div className="console">
            <div className="console-numbers">1 2 3 4 5 6 7 8 9</div>
            <div className="console-task">
                <InputCode defaultInput={defaultInput}/>
                <OutputCode expectedInput={expectedInput}/>
                <div className="console-buttons">
                    <BtnOutput handleCheck={handleCheck}/>
                </div>
            </div>
        </div> ) : (
        <div className="console">
            <div className="console-numbers">1 2 3 4 5 6 7 8 9</div>
            <div className="console-task">
                <InputCode defaultInput={defaultInput}/>
                <div className="console-buttons">
                    <BtnOutput handleCheck={handleCheck}/>
                </div>
            </div>
        </div>
    )
}

const InputCode = ({defaultInput, handleCheck}) => {
    const [userAnswer, setUserAnswer] = useState("");

    return (
        <div>
            <p>{defaultInput}</p> 
            <p>Type in your code</p>
        </div>
    )
}

const OutputCode = () => {
    const {isCorrect} = useContext(AnswerContext);
    return <p className={"output"} style={isCorrect ? {backgroundColor: "#278654"} : {backgroundColor: "red"}}>{isCorrect ? "Good job! The creature is gone!" : "Sorry, incorrect result. Try again."}</p>
}

const BtnOutput = ({handleCheck}) => {
    return (
        <div className="btn output-btn" onClick={handleCheck}>Check</div>
    )
}

const BtnNext = () => {
    const {handleNextBtn} = useContext(LevelContext);
    return <div className="btn next-btn" onClick={handleNextBtn}>Next</div>
}

export default SectionRight;