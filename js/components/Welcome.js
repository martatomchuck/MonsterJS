import React, { Component, useState, useEffect, useContext } from "react";

const Welcome = () => {
    return (
        <div className="welcome">
            <a className="welcome-close-btn">close</a>
            <h1>Hello Detective!<br/>
            Welcome to Monster Village</h1>
            <p>These friendly little Monsters have been harassed by unwelcomed guests.<br/>
            Only you can help them to get rid of sinister creatures with your JavaScript superpowers.</p>
            <div className="monsters">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <p><b>LEARNING OBJECTIVES: </b>The game will teach you how to find HTML elements using predefined JavaScript functions. 
            Read the instructions carefully and type your code to the console. Enjoy it.</p>
            <p><b>PREREQUISITES: </b>For all JavaScript learners. Familiarity with the basics of HTML and JavaScript fundamentals is a plus but not required.</p>
            <h3>Make the Monster Village a better place.</h3>
        </div>
    )
}

export default Welcome;
