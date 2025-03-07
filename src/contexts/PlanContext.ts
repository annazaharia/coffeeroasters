import { createContext, useContext } from "react";
import { Preferences } from "../interfaces/Preferences";

export const PlanContext = createContext<{
  preferences: Preferences;
  openSections: string[];
  isGrindOptionDisabled: boolean;
  onToggleSection: (sectionId: string) => void;
  onOptionSelect: (sectionId: string, optionId: string) => void;
  onMenuClick: (sectionId: string) => void;
  resetPreferences: () => void;
}>({
  preferences: {
    coffeeType: "",
    beanType: "",
    quantity: "",
    grindOption: "",
    deliveries: "",
  },
  openSections: ["coffeeType"],
  isGrindOptionDisabled: false,
  onToggleSection: () => {},
  onOptionSelect: () => {},
  onMenuClick: () => {},
  resetPreferences: () => {},
});

export const usePlanContext = () => useContext(PlanContext);
