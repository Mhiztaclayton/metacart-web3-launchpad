
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Shop & Sell with 
              <span className="gradient-text block mt-2">Crypto</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl">
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
              <span className="text-sm bg-metacart-soft-blue/50 px-3 py-1.5 rounded-full">Sui Blockchain</span>
              <span className="text-sm bg-metacart-soft-indigo/50 px-3 py-1.5 rounded-full">Sui Wallet</span>
              <span className="text-sm bg-metacart-soft-blue/50 px-3 py-1.5 rounded-full">USDC</span>
              <span className="text-sm bg-metacart-soft-indigo/50 px-3 py-1.5 rounded-full">NFT Receipts</span>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-metacart-blue/20 to-metacart-blue-sky/20 rounded-full blur-3xl animate-pulse-soft"></div>
              <div className="relative animate-float">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-metacart-blue to-metacart-blue-sky rounded-full flex items-center justify-center">
                  <div className="w-56 h-56 md:w-72 md:h-72 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-metacart-soft-blue to-metacart-soft-indigo opacity-50 animate-spin-slow"></div>
                    <div className="z-10 flex flex-col items-center">
                      <ShoppingCart size={64} className="text-metacart-blue mb-3" />
                      <div className="font-bold text-lg">MetaCart NFT</div>
                      <div className="text-xs text-muted-foreground">#001</div>
                    </div>
                  </div>
                </div>
                
                {/* Small decorative elements */}
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-metacart-blue-sky rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">SUI</span>
                  </div>
                </div>
                <div className="absolute -left-6 top-1/4 w-10 h-10 bg-metacart-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1.5s"}}>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">$</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/3 w-8 h-8 bg-metacart-vivid-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
                  <div className="w-5 h-5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#how-it-works" 
            className="inline-flex items-center gap-2 text-metacart-blue hover:text-metacart-blue-tertiary transition-colors"
          >
            Learn how it works <ArrowRight size={16} />
          </a>
        </div>
      </div>
      
      {/* Abstract shapes for background */}
      <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-metacart-soft-blue/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-1/4 h-1/4 bg-metacart-soft-indigo/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
