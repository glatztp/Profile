import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;