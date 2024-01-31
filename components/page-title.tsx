type PageTitleProps = {
  title: string;
  desc: string;
};

const PageTitle = ({ title, desc }: PageTitleProps) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
      <div className="max-w-[640px] py-16">
        <h1 className="font-display text-3xl font-extrabold text-gray-700 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-xl text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default PageTitle;
