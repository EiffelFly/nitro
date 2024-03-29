/**@type {import("./src/types").Site} */
const site = {
  title: "Documentation",
  description: "Your website description.",
  defaultLanguage: "en_US",
  openGraph: {
    image: {
      src: "",
      alt: "Nitro is a marketplace for your documentation",
    },
    twitter: "nitro",
  },
};

/**@type {import("./src/types").Sidebar} */
const sidebar = {
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

/**@type {import("./src/types").NavBar} */
const navbar = {
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

/**@type {import("./src/types").Config} */

const config = {
  site,
  sidebar,
  navbar,
};

export default config;
