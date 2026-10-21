import { useEffect, useState } from 'react'
import profileImg from '../assets/profile.jpg'

const NAME = 'Gautam Chauhan'

function LetterSpan({ char }) {
  if (char === ' ') return <span className="word">&nbsp;</span>
  return <span className="letter">{char}</span>
}

export default function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const opts = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' }
      setTime(new Intl.DateTimeFormat('en-IN', opts).format(now))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="container">
      <div className="hero-content">
        {/* ── Text side ── */}
        <div className="hero-text">
          {/* Greeting */}
          <div className="hero-greeting">
            hello, i'm 👋
          </div>

          {/* Name */}
          <h1 className="hero-name">
            {NAME.split(' ').map((word, wIdx) => (
              <span key={wIdx} className="hero-word">
                {word.split('').map((ch, cIdx) => (
                  <span key={cIdx} className="letter">{ch}</span>
                ))}
                {wIdx < NAME.split(' ').length - 1 && <span className="word">&nbsp;</span>}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Motivated Full Stack Web Developer with hands-on experience building full-stack applications across the MERN stack (MongoDB, Express.js, React.js, Node.js) and WordPress. Skilled in engineering RESTful APIs, responsive interfaces, and database systems — passionate about solving real-world problems with clean, scalable code.
          </p>

          {/* Location + live clock */}
          <div className="hero-meta">
            <span>📍 Delhi, India</span>
            <span className="hero-meta-dot">·</span>
            <span id="clock">{time} IST</span>
          </div>

          {/* CTAs */}
          <div className="hero-cta">
            <a href="mailto:gautam.chauhan.work1@gmail.com" className="btn-primary" id="cta-hello">
              say hello 👋
            </a>
            <a
              href="/resume.pdf"
              download="Gautam-Chauhan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="cta-resume"
            >
              resume ↗
            </a>
            <span className="cta-note">i actually reply</span>
          </div>

          {/* Stack pills */}
          <div className="stack-row">
            {['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'WordPress', 'Python', 'SQL'].map((tech) => (
              <span key={tech} className="stack-pill">{tech}</span>
            ))}
          </div>
        </div>

        {/* ── Photo side ── */}
        <div className="hero-photo-wrap">
          <span className="photo-deco" aria-hidden="true">✦</span>
          <span className="photo-deco" aria-hidden="true">✦</span>
          <span className="photo-deco" aria-hidden="true">✦</span>
          <img
            src={profileImg}
            alt="Gautam Chauhan"
            className="hero-photo"
            loading="eager"
          />
        </div>
      </div>
    </div>
  )
}
