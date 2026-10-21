const CARDS = [
  {
    emoji: '💼',
    label: 'EXPERIENCE',
    title: 'Web Developer @ Fame Finders',
    body: 'August 2026 – Present · Delhi, India. Developed responsive websites with WordPress, Elementor & PHP, built full-stack MERN apps, published London TV on Google Play Store, and launched client sites poonamoswal.com & rkcsm.com.',
    note: '* production code & client launches',
    span2: true,
  },
  {
    emoji: '📍',
    label: 'BASED IN',
    title: 'Delhi, India',
    body: 'Available for Full Stack Web Developer roles. Remote-friendly, communicative, and team-oriented.',
    note: '* IST timezone · +91 9319450464',
    span2: false,
  },
  {
    emoji: '🎓',
    label: 'EDUCATION',
    title: 'BCA @ JIMS Rohini',
    body: '2023 – 2026. Jagan Institute of Management Studies. CBSE 12th (2021-2022) & 10th (2019-2020), Delhi.',
    note: '* academic & project-driven',
    span2: false,
  },
  {
    emoji: '🧠',
    label: 'WHAT DRIVES ME',
    title: 'Clean Architecture, Scalable APIs & Real Impact',
    body: 'Passionate about building clean, scalable solutions — developing RESTful APIs, optimizing database operations with MongoDB/SQL, and crafting responsive user-friendly interfaces.',
    note: '* solving real-world problems',
    span2: true,
  },
]

export default function About() {
  return (
    <div className="container">
      <span className="section-label">about</span>
      <h2 className="section-heading reveal">the short version</h2>
      <p className="section-sub reveal">psst — keep reading</p>

      <div className="about-cards">
        {CARDS.map((card, i) => (
          <div
            key={card.label}
            className={`about-card ${card.span2 ? 'span-2' : ''} reveal`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="about-card-emoji">{card.emoji}</div>
            <div className="about-card-label">{card.label}</div>
            <div className="about-card-title">{card.title}</div>
            <p className="about-card-body">{card.body}</p>
            <p className="about-card-note">{card.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
