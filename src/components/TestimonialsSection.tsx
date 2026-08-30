import React from 'react';
import { Star, MessageCircle, Heart, Quote } from 'lucide-react';
import { buildWhatsAppLink } from '../data/products';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Camila Rodrigues',
      comment: 'O bolo de aniversário da minha filha foi o maior sucesso da festa! Massa super leve e recheio na medida perfeita.',
      highlight: 'Bolo Confeitado de Ninho c/ Morango',
      stars: 5,
    },
    {
      name: 'Leonardo Ferreira',
      comment: 'O melhor biscoito chimango que já comi! Chegou quentinho e crocante para o café da tarde da firma.',
      highlight: 'Biscoito Chimango Tradicional',
      stars: 5,
    },
    {
      name: 'Juliana Paes Mendes',
      comment: 'Os cupcakes com cobertura de café são obras de arte. Atendimento impecável pelo WhatsApp e entrega pontual.',
      highlight: 'Cupcakes Premium',
      stars: 5,
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 text-pink-100 text-xs font-semibold uppercase tracking-wider mb-3">
          <Heart className="w-3.5 h-3.5 fill-pink-200 text-pink-200" />
          <span>Clientes Apaixonados</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white">
          Quem prova se apaixona
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="bg-white text-neutral-800 rounded-2xl p-6 squishy-shadow flex flex-col justify-between relative group hover:-translate-y-1 transition-all duration-300"
          >
            <Quote className="w-8 h-8 text-pink-100 absolute top-4 right-4 group-hover:text-pink-200 transition-colors" />
            <div>
              <div className="flex gap-1 text-amber-400 mb-3">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4 italic">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100">
              <h4 className="font-bold text-sm text-neutral-900">{rev.name}</h4>
              <span className="text-xs text-[#d81b60] font-medium">{rev.highlight}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
