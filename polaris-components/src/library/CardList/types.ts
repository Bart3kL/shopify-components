import { SingleCardProps } from "./SingleCard/types";

export interface CardListProps {
  cardTitle?: string;
  cardDesc?: string;
  exploreTitle: string;
  exploreDesc: string;
  exploreBtnText: string;
  exploreBtnUrl: string;
  cards: SingleCardProps[];
}
