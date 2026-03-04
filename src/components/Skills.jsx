import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    icon: '⚙️', title: 'Backend & APIs',
    tags: [
      { label: 'FastAPI', hot: true }, { label: 'Python', hot: true },
      { label: 'Node.js', hot: true }, { label: 'REST API' },
      { label: 'MQTT' }, { label: 'Mosquitto' },
      { label: 'Redis' }, { label: 'WebSockets' },
    ],
  },
  {
    icon: '🗄️', title: 'Data & Databases',
    tags: [
      { label: 'PostgreSQL', hot: true }, { label: 'TimescaleDB', hot: true },
      { label: 'MySQL' }, { label: 'Time-Series Data' },
      { label: 'SQL' }, { label: 'Data Pipelines' },
    ],
  },
  {
    icon: '🤖', title: 'AI / Machine Learning',
    tags: [
      { label: 'PyTorch', hot: true }, { label: 'TensorFlow', hot: true },
      { label: 'TFT (Temporal Fusion Transformer)' },
      { label: 'LSTM / GRU' }, { label: 'Predictive Analytics' },
    ],
  },
  {
    icon: '🖥️', title: 'Frontend & Mobile',
    tags: [
      { label: 'React 18', hot: true }, { label: 'Three.js', hot: true },
      { label: 'Flutter', hot: true }, { label: 'Dart', hot: true },
      { label: 'Vue.js' }, { label: '@react-three/fiber' },
      { label: 'JavaScript' }, { label: 'HTML/CSS' },
    ],
  },
  {
    icon: '☁️', title: 'Infrastructure & DevOps',
    tags: [
      { label: 'Docker', hot: true }, { label: 'Docker Compose', hot: true },
      { label: 'Git / GitHub' }, { label: 'Linux' },
      { label: 'Container Orchestration' },
    ],
  },
  {
    icon: '🏭', title: 'Industrial / Domain',
    tags: [
      { label: 'Digital Twins', hot: true }, { label: 'IoT Systems', hot: true },
      { label: 'SCADA Concepts' }, { label: 'Mine Safety' },
      { label: 'Real-Time Monitoring' }, { label: 'Sensor Simulation' },
    ],
  },
]

export default function Skills() {
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
    <section id="skills" style={{ background: 'var(--bg2)' }}>
      <div className="section-label">// 02 — SKILLS</div>
      <h2 className="section-title">Technical Stack</h2>

      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        {skillGroups.map((group, i) => (
          <div key={i} style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            padding: '1.8rem',
          }}>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '0.7rem',
              color: 'var(--amber)', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '1.2rem',
              paddingBottom: '0.8rem', borderBottom: '1px solid var(--border)',
            }}>
              {group.icon} {group.title}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.tags.map((tag, j) => (
                <span key={j} style={{
                  fontFamily: 'var(--mono)', fontSize: '0.7rem',
                  padding: '0.3rem 0.7rem',
                  background: 'var(--bg3)',
                  border: `1px solid ${tag.hot ? 'rgba(245,158,11,0.4)' : 'var(--border)'}`,
                  color: tag.hot ? 'var(--amber2)' : 'var(--text2)',
                  letterSpacing: '0.04em',
                  transition: 'all 0.2s',
                  cursor: 'default',
                }}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
