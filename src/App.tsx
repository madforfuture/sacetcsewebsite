import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { HOD } from './components/HOD';
import { Faculty } from './components/Faculty';
import { Courses } from './components/Courses';
import { Outcomes } from './components/Outcomes';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HOD />
        <Faculty />
        <Outcomes />
        <Courses />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
