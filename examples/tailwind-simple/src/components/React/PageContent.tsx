import { FC } from "react";

export type PageContentProps = {
  title: string;
};

const PageContent: FC<PageContentProps> = ({ title }) => {
  return (
    <article id="article" className="p-0 w-full h-full flex flex-col">
      <section className="prose mb-16">
        <h1 className="content-title" id="overview">
          {title}
        </h1>
        <slot></slot>
      </section>
    </article>
  );
};

export default PageContent;
