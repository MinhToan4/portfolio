import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import AcademicResults from '@/components/AcademicResults';
import Activities from '@/components/Activities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors duration-500">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <AcademicResults />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
