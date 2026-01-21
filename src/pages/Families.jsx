import { Link } from 'react-router-dom';

export default function Families() {
  return (
    <div>
      {/* HERO */}
      <section className="section text-center">
        <div className="container">
          <h1>A calm, structured start.</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
            We reduce the chaos by giving you a clear plan. No complex systems—just simple tools to track what helps your child thrive.
          </p>
        </div>
      </section>

      {/* ANIMATED TIMELINE */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center">Your First Month with Us</h2>
          
          <div className="timeline">
            <div className="timeline-item" style={{ '--item-index': 0 }}>
              <h3>Week 1: Setup & Profile</h3>
              <p>We meet to map your child's sensory needs, interests, and current barriers. We create a "Learner Profile" you can share with anyone.</p>
            </div>
            <div className="timeline-item" style={{ '--item-index': 1 }}>
              <h3>Week 2: Try Two Strategies</h3>
              <p>We pick just two small changes to test (e.g., a visual routine or a sensory break). You track them with a 2-minute daily log.</p>
            </div>
            <div className="timeline-item" style={{ '--item-index': 2 }}>
              <h3>Week 3: Pattern Check</h3>
              <p>We review the logs together. Did the meltdown reduce? Did engagement go up? We look at the data, not guesses.</p>
            </div>
            <div className="timeline-item" style={{ '--item-index': 3 }}>
              <h3>Week 4: The Next Step</h3>
              <p>We refine the plan. You get a "What Works" summary to keep, and we decide on the next goal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON GOALS TILES */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>What we can work on</h2>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>🏠 Home Routines</h3>
              <p>Making mornings and bedtimes smoother.</p>
            </div>
            <div className="card">
              <h3>📚 Homework Battles</h3>
              <p>Reducing anxiety around schoolwork.</p>
            </div>
            <div className="card">
              <h3>🗣️ Communication</h3>
              <p>Finding the right visual or verbal tools.</p>
            </div>
            <div className="card">
              <h3>⚡ Sensory Regulation</h3>
              <p>Creating a "just right" environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center bg-white">
        <div className="container">
          <h3>Ready to try a different approach?</h3>
          <p style={{ marginBottom: '2rem' }}>Book a free 15-minute discovery call.</p>
          <Link to="/contact" className="btn btn-primary">Book a Call</Link>
        </div>
      </section>
    </div>
  );
}
