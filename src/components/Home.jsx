import React from "react";

function Home() {

    return (

        <section className="home" id="home">

            <div className="home-content">

                <p className="home-small-text">
                    Hello, It's Me
                </p>

                <h1>
                    Akash Singh
                </h1>

                <h3>
                    And I'm a{" "}
                    <span className="text">
                        Full Stack Developer
                    </span>
                </h3>

                <p className="home-description">

                    I'm a Full Stack Developer with 1+ year of
                    professional experience building modern and
                    user-focused web applications.

                    <br />

                    I work with React.js, Next.js, Node.js, PHP,
                    MySQL, REST APIs and modern web technologies.

                </p>


                {/* SOCIAL LINKS */}

                <div className="home-sci">

                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-github"></i>
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="mailto:yourmail@gmail.com">
                        <i className="bx bx-envelope"></i>
                    </a>

                </div>


                <a
                    href="#about"
                    className="btn-box"
                >
                    More About Me
                </a>

            </div>

        </section>

    );
}

export default Home;