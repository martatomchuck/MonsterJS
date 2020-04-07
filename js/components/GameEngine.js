import React, { Component, useState, useEffect, useContext } from "react";

import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';

const GameEngine = ({ dataset }) => {

    return (
        <div className="container">
            <SectionLeft/>
            <SectionRight/>
        </div>
    )
}

export default GameEngine;