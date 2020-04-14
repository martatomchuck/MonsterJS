import React, { Component, useState, useEffect, useContext } from "react";

import SingleElement from './SingleElement';
import { LevelContext } from "../contexts/LevelContext";

// SECTION LEFT
const SectionLeft = ({level, elements}) => {
    return (
        <section className="section-left">
            <Counter level={level}/>
            <Game elements={elements}/>
        </section>
    )
}

const Counter = ({level}) => {
    const {counter, handlePrevBtn, handleNextBtn} = useContext(LevelContext);
    return (
        <div className="counter">
            <div id="counter-prev" onClick={handlePrevBtn}></div>
            <div id="counter-level">Level {level} of 4</div>
            <div id="counter-next" onClick={handleNextBtn}></div>
        </div>
    )
}

const Game = () => {
    return (
        <>
            <div className="game">
                <SingleElement/>
                <SingleElement/>
                <SingleElement/>
                <SingleElement/>
                <SingleElement/>
                <SingleElement/>
                <SingleElement/>
                <SingleElement/>
                <SingleElement/>
            </div>
            <h4 className="game-hint">Hover the element to peek its HTML structure.</h4>
        </>
    )
}

const Tooltip = () => {
    return 
}

export default SectionLeft;