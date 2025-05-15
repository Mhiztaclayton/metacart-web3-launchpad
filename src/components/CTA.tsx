
import React from 'react';
import { Button } from "@/components/ui/button";
import { Wallet, Package } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title mb-8">Ready to Shop or Sell on Web3?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join the future of e-commerce with MetaCart - where crypto meets dropshipping
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="btn-primary flex items-center gap-2 text-lg px-8 py-6"
              onClick={() => console.log("Connect wallet clicked")}
            >
              <Wallet className="h-5 w-5" />
              Connect Wallet & Explore
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary flex items-center gap-2 text-lg px-8 py-6"
            >
              <Package className="h-5 w-5" />
              Become a Vendor
            </Button>
          </div>
          
          <div className="mt-12 pt-10 border-t border-metacart-soft-blue">
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="text-center">
                <div className="font-bold text-3xl text-metacart-blue">0%</div>
                <div className="text-sm text-muted-foreground">Platform Fees</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-metacart-blue">100%</div>
                <div className="text-sm text-muted-foreground">Decentralized</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-metacart-blue">Instant</div>
                <div className="text-sm text-muted-foreground">Settlements</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-metacart-blue">Global</div>
                <div className="text-sm text-muted-foreground">Marketplace</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
