import Link from "next/link";
import { ReactNode } from "react";

interface ArticleLinkProps {
  children: ReactNode;
  href: string;
}

const ArticleLink = ({ children, href }: ArticleLinkProps) => {
  return (
    <Link
      target="_blank"
      href={href}
      className="font-medium text-gray-500 underline-offset-4 hover:text-black"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};

export default ArticleLink;
