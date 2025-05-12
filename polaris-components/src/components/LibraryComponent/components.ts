import { CardList } from "@/src/library/CardList";
import { CardList2 } from "@/src/library/CardList2";
import { PricingPlans } from "@/src/library/PricingPlans";
import { RichTextEditor } from "@/src/library/RichTextEditor";
import { SearchEngineListing } from "@/src/library/SearchEngineListing";
import { SetupGuideAccordion } from "@/src/library/SetupGuide";
import { ShortcutsSection } from "@/src/library/ShortcutsSection";
import { Slider } from "@/src/library/Slider";
import { Stats1 } from "@/src/library/Stats1";

export const COMPONENTS = {
  stats1: {
    componentTitle: "Stats #1",
    component: Stats1,
  },
  "card-list": {
    componentTitle: "Card List",
    component: CardList,
  },
  "rich-text-editor": {
    componentTitle: "RichTextEditor",
    component: RichTextEditor,
  },
  "search-engine-listing": {
    componentTitle: "Search Engine Listing",
    component: SearchEngineListing,
  },
  "pricing-plans": {
    componentTitle: "Pricing Plans",
    component: PricingPlans,
  },
  "shortcuts-section": {
    componentTitle: "Shortcuts Section",
    component: ShortcutsSection,
  },
  "setup-guide": {
    componentTitle: "Setup Guide",
    component: SetupGuideAccordion,
  },
  "card-list2": {
    componentTitle: "Card List #2",
    component: CardList2,
  },
  slider: {
    componentTitle: "Slider",
    component: Slider,
  },
};
