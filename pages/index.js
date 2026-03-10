function Header({ nav }) {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="/" className="brand">
          <img src="/logo.png" alt="EVRIFA logo" className="brand-logo" />
          <div>
            <div className="brand-kicker">EVRIFA</div>
            <div className="brand-name">Eastern Virginia Regional Industrial Facility Authority</div>
          </div>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item.label} href={item.link} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/contact" className="button button-primary header-cta">Start a Project</a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <img src="/logo.png" alt="EVRIFA logo" className="footer-logo" />
          <p className="footer-text">
            The Eastern Virginia Regional Industrial Facility Authority works with regional partners to develop industrial sites and attract investment.
          </p>
        </div>

        <div>
          <h3 className="footer-title">Navigation</h3>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/sites">Industrial Sites</a>
            <a href="/governance">Governance</a>
            <a href="/documents">Documents</a>
            <a href="/news">News</a>
            <a href="/the-common-ground">The Common Ground</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Contact</h3>
          <p className="footer-text">Eastern Virginia Regional Industrial Facility Authority</p>
          <a href="/contact" className="button button-light footer-button">Contact EVRIFA</a>
        </div>
      </div>
    </footer>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function FeatureCard({ title, text, link }) {
  return (
    <a href={link} className="feature-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </a>
  )
}

const styles = `
:root {
  --blue: #1f57a4;
  --blue-2: #2f83c5;
  --gold: #f2b632;
  --ink: #132033;
  --muted: #5f6f82;
  --bg: #eef2f7;
  --card: #ffffff;
  --border: #d7e0ea;
  --footer: #0f1b2f;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg);
  color: var(--ink);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.page-shell {
  min-height: 100vh;
}

.wrap {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 82px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.brand-logo,
.footer-logo {
  height: 42px;
  width: auto;
}

.brand-kicker {
  font-size: 11px;
  letter-spacing: 0.24em;
  font-weight: 800;
  color: var(--blue);
}

.brand-name {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.3;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-link {
  font-size: 15px;
  color: #314257;
}

.nav-link:hover {
  color: var(--blue);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 13px 22px;
  font-weight: 700;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button-primary {
  background: var(--blue);
  color: #fff;
  box-shadow: 0 10px 24px rgba(31, 87, 164, 0.18);
}

.button-secondary {
  background: #fff;
  color: var(--ink);
  border: 1px solid var(--border);
}

.button-light {
  background: #fff;
  color: var(--blue);
}

.header-cta {
  white-space: nowrap;
}

.hero-section {
  padding: 72px 0 36px;
  background:
    radial-gradient(circle at 0% 0%, rgba(242,182,50,0.22), transparent 30%),
    radial-gradient(circle at 100% 10%, rgba(47,131,197,0.14), transparent 25%),
    linear-gradient(180deg, #f8fbfe 0%, var(--bg) 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 38px;
  align-items: stretch;
}

.eyebrow {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--blue);
}

.eyebrow-light {
  color: #dfe8ff;
}

.hero-copy h1 {
  margin: 12px 0 0;
  font-size: clamp(42px, 6vw, 72px);
  line-height: 0.98;
  letter-spacing: -0.04em;
}

.hero-text {
  margin: 24px 0 0;
  max-width: 640px;
  font-size: 20px;
  line-height: 1.7;
  color: var(--muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-top: 36px;
}

.stat-card {
  background: rgba(255,255,255,0.88);
  border: 1px solid rgba(255,255,255,0.8);
  border-radius: 24px;
  padding: 22px 18px;
  box-shadow: 0 14px 34px rgba(21, 39, 66, 0.08);
}

.stat-value {
  font-size:
