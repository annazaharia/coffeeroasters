import { PlanContext } from "./PlanContext";
import { ReactNode, useState } from "react";
import { Preferences } from "../interfaces/Preferences";
import { Sections } from "../data/Sections";

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<Preferences>({
    coffeeType: "",
    beanType: "",
    quantity: "",
    grindOption: "",
    deliveries: "",
  });
  const [openSections, setOpenSections] = useState<string[]>(["coffeeType"]);

  const isGrindOptionDisabled = preferences.coffeeType === "capsule";

  const onToggleSection = (sectionId: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };

  const onOptionSelect = (sectionId: string, optionId: string) => {
    if (sectionId === "grindOption" && isGrindOptionDisabled) {
      return;
    }

    const newPreferences = {
      ...preferences,
      [sectionId]: optionId,
    };

    // Reset grid option when Capsule is selected
    if (sectionId === "coffeeType" && optionId === "capsule") {
      newPreferences.grindOption = "";
    }

    setPreferences(newPreferences);

    // Open the next section
    const currentIndex = Sections.findIndex((section) => section.id === sectionId);
    let nextSection = Sections[currentIndex + 1];

    if (!nextSection) {
      return;
    }

    if (nextSection.id === "grindOption" && isGrindOptionDisabled) {
      nextSection = Sections[currentIndex + 2];

      if (!nextSection) {
        return;
      }
    }

    setOpenSections((prev) => [...prev, nextSection.id]);
  };

  const onMenuClick = (sectionId: string) => {
    if (sectionId === "grindOption" && isGrindOptionDisabled) {
      return;
    }

    if (!openSections.includes(sectionId)) {
      setOpenSections((prev) => [...prev, sectionId]);
    }
  };

  const resetPreferences = () => {
    setPreferences({
      coffeeType: "",
      beanType: "",
      quantity: "",
      grindOption: "",
      deliveries: "",
    });
    setOpenSections(["coffeeType"]);
  };

  return (
    <PlanContext.Provider
      value={{ preferences, openSections, isGrindOptionDisabled, onToggleSection, onOptionSelect, onMenuClick, resetPreferences }}
    >
      {children}
    </PlanContext.Provider>
  );
};
