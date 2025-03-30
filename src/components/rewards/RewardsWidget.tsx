
import React from "react";
import { RewardsProvider } from "@/context/RewardsContext";
import RewardsIcon from "./RewardsIcon";
import RewardsPanel from "./RewardsPanel";

const RewardsWidget: React.FC = () => {
  return (
    <RewardsProvider>
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50">
        <RewardsIcon />
      </div>
      <RewardsPanel />
    </RewardsProvider>
  );
};

export default RewardsWidget;
