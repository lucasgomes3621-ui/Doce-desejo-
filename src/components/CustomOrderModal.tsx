import React, { useState } from 'react';
import { X, Cake, Sparkles, MessageCircle, Calendar, Users, Heart } from 'lucide-react';
import { buildWhatsAppLink } from '../data/products';

interface CustomOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomOrderModal: React.FC<CustomOrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('15 a 20 pessoas');
  const [dough, setDough] = useState('Baunilha Fofinha');
  const [filling1, setFilling1] = useState('Leite Ninho Trufado');
  const [filling2, setFilling2] = useState('Brigadeiro Belga');
  const [topping, setTopping] = useState('Chantininho com Decoração Floral');
  const [themeOrColors, setThemeOrColors] = useState('');
  const [notes, setNotes] = useState('');

  const doughOptions = [
    'Baunilha Fofinha Amanteigada',
    'Chocolate 50% Cacau Nobre',
    'Red Velvet Veludoso',
    'Cenoura Macia',
    'Nozes Artesanal'
  ];

  const fillingOptions = [
    'Leite Ninho Trufado',
    'Brigadeiro Belga ao Leite',
    'Doce de Leite com Nozes',
    'Geleia de Morangos Frescos',
    'Frutas Vermelhas Artesanal',
    'Maracujá Cremoso',
    'Quatro Leites',
    'Nutella Pura'
  ];

  const toppingOptions = [
    'Chantininho Tradicional Alisado',
    'Chantininho com Decoração Floral',
    'Ganache de Chocolate Nobre',
    'Naked Cake Rústico com Frutas',
    'Bolo com Topo Temático Personalizado'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let msg = `🎂 *SOLICITAÇÃO DE ENCOMENDA PERSONALIZADA*\n`;
    msg += `------------------------------------\n`;
    if (customerName) msg += `👤 *Nome:* ${customerName}\n`;
    if (eventDate) msg += `📅 *Data do Evento:* ${eventDate}\n`;
    msg += `👥 *Rendimento estimado:* ${guestCount}\n`;
    msg += `🌾 *Massa:* ${dough}\n`;
    msg += `🍫 *Recheio 1:* ${filling1}\n`;
    msg += `🍓 *Recheio 2:* ${filling2}\n`;
    msg += `✨ *Cobertura & Estilo:* ${topping}\n`;
    if (themeOrColors) msg += `🎨 *Tema/Cores:* ${themeOrColors}\n`;
    if (notes) msg += `📝 *Observações Especiais:* ${notes}\n`;
    msg += `------------------------------------\n`;
    msg += `Gostaria de saber o orçamento e disponibilidade para esta data.`;

    window.open(buildWhatsAppLink(msg), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white text-neutral-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-pink-100 p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-pink-100 text-[#d81b60] flex items-center justify-center">
            <Cake className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-extrabold text-neutral-900">
              Encomenda Personalizada
            </h3>
            <p className="text-xs text-neutral-500">Monte o bolo dos seus sonhos e envie direto para nossa confeiteira.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                Seu Nome:
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Maria Eduarda"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#d81b60]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                Data do Evento / Entrega:
              </label>
              <input
                type="date"
                required
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#d81b60]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
              Tamanho / Quantidade de Pessoas:
            </label>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#d81b60] bg-white"
            >
              <option value="10 a 15 fatias (P - ~1.5kg)">10 a 15 fatias (P - ~1.5kg)</option>
              <option value="20 a 25 fatias (M - ~2.5kg)">20 a 25 fatias (M - ~2.5kg)</option>
              <option value="30 a 35 fatias (G - ~3.5kg)">30 a 35 fatias (G - ~3.5kg)</option>
              <option value="45 a 50 fatias (Festa - ~5kg)">45 a 50 fatias (Festa - ~5kg)</option>
              <option value="Bolo de 2 ou 3 andares (Grandes Comemorações)">Bolo de 2 ou 3 andares (Grandes Comemorações)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                Tipo da Massa:
              </label>
              <select
                value={dough}
                onChange={(e) => setDough(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#d81b60] bg-white"
              >
                {doughOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                Cobertura & Estilo:
              </label>
              <select
                value={topping}
                onChange={(e) => setTopping(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#d81b60] bg-white"
              >
                {toppingOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                Primeiro Recheio:
              </label>
              <select
                value={filling1}
                onChange={(e) => setFilling1(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#d81b60] bg-white"
              >
                {fillingOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                Segundo Recheio:
              </label>
              <select
                value={filling2}
                onChange={(e) => setFilling2(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#d81b60] bg-white"
              >
                {fillingOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
              Tema, Paleta de Cores ou Referências:
            </label>
            <input
              type="text"
              placeholder="Ex: Tons de rosa e dourado com flores secas, ou Tema Safari"
              value={themeOrColors}
              onChange={(e) => setThemeOrColors(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#d81b60]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
              Observações adicionais:
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Sem nozes por alergia, adicionar topo com nome 'Sofia 15 Anos', etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#d81b60]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-base rounded-full flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Enviar Pedido Personalizado no WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-neutral-400 mt-2">
              Você será direcionado(a) com a mensagem pronta no WhatsApp da Doce Desejo.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
