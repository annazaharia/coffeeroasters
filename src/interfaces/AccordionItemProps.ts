import { Section } from "./Section";

export interface AccordionItemProps {
  section: Section;
  isOpen: boolean;
  isDisabled?: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}
