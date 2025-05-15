import React from 'react';
import { ShoppingCart, Wallet, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ShoppingCart className="h-12 w-12 text-metacart-blue" />,
      step: "1️⃣",
      title: "Browse & Add to Cart",
      description: "Explore decentralized product listings from global vendors"
    },
    {
      icon: <Wallet className="h-12 w-12 text-metacart-blue" />,
      step: "2️⃣",
      title: "Checkout with Crypto",
      description: "Pay with SUI or USDC. Funds are locked in escrow until delivery"
    },
    {
      icon: <FileText className="h-12 w-12 text-metacart-blue" />,
      step: "3️⃣",
      title: "Receive NFT & Track Order",
      description: "Your NFT updates status from Shipped to Delivered, triggering vendor payment"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-background to-metacart-soft-blue/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            MetaCart leverages blockchain technology to create a transparent, secure, and efficient shopping experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="absolute -top-3 -left-3 bg-metacart-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="mb-5">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-center">{step.description}</p>
              
              {/* Step connector - only for first two columns on desktop */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-metacart-blue-light">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-metacart-blue rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Flow diagram */}
        <div className="mt-16 p-6 glass-card max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Order Flow Visualization</h3>
            <p className="text-muted-foreground">
              Blockchain-powered process from product selection to delivery
            </p>
          </div>
          
          <div className="relative h-16 mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="h-1 w-full bg-metacart-soft-blue rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex justify-between items-center">
              <div className="w-8 h-8 bg-metacart-blue rounded-full flex items-center justify-center text-white">
                <Wallet size={16} />
              </div>
              <div className="w-8 h-8 bg-metacart-blue-secondary rounded-full flex items-center justify-center text-white">
                <ShoppingCart size={16} />
              </div>
              <div className="w-8 h-8 bg-metacart-blue-tertiary rounded-full flex items-center justify-center text-white">
                <FileText size={16} />
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <div className="text-center w-24">
              <span className="text-xs font-medium">Connect Wallet</span>
            </div>
            <div className="text-center w-24">
              <span className="text-xs font-medium">Purchase</span>
            </div>
            <div className="text-center w-24">
              <span className="text-xs font-medium">NFT Receipt</span>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-metacart-blue/10 hover:bg-metacart-blue/20 text-metacart-blue font-medium py-2 px-4 rounded-lg text-sm transition-colors">
              Try Demo Flow
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
