import React, { useState, useEffect, useContext, useReducer  } from "react";

const SectionRight = ({description, instructions, example, defaultInput, expectedInput}) => {
    return (
        <section className="section-right">
            <Name/>
            <Instructions description={description} instructions={instructions} example={example}/>
            <Console defaultInput={defaultInput} expectedInput={expectedInput}/>
            <div className="console-buttons">
                <BtnOutput/>
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
        <>
            <div className="description">
                {description.map((el) => {
                    return <span key={el.id} className={el.bold ? "bold" : ""}>{el.text}</span>
                })} 
            </div>
            <div className="description">
                <ul>
                    {instructions.map((el) => {
                        return <li key={el.id}>{el.bullet.map((el2) => {
                            return <span key={el2.id} className={el2.bold ? "bold" : ""}>{el2.text}</span>
                        })}</li>
                    })}
                </ul>
            </div>
            <div className="description">
                {example.map((el) => {
                    return <span key={el.id} className={el.bold ? "bold" : ""}>{el.text}</span>
                })}
            </div>
        </>
    )
}

const Console = ({defaultInput, expectedInput}) => {
    return (
        <div className="console">
            <div className="console-numbers">1 2 3 4 5 6 7 8 9</div>
            <div className="console-task">
                <InputCode defaultInput={defaultInput}/>
                <OutputCode expectedInput={expectedInput}/>
            </div>
        </div>
    )
}

const InputCode = ({defaultInput}) => {
    const [userAnswer, setUserAnswer] = useState("");

    return (
        <div>
            <p>{defaultInput}</p> 
            <p>Type in your code</p>
        </div>
    )
}

const OutputCode = () => {
    const [isCorrect, setIsCorrect] = useState(false);

    return <p className={"output"}>{isCorrect ? "Good job! The creature is gone!" : "Sorry, incorrect result. Try again."}</p>
}

const BtnOutput = () => {
    return <div className="btn output-btn">Check</div>
}

const BtnNext = () => {
    return <div className="btn next-btn">Next</div>
}

export default SectionRight;