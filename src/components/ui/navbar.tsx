import { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setCartOpen } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Saffron Scents
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Collections
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48 bg-card border border-border shadow-elegant">
                <DropdownMenuItem asChild>
                  <a href="/collections/perfumes" className="w-full cursor-pointer">
                    Premium Perfumes
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/collections/attars" className="w-full cursor-pointer">
                    Authentic Attars
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/collections/combos" className="w-full cursor-pointer">
                    Combo Offers
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-accent"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border animate-fade-in">
            <a href="/" className="block py-2 text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/collections/perfumes" className="block py-2 text-foreground hover:text-primary transition-colors">
              Premium Perfumes
            </a>
            <a href="/collections/attars" className="block py-2 text-foreground hover:text-primary transition-colors">
              Authentic Attars
            </a>
            <a href="/collections/combos" className="block py-2 text-foreground hover:text-primary transition-colors">
              Combo Offers
            </a>
            <a href="/about" className="block py-2 text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="block py-2 text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}