import { useEffect } from 'react'
import profileImage from './assets/profile.jpg'
import './App.css'

const stats = [
  { value: '9+', label: 'Projects Built' },
  { value: '10+', label: 'Certifications' },
  { value: '91+', label: 'Skills & Tools' },
]

const skillGroups = [
  {
    title: 'Programming',
    items: ['C++', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'PHP'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Tailwind', 'Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'JWT', 'MongoDB', 'Firebase', 'PostgreSQL', 'API Design'],
  },
  {
    title: 'Mobile & Design',
    items: ['Flutter', 'Android', 'UI/UX', 'Figma', 'Wireframing', 'Design Systems'],
  },
  {
    title: 'Data & AI',
    items: ['Data Structures', 'Algorithms', 'Machine Learning', 'Data Analysis', 'EDA', 'Pandas', 'NumPy'],
  },
  {
    title: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux', 'Deployment', 'DevOps Basics', 'Agile'],
  },
]

const projects = [
  {
    title: 'Smart Learning Platform',
    label: 'Full-Stack Product',
    description:
      'A digital education platform with student dashboards, course management, and modern interactive flows.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
  },
  {
    title: 'E-Commerce Experience',
    label: 'Marketplace UI',
    description:
      'A polished storefront experience with product discovery, cart logic, and conversion-focused design.',
    stack: ['React', 'JavaScript', 'CSS', 'API Integration'],
  },
  {
    title: 'Task & Productivity Suite',
    label: 'Workflow App',
    description:
      'A productivity tool for planning tasks, tracking deadlines, and visualizing personal performance.',
    stack: ['JavaScript', 'Local Storage', 'Bootstrap', 'UI/UX'],
  },
  {
    title: 'Portfolio Builder',
    label: 'Personal Brand Project',
    description:
      'A reusable portfolio system designed for developers and creators to showcase work elegantly.',
    stack: ['React', 'Vite', 'Responsive Design', 'Deployment'],
  },
  {
    title: 'Campus Connect App',
    label: 'Community Platform',
    description:
      'A student-first web experience for announcements, events, collaboration, and engagement.',
    stack: ['React', 'Firebase', 'UI Design', 'Full Stack'],
  },
  {
    title: 'AI-Assisted Utilities',
    label: 'Automation Tools',
    description:
      'Practical smart utilities that simplify repetitive tasks and improve everyday productivity.',
    stack: ['Python', 'Automation', 'Data Processing', 'ML'],
  },
]

const certifications = [
  'Google IT Support',
  'Cisco Networking Essentials',
  'Python for Everybody',
  'Java Programming',
  'Web Development Fundamentals',
  'SQL & Database Basics',
  'UI/UX Design Principles',
  'Frontend Development',
  'Backend API Development',
  'Introduction to AI & ML',
]

const timeline = [
  {
    period: 'Current',
    title: 'Computer Science Student',
    description:
      'Continuously building technical depth in software engineering, problem solving, web technologies, and product thinking.',
  },
  {
    period: 'Ongoing',
    title: 'Project-Driven Learning',
    description:
      'Creating full-stack and front-end products that combine design, logic, and performance to solve real-world challenges.',
  },
  {
    period: 'Focus',
    title: 'Growth & Innovation',
    description:
      'Exploring new tools, improving architecture, and developing a strong foundation for future software opportunities.',
  },
]

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-saad-mirza-107b3b2ba?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Email', href: 'mailto:smirza0307@gmail.com' },
]

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.18 },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio-shell">
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <div className="orb orb-three" aria-hidden="true" />

      <header className="topbar container reveal">
        <div className="brand">MS</div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
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
        <section className="hero container reveal">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science Student • Software Developer • Problem Solver</p>
            <h1>
              Building <span>clean digital experiences</span> with code, design, and purpose.
            </h1>
            <p className="lead">
              I’m Muhammad Saad Mirza, a Computer Science student focused on software development,
              user-centered design, and building impactful web products. I enjoy turning complex
              ideas into polished, practical, and scalable solutions.
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

          <div className="hero-visual reveal" aria-label="Profile image card">
            <div className="photo-shell">
              <img src={profileImage} alt="Muhammad Saad Mirza" />
            </div>
            <div className="floating-card">
              <span>Available for opportunities</span>
              <strong>Software Developer</strong>
            </div>
          </div>
        </section>

        <section id="about" className="section container reveal">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Driven by curiosity and results.</h2>
          </div>
          <div className="about-grid">
            <p>
              I am a Computer Science student with a strong interest in software development,
              product building, and user-focused experiences. I enjoy learning modern technologies
              and applying them to real-world outcomes through practical and polished work.
            </p>
            <p>
              My focus spans front-end interfaces, back-end logic, design thinking, and problem
              solving. I like building systems that are not only functional but also intuitive,
              scalable, and visually compelling for real users.
            </p>
          </div>
        </section>

        <section id="skills" className="section container reveal">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>91+ technical skills and growing expertise.</h2>
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

        <section id="projects" className="section container reveal">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Work that reflects creativity and execution.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <span className="project-type">{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section container reveal">
          <div className="section-heading">
            <p className="eyebrow">Certifications</p>
            <h2>Continuous learning and validated growth.</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((item) => (
              <div key={item} className="cert-pill">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section container reveal">
          <div className="section-heading">
            <p className="eyebrow">Journey</p>
            <h2>Ongoing focus on learning, building, and evolving.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.title} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true"></div>
                <div className="timeline-copy">
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer container reveal">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Let’s connect</p>
            <h2>Open to opportunities, collaboration, and impactful work.</h2>
          </div>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
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
