import { Link } from 'react-router-dom';

export default function Safeguarding() {
  return (
    <div>
      {/* HERO */}
      <section className="section text-center">
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>Ethics & Privacy First</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
            We work with vulnerable populations. Your trust and privacy are not optional—they are the foundation of everything we do.
          </p>
        </div>
      </section>

      {/* CORE POLICIES */}
      <section className="section section-grey">
        <div className="container grid-2">
          
          <div>
            <h3>Our Core Principles</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', color: 'var(--accent-primary)' }}>1. Informed Consent</strong>
                Nothing happens without your explicit permission. You control what data is shared and who sees it.
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', color: 'var(--accent-primary)' }}>2. Data Minimization</strong>
                We only collect information that is strictly necessary to support learning outcomes. We do not hoard data.
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', color: 'var(--accent-primary)' }}>3. Secure Storage</strong>
                All digital records are stored in encrypted environments with restricted access.
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Medical Disclaimer</h3>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
              Autistic Learning is a support service, not a medical clinic.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              We do not provide medical diagnoses, psychological evaluations, or clinical therapy (such as ABA or Speech Therapy).
            </p>
            <p>
              Our role is to provide structured monitoring and educational support strategies. If we observe issues requiring clinical intervention, we will immediately recommend you consult a qualified healthcare professional.
            </p>
          </div>

        </div>
      </section>

      {/* RETENTION POLICY */}
      <section className="section text-center">
        <div className="container">
          <h2 style={{ fontSize: '1.5rem' }}>Data Retention & Rights</h2>
          <div style={{ maxWidth: '600px', margin: '2rem auto', textAlign: 'left' }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Your Right to Delete:</strong> You may request the deletion of all your family's data at any time. We will comply within 48 hours.
            </p>
            <p>
              <strong>Automatic Archiving:</strong> If you stop using our services, your data is archived for 6 months (in case you return) and then permanently deleted, unless you request otherwise.
            </p>
          </div>
          <Link to="/contact" className="btn btn-secondary">Have a privacy question?</Link>
        </div>
      </section>
    </div>
  );
}