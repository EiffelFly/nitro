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
  header?: boolean;
  link?: string;
  text: string;
}[];

export const SIDEBAR: Sidebar = [
  { text: "", header: true },
  { text: "Section Header", header: true },
  { text: "Introduction", link: "en/introduction" },
  { text: "Page 2", link: "en/page-2" },
  { text: "Page 3", link: "en/page-3" },

  { text: "Another Section", header: true },
  { text: "Page 4", link: "en/page-4" },
];
