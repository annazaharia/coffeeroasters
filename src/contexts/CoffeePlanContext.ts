import { createContext, useContext } from "react";
import { Preferences } from "../interfaces/Preferences";

interface CoffeePlanContextType {
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
  isValidPlan: () => boolean;
}

export const CoffeePlanContext = createContext<CoffeePlanContextType>({
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
  isValidPlan: () => false,
});

export const useCoffeePlanContext = () => useContext(CoffeePlanContext);
