import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Saffron Scents
            </h3>
            <p className="text-muted-foreground">
              Premium perfumes and authentic attars crafted with the finest ingredients from around the world.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/collections/perfumes" className="block text-muted-foreground hover:text-primary transition-colors">
                Premium Perfumes
              </a>
              <a href="/collections/attars" className="block text-muted-foreground hover:text-primary transition-colors">
                Authentic Attars
              </a>
              <a href="/collections/combos" className="block text-muted-foreground hover:text-primary transition-colors">
                Combo Offers
              </a>
            </div>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Customer Care</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
              <a href="/shipping" className="block text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </a>
              <a href="/returns" className="block text-muted-foreground hover:text-primary transition-colors">
                Returns & Exchanges
              </a>
              <a href="/faq" className="block text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@saffronscents.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span>123 Perfume Street<br />Mumbai, India 400001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Saffron Scents. All rights reserved. | 
            <a href="/privacy" className="hover:text-primary transition-colors ml-1">Privacy Policy</a> | 
            <a href="/terms" className="hover:text-primary transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}