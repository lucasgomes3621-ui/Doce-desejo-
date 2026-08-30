import { Product } from '../types';

export const WHATSAPP_NUMBER = '5533984624333';
export const WHATSAPP_DISPLAY = '(33) 98462-4333';

export const LOGO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQSgiUbr9optwMPJnPIaqdMFexYqi7SF-Cvw2MuEO61G-HNVl_-AtezymfstRyvaThDTeMNXinoKWUJBXWdEdd3JcMv0megWO1Y_peSyaZp1nmBeAUO2uCFZjXEouD3GZlm8MwjtKL-JKeSa7O1Q6a988gLZX97-En53aTCEIw24dHUhIfFSCTgNqwajmUUNSrET_c1YzJfpSv0vtdW8ZR65xidrAOZcTJ-6w0YIbxIuvI0ffpgI5MLa16DQE8T4WBpQ';

export const ABOUT_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuByo-NIU3RTPxxD_a3SvugqzyAJqSZIqd5fy41rKEt9bT9LCAMnhWWB3E2f9qN7be_fa0q8ouzX3QNVJ9rwyx4GL04nimCWVnMdCljptLBOSpOy_DgwW07PUEHwMf35QI-hqzUKlkd9V5RAt0EoZ2c0QLpMivBPLok9v3JVP4oU0ah6Cmhq-7QAEdiqEDoW7G7B82mUUiuk9Ac_x2AoNE_ZBm8TpxAcQTK_sbpyXqdNvacQsforRk1kOYaGBMGt2D4BuQ';

export const PRODUCTS: Product[] = [
  {
    id: 'bolo-confeitado-principal',
    name: 'Bolos Confeitados',
    category: 'bolos-confeitados',
    categoryLabel: 'Bolos Confeitados',
    description: 'Obras de arte comestíveis para celebrar seus melhores momentos. Massas fofinhas e recheios generosos.',
    fullDescription: 'Nossos bolos confeitados são preparados com ingredientes nobres, massa leve e umedecida na medida certa, com até 3 camadas de recheios artesanais cremosos. Decorados com ganache, raspas de chocolate nobre, granulados belgas ou chantininho.',
    priceDisplay: 'A partir de R$ 80',
    priceNumeric: 80,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCytvo79DxHw2L7JWTHTYWsG24c1ElfWJRT2kxYYCmnHP-dW2wcz_FaEvTl32B9rOe96zpyBfgwg1cz79GG8OAXxOwN51zMaOh6QMtTOZY1z2PAb3I0tkTVYl7Zwb4oEDfbZ2nNFvWwTshAnCshd3jMhz_vk2kDexlYGI8mZNWmnIMeoJf1wM7oG5Fck4K2I-PUBaAzT8FlvI9vxZUeZNu29xcWTuDvZAaL4cVf_zeadGz-yo-b3W5E9QVqoVxnX9c1Ng',
    badge: 'Destaque',
    isFeatured: true,
    highlightCardSize: 'large',
    flavors: [
      'Brigadeiro Belga Intenso',
      'Leite Ninho com Morangos Frescos',
      'Dois Amores Trufado',
      'Doce de Leite com Nozes',
      'Red Velvet com Cream Cheese',
      'Prestígio Gourmet'
    ],
    sizes: [
      { name: 'P (1.5 kg)', serves: '10 a 15 fatias', price: 80 },
      { name: 'M (2.5 kg)', serves: '20 a 25 fatias', price: 130 },
      { name: 'G (3.5 kg)', serves: '30 a 35 fatias', price: 185 },
      { name: 'Festa (5 kg)', serves: '45 a 50 fatias', price: 260 }
    ]
  },
  {
    id: 'bolos-caseiros',
    name: 'Bolos Caseiros',
    category: 'bolos-caseiros',
    categoryLabel: 'Bolos Caseiros',
    description: 'Aquele gostinho de casa de vó para o seu café da tarde.',
    fullDescription: 'Receitas tradicionais feitas com amor e memória afetiva. Perfeitos para acompanhar aquele cafezinho passado na hora.',
    priceDisplay: 'A partir de R$ 35',
    priceNumeric: 35,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIVw2uxVjy_mOGgSOpSBpsWIFCnJ5zuft1W_Yny20ueq32YxrXM0M8Ift2Nox26HKdE8kotu-i3a5xpLWJ-tSiTPambQ98iqdeU9PZserTw-7fm_FScLZrp-YSTZXtFfh8E1CqKDpWa2KXYjZMMk1qJUmRayid5NS_X08aEkZGJsM98b51EgywZmZ0W5xxnP55JZWBFG5QCVgumd_kLZRPXVGdLJaGJKlb4YGW5Q6WYGjNQlefNHQVTBkQUIeeH-PTeQ',
    highlightCardSize: 'medium',
    flavors: [
      'Cenoura com Vulcão de Chocolate',
      'Milho Cremoso com Queijo',
      'Laranja com Calda Cítrica',
      'Fubá com Goiabada Cascão',
      'Chocolate Vulcão Cremoso'
    ],
    sizes: [
      { name: 'Tamanho Tradicional (Forma 20cm)', serves: '8 a 10 fatias', price: 35 },
      { name: 'Tamanho Vulcão Grande (Forma 24cm)', serves: '12 a 15 fatias', price: 48 }
    ]
  },
  {
    id: 'cupcakes-coloridos',
    name: 'Cupcakes Coloridos',
    category: 'cupcakes',
    categoryLabel: 'Cupcakes',
    description: 'Massa fofinha de baunilha com cobertura aveludada e confeitos coloridos.',
    fullDescription: 'Cupcakes alegres e deliciosos, ideais para festas infantis, lembrancinhas ou aquele mimo especial.',
    priceDisplay: 'R$ 12 / un',
    priceNumeric: 12,
    unit: 'un',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4QfAfRfKT9eXX-HAcVfWX532ddca6oBb8SWuNGKf6SnlXmYovgUYMcs-s2yUjWQQ2MqmsvCw_H0KGtVK4bqmhf74waCTUb3IvT6LYdGHECoea0m4zL7l4gN0BF68QNKyRScQeMHMbnQA0Sf0d5l68tC5Sk6nnke6_5GEGgZHS8PHBtyC4oT5npUFdd0xvDi13N7hjMsI878AjYttLwkW60mBBEZlmS5uS7dDBvxrkrOvaR5JdS2q4XHRP38yOCB0CMQ',
    highlightCardSize: 'small',
    flavors: [
      'Baunilha com Chantininho Rosa',
      'Chocolate com Brigadeiro Rosa',
      'Massa Colorida com Marshmallow'
    ]
  },
  {
    id: 'cupcakes-premium',
    name: 'Cupcakes Premium',
    category: 'cupcakes',
    categoryLabel: 'Cupcakes',
    description: 'Chocolate nobre 50% cacau com cobertura de café gourmet e grãos selecionados.',
    fullDescription: 'Para paladares exigentes que amam a combinação harmônica de café torrado e chocolate meio amargo.',
    priceDisplay: 'R$ 15 / un',
    priceNumeric: 15,
    unit: 'un',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZNnKJG7VP8KPJUoLsiIm-RpfmmdBmKWh9l_Jw8SDThW0IBZrf_ZF6xnip4d1rPsdn5a0fu84opHVZGnR4T4fcnIcXvrDxhL4YJCjZBoDUz_2CIJRBzHGmhvUs0xMdUmFqf5QgS9VVraGVksB_rhO_e0AWJ1DRl286kNG2lD6yKMKfNMlJs5vNiXD0Xd8xj18PhWW2yltme83S6-VrWqCPFegkfvFhfOCAAEPSxrq8I644nhRpl2o4fMWQO07UnwzD9w',
    highlightCardSize: 'small',
    flavors: [
      'Chocolate & Creme de Café',
      'Red Velvet com Cream Cheese & Pistache',
      'Ferrero Rocher com Avelã'
    ]
  },
  {
    id: 'biscoito-chimango',
    name: 'Biscoito Chimango',
    category: 'biscoitos',
    categoryLabel: 'Biscoitos',
    description: 'Tradicional receita mineira: douradinhos por fora, macios e aerados por dentro.',
    fullDescription: 'Assados na hora com polvilho selecionado, queijo curado e segredo de família. Uma tentação irresistível!',
    priceDisplay: 'R$ 20 / porção',
    priceNumeric: 20,
    unit: 'porção (300g)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABGfV1W4spXrtR9FGp6xI4toOlub80wiOe_GgJgXfdeyXpqCnCLnTJwiiD7eKMyC_udpafsaQKS6GCp11jsxJ9np8RzvFRltptaRu-LDBb9uptnLrczH18KYk2njScaZNO2d6LGa7Pb6cfKtyilUm5g4cd-7koZeAQ3zYIxhE1jH7VBCbu_CGu6E-ek_v3NXVPeFMaRCbWqaP3920HgA4cY-oA-w4uSlRIGBZa_dXJw9DhpF_TNmqPKSXp-DM5WG0X5g',
    highlightCardSize: 'small',
    flavors: [
      'Tradicional de Queijo Canastra',
      'Com Toque de Alecrim e Parmesão'
    ]
  },
  {
    id: 'bolo-pote-ninho-nutella',
    name: 'Bolo no Pote Ninho & Nutella',
    category: 'bolos-no-pote',
    categoryLabel: 'Bolos no Pote',
    description: 'Camadas generosas de brigadeiro de Leite Ninho cremoso com Nutella pura.',
    fullDescription: 'O queridinho de todos! Pote de 250ml com massa fofinha e camadas fartas de brigadeiro de Ninho e Nutella original.',
    priceDisplay: 'R$ 14 / un',
    priceNumeric: 14,
    unit: 'pote 250ml',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    highlightCardSize: 'small',
    flavors: ['Ninho com Nutella', 'Morango com Ninho', 'Brigadeiro Belga c/ Cenoura']
  },
  {
    id: 'bolo-pote-brigadeiro',
    name: 'Bolo no Pote Brigadeiro Gourmet',
    category: 'bolos-no-pote',
    categoryLabel: 'Bolos no Pote',
    description: 'Bolo de chocolate molhadinho intercalado com brigadeiro artesanal em ponto de colher.',
    fullDescription: 'Perfeito para matar a vontade de um doce requintado a qualquer hora do dia.',
    priceDisplay: 'R$ 13 / un',
    priceNumeric: 13,
    unit: 'pote 250ml',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    highlightCardSize: 'small',
    flavors: ['Brigadeiro Tradicional', 'Dois Amores', 'Prestígio']
  }
];

export const CATEGORIES = [
  { id: 'todos', label: 'Todos os Produtos' },
  { id: 'bolos-confeitados', label: 'Bolos Confeitados' },
  { id: 'bolos-caseiros', label: 'Bolos Caseiros' },
  { id: 'bolos-no-pote', label: 'Bolos no Pote' },
  { id: 'cupcakes', label: 'Cupcakes' },
  { id: 'biscoitos', label: 'Biscoitos' },
];

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
