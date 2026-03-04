import { useEffect, useRef, useState } from 'react'

export default function Education() {
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

  const cardStyle = {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderLeft: '3px solid var(--amber)',
    padding: '2rem',
  }

  return (
    <section id="education">
      <div className="section-label">// 05 — EDUCATION</div>
      <h2 className="section-title">Academic Background</h2>

      <div
        ref={ref}
        style={{
          display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 700,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        {/* University */}
        <div style={cardStyle}>
          <div style={{ fontFamily: 'var(--head)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.3rem' }}>
            Bachelor of Science in Computer Science
          </div>
          <div style={{ color: 'var(--amber)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
            International University of Grand-Bassam (IUGB)
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text3)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            2023 — 2026 · Classes end May/June · Graduation Ceremony Jul–Aug 2026 · Grand-Bassam, Côte d'Ivoire
          </div>
          <p style={{ color: 'var(--text2)', fontSize: '0.92rem', lineHeight: 1.7 }}>
            Final-year capstone: AI-Powered Mine Ventilation Digital Twin. Coursework in algorithms,
            databases, software engineering, machine learning, and network systems.
            Research advisor: Dr. Andre Claude BAYOMOCK.
          </p>
        </div>

        {/* Ghana English Studies */}
        <div style={{ ...cardStyle, borderLeft: '3px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--head)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.3rem' }}>
            English as a Foreign Language — CEFR C (Proficiency)
          </div>
          <div style={{ color: 'var(--text2)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            Eagle Vision Language Institute · British Council Aptis Examination
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text3)', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>
            SEP 2021 — MAY 2022 · Accra, Ghana 🇬🇭
          </div>
          <p style={{ color: 'var(--text2)', fontSize: '0.85rem', lineHeight: 1.6 }}>
            Intensive English language programme completed before joining IUGB.
            Passed the British Council Aptis General examination (Listening · Reading · Speaking · Writing)
            — overall CEFR C. Certificate issued 27 May 2022 · Ref: EVLI-3525.
          </p>
        </div>

        {/* High School */}
        <div style={{ ...cardStyle, borderLeft: '3px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--head)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.3rem' }}>
            Baccalaureate — Series D (Scientific: Natural Sciences)
          </div>
          <div style={{ color: 'var(--text2)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            Lycée Mixte de Gounghin
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text3)', letterSpacing: '0.1em' }}>
            OCT 2020 — JUL 2021 · Burkina Faso 🇧🇫
          </div>
        </div>

        {/* Certifications */}
        <div style={{ ...cardStyle, borderLeft: '3px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--head)', fontSize: '1rem', fontWeight: 800, marginBottom: '1rem' }}>
            Licenses & Certifications
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              'Effective Listening — LinkedIn (Oct 2024)',
              'Developing Your Emotional Intelligence — LinkedIn (Oct 2024)',
              'Emotional Intelligence — LinkedIn (Oct 2024)',
            ].map((cert, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ color: 'var(--amber)', fontSize: '0.7rem' }}>▸</span>
                <span style={{ color: 'var(--text2)', fontSize: '0.85rem' }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
