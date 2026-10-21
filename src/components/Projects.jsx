const PROJECTS = [
  {
    name: 'Well-Make Engineers',
    date: 'MERN Stack',
    desc: 'Developed a responsive Product Management Web Application using the MERN Stack. Built RESTful APIs using Node.js and Express.js, integrated MongoDB for product data storage, connected React frontend with backend APIs, and implemented full CRUD operations for streamlined data flow.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
    live: null,
    github: null,
  },
  {
    name: 'FurrySouls — Pet Shelter Donation Platform',
    date: 'Full Stack MERN',
    desc: 'Fullstack donation platform connecting donors with animal shelters. Built backend REST APIs using Node.js and Express.js, integrated MongoDB for secure data persistence, designed JWT user authentication, pet adoption requests, and donation tracking features with a responsive React UI.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth'],
    live: null,
    github: null,
  },
  {
    name: 'Web Solutions — Business & Portfolio',
    date: 'WordPress & SEO',
    desc: 'Developed a responsive business and portfolio website with dedicated service, about, contact, and portfolio sections. Integrated contact forms and email functionality via WPForms & WP Mail SMTP, configured Rank Math SEO, customized layout with Elementor & Astra, and integrated GitHub project showcase.',
    stack: ['WordPress', 'Elementor', 'Astra', 'WPForms', 'Rank Math SEO', 'WP Mail SMTP'],
    live: null,
    github: null,
  },
  {
    name: 'London TV & Client Platforms',
    date: 'Play Store & Live Sites',
    desc: 'Published London TV application on the Google Play Store via Google Play Console setup, store listing, and release process. Designed, launched, and maintained live client websites poonamoswal.com & rkcsm.com, plus a high-converting Book Launch section on famefinders.in.',
    stack: ['Google Play Console', 'WordPress', 'Elementor', 'SEO', 'Mobile Publishing'],
    live: 'https://poonamoswal.com',
    github: null,
  },
]

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <div className="container">
      <span className="section-label">projects</span>
      <h2 className="section-heading reveal">things i've shipped</h2>
      <p className="section-sub reveal">real code, real users</p>

      <div className="projects-list">
        {PROJECTS.map((proj, i) => (
          <div
            key={proj.name}
            className="project-card reveal"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="project-header">
              <div>
                <span className="project-name">{proj.name}</span>
                <span style={{ color: 'var(--faint)', fontSize: '13px', marginLeft: '10px', fontStyle: 'italic' }}>
                  {proj.date}
                </span>
              </div>
              <div className="project-links">
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-link" id={`live-${proj.name}`}>
                    <ExternalIcon /> live ↗
                  </a>
                )}
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link" id={`github-${proj.name}`}>
                    <ExternalIcon /> github ↗
                  </a>
                )}
              </div>
            </div>

            <p className="project-desc">{proj.desc}</p>

            <div className="project-stack">
              {proj.stack.map((tech) => (
                <span key={tech} className="project-pill">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
