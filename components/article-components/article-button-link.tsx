import Link from "next/link";

interface ArticleButtonLinkProps {
  text: string;
  href: string;
}

const ArticleButtonLink = ({ text, href }: ArticleButtonLinkProps) => {
  return (
    <div className="not-prose grid gap-2 rounded-xl border border-gray-200 bg-white p-4">
      <Link
        href={href}
        target="_blank"
        className="group flex items-center justify-between rounded-lg px-2 py-3 transition-colors hover:bg-purple-100 active:bg-purple-200 sm:px-4"
      >
        <h3 className="text-sm font-medium text-gray-600 group-hover:text-purple-600 sm:text-base">
          {text}
        </h3>
      </Link>
    </div>
  );
};

export default ArticleButtonLink;
