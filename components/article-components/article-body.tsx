import { ReactNode } from "react";

interface ArticleBodyProps {
  children: ReactNode;
}

const ArticleBody = ({ children }: ArticleBodyProps) => {
  return (
    <article
      className={`prose prose-gray max-w-none transition-all prose-headings:relative prose-headings:scroll-mt-20 
      prose-headings:font-display prose-headings:font-bold px-5 pb-20 pt--1 sm:px-10`}
      data-mdx-container="true"
    >
      {children}
    </article>
  );
};

export default ArticleBody;
