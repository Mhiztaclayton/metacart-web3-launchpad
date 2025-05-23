
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-sora">
              Shop & Sell with 
              <span className="gradient-text block mt-2">Crypto</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl font-inter">
              No Middlemen, Just Smart Contracts. Pay with SUI/USDC, list products on-chain, and get an NFT receipt with every order.
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
              <Button className="btn-primary w-full sm:w-auto flex items-center gap-2 text-lg">
                Start Shopping <ShoppingCart size={18} />
              </Button>
              <Button variant="outline" className="btn-secondary w-full sm:w-auto flex items-center gap-2 text-lg">
                List Products <Package size={18} />
              </Button>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <span className="text-sm bg-metacart-card px-3 py-1.5 rounded-full border border-metacart-indigo/30">Sui Blockchain</span>
              <span className="text-sm bg-metacart-card px-3 py-1.5 rounded-full border border-metacart-mint/30">Sui Wallet</span>
              <span className="text-sm bg-metacart-card px-3 py-1.5 rounded-full border border-metacart-indigo/30">USDC</span>
              <span className="text-sm bg-metacart-card px-3 py-1.5 rounded-full border border-metacart-mint/30">NFT Receipts</span>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-metacart-glow-indigo to-metacart-glow-mint rounded-full blur-3xl animate-pulse-soft"></div>
              <div className="relative animate-float">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-metacart-indigo to-metacart-mint rounded-full flex items-center justify-center">
                  <div className="w-56 h-56 md:w-72 md:h-72 bg-metacart-card rounded-full flex items-center justify-center relative overflow-hidden neon-border">
                    <div className="absolute inset-0 bg-gradient-to-br from-metacart-indigo/20 to-metacart-mint/20 opacity-50 animate-spin-slow"></div>
                    <div className="z-10 flex flex-col items-center">
                      <ShoppingCart size={64} className="text-metacart-mint mb-3" />
                      <div className="font-bold text-lg font-sora">MetaCart NFT</div>
                      <div className="text-xs text-metacart-gray">#001</div>
                    </div>
                  </div>
                </div>
                
                {/* Small decorative elements */}
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-metacart-indigo rounded-full flex items-center justify-center animate-float neon-border" style={{animationDelay: "1s"}}>
                  <div className="w-8 h-8 bg-metacart-card rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-metacart-mint">SUI</span>
                  </div>
                </div>
                <div className="absolute -left-6 top-1/4 w-10 h-10 bg-metacart-mint rounded-full flex items-center justify-center animate-float neon-border" style={{animationDelay: "1.5s"}}>
                  <div className="w-6 h-6 bg-metacart-card rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-metacart-indigo">$</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/3 w-8 h-8 bg-metacart-yellow rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
                  <div className="w-5 h-5 bg-metacart-card rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#how-it-works" 
            className="inline-flex items-center gap-2 text-metacart-mint hover:text-metacart-soft-mint transition-colors"
          >
            Learn how it works <ArrowRight size={16} />
          </a>
        </div>
      </div>
      
      {/* Abstract shapes for background */}
      <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-metacart-glow-indigo rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-1/4 h-1/4 bg-metacart-glow-mint rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
