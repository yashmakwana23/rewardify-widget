
import React from "react";
import { Gift } from "lucide-react";
import { useRewards } from "@/context/RewardsContext";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const RewardsIcon: React.FC = () => {
  const { iconState, togglePanel, newItemsCount, currentGameId } = useRewards();

  // Determine the tooltip text based on icon state
  const getTooltipText = () => {
    switch (iconState) {
      case "new":
        return `${newItemsCount} new item${newItemsCount !== 1 ? 's' : ''}!`;
      case "game-context":
        return `Rewards for ${currentGameId?.split('.').pop() || 'this game'}!`;
      case "iap-context":
        return "Discount Available!";
      default:
        return "View Rewards & Offers";
    }
  };

  // Get the appropriate CSS classes based on icon state
  const getIconClasses = () => {
    const baseClasses = "flex items-center justify-center text-white rounded-full p-3 transition-all duration-300";
    
    switch (iconState) {
      case "new":
        return `${baseClasses} bg-bluestacks-blue`;
      case "game-context":
        return `${baseClasses} bg-bluestacks-blue animate-pulse-blue`;
      case "iap-context":
        return `${baseClasses} bg-bluestacks-gold animate-pulse-gold`;
      default:
        return `${baseClasses} bg-bluestacks-dark hover:bg-bluestacks-blue`;
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={togglePanel}
            className={getIconClasses()}
            aria-label="Rewards"
          >
            <Gift size={24} />
            {iconState === "new" && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {newItemsCount}
              </span>
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{getTooltipText()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RewardsIcon;
