interface ArticleBodyImageProps {
  image: string;
  figcaption: string;
}

const ArticleBodyImage = ({ image, figcaption }: ArticleBodyImageProps) => {
  return (
    <figure className="not-prose flex flex-col items-center justify-center space-y-3">
      <img
        src={image}
        alt="Image with something"
        className="rounded-lg border border-gray-200 blur-0"
      />
      <figcaption className="text-center text-sm italic text-gray-500">
        {figcaption}
      </figcaption>
    </figure>
  );
};

export default ArticleBodyImage;
