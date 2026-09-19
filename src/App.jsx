import { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";

import profileImage from "./assets/ak.png";
import pdfStudio from "./assets/pdf studio.png";
import sapphire from "./assets/sapphire.png";
import loopGuide from "./assets/loop-guide.png";

function App() {
    const typedElement = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });

        const typed = new Typed(typedElement.current, {
            strings: [
                "Full Stack Developer",
                "React.js Developer",
                "Next.js Developer",
                "Node.js Developer",
                "PHP Developer",
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            {/* =====================================================
                HEADER
            ====================================================== */}

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

                    <a href="#projects">
                        Projects
                    </a>

                    <a href="#contact">
                        Contact
                    </a>

                </nav>

            </header>


            {/* =====================================================
                HOME
            ====================================================== */}

            <section className="home" id="home">

                <div className="home-content">

                    <h3>
                        Hello, It's Me
                    </h3>

                    <h1>
                        Akash Singh
                    </h1>

                    <h3>
                        And I'm a{" "}
                        <span ref={typedElement}></span>
                    </h3>

                    <p>
                        I'm a Full Stack Developer with 1+ year of
                        professional experience building modern and
                        user-focused web applications.
                        <br />

                        I work with React.js, Next.js, Node.js, PHP,
                        MySQL, REST APIs and modern web technologies.
                    </p>


                    {/* SOCIAL ICONS */}

                    <div className="home-sci">

                        <a href="#">
                            <i className="bx bxl-linkedin"></i>
                        </a>

                        <a href="#">
                            <i className="bx bxl-github"></i>
                        </a>

                        <a href="#">
                            <i className="bx bxl-instagram"></i>
                        </a>

                        <a href="mailto:akashthakur9318@gmail.com">
                            <i className="bx bx-envelope"></i>
                        </a>

                    </div>


                    {/* BUTTON */}

                    <a
                        href="#about"
                        className="btn-box"
                    >
                        More About Me
                    </a>

                </div>


                {/* =================================================
                    PROFILE IMAGE
                ================================================== */}

                <div className="hero-image">

                    <div className="hero-glow">

                        <img
                            src={profileImage}
                            alt="Akash Singh"
                        />

                    </div>

                </div>

            </section>


            {/* =====================================================
                ABOUT
            ====================================================== */}

            <section
                className="about"
                id="about"
            >

                <h2>
                    About <span>Me</span>
                </h2>

                <div
                    className="about-content"
                    data-aos="fade-up"
                >

                    <h3>
                        I'm Akash Singh, a Full Stack Developer
                    </h3>

                    <p>
                        I am a Full Stack Developer with 1+ year of
                        professional experience building modern web
                        applications.
                    </p>

                    <p>
                        I work across frontend, backend, APIs and
                        databases, using technologies such as
                        React.js, Next.js, Node.js, PHP, MySQL and
                        REST APIs.
                    </p>


                    {/* ABOUT STATS */}

                    <div className="about-highlights">

                        <div className="highlight-box">

                            <h4>
                                1+
                            </h4>

                            <p>
                                Years Experience
                            </p>

                        </div>


                        <div className="highlight-box">

                            <h4>
                                10+
                            </h4>

                            <p>
                                Projects Built
                            </p>

                        </div>


                        <div className="highlight-box">

                            <h4>
                                14+
                            </h4>

                            <p>
                                Technologies
                            </p>

                        </div>


                        <div className="highlight-box">

                            <h4>
                                100%
                            </h4>

                            <p>
                                Client Focused
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                SKILLS
            ====================================================== */}

            <section
                className="skills"
                id="skills"
            >

                <h2>
                    My <span>Skills</span>
                </h2>

                <div
                    className="skills-content"
                    data-aos="fade-up"
                >

                    <div className="skill-pills">

                        <span>
                            React.js
                        </span>

                        <span>
                            Next.js
                        </span>

                        <span>
                            JavaScript
                        </span>

                        <span>
                            Node.js
                        </span>

                        <span>
                            PHP
                        </span>

                        <span>
                            FastAPI
                        </span>

                        <span>
                            MySQL
                        </span>

                        <span>
                            REST APIs
                        </span>

                        <span>
                            HTML
                        </span>

                        <span>
                            CSS
                        </span>

                        <span>
                            Tailwind CSS
                        </span>

                        <span>
                            Bootstrap
                        </span>

                        <span>
                            Git
                        </span>

                        <span>
                            GitHub
                        </span>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PROJECTS
            ====================================================== */}

            <section
                className="portfolio"
                id="projects"
            >

                <h2>
                    My <span>Projects</span>
                </h2>

                <div className="portfolio-content">

                    <div className="project-grid">


                        {/* =================================================
                            PROJECT 1 - PDF STUDIO PRO
                        ================================================== */}

                        <div
                            className="project-card"
                            data-aos="fade-up"
                        >

                            <img
                                src={pdfStudio}
                                alt="PDF Studio Pro"
                            />

                            <div className="project-card-body">

                                <h3>
                                    PDF Studio Pro
                                </h3>

                                <p>
                                    A modern PDF editor application
                                    with document management,
                                    editing and productivity
                                    features.
                                </p>

                                <div className="project-tech">

                                    <span>
                                        React
                                    </span>

                                    <span>
                                        Vite
                                    </span>

                                    <span>
                                        Tailwind
                                    </span>

                                </div>

                                <div className="project-card-links">

                                    <a href="#">
                                        Live Demo
                                    </a>

                                    <a href="#">
                                        Source Code
                                    </a>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            PROJECT 2 - SAPPHIRE SOFTTECH
                        ================================================== */}

                        <div
                            className="project-card"
                            data-aos="fade-up"
                        >

                            <img
                                src={sapphire}
                                alt="Sapphire Softtech"
                            />

                            <div className="project-card-body">

                                <h3>
                                    Sapphire Softtech
                                </h3>

                                <p>
                                    A professional business website
                                    with responsive layouts,
                                    services, navigation and
                                    modern UI sections.
                                </p>

                                <div className="project-tech">

                                    <span>
                                        HTML
                                    </span>

                                    <span>
                                        CSS
                                    </span>

                                    <span>
                                        Bootstrap
                                    </span>

                                    <span>
                                        PHP
                                    </span>

                                </div>

                                <div className="project-card-links">

                                    <a href="#">
                                        Live Demo
                                    </a>

                                    <a href="#">
                                        Source Code
                                    </a>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            PROJECT 3 - THE LOOP GUIDE
                        ================================================== */}

                        <div
                            className="project-card"
                            data-aos="fade-up"
                        >

                            <img
                                src={loopGuide}
                                alt="The Loop Guide"
                            />

                            <div className="project-card-body">

                                <h3>
                                    The Loop Guide
                                </h3>

                                <p>
                                    A modern guide website with
                                    hero sections, product layouts,
                                    navigation and responsive
                                    design.
                                </p>

                                <div className="project-tech">

                                    <span>
                                        HTML
                                    </span>

                                    <span>
                                        CSS
                                    </span>

                                    <span>
                                        JavaScript
                                    </span>

                                    <span>
                                        PHP
                                    </span>

                                </div>

                                <div className="project-card-links">

                                    <a href="#">
                                        Live Demo
                                    </a>

                                    <a href="#">
                                        Source Code
                                    </a>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </section>


            {/* =====================================================
                CONTACT
            ====================================================== */}

            <section
                className="contact"
                id="contact"
            >

                <div
                    className="contact-content"
                    data-aos="fade-up"
                >

                    <h2>
                        Let's <span>Connect</span>
                    </h2>

                    <p>
                        I'm Akash Singh, a Full Stack Developer.
                        Have a project or opportunity in mind?
                        Let's build something great together.
                    </p>

                    <a
                        href="mailto:akashthakur9318@gmail.com"
                        className="btn-box"
                    >
                        Contact Me
                    </a>

                </div>

            </section>

        </>
    );
}

export default App;