import React, { createContext, useContext, useState, useEffect } from "react";
import { RewardIconState } from "@/types/rewards";
import { getNewItemsCount } from "@/data/mockRewards";

interface RewardsContextType {
  isPanelOpen: boolean;
  activeTab: "rewards" | "offers";
  iconState: RewardIconState;
  currentGameId: string | null;
  newItemsCount: number;
  markItemsAsSeen: () => void;
  togglePanel: () => void;
  setTab: (tab: "rewards" | "offers") => void;
  setIconState: (state: RewardIconState) => void;
  setCurrentGameId: (gameId: string | null) => void;
}

const RewardsContext = createContext<RewardsContextType | undefined>(undefined);

export function RewardsProvider({ children }: { children: React.ReactNode }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"rewards" | "offers">("rewards");
  const [iconState, setIconState] = useState<RewardIconState>("normal");
  const [currentGameId, setCurrentGameId] = useState<string | null>(null);
  const [newItemsCount, setNewItemsCount] = useState(0);

  // Initialize the new items count
  useEffect(() => {
    setNewItemsCount(getNewItemsCount());
    
    // Simulate context changes for demo purposes
    const demoTimeout = setTimeout(() => {
      // Simulate launching Clash of Clans
      setIconState("game-context");
      setCurrentGameId("com.supercell.clashofclans");
    }, 8000);

    const iapTimeout = setTimeout(() => {
      // Simulate IAP detection
      setIconState("iap-context");
    }, 15000);

    return () => {
      clearTimeout(demoTimeout);
      clearTimeout(iapTimeout);
    };
  }, []);

  // Set up effects to handle state changes
  useEffect(() => {
    if (newItemsCount > 0 && iconState === "normal") {
      setIconState("new");
    }
  }, [newItemsCount, iconState]);

  const togglePanel = () => {
    setIsPanelOpen(prev => !prev);
  };

  const setTab = (tab: "rewards" | "offers") => {
    setActiveTab(tab);
  };

  const markItemsAsSeen = () => {
    // In a real app, this would update the state in the backend
    setNewItemsCount(0);
    
    // If there are no other context reasons to keep a special icon state,
    // return to normal state when items are seen
    if (iconState === "new") {
      setIconState("normal");
    }
  };

  return (
    <RewardsContext.Provider
      value={{
        isPanelOpen,
        activeTab,
        iconState,
        currentGameId,
        newItemsCount,
        togglePanel,
        setTab,
        setIconState,
        setCurrentGameId,
        markItemsAsSeen
      }}
    >
      {children}
    </RewardsContext.Provider>
  );
}

export function useRewards() {
  const context = useContext(RewardsContext);
  if (context === undefined) {
    throw new Error("useRewards must be used within a RewardsProvider");
  }
  return context;
}
