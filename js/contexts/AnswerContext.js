import React, { createContext, useState } from 'react';

export const AnswerContext = createContext();

const AnswerContextProvider = (props) => {
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    return (
        <AnswerContext.Provider value={{userAnswer, isCorrect}}>
            {props.children}
        </AnswerContext.Provider>
    )
}

export default AnswerContextProvider;