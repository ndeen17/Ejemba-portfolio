import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import WhyRemote from './sections/WhyRemote';
import Expertise from './sections/Expertise';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-dvh bg-bg text-ink">
      <Nav />
      <main className="pb-12">
        <Hero />
        <WhyRemote />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
