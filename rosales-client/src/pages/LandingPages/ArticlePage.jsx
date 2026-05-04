import { useParams } from "react-router-dom";
import Button from "../../components/Button.jsx";
import articles from "../../data/article-content.js";

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);

  if (!article) {
    return (
      <div className="mx-auto w-full max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <section className="rounded-3xl border-2 border-[#724B39] bg-[#162127] p-8 text-center text-[#CF9D7B]">
          <h1 className="text-3xl font-bold">Article Not Found</h1>
          <p className="mt-3 text-[#CF9D7B]/80">
            The article you are trying to open does not exist.
          </p>
          <Button to="/articles" className="mt-6">
            Back to Articles
          </Button>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pb-8 sm:px-6 lg:px-8">
      <section className="rounded-3xl border-2 border-[#724B39] bg-[#162127] p-6 text-[#CF9D7B] shadow-[10px_10px_0_#724B39] sm:p-8">
        <div className="mb-5">
          <Button to="/articles" variant="secondary">
            Back to Articles
          </Button>
        </div>

        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#CF9D7B]/70">
          Full Article
        </p>

        <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          {article.title}
        </h1>

        <p className="mt-2 text-sm text-[#CF9D7B]/75">
          {article.name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </p>
      </section>

      <section className="rounded-3xl border-2 border-[#724B39] bg-[#F1DDCC] p-5 sm:p-6">
        <div className="overflow-hidden rounded-2xl border-2 border-[#724B39] bg-[#CF9D7B]">
          <img
            src={article.img}
            alt={article.title}
            className="h-72 w-full object-cover sm:h-96"
          />

          <div className="space-y-5 p-5 text-base leading-8 text-[#3A3534] sm:p-8">
            {article.content.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="px-5 pb-6 sm:px-8">
            <Button to="/articles">Back to Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;
