import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem('hasAnimated');
    if (!hasAnimated) {
      setShowSplash(true);
    }
  }, []);

  const handleSplashFinish = () => {
    sessionStorage.setItem('hasAnimated', 'true'); // Set the flag
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
