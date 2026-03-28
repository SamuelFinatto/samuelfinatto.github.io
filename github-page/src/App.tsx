import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">Samuel Finatto</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="about">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Samuel Finatto</h1>
            <h2 className="hero-subtitle">Senior Cloud Engineer | Azure | AI-Enabled Solutions | Python | .NET</h2>
            <p className="hero-description">
              Senior Software & Cloud Architect with 8+ years of experience designing and delivering scalable,
              secure, and high-performance enterprise systems. Certified in Microsoft Azure and AWS, with expertise
              in Infrastructure as Code, DevOps automation, and cloud-native best practices. Experienced in
              AI-driven solutions using Python and GenAI frameworks.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="https://www.linkedin.com/in/samuel-finatto" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-photo">
              <img src="/profile.jpeg" alt="Samuel Finatto" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section" id="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">Systems Development Specialist</h3>
                <h4 className="company">Encora Inc.</h4>
                <p className="period">Oct 2024 - Present · South America</p>
                <ul className="responsibilities">
                  <li>Software Engineer focused on cloud-native and Generative AI solutions on Azure</li>
                  <li>Design and development of GenAI systems using LLMs and Python</li>
                  <li>Architecture and backend development</li>
                  <li>Integration of AI into production systems</li>
                  <li>Collaboration with global distributed teams</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">Senior Cloud Engineer</h3>
                <h4 className="company">TK Elevator</h4>
                <p className="period">Jun 2024 - Sep 2024 · Guaíba, Brazil</p>
                <ul className="responsibilities">
                  <li>Optimized predictive maintenance platform (MAX)</li>
                  <li>Improved CI/CD and cloud operations</li>
                  <li>Enhanced system reliability and availability</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">Software Engineer / Tech Lead</h3>
                <h4 className="company">AEL Sistemas</h4>
                <p className="period">Jan 2021 - May 2024</p>
                <ul className="responsibilities">
                  <li>Led multidisciplinary team</li>
                  <li>Architectural decision-making</li>
                  <li>Performance optimization</li>
                  <li>Stakeholder coordination</li>
                  <li>Used C++, C#, Python, JS, TS, Power BI, Azure DevOps</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">Software Engineer / Infrastructure Analyst</h3>
                <h4 className="company">Sindus ANDRITZ</h4>
                <p className="period">Feb 2018 - Dec 2020 · Porto Alegre, Brazil</p>
                <ul className="responsibilities">
                  <li>Software Engineer (Aug 2019 - Dec 2020)</li>
                  <li>Infrastructure Analyst (Apr 2018 - Jul 2019)</li>
                  <li>Infrastructure Assistant (Feb 2018 - Mar 2018)</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">IT Intern</h3>
                <h4 className="company">Martinelli Advogados</h4>
                <p className="period">Aug 2017 - Nov 2017</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">Support Intern</h3>
                <h4 className="company">PUCRS - Distance Education</h4>
                <p className="period">Dec 2014 - Dec 2016</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section" id="skills">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">AI & GenAI</h3>
              <ul className="skill-list">
                <li>LangChain</li>
                <li>LangGraph</li>
                <li>Pydantic</li>
                <li>RAG architectures</li>
                <li>Multi-Agent Systems</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Development</h3>
              <ul className="skill-list">
                <li>Python</li>
                <li>.NET / C#</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Cloud & Infrastructure</h3>
              <ul className="skill-list">
                <li>Microsoft Azure</li>
                <li>AWS</li>
                <li>On-Premises Infrastructure</li>
                <li>Hybrid Cloud Architecture</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="category-title">DevOps & IaC</h3>
              <ul className="skill-list">
                <li>Terraform</li>
                <li>Terragrunt</li>
                <li>Bicep</li>
                <li>Azure DevOps</li>
                <li>GitHub Actions</li>
                <li>Jenkins</li>
              </ul>
            </div>
          </div>
          
          <div className="certifications-section">
            <h3 className="section-subtitle">Certifications</h3>
            <div className="certifications-grid">
              <div className="certification-badge">C# Advanced Topics</div>
              <div className="certification-badge">Gen AI Training Path - Foundational</div>
              <div className="certification-badge">Microsoft Certified: Azure DevOps Expert</div>
              <div className="certification-badge">SCRUM Foundation Professional Certificate</div>
              <div className="certification-badge">Microsoft Certified: Azure Fundamentals</div>
            </div>
          </div>

          <div className="education-section">
            <h3 className="section-subtitle">Education</h3>
            <div className="education-grid">
              <div className="education-item">
                <h4>Computer Engineering</h4>
                <p className="institution">PUCRS</p>
                <p className="period">2014 - 2021</p>
              </div>
              <div className="education-item">
                <h4>Product Management Graduate</h4>
                <p className="institution">Descomplica</p>
                <p className="period">2022 - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section" id="projects">
        <div className="container">
          <h2 className="section-title">Key Achievements</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon">🤖</div>
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
            </div>

            <div className="project-card">
              <div className="project-icon">☁️</div>
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
            </div>

            <div className="project-card">
              <div className="project-icon">🏗️</div>
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
            </div>

            <div className="project-card">
              <div className="project-icon">👥</div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            I'm always interested in hearing about new opportunities, collaborations, 
            or just connecting with fellow technology enthusiasts.
          </p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/samuel-finatto" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/samuelfinatto" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="mailto:samueldfinatto@gmail.com" className="contact-link">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Samuel Finatto. All rights reserved.</p>
          <p className="footer-note">Built with React & TypeScript</p>
        </div>
      </footer>
    </div>
  )
}

export default App
