import React from "react";
import Link from "next/link";

type ArticleCardProps = {
  articleData: {
    image: string;
    title: string;
    desc: string;
    pfp: string;
    date: string;
    link: string;
  };
};

const ArticleCard = ({ articleData }: ArticleCardProps) => {
  return (
    <Link
      href={articleData.link}
      className="border border-gray-200 transition-all hover:shadow-lg rounded-lg h-fit"
    >
      <img
        src={articleData.image}
        alt="Article cover image"
        className="rounded-t-xl object-cover blur-0"
      />
      <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-6 h-[202px]">
        <h1 className="line-clamp-2 font-display text-xl font-bold text-gray-700">
          {articleData.title}
        </h1>
        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {articleData.desc}
        </p>
        <div className="flex items-center space-x-2 mt-auto mb-0  ">
          <img
            src={articleData.pfp}
            alt="Author's profile picture"
            className="rounded-full w-9 h-9"
          />
          <p className="text-sm text-gray-500">{articleData.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
