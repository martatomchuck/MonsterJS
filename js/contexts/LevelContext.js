import React, { createContext, useState, useEffect } from 'react';

export const LevelContext = createContext();

const LevelContextProvider = (props) => {
    const [counter, setCounter] = useState(() => {
        const localData = localStorage.getItem('currentLevel');
        return localData ? JSON.parse(localData) : 0;
    });

    // opening and closing counter list
    const [counterList, setCounterList] = useState();

    const closeCounterList = () => {
        if (counterList === true) {
            setCounterList(!counterList);
        }
    }

    useEffect(() => {
        clearTimeout(timeout); 
        localStorage.setItem('currentLevel', JSON.stringify(counter));
        let timeout = setTimeout(() => {
            // localStorage.removeItem('currentLevel');
            localStorage.clear();
        }, 1000*60*60*12);
    }, [counter]);

    const handlePrevBtn = () => {
        if (counter === 0) {
            setCounter(0);
        } else {
        setCounter(counter-1);
        }
    }
    
    const handleNextBtn = () => {
        if (counter === props.dataset.length-1) {
            setCounter(props.dataset.length-1)
        } else {
        setCounter(counter+1);
        }
    }

    return (
        <LevelContext.Provider value={{counter, setCounter, counterList, setCounterList, closeCounterList, handlePrevBtn, handleNextBtn}}>
            {props.children}
        </LevelContext.Provider>
    )
}

export default LevelContextProvider;
