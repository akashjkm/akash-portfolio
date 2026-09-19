import React from "react";

function Contact() {

    return (

        <section
            className="contact"
            id="contact"
        >

            <div className="contact-content">

                <h2 data-aos="fade">
                    Let's <span>Connect</span>
                </h2>

                <p data-aos="fade-up">

                    I'm Akash Singh, a Full Stack Developer.
                    Have a project or opportunity in mind?
                    Let's build something great together.

                </p>


                <a
                    href="mailto:yourmail@gmail.com"
                    className="btn-box"
                    data-aos="zoom-in"
                >
                    Contact Me
                </a>

            </div>

        </section>

    );
}

export default Contact;