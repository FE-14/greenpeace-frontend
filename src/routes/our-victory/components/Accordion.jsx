import { useState } from "react";

import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    return setClicked(index);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {data.map((item, index) => (
        <AccordionItem
          {...item}
          key={item.year}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
        />
      ))}
    </div>
  );
}
