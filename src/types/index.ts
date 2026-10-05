export type PlanType = 'intensivo' | 'flexivel' | 'avulso';

export interface PlanOption {
  id: PlanType;
  name: string;
  badge?: string;
  price: string;
  frequency: string;
  hours: string;
  description: string;
  features: string[];
  recommendedFor: string;
  targetProfile: {
    who: string;
    traits: string[];
  };
  popular?: boolean;
}

export interface ImmersionExample {
  id: string;
  category: string;
  title: string;
  context: string;
  sceneImage: string;
  japanese: string;
  romaji: string;
  portuguese: string;
  grammarBreakdown: {
    part: string;
    furigana: string;
    meaning: string;
    grammarNote: string;
  }[];
  culturalNote: string;
  ankiDeckPreview: {
    front: string;
    back: string;
    audioHint: string;
    deckNote?: string;
  };
}

export interface TimelineStep {
  weeks: string;
  title: string;
  focus: string;
  description: string;
  materials: string[];
}
