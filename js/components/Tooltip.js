import React, { useState, useContext, useEffect } from "react";

const Tooltip = ({tooltip}) => {

    return (
        <div className="tooltip">
            <span>{tooltip.start}</span>

            {/* Tag name */}
            <span style={{color: "#ff2e63", fontWeight: "600"}}>{tooltip.tag} </span>   

            {/* For attribute */}
            {tooltip.datafor && <span>data-for = </span>}
            <span style={{color: "#9BDEAC", fontWeight: "600"}}> {tooltip.datafor} </span>

            {/* From attribute */}
            {tooltip.datafrom && <span>data-from = </span>}
            <span style={{color: "#9BDEAC", fontWeight: "600"}}> {tooltip.datafrom} </span>

            {/* Class */}
            {tooltip.class && <span>class = </span>}
            <span style={{color: "#ff9d9d", fontWeight: "600"}}> {tooltip.class} </span>

            {/* Id */}
            {tooltip.id && <span>id = </span>}
            <span style={{color: "#ffb921", fontWeight: "600"}}> {tooltip.id} </span>

            {/* Name attribute */}
            {tooltip.name && <span>name = </span>}
            <span style={{color: "#36F8F6", fontWeight: "600"}}> {tooltip.name} </span>

            {/* Attribute */}
            {tooltip.attr && <span> {tooltip.attrname} = </span>}
            <span style={{color: "#CEB2FB", fontWeight: "600"}}> {tooltip.attr} </span>


            <span>{tooltip.end}</span>

            <br/>
            <span style={{display: "inline-block", marginLeft: "15px"}}> {tooltip.innertext} </span>
            <br/>

            <span>{tooltip.start}/ </span>
            <span style={{color: "#ff2e63", fontWeight: "600"}}>{tooltip.tag} </span>
            <span>{tooltip.end}</span>
            
        </div>
    )
}

export default Tooltip;