
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <ShoppingCart 
              className="h-8 w-8 text-metacart-blue mr-2" 
              strokeWidth={2}
            />
            <span className="font-bold text-2xl">MetaCart</span>
          </a>
          <span className="text-xs bg-metacart-soft-blue px-2 py-1 rounded-md ml-2 hidden md:block">
            Web3 Dropshipping
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="nav-link font-medium">Home</a>
          <a href="#how-it-works" className="nav-link font-medium">How It Works</a>
          <a href="#buyers" className="nav-link font-medium">For Buyers</a>
          <a href="#vendors" className="nav-link font-medium">For Vendors</a>
          <a href="#faq" className="nav-link font-medium">FAQ</a>
          <a href="#contact" className="nav-link font-medium">Contact</a>
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="wallet-btn bg-gradient-to-r from-metacart-blue-bright to-metacart-blue-sky hover:shadow-xl"
            onClick={() => console.log("Connect wallet")}
          >
            <Wallet className="h-4 w-4 mr-2" /> Connect Wallet
          </Button>
          <Button 
            className="btn-primary"
            onClick={() => console.log("Start selling")}
          >
            Start Selling
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 w-full py-4 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-4">
            <a href="#" className="nav-link font-medium p-2" onClick={toggleMenu}>Home</a>
            <a href="#how-it-works" className="nav-link font-medium p-2" onClick={toggleMenu}>How It Works</a>
            <a href="#buyers" className="nav-link font-medium p-2" onClick={toggleMenu}>For Buyers</a>
            <a href="#vendors" className="nav-link font-medium p-2" onClick={toggleMenu}>For Vendors</a>
            <a href="#faq" className="nav-link font-medium p-2" onClick={toggleMenu}>FAQ</a>
            <a href="#contact" className="nav-link font-medium p-2" onClick={toggleMenu}>Contact</a>
            
            <div className="flex flex-col space-y-3 pt-4">
              <Button
                variant="outline"
                className="wallet-btn bg-gradient-to-r from-metacart-blue-bright to-metacart-blue-sky hover:shadow-xl justify-center"
                onClick={() => {
                  console.log("Connect wallet");
                  toggleMenu();
                }}
              >
                <Wallet className="h-4 w-4 mr-2" /> Connect Wallet
              </Button>
              <Button 
                className="btn-primary justify-center"
                onClick={() => {
                  console.log("Start selling");
                  toggleMenu();
                }}
              >
                Start Selling
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
