import React, { createContext, useState } from 'react';

export const LevelContext = createContext();

const LevelContextProvider = (props) => {
    const [counter, setCounter] = useState(0);

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
        <LevelContext.Provider value={{counter, handlePrevBtn: handlePrevBtn, handleNextBtn: handleNextBtn}}>
            {props.children}
        </LevelContext.Provider>
    )
}

export default LevelContextProvider;
