import { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { HeroCarousel } from '@/components/ui/hero-carousel';
import { ProductCard } from '@/components/ui/product-card';
import { ComboCard } from '@/components/ui/combo-card';
import { Footer } from '@/components/ui/footer';
import { getFeaturedProducts, comboOffers, Product } from '@/data/products';

const Index = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const featuredProducts = getFeaturedProducts();

  const handleAddToCart = (product: Product | any) => {
    setCartItemCount(prev => prev + 1);
    // TODO: Add actual cart logic
    console.log('Added to cart:', product);
  };

  const handleCartClick = () => {
    // TODO: Open cart sidebar
    console.log('Cart clicked');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemCount={cartItemCount} onCartClick={handleCartClick} />
      
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Best Sellers Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Best Sellers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved fragrances, crafted with premium ingredients and cherished by fragrance enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/collections" 
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-elegant font-medium"
          >
            View All Collections
          </a>
        </div>
      </section>

      {/* Combo Offers Section */}
      <section className="bg-gradient-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Exclusive Combo Offers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Curated fragrance sets at incredible prices. Perfect for gifting or building your collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comboOffers.map((offer) => (
              <div key={offer.id} className="animate-fade-in">
                <ComboCard offer={offer} onAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Premium Quality</h3>
            <p className="text-muted-foreground">
              Finest ingredients sourced globally for exceptional fragrance experiences
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Free Shipping</h3>
            <p className="text-muted-foreground">
              Complimentary shipping on all orders above ₹1,999 across India
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Easy Returns</h3>
            <p className="text-muted-foreground">
              30-day hassle-free returns if you're not completely satisfied
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
