import { useEffect, useRef, useState } from 'react'

const infoRows = [
  { key: 'Full Name',    val: 'Taryam William Rodrigue Kabore' },
  { key: 'Institution', val: 'International University of Grand-Bassam (IUGB)' },
  { key: 'Degree',      val: 'BSc Computer Science · 2023–2026' },
  { key: 'Location',    val: 'Grand-Bassam, Côte d\'Ivoire 🇨🇮' },
  { key: 'Origin',      val: 'Burkina Faso 🇧🇫' },
  { key: 'Status',      val: '● Open to Internship Offers · Available August 2026', green: true },
  { key: 'Languages',   val: 'French (Native) · English (CEFR C · Aptis British Council)' },
]

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="divider" />
      <div className="section-label">// 01 — ABOUT</div>
      <h2 className="section-title">Who I Am</h2>

      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '4rem',
          alignItems: 'start',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div>
          {[
            <>I'm <strong>Taryam William Rodrigue Kabore</strong>, a final-year Bachelor of Science in Computer Science student at the International University of Grand-Bassam, graduating <strong>Summer 2026</strong>. I am actively seeking <strong>internship opportunities</strong> where I can contribute to real-world digital transformation and AI/IoT projects.</>,
            <>My engineering focus sits at the crossroads of <strong>AI/ML, IoT systems, and industrial data infrastructure</strong>. I build systems that solve real-world problems in high-stakes environments. My capstone project is proof: a production-grade mine ventilation digital twin with a working AI prediction pipeline and over <strong>805,000 real sensor readings</strong> collected.</>,
            <>I'm actively seeking a <strong>final-year internship</strong> in <strong>mining, oil & gas, fintech, telecom, and industrial tech</strong> — where I can contribute to digital transformation initiatives while completing my degree. My background in mining-heavy economies gives me a genuine understanding of the industry I'm building for.</>,
          ].map((text, i) => (
            <p key={i} style={{
              color: 'var(--text2)', fontSize: '1rem',
              lineHeight: 1.8, marginBottom: '1.2rem',
            }}>
              {text}
            </p>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {infoRows.map((row, i) => (
            <div key={i} style={{
              display: 'flex', flexDirection: 'column', gap: '0.2rem',
              paddingBottom: '1.2rem',
              borderBottom: '1px solid var(--border)',
            }}>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '0.65rem',
                color: 'var(--text3)', letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>{row.key}</span>
              <span style={{
                fontSize: '0.95rem',
                color: row.green ? 'var(--green)' : 'var(--text)',
              }}>{row.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
