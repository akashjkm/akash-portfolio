import React from "react";

function Projects() {

    const projects = [

        {
            title: "PDF Studio Pro",

            description:
                "A professional PDF editor SaaS application with PDF upload, preview, editing and document management functionality.",

            image: "/images/pdf-studio-pro.png",

            technologies: [
                "React.js",
                "Vite",
                "Tailwind CSS",
                "PDF.js",
                "Capacitor"
            ],

            live: "#",

            github: "#"
        },


        {
            title: "Sapphire Softtech",

            description:
                "A responsive business website with modern navigation, hero carousel, service sections, support pages and pricing sections.",

            image: "/images/sapphire-softtech.png",

            technologies: [
                "HTML",
                "CSS",
                "Bootstrap",
                "JavaScript",
                "PHP"
            ],

            live: "#",

            github: "#"
        },


        {
            title: "The Loop Guide",

            description:
                "A modern guide and product-focused website featuring responsive navigation, hero carousel, product cards, guides, blog and contact pages.",

            image: "/images/loop-guide.png",

            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "Responsive UI"
            ],

            live: "#",

            github: "#"
        },


        {
            title: "Developer Portfolio",

            description:
                "A responsive developer portfolio showcasing professional experience, technical skills, projects and contact information.",

            image: "/images/portfolio.png",

            technologies: [
                "React.js",
                "Vite",
                "Tailwind CSS",
                "JavaScript",
                "Vercel"
            ],

            live: "#",

            github: "#"
        }

    ];


    return (

        <section
            className="portfolio"
            id="portfolio"
        >

            <div className="portfolio-content">

                <h2 data-aos="fade-left">
                    My <span>Projects</span>
                </h2>


                <div className="project-grid">

                    {projects.map((project, index) => (

                        <div
                            className="project-card"
                            data-aos={
                                index % 2 === 0
                                    ? "fade-right"
                                    : "fade-left"
                            }
                            data-aos-delay={index * 100}
                            key={project.title}
                        >

                            <div className="project-image">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                />

                            </div>


                            <div className="project-card-body">

                                <h3>
                                    {project.title}
                                </h3>

                                <p>
                                    {project.description}
                                </p>


                                <div className="project-tech">

                                    {project.technologies.map(
                                        (tech) => (

                                            <span key={tech}>
                                                {tech}
                                            </span>

                                        )
                                    )}

                                </div>


                                <div className="project-card-links">

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                    >

                                        <i className="bx bx-link-external"></i>

                                        Live Demo

                                    </a>


                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >

                                        <i className="bx bxl-github"></i>

                                        Source Code

                                    </a>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Projects;