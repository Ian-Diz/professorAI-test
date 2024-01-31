interface ArticleTitleProps {
  title: string;
}

const ArticleTitle = ({ title }: ArticleTitleProps) => {
  return (
    <h2 className="text-2xl underline-offset-4 hover:underline mt-12 mb-1">
      {title}
    </h2>
  );
};

export default ArticleTitle;
