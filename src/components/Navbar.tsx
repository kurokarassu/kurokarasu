import React, { useState } from 'react';
import { Menu, X, MessageSquare, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenTrialModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Na Prática', href: '#amostrador' },
    { label: 'Planos & Perfis', href: '#planos' },
    { label: 'Trilha 33 Semanas', href: '#trilha' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0e14]/90 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-md py-1"
          >
            <div className="w-10 h-10 rounded-full border border-rose-500/40 bg-gradient-to-br from-rose-950/60 to-black flex items-center justify-center text-rose-400 font-kanji font-bold text-lg group-hover:border-rose-400 transition-colors shadow-sm shadow-rose-950/50">
              烏
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-wider text-white flex items-center gap-1.5 font-kanji">
                Kuro Karasu <span className="text-xs text-rose-400 font-normal tracking-normal font-jp">黒烏</span>
              </span>
              <span className="text-[11px] text-neutral-400 tracking-wider uppercase font-medium">
                Aulas Particulares de Japonês
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-rose-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct WhatsApp Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5543996298236?text=Ol%C3%A1%20Sensei%20Caio!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20japon%C3%AAs%20Kuro%20Karasu."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md shadow-emerald-950/40 active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: (43) 99629-8236</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Alternar menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0d1117] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="https://wa.me/5543996298236?text=Ol%C3%A1%20Sensei%20Caio!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20japon%C3%AAs%20Kuro%20Karasu."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: (43) 99629-8236</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
