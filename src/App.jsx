import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

// Import the pages (Make sure these files exist in /pages!)
import Home from './pages/Home';
import Families from './pages/Families';
import Educators from './pages/Educators';
import Method from './pages/Method';
import Tools from './pages/Tools';
import Safeguarding from './pages/Safeguarding';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="main-content" style={{ minHeight: '80vh', paddingBottom: '4rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/families" element={<Families />} />
          <Route path="/educators" element={<Educators />} />
          <Route path="/method" element={<Method />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/safeguarding" element={<Safeguarding />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
      {/* Simple Footer */}
      <footer style={{ background: 'var(--white)', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
          Privacy-first. Consent-based. Non-clinical support.
        </p>
      </footer>
    </ThemeProvider>
  );
}

export default App;