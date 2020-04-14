import React, { Component, useState, useEffect, useContext } from "react";

import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';
import Welcome from './Welcome';
import { LevelContext } from "../contexts/LevelContext";


const GameEngine = ({dataset}) => {
    const {counter} = useContext(LevelContext);

    // Długość tablicy dataset = liczba leveli w grze
    useEffect(() => {
        console.log('dataset', dataset.length);
    })

    return (
        <div className="container">
            <SectionLeft level={dataset[counter].level} elements={dataset[counter].elements}/>
            <SectionRight description={dataset[counter].task_description} instructions={dataset[counter].instructions} example={dataset[counter].example} defaultInput={dataset[counter].default_input} expectedInput={dataset[counter].expected_input}/>
        </div>
    );
}

export default GameEngine;