import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Growth from './components/Growth';
import Contact from './components/Contact';
import Team from './components/Team';
import ScrollToTopButton from './components/ScrollToTopButton';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-windek-blue selection:text-white">
      <GoogleAnalytics />
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Projects />
        <Growth />
        <Contact />
      </main>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
