import { Link } from 'react-router-dom';

export default function Families() {
  return (
    <div>
      {/* HERO */}
      <section className="section text-center section-grey">
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>A calm, structured start.</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
            We reduce the chaos by giving you a clear plan. No complex systems—just simple tools to track what helps your child thrive.
          </p>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Your First Month with Us</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <h3>Week 1: Setup & Profile</h3>
              <p>We meet to map your child's sensory needs, interests, and current barriers. We create a "Learner Profile" you can share with anyone.</p>
            </div>
            <div className="timeline-item">
              <h3>Week 2: Try Two Strategies</h3>
              <p>We pick just two small changes to test (e.g., a visual routine or a sensory break). You track them with a 2-minute daily log.</p>
            </div>
            <div className="timeline-item">
              <h3>Week 3: Pattern Check</h3>
              <p>We review the logs together. Did the meltdown reduce? Did engagement go up? We look at the data, not guesses.</p>
            </div>
            <div className="timeline-item">
              <h3>Week 4: The Next Step</h3>
              <p>We refine the plan. You get a "What Works" summary to keep, and we decide on the next goal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON GOALS TILES */}
      <section className="section section-grey">
        <div className="container">
          <h2 className="text-center">What we can work on</h2>
          <div className="tile-grid">
            <div className="tile">
              <h4>🏠 Home Routines</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Making mornings and bedtimes smoother.</p>
            </div>
            <div className="tile">
              <h4>📚 Homework Battles</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Reducing anxiety around schoolwork.</p>
            </div>
            <div className="tile">
              <h4>🗣️ Communication</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Finding the right visual or verbal tools.</p>
            </div>
            <div className="tile">
              <h4>⚡ Sensory Regulation</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Creating a "just right" environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container">
          <h2>Ready to try a different approach?</h2>
          <p style={{ marginBottom: '2rem' }}>Book a free 15-minute discovery call.</p>
          <Link to="/contact" className="btn btn-primary">Book a Call</Link>
        </div>
      </section>
    </div>
  );
}