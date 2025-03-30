
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RewardsWidget from "./rewards/RewardsWidget";

const Demo = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  
  const gameOptions = [
    { id: "com.supercell.clashofclans", name: "Clash of Clans", image: "https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUbkPragdWwqKCOhegfg=w240-h480-rw" },
    { id: "com.pubg.imobile", name: "PUBG Mobile", image: "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg=w240-h480-rw" },
    { id: "com.mobilelegends.bang", name: "Mobile Legends", image: "https://play-lh.googleusercontent.com/ha1vofCWS5lxFI3enViJAu8A2P8SxZ3ni0ByOxhS1F5R6x7kLSHXu1WUW2PZc8N27oY=s256-rw" },
  ];

  return (
    <div className="min-h-screen bg-bluestacks-darker text-white">
      {/* Mock BlueStacks Header */}
      <header className="bg-bluestacks-dark flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="text-lg font-semibold">BlueStacks Demo</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">v5.7.0.1064</span>
          <Button variant="outline" size="sm" className="bg-bluestacks-dark border-gray-700 hover:bg-gray-800">
            Settings
          </Button>
        </div>
      </header>

      {/* Mock BlueStacks Content */}
      <div className="container mx-auto p-4">
        <Tabs defaultValue="games" className="w-full">
          <TabsList className="w-full mb-6 bg-bluestacks-dark">
            <TabsTrigger value="games" className="flex-1">My Games</TabsTrigger>
            <TabsTrigger value="store" className="flex-1">App Center</TabsTrigger>
            <TabsTrigger value="settings" className="flex-1">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="games" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {gameOptions.map((game) => (
                <div 
                  key={game.id}
                  className="bg-bluestacks-dark rounded-lg p-4 text-center cursor-pointer hover:bg-gray-800 transition-colors"
                  onClick={() => setActiveGame(game.id)}
                >
                  <img 
                    src={game.image} 
                    alt={game.name} 
                    className="w-20 h-20 mx-auto rounded-xl mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  <h3 className="font-medium text-gray-200">{game.name}</h3>
                  <Button 
                    variant="default"
                    size="sm"
                    className="mt-3 w-full bg-bluestacks-blue hover:bg-blue-600"
                  >
                    Play
                  </Button>
                </div>
              ))}
              
              {Array.from({ length: 7 }).map((_, index) => (
                <div 
                  key={`empty-${index}`}
                  className="bg-bluestacks-dark rounded-lg p-4 text-center border border-dashed border-gray-700 hover:border-gray-600 transition-colors cursor-pointer"
                >
                  <div className="w-20 h-20 mx-auto rounded-xl mb-2 bg-gray-800 flex items-center justify-center">
                    <span className="text-3xl text-gray-600">+</span>
                  </div>
                  <h3 className="font-medium text-gray-500">Install App</h3>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="store" className="mt-0">
            <div className="bg-bluestacks-dark rounded-lg p-8 text-center">
              <h2 className="text-xl mb-4">BlueStacks App Center</h2>
              <p className="text-gray-400">Discover and install popular mobile games directly to BlueStacks</p>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-0">
            <div className="bg-bluestacks-dark rounded-lg p-8 text-center">
              <h2 className="text-xl mb-4">Settings</h2>
              <p className="text-gray-400">Configure BlueStacks to your preference</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* The Rewards Widget - this is what we're showcasing */}
      <RewardsWidget />
    </div>
  );
};

export default Demo;
