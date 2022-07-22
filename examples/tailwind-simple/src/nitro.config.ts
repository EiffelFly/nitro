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
};

export type SidebarSection = {
  text: string;
  children: SidebarElement[];
};

export const SIDEBAR: SidebarElement[] = [
  { header: true, text: "Intro" },
  { text: "Page 1", link: "page-1" },
  { text: "Page 2", link: "page-2" },
  { header: true, text: "Quick start" },
];
