const CERTIFICATIONS = [
  {
    title: 'MERN Stack Developer Certification Program',
    issuer: 'JIMS, Rohini, Delhi',
    year: '2025',
    detail: 'MongoDB, Express.js, React.js, Node.js, REST APIs, Responsive Web Development.',
    badge: '🏆 MERN Certified',
  },
  {
    title: 'WordPress - Certificate of Completion',
    issuer: 'Yoast Academy, Online',
    year: '2026',
    detail: 'WordPress website development, themes, plugins, and website maintenance.',
    badge: '🌐 CMS Specialist',
  },
  {
    title: 'Blockchain App Developer - Skill Competency',
    issuer: 'JIMS, Rohini, Delhi',
    year: '2025',
    detail: '641-hour rigorous program, NCVET / NSQF Level 5 (21 credits), Grade B.',
    badge: '⛓️ NCVET Level 5',
  },
  {
    title: 'Google Cloud Skills Boost Arcade - Legend Tier',
    issuer: 'Google Cloud',
    year: '2025',
    detail: '100+ Arcade Points; earned skill badges in Cloud Infrastructure, IAM, BigQuery, Automation, and AI Readiness.',
    badge: '☁️ Legend Tier',
  },
]

const ACTIVITIES = [
  {
    role: 'Research Paper Presentation',
    org: 'JIMS Kalkaji · April 2026',
    desc: 'Presented a research review paper on "AI-Driven Decision Review System in Cricket" at the 2nd National Conference on Generative AI in Education, Research and Knowledge Economy.',
    tag: '📄 AI Research',
  },
  {
    role: 'Coordinator at TechnoWhiz 2025',
    org: 'Technical Symposium',
    desc: 'Coordinated technical symposium activities with organizing teams. Spearheaded planning, scheduling, event execution, and speaker communications.',
    tag: '🤝 Leadership',
  },
  {
    role: 'Event Coordinator – Games’ Den',
    org: 'VERVE 2K26 Annual College Fest · JIMS',
    desc: 'Organized and coordinated the Games’ Den tournament as part of the student organizing committee during the annual VERVE 2K26 fest.',
    tag: '🎮 Event Lead',
  },
]

const EDUCATION = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'JIMS, Rohini, Delhi',
    duration: '2023 – 2026',
    grade: 'Active Program',
  },
  {
    degree: 'Class 12th Senior Secondary',
    institution: 'CBSE Board, Delhi',
    duration: '2021 – 2022',
    grade: 'Completed',
  },
  {
    degree: 'Class 10th Secondary School',
    institution: 'CBSE Board, Delhi',
    duration: '2019 – 2020',
    grade: 'Completed',
  },
]

export default function Credentials() {
  return (
    <div className="container">
      <span className="section-label">credentials</span>
      <h2 className="section-heading reveal">certifications & leadership</h2>
      <p className="section-sub reveal">verified skills, research & extra-curriculars</p>

      {/* ── Certifications Bento Grid ── */}
      <h3 style={{ fontSize: '15px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '24px 0 16px', fontWeight: 600 }} className="reveal">
        Certifications
      </h3>
      <div className="about-cards" style={{ marginBottom: '40px' }}>
        {CERTIFICATIONS.map((cert, i) => (
          <div
            key={cert.title}
            className="about-card reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <span className="about-card-label">{cert.issuer}</span>
              <span style={{ fontSize: '12px', color: 'var(--faint)', fontStyle: 'italic' }}>{cert.year}</span>
            </div>
            <div className="about-card-title" style={{ fontSize: '16px' }}>{cert.title}</div>
            <p className="about-card-body" style={{ fontSize: '13px', marginBottom: '14px' }}>{cert.detail}</p>
            <span className="timeline-badge" style={{ marginTop: 'auto' }}>{cert.badge}</span>
          </div>
        ))}
      </div>

      {/* ── Research & Extra-Curriculars ── */}
      <h3 style={{ fontSize: '15px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '24px 0 16px', fontWeight: 600 }} className="reveal">
        Research & Leadership Activities
      </h3>
      <div className="about-cards" style={{ marginBottom: '40px' }}>
        {ACTIVITIES.map((act, i) => (
          <div
            key={act.role}
            className="about-card reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <span className="about-card-label">{act.org}</span>
              <span className="timeline-badge" style={{ marginTop: 0, fontSize: '11px' }}>{act.tag}</span>
            </div>
            <div className="about-card-title" style={{ fontSize: '16px' }}>{act.role}</div>
            <p className="about-card-body" style={{ fontSize: '13px' }}>{act.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Education Summary ── */}
      <h3 style={{ fontSize: '15px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '24px 0 16px', fontWeight: 600 }} className="reveal">
        Education Details
      </h3>
      <div className="about-cards">
        {EDUCATION.map((edu, i) => (
          <div
            key={edu.degree}
            className="about-card reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="about-card-label">{edu.institution}</div>
            <div className="about-card-title" style={{ fontSize: '15.5px' }}>{edu.degree}</div>
            <p className="about-card-note">{edu.duration} · {edu.grade}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

