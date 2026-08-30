import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DeliciasMenu } from './components/DeliciasMenu';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CustomOrderModal } from './components/CustomOrderModal';
import { CartDrawer } from './components/CartDrawer';
import { InfoModal } from './components/InfoModals';
import { Footer } from './components/Footer';
import { PRODUCTS, buildWhatsAppLink } from './data/products';
import { Product, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCustomOrderOpen, setIsCustomOrderOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'delivery' | 'jobs' | null>(null);

  // Add to cart handler
  const handleAddToCart = (
    product: Product,
    quantity = 1,
    selectedFlavor?: string,
    selectedSize?: string,
    unitPrice?: number
  ) => {
    const price = unitPrice || product.priceNumeric;
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedFlavor === selectedFlavor &&
          item.selectedSize === selectedSize
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            quantity,
            selectedFlavor,
            selectedSize,
            unitPrice: price,
          },
        ];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('cardapio');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#d81b60] text-white flex flex-col selection:bg-white selection:text-[#d81b60]">
      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
        />

        {/* Decorative Scalloped Wave */}
        <div className="scalloped-divider w-full" />

        {/* Menu Section (Bento Grid & Filters) */}
        <DeliciasMenu
          products={PRODUCTS}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onAddToCart={(prod) => handleAddToCart(prod, 1)}
        />

        {/* Decorative Scalloped Top Wave */}
        <div className="scalloped-divider w-full" />

        {/* About Section ("Nossa História") */}
        <AboutSection />

        {/* Customer Reviews */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDeliveryPolicy={() => setInfoModalType('delivery')}
        onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
        onOpenWorkWithUs={() => setInfoModalType('jobs')}
      />

      {/* Floating WhatsApp Action Button (Mobile & Desktop quick access) */}
      <a
        href={buildWhatsAppLink('Olá Doce Desejo! Gostaria de fazer uma encomenda.')}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Pedir pelo WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-[#25d366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-1 pr-0 group-hover:pr-3">
          Pedir no WhatsApp
        </span>
      </a>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Custom Cake Order Builder Modal */}
      <CustomOrderModal
        isOpen={isCustomOrderOpen}
        onClose={() => setIsCustomOrderOpen(false)}
      />

      {/* Cart / Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Info Modals (Delivery & Jobs) */}
      <InfoModal
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
      />
    </div>
  );
}
