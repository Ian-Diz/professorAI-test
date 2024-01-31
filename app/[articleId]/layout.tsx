import { ReactNode } from "react";

type ArticleLayout = {
  children: ReactNode;
};

const ArticleLayout = ({ children }: ArticleLayout) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default ArticleLayout;
