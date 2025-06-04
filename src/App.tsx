import { Navbar }from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-black via-gray-900 to-gray-950 min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
        </main>
        <Footer /></div >
    </>
  );
}

export default App;
