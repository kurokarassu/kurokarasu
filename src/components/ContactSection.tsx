import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, Copy, Check, Instagram, Youtube, Sparkles, Phone, Clock } from 'lucide-react';

interface ContactSectionProps {
  preselectedPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedPlan }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [level, setLevel] = useState('Iniciante do zero');
  const [plan, setPlan] = useState('Plano Intensivo (R$ 500/mês)');
  const [preferredTime, setPreferredTime] = useState('Noite');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedPlan) {
      if (preselectedPlan.includes('Intensivo')) {
        setPlan('Plano Intensivo (R$ 500/mês)');
      } else if (preselectedPlan.includes('Flexível')) {
        setPlan('Plano Flexível (R$ 250/mês)');
      } else if (preselectedPlan.includes('Avulsa')) {
        setPlan('Aula Avulsa (R$ 70)');
      }
    }
  }, [preselectedPlan]);

  const generateMessageBody = () => {
    let msg = `Olá Sensei Caio! Me chamo ${name || '[Seu Nome]'}.\n`;
    msg += `Tenho interesse nas aulas particulares de japonês da Kuro Karasu.\n\n`;
    msg += `📌 Plano de interesse: ${plan}\n`;
    msg += `📌 Meu nível atual: ${level}\n`;
    msg += `📌 Melhor período para aulas: ${preferredTime}\n`;
    if (message.trim()) {
      msg += `📌 Dúvida/Objetivo: ${message.trim()}\n`;
    }
    msg += `\nGostaria de verificar disponibilidade de horários para iniciarmos!`;
    return msg;
  };

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(generateMessageBody());
    const url = `https://wa.me/5543996298236?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateMessageBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-24 bg-[#0b0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Fale com o Sensei</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-kanji">
            Comece Suas Aulas de Japonês
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            Entre em contato diretamente para tirar dúvidas, agendar uma conversa inicial ou começar sua imersão particular.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Action & Profile Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Big Action Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0f1712] via-[#0d1511] to-[#09100c] border border-emerald-500/30 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 block">
                    Canal Principal de Contato
                  </span>
                  <h3 className="text-lg font-bold text-white font-kanji">
                    WhatsApp do Professor
                  </h3>
                </div>
              </div>

              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Tire suas dúvidas ou agende sua primeira aula. O atendimento é feito diretamente pelo professor Caio Marques via WhatsApp.
              </p>

              <div className="p-4 rounded-xl bg-black/50 border border-emerald-500/30 flex items-center justify-between text-xs text-neutral-300">
                <span className="text-neutral-400">WhatsApp oficial:</span>
                <span className="font-mono font-bold text-emerald-400 text-sm tracking-wider">
                  +55 (43) 99629-8236
                </span>
              </div>

              <a
                href="https://wa.me/5543996298236?text=Ol%C3%A1%20Sensei%20Caio!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20japon%C3%AAs."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition-all shadow-lg shadow-emerald-950/60 active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Conversar no WhatsApp Agora</span>
              </a>
            </div>

            {/* Schedule details */}
            <div className="p-6 rounded-2xl bg-[#0e131b] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-rose-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs text-neutral-400 block font-semibold uppercase tracking-wider">
                    Dias de Aula & Reposições
                  </span>
                  <div className="text-xs text-neutral-200 leading-relaxed font-light">
                    <p><strong className="text-white">Segunda a Sexta:</strong> Aulas regulares individuais.</p>
                    <p className="mt-1"><strong className="text-emerald-400">Sábado:</strong> Exclusivo para repor aula perdida na semana (caso não consiga repor na própria semana).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="p-6 rounded-2xl bg-[#0e131b] border border-white/10 space-y-3 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block">
                Siga nas Redes Sociais
              </span>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-rose-400 hover:border-rose-500/40 transition-colors flex items-center gap-2 text-xs"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-rose-400 hover:border-rose-500/40 transition-colors flex items-center gap-2 text-xs"
                >
                  <Youtube className="w-4 h-4" />
                  <span>YouTube</span>
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-rose-400 hover:border-rose-500/40 transition-colors flex items-center gap-2 text-xs"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Pre-formatted WhatsApp Dispatcher Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0e131b] border border-white/10 rounded-2xl p-7 sm:p-9 shadow-xl space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-semibold text-rose-400">
                Formulário Rápido de Agendamento
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-kanji">
                Envie Seus Dados para o Professor
              </h3>
              <p className="text-xs text-neutral-400 font-light">
                Preencha os campos abaixo. Ao clicar em enviar, uma mensagem estruturada será aberta no seu WhatsApp pronta para envio.
              </p>
            </div>

            <form onSubmit={handleSendWhatsapp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Lucas Silva"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    Seu WhatsApp (opcional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(DDD) 99999-9999"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Plan */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    Plano de Interesse
                  </label>
                  <select
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0c1017] border border-white/15 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
                  >
                    <option value="Plano Intensivo (R$ 500/mês)">Plano Intensivo (3 aulas/sem - R$ 500/mês)</option>
                    <option value="Plano Flexível (R$ 250/mês)">Plano Flexível (1 aula/sem - R$ 250/mês)</option>
                    <option value="Aula Avulsa (R$ 70)">Aula Avulsa (R$ 70 por encontro)</option>
                    <option value="Quero recomendação do professor">Quero recomendação do professor</option>
                  </select>
                </div>

                {/* Current Level */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    Seu Nível Atual
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0c1017] border border-white/15 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
                  >
                    <option value="Iniciante do zero">Iniciante do zero (nunca estudei)</option>
                    <option value="Já sei Hiragana e Katakana">Já sei Hiragana e Katakana</option>
                    <option value="Básico em andamento">Básico em andamento (já vi gramática)</option>
                    <option value="Intermediário / Quero destravar">Intermediário (quero destravar fala/leitura)</option>
                  </select>
                </div>

              </div>

              {/* Preferred Schedule */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  Melhor Período para as Aulas
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Manhã', 'Tarde', 'Noite', 'Finais de Semana'].map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setPreferredTime(time)}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors ${
                        preferredTime === time
                          ? 'bg-rose-950/40 border-rose-500 text-white'
                          : 'bg-black/30 border-white/10 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Question */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  Alguma dúvida específica ou objetivo que queira contar? (opcional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex: Quero aprender para conseguir ler o mangá de One Piece no original e planejo viajar para Tóquio no ano que vem..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-rose-500 transition-colors"
                />
              </div>

              {/* Live Preview Box of the Message */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs space-y-1">
                <span className="text-neutral-400 block font-medium">Prévia da mensagem no WhatsApp:</span>
                <p className="text-neutral-300 font-mono text-[11px] whitespace-pre-line leading-relaxed">
                  {generateMessageBody()}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar pelo WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-neutral-200 hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Mensagem Copiada!' : 'Copiar Texto'}</span>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
