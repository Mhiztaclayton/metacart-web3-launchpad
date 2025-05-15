
import React from 'react';

const Comparison = () => {
  const comparisonData = [
    {
      feature: "Payments",
      metaCart: "Crypto (SUI/USDC)",
      traditional: "Fiat only"
    },
    {
      feature: "Fees",
      metaCart: "Low (smart contract gas)",
      traditional: "5-15% platform fees"
    },
    {
      feature: "Censorship",
      metaCart: "Decentralized listings",
      traditional: "Risk of bans"
    },
    {
      feature: "Order Proof",
      metaCart: "NFT receipts",
      traditional: "Email confirmations"
    },
    {
      feature: "Payout Speed",
      metaCart: "1-3 days (after delivery)",
      traditional: "7-14 days"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose MetaCart?</h2>
          <p className="section-subtitle">
            See how MetaCart's Web3 approach compares to traditional dropshipping platforms
          </p>
        </div>
        
        <div className="overflow-x-auto glass-card p-6">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b border-metacart-blue/20">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">
                  <div className="flex items-center">
                    <span className="text-metacart-blue font-bold">MetaCart (Web3)</span>
                  </div>
                </th>
                <th className="p-4 text-left">Traditional Dropshipping</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr 
                  key={index} 
                  className={index < comparisonData.length - 1 ? "border-b border-border/30" : ""}
                >
                  <td className="p-4 font-medium">{item.feature}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-metacart-blue mr-2"></div>
                      <span>{item.metaCart}</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">{item.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-10 text-center text-sm text-muted-foreground">
          <p>All transactions on MetaCart are processed via smart contracts on the Sui blockchain, ensuring transparency and security.</p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
