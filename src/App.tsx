import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ThemesSection from "./components/ThemesSection";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Newsletter from "./components/Newsletter";
import WhyCutTheCode from "./components/WhyCutTheCode";
import ContactCTA from "./components/ContactCTA";
import Awards from "./components/Awards";
import Testimonials from "./components/Testimonials";
import MarqueeCTA from "./components/MarqueeCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-primary/10 selection:text-primary font-sans antialiased">
      {/* Floating Header Navbar */}
      <Navbar />

      <main className="w-full">
        {/* Full-screen background video Hero Section (Home) */}
        <Hero />

        {/* O que é o Hackathon Microcrédito? */}
        <Services />

        {/* Temas de Interesse */}
        <ThemesSection />

        {/* Cronograma do Evento */}
        <WhyCutTheCode />

        {/* Esquenta BNDES (Lives preparatórias) */}
        <ContactCTA />

        {/* Vencedores Premiados do Hackathon */}
        <ProjectsShowcase />

        {/* Cadastre-se e fique conectado conosco */}
        <Newsletter />

        {/* Realizadores Oficiais BNDES & Sai do Papel */}
        <Awards />

        {/* Regulamento e FAQ Collapsible */}
        <Testimonials />

        {/* Loop Tape Marquee */}
        <MarqueeCTA />
      </main>

      {/* Official BNDES Address Footer */}
      <Footer />
    </div>
  );
}
