import { useCoffeePlanContext } from "../../contexts/CoffeePlanContext";
import { Sections } from "../../data/Sections";

export default function SideMenu() {
  const { openSections, isGrindOptionDisabled, onMenuClick } = useCoffeePlanContext();

  return (
    <ol className="nav flex-column sticky-top d-none d-lg-block">
      {Sections.map((section, index) => (
        <li key={section.id}>
          <a
            className={`nav-link ${section.id === "coffeeType" || openSections.includes(section.id) ? "active" : ""} 
            ${section.id === "grindOption" && isGrindOptionDisabled ? "disabled" : ""}`}
            href={`#${section.id}`}
            onClick={() => {
              onMenuClick(section.id);
            }}
          >
            <span>0{index + 1}</span> {section.menu}
          </a>
        </li>
      ))}
    </ol>
  );
}
