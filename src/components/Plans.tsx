import React, { useState } from 'react';
import { PLANS_DATA, TIMELINE_INTENSIVO } from '../data/lessonsData';
import { Check, ArrowRight, MessageSquare, Calendar, Clock, Sparkles, BookOpen, UserCheck } from 'lucide-react';

interface PlansProps {
  onSelectPlan: (planName: string) => void;
}

export const Plans: React.FC<PlansProps> = ({ onSelectPlan }) => {
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  return (
    <section id="planos" className="py-24 bg-[#0b0e14] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Investimento & Planos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-kanji">
            Escolha o Formato Ideal Para o Seu Ritmo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            Aulas 100% individuais com professor dedicado. Sem turmas cheias, sem enrolação. Escolha entre imersão intensiva acelerada ou acompanhamento semanal flexível.
          </p>

          {/* Schedule & Makeup Policy Callout */}
          <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <span>
                <strong className="text-white">Dias de Aula:</strong> Segunda a sexta-feira.
              </span>
            </div>
            <div className="text-neutral-400 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-4 text-left">
              <strong className="text-amber-400">Reposições:</strong> Faltou? Reponha na mesma semana ou no <strong className="text-white">sábado</strong> (dia exclusivo para reposição de até 1 aula/semana).
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PLANS_DATA.map((plan) => {
            const isIntensive = plan.id === 'intensivo';
            const whatsappPlanUrl = `https://wa.me/5543996298236?text=Ol%C3%A1%20Sensei%20Caio!%20Tenho%20interesse%20em%20iniciar%20no%20${encodeURIComponent(plan.name)}.%20Gostaria%20de%20verificar%20os%20hor%C3%A1rios%20dispon%C3%ADveis!`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-7 sm:p-8 ${
                  isIntensive
                    ? 'bg-gradient-to-b from-[#131924] to-[#0c1017] border-2 border-rose-500 shadow-2xl shadow-rose-950/40 lg:-translate-y-2'
                    : 'bg-[#0e131b] border border-white/10 hover:border-white/20 shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rose-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Card Title & Frequency */}
                  <div className="space-y-1 mb-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                      {!isIntensive && plan.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-kanji">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-5 border-y border-white/10 my-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-neutral-400 font-light">
                        {plan.id === 'avulso' ? '/ aula' : '/ ciclo de 4 semanas'}
                      </span>
                    </div>

                    <div className="mt-2.5 flex items-center gap-2 text-xs text-rose-300/90 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{plan.hours}</span>
                    </div>
                  </div>

                  {/* Nova Seção: Para quem é o perfil */}
                  <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5">
                    <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs uppercase tracking-wider">
                      <UserCheck className="w-4 h-4 text-rose-400" />
                      <span>Para quem é este perfil:</span>
                    </div>
                    <p className="text-xs text-neutral-200 font-medium leading-relaxed">
                      {plan.targetProfile.who}
                    </p>
                    <ul className="space-y-1.5 pt-1 text-xs text-neutral-300 font-light">
                      {plan.targetProfile.traits.map((trait, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-rose-400 font-bold shrink-0 mt-0.5">•</span>
                          <span>{trait}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block">
                      O que está incluído no pacote:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Button -> WhatsApp direto */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <a
                    href={whatsappPlanUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
                      isIntensive
                        ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-950/60'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950/40'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Iniciar no WhatsApp</span>
                  </a>

                  <div className="text-center text-[11px] text-neutral-400">
                    Fale com o Sensei Caio: <span className="text-neutral-300 font-medium">(43) 99629-8236</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accepted Payment Methods Banner */}
        <div className="mb-24 p-5 rounded-2xl bg-[#0e131b] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
              ✓
            </div>
            <div>
              <span className="text-white font-semibold block text-sm">Formas de Pagamento Aceitas:</span>
              <span className="text-neutral-300 font-light">PIX, Boleto Bancário e Transferência Bancária (TED/DOC).</span>
            </div>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-400 text-xs">
            * Não aceitamos cartão de crédito.
          </div>
        </div>

        {/* Detailed Timeline of Plano Intensivo (33+ Weeks) */}
        <div id="trilha" className="pt-8 scroll-mt-24">
          <div className="bg-[#0e131b] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-rose-400">
                  Estrutura Completa de Evolução
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-kanji">
                  Progressão Detalhada do Aluno (Plano Intensivo)
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl font-light leading-relaxed">
                  Cada mês corresponde a um ciclo de 4 semanas. Os prazos abaixo são estimativas com base na média de evolução dos alunos e adaptados ao seu ritmo individual.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="https://wa.me/5543996298236?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20cronograma%20do%20Plano%20Intensivo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-all shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Iniciar Trilha de 33 Semanas</span>
                </a>
              </div>
            </div>

            {/* Timeline Steps Interactive Navigator */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {TIMELINE_INTENSIVO.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTimelineStep(idx)}
                  className={`p-3 rounded-xl text-left border transition-all text-xs flex flex-col justify-between ${
                    activeTimelineStep === idx
                      ? 'bg-rose-950/40 border-rose-500 text-white shadow-md'
                      : 'bg-white/[0.02] border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span className="font-bold text-[11px] text-rose-400 uppercase">
                    {step.weeks}
                  </span>
                  <span className="font-semibold text-xs mt-1 line-clamp-1">
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Timeline Step Details */}
            {TIMELINE_INTENSIVO[activeTimelineStep] && (
              <div className="mt-8 p-6 sm:p-8 rounded-xl bg-black/40 border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-bold">
                      {TIMELINE_INTENSIVO[activeTimelineStep].weeks}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      Foco: {TIMELINE_INTENSIVO[activeTimelineStep].focus}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white font-kanji">
                    {TIMELINE_INTENSIVO[activeTimelineStep].title}
                  </h4>

                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {TIMELINE_INTENSIVO[activeTimelineStep].description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-semibold text-neutral-400 block mb-1.5 uppercase tracking-wide">
                      Materiais e Práticas Desta Fase:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {TIMELINE_INTENSIVO[activeTimelineStep].materials.map((mat, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-200"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-rose-950/20 to-black border border-rose-500/20 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-white font-kanji">
                    Passo {activeTimelineStep + 1} de 6
                  </div>
                  <p className="text-xs text-neutral-400 font-light">
                    Acompanhamento contínuo semana a semana com o Sensei Caio.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
