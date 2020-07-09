import React, { useState, useContext } from "react";

import { LevelContext } from "../contexts/LevelContext";
import { CheckContext } from "../contexts/CheckContext";
import { AnswerContext } from "../contexts/AnswerContext";

const Header = ({datasetLength, level}) => {
    return (
        <header className={"header"}>
            <div className={"header-title"}>MonsterJS</div>
            <Counter datasetLength={datasetLength} level={level}/>
            <div className={"header-share"}>
                <p>Share</p>
                <a type="twitter" href="https://twitter.com/intent/tweet?url=http://monsterjs.com&text=Learning JavaScript? Check out this game -> &hashtags=javascript,DOM,elements,monsterjs&via=martatomc" target="_blank"><div className="header-twitter"></div></a>
                
                <a type="facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://monsterjs.com/" target="_blank"><div className="header-facebook"></div></a>
            </div>
        </header>
    )
}

const Counter = ({datasetLength, level}) => {
    const {handlePrevBtn, handleNextBtn} = useContext(LevelContext);
    const {handleUnCheck} = useContext(CheckContext);
    const {clearAnswer, handleClick} = useContext(AnswerContext);

    return (
        <>
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
            <div>
                
            </div>
        </>
    )
}

export default Header;