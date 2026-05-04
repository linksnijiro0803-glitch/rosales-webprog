import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article
          key={article.name}
          className="group overflow-hidden rounded-2xl border-2 border-[#724B39] bg-[#CF9D7B] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#724B39]"
        >
          <img
            src={article.img}
            alt={article.title}
            className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
          />

          <div className="p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">
              Article {String(index + 1).padStart(2, '0')}
            </p>

            <h3 className="mt-2 text-lg font-semibold text-[#162127]">
              {article.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#3A3534]">
              {article.content[0].substring(0, 150)}...
            </p>

            <Link to={`/articles/${article.name}`}>
              <Button className="mt-4">Read More</Button>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
