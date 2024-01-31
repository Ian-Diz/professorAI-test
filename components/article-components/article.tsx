import { ReactNode } from "react";
import ArticleContent from "./article-content";
import ArticleImage from "./article-image";
import ArticleAuthor from "./article-author";
import ArticleBody from "./article-body";
import ArticleTitle from "./article-title";
import ArticleLink from "./article-link";
import ArticlePara from "./article-para";
import ArticleButtonLink from "./article-button-link";
import ArticleBodyImage from "./article-body-image";

interface ArticleProps {
  children: ReactNode;
}

export const Article = ({ children }: ArticleProps) => {
  return (
    <div className="relative">
      <div
        className={`absolute top-52 h-[calc(100%-13rem)] w-full border border-gray-200 
      bg-white/50 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur-lg`}
      />
      <div className="mx-auto w-full max-w-screen-xl lg:px-20 grid grid-cols-4 gap-5 px-0 pt-10 lg:gap-10">
        {children}
      </div>
    </div>
  );
};

Article.Content = ArticleContent;
Article.Image = ArticleImage;
Article.Author = ArticleAuthor;
Article.Body = ArticleBody;
Article.Title = ArticleTitle;
Article.Link = ArticleLink;
Article.Para = ArticlePara;
Article.ButtonLink = ArticleButtonLink;
Article.BodyImage = ArticleBodyImage;
