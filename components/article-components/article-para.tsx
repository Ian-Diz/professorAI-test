import { ReactNode } from "react";

interface ArticleParaProps {
  children: ReactNode;
}

const ArticlePara = ({ children }: ArticleParaProps) => {
  return <p className="my-5">{children}</p>;
};

export default ArticlePara;
