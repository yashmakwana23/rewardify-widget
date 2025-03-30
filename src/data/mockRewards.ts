
import { GameReward, Offer } from "@/types/rewards";

export const mockRewards: GameReward[] = [
  {
    id: "1",
    gameId: "com.supercell.clashofclans",
    gameName: "Clash of Clans",
    gameIcon: "https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUbkPragdWwqKCOhegfg=w240-h480-rw",
    title: "500 Free Gems",
    description: "Use this code to get 500 free gems in Clash of Clans",
    code: "CLASHREWARD2025",
    expiryDate: "2025-04-15",
    isNew: true,
    isGameSpecific: true
  },
  {
    id: "2",
    gameId: "com.pubg.imobile",
    gameName: "PUBG Mobile",
    gameIcon: "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg=w240-h480-rw",
    title: "Exclusive Weapon Skin",
    description: "Redeem this code for an exclusive PUBG Mobile weapon skin",
    code: "PUBGSPECIAL2025",
    expiryDate: "2025-05-01",
    isGameSpecific: true
  },
  {
    id: "3",
    gameId: "com.riotgames.wildrif",
    gameName: "Wild Rift",
    gameIcon: "https://play-lh.googleusercontent.com/S2d1_dSCJCcPP5uZ_vdJJCGyEbcwl74FNAtZs0p6yeYw_U8md0cmsr6ImX1jcFQlUg=w240-h480-rw",
    title: "Champion Bundle",
    description: "Get a free champion with this exclusive BlueStacks code",
    code: "WILDRIFT25BS",
    expiryDate: "2025-06-10"
  },
  {
    id: "4",
    gameId: "com.gamename.general",
    gameName: "BlueStacks Rewards",
    gameIcon: "/placeholder.svg",
    title: "Premium Subscription",
    description: "7-day free premium subscription for all games",
    code: "BLUESTACKSPREM7",
    expiryDate: "2025-04-30",
    isNew: true
  },
  {
    id: "5",
    gameId: "com.mobilelegends.bang",
    gameName: "Mobile Legends",
    gameIcon: "https://play-lh.googleusercontent.com/ha1vofCWS5lxFI3enViJAu8A2P8SxZ3ni0ByOxhS1F5R6x7kLSHXu1WUW2PZc8N27oY=s256-rw",
    title: "Diamond Pack",
    description: "Redeem 100 free diamonds for Mobile Legends",
    code: "MLBB100DIAS",
    expiryDate: "2025-05-15",
    isGameSpecific: true
  }
];

export const mockOffers: Offer[] = [
  {
    id: "1",
    title: "50% Off In-App Purchase",
    description: "Get 50% off on your next gem purchase",
    terms: "Valid for purchases above $4.99. One-time use only.",
    discountPercentage: 50,
    imageUrl: "https://img.freepik.com/premium-vector/game-diamonds-gems-crystal-ui-assets-match-3-game_191307-170.jpg",
    gameId: "com.supercell.clashofclans",
    gameName: "Clash of Clans",
    gameIcon: "https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUbkPragdWwqKCOhegfg=w240-h480-rw",
    validUntil: "2025-04-20",
    isNew: true,
    isGameSpecific: true,
    isIAPOffer: true
  },
  {
    id: "2",
    title: "Buy 1 Get 1 Free",
    description: "Purchase any battle pass and get one month free",
    terms: "Applicable on seasonal battle passes only.",
    imageUrl: "https://img.freepik.com/premium-vector/battle-pass-level-rewards-user-interface_87720-902.jpg",
    gameId: "com.pubg.imobile",
    gameName: "PUBG Mobile",
    gameIcon: "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg=w240-h480-rw",
    validUntil: "2025-05-10",
    isGameSpecific: true
  },
  {
    id: "3",
    title: "20% Cash Back",
    description: "Get 20% cash back on all in-app purchases",
    terms: "Minimum purchase of $10 required. Maximum cashback $50.",
    discountPercentage: 20,
    imageUrl: "https://img.freepik.com/premium-vector/cashback-offer-promotion-banner-template-with-3d-coin-badge_100456-11380.jpg",
    validUntil: "2025-05-30",
    isIAPOffer: true
  },
  {
    id: "4",
    title: "Exclusive BlueStacks Bundle",
    description: "Special gaming bundle with premium items",
    terms: "Available for all BlueStacks users. One-time redemption.",
    imageUrl: "https://img.freepik.com/premium-vector/game-mystery-box-set-wooden-chest-gift-prize-boxes-game-assets_191307-588.jpg",
    validUntil: "2025-06-15",
    isNew: true
  },
  {
    id: "5",
    title: "Free Season Pass",
    description: "Get this season's pass completely free",
    terms: "New BlueStacks users only. Redeem within 7 days of installation.",
    imageUrl: "https://img.freepik.com/premium-vector/season-pass-rewards-level-rewards-user-interface-golden-reward_87720-901.jpg",
    gameId: "com.mobilelegends.bang",
    gameName: "Mobile Legends",
    gameIcon: "https://play-lh.googleusercontent.com/ha1vofCWS5lxFI3enViJAu8A2P8SxZ3ni0ByOxhS1F5R6x7kLSHXu1WUW2PZc8N27oY=s256-rw",
    validUntil: "2025-04-25",
    isGameSpecific: true
  }
];

// Helper function to get rewards for a specific game
export function getGameRewards(gameId: string): GameReward[] {
  return mockRewards.filter(reward => reward.gameId === gameId);
}

// Helper function to get offers for a specific game
export function getGameOffers(gameId: string): Offer[] {
  return mockOffers.filter(offer => offer.gameId === gameId);
}

// Helper function to get IAP offers
export function getIAPOffers(): Offer[] {
  return mockOffers.filter(offer => offer.isIAPOffer === true);
}

// Count new rewards and offers
export function getNewItemsCount(): number {
  const newRewards = mockRewards.filter(reward => reward.isNew).length;
  const newOffers = mockOffers.filter(offer => offer.isNew).length;
  return newRewards + newOffers;
}
