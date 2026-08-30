import React from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { buildWhatsAppLink } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let msg = `🛍️ *NOVO PEDIDO - DOCE DESEJO*\n`;
    msg += `------------------------------------\n`;
    items.forEach((item, idx) => {
      msg += `*${idx + 1}. ${item.product.name}*\n`;
      if (item.selectedSize) msg += `   📏 Tamanho: ${item.selectedSize}\n`;
      if (item.selectedFlavor) msg += `   🍓 Sabor: ${item.selectedFlavor}\n`;
      msg += `   🔢 Qtd: ${item.quantity}x (R$ ${item.unitPrice.toFixed(2).replace('.', ',')})\n`;
      msg += `   💵 Subtotal: R$ ${(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
    });
    msg += `------------------------------------\n`;
    msg += `💰 *VALOR TOTAL: R$ ${totalAmount.toFixed(2).replace('.', ',')}*\n\n`;
    msg += `Gostaria de combinar a entrega / retirada e a forma de pagamento!`;

    window.open(buildWhatsAppLink(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white text-neutral-900 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 bg-pink-50/70 border-b border-pink-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#d81b60] text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-neutral-900">
                Sua Sacola de Doces
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-200 text-neutral-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-pink-100 text-[#d81b60] mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-bold text-neutral-800">Sua sacola está vazia</h4>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                  Adicione nossos deliciosos bolos, cupcakes e biscoitos ao cardápio para pedir tudo junto.
                </p>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${idx}`}
                  className="p-3.5 rounded-2xl border border-neutral-200 bg-neutral-50/50 flex gap-3 relative group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-sm text-neutral-900 truncate">
                      {item.product.name}
                    </h5>
                    {item.selectedFlavor && (
                      <p className="text-xs text-[#d81b60] font-medium truncate">
                        {item.selectedFlavor}
                      </p>
                    )}
                    {item.selectedSize && (
                      <p className="text-[11px] text-neutral-500 truncate">
                        {item.selectedSize}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-xs text-neutral-800">
                        R$ {(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}
                      </span>

                      {/* Quantity buttons */}
                      <div className="flex items-center gap-1.5 bg-white border border-neutral-200 rounded-full px-1.5 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          className="w-5 h-5 rounded-full hover:bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-600"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="w-5 h-5 rounded-full hover:bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(idx)}
                    className="text-neutral-400 hover:text-red-500 p-1 transition-colors self-start"
                    title="Remover"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-neutral-200 bg-white space-y-4">
              <div className="flex items-center justify-between text-neutral-800">
                <span className="text-sm font-semibold">Total do Pedido:</span>
                <span className="font-heading text-2xl font-extrabold text-[#d81b60]">
                  R$ {totalAmount.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-4 px-4 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-full flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Finalizar Pedido pelo WhatsApp</span>
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-center text-xs text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                Limpar sacola
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
