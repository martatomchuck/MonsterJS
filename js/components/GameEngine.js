import React, { useState, useEffect, useContext } from "react";

import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';
import Welcome from './Welcome';
import { LevelContext } from "../contexts/LevelContext";


const GameEngine = ({dataset}) => {
    const {counter} = useContext(LevelContext);

    const datasetLength = dataset.length;

    return (
        <div className="container">
            <SectionLeft datasetLength={datasetLength} level={dataset[counter].level} elements={dataset[counter].elements}/>
            <SectionRight description={dataset[counter].task_description} instructions={dataset[counter].instructions} example={dataset[counter].example} expectedInput={dataset[counter].expected_input}/>
        </div>
    );
}

export default GameEngine;