import { Section } from "../interfaces/Section";

export const Sections: Section[] = [
  {
    id: "coffeeType",
    title: "How do you drink your coffee?",
    menu: "Preferences",
    options: [
      {
        id: "capsule",
        title: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: "filter",
        title: "Filter",
        description: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: "espresso",
        title: "Espresso",
        description: "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: "beanType",
    title: "What type of coffee?",
    menu: "Bean Type",
    options: [
      {
        id: "singleOrigin",
        title: "Single Origin",
        description: "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: "decaf",
        title: "Decaf",
        description: "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: "blended",
        title: "Blended",
        description: "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: "quantity",
    title: "How much would you like?",
    menu: "Quantity",
    options: [
      {
        id: "250g",
        title: "250g",
        description: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        id: "500g",
        title: "500g",
        description: "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        id: "1000g",
        title: "1000g",
        description: "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: "grindOption",
    title: "Want us to grind them?",
    menu: "Grind Option",
    options: [
      {
        id: "wholebean",
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        id: "filter",
        title: "Filter",
        description: "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        id: "cafetiere",
        title: "Cafetiére",
        description: "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: "deliveries",
    title: "How often should we deliver?",
    menu: "Deliveries",
    options: [
      {
        id: "everyWeek",
        title: "Every week",
        description: "$7.20 per shipment. Includes free first-class shipping.",
        price: 7.2,
      },
      {
        id: "everyTwoWeeks",
        title: "Every 2 weeks",
        description: "$9.60 per shipment. Includes free priority shipping.",
        price: 9.6,
      },
      {
        id: "everyMonth",
        title: "Every month",
        description: "$12.00 per shipment. Includes free priority shipping.",
        price: 12,
      },
    ],
  },
];
