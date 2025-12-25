import { Link } from 'react-router-dom';

export default function Method() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="section text-center">
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>The CLEAR Loop</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto' }}>
            We do not rely on guesswork. We use a structured cycle to ensure every decision is based on observation and evidence.
          </p>
        </div>
      </section>

      {/* THE FRAMEWORK STEPS */}
      <section className="section section-grey">
        <div className="container">
          <div className="grid-3">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Capture</h3>
              <p>We observe the learner in their natural environment to identify current barriers and strengths.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Learn</h3>
              <p>We research specific strategies that match the learner's sensory profile and needs.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Evaluate</h3>
              <p>We implement a strategy and track specific indicators (e.g., engagement duration) for 7 days.</p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h3>Adjust</h3>
              <p>We review the data. If it works, we keep it. If not, we modify the approach immediately.</p>
            </div>
            <div className="step-card">
              <div className="step-number">05</div>
              <h3>Repeat</h3>
              <p>We continue the cycle, layering successful strategies to build a consistent support system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDICATORS SECTION */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>What we track</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
              We focus on 5 core indicators that signal a supportive learning environment.
            </p>
            <Link to="/tools" className="btn btn-secondary">See the Tools</Link>
          </div>
          <div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                <strong>Engagement:</strong> Time spent focused on a task without distress.
              </li>
              <li style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                <strong>Sensory Load:</strong> Frequency of sensory-related breaks or overwhelm.
              </li>
              <li style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                <strong>Communication:</strong> Effectiveness of visual or verbal supports used.
              </li>
              <li style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                <strong>Transition Ease:</strong> Time taken to switch between activities.
              </li>
              <li style={{ padding: '1rem' }}>
                <strong>Task Success:</strong> Completion of learning goals with independence.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* DISCLAIMER / BOUNDARIES */}
      <section className="section text-center section-grey">
        <div className="container">
          <h3 style={{ fontSize: '1.5rem' }}>Our Scope of Practice</h3>
          <p style={{ maxWidth: '600px', margin: '1rem auto', color: 'var(--text-light)' }}>
            We support learning access and consistency. We do not provide medical diagnoses or clinical therapy. If clinical concerns arise, we refer to qualified healthcare providers.
          </p>
        </div>
      </section>
    </div>
  );
}