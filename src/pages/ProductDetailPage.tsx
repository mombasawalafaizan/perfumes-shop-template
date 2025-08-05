import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getProductById, Product } from '@/data/products';
import { ShoppingCart, Heart, Share2, Minus, Plus, ArrowLeft } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

// Import the actual images
import perfume1 from '@/assets/perfume-1.jpg';
import perfume2 from '@/assets/perfume-2.jpg';
import attar1 from '@/assets/attar-1.jpg';

const imageMap = {
  '/src/assets/perfume-1.jpg': perfume1,
  '/src/assets/perfume-2.jpg': perfume2,
  '/src/assets/attar-1.jpg': attar1,
};

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct || null);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
      toast({
        title: "Added to cart! 🛍️",
        description: `${quantity} × ${product.name} added to your cart.`,
      });
    }
  };

  const goBack = () => {
    window.history.back();
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <a href="/collections">Browse Collections</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const discountPercentage = Math.round(((product.priceMRP - product.priceActual) / product.priceMRP) * 100);
  const imageUrl = imageMap[product.imageUrl as keyof typeof imageMap] || perfume1;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Button variant="ghost" onClick={goBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Product Detail */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div 
              className="relative aspect-square overflow-hidden rounded-lg border border-border cursor-zoom-in group"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={imageUrl}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  isZoomed ? 'scale-150' : 'group-hover:scale-110'
                }`}
              />
              {discountPercentage > 0 && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {discountPercentage}% OFF
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Click image to zoom
            </p>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {product.sizeMl}ml • {product.category === 'attar' ? 'Alcohol-free Attar' : 'Premium Perfume'}
              </p>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-primary">
                  ₹{product.priceActual.toLocaleString()}
                </span>
                {product.priceMRP > product.priceActual && (
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.priceMRP.toLocaleString()}
                  </span>
                )}
              </div>
              {discountPercentage > 0 && (
                <p className="text-lg text-primary font-medium">
                  You save ₹{(product.priceMRP - product.priceActual).toLocaleString()} ({discountPercentage}% off)
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Notes */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Fragrance Notes</h3>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((note, index) => (
                  <Badge key={index} variant="secondary">
                    {note}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <span className="text-muted-foreground">
                  Total: ₹{(product.priceActual * quantity).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
            <Button 
              size="lg" 
              className="w-full bg-gradient-golden text-black font-semibold hover:opacity-90 shadow-elegant hover:shadow-premium transition-all duration-300"
              onClick={handleAddToCart}
            >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              
              <div className="flex space-x-4">
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <Card className="bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Product Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">
                      {product.category === 'attar' ? 'Alcohol-free oil-based formula' : 'Long-lasting Eau de Parfum'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Premium quality ingredients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Elegant glass bottle packaging</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">30-day return guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;