import { useEffect, useRef, useState } from 'react'

const techPills = [
  { name: 'FastAPI',      sub: 'Backend API' },
  { name: 'TimescaleDB',  sub: 'Time-Series DB' },
  { name: 'MQTT',         sub: 'IoT Broker' },
  { name: 'Redis',        sub: 'Caching' },
  { name: 'React 18',     sub: 'Frontend' },
  { name: 'Three.js',     sub: '3D Visualization' },
  { name: 'PyTorch / TF', sub: 'ML Models' },
  { name: 'Docker',       sub: 'Infrastructure' },
]

const metrics = [
  { num: '805K+', label: 'Sensor Readings' },
  { num: '15',    label: 'Active Sensors' },
  { num: '3',     label: 'Mine Zones' },
  { num: '30m',   label: 'Forecast Window' },
  { num: '2s',    label: 'Update Interval' },
]

const otherProjects = [
  {
    icon: '💳',
    badge: 'Mobile App',
    badgeColor: '#3b82f6',
    name: 'SwiftWallet',
    tagline: 'Mobile Money Transfer App — Like Wave, Built from Scratch',
    desc: 'A cross-platform mobile money transfer application enabling seamless peer-to-peer payments. Built with Flutter for iOS, Android, Web, macOS and Windows — with a full backend handling authentication, transaction history, and real-time balance updates.',
    stack: [
      { name: 'Flutter', sub: 'Cross-platform' },
      { name: 'Dart', sub: 'Language' },
      { name: 'Node.js', sub: 'Backend' },
      { name: 'REST API', sub: 'Architecture' },
    ],
    highlights: [
      'Cross-platform: iOS · Android · Web · macOS · Windows',
      'Peer-to-peer money transfers with authentication',
      'Clean UI inspired by Wave & Mobile Money apps',
      'Full backend with transaction management',
    ],
    github: 'https://github.com/taryam-william-kabore/SwiftWallet',
    relevance: 'Fintech · Banking · Wave · Mobile Money',
  },
  {
    icon: '🔐',
    badge: 'Full-Stack System',
    badgeColor: '#22c55e',
    name: 'University Access Control',
    tagline: 'QR Code Entry & Identity Verification for Campus Security',
    desc: 'A full-stack access control system enabling seamless entry management through QR code scanning and identity verification. Tracks student and staff entry/exit in real time with a Vue.js admin dashboard and Flutter mobile scanner app.',
    stack: [
      { name: 'Flutter', sub: 'Mobile Scanner' },
      { name: 'Vue.js', sub: 'Dashboard' },
      { name: 'Node.js', sub: 'Backend' },
      { name: 'MySQL', sub: 'Database' },
    ],
    highlights: [
      'QR code scanning for real-time entry & exit tracking',
      'Identity verification with live validation',
      'Vue.js admin dashboard for security personnel',
      'Flutter mobile app for on-site scanning',
    ],
    github: 'https://github.com/taryam-william-kabore/university-access-control',
    relevance: 'Mining · Oil & Gas · Corporate Security · Industrial',
  },
]

function Terminal() {
  const [cursor, setCursor] = useState(true)
  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{
      background: '#0d0d0d', border: '1px solid var(--border)',
      fontFamily: 'var(--mono)', overflow: 'hidden', marginTop: '2rem',
    }}>
      <div style={{
        background: 'var(--surface)', padding: '0.6rem 1rem',
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        borderBottom: '1px solid var(--border)',
      }}>
        {['#ef4444','#f59e0b','#22c55e'].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
        ))}
        <span style={{ fontSize: '0.65rem', color: 'var(--text3)', marginLeft: '0.5rem', letterSpacing: '0.08em' }}>
          mine-twin / live_sensor_feed.py — ZONE_B · SENSOR_07 · TARGET: 1M readings
        </span>
      </div>
      <div style={{ padding: '1.2rem', fontSize: '0.72rem', lineHeight: 1.9 }}>
        <div style={{ color: '#4b5563' }}># AI-Powered Mine Ventilation Digital Twin — Live Feed</div>
        <div style={{ color: '#4b5563' }}># TimescaleDB · MQTT · FastAPI · Three.js</div>
        <br />
        <div><span style={{ color: '#60a5fa' }}>timestamp</span>: <span style={{ color: '#34d399' }}>"2026-03-01T14:23:07.442Z"</span></div>
        <div><span style={{ color: '#60a5fa' }}>sensor_id</span>: <span style={{ color: '#34d399' }}>"ZONE_B.CH4.07"</span></div>
        <div><span style={{ color: '#60a5fa' }}>ch4_ppm</span>: <span style={{ color: 'var(--amber)' }}>847</span> <span style={{ color: '#4b5563' }}>// methane concentration</span></div>
        <div><span style={{ color: '#60a5fa' }}>o2_percent</span>: <span style={{ color: 'var(--amber)' }}>20.4</span></div>
        <br />
        <div style={{ color: '#4b5563' }}># ── AI Prediction Engine (TFT Model) ──</div>
        <div><span style={{ color: '#60a5fa' }}>forecast_30min</span>: <span style={{ color: '#ef4444' }}>1842 ppm</span> <span style={{ color: '#4b5563' }}>// ⚠ CRITICAL THRESHOLD</span></div>
        <div><span style={{ color: '#60a5fa' }}>confidence</span>: <span style={{ color: 'var(--amber)' }}>0.94</span></div>
        <div><span style={{ color: '#60a5fa' }}>alert_status</span>: <span style={{ color: '#ef4444' }}>"PRE_ALARM — INITIATE EVACUATION"</span></div>
        <div><span style={{ color: '#60a5fa' }}>readings_total</span>: <span style={{ color: 'var(--amber)' }}>805460</span></div>
        <div>█ <span style={{ display: 'inline-block', width: 8, height: 14, background: cursor ? 'var(--amber)' : 'transparent', verticalAlign: 'middle' }} /></div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
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
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--amber)' : 'var(--border)'}`,
        borderTop: `3px solid ${project.badgeColor}`,
        padding: '2rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s, border-color 0.2s`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: '0.65rem',
          padding: '0.25rem 0.7rem',
          background: project.badgeColor + '22',
          border: `1px solid ${project.badgeColor}44`,
          color: project.badgeColor,
          fontWeight: 700, letterSpacing: '0.08em',
        }}>
          {project.badge}
        </span>
        <span style={{ fontSize: '1.8rem' }}>{project.icon}</span>
      </div>

      <h3 style={{ fontFamily: 'var(--head)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.4rem' }}>
        {project.name}
      </h3>

      <p style={{
        fontFamily: 'var(--mono)', fontSize: '0.65rem',
        color: 'var(--amber)', letterSpacing: '0.03em', marginBottom: '1rem',
      }}>{project.tagline}</p>

      <p style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
        {project.desc}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {project.stack.map((p, i) => (
          <div key={i} style={{
            fontFamily: 'var(--mono)', fontSize: '0.62rem',
            padding: '0.5rem 0.3rem', background: 'var(--bg3)',
            border: '1px solid var(--border)', color: 'var(--text2)', textAlign: 'center',
          }}>
            {p.name}
            <span style={{ display: 'block', fontSize: '0.55rem', color: 'var(--text3)', marginTop: '0.1rem' }}>{p.sub}</span>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        {project.highlights.map((h, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.35rem' }}>
            <span style={{ color: project.badgeColor, fontSize: '0.7rem', marginTop: '0.15rem' }}>▸</span>
            <span style={{ color: 'var(--text2)', fontSize: '0.83rem' }}>{h}</span>
          </div>
        ))}
      </div>

      <div style={{
        fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--text3)',
        letterSpacing: '0.08em', marginBottom: '1.2rem',
        paddingTop: '1rem', borderTop: '1px solid var(--border)',
      }}>
        RELEVANT TO: <span style={{ color: 'var(--text2)' }}>{project.relevance}</span>
      </div>

      <a className="btn-secondary" href={project.github} target="_blank" rel="noreferrer"
        style={{ fontSize: '0.72rem', padding: '0.6rem 1.2rem' }}>
        VIEW ON GITHUB →
      </a>
    </div>
  )
}

export default function Project() {
  const [visible, setVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="project">
      <div className="section-label">// 03 — PROJECTS</div>
      <h2 className="section-title">What I've Built</h2>

      {/* CAPSTONE — FEATURED */}
      <div
        ref={ref}
        style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderTop: '3px solid var(--amber)', padding: '3rem',
          position: 'relative', overflow: 'hidden', marginBottom: '2rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div style={{
          position: 'absolute', top: -40, right: -40, width: 200, height: 200,
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <span style={{
          display: 'inline-block', fontFamily: 'var(--mono)', fontSize: '0.65rem',
          padding: '0.3rem 0.8rem', background: 'var(--amber)', color: '#000',
          fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem',
        }}>🏆 Capstone — Final Year Project</span>

        <h3 style={{
          fontFamily: 'var(--head)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
          fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2,
        }}>AI-Powered Mine Ventilation<br />Digital Twin</h3>

        <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 700, marginBottom: '2rem' }}>
          A real-time mine safety monitoring system using AI to predict dangerous gas concentrations{' '}
          <strong style={{ color: 'var(--text)' }}>30 minutes in advance</strong>, enabling orderly
          evacuation instead of panic response. Full IoT pipeline, time-series database, AI prediction
          engine, and 3D mine visualization. Advisor: <strong style={{ color: 'var(--text)' }}>Dr. Andre Claude BAYOMOCK</strong>.{' '}
          <strong style={{ color: 'var(--amber)' }}>Target: 1,000,000 sensor readings.</strong>
        </p>

        <div style={{
          display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2rem',
          padding: '1.5rem', background: 'var(--bg3)', border: '1px solid var(--border)',
        }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--head)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--amber)', display: 'block' }}>{m.num}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{m.label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {techPills.map((p, i) => (
            <div key={i} style={{
              fontFamily: 'var(--mono)', fontSize: '0.7rem', padding: '0.6rem 0.8rem',
              background: 'var(--bg3)', border: '1px solid var(--border)',
              color: 'var(--text2)', textAlign: 'center', letterSpacing: '0.05em',
            }}>
              {p.name}
              <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--text3)', marginTop: '0.2rem' }}>{p.sub}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <a className="btn-primary" href="https://github.com/taryam-william-kabore" target="_blank" rel="noreferrer">VIEW ON GITHUB</a>
          <a className="btn-secondary" href="#contact">DISCUSS PROJECT</a>
        </div>

        <Terminal />
      </div>

      {/* OTHER PROJECTS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {otherProjects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>

      {/* COMING SOON */}
      <div style={{
        marginTop: '1.5rem', background: 'var(--bg2)',
        border: '1px dashed var(--border)', padding: '2rem', textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '0.7rem',
          color: 'var(--text3)', letterSpacing: '0.15em', marginBottom: '0.5rem',
        }}>// MORE PROJECTS COMING</div>
        <p style={{ color: 'var(--text3)', fontSize: '0.85rem' }}>
          5 additional projects in development — IoT dashboards, ML pipelines, fintech APIs and more.
          Follow on{' '}
          <a href="https://github.com/taryam-william-kabore" target="_blank" rel="noreferrer"
            style={{ color: 'var(--amber)', textDecoration: 'none' }}>GitHub</a> for updates.
        </p>
      </div>
    </section>
  )
}
