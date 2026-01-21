import { Link } from 'react-router-dom';

export default function Method() {
  return (
    <div>
      <section className="section text-center">
        <div className="container">
          <h1>The CLEAR Loop</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            We don't guess. We loop. This is our iterative process for finding what works.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
           {/* Steps Grid */}
           <div className="grid-3">
              <div className="card">
                <h3>1. Capture</h3>
                <p>We document the current baseline. What is happening right now? When do resets occur?</p>
              </div>
              <div className="card">
                <h3>2. Learn</h3>
                <p>We analyze the environment. Is it sensory? Is it communication? We identify the barrier.</p>
              </div>
              <div className="card">
                <h3>3. Evaluate</h3>
                <p>We pick a strategy and test it. We rely on data, not feelings.</p>
              </div>
              <div className="card">
                <h3>4. Adjust</h3>
                <p>If it works, we keep it. If it doesn't, we change the variable.</p>
              </div>
              <div className="card">
                <h3>5. Repeat</h3>
                <p>Development is a cycle. We constantly refine the support as the child grows.</p>
              </div>
           </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>We track 5 Core Indicators</h2>
          <ul className="list-bordered" style={{ maxWidth: '600px', margin: '2rem auto', textAlign: 'left' }}>
             <li><strong>Engagement:</strong> Time spent focused on a task.</li>
             <li><strong>Sensory Load:</strong> Signs of over/under stimulation.</li>
             <li><strong>Communication:</strong> Frequency of successful requests.</li>
             <li><strong>Transition Ease:</strong> Time taken to switch tasks.</li>
             <li><strong>Task Success:</strong> Completion rate of goals.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
