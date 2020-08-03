import React, { useState, useContext } from "react";

import { LevelContext } from "../contexts/LevelContext";
import { CheckContext } from "../contexts/CheckContext";
import { AnswerContext } from "../contexts/AnswerContext";

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
    const {counter, handlePrevBtn, handleNextBtn} = useContext(LevelContext);
    const {handleUnCheck} = useContext(CheckContext);
    const {clearAnswer, clearInputValue} = useContext(AnswerContext);

    const [counterList, setCounterList] = useState();

    const pushPrevConsoleBtn = () => {
        handlePrevBtn();
        handleUnCheck();
        clearAnswer();
        clearInputValue();
    }
    const pushNextConsoleBtn = () => {
        handleNextBtn();
        handleUnCheck();
        clearAnswer();
        clearInputValue();
    }

    const toggleCounterList = () => {
        setCounterList(!counterList);
    }

    return (
        <div>
            <div className="counter" >
                <div id="counter-prev" onClick={pushPrevConsoleBtn} style={{backgroundColor: counter === 0 ? "#ff9d9d9d" : "#ff9d9d"}}></div>
                <div id="counter-level" onClick={toggleCounterList}>Level {level} of {datasetLength}</div>
                <div id="counter-next" onClick={pushNextConsoleBtn} style={{backgroundColor: counter === datasetLength-1 ? "#ff9d9d9d" : "#ff9d9d"}}></div>
            </div>
            <CounterList toggleCounterList={toggleCounterList} counterList={counterList} level={level} datasetLength={datasetLength}/>
        </div>
    )
}

const CounterList = ({toggleCounterList, counterList, level, datasetLength}) => {

    const {handleUnCheck} = useContext(CheckContext);
    const {clearAnswer, clearInputValue} = useContext(AnswerContext);

    const {setCounter} = useContext(LevelContext);

    const levelNumbers = [];
    for (let i = 1; i <= datasetLength; i++) {
        levelNumbers.push(i);
    }

    const changeLevel = (nb) => {
        setCounter(nb-1);
        toggleCounterList();
        handleUnCheck();
        clearAnswer();
        clearInputValue();
    }

    const resetLevel = () => {
        setCounter(0);
        toggleCounterList();
        handleUnCheck();
        clearAnswer();
        clearInputValue();
    }

    return (
        <div className={counterList ? "counter-list" : "counter-list-none"}>
            <div className="counter-list-elements">
                { levelNumbers.map((nb, i) => <div key={i} onClick={() => changeLevel(nb)} className={i === level-1 ? "counter-list-el-active" : "counter-list-el"}>{nb}</div> )}
            </div>
            <div className="counter-reset" onClick={resetLevel}>Reset progress</div>
        </div>
    )
}

export default Header;