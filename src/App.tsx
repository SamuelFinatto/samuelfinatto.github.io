import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header" role="banner">
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <div className="nav-brand">Samuel Finatto</div>
          <div className="nav-links">
            <a href="#about" aria-label="Navigate to About section">About</a>
            <a href="#experience" aria-label="Navigate to Experience section">Experience</a>
            <a href="#skills" aria-label="Navigate to Skills section">Skills</a>
            <a href="#projects" aria-label="Navigate to Projects section">Projects</a>
            <a href="#contact" aria-label="Navigate to Contact section">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="about" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" id="hero-title">Samuel Finatto</h1>
            <h2 className="hero-subtitle">Senior Cloud Engineer | Azure | AI-Enabled Solutions | Python | .NET</h2>
            <p className="hero-description">
              Senior Software & Cloud Architect with 8+ years of experience designing and delivering scalable,
              secure, and high-performance enterprise systems. Certified in Microsoft Azure and AWS, with expertise
              in Infrastructure as Code, DevOps automation, and cloud-native best practices. Experienced in
              AI-driven solutions using Python and GenAI frameworks.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary" aria-label="Get in touch with Samuel Finatto">Get In Touch</a>
              <a href="https://www.linkedin.com/in/samuel-finatto" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" aria-label="Visit Samuel Finatto's LinkedIn profile (opens in new tab)">
                LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="hero-image">
            <figure className="profile-photo">
              <img src="/profile.jpeg" alt="Professional headshot of Samuel Finatto, Senior Cloud Engineer" width="400" height="400" loading="eager" />
            </figure>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="container">
          <h2 className="section-title" id="experience-title">Professional Experience</h2>
          <div className="timeline" role="list">
            <article className="timeline-item" role="listitem">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 className="job-title">Systems Development Specialist</h3>
                <h4 className="company">Encora Inc.</h4>
                <p className="period"><time dateTime="2024-10">Oct 2024</time> - Present · South America</p>
                <ul className="responsibilities">
                  <li>Software Engineer focused on cloud-native and Generative AI solutions on Azure</li>
                  <li>Design and development of GenAI systems using LLMs and Python</li>
                  <li>Architecture and backend development</li>
                  <li>Integration of AI into production systems</li>
                  <li>Collaboration with global distributed teams</li>
                </ul>
              </div>
            </article>

            <article className="timeline-item" role="listitem">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 className="job-title">Senior Cloud Engineer</h3>
                <h4 className="company">TK Elevator</h4>
                <p className="period"><time dateTime="2024-06">Jun 2024</time> - <time dateTime="2024-09">Sep 2024</time> · Guaíba, Brazil</p>
                <ul className="responsibilities">
                  <li>Optimized predictive maintenance platform (MAX)</li>
                  <li>Improved CI/CD and cloud operations</li>
                  <li>Enhanced system reliability and availability</li>
                </ul>
              </div>
            </article>

            <article className="timeline-item" role="listitem">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 className="job-title">Software Engineer / Tech Lead</h3>
                <h4 className="company">AEL Sistemas</h4>
                <p className="period"><time dateTime="2021-01">Jan 2021</time> - <time dateTime="2024-05">May 2024</time></p>
                <ul className="responsibilities">
                  <li>Led multidisciplinary team</li>
                  <li>Architectural decision-making</li>
                  <li>Performance optimization</li>
                  <li>Stakeholder coordination</li>
                  <li>Used C++, C#, Python, JS, TS, Power BI, Azure DevOps</li>
                </ul>
              </div>
            </article>

            <article className="timeline-item" role="listitem">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 className="job-title">Software Engineer / Infrastructure Analyst</h3>
                <h4 className="company">Sindus ANDRITZ</h4>
                <p className="period"><time dateTime="2018-02">Feb 2018</time> - <time dateTime="2020-12">Dec 2020</time> · Porto Alegre, Brazil</p>
                <ul className="responsibilities">
                  <li>Software Engineer (Aug 2019 - Dec 2020)</li>
                  <li>Infrastructure Analyst (Apr 2018 - Jul 2019)</li>
                  <li>Infrastructure Assistant (Feb 2018 - Mar 2018)</li>
                </ul>
              </div>
            </article>

            <article className="timeline-item" role="listitem">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 className="job-title">IT Intern</h3>
                <h4 className="company">Martinelli Advogados</h4>
                <p className="period"><time dateTime="2017-08">Aug 2017</time> - <time dateTime="2017-11">Nov 2017</time></p>
              </div>
            </article>

            <article className="timeline-item" role="listitem">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 className="job-title">Support Intern</h3>
                <h4 className="company">PUCRS - Distance Education</h4>
                <p className="period"><time dateTime="2014-12">Dec 2014</time> - <time dateTime="2016-12">Dec 2016</time></p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section" id="skills" aria-labelledby="skills-title">
        <div className="container">
          <h2 className="section-title" id="skills-title">Technical Expertise</h2>
          <div className="skills-grid" role="list">
            <article className="skill-category" role="listitem">
              <h3 className="category-title">AI & GenAI</h3>
              <ul className="skill-list">
                <li>LangChain</li>
                <li>LangGraph</li>
                <li>Pydantic</li>
                <li>RAG architectures</li>
                <li>Multi-Agent Systems</li>
              </ul>
            </article>

            <article className="skill-category" role="listitem">
              <h3 className="category-title">Development</h3>
              <ul className="skill-list">
                <li>Python</li>
                <li>.NET / C#</li>
                <li>TypeScript</li>
              </ul>
            </article>

            <article className="skill-category" role="listitem">
              <h3 className="category-title">Cloud & Infrastructure</h3>
              <ul className="skill-list">
                <li>Microsoft Azure</li>
                <li>AWS</li>
                <li>On-Premises Infrastructure</li>
                <li>Hybrid Cloud Architecture</li>
              </ul>
            </article>

            <article className="skill-category" role="listitem">
              <h3 className="category-title">DevOps & IaC</h3>
              <ul className="skill-list">
                <li>Terraform</li>
                <li>Terragrunt</li>
                <li>Bicep</li>
                <li>Azure DevOps</li>
                <li>GitHub Actions</li>
                <li>Jenkins</li>
              </ul>
            </article>
          </div>
          
          <aside className="certifications-section">
            <h3 className="section-subtitle" id="certifications-title">Certifications</h3>
            <div className="certifications-grid">
              <div className="certification-badge">C# Advanced Topics</div>
              <div className="certification-badge">Gen AI Training Path - Foundational</div>
              <div className="certification-badge">Microsoft Certified: Azure DevOps Expert</div>
              <div className="certification-badge">SCRUM Foundation Professional Certificate</div>
              <div className="certification-badge">Microsoft Certified: Azure Fundamentals</div>
            </div>
          </aside>

          <aside className="education-section">
            <h3 className="section-subtitle" id="education-title">Education</h3>
            <div className="education-grid">
              <article className="education-item">
                <h4>Computer Engineering</h4>
                <p className="institution">PUCRS</p>
                <p className="period"><time dateTime="2014">2014</time> - <time dateTime="2021">2021</time></p>
              </article>
              <article className="education-item">
                <h4>Product Management Graduate</h4>
                <p className="institution">Descomplica</p>
                <p className="period"><time dateTime="2022">2022</time> - <time dateTime="2023">2023</time></p>
              </article>
            </div>
          </aside>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="container">
          <h2 className="section-title" id="projects-title">Key Achievements</h2>
          <div className="projects-grid" role="list">
            <article className="project-card" role="listitem">
              <div className="project-icon" aria-hidden="true">🤖</div>
              <h3 className="project-title">GenAI Solutions on Azure</h3>
              <p className="project-description">
                Designing and developing Generative AI systems using LLMs, LangChain, and Python,
                integrating AI capabilities into production systems for enterprise clients.
              </p>
              <div className="project-tags">
                <span className="tag">LangChain</span>
                <span className="tag">Azure</span>
                <span className="tag">Python</span>
                <span className="tag">RAG</span>
              </div>
            </article>

            <article className="project-card" role="listitem">
              <div className="project-icon" aria-hidden="true">☁️</div>
              <h3 className="project-title">Cloud Infrastructure Optimization</h3>
              <p className="project-description">
                Optimized predictive maintenance platform (MAX) at TK Elevator, improving CI/CD
                pipelines and cloud operations to enhance system reliability and availability.
              </p>
              <div className="project-tags">
                <span className="tag">Azure</span>
                <span className="tag">CI/CD</span>
                <span className="tag">DevOps</span>
              </div>
            </article>

            <article className="project-card" role="listitem">
              <div className="project-icon" aria-hidden="true">🏗️</div>
              <h3 className="project-title">Infrastructure as Code</h3>
              <p className="project-description">
                Implemented comprehensive IaC solutions using Terraform, Terragrunt, and Bicep
                for multi-cloud environments, ensuring scalable and maintainable infrastructure.
              </p>
              <div className="project-tags">
                <span className="tag">Terraform</span>
                <span className="tag">Bicep</span>
                <span className="tag">IaC</span>
              </div>
            </article>

            <article className="project-card" role="listitem">
              <div className="project-icon" aria-hidden="true">👥</div>
              <h3 className="project-title">Technical Leadership</h3>
              <p className="project-description">
                Led multidisciplinary teams at AEL Sistemas, driving architectural decisions,
                performance optimization, and stakeholder coordination across multiple projects.
              </p>
              <div className="project-tags">
                <span className="tag">Leadership</span>
                <span className="tag">Architecture</span>
                <span className="tag">Agile</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container">
          <h2 className="section-title" id="contact-title">Let's Connect</h2>
          <p className="contact-description">
            I'm always interested in hearing about new opportunities, collaborations,
            or just connecting with fellow technology enthusiasts.
          </p>
          <nav className="contact-links" aria-label="Social media and contact links">
            <a href="https://www.linkedin.com/in/samuel-finatto" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Connect with Samuel Finatto on LinkedIn (opens in new tab)">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/samuelfinatto" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="View Samuel Finatto's GitHub profile (opens in new tab)">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="mailto:samueldfinatto@gmail.com" className="contact-link" aria-label="Send email to Samuel Finatto">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
              Email
            </a>
          </nav>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <p>&copy; <time dateTime="2026">2026</time> Samuel Finatto. All rights reserved.</p>
          <p className="footer-note">Built with React & TypeScript</p>
        </div>
      </footer>
    </div>
  )
}

export default App
