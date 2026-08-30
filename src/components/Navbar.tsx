import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone, Cake, MessageCircle } from 'lucide-react';
import { WHATSAPP_DISPLAY, buildWhatsAppLink } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCustomOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenCustomOrder,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Bolos Confeitados', href: '#bolos-confeitados' },
    { label: 'Bolos Caseiros', href: '#bolos-caseiros' },
    { label: 'Bolos no Pote', href: '#bolos-no-pote' },
    { label: 'Cupcakes', href: '#cupcakes' },
    { label: 'Biscoitos', href: '#biscoitos' },
    { label: 'Nossa História', href: '#historia' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const defaultWhatsappMessage = 'Olá Doce Desejo! Gostaria de tirar uma dúvida e fazer um pedido.';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#c2185b]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-[#d81b60]/95 backdrop-blur-sm py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          id="brand-logo"
        >
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#d81b60] shadow-sm transition-transform group-hover:scale-105">
            <Cake className="w-5 h-5 text-[#d81b60]" />
          </div>
          <span className="font-heading font-extrabold text-2xl tracking-tight text-white group-hover:text-pink-100 transition-colors">
            Doce Desejo
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-white/90 hover:text-white hover:scale-105 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Custom Cake Order CTA (Desktop) */}
          <button
            onClick={onOpenCustomOrder}
            id="custom-order-btn-nav"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full bg-white/15 text-white hover:bg-white/25 border border-white/20 transition-all"
          >
            <span>Encomendas Especiais</span>
          </button>

          {/* WhatsApp Direct Link */}
          <a
            href={buildWhatsAppLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-btn"
            className="hidden md:inline-flex items-center gap-2 bg-white text-[#d81b60] font-semibold text-xs px-4 py-2 rounded-full hover:bg-pink-50 hover:scale-105 transition-all duration-200 shadow-md active:translate-y-[1px]"
          >
            <MessageCircle className="w-4 h-4 fill-[#d81b60]" />
            <span>WhatsApp</span>
          </a>

          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            id="nav-cart-btn"
            aria-label="Ver sacola de pedidos"
            className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-neutral-900 font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Abrir menu"
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ad1457] border-t border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-white/90 bg-white/5 rounded-lg hover:bg-white/15 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomOrder();
              }}
              className="w-full py-2.5 px-4 bg-white/15 text-white font-medium text-sm rounded-full flex items-center justify-center gap-2 border border-white/20"
            >
              <Cake className="w-4 h-4" />
              <span>Simular Encomenda Personalizada</span>
            </button>

            <a
              href={buildWhatsAppLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-white text-[#d81b60] font-bold text-sm rounded-full flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-[#d81b60]" />
              <span>Falar no WhatsApp ({WHATSAPP_DISPLAY})</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
