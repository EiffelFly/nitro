import { FC, useMemo } from "react";
import { SidebarElement, SidebarSection } from "../../../nitro.config";
import cn from "clsx";
import Section from "./Section";
import { baseStyles } from "../../../styles/base";

export type LeftSidebarProps = {
  elements: SidebarElement[];
  currentPagePath: string;
};

const LeftSidebar: FC<LeftSidebarProps> = ({ elements, currentPagePath }) => {
  const sidebarSections = useMemo(
    () =>
      elements.reduce<SidebarSection[]>((col, item, i) => {
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
    [elements]
  );

  return (
    <nav
      className={cn(
        "sticky w-full flex flex-col",
        baseStyles.sidebar.topOffset
      )}
    >
      {sidebarSections.map((section) => (
        <div className="w-full border-t">
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
