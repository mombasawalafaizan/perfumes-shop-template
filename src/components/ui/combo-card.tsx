import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import the actual images
import heroPerfumes from '@/assets/hero-perfumes.jpg';
import heroAttars from '@/assets/hero-attars.jpg';
import heroCombos from '@/assets/hero-combos.jpg';

const imageMap = {
  '/src/assets/hero-perfumes.jpg': heroPerfumes,
  '/src/assets/hero-attars.jpg': heroAttars,
  '/src/assets/hero-combos.jpg': heroCombos,
};

interface ComboOffer {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  offerPrice: number;
  image: string;
}

interface ComboCardProps {
  offer: ComboOffer;
  onAddToCart?: (offer: ComboOffer) => void;
}

export function ComboCard({ offer, onAddToCart }: ComboCardProps) {
  const discountPercentage = Math.round(((offer.originalPrice - offer.offerPrice) / offer.originalPrice) * 100);
  const imageUrl = imageMap[offer.image as keyof typeof imageMap] || heroCombos;

  return (
    <Card className="group overflow-hidden border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={offer.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground text-lg px-3 py-1">
          {discountPercentage}% OFF
        </Badge>
        
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{offer.title}</h3>
          <p className="text-white/90">{offer.description}</p>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">
                ₹{offer.offerPrice.toLocaleString()}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                ₹{offer.originalPrice.toLocaleString()}
              </span>
            </div>
            <p className="text-primary font-medium">
              Save ₹{(offer.originalPrice - offer.offerPrice).toLocaleString()}
            </p>
          </div>

          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-card hover:shadow-elegant transition-all duration-300"
            onClick={() => onAddToCart?.(offer)}
          >
            Add Combo to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}