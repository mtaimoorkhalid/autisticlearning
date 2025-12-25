export default function Home() {
  return (
    <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <h1>Support that adapts to your child.</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '600px', margin: '1rem auto' }}>
        We help families and educators test learning strategies, record what works, and reduce everyday barriers.
      </p>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a href="/families" className="btn btn-primary">I'm a Parent</a>
        <a href="/educators" className="btn btn-secondary">I'm an Educator</a>
      </div>
    </div>
  );
}