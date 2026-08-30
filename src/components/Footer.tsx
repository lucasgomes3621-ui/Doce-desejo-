import React, { useState } from 'react';
import { Phone, Instagram, Share2, Heart, Check, Cake, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, buildWhatsAppLink } from '../data/products';

interface FooterProps {
  onOpenDeliveryPolicy: () => void;
  onOpenCustomOrder: () => void;
  onOpenWorkWithUs: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDeliveryPolicy,
  onOpenCustomOrder,
  onOpenWorkWithUs,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Doce Desejo - Confeitaria Artesanal',
          text: 'Conheça os bolos confeitados, bolos caseiros, cupcakes e delícias artesanais da Doce Desejo!',
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#9c003e] border-t border-white/20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <Cake className="w-6 h-6 text-pink-200" />
            <span className="font-heading text-2xl font-extrabold text-white">
              Doce Desejo
            </span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed max-w-sm">
            © {new Date().getFullYear()} Doce Desejo - Confeitaria Artesanal. Sabor que inspira desejos.
          </p>
        </div>

        {/* Links Úteis */}
        <div className="flex flex-col gap-2.5 items-center md:items-start">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-200 mb-1">
            Links Úteis
          </span>
          <button
            onClick={onOpenDeliveryPolicy}
            className="text-sm text-white/90 hover:text-white hover:underline decoration-white transition-colors"
          >
            Políticas de Entrega
          </button>
          <button
            onClick={onOpenCustomOrder}
            className="text-sm text-white/90 hover:text-white hover:underline decoration-white transition-colors"
          >
            Encomendas Personalizadas
          </button>
          <button
            onClick={onOpenWorkWithUs}
            className="text-sm text-white/90 hover:text-white hover:underline decoration-white transition-colors"
          >
            Trabalhe Conosco
          </button>
        </div>

        {/* Contato & Social */}
        <div className="flex flex-col gap-3 items-center md:items-end">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-200 mb-1">
            Contato
          </span>

          <a
            href={buildWhatsAppLink('Olá Doce Desejo! Gostaria de fazer um pedido.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/90 hover:text-white flex items-center gap-2 font-medium transition-colors group"
          >
            <Phone className="w-4 h-4 text-pink-300 group-hover:scale-110 transition-transform" />
            <span>{WHATSAPP_DISPLAY}</span>
          </a>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Siga no Instagram"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <button
              onClick={handleShare}
              title="Compartilhar Cardápio"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all hover:scale-110 relative"
            >
              {copied ? <Check className="w-5 h-5 text-green-300" /> : <Share2 className="w-5 h-5" />}
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] py-1 px-2 rounded-md whitespace-nowrap">
                  Link copiado!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
