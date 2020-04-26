import React, { createContext, useState, useEffect } from 'react';

export const LevelContext = createContext();

const LevelContextProvider = (props) => {
    const [counter, setCounter] = useState(localStorage.getItem('currentLevel'));

    useEffect(() => {
        localStorage.setItem('currentLevel', JSON.stringify(counter))
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
        <LevelContext.Provider value={{counter, handlePrevBtn, handleNextBtn}}>
            {props.children}
        </LevelContext.Provider>
    )
}

export default LevelContextProvider;
