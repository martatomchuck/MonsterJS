import React, { useState, useContext } from "react";

import { LevelContext } from "../contexts/LevelContext";
import { CheckContext } from "../contexts/CheckContext";
import { AnswerContext } from "../contexts/AnswerContext";

const Header = ({datasetLength, level, levelId}) => {
    const {closeCounterList} = useContext(LevelContext);

    return (
        <header className="header" onClick={closeCounterList}>
            <div className="header-title">MonsterJS</div>
            <Counter datasetLength={datasetLength} level={level} levelId={levelId}/>
            <div className="header-action">
                <a className="github-button" href="https://github.com/martatomchuck/MonsterJS" data-color-scheme="no-preference: light_high_contrast; light: light_high_contrast; dark: light_high_contrast;" rel="noopener" target="_blank" data-icon="octicon-star" data-size="large" aria-label="Star martatomchuck/MonsterJS on GitHub">Star on GitHub</a>
            </div>
        </header>
    )
}

const Counter = ({datasetLength, level}) => {
    const {counter, counterList, setCounterList, handlePrevBtn, handleNextBtn} = useContext(LevelContext);
    const {handleUnCheck} = useContext(CheckContext);
    const {clearAnswer, clearInputValue} = useContext(AnswerContext);

    // const [counterList, setCounterList] = useState();

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