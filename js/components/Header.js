import React, { useState, useContext, Fragment } from "react";

import { LevelContext } from "../contexts/LevelContext";
import { CheckContext } from "../contexts/CheckContext";
import { AnswerContext } from "../contexts/AnswerContext";
// import dataset from "../data/dataset";

const Header = ({datasetLength, level, levelId}) => {
    return (
        <header className="header">
            <div className="header-title">MonsterJS</div>
            <Counter datasetLength={datasetLength} level={level} levelId={levelId}/>
            <div className="header-share">
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

    const pushPrevConsoleBtn = () => {
        handlePrevBtn();
        handleUnCheck();
        clearAnswer();
        handleClick();
    }
    const pushNextConsoleBtn = () => {
        handleNextBtn();
        handleUnCheck();
        clearAnswer();
        handleClick();
    }

    const toggleCounterList = () => {
        setCounterList(!counterList);
    }

    return (
        <div>
            <div className="counter" >
                <div id="counter-prev" onClick={pushPrevConsoleBtn}></div>
                <div id="counter-level" onClick={toggleCounterList}>Level {level} of {datasetLength}</div>
                <div id="counter-next" onClick={pushNextConsoleBtn}></div>
            </div>
            <CounterList toggleCounterList={toggleCounterList} counterList={counterList} level={level} datasetLength={datasetLength}/>
        </div>
    )
}

const CounterList = ({toggleCounterList, counterList, level, datasetLength}) => {

    const {setCounter} = useContext(LevelContext);

    const levelNumbers = [];
    for (let i = 1; i <= datasetLength; i++) {
        levelNumbers.push(i);
    }

    const changeLevel = (nb) => {
        setCounter(nb-1);
        toggleCounterList();
    }

    const resetLevel = () => {
        setCounter(0);
        toggleCounterList();
    }

    return (
        <div className={counterList ? "counter-list" : "counter-list-none"}>
            <div className="counter-list-elements">
                { levelNumbers.map((nb, i) => <div key={i} onClick={() => changeLevel(nb)} className={i === level-1 ? "counter-list-el-active" : "counter-list-el"}>{nb}</div> )}
            </div>
            <div className="counter-reset" onClick={resetLevel}>Zacznij od początku</div>
        </div>
    )
}

export default Header;