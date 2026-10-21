const TIMELINE = [
  {
    num: '1',
    type: 'job',
    company: '🏢 Fame Finders',
    role: 'Web Developer',
    duration: 'August 2026 – Present',
    location: 'Delhi, India',
    bullets: [
      <><strong>WordPress & Full Stack:</strong> Developed, customized, and maintained responsive websites using WordPress, Elementor, Astra, custom themes, plugins, HTML, CSS, JavaScript, and basic PHP.</>,
      'Configured forms, email functionality, SEO, responsive layouts, troubleshooting, bug fixes, redesigns, and UI improvements using WPForms, WP Mail SMTP, and Rank Math SEO.',
      <>Built and launched live client websites <a href="https://poonamoswal.com" target="_blank" rel="noopener noreferrer" className="timeline-inline-link">poonamoswal.com ↗</a> and <a href="https://rkcsm.com" target="_blank" rel="noopener noreferrer" className="timeline-inline-link">rkcsm.com ↗</a> with mobile-friendly page layouts, contact forms, and SEO optimization.</>,
      <>Designed and implemented a dedicated Book Launch landing layout on <a href="https://famefinders.in" target="_blank" rel="noopener noreferrer" className="timeline-inline-link">famefinders.in ↗</a> with interactive book details and call-to-action elements.</>,
      'Published the London TV application on the Google Play Store managing Play Console setup, store listing, asset guidelines, and release cycles.',
      'MERN Stack: Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js with responsive interfaces and scalable backend functionality.',
      'Implemented REST APIs, CRUD operations, database connectivity, authentication, and frontend-backend data communication while optimizing application performance.',
    ],
    stack: ['WordPress', 'Elementor', 'MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'PHP', 'Google Play Console'],
    badge: '🏢 professional experience',
  },
  {
    num: '2',
    type: 'training',
    company: '⚡ Jagan Institute of Management Studies (JIMS)',
    role: 'MERN Stack Trainee · Summer Training',
    duration: 'Summer 2025',
    location: 'Rohini, Delhi',
    description:
      'Intensive hands-on training program in MERN Stack Development covering full-stack architecture, API engineering, and database management.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'React Native'],
    bullets: [
      'Completed intensive training in MERN Stack Development covering MongoDB, Express.js, React.js, and Node.js.',
      'Built full-stack web applications using modern component-driven development practices and asynchronous data flow.',
      'Developed RESTful APIs for CRUD operations using Express.js and Node.js with secure database indexing in MongoDB.',
      'Integrated React frontend interfaces with backend REST endpoints for seamless end-to-end communication.',
    ],
    badge: '🎓 intensive training',
  },
  {
    num: '3',
    type: 'education',
    company: '🏛️ Jagan Institute of Management Studies (JIMS)',
    role: 'BCA (Bachelor of Computer Applications)',
    duration: '2023 – 2026',
    location: 'Rohini, Delhi',
    bullets: [
      'Pursuing BCA with a strong foundation in Data Structures, Database Management (SQL & MongoDB), Web Technologies, and Software Engineering.',
      'Presented review paper on "AI-Driven Decision Review System in Cricket" at the 2nd National Conference on Generative AI in Education, Research & Knowledge Economy (April 2026).',
      'Coordinator at TechnoWhiz 2025 technical symposium; Event Coordinator for Games\' Den at VERVE 2K26 college fest.',
    ],
    badge: '📜 degree education',
  },
]

export default function Experience() {
  return (
    <div className="container">
      <span className="section-label">experience</span>
      <h2 className="section-heading reveal">the path so far</h2>
      <p className="section-sub reveal">
        the journey ✨ ·{' '}
        <a
          href="/resume.pdf"
          download="Gautam-Chauhan-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline', color: 'var(--muted)', fontSize: '13.5px' }}
        >
          formal resume pdf ↗
        </a>
      </p>

      <div className="timeline">
        {TIMELINE.map((item, i) => (
          <div
            key={item.num}
            className={`timeline-item reveal${item.type === 'freelance' ? ' timeline-item--freelance' : ''}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="timeline-num">{item.num}</div>

            <div className="timeline-body">
              <div className="timeline-header">
                <span className="timeline-company">{item.company}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {item.github && (
                    <a href={item.github} target="_blank" rel="noopener noreferrer" className="timeline-ext-link">
                      github ↗
                    </a>
                  )}
                  <span className="timeline-duration">{item.duration}</span>
                </div>
              </div>
              <p className="timeline-role">
                {item.role} · <em>{item.location}</em>
              </p>
              {item.description && (
                <p className="timeline-description">{item.description}</p>
              )}
              {item.stack && (
                <div className="timeline-stack">
                  {item.stack.map((tag) => (
                    <span key={tag} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              )}
              <ul className="timeline-bullets">
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {item.badge && (
                <span className="timeline-badge">{item.badge}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
