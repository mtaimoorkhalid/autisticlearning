import { Link } from 'react-router-dom';

export default function Tools() {
  return (
    <div>
      <section className="section text-center">
        <div className="container">
          <h1>Structured Documentation</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
            We replace scattered notes with clear, usable records.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
           
           <div className="card">
              <h3>📝 Learner Profile</h3>
              <p>A summarized view of the child's strengths, barriers, and sensory needs.</p>
              <div style={{ background: '#f0f4f8', height: '150px', marginTop: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <span style={{ color: '#aaa' }}>[Document Preview]</span>
              </div>
           </div>

           <div className="card">
              <h3>📈 Weekly Snapshot</h3>
              <p>A visual look at what strategies were tried and the outcome.</p>
              <div style={{ background: '#f0f4f8', height: '150px', marginTop: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <span style={{ color: '#aaa' }}>[Chart Preview]</span>
              </div>
           </div>

        </div>
      </section>

      <section className="section bg-white text-center">
         <div className="container">
            <h2>Data Minimization Policy</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>
               We only record what is necessary to support learning decisions. All records are stored securely and deleted upon request.
            </p>
            <br />
            <Link to="/safeguarding" className="btn" style={{ border: '1px solid var(--border-subtle)' }}>Read Privacy Policy</Link>
         </div>
      </section>
    </div>
  );
}
