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
