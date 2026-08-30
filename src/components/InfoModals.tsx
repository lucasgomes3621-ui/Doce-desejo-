import React from 'react';
import { X, Truck, Clock, MapPin, AlertCircle, Briefcase, Send, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_DISPLAY, buildWhatsAppLink } from '../data/products';

interface InfoModalProps {
  type: 'delivery' | 'jobs' | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white text-neutral-900 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-pink-100 p-6 sm:p-8">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'delivery' && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 text-[#d81b60] flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-neutral-900">
                  Políticas de Entrega & Retirada
                </h3>
                <p className="text-xs text-neutral-500">Como funciona o recebimento das suas delícias</p>
              </div>
            </div>

            <div className="space-y-3.5 text-sm text-neutral-600">
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 flex gap-3">
                <Clock className="w-5 h-5 text-[#d81b60] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-800 text-sm">Prazos de Encomenda</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Bolos confeitados e personalizações requerem no mínimo <strong>24h a 48h de antecedência</strong>.
                    Bolos caseiros, potes e cupcakes temos opções para pronta-entrega (consulte o dia no WhatsApp).
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 flex gap-3">
                <MapPin className="w-5 h-5 text-[#d81b60] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-800 text-sm">Região de Atendimento</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Entregamos em toda a cidade via motoboy ou carro refrigerado especial para bolos de festa. A taxa de entrega é calculada pelo seu endereço.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 flex gap-3">
                <AlertCircle className="w-5 h-5 text-[#d81b60] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-800 text-sm">Retirada no Ateliê</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Você também pode retirar seu pedido diretamente em nosso ateliê com horário marcado e sem taxa de frete.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={buildWhatsAppLink('Olá! Gostaria de consultar a taxa de entrega para o meu endereço.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#d81b60] hover:bg-[#c2185b] text-white font-bold text-sm rounded-full flex items-center justify-center gap-2 shadow-md transition-all mt-4"
            >
              <span>Consultar Taxa no WhatsApp</span>
            </a>
          </div>
        )}

        {type === 'jobs' && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 text-[#d81b60] flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-neutral-900">
                  Trabalhe Conosco
                </h3>
                <p className="text-xs text-neutral-500">Faça parte da equipe Doce Desejo</p>
              </div>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Estamos sempre em busca de confeiteiros(as), ajudantes de cozinha, atendentes e entregadores apaixonados por gastronomia doce e atendimento de excelência!
            </p>

            <div className="p-4 rounded-2xl bg-pink-50/70 border border-pink-100 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#d81b60]">
                Como se candidatar:
              </h4>
              <p className="text-xs text-neutral-700">
                Envie seu currículo ou portfólio de trabalhos em confeitaria para nosso WhatsApp oficial com o assunto <strong>"Vaga Doce Desejo"</strong>.
              </p>
            </div>

            <a
              href={buildWhatsAppLink('Olá! Gostaria de enviar meu currículo e me candidatar para a equipe Doce Desejo.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-full flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Currículo pelo WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
