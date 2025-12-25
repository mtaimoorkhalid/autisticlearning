import { Link } from 'react-router-dom';

export default function Tools() {
  return (
    <div>
      {/* HERO */}
      <section className="section text-center">
        <div className="container">
          <h1>Structured Documentation</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
            We replace scattered notes with clear, private, and simple templates that help you make decisions.
          </p>
        </div>
      </section>

      {/* DOCUMENT PREVIEWS (CSS Mockups) */}
      <section className="section section-grey">
        <div className="container">
          <div className="grid-2">
            
            {/* Mockup 1: Learner Profile */}
            <div>
              <h3>The Learner Profile</h3>
              <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
                A single-page summary of strengths, barriers, and sensory needs.
              </p>
              
              {/* CSS Paper Document Visualization */}
              <div style={{ background: 'white', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid #eee', fontSize: '0.8rem', color: '#999' }}>
                <div style={{ height: '12px', width: '40%', background: '#eee', marginBottom: '2rem' }}></div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                   <div style={{ height: '60px', width: '60px', background: '#f5f5f5', borderRadius: '50%' }}></div>
                   <div style={{ flex: 1 }}>
                     <div style={{ height: '8px', width: '80%', background: '#eee', marginBottom: '8px' }}></div>
                     <div style={{ height: '8px', width: '60%', background: '#eee' }}></div>
                   </div>
                </div>
                <div style={{ height: '8px', width: '100%', background: '#eee', marginBottom: '8px' }}></div>
                <div style={{ height: '8px', width: '90%', background: '#eee', marginBottom: '8px' }}></div>
                <div style={{ height: '8px', width: '95%', background: '#eee' }}></div>
              </div>
            </div>

            {/* Mockup 2: Weekly Snapshot */}
            <div>
              <h3>Weekly Progress Snapshot</h3>
              <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
                A visual look at what strategies were tried and the outcome.
              </p>

              {/* CSS Paper Document Visualization */}
              <div style={{ background: 'white', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid #eee', fontSize: '0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div style={{ height: '10px', width: '100px', background: '#eee' }}></div>
                  <div style={{ height: '10px', width: '50px', background: '#eee' }}></div>
                </div>
                {/* Bar Chart Mockup */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '100px', paddingBottom: '10px', borderBottom: '2px solid #eee' }}>
                  <div style={{ height: '40%', width: '100%', background: 'var(--accent-soft)' }}></div>
                  <div style={{ height: '70%', width: '100%', background: 'var(--accent-soft)' }}></div>
                  <div style={{ height: '50%', width: '100%', background: 'var(--accent-soft)' }}></div>
                  <div style={{ height: '85%', width: '100%', background: 'var(--accent-primary)' }}></div>
                </div>
                <div style={{ marginTop: '1rem', height: '8px', width: '100%', background: '#eee' }}></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DATA PRIVACY BLOCK */}
      <section className="section text-center">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto', border: '1px solid var(--accent-primary)', padding: '2rem', borderRadius: '8px' }}>
            <h3 style={{ color: 'var(--accent-primary)' }}>Data Minimization Policy</h3>
            <p>
              We only record data that directly supports learning decisions. We do not collect unnecessary personal information. All records are stored securely and deleted upon request.
            </p>
            <Link to="/safeguarding" style={{ display: 'block', marginTop: '1rem', color: 'var(--text-main)', fontWeight: 'bold' }}>
              Read our full Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}