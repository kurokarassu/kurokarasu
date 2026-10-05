import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#080b0f] border-t border-white/10 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-rose-500/30 bg-rose-950/40 flex items-center justify-center text-rose-400 font-kanji font-bold text-sm">
              烏
            </div>
            <div>
              <span className="text-sm font-semibold text-white tracking-wide font-kanji">
                Kuro Karasu <span className="text-xs text-rose-400 font-jp">黒烏</span>
              </span>
              <p className="text-[11px] text-neutral-500">
                Aulas particulares de japonês com método de imersão nativa
              </p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400 text-xs">
            <a href="#metodologia" className="hover:text-white transition-colors">Metodologia</a>
            <a href="#amostrador" className="hover:text-white transition-colors">Na Prática</a>
            <a href="#planos" className="hover:text-white transition-colors">Planos</a>
            <a href="#trilha" className="hover:text-white transition-colors">Trilha 33 Semanas</a>
            <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-[11px] text-neutral-500 space-y-0.5">
            <p>&copy; {new Date().getFullYear()} Kuro Karasu. Todos os direitos reservados.</p>
            <p>Professor: Caio Marques · Londrina / PR · Aulas Online para todo o Brasil e exterior.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};
