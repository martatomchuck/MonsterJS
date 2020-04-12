import React, { Component, useState, useEffect, useContext } from "react";

const Welcome = () => {
    return (
        <div className="welcome">
            <a className="welcome-close-btn">close</a>
            <h2>Hello Detective,</h2>
            <h3>Welcome to Monster Village!</h3>
            <p>These friendly little Monsters are harassed by unwelcomed guests.
            Only you can help them to get rid of sinister creatures with your JavaScript superpowers.</p>
            <div className="monsters">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <p><b>RULES: </b>The game will teach you how to find and catch HTML elements using JavaScript functions. 
            Read the instructions carefully and type your code to the console.</p>
            <p>Make the Monster Village a better place! Enjoy.</p>
        </div>
    )
}

export default Welcome;
