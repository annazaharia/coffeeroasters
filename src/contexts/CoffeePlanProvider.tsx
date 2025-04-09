import { CoffeePlanContext } from "./CoffeePlanContext";
import { ReactNode, useState } from "react";
import { Preferences } from "../interfaces/Preferences";
import { Sections } from "../data/Sections";

// component providing context
export const CoffeePlanProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<Preferences>({
    coffeeType: "",
    beanType: "",
    quantity: "",
    grindOption: "",
    deliveries: "",
  });

  const [openSections, setOpenSections] = useState<string[]>(["coffeeType"]);

  // capsule doesn't need grinding
  const isGrindOptionDisabled = preferences.coffeeType === "capsule";

  // add or remove an open section
  const onToggleSection = (sectionId: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };

   // the user chooses an option, then preferences are updated.
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

   // when the user clicks on an item in the sidebar, that section opens.
  const onMenuClick = (sectionId: string) => {
    if (sectionId === "grindOption" && isGrindOptionDisabled) {
      return;
    }

    if (!openSections.includes(sectionId)) {
      setOpenSections((prev) => [...prev, sectionId]);
    }
  };

    // reset preferences
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

     // price calculation
  const calculateBasePrice = () => {
    const basePrice = 10;
    const quantityMultiplier =
      {
        "250g": 1,
        "500g": 2,
        "1000g": 4,
      }[preferences.quantity] || 1;

    return basePrice * quantityMultiplier;
  };

  const calculateDeliveryPrice = () => {
    const deliveries = Sections.find((section) => section.id === "deliveries");
    const deliveryOption = deliveries?.options.find((option) => option.id === preferences.deliveries);

    const deliveryMultiplier =
      {
        everyWeek: 4,
        everyTwoWeeks: 2,
        everyMonth: 1,
      }[preferences.deliveries] || 1;

    return (deliveryOption?.price ?? 0) * deliveryMultiplier;
  };

  const calculateTotalPrice = () => {
    return (calculateBasePrice() + calculateDeliveryPrice()).toFixed(2);
  };

   // coffee plan validation
  const isValidPlan = () => {
    const requiredPreferences = ["coffeeType", "beanType", "quantity", "deliveries"];

    if (preferences.coffeeType && preferences.coffeeType !== "capsule") {
      requiredPreferences.push("grindOption");
    }

    return requiredPreferences.every((preference) => {
      return preferences[preference as keyof Preferences];
    });
  };

  return (
    <CoffeePlanContext.Provider
      value={{
        preferences,
        openSections,
        isGrindOptionDisabled,
        onToggleSection,
        onOptionSelect,
        onMenuClick,
        resetPreferences,
        calculateBasePrice,
        calculateDeliveryPrice,
        calculateTotalPrice,
        isValidPlan,
      }}
    >
      {children}
    </CoffeePlanContext.Provider>
  );
};
