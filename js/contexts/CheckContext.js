import React, { createContext, useState } from 'react';

export const CheckContext = createContext();

const CheckContextProvider = (props) => {
    
    const [answerSubmit, setAnswerSubmit] = useState(false);

    // TRIGGERING OUTPUT MESSAGE
    const handleCheck = () => {
        setAnswerSubmit(true);
    }

    // CLEARING THE OUTPUT MESSAGE
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