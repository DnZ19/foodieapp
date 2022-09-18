import {FaSearch} from "react-icons/fa";
import {GiPerspectiveDiceSixFacesRandom} from "react-icons/gi";
import {BsFillCalendar2DateFill} from "react-icons/bs";
import {FiHome} from "react-icons/fi"
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.css";


import React, {useState} from "react";

function Navigation() {

    const navLinkStyles = ({ isActive }) => {
        return  {
            border: isActive ? "2px solid orangered" : "2px solid white",
        }
    }

    return (
        <nav
            // className={styles["top-navigation"]}
            className={styles["nav"]}
        >

            <NavLink
                to="/"
                // className={styles["nav-buttons"]}
                style={navLinkStyles}
            >
                <FiHome/>
                <h4></h4>
            </NavLink>

            <NavLink
                to="/search"
                // className={styles["nav-buttons"]}
                style={navLinkStyles}
            >
                <FaSearch/>
                <h4></h4>
            </NavLink>
            <NavLink
                to="/randomizer"
                // className={styles["nav-buttons"]}
                style={navLinkStyles}
            >
                <GiPerspectiveDiceSixFacesRandom/>
                <h4></h4>
            </NavLink>
            <NavLink
                to="daily"
                // className={styles["nav-buttons"]}
                style={navLinkStyles}
            >
                <BsFillCalendar2DateFill/>
                <h4></h4>
            </NavLink>
        </nav>
    )
}

export default Navigation
