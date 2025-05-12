export interface Slide {
  image: string;
  imageAlt?: string;
  heading: string;
  description: string;
  subheading?: string;
}

export interface SliderProps {
  slides: Slide[];
  initialSlide?: number;
  onSlideChange?: (idx: number) => void;
}
