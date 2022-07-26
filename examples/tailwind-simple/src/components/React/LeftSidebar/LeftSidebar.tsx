import { useMemo } from "react";
import { Sidebar, SidebarSection } from "../../../nitro.config";
import cn from "clsx";
import Section from "./Section";
import { baseStyles } from "../../../styles/base";

export type LeftSidebarProps = {
  leftSidebar: Sidebar["leftSidebar"];
  currentPagePath: string;
};

const LeftSidebar = ({ leftSidebar, currentPagePath }: LeftSidebarProps) => {
  const sidebarSections = useMemo(
    () =>
      leftSidebar.items.reduce<SidebarSection[]>((col, item, i) => {
        // If the first item is not a section header, create a new container section.
        if (i === 0) {
          if (!item.header) {
            const pesudoSection = { text: "" };
            col.push({ ...pesudoSection, children: [], collapsible: true });
          }
        }
        if (item.header) {
          col.push({
            ...item,
            children: [],
            collapsible: item.collapsible ?? false,
          });
        } else {
          col[col.length - 1].children.push(item);
        }
        return col;
      }, []),
    [leftSidebar.items]
  );

  return (
    <nav
      className={cn(
        "sticky w-full flex flex-col",
        baseStyles.sidebar.topOffset
      )}
      aria-labelledby="grid-right"
    >
      {sidebarSections.map((section) => (
        <div key={section.text} className="w-full border-t">
          <Section
            items={section.children}
            text={section.text}
            collapsible={section.collapsible}
            currentPagePath={currentPagePath}
          />
        </div>
      ))}
    </nav>
  );
};

export default LeftSidebar;
