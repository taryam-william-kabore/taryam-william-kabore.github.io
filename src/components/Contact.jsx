import { useEffect, useRef, useState } from 'react'

const contactLinks = [
  { icon: '✉️', label: 'kaboret1@student.iugb.edu.ci',          sub: 'Email — fastest response',          href: 'mailto:kaboret1@student.iugb.edu.ci' },
  { icon: '📞', label: '+225 07 06 26 72 05',                    sub: 'WhatsApp / Call — Côte d\'Ivoire',   href: 'tel:+2250706267205' },
  { icon: '💼', label: 'linkedin.com/in/taryam-william-kabore', sub: 'LinkedIn Profile', href: 'https://linkedin.com/in/taryam-william-kabore' },
  { icon: '🔗', label: 'github.com/taryam-william-kabore',        sub: 'GitHub — Projects & Code',           href: 'https://github.com/taryam-william-kabore' },
]

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(null)
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const inputStyle = {
    background: 'var(--surface)', border: '1px solid var(--border)',
    color: 'var(--text)', padding: '0.8rem 1rem',
    fontFamily: 'var(--body)', fontSize: '0.9rem',
    outline: 'none', width: '100%',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ background: 'var(--bg2)' }}>
      <div className="section-label">// 06 — CONTACT</div>
      <h2 className="section-title">Let's Talk</h2>

      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div>
          <p style={{
            fontSize: '1rem', color: 'var(--text2)',
            lineHeight: 1.8, marginBottom: '2rem',
          }}>
            I complete my degree in Summer 2026 and am available to start an internship from <strong style={{color:'var(--text)'}}>August 2026</strong>.
            I'm seeking opportunities in <strong style={{color:'var(--text)'}}>mining, oil & gas, fintech, and industrial tech</strong> — particularly with companies investing in digital transformation, IoT systems, data infrastructure, or AI. If that's you, I want to hear from you.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contactLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.2rem',
                  background: 'var(--surface)',
                  border: `1px solid ${hovered === i ? 'var(--amber)' : 'var(--border)'}`,
                  textDecoration: 'none',
                  color: hovered === i ? 'var(--amber)' : 'var(--text)',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '1.2rem', width: 36, textAlign: 'center' }}>{link.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem' }}>{link.label}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text3)' }}>{link.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { label: 'Your Name', key: 'name', placeholder: 'Jean-Marc Koffi', type: 'text' },
            { label: 'Company',   key: 'company', placeholder: 'Endeavour Mining CI', type: 'text' },
            { label: 'Email',     key: 'email', placeholder: 'recruiter@company.com', type: 'email' },
          ].map(f => (
            <div key={f.key}>
              <label style={{
                fontFamily: 'var(--mono)', fontSize: '0.65rem',
                color: 'var(--text3)', letterSpacing: '0.1em',
                textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem',
              }}>{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.key]}
                onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                style={inputStyle}
              />
            </div>
          ))}
          <div>
            <label style={{
              fontFamily: 'var(--mono)', fontSize: '0.65rem',
              color: 'var(--text3)', letterSpacing: '0.1em',
              textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem',
            }}>Message</label>
            <textarea
              rows={4}
              placeholder="We'd like to discuss an internship opportunity..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>
          <button className="btn-primary" style={{ width: '100%' }}
            onClick={() => alert('Form ready to connect to a backend or EmailJS service!')}>
            SEND MESSAGE
          </button>
        </div>
      </div>
    </section>
  )
}
