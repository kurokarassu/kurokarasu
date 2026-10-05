import React, { useState } from 'react';
import { FAQS } from '../data/lessonsData';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#090c10] border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-kanji">
            Perguntas Frequentes Sobre as Aulas
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-light leading-relaxed">
            Tudo o que você precisa saber sobre horários, método, aplicativo Anki e estrutura das aulas particulares.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#0e131b] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-rose-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-rose-950/20 to-neutral-900 border border-rose-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white font-kanji">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs text-neutral-300 mt-1 font-light">
              Mande uma mensagem direta no WhatsApp para conversar com o Sensei Caio.
            </p>
          </div>

          <a
            href="https://wa.me/5543996298236?text=Ol%C3%A1%20Caio!%20Tenho%20uma%20d%C3%BAvida%20sobre%20as%20aulas%20de%20japon%C3%AAs."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shrink-0 shadow-md shadow-emerald-950/40"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
