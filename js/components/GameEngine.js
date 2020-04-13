import React, { Component, useState, useEffect, useContext } from "react";

import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';
import Welcome from './Welcome';
import { LevelContext } from "../contexts/LevelContext";


const GameEngine = ({dataset}) => {

    return (
        <div className="container">
            <SectionLeft level={dataset[0].level} elements={dataset[0].elements}/>
            <SectionRight description={dataset[0].task_description} instructions={dataset[0].instructions} example={dataset[0].example}/>
        </div>
    );
}

export default GameEngine;