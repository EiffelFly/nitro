export const SITE = {
  title: "Documentation",
  description: "Your website description.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export type Sidebar = {
  leftSidebar: {
    items: SidebarElement[];
  };
  rightSidebar: {
    headerMaxDepth: number;
    headerMinDepth: number;
  };
};

export type SidebarElement = {
  header?: boolean;
  link?: string;
  text: string;
  collapsible?: boolean;
};

export type SidebarSection = {
  text: string;
  collapsible: boolean;
  children: SidebarElement[];
};

export const SIDEBAR: Sidebar = {
  leftSidebar: {
    items: [
      { header: true, text: "Intro", collapsible: true },
      { text: "Page 1", link: "page-1" },
      { text: "Page 2", link: "page-2" },
      { text: "Page 3", link: "page-3" },
      { text: "Page 4", link: "page-4" },
      { text: "Page 5", link: "page-5" },
      { text: "Page 6", link: "page-6" },
      { header: true, text: "Quick start", collapsible: false },
      { text: "Page 7", link: "page-7" },
      { text: "Page 8", link: "page-8" },
    ],
  },
  rightSidebar: {
    headerMaxDepth: 3,
    headerMinDepth: 0,
  },
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

  // If src is present, label will not be displayed, it will display the icon and the aria-label
  label?: string;
  icon?: {
    src: string;
    width: number;
    height: number;
  };
  "aria-label"?: string;
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

export const NAVBAR: NavBar = {
  title: "Nitro",
  logo: {
    src: "/logo.svg",
    width: 40,
    height: 30,
    alt: "Nitro logo",
  },
  items: [
    {
      href: "https://github.com/EiffelFly/nitro",
      className: "github-social-link",
      icon: {
        src: "/github.svg",
        width: 24,
        height: 24,
      },
      position: "right",
    },
    {
      position: "left",
      to: "/blog",
      label: "Blog",
    },
  ],
};
