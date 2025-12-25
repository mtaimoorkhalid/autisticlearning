import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const { comfortMode, toggleComfortMode } = useContext(ThemeContext);

  return (
    <header style={{ background: 'var(--white)', borderBottom: '1px solid #eee', padding: '1rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* LOGO */}
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Autistic Learning</Link>
        </div>

        {/* NAVIGATION LINKS */}
        <nav>
          <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link to="/families" style={{ textDecoration: 'none', color: 'var(--text-main)' }}>For Families</Link></li>
            <li><Link to="/educators" style={{ textDecoration: 'none', color: 'var(--text-main)' }}>For Educators</Link></li>
            <li><Link to="/method" style={{ textDecoration: 'none', color: 'var(--text-main)' }}>Method</Link></li>
            <li><Link to="/tools" style={{ textDecoration: 'none', color: 'var(--text-main)' }}>Tools</Link></li>
            <li><Link to="/safeguarding" style={{ textDecoration: 'none', color: 'var(--text-main)' }}>Safeguarding</Link></li>
            <li><Link to="/about" style={{ textDecoration: 'none', color: 'var(--text-main)' }}>About</Link></li>
            <li><Link to="/contact" className="btn-primary" style={{ padding: '8px 16px', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Contact</Link></li>
          </ul>
        </nav>

        {/* COMFORT MODE TOGGLE */}
        <button 
          onClick={toggleComfortMode} 
          style={{
            background: 'transparent',
            border: '2px solid var(--text-main)',
            padding: '6px 12px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: 'var(--text-main)'
          }}
        >
          {comfortMode ? 'Turn Off Comfort Mode' : '👁️ Comfort Mode'}
        </button>
      </div>
    </header>
  );
}