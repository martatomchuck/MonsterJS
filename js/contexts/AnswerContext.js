import React, { createContext, useState, useContext } from 'react';
import dataset from '../data/dataset';
import { LevelContext } from './LevelContext';

export const AnswerContext = createContext();

const AnswerContextProvider = (props) => {
    const [isCorrect, setIsCorrect] = useState(false);

    const {counter} = useContext(LevelContext);

    const verifyAnswer = (answer) => {
        // console.log(answer);
        // console.log(props.dataset[counter].expected_input);
        if (answer == props.dataset[counter].expected_input1 || answer == props.dataset[counter].expected_input2) {
            setIsCorrect(true);
        } else {setIsCorrect(false)}
    }

    const clearAnswer = () => {
        setIsCorrect(false);
    }

    return (
        <AnswerContext.Provider value={{isCorrect, verifyAnswer, clearAnswer}}>
            {props.children}
        </AnswerContext.Provider>
    )
}

export default AnswerContextProvider;