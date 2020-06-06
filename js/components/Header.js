import React, { useState, useContext } from "react";

import { LevelContext } from "../contexts/LevelContext";
import { CheckContext } from "../contexts/CheckContext";
import { AnswerContext } from "../contexts/AnswerContext";

const Header = ({datasetLength, level}) => {
    return (
        <header className={"header"}>
            <div className={"header-title"}>MonsterJS</div>
            <Counter datasetLength={datasetLength} level={level}/>
            <div className={"header-share"}>Share</div>
        </header>
    )
}

const Counter = ({datasetLength, level}) => {
    const {handlePrevBtn, handleNextBtn} = useContext(LevelContext);
    const {handleUnCheck} = useContext(CheckContext);
    const {clearAnswer, handleClick} = useContext(AnswerContext);

    return (
        <div className="counter">
            <div id="counter-prev" onClick={() => {
                handlePrevBtn();
                handleUnCheck();
                clearAnswer();
                handleClick();
            }}></div>
            <div id="counter-level">Level {level} of {datasetLength}</div>
            <div id="counter-next" onClick={() => {
                handleNextBtn();
                handleUnCheck();
                clearAnswer();
                handleClick();
            }}></div>
        </div>
    )
}

export default Header;