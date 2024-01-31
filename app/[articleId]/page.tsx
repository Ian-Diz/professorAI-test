"use client";
import { articles } from "@utils/article-data";
import PageTitle from "@components/page-title";
import { useEffect, useState } from "react";
import PricingUpdates from "@components/articles/pricing-updates";
import Company from "@components/articles/company";
import IntroducingNewAnalytics from "@components/articles/introducing-new-analytics";

type ArticleProps = {
  params: { articleId: string };
};

const Article = ({ params }: ArticleProps) => {
  const [articleData, setArticleData] = useState({
    image: "",
    title: "",
    desc: "",
    pfp: "",
    date: "",
    link: "",
  });

  useEffect(() => {
    for (let i = 0; i < articles.length; ++i) {
      if (articles[i].link === params.articleId) {
        console.log(articles[i].link);
        setArticleData(articles[i]);
        return;
      } else {
        continue;
      }
    }
  }, []);

  return (
    <div>
      <PageTitle title={articleData.title} desc={articleData.desc} />
      {articleData.link === "new-pricing" ? (
        <PricingUpdates image={articleData.image} />
      ) : null}
      {articleData.link === "company" ? (
        <Company image={articleData.image} />
      ) : null}
      {articleData.link === "introducing-new-analytics" ? (
        <IntroducingNewAnalytics image={articleData.image} />
      ) : null}
    </div>
  );
};

export default Article;
