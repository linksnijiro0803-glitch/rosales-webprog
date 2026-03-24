import Button from '../components/Button';
import weekndImg from '../assets/images/weeknd.jpg';
import waffleImg from '../assets/images/waffle.jpg';
import stockholmImg from '../assets/images/stockholm.jpg';
import jaguarImg from '../assets/images/jaguar.jpg';

const ArticlePage = () => {

  return (
<div className="flex w-full flex-col gap-6">
<section className="border-y-2 border-[#724B39] bg-[#162127] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
<p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">

          Articles
</p>
<h1 className="max-w-xl text-3xl font-bold leading-tight text-[#CF9D7B] sm:text-4xl">

          Featured articles with stronger visuals and content
</h1>
<p className="mt-4 max-w-lg text-sm leading-7 text-[#CF9D7B] sm:text-base">

          This page presents article cards using images and improved write-ups.

          Each card is designed to look cleaner and more informative so the

          layout feels more like a complete website instead of a plain

          placeholder page.
</p>
<div className="mt-6">
<Button to="/">Back Home</Button>
</div>
</section>
<section className="border-y-2 border-[#724B39] bg-[#162127] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
<div className="mb-6">
<p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">

            Featured Articles
</p>
<h2 className="mt-2 text-2xl font-semibold text-[#CF9D7B]">

            Article card grid
</h2>
</div>
<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
<article className="overflow-hidden rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B]">
<img

              src={weekndImg}

              alt="Website planning"

              className="h-52 w-full object-cover"

            />
<div className="p-4">
<p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">

                Article 01
</p>
<h3 className="mt-2 text-lg font-semibold text-[#162127]">

                The importance of clean web layout
</h3>
<p className="mt-3 text-sm leading-6 text-[#3A3534]">

                A clean layout helps users focus on the content without feeling

                overwhelmed. Proper spacing, readable typography, and balanced

                sections make a webpage easier to understand and more effective.
</p>
</div>
</article>
<article className="overflow-hidden rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B]">
<img

              src={waffleImg}

              alt="People discussing ideas"

              className="h-52 w-full object-cover"

            />
<div className="p-4">
<p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">

                Article 02
</p>
<h3 className="mt-2 text-lg font-semibold text-[#162127]">

                How visuals improve user attention
</h3>
<p className="mt-3 text-sm leading-6 text-[#3A3534]">

                Images make a page feel more engaging and help support written

                information. When used properly, visuals guide attention, add

                meaning, and improve the overall presentation of the content.
</p>
</div>
</article>
<article className="overflow-hidden rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B]">
<img

              src={stockholmImg}

              alt="Writing notes"

              className="h-52 w-full object-cover"

            />
<div className="p-4">
<p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">

                Article 03
</p>
<h3 className="mt-2 text-lg font-semibold text-[#162127]">

                Why content write-ups matter
</h3>
<p className="mt-3 text-sm leading-6 text-[#3A3534]">

                Write-ups give purpose to a page. Instead of short placeholder

                text, expanded content helps explain ideas more clearly and makes

                the website feel more realistic and polished.
</p>
</div>
</article>
<article className="overflow-hidden rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B]">
<img

              src={jaguarImg}

              alt="Computer setup"

              className="h-52 w-full object-cover"

            />
<div className="p-4">
<p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">

                Article 04
</p>
<h3 className="mt-2 text-lg font-semibold text-[#162127]">

                Building a presentable multi-page website
</h3>
<p className="mt-3 text-sm leading-6 text-[#3A3534]">

                A multi-page website becomes stronger when each page has a

                consistent style, useful content, and supporting visuals.

                Consistency helps tie the entire design together in a more

                professional way.
</p>
</div>
</article>
</div>
</section>
</div>

  );

};

export default ArticlePage;
 