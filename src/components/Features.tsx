
import React from 'react';
import { ShoppingCart, Package, Globe, Link, Coins, Shield, Calendar, FileText, Upload, TrendingUp } from 'lucide-react';

const Features = () => {
  const buyerFeatures = [
    {
      icon: <Coins className="h-10 w-10 text-metacart-purple" />,
      title: "Pay with Crypto",
      description: "Use SUI, USDC, or MetaCart Token for all purchases"
    },
    {
      icon: <FileText className="h-10 w-10 text-metacart-purple" />,
      title: "NFT Order Tracking",
      description: "Every purchase mints a verifiable NFT receipt"
    },
    {
      icon: <Globe className="h-10 w-10 text-metacart-purple" />,
      title: "Global Access",
      description: "Shop from anywhere with no regional restrictions"
    }
  ];

  const vendorFeatures = [
    {
      icon: <Link className="h-10 w-10 text-metacart-purple" />,
      title: "Decentralized Listings",
      description: "Mint products as on-chain objects with full ownership"
    },
    {
      icon: <Coins className="h-10 w-10 text-metacart-purple" />,
      title: "Instant Settlements",
      description: "Get automatic payouts upon delivery confirmation"
    },
    {
      icon: <Shield className="h-10 w-10 text-metacart-purple" />,
      title: "No Platform Censorship",
      description: "List freely with smart contract security guarantees"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        {/* Buyers Section */}
        <section id="buyers" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="section-title">For Buyers</h2>
            <p className="section-subtitle">
              Experience shopping with the power of blockchain technology, enabling secure transactions, global access, and verifiable proof of purchase.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buyerFeatures.map((feature, index) => (
              <div key={`buyer-${index}`} className="feature-card">
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Vendors Section */}
        <section id="vendors">
          <div className="text-center mb-16">
            <h2 className="section-title">For Vendors</h2>
            <p className="section-subtitle">
              List and sell your products on a censorship-resistant platform with lower fees, instant payouts, and direct customer connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vendorFeatures.map((feature, index) => (
              <div key={`vendor-${index}`} className="feature-card">
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
