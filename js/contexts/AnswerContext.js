import React, { createContext, useState, useContext } from 'react';
import { LevelContext } from './LevelContext';

export const AnswerContext = createContext();

const AnswerContextProvider = (props) => {
    const [isCorrect, setIsCorrect] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const {counter} = useContext(LevelContext);

    const verifyAnswer = (answer) => {
        // console.log(answer);
        // console.log(props.dataset[counter].expected_input);
        if (props.dataset[counter].expected_input.includes(answer)) {
            setIsCorrect(true);
        } else {setIsCorrect(false)}
    }

    const clearAnswer = () => {
        setIsCorrect(false);
    }

    // CLEARING THE INPUT VALUE part 1
    const clearInputValue = () => {
        setIsClicked(!isClicked);
    }


    return (
        <AnswerContext.Provider value={{isCorrect, verifyAnswer, clearAnswer, clearInputValue, isClicked}}>
            {props.children}
        </AnswerContext.Provider>
    )
}

export default AnswerContextProvider;