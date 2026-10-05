import React, { useState } from 'react';
import { IMMERSION_EXAMPLES } from '../data/lessonsData';
import {
  Layers,
  Eye,
  EyeOff,
  BookOpen
} from 'lucide-react';

export const ImmersionLab: React.FC = () => {
  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(0);
  const [showFurigana, setShowFurigana] = useState(true);

  const currentExample = IMMERSION_EXAMPLES[selectedExampleIndex];
  const activeWord = selectedWordIndex !== null ? currentExample.grammarBreakdown[selectedWordIndex] : null;

  return (
    <section id="amostrador" className="py-24 bg-[#090c10] border-b border-white/10 relative overflow-hidden">
      {/* Decorative Kanji background watermark */}
      <div className="absolute right-4 top-10 text-[180px] font-kanji font-bold text-white/[0.015] pointer-events-none select-none">
        読解
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Laboratório de Imersão</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-kanji">
            Como Funciona Uma Aula na Prática?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            Em cada aula, pegamos diálogos e cenas reais de animes, mangás ou mídias cotidianas e dissecamos cada elemento de forma intuitiva. Clique nas palavras abaixo para ver a análise gramatical e a nuance cultural:
          </p>
        </div>

        {/* Scene Selector Tabs (Interactive Buttons) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {IMMERSION_EXAMPLES.map((ex, index) => {
            const isSelected = selectedExampleIndex === index;
            return (
              <button
                key={ex.id}
                onClick={() => {
                  setSelectedExampleIndex(index);
                  setSelectedWordIndex(0);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-950/50'
                    : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{ex.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Breakdown Stage */}
        <div className="mt-8 bg-[#0e131b] border border-white/10 rounded-2xl p-6 sm:p-9 space-y-6 shadow-xl">
          
          {/* Top Bar with metadata & Furigana toggle */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs">
            <span className="text-rose-400 font-semibold tracking-wide uppercase">
              {currentExample.category}
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFurigana(!showFurigana)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
              >
                {showFurigana ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showFurigana ? 'Ocultar Furigana' : 'Mostrar Furigana'}</span>
              </button>
            </div>
          </div>

          {/* Context Note */}
          <p className="text-xs sm:text-sm text-neutral-400 italic">
            Contexto: {currentExample.context}
          </p>

          {/* Interactive Sentence Words */}
          <div className="p-6 sm:p-8 rounded-xl bg-black/40 border border-white/10 flex flex-wrap items-end gap-x-3 sm:gap-x-4 gap-y-4 justify-start">
            {currentExample.grammarBreakdown.map((item, idx) => {
              const isWordActive = selectedWordIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedWordIndex(idx)}
                  className={`group flex flex-col items-center transition-all p-2 rounded-lg text-left ${
                    isWordActive
                      ? 'bg-rose-500/20 border border-rose-500/50 shadow-sm'
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {showFurigana && (
                    <span className="text-xs sm:text-sm text-rose-300 font-jp tracking-tighter opacity-90">
                      {item.furigana}
                    </span>
                  )}
                  <span className={`text-2xl sm:text-3xl font-bold font-kanji tracking-wider ${
                    isWordActive ? 'text-white' : 'text-neutral-200 group-hover:text-white'
                  }`}>
                    {item.part.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Romaji & Portuguese translation */}
          <div className="space-y-1.5 pt-2">
            <div className="text-xs sm:text-sm text-neutral-400 font-mono tracking-wide">
              Romaji: {currentExample.romaji}
            </div>
            <div className="text-lg sm:text-xl font-semibold text-neutral-100">
              "{currentExample.portuguese}"
            </div>
          </div>

          {/* Word Analysis Card */}
          {activeWord && (
            <div className="mt-4 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-rose-950/20 to-neutral-900/40 border border-rose-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold">
                  Análise Gramatical do Trecho Selecionado
                </span>
                <span className="text-xs text-neutral-400 font-jp">
                  Furigana: {activeWord.furigana}
                </span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white font-kanji">
                {activeWord.part}
              </div>
              <div className="text-xs sm:text-sm font-medium text-emerald-400">
                Significado no contexto: {activeWord.meaning}
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {activeWord.grammarNote}
              </p>
            </div>
          )}

          {/* Cultural Insight */}
          <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-neutral-300 space-y-1">
            <span className="text-amber-400 font-semibold uppercase tracking-wider block">
              💡 Nuance Cultural & Uso Real
            </span>
            <p className="font-light leading-relaxed">
              {currentExample.culturalNote}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
