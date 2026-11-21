import { ThemeProvider } from './context/ThemeContext';
import NeuralBackground from './components/ui/NeuralBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ResearchSpotlight from './components/ResearchSpotlight';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gray-50 dark:bg-[#09090B] text-gray-900 dark:text-gray-100 transition-colors duration-300 selection:bg-indigo-500/25 selection:text-indigo-200">
        {/* Living Synaptic Particle & Noise Ambient Canvas */}
        <NeuralBackground />

        {/* Foreground Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <ResearchSpotlight />
            <Skills />
            <Projects />
            <Education />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </div>
    </ThemeProvider>
  );
}
