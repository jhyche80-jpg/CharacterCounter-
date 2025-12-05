
// Text Input 
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// Stats Display 

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}
 
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

// character counter 
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}