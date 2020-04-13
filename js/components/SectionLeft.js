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

const Counter = (props) => {
    // return (
    //     <LevelContext.Consumer>{(context) => {
    //         const {level, handlePrevButton, handleNextButton} = context;
    //         return (
    //             <div className="counter">
    //                 <div id="counter-prev" onClick={handlePrevButton}></div>
    //                 <div id="counter-level">Level {level} of 10</div>
    //                 <div id="counter-next" onClick={handleNextButton}></div>
    //             </div>
    //         )
    //     }}</LevelContext.Consumer>
    // )
    return (
        <div className="counter">
            <div id="counter-prev"></div>
            <div id="counter-level">Level {props.level} of 10</div>
            <div id="counter-next"></div>
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