import React from 'react';
import { Eye, Heart, Compass, Repeat, Check, X, Sparkles } from 'lucide-react';
import mangaImmersionImg from '../assets/images/method_manga_immersion_1790612684882.jpg';
import animeStudyImg from '../assets/images/method_anime_study_1790612696750.jpg';

export const Methodology: React.FC = () => {
  const pillars = [
    {
      icon: Eye,
      title: 'Contextualização & Memória Espacial',
      subtitle: 'Aprenda palavras dentro de cenas, não em listas frias',
      description:
        'Ao ver uma palavra ou estrutura gramatical aplicada diretamente dentro de uma cena de anime ou painel de mangá, o cérebro associa o vocabulário a uma emoção, imagem e contexto visual. Isso fixa o aprendizado de forma duradoura e natural.',
      color: 'text-rose-400',
      borderHover: 'group-hover:border-rose-500/40'
    },
    {
      icon: Heart,
      title: 'Alta Motivação & Engajamento',
      subtitle: 'Estudar se torna entretenimento e curiosidade',
      description:
        'Estudar com temas que você realmente gosta transforma o aprendizado em lazer. A curiosidade autêntica para entender o próximo episódio de um anime, capítulo de mangá ou diálogo de jogo elimina a sensação de obrigação e acaba com a desistência.',
      color: 'text-amber-400',
      borderHover: 'group-hover:border-amber-500/40'
    },
    {
      icon: Compass,
      title: 'Imersão Cultural Profunda',
      subtitle: 'Entenda nuances que nenhum livro didático ensina',
      description:
        'A língua reflete diretamente a cultura. O material nativo ensina nuances sociais, regras de polidez (keigo), linguagem casual dos jovens, humor e referências do dia a dia do Japão que livros padronizados ignoram por completo.',
      color: 'text-sky-400',
      borderHover: 'group-hover:border-sky-500/40'
    },
    {
      icon: Repeat,
      title: 'Revisão Eficiente e Flexível',
      subtitle: 'Baralhos no Anki ou tarefas de casa tradicionais',
      description:
        'Para reforçar o vocabulário e a memória, utilizo o Anki com baralhos personalizados com o conteúdo das aulas. Caso você não se adapte ao Anki, não tem problema: o acompanhamento e as tarefas de casa são adaptados para formatos mais tradicionais de exercícios.',
      color: 'text-emerald-400',
      borderHover: 'group-hover:border-emerald-500/40'
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-[#0b0e14] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Como Você Aprende</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-kanji">
            Metodologia: Imersão com Conteúdos Nativos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            O foco é proporcionar uma aprendizagem prática e natural. Para quem começa do zero, construímos uma base sólida e enxuta de gramática. À medida que você avança, reduzimos a teoria abstrata para dar lugar a materiais reais do Japão — como animes, mangás, jogos e literatura.
          </p>
        </div>

        {/* Visual Showcase (2 Generated Images with Context) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl bg-[#0e1218]">
            <img
              src={mangaImmersionImg}
              alt="Estudo de japonês com mangás nativos e anotações"
              referrerPolicy="no-referrer"
              className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1218] via-[#0e1218]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold">Leitura Autêntica</span>
              <h3 className="text-lg font-bold text-white mt-1">Mangás & Diálogos Cotidianos</h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-snug">
                Análise direta de balões de fala, onomatopeias e estruturas reais usadas por falantes nativos.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl bg-[#0e1218]">
            <img
              src={animeStudyImg}
              alt="Ambiente de estudos e decks de repetição espaçada no Anki ou cadernos"
              referrerPolicy="no-referrer"
              className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1218] via-[#0e1218]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">Fixação Sob Medida</span>
              <h3 className="text-lg font-bold text-white mt-1">Anki ou Tarefas Tradicionais</h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-snug">
                Escolha o formato de revisão em que você rende melhor: baralhos digitais no celular ou listas e cadernos de exercícios.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-8 font-kanji">
            Por que aprender com esse método é infinitamente mais eficaz?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-7 rounded-2xl bg-[#0e131b] border border-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg ${pillar.borderHover}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      <IconComp className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                        <span>{idx + 1}. {pillar.title}</span>
                      </h4>
                      <p className="text-xs font-medium text-neutral-400">
                        {pillar.subtitle}
                      </p>
                      <p className="text-sm text-neutral-300 leading-relaxed font-light pt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison: Cursinho Tradicional vs Kuro Karasu */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-[#0d1117] border border-white/15">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-kanji">
              A Diferença Entre Estudar e Realmente Adquirir o Idioma
            </h3>
            <p className="text-sm text-neutral-400 mt-2 font-light">
              Entenda por que alunos passam anos em escolas tradicionais sem conseguir assistir a um anime sem legenda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-red-500/20 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm uppercase tracking-wider">
                <X className="w-5 h-5 text-rose-400" />
                <span>Método Tradicional de Cursinho</span>
              </div>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 mt-0.5">✕</span>
                  <span>Frases artificiais que ninguém fala no Japão moderno ("Isto é uma caneta").</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 mt-0.5">✕</span>
                  <span>Listas infinitas de kanjis isolados para memorizar sem contexto algum.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 mt-0.5">✕</span>
                  <span>Turmas de 10 a 15 alunos onde você fala menos de 3 minutos por aula.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 mt-0.5">✕</span>
                  <span>Ritmo engessado que prende você por anos sem tocar em um mangá original.</span>
                </li>
              </ul>
            </div>

            {/* Kuro Karasu */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-rose-950/20 to-neutral-900/40 border border-rose-500/30 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Método de Imersão Kuro Karasu</span>
              </div>
              <ul className="space-y-3 text-sm text-neutral-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Língua viva diretamente de animes, mangás, light novels e jogos japoneses.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Associação visual e emocional: o cérebro conecta a cena à expressão.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Aulas 100% individuais focadas nos seus gostos, ritmo e objetivos específicos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Revisão eficiente com Anki ou tarefas de casa tradicionais, adaptadas ao seu estilo.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
