import { useState, useEffect } from 'react'

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '1.2rem 5%',
    background: 'rgba(10,11,13,0.9)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border)',
  },
  logo: {
    fontFamily: 'var(--mono)', fontSize: '0.85rem',
    color: 'var(--amber)', letterSpacing: '0.08em',
  },
  links: {
    display: 'flex', gap: '2rem', listStyle: 'none',
  },
  link: {
    fontFamily: 'var(--mono)', fontSize: '0.75rem',
    color: 'var(--text2)', textDecoration: 'none',
    letterSpacing: '0.05em', transition: 'color 0.2s',
  },
  cta: {
    fontFamily: 'var(--mono)', fontSize: '0.75rem',
    background: 'var(--amber)', color: '#000',
    padding: '0.5rem 1.2rem', border: 'none',
    cursor: 'pointer', fontWeight: 700,
    letterSpacing: '0.05em', textDecoration: 'none',
  },
}

const navItems = ['about','skills','project','sectors','education','contact']

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) setActive(s.id)
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>WRK.PORTFOLIO</div>
      <ul style={styles.links}>
        {navItems.map(id => (
          <li key={id}>
            <a
              href={`#${id}`}
              style={{
                ...styles.link,
                color: active === id ? 'var(--amber)' : 'var(--text2)',
              }}
            >
              {id.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
      <a href="mailto:kaboret1@student.iugb.edu.ci" style={styles.cta}>HIRE ME</a>
    </nav>
  )
}
