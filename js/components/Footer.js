import React, { useState, useContext } from "react";

import { LevelContext } from "../contexts/LevelContext";

const Footer = () => {
    const {closeCounterList} = useContext(LevelContext);

    return (
        <footer className="footer" onClick={closeCounterList}>
            <div className="footer-copyright">
            Created with <div className="footer-heart"></div> by <a href={"https://github.com/mtomchuck"} target={"_blank"}>martatomchuck</a>
            </div>
            <div className="footer-github">
                If you spot any bug or have feedback, please open an isssue on<a href={"https://github.com/mtomchuck/monster-village"} target={"_blank"}>GitHub</a>
            </div>
            <div>Images made by Freepik & Smashicons & Dimitry Miroliubov from flaticon.com</div>
        </footer>
    )
}

export default Footer;