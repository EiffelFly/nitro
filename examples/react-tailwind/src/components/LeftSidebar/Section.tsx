import { useState } from "react";
import cn from "clsx";
import { SidebarElement } from "../../../../tailwind-simple/src/nitro.config";
import IconMinusSquare from "./IconMinusSquare";
import IconPlusSquare from "./IconPlusSquare";

export type SectionProps = {
  text: string;
  items: SidebarElement[];
  collapsible?: boolean;
  currentPagePath: string;
};

const Section = ({
  text,
  items,
  collapsible,
  currentPagePath,
}: SectionProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const baseIconStyle =
    "absolute w-4 h-4 top-2 bottom-2 right-2 fill-slate-500";

  const toggle = () => {
    if (collapsible) {
      setCollapsed((prev) => !prev);
    }
  };

  return (
    <section
      className={cn("flex flex-col w-full pt-2", collapsed ? "pb-2" : "pb-6")}
    >
      <div
        onClick={toggle}
        role={collapsible ? "button" : undefined}
        className={cn("flex flex-row", { "mb-4": !collapsed })}
      >
        <h2 className="my-auto flex-1 font-semibold text-sm">{text}</h2>
        {collapsible ? (
          <div className="relative w-8 h-8">
            <IconMinusSquare
              styleName={
                collapsed
                  ? cn(baseIconStyle, "opacity-0")
                  : cn(baseIconStyle, "opacity-1")
              }
            />
            <IconPlusSquare
              styleName={
                collapsed
                  ? cn(baseIconStyle, "opacity-1")
                  : cn(baseIconStyle, "opacity-0")
              }
            />
          </div>
        ) : (
          <div className="relative w-8 h-8" />
        )}
      </div>
      <div
        className={cn("flex flex-col gap-y-2", {
          hidden: collapsed,
        })}
      >
        {items.map((item) => (
          <a
            className={cn(
              "font-normal text-sm hover:text-gray-800",
              item.link === currentPagePath.slice(1)
                ? "text-gray-800"
                : "text-gray-400"
            )}
            href={item.link}
          >
            {item.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Section;
