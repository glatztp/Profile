import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import FaultyTerminal from "./components/animations/FaultyTerminal";
import LoadingScreen from "./components/animations/LoadingScreen";
import { motion, AnimatePresence } from "framer-motion";
import {
  pageTransition,
  terminalReveal,
  staggerContainer,
} from "./utils/animations";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preload crítico - reduzido o delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 50); // Reduzido de 100 para 50

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    // Adicionar um delay mínimo para suavizar a transição
    setTimeout(() => {
      setIsLoading(false);
    }, 150);
  };

  return (
    <>
      <LoadingScreen isVisible={isLoading} onComplete={handleLoadingComplete} />

      <AnimatePresence>
        {!isLoading && showContent && (
          <motion.div
            initial="initial"
            animate="animate"
            variants={pageTransition}
            className="relative min-h-screen"
          >
            {/* FaultyTerminal Background Fixed */}
            <motion.div
              className="fixed inset-0 z-0 pointer-events-none"
              variants={terminalReveal}
              initial="initial"
              animate="animate"
            >
              <FaultyTerminal
                scale={1.5}
                gridMul={[2, 1]}
                digitSize={1.2}
                timeScale={0.5}
                pause={false}
                scanlineIntensity={0.6}
                glitchAmount={0.8}
                flickerAmount={0.9}
                noiseAmp={0.7}
                chromaticAberration={0}
                dither={0.4}
                curvature={0.05}
                tint="#c6ac8f"
                mouseReact={false}
                mouseStrength={0.3}
                pageLoadAnimation={true}
                brightness={0.08}
                className="faulty-terminal-container pointer-events-auto"
              />
            </motion.div>

            {/* Conteúdo da aplicação */}
            <motion.div
              className="relative z-10"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <Navbar />
              <main>
                <Hero />
                <About />
                <Skills />
                <Portfolio />
                <Experience />
                <Contact />
              </main>
              <Footer />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
