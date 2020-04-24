import React, { useState, useEffect, useContext } from "react";

import { LevelContext } from '../contexts/LevelContext';
import { AnswerContext } from "../contexts/AnswerContext";
import { CheckContext } from "../contexts/CheckContext";

const SectionRight = ({description, instructions, example, expectedInput}) => {

    return (
        <section className="section-right">
            <Name/>
            <Instructions description={description} instructions={instructions} example={example}/>
            <Console expectedInput={expectedInput}/>
            <div className="console-btn">
                <BtnNext/>
            </div>
        </section>
    )
}

const Name = () => {
    return (
        <>
            <div className="title">Monster JS</div>
        </>
    )
}

const Instructions = ({description, instructions, example}) => {
    return (
        <div className="description">
            <div>
                {description.map((el) => {
                    return <span key={el.id} className={el.bold ? "bold" : ""}>{el.text}</span>
                })} 
            </div>

            <div className="description-bullets">
                <ul>
                    {instructions.map((el) => {
                        return <li key={el.id}>{el.bullet.map((el2) => {
                            return <span key={el2.id} className={el2.bold ? "bold" : ""}>{el2.text}</span>
                        })}</li>
                    })}
                </ul>
            </div>

            <div>
                {example.map((el) => {
                    return <span key={el.id} className={el.bold ? "bold" : ""}>{el.text}</span>
                })}
            </div>
        </div>
    )
}

const Console = ({expectedInput}) => {
    const {answerSubmit} = useContext(CheckContext);

    return (
        <div className="console">
            <div className="console-numbers">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </div>
            <div className="console-task">
                <div> 
                    <InputCode/>
                </div>
                {
                    answerSubmit &&
                    <OutputCode expectedInput={expectedInput}/>
                }
            </div>
        </div>
    )
}

const InputCode = () => {
    const {handleCheck, handleUnCheck} = useContext(CheckContext);
    const {verifyAnswer, clearAnswer, isClicked, handleClick} = useContext(AnswerContext);

    const [answer, setAnswer] = useState("");
     
    const handleSubmit = (e) => {
        e.preventDefault();
        handleCheck();
        verifyAnswer(answer.trim());
    }

    if (isClicked && answer !== "") {
        // console.log("clicked", isClicked);
        setAnswer("");
        handleClick();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="console-userinput">
                <label>const enemy = document. </label>
                <input type="text" spellCheck="false" placeholder="Type in your code" value={answer} onChange={(e) => setAnswer(e.target.value)} onClick={() => {handleUnCheck(); clearAnswer(answer);}} />
            </div>

            <input type="submit" className="btn check-btn" value="Check"></input>
        </form>
    );
}

const OutputCode = () => {
    const {isCorrect} = useContext(AnswerContext);

    return (
        <div className={"console-output"} style={isCorrect ? {backgroundColor: "#388e3c"} : {backgroundColor: "#DB0049"}}>{isCorrect ? "Good job! The Monster Village is safe now! You can move to the next level." : "Sorry, incorrect result. Correct your answer or try again."}</div>
    )
}

const BtnNext = () => {
    const {handleNextBtn} = useContext(LevelContext);
    const {handleUnCheck} = useContext(CheckContext);
    const {clearAnswer, handleClick} = useContext(AnswerContext);

    return <div className="btn next-btn" onClick={() => {
        handleNextBtn();
        handleUnCheck();
        clearAnswer();
        handleClick();
    }}>Next</div>
}

export default SectionRight;