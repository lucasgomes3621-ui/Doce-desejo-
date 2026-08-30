import React from 'react';
import { ShoppingBag, Sparkles, Heart, Clock, Award } from 'lucide-react';
import { LOGO_IMAGE, buildWhatsAppLink } from '../data/products';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenCustomOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenCustomOrder }) => {
  const heroWhatsappMessage = 'Olá Doce Desejo! Gostaria de consultar a disponibilidade para pedidos de hoje.';

  return (
    <header className="pt-28 pb-12 sm:pt-36 sm:pb-20 md:pt-44 md:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Brand Badge in Hero */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-pink-100 text-xs font-semibold uppercase tracking-wider backdrop-blur-md mb-6 border border-white/20">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
        <span>Confeitaria Artesanal de Alto Padrão</span>
      </div>

      {/* Brand Center Circular Logo */}
      <div className="relative mb-8 group">
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 squishy-shadow bg-white p-1 transition-transform duration-500 group-hover:scale-105">
          <img
            src={LOGO_IMAGE}
            alt="Doce Desejo Confeitaria Artesanal"
            className="w-full h-full object-cover rounded-full"
            loading="eager"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-white text-[#d81b60] p-2.5 rounded-full shadow-lg border border-pink-100 animate-bounce">
          <Heart className="w-5 h-5 fill-[#d81b60]" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight max-w-3xl mx-auto mb-5 leading-tight">
        Sabor que inspira desejos.
      </h1>

      {/* Subheading */}
      <p className="font-sans text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        Momentos de pura indulgência com nossa confeitaria artesanal. Ingredientes selecionados e muito carinho em cada receita.
      </p>

      {/* CTA Buttons Group */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <a
          href={buildWhatsAppLink(heroWhatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          id="hero-whatsapp-cta"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#d81b60] font-bold text-base sm:text-lg px-8 py-4 rounded-full hover:bg-pink-50 hover:scale-105 transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.15)] active:translate-y-[2px]"
        >
          <ShoppingBag className="w-5 h-5 text-[#d81b60]" />
          <span>Peça pelo WhatsApp</span>
        </a>

        <button
          onClick={onExploreMenu}
          id="hero-explore-menu-cta"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b80049]/40 hover:bg-[#b80049]/70 text-white font-semibold text-base px-7 py-4 rounded-full border border-white/25 backdrop-blur-sm transition-all duration-200"
        >
          <span>Ver Cardápio Completo</span>
        </button>
      </div>

      {/* Quick Trust Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-16 max-w-4xl w-full text-left">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/15 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white">Chocolate Nobre</div>
            <div className="text-[11px] text-white/75">Cacau e manteiga pura</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/15 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <Heart className="w-5 h-5 text-pink-200" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white">100% Artesanal</div>
            <div className="text-[11px] text-white/75">Feito à mão sempre</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/15 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5 text-emerald-300" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white">Fresco do Dia</div>
            <div className="text-[11px] text-white/75">Assado sob demanda</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/15 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white">Personalização</div>
            <div className="text-[11px] text-white/75">Do jeito que sonhar</div>
          </div>
        </div>
      </div>
    </header>
  );
};
