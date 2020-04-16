import React, { createContext, useState } from 'react';

export const CheckContext = createContext();

const CheckContextProvider = (props) => {
    
    const [answerSubmit, setAnswerSubmit] = useState(false);

    const handleCheck = () => {
        setAnswerSubmit(true);
    }

    const handleUnCheck = () => {
        setAnswerSubmit(false);
    }

    return (
        <CheckContext.Provider value={{answerSubmit, handleCheck, handleUnCheck}}>
            {props.children}
        </CheckContext.Provider>
    )
}

export default CheckContextProvider;