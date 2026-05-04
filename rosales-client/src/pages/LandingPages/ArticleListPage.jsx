import Button from "../../components/Button.jsx";
import ArticleList from "../../components/ArticleList.jsx";
import articles from "../../data/article-content.js";

const ArticleListPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-8 sm:px-6 lg:px-8">
      <section className="rounded-3xl border-2 border-[#724B39] bg-[#162127] p-6 text-[#CF9D7B] shadow-[10px_10px_0_#724B39] sm:p-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#CF9D7B]/70">
          Articles
        </p>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Featured articles in a custom card collection
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#CF9D7B]/85 sm:text-base">
              A curated section for article thumbnails, titles, short descriptions,
              and one clear action per card.
            </p>
          </div>

          <div className="lg:text-right">
            <Button to="/" variant="secondary">
              Back Home
            </Button>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border-2 border-[#724B39] bg-[#F1DDCC] p-5 sm:p-6">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">
            Featured Articles
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#162127]">
            Article card grid
          </h2>
        </div>

        <ArticleList articles={articles} />
      </section>
    </div>
  );
};

export default ArticleListPage;
