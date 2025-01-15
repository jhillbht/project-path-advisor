export interface ProjectRequirements {
  dataComplexity: number;
  realtime: number;
  automation: number;
  integration: number;
  userBase: number;
}

export interface Recommendation {
  startingPoint: string;
  nextSteps: string[];
  reasoning: string;
  suggestedTools: string[];
}

export interface Question {
  id: keyof ProjectRequirements;
  text: string;
  hint: string;
  keywords: string[];
}