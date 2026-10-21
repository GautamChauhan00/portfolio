// Devicon class reference: https://devicon.github.io/devicon/
// icon: devicon class name | null = use symbol fallback
const SKILL_GROUPS = [
  {
    label: 'Frontend & UI',
    skills: [
      { name: 'React.js',               icon: 'devicon-react-original colored' },
      { name: 'HTML5',                  icon: 'devicon-html5-plain colored' },
      { name: 'CSS3',                   icon: 'devicon-css3-plain colored' },
      { name: 'Responsive Web Design',  icon: null, symbol: '📱' },
      { name: 'Elementor',              icon: null, symbol: '🎨' },
    ],
  },
  {
    label: 'Backend & Database',
    skills: [
      { name: 'Node.js',                icon: 'devicon-nodejs-plain colored' },
      { name: 'Express.js',             icon: 'devicon-express-original' },
      { name: 'MongoDB',                icon: 'devicon-mongodb-plain colored' },
      { name: 'Oracle SQL',             icon: 'devicon-oracle-original colored' },
      { name: 'REST APIs',              icon: null, symbol: '⬡' },
      { name: 'CRUD Operations',        icon: null, symbol: '⚡' },
    ],
  },
  {
    label: 'Languages',
    skills: [
      { name: 'JavaScript',             icon: 'devicon-javascript-plain colored' },
      { name: 'Python',                 icon: 'devicon-python-plain colored' },
      { name: 'C++',                    icon: 'devicon-cplusplus-plain colored' },
      { name: 'SQL',                    icon: 'devicon-mysql-plain colored' },
    ],
  },
  {
    label: 'WordPress & CMS Ecosystem',
    skills: [
      { name: 'WordPress Development',  icon: 'devicon-wordpress-plain colored' },
      { name: 'Elementor Builder',      icon: null, symbol: '🎨' },
      { name: 'Astra Theme',            icon: null, symbol: '✦' },
      { name: 'WPForms',                icon: null, symbol: '📝' },
      { name: 'Rank Math SEO',          icon: null, symbol: '📈' },
      { name: 'WP Mail SMTP',           icon: null, symbol: '✉️' },
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'Git',                    icon: 'devicon-git-plain colored' },
      { name: 'GitHub',                 icon: 'devicon-github-original' },
      { name: 'VS Code',                icon: 'devicon-vscode-plain colored' },
      { name: 'Postman',                icon: 'devicon-postman-plain colored' },
      { name: 'Google Play Console',    icon: null, symbol: '▶' },
    ],
  },
]

export default function Expertise() {
  return (
    <div className="container">
      <span className="section-label">expertise</span>
      <h2 className="section-heading reveal">what i work with</h2>
      <p className="section-sub reveal">always learning & building</p>

      <div className="skills-grid reveal">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <span className="skill-group-label">{group.label}</span>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill.name} className="skill-chip">
                  {skill.icon ? (
                    <i className={`${skill.icon} skill-icon`} aria-hidden="true" />
                  ) : (
                    <span className="skill-symbol" aria-hidden="true">{skill.symbol}</span>
                  )}
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Honest gaps */}
      <div className="skill-gaps reveal">
        <span className="skill-gaps-label">currently levelling up</span>
        <span className="skill-gaps-text">
          React Native · Advanced MERN Patterns · Cloud Infrastructure & Automation
        </span>
      </div>

      {/* Quote */}
      <div className="quote-block reveal">
        <p className="quote-text">
          "Passionate about building clean, scalable solutions and solving real-world problems. — Gautam Chauhan"
        </p>
      </div>
    </div>
  )
}
