import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { ImmersionLab } from './components/ImmersionLab';
import { Plans } from './components/Plans';
import { Faq } from './components/Faq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const handleSelectPlan = (planName: string) => {
    const text = encodeURIComponent(
      `Olá Sensei Caio! Tenho interesse no ${planName}. Gostaria de verificar os horários disponíveis para iniciar!`
    );
    window.open(`https://wa.me/5543996298236?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-neutral-100 flex flex-col font-sans selection:bg-rose-600 selection:text-white">
      {/* Top Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* Methodology (Imersão com Conteúdos Nativos) */}
        <Methodology />

        {/* Interactive Immersion Lab (Dissecando cenas e Decks Anki) */}
        <ImmersionLab />

        {/* Plans (Intensivo, Flexível, Avulso) com 'Para quem é o perfil' + 33-week Progression */}
        <Plans onSelectPlan={handleSelectPlan} />

        {/* FAQs */}
        <Faq />

        {/* Contact & WhatsApp Direct */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/5543996298236?text=Ol%C3%A1%20Sensei%20Caio!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20japon%C3%AAs."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-semibold transition-all duration-300">
          WhatsApp: (43) 99629-8236
        </span>
      </a>
    </div>
  );
}
