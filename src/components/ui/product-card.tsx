import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
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

interface ProductCardProps {
  product: Product;
  onProductClick?: () => void;
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  const discountPercentage = Math.round(((product.priceMRP - product.priceActual) / product.priceMRP) * 100);
  const imageUrl = imageMap[product.imageUrl as keyof typeof imageMap] || perfume1;
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart! 🛍️",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card cursor-pointer" onClick={onProductClick}>
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {discountPercentage > 0 && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            {discountPercentage}% OFF
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {product.sizeMl}ml
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">
                ₹{product.priceActual.toLocaleString()}
              </span>
              {product.priceMRP > product.priceActual && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.priceMRP.toLocaleString()}
                </span>
              )}
            </div>
            {discountPercentage > 0 && (
              <p className="text-sm text-primary font-medium">
                Save ₹{(product.priceMRP - product.priceActual).toLocaleString()}
              </p>
            )}
          </div>

          <Button 
            className="w-full bg-gradient-golden text-black font-semibold hover:opacity-90 shadow-card hover:shadow-elegant transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}