
import React from "react";
import { ExternalLink } from "lucide-react";
import { Offer } from "@/types/rewards";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface OfferCardProps {
  offer: Offer;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  const claimOffer = () => {
    toast({
      title: "Offer claimed!",
      description: `You've successfully claimed the ${offer.title} offer.`,
    });
  };

  const isExpired = offer.validUntil ? new Date(offer.validUntil) < new Date() : false;

  return (
    <div className={cn(
      "rounded-lg p-4 mb-3 transition-all",
      offer.isNew ? "bg-bluestacks-darker border-l-4 border-bluestacks-gold" : "bg-bluestacks-dark",
      isExpired ? "opacity-60" : ""
    )}>
      <div className="flex gap-3">
        <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
          <img 
            src={offer.imageUrl} 
            alt={offer.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">
              {offer.title}
              {offer.discountPercentage && (
                <span className="ml-1 text-bluestacks-gold">{offer.discountPercentage}%</span>
              )}
            </h3>
            <div className="flex gap-1">
              {offer.isNew && <Badge className="bg-bluestacks-gold text-black">New</Badge>}
              {offer.isIAPOffer && <Badge className="bg-green-600">IAP</Badge>}
              {isExpired && <Badge variant="destructive">Expired</Badge>}
            </div>
          </div>
          
          <p className="text-sm text-gray-300 mt-1">{offer.description}</p>
          
          <div className="flex flex-wrap items-center justify-between mt-2">
            <div className="flex items-center">
              {offer.gameName ? (
                <div className="flex items-center">
                  {offer.gameIcon && (
                    <img 
                      src={offer.gameIcon} 
                      alt={offer.gameName} 
                      className="w-4 h-4 rounded mr-1"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  )}
                  <span className="text-xs text-gray-400">{offer.gameName}</span>
                </div>
              ) : (
                <span className="text-xs text-gray-400">All games</span>
              )}
              
              {offer.validUntil && !isExpired && (
                <span className="text-xs text-gray-400 ml-2">
                  Valid until: {new Date(offer.validUntil).toLocaleDateString()}
                </span>
              )}
            </div>
            
            <Button
              size="sm"
              variant="default"
              className={cn(
                "mt-1 bg-bluestacks-gold text-black hover:bg-amber-500",
                isExpired ? "opacity-50 cursor-not-allowed" : ""
              )}
              onClick={claimOffer}
              disabled={isExpired}
            >
              <span>Claim Offer</span>
              <ExternalLink size={14} className="ml-1" />
            </Button>
          </div>
          
          {offer.terms && (
            <p className="text-xs text-gray-500 mt-2 italic">
              {offer.terms}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
