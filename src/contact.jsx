import "./index.css";

function Contact() {

    return (
        <main className="contact-page">

            {/* =========================================
                HERO
            ========================================= */}

            <section className="contact-hero">

                <div className="contact-glow contact-glow-one"></div>
                <div className="contact-glow contact-glow-two"></div>

                <div className="contact-hero-content">

                    <span className="contact-kicker">
                        LET'S BUILD SOMETHING
                    </span>

                    <h1>
                        Have an idea?
                        <br />
                        <span>Let's make it real.</span>
                    </h1>

                    <p>
                        I'm an aspiring Full Stack Developer and
                        AI/ML Developer focused on building modern,
                        useful and visually engaging digital products.
                    </p>

                    <div className="contact-actions">

                        <a
                            href="mailto:kattacharan10flasmvp@gmail.com"
                            className="contact-primary"
                        >
                            <span>START A PROJECT</span>
                            <span className="arrow">↗</span>
                        </a>

                        <a
                            href="https://github.com/cherry5231"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-secondary"
                        >
                            <span className="github-mark">
                                GH
                            </span>

                            <span>VIEW GITHUB</span>
                        </a>

                    </div>

                </div>


                {/* RIGHT SIDE STATUS */}

                <div className="developer-status">

                    <div className="status-dot"></div>

                    <div>
                        <span>AVAILABLE FOR</span>
                        <strong>NEW PROJECTS</strong>
                    </div>

                </div>

            </section>


            {/* =========================================
                ABOUT
            ========================================= */}

            <section className="contact-about">

                <div className="contact-section-label">
                    01 / ABOUT ME
                </div>

                <div className="about-grid">

                    <div className="about-title">

                        <h2>
                            Building with
                            <br />
                            <span>code & intelligence.</span>
                        </h2>

                    </div>


                    <div className="about-description">

                        <p>
                            I'm an aspiring Full Stack and AI/ML Developer
                            who enjoys turning ideas into functional,
                            polished digital experiences.
                        </p>

                        <p>
                            From responsive websites and full-stack
                            applications to AI-powered platforms,
                            I like working across the entire development
                            process — from the initial idea and interface
                            to backend logic and deployment.
                        </p>

                        <p>
                            If you have an idea for a website, web
                            application, AI-powered product or a custom
                            software project, I'd love to hear about it.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================
                WHAT I CAN BUILD
            ========================================= */}

            <section className="services-section">

                <div className="contact-section-label">
                    02 / WHAT I BUILD
                </div>

                <div className="services-grid">

                    <div className="service-card">

                        <span className="service-number">
                            01
                        </span>

                        <div className="service-icon">
                            {"</>"}
                        </div>

                        <h3>
                            Full Stack Websites
                        </h3>

                        <p>
                            Modern responsive websites and complete
                            web applications with polished interfaces,
                            backend systems and databases.
                        </p>

                    </div>


                    <div className="service-card">

                        <span className="service-number">
                            02
                        </span>

                        <div className="service-icon">
                            AI
                        </div>

                        <h3>
                            AI / ML Projects
                        </h3>

                        <p>
                            AI-powered applications, intelligent features
                            and machine-learning based solutions designed
                            around real-world use cases.
                        </p>

                    </div>


                    <div className="service-card">

                        <span className="service-number">
                            03
                        </span>

                        <div className="service-icon">
                            UX
                        </div>

                        <h3>
                            Custom Digital Products
                        </h3>

                        <p>
                            Custom-built platforms, dashboards,
                            productivity tools and unique web experiences
                            tailored to your idea.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================
                TECHNOLOGIES
            ========================================= */}

            <section className="stack-section">

                <div className="contact-section-label">
                    03 / TECHNOLOGY
                </div>

                <div className="stack-content">

                    <div>

                        <h2>
                            Tools I
                            <br />
                            <span>work with.</span>
                        </h2>

                    </div>

                    <div className="stack-list">

                        <span>Python</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Django</span>
                        <span>Flask</span>
                        <span>Firebase</span>
                        <span>Git</span>
                        <span>GitHub</span>
                        <span>AI / ML</span>

                    </div>

                </div>

            </section>


            {/* =========================================
                GITHUB
            ========================================= */}

            <section className="github-section">

                <div className="github-card">

                    <div className="github-card-left">

                        <span className="github-label">
                            OPEN SOURCE / PROJECTS
                        </span>

                        <h2>
                            See what
                            <br />
                            I've built.
                        </h2>

                        <p>
                            Explore my projects, experiments and
                            development work on GitHub.
                        </p>

                        <a
                            href="https://github.com/cherry5231"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            <span className="github-logo">
                                GH
                            </span>

                            <span>
                                github.com/cherry5231
                            </span>

                            <span className="github-arrow">
                                ↗
                            </span>

                        </a>

                    </div>


                    <div className="github-visual">

                        <div className="github-circle">

                            <span>
                                {"</>"}
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                FINAL CTA
            ========================================= */}

            <section className="final-contact">

                <span>
                    HAVE A PROJECT IN MIND?
                </span>

                <h2>
                    Let's build
                    <br />
                    something <em>great.</em>
                </h2>

                <a
                    href="mailto:kattacharan10flasmvp@gmail.com?subject=Project%20Inquiry"
                    className="final-email"
                >
                    <span>
                        kattacharan10flasmvp@gmail.com
                    </span>

                    <strong>
                        ↗
                    </strong>
                </a>

            </section>


            {/* =========================================
                FOOTER
            ========================================= */}

            <footer className="contact-footer">

                <span>
                    K.CHARAN
                </span>

                <span>
                    FULL STACK • AI / ML
                </span>

                <span>
                    © 2026
                </span>

            </footer>

        </main>
    );
}

export default Contact;