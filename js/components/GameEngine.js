import React, { Component, useState, useEffect, useContext } from "react";

import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';
import Welcome from './Welcome';


const GameEngine = ({dataset}) => {
    dataset.map(e => {
        return (
            <div className="container">
                <SectionLeft level={e.level} elements={e.elements}/>
                <SectionRight description={e.task_description} instruction={e.instructions} example={e.example}/>
            </div>
        );
    })

    return (
        <div className="container">
            <SectionLeft/>
            <SectionRight/>
        </div>
    );
 
    return <Welcome/>
}

export default GameEngine;