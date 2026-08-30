import React, { useState } from 'react';
import { ArrowRight, Plus, Eye, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { CATEGORIES } from '../data/products';

interface DeliciasMenuProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const DeliciasMenu: React.FC<DeliciasMenuProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredProducts =
    activeCategory === 'todos'
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Separate default grid products for layout fidelity when 'todos' is selected
  const boloConfeitado = products.find((p) => p.id === 'bolo-confeitado-principal');
  const bolosCaseiros = products.find((p) => p.id === 'bolos-caseiros');
  const cupcakesColoridos = products.find((p) => p.id === 'cupcakes-coloridos');
  const cupcakesPremium = products.find((p) => p.id === 'cupcakes-premium');
  const biscoitoChimango = products.find((p) => p.id === 'biscoito-chimango');

  const otherProducts = products.filter(
    (p) =>
      p.id !== 'bolo-confeitado-principal' &&
      p.id !== 'bolos-caseiros' &&
      p.id !== 'cupcakes-coloridos' &&
      p.id !== 'cupcakes-premium' &&
      p.id !== 'biscoito-chimango'
  );

  return (
    <section id="cardapio" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-3 tracking-tight">
          Nossas Delícias
        </h2>
        <p className="font-sans text-base sm:text-lg text-pink-100 max-w-md mx-auto">
          Explore nosso cardápio feito com amor.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-3xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                id={`filter-cat-${cat.id}`}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-[#d81b60] shadow-md scale-105'
                    : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Bento Grid layout when "todos" is selected, else regular responsive grid */}
      {activeCategory === 'todos' ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* 1. Bolos Confeitados (Large Card - 8 cols) */}
            {boloConfeitado && (
              <div
                id="bolos-confeitados"
                onClick={() => onSelectProduct(boloConfeitado)}
                className="md:col-span-8 group rounded-2xl overflow-hidden bg-white text-neutral-800 squishy-shadow transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div className="h-64 sm:h-80 md:h-96 w-full overflow-hidden relative">
                  <img
                    src={boloConfeitado.image}
                    alt={boloConfeitado.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#d81b60] text-white px-3.5 py-1 rounded-full text-xs font-bold tracking-wide shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>{boloConfeitado.badge || 'Destaque'}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-semibold bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Clique para ver sabores e tamanhos
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-2 group-hover:text-[#d81b60] transition-colors">
                      {boloConfeitado.name}
                    </h3>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                      {boloConfeitado.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <div>
                      <span className="text-xs font-medium text-neutral-400 block uppercase tracking-wider">A partir de</span>
                      <span className="font-heading text-2xl font-extrabold text-[#d81b60]">
                        {boloConfeitado.priceDisplay}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(boloConfeitado);
                        }}
                        title="Adicionar à sacola"
                        className="w-10 h-10 rounded-full bg-pink-50 text-[#d81b60] hover:bg-[#d81b60] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                      <div className="w-11 h-11 rounded-full bg-[#d81b60]/10 flex items-center justify-center text-[#d81b60] group-hover:bg-[#d81b60] group-hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Bolos Caseiros (Tall Card - 4 cols) */}
            {bolosCaseiros && (
              <div
                id="bolos-caseiros"
                onClick={() => onSelectProduct(bolosCaseiros)}
                className="md:col-span-4 group rounded-2xl overflow-hidden bg-white text-neutral-800 squishy-shadow transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div className="h-48 sm:h-64 w-full overflow-hidden relative">
                  <img
                    src={bolosCaseiros.image}
                    alt={bolosCaseiros.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-semibold bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Ver opções
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading text-2xl font-extrabold text-neutral-900 mb-2 group-hover:text-[#d81b60] transition-colors">
                      {bolosCaseiros.name}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                      {bolosCaseiros.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <div>
                      <span className="text-xs font-medium text-neutral-400 block uppercase tracking-wider">A partir de</span>
                      <span className="font-heading text-xl font-extrabold text-[#d81b60]">
                        {bolosCaseiros.priceDisplay}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(bolosCaseiros);
                        }}
                        title="Adicionar à sacola"
                        className="w-9 h-9 rounded-full bg-pink-50 text-[#d81b60] hover:bg-[#d81b60] hover:text-white flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <div className="w-9 h-9 rounded-full bg-[#d81b60]/10 flex items-center justify-center text-[#d81b60] group-hover:bg-[#d81b60] group-hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom 3 Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 3. Cupcakes Coloridos */}
            {cupcakesColoridos && (
              <div
                id="cupcakes"
                onClick={() => onSelectProduct(cupcakesColoridos)}
                className="group rounded-2xl overflow-hidden bg-white text-neutral-800 squishy-shadow transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div className="h-52 w-full overflow-hidden relative">
                  <img
                    src={cupcakesColoridos.image}
                    alt={cupcakesColoridos.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-neutral-900 mb-1 group-hover:text-[#d81b60] transition-colors">
                      {cupcakesColoridos.name}
                    </h3>
                    <p className="text-neutral-500 text-xs line-clamp-2 mb-4">
                      {cupcakesColoridos.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                    <span className="font-heading text-lg font-extrabold text-[#d81b60]">
                      {cupcakesColoridos.priceDisplay}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(cupcakesColoridos);
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-pink-50 text-[#d81b60] hover:bg-[#d81b60] hover:text-white font-semibold text-xs transition-colors flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Pedir
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Cupcakes Premium */}
            {cupcakesPremium && (
              <div
                onClick={() => onSelectProduct(cupcakesPremium)}
                className="group rounded-2xl overflow-hidden bg-white text-neutral-800 squishy-shadow transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div className="h-52 w-full overflow-hidden relative">
                  <img
                    src={cupcakesPremium.image}
                    alt={cupcakesPremium.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-neutral-900 mb-1 group-hover:text-[#d81b60] transition-colors">
                      {cupcakesPremium.name}
                    </h3>
                    <p className="text-neutral-500 text-xs line-clamp-2 mb-4">
                      {cupcakesPremium.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                    <span className="font-heading text-lg font-extrabold text-[#d81b60]">
                      {cupcakesPremium.priceDisplay}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(cupcakesPremium);
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-pink-50 text-[#d81b60] hover:bg-[#d81b60] hover:text-white font-semibold text-xs transition-colors flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Pedir
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Biscoito Chimango */}
            {biscoitoChimango && (
              <div
                id="biscoitos"
                onClick={() => onSelectProduct(biscoitoChimango)}
                className="group rounded-2xl overflow-hidden bg-white text-neutral-800 squishy-shadow transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div className="h-52 w-full overflow-hidden relative">
                  <img
                    src={biscoitoChimango.image}
                    alt={biscoitoChimango.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-neutral-900 mb-1 group-hover:text-[#d81b60] transition-colors">
                      {biscoitoChimango.name}
                    </h3>
                    <p className="text-neutral-500 text-xs line-clamp-2 mb-4">
                      {biscoitoChimango.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                    <span className="font-heading text-lg font-extrabold text-[#d81b60]">
                      {biscoitoChimango.priceDisplay}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(biscoitoChimango);
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-pink-50 text-[#d81b60] hover:bg-[#d81b60] hover:text-white font-semibold text-xs transition-colors flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Pedir
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bolos no Pote Section & Extra Products */}
          {otherProducts.length > 0 && (
            <div id="bolos-no-pote" className="pt-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Bolos no Pote & Sobremesas Individuais
                  </h3>
                  <p className="text-xs sm:text-sm text-pink-100">Práticos, cremosos e prontinhos para consumo.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => onSelectProduct(product)}
                    className="group rounded-2xl overflow-hidden bg-white text-neutral-800 squishy-shadow transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="h-48 w-full overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-[#d81b60] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                        {product.categoryLabel}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <h4 className="font-heading text-lg font-bold text-neutral-900 mb-1 group-hover:text-[#d81b60] transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-neutral-500 text-xs line-clamp-2 mb-4">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                        <span className="font-heading text-base font-extrabold text-[#d81b60]">
                          {product.priceDisplay}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                          }}
                          className="px-3 py-1.5 rounded-full bg-pink-50 text-[#d81b60] hover:bg-[#d81b60] hover:text-white font-semibold text-xs transition-colors flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" /> Adicionar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Regular category filtered view */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group rounded-2xl overflow-hidden bg-white text-neutral-800 squishy-shadow transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              <div className="h-56 w-full overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[#d81b60] text-white px-2.5 py-0.5 rounded-full text-xs font-bold shadow-sm">
                    {product.badge}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-1 group-hover:text-[#d81b60] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <span className="font-heading text-lg sm:text-xl font-extrabold text-[#d81b60]">
                    {product.priceDisplay}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="px-3.5 py-2 rounded-full bg-pink-50 text-[#d81b60] hover:bg-[#d81b60] hover:text-white font-semibold text-xs transition-colors flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4" /> Sacola
                    </button>
                    <div className="w-8 h-8 rounded-full bg-[#d81b60]/10 flex items-center justify-center text-[#d81b60] group-hover:bg-[#d81b60] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
