import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Introduction } from './sections/Introduction';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Introduction />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
