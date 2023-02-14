import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";
import "./Header.css";

function Header() {
    // const [active, setActive] = useState("navBar");
    // const showNav = () => {

    // }

    // const removeNav = () => {

    // }

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} id="logo" />
            </div>
            <div className="nav">
                <nav className="navBar">
                    <ul>
                        <li className="navItems"><a href="about">About</a></li>
                        <li className="navItems"><a href="carrers">Carrers</a></li>
                        <li className="navItems"><a href="events">Events</a></li>
                        <li className="navItems"><a href="products">Products</a></li>
                        <li className="navItems"><a href="support">Support</a></li>
                    </ul>
                </nav>
            </div>
            <div className="toggleNav">
                <img id="ham-icon" src={hamburger} />
            </div>
            <div className="closeNav">
                <img id="close-icon" src={close} />
            </div>
        </div>
    );
}

export default Header;