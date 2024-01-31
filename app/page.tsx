import ArticleCard from "@components/article-card";
import { uniqueId } from "lodash";
import { articles } from "@utils/article-data";
import PageTitle from "@components/page-title";

const Home = () => {
  return (
    <>
      <PageTitle title="Blog" desc="Latest news and updates from Dub." />

      <div className="flex flex-col justify-between">
        <div
          className={`min-h-[50vh] border border-gray-200 bg-white/50
          shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur-lg`}
        >
          <main className={`flex flex-center flex-col mx-auto`}>
            <section
              className={`mx-auto w-full grid grid-cols-1 py-10 px-2.5 gap-4 
              md:grid-cols-3
              lg:px-20
              xl:max-w-xlPageContent`}
            >
              {articles.map((cardData) => (
                <ArticleCard articleData={cardData} key={uniqueId()} />
              ))}
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
