import { ReactNode } from "react";

interface ArticleContentProps {
  children: ReactNode;
}

const ArticleContent = ({ children }: ArticleContentProps) => {
  return (
    <div
      className={`relative col-span-4 flex flex-col space-y-8 bg-white rounded-t-xl 
      border border-gray-200 md:col-span-3`}
    >
      {children}
    </div>
  );
};

export default ArticleContent;
