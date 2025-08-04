import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroSlides } from '@/data/products';

import heroPerfumes from '@/assets/hero-perfumes.jpg';
import heroAttars from '@/assets/hero-attars.jpg';
import heroCombos from '@/assets/hero-combos.jpg';

const imageMap = {
  '/src/assets/hero-perfumes.jpg': heroPerfumes,
  '/src/assets/hero-attars.jpg': heroAttars,
  '/src/assets/hero-combos.jpg': heroCombos,
};

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${imageMap[slide.image as keyof typeof imageMap]})`
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="max-w-4xl mx-auto px-4 animate-fade-in">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
                <Button 
                  size="lg" 
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-premium hover:shadow-elegant transition-all duration-300 hover:scale-105"
                >
                  <a href={slide.link}>{slide.cta}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 hover:bg-white/30 text-white backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 hover:bg-white/30 text-white backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}