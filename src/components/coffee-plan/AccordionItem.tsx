import { AccordionItemProps } from "../../interfaces/AccordionItemProps";

export default function AccordionItem({
  section,
  isOpen,
  isDisabled = false,
  onToggle,
  children,
}: AccordionItemProps) {
  return (
    <div
      className={`accordion-item ${isDisabled ? "disabled" : ""}`}
      id={section.id}
    >
      <h2 className="accordion-header">
        <button
          className={`accordion-button 
            ${!isOpen ? "collapsed" : ""} 
            ${isDisabled ? "disabled" : ""}`}
          type="button"
          onClick={() => !isDisabled && onToggle()}
          disabled={isDisabled}
        >
          {section.title}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
        <div className="accordion-body">
          <div className="row">{children}</div>
        </div>
      </div>
    </div>
  );
}
