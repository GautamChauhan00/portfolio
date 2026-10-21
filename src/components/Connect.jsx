const LINKS = [
  {
    platform: 'Email',
    value: 'gautam.chauhan.work1@gmail.com',
    href: 'mailto:gautam.chauhan.work1@gmail.com',
    id: 'connect-email',
  },
  {
    platform: 'Phone',
    value: '+91 9319450464',
    href: 'tel:+919319450464',
    id: 'connect-phone',
  },
  {
    platform: 'LinkedIn',
    value: 'Gautam Chauhan',
    href: 'https://linkedin.com',
    id: 'connect-linkedin',
  },
  {
    platform: 'GitHub',
    value: 'GautamChauhan00',
    href: 'https://github.com/GautamChauhan00',
    id: 'connect-github',
  },
]

export default function Connect() {
  return (
    <div className="container">
      <span className="section-label">connect</span>
      <h2 className="section-heading reveal">let's be friends</h2>
      <p className="section-sub reveal">don't be a stranger</p>

      <div className="connect-links">
        {LINKS.map((link, i) => (
          <a
            key={link.id}
            id={link.id}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="connect-link reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="connect-label-wrap">
              <span className="connect-platform">{link.platform}</span>
              <span className="connect-value">{link.value}</span>
            </div>
            <span className="connect-arrow">↗</span>
          </a>
        ))}
      </div>

      <p className="connect-note reveal">don't be shy — say hi!</p>
    </div>
  )
}
