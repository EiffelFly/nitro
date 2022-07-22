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

export const SIDEBAR: SidebarElement[] = [
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
];
