import { useParams } from "react-router-dom";
import Button from "../../components/Button.jsx";
import articles from "../../assets/article-content.js";

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);

  if (!article) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-zinc-900">
              Article Not Found
            </h1>
            <p className="mt-3 text-zinc-600">
              The article you are trying to open does not exist.
            </p>
            <Button to="/articles" className="mt-6">
              Back to Articles
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4">
            <Button to="/articles">Back to Articles</Button>
          </div>

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Full Article
          </p>

          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            {article.title}
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            {article.name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </p>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-zinc-900 bg-white p-5 shadow-sm sm:p-8">
          <img
            src={article.img}
            alt={article.title}
            className="mb-8 h-72 w-full rounded-2xl border-2 border-zinc-900 object-cover sm:h-96"
          />

          <div className="space-y-5 text-base leading-8 text-zinc-700">
            {article.content.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <Button to="/articles">Back to Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;