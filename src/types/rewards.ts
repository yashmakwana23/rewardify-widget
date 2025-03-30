
export interface GameReward {
  id: string;
  gameId: string;
  gameName: string;
  gameIcon: string;
  title: string;
  description: string;
  code: string;
  expiryDate?: string;
  isNew?: boolean;
  isGameSpecific?: boolean;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  terms: string;
  discountPercentage?: number;
  imageUrl: string;
  gameId?: string;
  gameName?: string;
  gameIcon?: string;
  validUntil?: string;
  isNew?: boolean;
  isGameSpecific?: boolean;
  isIAPOffer?: boolean;
}

export type RewardIconState = 'normal' | 'new' | 'game-context' | 'iap-context';
