import { baseStyles } from "../styles/base";
import cn from "clsx";
import { AstroPropHeader } from "../types/astro";
import { Sidebar } from "../nitro.config";
import TableOfContent from "./TableOfContent";

export type RightSidebarProps = {
  headers: AstroPropHeader[];
  rightSidebar: Sidebar["rightSidebar"];
};

const RightSidebar = ({ headers, rightSidebar }: RightSidebarProps) => {
  return (
    <nav
      className={cn("w-full sticky", baseStyles.sidebar.topOffset)}
      aria-labelledby="grid-right"
    >
      <div className="h-full overflow-auto">
        <TableOfContent
          headers={headers}
          headerMinDepth={rightSidebar.headerMinDepth}
          headerMaxDepth={rightSidebar.headerMaxDepth}
        />
      </div>
    </nav>
  );
};

export default RightSidebar;
