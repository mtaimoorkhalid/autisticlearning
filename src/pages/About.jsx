import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="section text-center section-grey">
        <div className="container">
          <h1>About Autistic Learning</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
            We are a small, dedicated team focused on bridging the gap between home, school, and health through structured support.
          </p>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Our Mission</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              To empower families and educators with clear, ethical tools that make learning accessible for every autistic child.
            </p>
            <p>
              We believe that when you remove the barriers in the environment and track what actually works, the learner can thrive without needing to be "fixed."
            </p>
          </div>
          
          <div>
            <h3>Our Values</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><strong>Respect:</strong> We use neuro-affirming practices.</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><strong>Clarity:</strong> We replace jargon with plain language.</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><strong>Collaboration:</strong> Parents are experts on their children.</li>
              <li style={{ padding: '10px 0' }}><strong>Integrity:</strong> We never promise cures or quick fixes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* THE TEAM (Zainab Bio) */}
      <section className="section section-grey">
        <div className="container text-center">
          <h2 style={{ marginBottom: '3rem' }}>Who We Are</h2>
          
          {/* TEAM CARD */}
          <div className="card" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Zainab</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Founder & Lead Support Coordinator
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Healthcare-trained professional with experience in patient care, ethics, structured observation, and monitoring frameworks.
            </p>
            <p>
              Zainab focuses on caregiver collaboration and ethical documentation practices. Her approach combines behavioral science principles with a compassionate, family-centered lens to support developmental growth.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container">
          <h2>Let's work together.</h2>
          <br />
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}