import React, { useState, useContext } from "react";

import { LevelContext } from "../contexts/LevelContext";
import { CheckContext } from "../contexts/CheckContext";
import { AnswerContext } from "../contexts/AnswerContext";
import dataset from "../data/dataset";

const Header = ({datasetLength, level, levelId}) => {
    return (
        <header className={"header"}>
            <div className={"header-title"}>MonsterJS</div>
            <Counter datasetLength={datasetLength} level={level} levelId={levelId}/>
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

    const [counterList, setCounterList] = useState();

    return (
        <>
            <div className="counter">
                <div id="counter-prev" onClick={() => {
                    handlePrevBtn();
                    handleUnCheck();
                    clearAnswer();
                    handleClick();
                }}></div>
                <div id="counter-level" onClick={() => {
                    setCounterList(!counterList)
                }}>Level {level} of {datasetLength}</div>
                <div id="counter-next" onClick={() => {
                    handleNextBtn();
                    handleUnCheck();
                    clearAnswer();
                    handleClick();
                }}></div>
            </div>
            <CounterList counterList={counterList} level={level} datasetLength={datasetLength}/>
        </>
    )
}

const CounterList = ({counterList, level, datasetLength}) => {

    console.log(counterList);

    return (
        <div className={counterList ? "counter-list" : "counter-list-none"}>
            <div className="counter-list-elements">
                <div className="counter-list-el">1</div>
            </div>
            <div className="counter-reset">Zacznij od początku</div>
        </div>
    )
}

export default Header;