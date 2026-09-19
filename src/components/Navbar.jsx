import React from "react";

function Navbar() {

    return (

        <header className="header">

            <a href="#home" className="logo">
                portfolio
            </a>

            <nav className="navbar">

                <a href="#home" className="active">
                    Home
                </a>

                <a href="#about">
                    About
                </a>

                <a href="#skills">
                    Skills
                </a>

                <a href="#portfolio">
                    Projects
                </a>

                <a href="#contact">
                    Contact
                </a>

            </nav>

        </header>

    );
}

export default Navbar;