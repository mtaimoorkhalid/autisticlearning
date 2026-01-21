import { Link } from 'react-router-dom';

export default function Educators() {
  return (
    <div>
      <section className="section text-center">
        <div className="container">
          <h1>Less guesswork, fewer resets.</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
            We handle the data tracking so you can focus on teaching.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
           <h2 className="text-center">What we provide to schools</h2>
           <div className="grid-3">
              <div className="card">
                 <h3>Learner Summary</h3>
                 <p>A one-page cheat sheet of the student's sensory profile and triggers.</p>
              </div>
              <div className="card">
                 <h3>Strategy Log</h3>
                 <p>We track which interventions are being used so you can see what works.</p>
              </div>
              <div className="card">
                 <h3>Review Notes</h3>
                 <p>Structured notes from our observation sessions to support your IEP meetings.</p>
              </div>
           </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
           <div>
              <h2>Collaboration Model</h2>
              <p>We are not here to tell you how to teach. We are here to support your classroom management.</p>
              <ul className="list-bordered">
                 <li><strong>You own the classroom:</strong> We respect your rules and authority.</li>
                 <li><strong>We own the data:</strong> We do the heavy lifting of recording patterns.</li>
                 <li><strong>Shared Success:</strong> We meet once a month to compare notes.</li>
              </ul>
           </div>
           <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px', background: 'var(--accent-pink-light)' }}>
              <h3 style={{ color: 'var(--accent-pink)' }}>Partner with us</h3>
           </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <Link to="/contact" className="btn btn-primary">Request School Support</Link>
        </div>
      </section>
    </div>
  );
}
