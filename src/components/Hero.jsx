import { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'Sensor Readings Collected', value: '805,460+', desc: 'Real-time IoT data · 15 sensors × 3 zones' },
  { label: 'Prediction Window', value: '30 min', desc: 'AI gas hazard forecasting ahead of event' },
  { label: 'Data Frequency', value: '2 sec', desc: 'MQTT publish interval, real-time pipeline' },
  { label: 'Target Sectors', value: '5', desc: 'Mining · Oil & Gas · Fintech · Telecom · Industrial' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '0 5%',
        paddingTop: '5rem',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* LEFT */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: 'var(--mono)', fontSize: '0.7rem',
          color: 'var(--amber)', letterSpacing: '0.15em', textTransform: 'uppercase',
          marginBottom: '1.5rem', padding: '0.4rem 0.8rem',
          border: '1px solid rgba(245,158,11,0.3)',
          background: 'var(--amber-dim)',
        }}>
          <span style={{
            width: 6, height: 6, background: 'var(--amber)',
            borderRadius: '50%', animation: 'pulse 2s infinite',
            display: 'inline-block',
          }} />
          Available for Internship · August 2026
        </div>

        <h1 style={{
          fontFamily: 'var(--head)',
          fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem',
        }}>
          Taryam William Rodrigue
          <span style={{ color: 'var(--amber)', display: 'block' }}>Kabore.</span>
        </h1>

        <p style={{
          fontFamily: 'var(--mono)', fontSize: '0.8rem',
          color: 'var(--text2)', letterSpacing: '0.05em', marginBottom: '1.8rem',
        }}>
          BSc Computer Science · Grand-Bassam, Côte d'Ivoire
        </p>

        <p style={{
          fontSize: '1.05rem', color: 'var(--text2)',
          maxWidth: 480, marginBottom: '2.5rem', lineHeight: 1.7,
        }}>
          Final-year CS student building{' '}
          <strong style={{ color: 'var(--amber)' }}>AI-powered industrial systems</strong>{' '}
          at the intersection of IoT, machine learning, and real-time data infrastructure.
          My capstone: a{' '}
          <strong style={{ color: 'var(--amber)' }}>digital twin</strong>{' '}
          for mine ventilation safety — predicting gas hazards 30 minutes before they become emergencies.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a className="btn-primary" href="#project">VIEW CAPSTONE</a>
          <a className="btn-secondary" href="#contact">GET IN TOUCH</a>
        </div>
      </div>

      {/* RIGHT — stat cards */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column', gap: '1rem',
        paddingLeft: '4rem',
      }}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderLeft: '3px solid var(--amber)',
              padding: '1.2rem 1.5rem',
              marginLeft: i % 2 === 1 ? '2rem' : '0',
              animation: `slideIn 0.6s ease ${i * 0.1}s both`,
            }}
          >
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '0.65rem',
              color: 'var(--text3)', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '0.4rem',
            }}>{s.label}</div>
            <div style={{
              fontFamily: 'var(--head)', fontSize: '1.6rem',
              fontWeight: 800, color: 'var(--amber)',
            }}>{s.value}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text2)', marginTop: '0.2rem' }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
