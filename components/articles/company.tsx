import { Article } from "@components/article-components/article";
import Link from "next/link";

type CompanyProps = {
  image: string;
};

const Company = ({ image }: CompanyProps) => {
  return (
    <Article>
      <Article.Content>
        <Article.Image image={image} />
        <Article.Body>
          <Article.Para>
            Today, I'm excited to announce that I'm starting a company around{" "}
            <Article.Link href="https://dub.co">Dub.co</Article.Link>.
          </Article.Para>
          <Article.Para>
            We're building the link management infrastructure for you to create
            marketing campaigns, link sharing features, and referral programs.
          </Article.Para>
          <div className="not-prose my-5 rounded-xl border border-gray-200 bg-white transition-colors hover:border-gray-700">
            <Link href="https://github.com/dubinc/dub" className="block p-6">
              <div className="flex items-start justify-between">
                <>
                  <p className="text-2xl font-normal">
                    dubinc/<span className="font-bold text-gray-800">dub</span>
                  </p>
                  <p className="mt-2 text-sm font-normal text-gray-500">
                    Open-source link management infrastructure.
                  </p>
                </>
              </div>
            </Link>
          </div>
          <Article.Para>
            Here's how it all started – and where we're going.
          </Article.Para>
          <Article.Title title="The Early Days" />
          <Article.Para>
            Back in 2022, I{" "}
            <Article.Link href="introducing-dub">built Dub.co</Article.Link> as
            a side project to solve an internal need we had at{" "}
            <Article.Link href="https://vercel.com/">Vercel</Article.Link> –
            sharing links on social platforms (X, LinkedIn, and iMessage) with
            beautiful Open Graph images to improve click-through rates.
          </Article.Para>
          <Article.Para>
            The product was fully open-source and quickly gained a lot of
            traction – it reached #1 on{" "}
            <Article.Link href="https://news.ycombinator.com/item?id=32939407">
              Hacker News
            </Article.Link>{" "}
            and was even{" "}
            <Article.Link href="https://twitter.com/steventey/status/1574393362991685635">
              trending on GitHub
            </Article.Link>{" "}
            for a little while.
          </Article.Para>
          <Article.Para>And we're just getting started.</Article.Para>
        </Article.Body>
      </Article.Content>
      <Article.Author />
    </Article>
  );
};

export default Company;
