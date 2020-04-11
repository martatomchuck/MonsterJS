import React, { Component, useState, useEffect, useContext } from "react";

import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';
import Welcome from './Welcome';


class GameEngine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const {dataset} = this.props

        // return (
        //     <div className="container">
        //         <SectionLeft/>
        //         <SectionRight/>
        //     </div>
        // );

        return <Welcome/>
    }

    componentDidMount() {
        return <Welcome/>
    }
}

export default GameEngine;