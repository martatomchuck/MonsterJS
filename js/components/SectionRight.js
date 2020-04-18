import React, { useState, useEffect, useContext } from "react";

import { LevelContext } from '../contexts/LevelContext';
import { AnswerContext } from "../contexts/AnswerContext";
import { CheckContext } from "../contexts/CheckContext";

const SectionRight = ({description, instructions, example, defaultInput, expectedInput}) => {

    return (
        <section className="section-right">
            <Name/>
            <Instructions description={description} instructions={instructions} example={example}/>
            <Console defaultInput={defaultInput} expectedInput={expectedInput}/>
            <div className="console-btn">
                <BtnNext/>
            </div>
        </section>
    )
}

const Name = () => {
    return <div className="title">MonsterVillage()</div>
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
    const {answerSubmit} = useContext(CheckContext);

    return (
        <div className="console">
            <div className="console-numbers">1 2 3 4 5 6 7 8 9</div>
            <div className="console-task">
                <div> 
                    <InputCode defaultInput={defaultInput}/>
                </div>
                {
                    answerSubmit &&
                    <OutputCode expectedInput={expectedInput}/>
                }
            </div>
        </div>
    )
}

const InputCode = ({defaultInput}) => {
    const {handleCheck, handleUnCheck} = useContext(CheckContext);
    const {verifyAnswer} = useContext(AnswerContext);

    const [answer, setAnswer] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleCheck();
        verifyAnswer(answer);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="console-userinput">
                <label>{defaultInput}</label>
                <input type="text" placeholder="Type in your code" value={answer} onChange={(e) => setAnswer(e.target.value)} onClick={handleUnCheck} />
            </div>
            <input type="submit" className="btn check-btn" value="Check"></input>
        </form>
    );
}

const OutputCode = () => {
    const {isCorrect} = useContext(AnswerContext);

    return (
        <p className={"console-output"} style={isCorrect ? {backgroundColor: "#F57F00"} : {backgroundColor: "#DB0049"}}>{isCorrect ? "Good job! The Monster Village is safe now!" : "Sorry, incorrect result. Try again."}</p>
    )
}

const BtnNext = () => {
    const {handleNextBtn} = useContext(LevelContext);
    const {handleUnCheck} = useContext(CheckContext);

    return <div className="btn next-btn" onClick={() => {
        handleNextBtn();
        handleUnCheck();
    }}>Next</div>
}

export default SectionRight;