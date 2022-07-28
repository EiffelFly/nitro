<<<<<<< HEAD
import { Config, NavBar, Sidebar, Site } from "./types";

const site: Site = {
=======
import { NavBar, Sidebar, Site } from "./types";

<<<<<<< HEAD
export const site: Site = {
>>>>>>> b057f6a (feat: add Site type)
=======
const site: Site = {
>>>>>>> e0a1855 (refactor: refactor how we export the CONFIG)
  title: "Documentation",
  description: "Your website description.",
  defaultLanguage: "en_US",
  openGraph: {
    image: {
<<<<<<< HEAD
      src: "",
      alt: "Nitro is a marketplace for your documentation",
    },
    twitter: "nitro",
=======
      src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
      alt:
        "astro logo on a starry expanse of space," +
        " with a purple saturn-like planet floating in the right foreground",
    },
    twitter: "astrodotbuild",
>>>>>>> b057f6a (feat: add Site type)
  },
};

const sidebar: Sidebar = {
  leftSidebar: {
    sections: [
      {
        text: "Intro",
        collapsible: true,
        items: [{ text: "Page-1", link: "page-1" }],
      },
      {
        text: "Quick start",
        collapsible: false,
        items: [
          { text: "Page 7", link: "page-7" },
          { text: "Page 8", link: "page-8" },
        ],
      },
    ],
  },
  rightSidebar: {
    headerMaxDepth: 3,
    headerMinDepth: 0,
  },
};

const navbar: NavBar = {
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
        alt: "github icon",
      },
      position: "right",
      label: "github",
    },
    {
      position: "left",
      to: "/blog",
      label: "Blog",
    },
  ],
};

<<<<<<< HEAD
const config: Config = {
  site,
  sidebar,
  navbar,
};

export default config;
=======
export const CONFIG = {
  site,
  navbar,
  sidebar,
};
>>>>>>> e0a1855 (refactor: refactor how we export the CONFIG)
