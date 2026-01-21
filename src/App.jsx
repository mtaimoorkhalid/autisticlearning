import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Components
import Navbar from './components/Navbar';

// Pages
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
      <div className="app-wrapper">
        <Navbar />
        
        <main className="main-content">
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
        </main>

        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Autistic Learning. All rights reserved.</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.5rem' }}>
              We do not provide medical advice.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
