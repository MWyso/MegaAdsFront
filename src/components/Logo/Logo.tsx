import React from "react";
import {Link} from "react-router-dom";
import "./Logo.css";

export const Logo = () => {
    return (
        <h1>
            <Link className="logo-link" to="/">
                <span style={{fontWeight: "600"}}>Mega</span><span style={{fontWeight: "100"}}> Ogłoszenia</span>
            </Link>
        </h1>)
}