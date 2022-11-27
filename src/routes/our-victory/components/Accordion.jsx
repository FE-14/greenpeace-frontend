import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {data.map((item) => (
        <AccordionItem {...item} />
      ))}
    </div>
  );
}
