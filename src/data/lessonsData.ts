import { ImmersionExample, PlanOption, TimelineStep } from '../types';
import slamDunkSceneImg from '../assets/images/slam_dunk_scene_1791218223004.jpg';
import ramenFriendsSceneImg from '../assets/images/ramen_friends_scene_1791218249252.jpg';
import ghibliBridgeSceneImg from '../assets/images/ghibli_bridge_scene_1791218266380.jpg';

export const PLANS_DATA: PlanOption[] = [
  {
    id: 'intensivo',
    name: 'Plano Intensivo',
    badge: 'Mais Recomendado',
    price: 'R$ 500',
    frequency: '3 aulas individuais por semana',
    hours: '1 hora por aula (12 aulas por mês)',
    description: 'Desenvolvido para quem busca uma evolução rápida e consistente através de acompanhamento contínuo e imersão guiada.',
    features: [
      '3 aulas individuais ao vivo por semana (1h cada)',
      'Aulas de segunda a sexta-feira',
      'Direito a repor 1 falta na semana ou no sábado (exclusivo para reposições)',
      '12 aulas por ciclo mensal (4 semanas)',
      'Revisão personalizada (baralhos no Anki ou tarefas de casa tradicionais)',
      'Suporte direto para dúvidas no WhatsApp durante a semana',
      'Material didático digital e conteúdos nativos inclusos',
      'Trilha completa de 33+ semanas da escrita à imersão total'
    ],
    recommendedFor: 'Quem quer aprender a falar e compreender japonês rápido, sem enrolação de anos em cursinhos.',
    targetProfile: {
      who: 'Ideal para quem busca ritmo acelerado, disciplina constante e fluência real no menor tempo possível.',
      traits: [
        'Quer consumir animes, mangás ou jogos sem legenda o quanto antes',
        'Tem meta de prestar o exame JLPT (N5, N4 ou N3) ou viajar para o Japão em breve',
        'Prefere ter contato com o professor várias vezes na semana para não perder o ritmo',
        'Valoriza correções em tempo real e evolução consistente a cada semana'
      ]
    },
    popular: true
  },
  {
    id: 'flexivel',
    name: 'Plano Flexível',
    badge: 'Rotina Dinâmica',
    price: 'R$ 250',
    frequency: '1 aula individual por semana',
    hours: '1 hora por aula (4 aulas por mês)',
    description: 'Ideal para quem tem uma rotina corrida ou prefere conciliar estudo autônomo guiado com encontros semanais focados.',
    features: [
      '1 aula individual ao vivo por semana (1h cada)',
      'Aulas de segunda a sexta-feira',
      'Direito a repor 1 falta na mesma semana ou no sábado',
      '4 aulas por ciclo mensal',
      'Metas semanais de estudo e leitura/escuta autônoma',
      'Revisão sob medida (baralhos no Anki ou exercícios tradicionais)',
      'Esclarecimento de dúvidas gramaticais e análise de mídias',
      'Possibilidade de agendamento flexível de horários'
    ],
    recommendedFor: 'Pessoas com rotina dinâmica que querem constância semanal e direção clara de estudo.',
    targetProfile: {
      who: 'Ideal para quem trabalha, estuda ou tem horários variáveis, mas quer aprender com qualidade e autonomia.',
      traits: [
        'Possui rotina dinâmica e precisa de flexibilidade para agendar as aulas',
        'Gosta de praticar entre as aulas com Anki ou com tarefas de casa adaptadas',
        'Quer encontros semanais para tirar dúvidas cruciais, destravar pronúncia e alinhar metas',
        'Busca constância sem a sobrecarga de múltiplos encontros na semana'
      ]
    },
    popular: false
  },
  {
    id: 'avulso',
    name: 'Aula Avulsa',
    badge: 'Sob Demanda',
    price: 'R$ 70',
    frequency: 'Por aula agendada',
    hours: '1 hora por encontro',
    description: 'Perfeito para tirar dúvidas pontuais, revisar um ponto gramatical específico antes de uma viagem ou teste.',
    features: [
      '1 aula avulsa individual de 60 minutos',
      'Agendamento conforme disponibilidade mútua',
      'Foco 100% no tópico ou dúvida que você trouxer',
      'Análise de trecho de anime/mangá de sua escolha',
      'Exportação dos vocabulários discutidos na aula'
    ],
    recommendedFor: 'Quem precisa de mentoria pontual, reforço específico ou quer testar a metodologia.',
    targetProfile: {
      who: 'Ideal para quem quer tirar dúvidas específicas ou conhecer a dinâmica de aula sem compromisso mensal.',
      traits: [
        'Quer ajuda pontual para entender uma cena, texto ou ponto gramatical complexo',
        'Precisa de uma revisão de emergência antes de uma viagem ou teste',
        'Deseja fazer uma aula avulsa para experimentar a metodologia de imersão'
      ]
    },
    popular: false
  }
];

export const TIMELINE_INTENSIVO: TimelineStep[] = [
  {
    weeks: 'Semanas 1 a 2',
    title: 'Sistemas de Escrita & Fonética',
    focus: 'Hiragana, Katakana & Fonética Básica',
    description: 'Domínio prático dos dois alfabetos fonéticos fundamentais do japonês. Você aprende a ler e pronunciar palavras reais sem recorrer ao alfabeto romano (romaji).',
    materials: ['Tabelas mnemônicas visuais', 'Baralho Anki de reconhecimento rápido', 'Áudios nativos de pronúncia']
  },
  {
    weeks: 'Semanas 3 a 6',
    title: 'Gramática Básica Essencial',
    focus: 'Estruturas de Frases & Partículas',
    description: 'Construção da espinha dorsal do idioma: partículas essenciais (は, が, を, に, で), verbos principais em presente/passado e estruturas de afirmação/negação.',
    materials: ['Guias práticos e visuais de gramática', 'Exercícios contextualizados', 'Cards de fixação de padrões frasais']
  },
  {
    weeks: 'Semanas 7 a 15',
    title: 'Imersão Inicial com Graded Readers',
    focus: '2 aulas gramática + 1 aula imersão guiada',
    description: 'Transição da teoria para a prática real: início da leitura de Graded Readers (livros em japonês escritos especialmente para estudantes, com vocabulário controlado e furigana).',
    materials: ['Graded Readers níveis 0 e 1', 'Áudios originais das histórias', 'Expansão de vocabulário no Anki']
  },
  {
    weeks: 'Semanas 16 a 22',
    title: 'Imersão com Mangás Cotidianos',
    focus: '2 aulas gramática + 1 aula mangás',
    description: 'O aluno mergulha em mangás no estilo Slice of Life (cotidiano e vida real, como Yotsuba&! e Karakai Jouzu no Takagi-san), aprendendo a linguagem viva que os japoneses usam.',
    materials: ['Painéis originais de mangás selecionados', 'Gírias e contrações coloquiais', 'Decks de frases de contexto']
  },
  {
    weeks: 'Semanas 23 a 32',
    title: 'Mangás Avançados & Literatura',
    focus: '1 aula gramática + 2 aulas imersão',
    description: 'Menos teoria e muito mais exposição: leitura de obras com vocabulário mais rico, diálogos complexos e nuances culturais expressivas.',
    materials: ['Mangás shonen/seinen selecionados', 'Contos e crônicas curtas japonesas', 'Expressões idiomáticas']
  },
  {
    weeks: 'A partir da Sem. 33',
    title: 'Fase de Imersão Total',
    focus: '3 dias de imersão total com animes, mangás e livros',
    description: 'Gramática e conversação totalmente integradas na prática. Você consome animes com áudio original, analisa roteiros e desenvolve autonomia completa no aprendizado.',
    materials: ['Animes e séries reais', 'Light novels e literatura japonesa', 'Conversação guiada e shadowing']
  }
];

export const IMMERSION_EXAMPLES: ImmersionExample[] = [
  {
    id: 'slam-dunk',
    category: 'Anime Clássico / Emoção',
    title: 'Frase Icônica de Motivação (Slam Dunk)',
    context: 'Cena do Sensei Anzai ensinando a nunca desistir, gravada na memória de gerações de fãs japoneses.',
    sceneImage: slamDunkSceneImg,
    japanese: '諦めたらそこで試合終了ですよ',
    romaji: 'Akirametara sokode shiai shuuryou desu yo',
    portuguese: 'Se desistir, é aí que a partida termina.',
    grammarBreakdown: [
      {
        part: '諦めたら (akirametara)',
        furigana: 'あきらめたら',
        meaning: 'Se desistir',
        grammarNote: 'Verbo 諦める (desistir) na forma condicional ~tara (se/quando acontecer).'
      },
      {
        part: 'そこで (soko de)',
        furigana: 'そこで',
        meaning: 'Bem aí / nesse ponto',
        grammarNote: 'Pronome de lugar そこ (aí) + partícula で marcando o ponto onde a ação ocorre.'
      },
      {
        part: '試合 (shiai)',
        furigana: 'しあい',
        meaning: 'Partida / jogo',
        grammarNote: 'Substantivo formado por 試 (teste) + 合 (encontro/junção).'
      },
      {
        part: '終了 (shuuryou)',
        furigana: 'しゅうりょう',
        meaning: 'Término / encerramento',
        grammarNote: 'Palavra sino-japonesa: 終 (fim) + 了 (completar).'
      },
      {
        part: 'ですよ (desu yo)',
        furigana: 'ですよ',
        meaning: 'É (enfático)',
        grammarNote: 'Cópula polida です + partícula よ para enfatizar a certeza e aconselhar o ouvinte.'
      }
    ],
    culturalNote: 'Esta frase transcendeu o anime e se tornou um provérbio moderno no Japão para encorajar pessoas em momentos de desafio.',
    ankiDeckPreview: {
      front: '諦めたらそこで試合終了ですよ [あきらめたらそこでしあいしゅうりょうですよ]',
      back: 'Significado: "Se você desistir, é aí que a partida termina." | Vocabulário-chave: 諦める (desistir), 試合 (partida), 終了 (término).',
      audioHint: 'Áudio original da cena com entonação enfática de よ.',
      deckNote: 'A imagem original da cena do anime aparece no cartão para ativar a memória visual e emocional imediata.'
    }
  },
  {
    id: 'slice-of-life',
    category: 'Mangá Cotidiano / Diálogo Real',
    title: 'Convidando um Amigo para Comer Lámen',
    context: 'Diálogo natural entre amigos na saída da escola ou do trabalho.',
    sceneImage: ramenFriendsSceneImg,
    japanese: '今日、帰りに一緒にラーメン食べに行かない？',
    romaji: 'Kyou, kaeri ni issho ni raamen tabe ni ikanai?',
    portuguese: 'Hoje, na volta, não quer ir comer lámen junto?',
    grammarBreakdown: [
      {
        part: '今日 (kyou)',
        furigana: 'きょう',
        meaning: 'Hoje',
        grammarNote: 'Palavra temporal colocada no início da frase.'
      },
      {
        part: '帰りに (kaeri ni)',
        furigana: 'かえりに',
        meaning: 'Na volta / no caminho de volta',
        grammarNote: 'Substantivo derivado do verbo 帰る (voltar) + partícula に indicando ocasião/tempo.'
      },
      {
        part: '一緒に (issho ni)',
        furigana: 'いっしょに',
        meaning: 'Juntos',
        grammarNote: 'Advérbio comum em japonês para propor atividades conjuntas.'
      },
      {
        part: '食べに (tabe ni)',
        furigana: 'たべに',
        meaning: 'Para comer (com o objetivo de)',
        grammarNote: 'Raiz do verbo 食べる + partícula に para indicar o propósito do movimento.'
      },
      {
        part: '行かない？ (ikanai?)',
        furigana: 'いかない？',
        meaning: 'Não quer ir? / Vamos?',
        grammarNote: 'Forma informal negativa de 行く com entonação ascendente usada para convidar.'
      }
    ],
    culturalNote: 'No Japão, convidar na forma negativa interrogativa (~nai?) soa mais atencioso, pois dá espaço para a outra pessoa recusar sem constrangimento.',
    ankiDeckPreview: {
      front: '今日、帰りに一緒にラーメン食べに行かない？',
      back: 'Significado: "Hoje na volta não quer ir comer lámen junto?" | Padrão: [Raiz verbal] + に行く = "ir para fazer algo".',
      audioHint: 'Áudio com entonação coloquial amigável e subida de tom final.',
      deckNote: 'A foto dos amigos no restaurante de lámen conecta a fala ao contexto social do cotidiano japonês.'
    }
  },
  {
    id: 'spirited-away',
    category: 'Cinema & Animação / Studio Ghibli',
    title: 'A Promessa e o Nome Próprio',
    context: 'O poder dos nomes na mitologia e cultura japonesa retratado em A Viagem de Chihiro.',
    sceneImage: ghibliBridgeSceneImg,
    japanese: '自分の名前を大事にしなさい',
    romaji: 'Jibun no namae o daiji ni shinasai',
    portuguese: 'Cuide bem do seu próprio nome.',
    grammarBreakdown: [
      {
        part: '自分 (jibun)',
        furigana: 'じぶん',
        meaning: 'De si próprio / si mesmo',
        grammarNote: 'Pronome reflexivo com a partícula de posse の (no).'
      },
      {
        part: '名前 (namae)',
        furigana: 'なまえ',
        meaning: 'Nome',
        grammarNote: 'Substantivo acompanhado da partícula acusativa を (o) que indica o objeto direto.'
      },
      {
        part: '大事に (daiji ni)',
        furigana: 'だいじに',
        meaning: 'Com carinho / com apreço',
        grammarNote: 'Adjetivo-na 大事 transformado em advérbio com に.'
      },
      {
        part: 'しなさい (shinasai)',
        furigana: 'しなさい',
        meaning: 'Faça (ordem carinhosa/instrução)',
        grammarNote: 'Forma imperativa suave ~nasai, comum de mentores e familiares.'
      }
    ],
    culturalNote: 'Na tradição japonesa, o nome guarda a essência da pessoa (kotodama - o espírito das palavras). Esquecer seu nome é perder sua identidade.',
    ankiDeckPreview: {
      front: '自分の名前を大事にしなさい [じぶんのなまえをだいじにしなさい]',
      back: 'Significado: "Valorize/cuide bem do seu nome." | Estrutura: 大事にする (valorizar, tratar com carinho).',
      audioHint: 'Voz calma e firme, característica de conselho sábio.',
      deckNote: 'A cena mágica do filme no cartão resgata o mistério e o tom poético da lição.'
    }
  }
];

export const FAQS = [
  {
    question: 'Nunca estudei japonês na vida. O método de imersão funciona para iniciantes?',
    answer: 'Sim, com certeza! Não jogamos você direto em textos difíceis sem preparação. Nas primeiras semanas, nós construímos uma base sólida e rápida com os sistemas de escrita (Hiragana e Katakana) e a gramática elementar com materiais visuais intuitivos. Assim que essa base é estabelecida, introduzimos Graded Readers e diálogos simples de mangá.'
  },
  {
    question: 'Como as aulas são realizadas?',
    answer: 'As aulas são 100% individuais e ao vivo pela internet (utilizamos Discord ou Google Meet com compartilhamento de tela). Em cada encontro, analisamos juntos os materiais nativos, resolvemos dúvidas, praticamos a fala e estruturamos as revisões e o vocabulário para você fixar o conteúdo.'
  },
  {
    question: 'O que é o Anki e sou obrigado a utilizá-lo?',
    answer: 'O Anki é um aplicativo gratuito de repetição espaçada que utilizo para fornecer baralhos organizados com o conteúdo de cada aula, facilitando revisões rápidas pelo celular. Porém, você NÃO é obrigado a usá-lo! Como cada pessoa aprende de um jeito, se você não se adaptar ao Anki, o acompanhamento e as tarefas de casa são adaptados para formatos tradicionais de exercícios escritos e cadernos.'
  },
  {
    question: 'Quais são os dias de aula e o que acontece se eu precisar faltar?',
    answer: 'As aulas regulares acontecem de segunda a sexta-feira. O sábado é exclusivo para reposição de aulas perdidas durante a semana. Caso você precise faltar, tem direito a repor 1 aula por semana: tentamos encaixar a reposição em outro horário na própria semana ou, se não houver horário disponível de segunda a sexta, realizamos a reposição no sábado.'
  },
  {
    question: 'Vocês preparam para o JLPT (exame de proficiência japonesa)?',
    answer: 'Sim! Como o método de imersão expande o vocabulário real e a velocidade de leitura muito mais rápido que o método tradicional, nossos alunos adquirem a compreensão exigida no JLPT (N5 ao N2) de forma orgânica, complementada por simulados direcionados.'
  },
  {
    question: 'Quais são as formas de pagamento disponíveis?',
    answer: 'Aceitamos PIX, boleto bancário e transferência bancária (TED/DOC). Não aceitamos cartão de crédito. O pagamento é realizado mensalmente no início de cada ciclo de 4 semanas de aulas (ou antes da aula, no caso de aula avulsa).'
  }
];
