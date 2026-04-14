import Button from "../../components/Button";

import espressoImg from '../../assets/images/espresso.jpg';
import carsImg from '../../assets/images/cars.jpg';
import booksImg from '../../assets/images/books.jpg';
import dropsImg from '../../assets/images/drops.jpg';
import coffeeImg from '../../assets/images/coffee.jpg';

const AboutPage = () => {

  return (
<div className="flex w-full flex-col gap-6">
<section className="border-y-2 border-[#724B39] bg-[#162127] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
<div className="grid gap-8 lg:grid-cols-2 lg:items-center">
<div className="overflow-hidden rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B]">
<img

              src={coffeeImg}

              alt="Team discussion"

              className="h-150 min-h-[120px] w-full object-cover"

            />
</div>
<div>
<p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">

              About Page
</p>
<h1 className="max-w-xl text-3xl font-bold leading-tight text-[#CF9D7B] sm:text-4xl">

              A website that values creativity, clarity, and strong presentation
</h1>
<p className="mt-4 max-w-lg text-sm leading-7 text-[#CF9D7B] sm:text-base">

              The About page introduces the purpose behind BrightLine Studio. It

              was designed to present a clean and visually appealing layout while

              also delivering informative content. By combining images and

              expanded write-ups, the page becomes more complete and suitable for

              a proper website presentation.
</p>
<p className="mt-4 max-w-lg text-sm leading-7 text-[#724B39] sm:text-base">

              This page also shows how a website can express its identity through

              simple design choices. The structure remains straightforward, but

              the content is more detailed, making the page more engaging and

              professional to look at.
</p>
<div className="mt-6 flex flex-wrap gap-3">
<Button to="/" variant="primary">

                Back Home
</Button>
<Button to="/articles">Open Articles</Button>
</div>
</div>
</div>
</section>
<section className="border-y-2 border-[#724B39] bg-[#162127] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
<div className="mb-6">
<p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">

            Overview
</p>
<h2 className="mt-2 text-2xl font-semibold text-[#CF9D7B]">

            Core ideas behind the page
</h2>
</div>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-5">
<p className="text-2xl font-bold text-[#162127]">01</p>
<p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">

              Identity
</p>
</div>
<div className="rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-5">
<p className="text-2xl font-bold text-[#162127]">02</p>
<p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">

              Purpose
</p>
</div>
<div className="rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-5">
<p className="text-2xl font-bold text-[#162127]">03</p>
<p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">

              Content Areas
</p>
</div>
<div className="rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-5">
<p className="text-2xl font-bold text-[#162127]">04</p>
<p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">

              Visual Blocks
</p>
</div>
</div>
</section>
<section className="border-y-2 border-[#724B39] bg-[#162127] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
<div>
<p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">

              Write-Ups
</p>
<h2 className="mt-2 text-2xl font-semibold text-[#CF9D7B]">

              Expanded content sections
</h2>
<div className="mt-6 space-y-4">
<article className="rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-5">
<h3 className="text-lg font-semibold text-[#162127]">

                  Our Mission
</h3>
<p className="mt-3 text-sm leading-6 text-[#3A3534]">

                  Our mission is to present content in a way that is simple,

                  organized, and visually appealing. A well-designed page should

                  not only look attractive but also guide readers clearly from

                  one section to another.
</p>
</article>
<article className="rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-5">
<h3 className="text-lg font-semibold text-[#162127]">

                  Our Vision
</h3>
<p className="mt-3 text-sm leading-6 text-[#3A3534]">

                  We aim to create layouts that are easy to understand and

                  pleasant to read. By improving page content and adding suitable

                  images, the website becomes more engaging for visitors and more

                  effective as a presentation output.
</p>
</article>
<article className="rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-5">
<h3 className="text-lg font-semibold text-[#162127]">

                  Why This Matters
</h3>
<p className="mt-3 text-sm leading-6 text-[#3A3534]">

                  A page with stronger content and visuals feels more complete

                  than a plain wireframe. These improvements help demonstrate how

                  design and writing can support each other in building a better

                  user experience.
</p>
</article>
</div>
</div>
<div className="rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-5">
<p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">

              Image Gallery
</p>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<img

                src={dropsImg}

                alt="Office workspace"

                className="aspect-square w-full rounded-[1.25rem] object-cover"

              />
<img

                src={booksImg}

                alt="Creative Team"

                className="aspect-square w-full rounded-[1.25rem] object-cover"

              />
<img

                src={carsImg}

                alt="Planning and ideas"

                className="aspect-square w-full rounded-[1.25rem] object-cover"

              />
<img

                src={espressoImg}

                alt="Modern setup"

                className="aspect-square w-full rounded-[1.25rem] object-cover"

              />
</div>
</div>
</div>
</section>
</div>

  );

};

export default AboutPage;
 