import React, { useState, useContext } from "react";

import { LevelContext } from "../contexts/LevelContext";

const Footer = () => {
    const {closeCounterList} = useContext(LevelContext);

    return (
        <footer className="footer" onClick={closeCounterList}>
            <div className="footer-copyright">
                Created with 117 cups of
                <div className="footer-coffee-icon"></div>
                by 
                <a 
                    href={"https://github.com/martatomchuck"} 
                    target={"_blank"}
                >martatomchuck</a>
            </div>

            <div className="footer-coffee">
                If you want to support my creativity, you can load me with caffeine here
                <a 
                    className="footer-coffee-button"
                    href={"https://www.buymeacoffee.com/monstervillage"} 
                    target={"_blank"}
                ><div className="footer-coffee-icon"></div>Buy me a coffee</a>            
            </div>

            <div className="footer-contributions">Images made by Freepik & Smashicons & Dimitry Miroliubov from flaticon.com</div>
        </footer>
    )
}

export default Footer;