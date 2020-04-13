import React, { Component, useState, useEffect, useContext } from "react";

const SectionRight = ({description, instructions, example}) => {
    return (
        <section className="section-right">
            <Name/>
            <Instructions description={description} instructions={instructions} example={example}/>
            <Console/>
        </section>
    )
}

const Name = () => {
    return <div className="title">Selector game<span></span></div>
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
                        return <li key={el.id}>{el.bullet.map((el) => {
                            return <span key={el.id} className={el.bold ? "bold" : ""}>{el.text}</span>
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

const Console = () => {
    return (
        <div className="console">
            <div className="console-numbers">1 2 3 4 5 6 7 8 9</div>
            <div className="console-task">
                <InputCode/>
                <OutputCode/>
                <div className="console-buttons">
                    <BtnOutput/>
                    <BtnNext/>
                </div>
            </div>
        </div>
    )
}

const InputCode = () => {
    return <p>Type in your code</p>
}

const OutputCode = () => {
    return <p>Good job! The ghost is gone!</p>
}

const BtnOutput = () => {
    return <div className="btn output-btn">Check</div>
}

const BtnNext = () => {
    return <div className="btn next-btn">Next</div>
}

export default SectionRight;