import React, { createContext, useState, useEffect } from 'react';

export const LevelContext = createContext();

const LevelContextProvider = (props) => {
    const [counter, setCounter] = useState(() => {
        const localData = localStorage.getItem('currentLevel');
        return localData ? JSON.parse(localData) : 0;
    });

    useEffect(() => {
        clearTimeout(timeout); 
        localStorage.setItem('currentLevel', JSON.stringify(counter));
        let timeout = setTimeout(() => {
            localStorage.removeItem('currentLevel');
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
        <LevelContext.Provider value={{counter, handlePrevBtn, handleNextBtn}}>
            {props.children}
        </LevelContext.Provider>
    )
}

export default LevelContextProvider;
