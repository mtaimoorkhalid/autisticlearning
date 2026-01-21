export default function Contact() {
  return (
    <div>
      <section className="section text-center">
        <div className="container">
          <h1>Get in Touch</h1>
          <p style={{ color: 'var(--text-secondary)' }}>We are here to answer your questions.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid-2">
          
          {/* Info Card */}
          <div className="card">
            <h3>How to reach us</h3>
            <p><strong>Email:</strong> hello@autisticlearning.org</p>
            <p><strong>Hours:</strong> Mon - Fri: 9:00 AM - 5:00 PM</p>
            <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid var(--border-subtle)' }} />
            <p style={{ fontSize: '0.9rem' }}>
              We usually respond within 24 hours on business days.
            </p>
          </div>

          {/* Form Placeholder */}
          <div className="card">
             <h3>Send a Message</h3>
             <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label>
                   <span className="text-overline" style={{ marginBottom: '5px' }}>Name</span>
                   <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                </label>
                <label>
                   <span className="text-overline" style={{ marginBottom: '5px' }}>I am a...</span>
                   <select style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
                      <option>Parent / Caregiver</option>
                      <option>Educator / School</option>
                      <option>Other</option>
                   </select>
                </label>
                <label>
                   <span className="text-overline" style={{ marginBottom: '5px' }}>Message</span>
                   <textarea rows="4" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                </label>
                <button type="submit" className="btn btn-primary">Send Message</button>
             </form>
          </div>

        </div>
      </section>
      
      <section className="section text-center">
         <div className="container">
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
               Note: We are an educational support service. We do not provide crisis intervention.
            </p>
         </div>
      </section>
    </div>
  );
}
