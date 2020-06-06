import React, { useState, useEffect, useContext } from "react";

import Header from './Header';
import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';

import Welcome from './Welcome';

import { LevelContext } from "../contexts/LevelContext";


const GameEngine = ({dataset}) => {
    const {counter} = useContext(LevelContext);

    const datasetLength = dataset.length;

    return (
        <>
            <Header datasetLength={datasetLength} level={dataset[counter].level}/>
            <div className="container">
                <SectionLeft task={dataset[counter].task} elements={dataset[counter].elements}/>
                <SectionRight story={dataset[counter].story} description={dataset[counter].task_description} task={dataset[counter].task} instructions={dataset[counter].instructions} example={dataset[counter].example} />
            </div>
        </>
    );
}

export default GameEngine;