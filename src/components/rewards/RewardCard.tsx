
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { GameReward } from "@/types/rewards";
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RewardCardProps {
  reward: GameReward;
}

const RewardCard: React.FC<RewardCardProps> = ({ reward }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(reward.code);
    setCopied(true);
    toast({
      title: "Code copied!",
      description: `The code ${reward.code} has been copied to your clipboard.`,
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const isExpired = reward.expiryDate ? new Date(reward.expiryDate) < new Date() : false;

  return (
    <div className={cn(
      "rounded-lg p-4 mb-3 transition-all",
      reward.isNew ? "bg-bluestacks-darker border-l-4 border-bluestacks-blue" : "bg-bluestacks-dark",
      isExpired ? "opacity-60" : ""
    )}>
      <div className="flex items-start gap-3">
        <img 
          src={reward.gameIcon} 
          alt={reward.gameName} 
          className="w-12 h-12 rounded-lg object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">{reward.title}</h3>
            <div className="flex gap-1">
              {reward.isNew && <Badge className="bg-bluestacks-blue">New</Badge>}
              {isExpired && <Badge variant="destructive">Expired</Badge>}
            </div>
          </div>
          
          <p className="text-sm text-gray-300 mt-1">{reward.description}</p>
          
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <span className="text-xs text-gray-400">{reward.gameName}</span>
              {reward.expiryDate && !isExpired && (
                <span className="text-xs text-gray-400 ml-2">
                  Expires: {new Date(reward.expiryDate).toLocaleDateString()}
                </span>
              )}
            </div>
            
            <button
              onClick={copyToClipboard}
              disabled={isExpired}
              className={cn(
                "flex items-center gap-1 px-3 py-1 rounded text-sm font-medium transition-colors",
                copied ? "bg-bluestacks-green text-white" : "bg-bluestacks-blue text-white hover:bg-blue-600",
                isExpired ? "opacity-50 cursor-not-allowed" : ""
              )}
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
