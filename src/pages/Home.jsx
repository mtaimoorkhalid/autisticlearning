import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="section text-center">
        <div className="container">
          <h1>Support that adapts to your child,<br />guided by clear tracking.</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', margin: '1.5rem auto 2.5rem' }}>
            We bridge the gap between home and school with practical, evidence-based documentation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/families" className="btn btn-primary">I am a Parent / Caregiver</Link>
            <Link to="/educators" className="btn" style={{ background: 'white', border: '1px solid var(--border-subtle)' }}>I am an Educator</Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM (Grid of Cards) */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Why learning often stalls</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Environment Overwhelm</h3>
              <p>Sensory barriers (noise, lights) often trigger resets before learning can even begin.</p>
            </div>
            <div className="card">
              <h3>Inconsistent Strategies</h3>
              <p>What works at home isn't known at school, leading to confusion for the learner.</p>
            </div>
            <div className="card">
              <h3>Guesswork</h3>
              <p>Without clear logs, adults rely on memory instead of patterns to make decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES (What we do) */}
      <section className="section">
        <div className="container text-center">
          <h2>We provide clarity</h2>
          <div className="grid-2">
             <div className="card">
                <h3>📝 Learner Profile</h3>
                <p>A living document of sensory needs, interests, and barriers.</p>
             </div>
             <div className="card">
                <h3>📊 Weekly Snapshot</h3>
                <p>A simple log of what strategies were tried and the result.</p>
             </div>
          </div>
        </div>
      </section>

      {/* TRUST FOOTER */}
      <section className="section text-center bg-white">
        <div className="container">
          <p style={{ fontWeight: 'bold', color: 'var(--accent-blue)' }}>
            Privacy-first. Consent-based. Supportive—non-diagnostic.
          </p>
        </div>
      </section>
    </div>
  );
}
