
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRewards } from "@/context/RewardsContext";
import { X } from "lucide-react";
import RewardCard from "./RewardCard";
import OfferCard from "./OfferCard";
import { mockRewards, mockOffers, getGameRewards, getGameOffers, getIAPOffers } from "@/data/mockRewards";
import { cn } from "@/lib/utils";

const RewardsPanel: React.FC = () => {
  const { 
    isPanelOpen, 
    togglePanel, 
    activeTab, 
    setTab, 
    iconState, 
    currentGameId,
    markItemsAsSeen
  } = useRewards();

  // Mark items as seen when panel is opened
  useEffect(() => {
    if (isPanelOpen) {
      markItemsAsSeen();
    }
  }, [isPanelOpen, markItemsAsSeen]);

  // Determine which rewards to show based on context
  const getDisplayedRewards = () => {
    if (iconState === "game-context" && currentGameId) {
      const gameRewards = getGameRewards(currentGameId);
      return gameRewards.length > 0 ? gameRewards : mockRewards;
    }
    return mockRewards;
  };

  // Determine which offers to show based on context
  const getDisplayedOffers = () => {
    if (iconState === "iap-context") {
      const iapOffers = getIAPOffers();
      return iapOffers.length > 0 ? iapOffers : mockOffers;
    }
    
    if (iconState === "game-context" && currentGameId) {
      const gameOffers = getGameOffers(currentGameId);
      return gameOffers.length > 0 ? gameOffers : mockOffers;
    }
    
    return mockOffers;
  };

  const displayedRewards = getDisplayedRewards();
  const displayedOffers = getDisplayedOffers();

  return (
    <div 
      className={cn(
        "fixed top-0 right-0 w-80 h-full bg-bluestacks-darker shadow-xl z-50 transition-transform duration-300",
        isPanelOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold text-white">BlueStacks Rewards</h2>
          <button
            onClick={togglePanel}
            className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white"
            aria-label="Close panel"
          >
            <X size={20} />
          </button>
        </div>
        
        <Tabs 
          value={activeTab} 
          onValueChange={(value) => setTab(value as "rewards" | "offers")}
          className="flex-1 flex flex-col"
        >
          <TabsList className="w-full bg-bluestacks-dark rounded-none p-0 h-12">
            <TabsTrigger 
              value="rewards" 
              className="flex-1 h-full rounded-none data-[state=active]:bg-bluestacks-darker"
            >
              Rewards & Codes
            </TabsTrigger>
            <TabsTrigger 
              value="offers" 
              className="flex-1 h-full rounded-none data-[state=active]:bg-bluestacks-darker"
            >
              Offers & Discounts
            </TabsTrigger>
          </TabsList>
          
          <div className="flex-1 overflow-y-auto p-3 scrollbar-thin">
            <TabsContent value="rewards" className="m-0 h-full">
              {iconState === "game-context" && currentGameId && (
                <div className="bg-bluestacks-blue/20 p-2 rounded-md mb-3">
                  <p className="text-sm text-center text-blue-300">
                    Showing rewards for {currentGameId.split('.').pop()}
                  </p>
                </div>
              )}
              
              {displayedRewards.length > 0 ? (
                displayedRewards.map((reward) => (
                  <RewardCard key={reward.id} reward={reward} />
                ))
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-400 text-center">No rewards available at the moment</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="offers" className="m-0 h-full">
              {iconState === "iap-context" && (
                <div className="bg-bluestacks-gold/20 p-2 rounded-md mb-3">
                  <p className="text-sm text-center text-amber-300">
                    Special discounts for your purchase!
                  </p>
                </div>
              )}
              
              {iconState === "game-context" && currentGameId && !iconState.includes("iap") && (
                <div className="bg-bluestacks-blue/20 p-2 rounded-md mb-3">
                  <p className="text-sm text-center text-blue-300">
                    Showing offers for {currentGameId.split('.').pop()}
                  </p>
                </div>
              )}
              
              {displayedOffers.length > 0 ? (
                displayedOffers.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} />
                ))
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-400 text-center">No offers available at the moment</p>
                </div>
              )}
            </TabsContent>
          </div>
        </Tabs>
        
        <div className="bg-bluestacks-dark p-3 text-xs text-center text-gray-500">
          <p>Current Date: {new Date().toLocaleDateString()}</p>
          <p>BlueStacks © 2025 • Nagpur, Maharashtra</p>
        </div>
      </div>
    </div>
  );
};

export default RewardsPanel;
