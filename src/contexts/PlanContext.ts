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
  calculateBasePrice: () => void;
  calculateDeliveryPrice: () => void;
  calculateTotalPrice: () => string;
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
  calculateBasePrice: () => "",
  calculateDeliveryPrice: () => "",
  calculateTotalPrice: () => "",
});

export const usePlanContext = () => useContext(PlanContext);
