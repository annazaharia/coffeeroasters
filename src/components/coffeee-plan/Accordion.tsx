import { usePlanContext } from "../../contexts/PlanContext";
import { Sections } from "../../data/Sections";
import { Preferences } from "../../interfaces/Preferences";
import { Section } from "../../interfaces/Section";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const { preferences, openSections, isGrindOptionDisabled, onToggleSection, onOptionSelect } = usePlanContext();

  return (
    <div className="accordion" id="coffeePlanAccordion">
      {Sections.map((section: Section) => (
        <AccordionItem
          key={section.id}
          section={section}
          isOpen={openSections.includes(section.id)}
          isDisabled={section.id === "grindOption" && isGrindOptionDisabled}
          onToggle={() => onToggleSection(section.id)}
        >
          {section.options.map((option) => (
            <div key={option.id} className="col-4">
              <div
                className={`option-card ${
                  preferences[section.id as keyof Preferences] === option.id ? "selected" : ""
                } ${section.id === "grindOption" && isGrindOptionDisabled ? "disabled" : ""}`}
                onClick={() => onOptionSelect(section.id, option.id)}
              >
                <h3 className="h4">{option.title}</h3>
                <p>{option.description}</p>
              </div>
            </div>
          ))}
        </AccordionItem>
      ))}
    </div>
  );
}
