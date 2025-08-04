export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  priceMRP: number;
  priceActual: number;
  sizeMl: number;
  notes: string[];
  description: string;
  category: 'perfume' | 'attar';
  featured?: boolean;
}

export const products: Product[] = [
  // Perfumes
  {
    id: 'perfume-1',
    name: 'Royal Saffron Mist',
    imageUrl: '/src/assets/perfume-1.jpg',
    priceMRP: 2999,
    priceActual: 2249,
    sizeMl: 50,
    notes: ['Saffron', 'Rose', 'Sandalwood', 'Vanilla'],
    description: 'A luxurious blend of pure saffron and Bulgarian rose, finished with warm sandalwood.',
    category: 'perfume',
    featured: true
  },
  {
    id: 'perfume-2',
    name: 'Golden Oud Elegance',
    imageUrl: '/src/assets/perfume-2.jpg',
    priceMRP: 3499,
    priceActual: 2624,
    sizeMl: 50,
    notes: ['Oud', 'Amber', 'Musk', 'Cedarwood'],
    description: 'Rich oud oil meets precious amber in this sophisticated evening fragrance.',
    category: 'perfume',
    featured: true
  },
  {
    id: 'perfume-3',
    name: 'Mystic Garden',
    imageUrl: '/src/assets/perfume-1.jpg',
    priceMRP: 2799,
    priceActual: 2099,
    sizeMl: 50,
    notes: ['Jasmine', 'Bergamot', 'White Tea', 'Cedar'],
    description: 'Fresh and floral with a mysterious undertone of white tea and cedar.',
    category: 'perfume',
    featured: true
  },
  {
    id: 'perfume-4',
    name: 'Imperial Spice',
    imageUrl: '/src/assets/perfume-2.jpg',
    priceMRP: 3199,
    priceActual: 2399,
    sizeMl: 50,
    notes: ['Cardamom', 'Black Pepper', 'Leather', 'Patchouli'],
    description: 'Bold and masculine with exotic spices and rich leather notes.',
    category: 'perfume'
  },
  {
    id: 'perfume-5',
    name: 'Velvet Rose Noir',
    imageUrl: '/src/assets/perfume-1.jpg',
    priceMRP: 2899,
    priceActual: 2174,
    sizeMl: 50,
    notes: ['Dark Rose', 'Blackcurrant', 'Vanilla', 'Tobacco'],
    description: 'Dark and seductive rose with smoky tobacco and sweet vanilla.',
    category: 'perfume'
  },
  {
    id: 'perfume-6',
    name: 'Azure Dreams',
    imageUrl: '/src/assets/perfume-2.jpg',
    priceMRP: 2699,
    priceActual: 2024,
    sizeMl: 50,
    notes: ['Sea Breeze', 'Lime', 'Driftwood', 'Ambergris'],
    description: 'Fresh oceanic scent with citrusy lime and mysterious driftwood.',
    category: 'perfume'
  },
  {
    id: 'perfume-7',
    name: 'Midnight Amber',
    imageUrl: '/src/assets/perfume-1.jpg',
    priceMRP: 3399,
    priceActual: 2549,
    sizeMl: 50,
    notes: ['Amber', 'Frankincense', 'Myrrh', 'Benzoin'],
    description: 'Deep and resinous with ancient frankincense and warm amber.',
    category: 'perfume'
  },
  {
    id: 'perfume-8',
    name: 'Citrus Royale',
    imageUrl: '/src/assets/perfume-2.jpg',
    priceMRP: 2499,
    priceActual: 1874,
    sizeMl: 50,
    notes: ['Bergamot', 'Orange Blossom', 'Neroli', 'White Musk'],
    description: 'Bright and uplifting citrus bouquet with delicate white musk.',
    category: 'perfume'
  },

  // Attars
  {
    id: 'attar-1',
    name: 'Pure Kashmiri Saffron',
    imageUrl: '/src/assets/attar-1.jpg',
    priceMRP: 4999,
    priceActual: 3749,
    sizeMl: 12,
    notes: ['Pure Saffron', 'Sandalwood Oil'],
    description: 'Authentic Kashmiri saffron in pure sandalwood oil base. Limited edition.',
    category: 'attar',
    featured: true
  },
  {
    id: 'attar-2',
    name: 'Royal Oud Maliki',
    imageUrl: '/src/assets/attar-1.jpg',
    priceMRP: 5999,
    priceActual: 4499,
    sizeMl: 12,
    notes: ['Aged Oud', 'Rose', 'Musk'],
    description: 'Premium aged oud from Assam with Damask rose and white musk.',
    category: 'attar',
    featured: true
  },
  {
    id: 'attar-3',
    name: 'Mogra Essence',
    imageUrl: '/src/assets/attar-1.jpg',
    priceMRP: 3999,
    priceActual: 2999,
    sizeMl: 12,
    notes: ['Jasmine Sambac', 'Sandalwood'],
    description: 'Pure mogra (jasmine sambac) distilled in sandalwood oil.',
    category: 'attar'
  },
  {
    id: 'attar-4',
    name: 'Amber Royale',
    imageUrl: '/src/assets/attar-1.jpg',
    priceMRP: 4499,
    priceActual: 3374,
    sizeMl: 12,
    notes: ['Amber Resin', 'Frankincense', 'Myrrh'],
    description: 'Rich amber resin with precious frankincense and myrrh.',
    category: 'attar'
  },
  {
    id: 'attar-5',
    name: 'White Oudh Supreme',
    imageUrl: '/src/assets/attar-1.jpg',
    priceMRP: 6999,
    priceActual: 5249,
    sizeMl: 12,
    notes: ['White Oud', 'Rose Otto', 'Ambergris'],
    description: 'Rare white oud with Bulgarian rose otto and natural ambergris.',
    category: 'attar'
  },
  {
    id: 'attar-6',
    name: 'Kesar Kasturi',
    imageUrl: '/src/assets/attar-1.jpg',
    priceMRP: 3799,
    priceActual: 2849,
    sizeMl: 12,
    notes: ['Saffron', 'Musk', 'Sandalwood'],
    description: 'Traditional blend of saffron and musk in sandalwood base.',
    category: 'attar'
  }
];

export const comboOffers = [
  {
    id: 'combo-1',
    title: 'Perfume Trio',
    description: 'Choose any 3 × 30ml perfumes',
    originalPrice: 4497,
    offerPrice: 2999,
    image: '/src/assets/hero-combos.jpg'
  },
  {
    id: 'combo-2',
    title: 'Attar Collection',
    description: '4 × 6ml premium attars',
    originalPrice: 7996,
    offerPrice: 4999,
    image: '/src/assets/hero-attars.jpg'
  },
  {
    id: 'combo-3',
    title: 'Royal Experience',
    description: '1 × 50ml perfume + 2 × 12ml attars',
    originalPrice: 8497,
    offerPrice: 5999,
    image: '/src/assets/hero-perfumes.jpg'
  }
];

export const heroSlides = [
  {
    id: 1,
    image: '/src/assets/hero-perfumes.jpg',
    title: 'Premium Perfumes',
    subtitle: 'Luxury fragrances for every occasion',
    cta: 'Shop Perfumes',
    link: '/collections/perfumes'
  },
  {
    id: 2,
    image: '/src/assets/hero-attars.jpg',
    title: 'Authentic Attars',
    subtitle: 'Traditional oil-based fragrances',
    cta: 'Explore Attars',
    link: '/collections/attars'
  },
  {
    id: 3,
    image: '/src/assets/hero-combos.jpg',
    title: 'Exclusive Combos',
    subtitle: 'Curated fragrance sets at special prices',
    cta: 'View Offers',
    link: '/collections/combos'
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category: 'perfume' | 'attar') => 
  products.filter(p => p.category === category);
export const getProductById = (id: string) => products.find(p => p.id === id);