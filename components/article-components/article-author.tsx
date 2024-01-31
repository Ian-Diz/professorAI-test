import { profilePicture } from "@utils/consts";
import Link from "next/link";

const ArticleAuthor = () => {
  return (
    <div className="sticky top-20 col-span-1 mt-48 hidden flex-col divide-y divide-gray-200 self-start sm:flex">
      <div className="flex flex-col space-y-4 py-5">
        <p className="text-sm text-gray-500"> Written by</p>
        <Link
          href="https://twitter.com/steventey"
          className="group flex items-center space-x-3"
          target="_blank"
        >
          <img
            src={profilePicture}
            className="rounded-full transition-all group-hover:brightness-90 blur-0 w-10 h-10"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-gray-700">Steven Tey</p>
            <p className="text-sm text-gray-500">@steventey</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleAuthor;
