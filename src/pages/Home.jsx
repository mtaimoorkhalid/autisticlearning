import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      
      {/* SECTION 1: HERO (Simple & Direct) */}
      <section className="section text-center" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <h1 style={{ maxWidth: '800px', margin: '0 auto' }}>
            Support that adapts to your child <br />
            <span style={{ color: 'var(--accent-primary)' }}>guided by clear tracking.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', maxWidth: '650px', margin: '1.5rem auto 2.5rem' }}>
            We help families and educators test learning strategies, record what works, and reduce everyday barriers—without overwhelming systems.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/families" className="btn btn-primary">I’m a Parent / Caregiver</Link>
            <Link to="/educators" className="btn btn-secondary">I’m an Educator</Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM (3 Cards) */}
      <section className="section section-grey">
        <div className="container">
          <h2 className="text-center">Why learning often stalls</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Environment Overwhelm</h3>
              <p>Learning stops when sensory needs aren't met. We track environmental triggers to find the "just right" setting.</p>
            </div>
            <div className="card">
              <h3>Inconsistent Strategies</h3>
              <p>What works at home might not happen at school. We align everyone on the same successful tools.</p>
            </div>
            <div className="card">
              <h3>Guesswork</h3>
              <p>"Trying everything" is exhausting. We use simple logs to see patterns in what actually helps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT YOU GET (Deliverables) */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Clear documentation,<br />not just advice.</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We don't just talk. We provide structured artifacts that help you advocate for the learner's needs.
            </p>
            <Link to="/method" style={{ color: 'var(--accent-primary)', fontWeight: 'bold', textDecoration: 'none' }}>
              See our Method &rarr;
            </Link>
          </div>
          <div>
            <div className="card" style={{ background: 'var(--accent-soft)', border: 'none' }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  ✅ <strong>Learner Profile:</strong> Preferences & Barriers map.
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  ✅ <strong>Weekly Snapshot:</strong> What was tried + outcome.
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  ✅ <strong>Review Plan:</strong> Data-driven next steps.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  ✅ <strong>Shared Summary:</strong> For home & school alignment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS (3 Steps) */}
      <section className="section section-grey">
        <div className="container">
          <h2 className="text-center">How we work together</h2>
          <div className="grid-3">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Understand</h3>
              <p>We map the learner's context, sensory needs, and current barriers.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Track</h3>
              <p>We test specific strategies and log simple indicators (engagement, ease).</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Adapt</h3>
              <p>We review the patterns every few weeks and refine the plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST FOOTER */}
      <section className="text-center" style={{ padding: '2rem 0', background: 'var(--white)' }}>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
          Privacy-first. Consent-based. Supportive—non-diagnostic. <Link to="/safeguarding">Read our Ethics.</Link>
        </p>
      </section>

    </div>
  );
}