export type CallbackFunction = () => void;

export interface Image {
  src: string;
  title: string;
  id: string
}

export interface Card {
  mainImage: Image;
}

export interface FullCard extends Card {
  images: Image[];
  description: string;
}
