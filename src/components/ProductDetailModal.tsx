import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, Check, Sparkles, Heart } from 'lucide-react';
import { Product } from '../types';
import { buildWhatsAppLink } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (
    product: Product,
    quantity: number,
    selectedFlavor?: string,
    selectedSize?: string,
    unitPrice?: number
  ) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState<string>(
    product.flavors && product.flavors.length > 0 ? product.flavors[0] : ''
  );
  const [selectedSizeObj, setSelectedSizeObj] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : null
  );

  const currentPrice = selectedSizeObj ? selectedSizeObj.price : product.priceNumeric;
  const totalPrice = currentPrice * quantity;

  const handleWhatsAppOrder = () => {
    let msg = `Olá Doce Desejo! Gostaria de fazer o pedido do item:\n\n🍰 *${product.name}*\n`;
    if (selectedSizeObj) {
      msg += `📏 *Tamanho:* ${selectedSizeObj.name} (${selectedSizeObj.serves})\n`;
    }
    if (selectedFlavor) {
      msg += `🍓 *Sabor/Recheio:* ${selectedFlavor}\n`;
    }
    msg += `🔢 *Quantidade:* ${quantity}\n`;
    msg += `💰 *Valor Estimado:* R$ ${totalPrice.toFixed(2).replace('.', ',')}\n\n`;
    msg += `Poderia me confirmar a disponibilidade e prazo de entrega/retirada?`;

    window.open(buildWhatsAppLink(msg), '_blank');
  };

  const handleAddAndClose = () => {
    onAddToCart(
      product,
      quantity,
      selectedFlavor || undefined,
      selectedSizeObj ? `${selectedSizeObj.name} (${selectedSizeObj.serves})` : undefined,
      currentPrice
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white text-neutral-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-pink-100 flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-neutral-600 hover:text-neutral-900 flex items-center justify-center shadow-md backdrop-blur-sm transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#d81b60] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{product.categoryLabel}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 flex-grow">
          <div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900">
                {product.name}
              </h3>
              <div className="text-right shrink-0">
                <span className="font-heading text-2xl font-extrabold text-[#d81b60]">
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
                {product.unit && (
                  <span className="block text-xs text-neutral-400">/{product.unit}</span>
                )}
              </div>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base mt-2 leading-relaxed">
              {product.fullDescription || product.description}
            </p>
          </div>

          {/* Size Selector if available */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2.5">
                Escolha o Tamanho:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.sizes.map((s) => {
                  const isSelected = selectedSizeObj?.name === s.name;
                  return (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => setSelectedSizeObj(s)}
                      className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-[#d81b60] bg-pink-50/70 text-[#d81b60] ring-2 ring-[#d81b60]/20'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm">{s.name}</div>
                        <div className="text-xs text-neutral-500">{s.serves}</div>
                      </div>
                      <div className="font-bold text-sm text-[#d81b60]">
                        R$ {s.price}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Flavors Selector if available */}
          {product.flavors && product.flavors.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2.5">
                Opção de Sabor / Recheio:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.flavors.map((flavor) => {
                  const isSelected = selectedFlavor === flavor;
                  return (
                    <button
                      key={flavor}
                      type="button"
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`p-2.5 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-[#d81b60] bg-pink-50 text-[#d81b60] font-semibold'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                      }`}
                    >
                      <span>{flavor}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#d81b60]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity selector */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
            <span className="text-sm font-semibold text-neutral-700">Quantidade:</span>
            <div className="flex items-center gap-3 bg-neutral-100 p-1 rounded-full border border-neutral-200">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-white text-neutral-700 hover:bg-neutral-200 font-bold flex items-center justify-center transition-colors shadow-xs"
              >
                -
              </button>
              <span className="w-6 text-center font-bold text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-white text-neutral-700 hover:bg-neutral-200 font-bold flex items-center justify-center transition-colors shadow-xs"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-3.5 px-4 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-full flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Pedir no WhatsApp Agora</span>
            </button>

            <button
              onClick={handleAddAndClose}
              className="w-full py-3.5 px-4 bg-[#d81b60] hover:bg-[#c2185b] text-white font-bold text-sm rounded-full flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Adicionar à Sacola</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
