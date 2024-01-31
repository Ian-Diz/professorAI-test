type ArticleImageProps = {
  image: string;
};

const ArticleImage = ({ image }: ArticleImageProps) => {
  return (
    <img
      src={image}
      className="aspect-[1200/630] rounded-t-xl object-cover blur-0"
    />
  );
};

export default ArticleImage;
