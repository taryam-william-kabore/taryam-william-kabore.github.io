import { useEffect, useRef, useState } from 'react'

const sectors = [
  { icon: '⛏️', name: 'Mining',            sub: 'Endeavour, SODEMI, Perseus, Fortuna' },
  { icon: '🛢️', name: 'Oil & Gas',         sub: 'Eni CI, TotalEnergies, Petroci, SLB' },
  { icon: '🏦', name: 'Fintech & Banking', sub: 'Wave, Ecobank, Djamo, CinetPay' },
  { icon: '📡', name: 'Telecoms & Tech',   sub: 'Orange CI, MTN, Huawei, Ericsson' },
  { icon: '🌍', name: 'Multinationals',    sub: 'Schneider Electric, Siemens, SIFCA' },
]

export default function Sectors() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(null)
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
    <section id="sectors" style={{ background: 'var(--bg2)' }}>
      <div className="section-label">// 04 — TARGET SECTORS</div>
      <h2 className="section-title">Industry Alignment</h2>

      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        {sectors.map((s, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: 'var(--surface)',
              border: `1px solid ${hovered === i ? 'var(--amber)' : 'var(--border)'}`,
              padding: '1.5rem 1rem',
              textAlign: 'center',
              cursor: 'default',
              transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'all 0.25s',
            }}
          >
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.8rem' }}>{s.icon}</span>
            <div style={{
              fontFamily: 'var(--head)', fontSize: '0.85rem',
              fontWeight: 700, marginBottom: '0.3rem',
            }}>{s.name}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text3)' }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
