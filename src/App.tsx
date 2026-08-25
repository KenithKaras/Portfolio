import { LazyMotion, MotionConfig, domAnimation, m, useScroll, useSpring } from "framer-motion";
import Backdrop from "./components/Backdrop";
import Navbar from "./components/Navbar";
import EditorGutter from "./components/EditorGutter";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    // LazyMotion + domAnimation loads only the DOM animation features this site
    // uses, trimming framer-motion off the critical path. reducedMotion="user"
    // makes every animation respect prefers-reduced-motion.
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-syn-str focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-canvas"
      >
        Skip to content
      </a>

      <Backdrop />

      <m.div
        className="fixed left-0 right-0 top-0 z-[120] h-px origin-left bg-syn-str"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <Navbar />
      <EditorGutter />

      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
