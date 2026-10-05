import React from 'react';
import { ArrowRight, BookOpen, MessageSquare, CheckCircle2, PlayCircle } from 'lucide-react';
import heroBgImg from '../assets/images/hero_kuro_karasu_1790612672107.jpg';

interface HeroProps {
  onOpenTrialModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/10 bg-[#090c10]">
      {/* Background Image with layered cinematic scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Kuro Karasu - Aulas de Japonês"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transform motion-safe:animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/85 to-[#0b0e14]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        
        {/* Japanese Calligraphy Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="text-rose-400 font-kanji font-bold text-sm tracking-widest">黒 烏</span>
          <span className="w-1 h-1 rounded-full bg-neutral-600" />
          <span className="text-xs text-neutral-300 font-medium tracking-wide">
            Método de Imersão com Conteúdos Nativos
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl font-kanji" style={{ textWrap: 'balance' }}>
          Domine o Japonês Real Através de <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-300 to-amber-200">Animes, Mangás e Literatura</span>
        </h1>

        {/* Subhead */}
        <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-light">
          Aulas particulares 1 a 1 sob medida para o seu ritmo. Diga adeus a anos de gramática monótona de cursinho: aprenda com a língua viva falada no Japão e revisões eficientes adaptadas a você — seja pelo Anki ou por tarefas tradicionais de casa.
        </p>

        {/* Unboxed Metadata Trust Markers (No static pill clutter, clean dividers) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-neutral-400 font-medium">
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-rose-500" /> Aulas 100% Individuais
          </span>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-rose-500" /> Revisão Flexível (Anki ou Tarefas)
          </span>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-rose-500" /> Acompanhamento no WhatsApp
          </span>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5 text-neutral-200">
            <CheckCircle2 className="w-4 h-4 text-rose-500" /> Planos a partir de R$ 250/mês
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#planos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-all shadow-lg shadow-rose-950/60 hover:shadow-rose-600/30 active:scale-[0.98]"
          >
            <span>Ver Planos & Valores</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#amostrador"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 rounded-xl transition-all"
          >
            <PlayCircle className="w-4 h-4 text-rose-400" />
            <span>Ver Aula na Prática</span>
          </a>

          <a
            href="https://wa.me/5543996298236?text=Ol%C3%A1%20Sensei%20Caio!%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20as%20aulas%20de%20japon%C3%AAs."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-950/40 active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp: (43) 99629-8236</span>
          </a>
        </div>

        {/* Quick Highlights Counter */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl text-left">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-white tracking-tight font-kanji">33+ Semanas</div>
            <div className="text-xs text-neutral-400 font-light">Do zero absoluto à imersão total com literatura</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-white tracking-tight font-kanji">1 a 1 Ao Vivo</div>
            <div className="text-xs text-neutral-400 font-light">Atenção exclusiva e adaptação aos seus interesses</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-white tracking-tight font-kanji">100% Nativo</div>
            <div className="text-xs text-neutral-400 font-light">Mangás, animes, jogos e histórias autênticas</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-white tracking-tight font-kanji">Revisão Flexível</div>
            <div className="text-xs text-neutral-400 font-light">Baralhos no Anki ou tarefas de casa tradicionais</div>
          </div>
        </div>

      </div>
    </section>
  );
};
