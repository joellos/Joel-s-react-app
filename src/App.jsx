import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import CV from './pages/CV';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
 {/* Här är basvägen för din app */}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
