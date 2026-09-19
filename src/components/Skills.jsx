import React from "react";

function Skills() {

    const skills = [
        "React.js",
        "Next.js",
        "JavaScript",
        "Node.js",
        "PHP",
        "FastAPI",
        "MySQL",
        "REST APIs",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
        "GitHub"
    ];

    return (

        <section className="skills" id="skills">

            <div className="skills-content">

                <h2 data-aos="zoom-in">
                    My <span>Skills</span>
                </h2>

                <div className="skill-pills">

                    {skills.map((skill, index) => (

                        <span
                            key={skill}
                            data-aos="fade-up"
                            data-aos-delay={index * 60}
                        >
                            {skill}
                        </span>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Skills;