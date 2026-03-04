export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 5%',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text3)',
      }}>
        © 2026 — KABORE TARYAM WILLIAM RODRIGUE
      </div>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '0.65rem',
        color: 'var(--text3)', letterSpacing: '0.08em',
      }}>
        GRAND-BASSAM · CÔTE D'IVOIRE 🇨🇮
      </div>
    </footer>
  )
}
