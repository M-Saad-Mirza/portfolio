import './App.css'

const stats = [
  { value: '7th', label: 'Semester CS Student' },
  { value: '4+', label: 'Core Tech Areas' },
  { value: '10+', label: 'Projects & Practice Builds' },
]

const skillGroups = [
  {
    title: 'Languages',
    items: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Figma', 'Postman', 'VS Code', 'Linux'],
  },
]

const projects = [
  {
    name: 'Campus Connect',
    type: 'Full-Stack Web App',
    summary:
      'A student community platform for announcements, events, and collaboration across departments.',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: 'Smart Task Manager',
    type: 'Productivity Dashboard',
    summary:
      'A task tracking app with deadline planning, progress monitoring, and clean user workflows.',
    stack: ['JavaScript', 'CSS', 'Local Storage'],
  },
  {
    name: 'Portfolio Builder',
    type: 'Personal Brand Project',
    summary:
      'A reusable portfolio template designed for developers to showcase projects, skills, and contact info.',
    stack: ['React', 'Responsive UI', 'Deployment'],
  },
]

const timeline = [
  {
    title: 'Computer Science Student',
    period: 'Current • 7th Semester',
    description:
      'Focused on algorithms, software design, databases, web technologies, and applied engineering projects.',
  },
  {
    title: 'Problem Solving & Development',
    period: 'Ongoing',
    description:
      'Building projects around web development, UI/UX, backend logic, and modern JavaScript frameworks.',
  },
  {
    title: 'Growth & Learning',
    period: 'Continuous',
    description:
      'Exploring emerging tools, clean architecture, and practical problem-solving for real-world software products.',
  },
]

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-saad-mirza-107b3b2ba?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    label: 'GitHub',
    href: '#',
  },
  {
    label: 'Email',
    href: '#',
  },
]

function App() {
  return (
    <div className="portfolio-shell">
      <header className="topbar container">
        <div className="brand">MS</div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="nav-button"
          href="https://www.linkedin.com/in/muhammad-saad-mirza-107b3b2ba?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
        >
          Connect
        </a>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science Student • Developer • Problem Solver</p>
            <h1>
              I build <span>modern digital experiences</span> with code and creativity.
            </h1>
            <p className="lead">
              I’m Muhammad Saad Mirza, a 7th semester CS student with hands-on interest in
              software engineering, web development, UI/UX, and building practical projects
              that solve real problems.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                View Projects
              </a>
              <a className="secondary-btn" href="#contact">
                Let’s Talk
              </a>
            </div>
            <div className="hero-metrics">
              {stats.map((stat) => (
                <div key={stat.label} className="metric-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel" aria-label="Profile summary card">
            <div className="profile-badge">MS</div>
            <h2>Muhammad Saad Mirza</h2>
            <p>7th Semester CS Student</p>
            <ul>
              <li>Full-Stack Learning</li>
              <li>Problem Solving</li>
              <li>Web Development</li>
              <li>UI/UX Thinking</li>
            </ul>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Driven by curiosity and code.</h2>
          </div>
          <div className="about-grid">
            <p>
              I’m a Computer Science student currently in my 7th semester, passionate about
              learning modern technologies and building software that looks good and works
              well. My interests include web development, front-end design, problem solving,
              clean architecture, and turning ideas into functional products.
            </p>
            <p>
              I enjoy exploring different domains within software engineering, from user-facing
              interfaces to backend logic and database systems. I’m always eager to take on new
              challenges, improve my skills, and contribute to meaningful projects.
            </p>
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools, technologies, and strengths.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="skill-pills">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Ideas shaped into practical work.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section container">
          <div className="section-heading">
            <p className="eyebrow">Journey</p>
            <h2>Learning, building, and growing.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.title} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true"></div>
                <div>
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer container">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Let’s connect</p>
            <h2>Open to opportunities, collaboration, and learning.</h2>
          </div>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href === '#' ? '#contact' : link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="copyright">© 2026 Muhammad Saad Mirza</p>
      </footer>
    </div>
  )
}

export default App
