import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <section className="section text-center">
        <div className="container">
          <h1>About Autistic Learning</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
            Bridging the gap between home, school, and health through structured support.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid-2">
          
          <div className="card">
            <h2>Our Mission</h2>
            <p>To empower families and educators with clear, ethical tools that make learning accessible for every autistic child.</p>
            <p>We believe that when you remove the barriers in the environment, the learner can thrive without needing to be "fixed."</p>
          </div>
          
          <div className="card">
            <h3>Our Values</h3>
            <ul className="list-bordered">
              <li><strong>Respect:</strong> We use neuro-affirming practices.</li>
              <li><strong>Clarity:</strong> We replace jargon with plain language.</li>
              <li><strong>Collaboration:</strong> Parents are experts on their children.</li>
              <li><strong>Integrity:</strong> We never promise cures or quick fixes.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="special-title">Who We Are</h2>
          
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            {/* The Special Pink Card */}
            {/*<div className="card special">
              <h3>Zainab</h3>
              <span className="text-overline">Founder & Lead Support Coordinator</span>
              
              <p>Healthcare-trained professional with experience in patient care, ethics, and structured observation.</p>
              <p>Zainab focuses on caregiver collaboration and ethical documentation practices to support developmental growth.</p>
            </div>*/}
          </div>

        </div>
      </section>

      <section className="section text-center bg-white">
        <div className="container">
          <h3>Let's work together.</h3>
          <br />
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
