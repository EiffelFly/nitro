/**
 *
 * Every time you add another frontmatter data key into markdown, we encourage you put the type here.
 * You could get some helps from IDE or get more error info from build failed message.
 */

export type Frontmatter = {
  title: string;
  description: string;
  lang?: string;
  date?: string;
  draft?: boolean;
  author?: string;
  feature?: {
    src: string;
    alt: string;
  };
};
