import { Preferences } from "../../interfaces/Preferences";
import { Sections } from "../../data/Sections";
import { useCoffeePlanContext } from "../../contexts/CoffeePlanContext";

export default function SummaryText({ className }: { className?: string }) {
  const { preferences } = useCoffeePlanContext();

  const getSummaryText = (key: keyof Preferences) => {
    const placeholder = <span className="text-primary">_____</span>;
    const section = Sections.find((section) => section.id === key);

    if (!section || !preferences[key]) {
      return placeholder;
    }

    const option = section.options.find((option) => option.id === preferences[key]);

    if (!option) {
      return placeholder;
    }

    return <span className="text-primary">{option.title}</span>;
  };

  return (
    <p className={className}>
      "I drink my coffee as {getSummaryText("coffeeType")}, with a {getSummaryText("beanType")} type of bean.{" "}
      {getSummaryText("quantity")}
      {preferences.coffeeType !== "capsule" ? <> ground ala {getSummaryText("grindOption")}</> : null}, sent to me{" "}
      {getSummaryText("deliveries")}."
    </p>
  );
}
