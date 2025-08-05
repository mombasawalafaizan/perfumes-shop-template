import { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { ProductCard } from '@/components/ui/product-card';
import { Footer } from '@/components/ui/footer';
import { getProductsByCategory } from '@/data/products';
import { Button } from '@/components/ui/button';
import { SortAsc } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const PerfumesPage = () => {
  const [sortBy, setSortBy] = useState('name');
  const perfumes = getProductsByCategory('perfume');
  const navigate = useNavigate();

  const sortedPerfumes = [...perfumes].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.priceActual - b.priceActual;
      case 'price-high':
        return b.priceActual - a.priceActual;
      case 'discount':
        const discountA = ((a.priceMRP - a.priceActual) / a.priceMRP) * 100;
        const discountB = ((b.priceMRP - b.priceActual) / b.priceMRP) * 100;
        return discountB - discountA;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Perfumes
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover our exquisite collection of luxury perfumes, each crafted with the finest ingredients 
            to create unforgettable olfactory experiences
          </p>
        </div>
      </section>

      {/* Filters & Sorting */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-foreground">
              {perfumes.length} Products
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SortAsc className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="discount">Best Discount</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedPerfumes.map((product) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
            >
              <ProductCard 
                product={product} 
                onProductClick={() => navigate(`/products/${product.id}`)}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-4">
          <h3 className="text-2xl font-semibold text-foreground">
            Can't find what you're looking for?
          </h3>
          <p className="text-muted-foreground mb-6">
            Explore our complete fragrance collection or contact us for personalized recommendations
          </p>
          <div className="space-x-4">
            <Button asChild>
              <a href="/collections/attars">Browse Attars</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerfumesPage;