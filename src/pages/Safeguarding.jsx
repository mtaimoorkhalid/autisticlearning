import { Link } from 'react-router-dom';

export default function Safeguarding() {
  return (
    <div>
      <section className="section text-center">
        <div className="container">
          <h1>Ethics & Privacy First</h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Your trust is our foundation. Here is how we protect it.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
           <div className="grid-2">
              <div className="card">
                 <h3>Medical Disclaimer</h3>
                 <p>We are an educational support service. We do NOT provide medical diagnoses, clinical therapy, or medical advice. Always consult a pediatrician for health concerns.</p>
              </div>
              <div className="card">
                 <h3>Informed Consent</h3>
                 <p>We do not observe or record without explicit, written permission from the legal guardian. You can withdraw consent at any time.</p>
              </div>
              <div className="card">
                 <h3>Data Minimization</h3>
                 <p>We only collect data that directly supports the learning plan. We do not keep "notes for the sake of notes."</p>
              </div>
              <div className="card">
                 <h3>Secure Storage</h3>
                 <p>All digital records are encrypted and stored in compliance with local data protection laws (GDPR/UK GDPR).</p>
              </div>
           </div>
        </div>
      </section>

      <section className="section text-center">
         <div className="container">
            <p>Questions about our policy?</p>
            <Link to="/contact" className="btn btn-primary">Contact Privacy Officer</Link>
         </div>
      </section>
    </div>
  );
}
