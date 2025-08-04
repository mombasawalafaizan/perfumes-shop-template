import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

// Import the actual images
import heroPerfumes from '@/assets/hero-perfumes.jpg';
import heroAttars from '@/assets/hero-attars.jpg';
import heroCombos from '@/assets/hero-combos.jpg';

const CollectionsPage = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleCartClick = () => {
    console.log('Cart clicked');
  };

  const collections = [
    {
      id: 'perfumes',
      title: 'Premium Perfumes',
      description: 'Luxury fragrances for every occasion',
      image: heroPerfumes,
      link: '/collections/perfumes'
    },
    {
      id: 'attars',
      title: 'Authentic Attars',
      description: 'Traditional oil-based fragrances',
      image: heroAttars,
      link: '/collections/attars'
    },
    {
      id: 'combos',
      title: 'Combo Offers',
      description: 'Curated sets at special prices',
      image: heroCombos,
      link: '/collections/combos'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemCount={cartItemCount} onCartClick={handleCartClick} />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Collections
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our curated selection of premium fragrances, from modern perfumes to traditional attars
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card 
              key={collection.id} 
              className="group overflow-hidden border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-card"
            >
              <a href={collection.link} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">{collection.title}</h2>
                    <p className="text-white/90">{collection.description}</p>
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollectionsPage;