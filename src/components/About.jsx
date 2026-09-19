import React from "react";

function About() {
    return (
        <section className="about" id="about">

            <div className="about-content">

                <h2 data-aos="fade">
                    About <span>Me</span>
                </h2>

                <h3 data-aos="fade-right">
                    I'm Akash Singh, a Full Stack Developer
                </h3>

                <p>
                    I am a Full Stack Developer with 1+ year of
                    professional experience building modern web
                    applications.
                </p>

                <p>
                    I work across frontend, backend, APIs and
                    databases using technologies such as React.js,
                    Next.js, Node.js, PHP, MySQL and REST APIs.
                </p>


                <div className="about-highlights">

                    <div
                        className="highlight-box"
                        data-aos="fade-up"
                    >
                        <h4>1+</h4>
                        <p>Years Experience</p>
                    </div>


                    <div
                        className="highlight-box"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h4>10+</h4>
                        <p>Projects Built</p>
                    </div>


                    <div
                        className="highlight-box"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h4>14+</h4>
                        <p>Technologies</p>
                    </div>


                    <div
                        className="highlight-box"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <h4>100%</h4>
                        <p>Client Focused</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;