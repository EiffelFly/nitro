import { Frontmatter } from "./frontmatter";

export type AstroPropHeader = {
  depth: number;
  slug: string;
  text: string;
};

export type AstroPropContent = {
  astro: {
    headers: AstroPropHeader[];
    source: string;
    html: string;
  };
} & Frontmatter;
