export default function Contact() {
  return (
    <div>
      {/* HERO */}
      <section className="section text-center">
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>Get in Touch</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
            Whether you are a parent looking for support or an educator seeking collaboration, we are here to help.
          </p>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="section section-grey">
        <div className="container grid-2">
          
          {/* INFO SIDE */}
          <div>
            <h3>How to reach us</h3>
            <p style={{ marginBottom: '2rem' }}>
              Fill out the form, and we will get back to you within 24 hours.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <strong>Email:</strong><br />
              <a href="mailto:hello@autisticlearning.org" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>hello@autisticlearning.org</a>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <strong>Hours:</strong><br />
              Mon - Fri: 9:00 AM - 5:00 PM
            </div>

            <div className="card" style={{ background: 'var(--accent-soft)', border: 'none' }}>
              <p style={{ fontSize: '0.9rem' }}>
                <strong>Note:</strong> If this is a medical emergency, please contact your local emergency services immediately. We cannot provide crisis intervention.
              </p>
            </div>
          </div>

          {/* FORM SIDE */}
          <div className="card">
            <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
            <form>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Your name" />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>I am a...</label>
                <select style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
                  <option>Parent / Caregiver</option>
                  <option>Educator / School</option>
                  <option>Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Message</label>
                <textarea rows="4" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="How can we help?"></textarea>
              </div>

              <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}