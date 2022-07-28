export type SidebarItem = {
  header?: boolean;
  link?: string;
  text: string;
  collapsible?: boolean;
};

export type SidebarSection = {
  collapsible?: boolean;
  text: string;
  link?: string;
  items: SidebarItem[];
};

export type Sidebar = {
  leftSidebar: {
    sections: SidebarSection[];
  };
  rightSidebar: {
    headerMaxDepth: number;
    headerMinDepth: number;
  };
};

export type NavBar = {
  title: string;
  logo: {
    alt: string;
    src: string;
    srcDark?: string;
    width: number;
    height: number;
  };
  items: NavbarItem[];
};

export type NavBarInteriorLinkItem = {
  to: string;
  label: string;
  position: "right" | "left";
};

export type NavbarExteriorLinkItem = {
  href: string;
  className: string;
  position: "right" | "left";

  // If src is present, label will not be displayed, it will display the icon and the label as aria-label
  label: string;
  icon?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export type NavbarItem = NavBarInteriorLinkItem | NavbarExteriorLinkItem;

export const isInteriorLink = (
  item: NavbarItem
): item is NavBarInteriorLinkItem => {
  if ("to" in item) return true;
  return false;
};

export const isExteriorLink = (
  item: NavbarItem
): item is NavbarExteriorLinkItem => {
  if ("href" in item) return true;
  return false;
};
