import React from 'react';
import { Sparkles, Heart, Utensils, CheckCircle2 } from 'lucide-react';
import { ABOUT_IMAGE } from '../data/products';

export const AboutSection: React.FC = () => {
  return (
    <section id="historia" className="py-16 md:py-24 bg-[#b80049]/30 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Left Column: Asymmetric Image Frame */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden squishy-shadow border-4 border-white/20 group">
              <img
                src={ABOUT_IMAGE}
                alt="Utensílios de confeitaria, rolo de massa e forminhas da Doce Desejo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white text-[#d81b60] flex items-center justify-center font-bold shrink-0 shadow-md">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-pink-200">Processo 100% Artesanal</div>
                  <div className="text-sm font-semibold text-white">Sem misturas prontas ou conservantes químicos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="w-full md:w-1/2 order-1 md:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#d81b60] text-xs font-bold uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nossa História</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Feito à mão, com ingredientes selecionados e muito carinho.
            </h2>

            <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Na <strong className="text-white font-semibold">Doce Desejo</strong>, acreditamos que a verdadeira magia da confeitaria está nos detalhes. Cada receita é preparada artesanalmente, respeitando o tempo e utilizando os melhores ingredientes para garantir que cada mordida seja uma experiência inesquecível.
              </p>
              <p>
                Do bater da massa ao cuidado com a embalagem, nosso objetivo é entregar não apenas um doce, mas um momento de alegria e indulgência para o seu dia.
              </p>
            </div>

            {/* Quality Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-white/95 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-pink-200 shrink-0" />
                <span>Ovos frescos e manteiga de primeira</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/95 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-pink-200 shrink-0" />
                <span>Chocolates nobres e cacau puro</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/95 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-pink-200 shrink-0" />
                <span>Recheios fartos e bem aveludados</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/95 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-pink-200 shrink-0" />
                <span>Embalagens seguras para presente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
