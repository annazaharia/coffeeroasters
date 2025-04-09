import { useEffect } from "react";

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  useEffect(() => {
    document.title = `${title} | CoffeeRoasters`;
  }, [title]);

  return null;
}
