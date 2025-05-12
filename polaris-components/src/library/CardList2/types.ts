import { IconSource } from "@shopify/polaris";

export interface ItemAction {
  label: string;
  /**
   * Button action, if present will render as a button.
   * If not present, either `url` or `onClick` must be provided.
   */
  onClick?: () => void;
  /**
   * Url for the link action; if present will render as a link.
   */
  url?: string;
  external?: boolean;
}

export interface Item {
  id: string;
  icon: IconSource;
  heading: string;
  description: string;
  action: ItemAction;
}

export interface CardList2Props {
  title: string;
  items: Item[];
}
