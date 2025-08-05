import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { ArrowLeft, CreditCard, Truck, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    pincode: '',
    phone: ''
  });

  const deliveryCharge = totalPrice > 999 ? 0 : 99;
  const finalTotal = totalPrice + deliveryCharge;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRazorpayPayment = () => {
    setIsProcessing(true);
    
    // Simulate Razorpay integration
    const options = {
      key: 'rzp_test_demo123456789', // Demo key
      amount: finalTotal * 100, // Amount in paise
      currency: 'INR',
      name: 'Perfume Paradise',
      description: 'Premium Perfumes & Attars',
      image: '/placeholder.svg',
      handler: function (response: any) {
        // Payment success
        setIsProcessing(false);
        clearCart();
        toast({
          title: "Payment Successful! 🎉",
          description: `Order placed successfully. Payment ID: ${response.razorpay_payment_id}`,
        });
        navigate('/');
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone
      },
      theme: {
        color: '#D4AF37'
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
          toast({
            title: "Payment Cancelled",
            description: "Your order has been cancelled.",
            variant: "destructive"
          });
        }
      }
    };

    // In a real app, you would load Razorpay SDK and use it here
    // For demo purposes, we'll simulate the success
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast({
        title: "Payment Successful! 🎉",
        description: "Order placed successfully. (Demo transaction)",
      });
      navigate('/');
    }, 2000);
  };

  const isFormValid = formData.email && formData.firstName && formData.address && formData.city && formData.pincode && formData.phone;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some products to your cart to proceed with checkout.</p>
          <Button onClick={() => navigate('/collections')}>
            Browse Collections
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Billing Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CreditCard className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Safe Checkout</span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="bg-gradient-card border-border sticky top-8">
              <CardHeader>
                <CardTitle className="text-foreground">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {items.map((item) => {
                    const imageUrl = imageMap[item.imageUrl as keyof typeof imageMap] || perfume1;
                    return (
                      <div key={item.id} className="flex items-center space-x-3">
                        <img
                          src={imageUrl}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-foreground">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">
                            {item.sizeMl}ml × {item.quantity}
                          </p>
                        </div>
                        <span className="font-medium text-foreground">
                          ₹{(item.priceActual * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="text-foreground">
                      {deliveryCharge === 0 ? 'Free' : `₹${deliveryCharge}`}
                    </span>
                  </div>
                  {deliveryCharge === 0 && (
                    <p className="text-xs text-primary">🎉 Free delivery on orders above ₹999!</p>
                  )}
                  <div className="flex justify-between text-lg font-bold border-t border-border pt-2">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">₹{finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  onClick={handleRazorpayPayment}
                  disabled={!isFormValid || isProcessing}
                  className="w-full bg-gradient-golden text-black font-semibold hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  {isProcessing ? 'Processing...' : `Pay ₹${finalTotal.toLocaleString()}`}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Powered by Razorpay • Secure & Encrypted
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;