import React, { Component, useState, useEffect, useContext } from "react";

const SectionRight = () => {
    return (
        <section className="section-right">
            <Name/>
            <Instructions/>
            <Console/>
        </section>
    )
}

const Name = () => {
    return <div className="title">Selector game<span></span></div>
}

const Instructions = () => {
    return (
        <div className="description"></div>
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
    return <p>kod wejściowy</p>
}

const OutputCode = () => {
    return <p>kod wyjściowy</p>
}

const BtnOutput = () => {
    return <div className="btn output-btn">Output</div>
}

const BtnNext = () => {
    return <div className="btn next-btn">Next</div>
}

export default SectionRight;