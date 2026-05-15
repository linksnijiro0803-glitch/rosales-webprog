import Button from "../../components/Button";

import espressoImg from '../../assets/images/espresso.jpg';
import carsImg from '../../assets/images/cars.jpg';
import booksImg from '../../assets/images/books.jpg';
import dropsImg from '../../assets/images/drops.jpg';
import coffeeImg from '../../assets/images/coffee.jpg';

const overviewItems = ['Identity', 'Purpose', 'Content Areas', 'Visual Blocks'];

const writeUps = [
  {
    title: 'Our Mission',
    text: 'Our mission is to present content in a way that is simple, organized, and visually appealing. A well-designed page should guide readers clearly from one section to another.',
  },
  {
    title: 'Our Vision',
    text: 'We aim to create layouts that are easy to understand and pleasant to read. By improving page content and adding suitable images, the website becomes more engaging for visitors.',
  },
  {
    title: 'Why This Matters',
    text: 'A page with stronger content and visuals feels more complete than a plain wireframe. These improvements help show how design and writing can support each other.',
  },
];

const galleryImages = [
  { src: dropsImg, alt: 'Office workspace' },
  { src: booksImg, alt: 'Creative Team' },
  { src: carsImg, alt: 'Planning and ideas' },
  { src: espressoImg, alt: 'Modern setup' },
];

const AboutPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-8 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] shadow-[10px_10px_0_#724B39]">
          <img
            src={coffeeImg}
            alt="Team discussion"
            className="h-[440px] w-full object-cover"
          />
        </div>

        <div className="rounded-3xl border-2 border-[#724B39] bg-[#162127] p-6 text-[#CF9D7B] sm:p-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#CF9D7B]/70">
            About Page
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            A website that values creativity, clarity, and strong presentation
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#CF9D7B]/90 sm:text-base">
            The About page introduces the purpose behind BrightLine Studio. It
            presents a clean and visually appealing layout while also delivering
            informative content.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#CF9D7B]/75 sm:text-base">
            This page also shows how a website can express its identity through
            simple design choices and useful content.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/" variant="secondary">
              Back Home
            </Button>
            <Button to="/articles">Open Articles</Button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewItems.map((item, index) => (
          <div
            key={item}
            className="rounded-2xl border-2 border-[#724B39] bg-[#CF9D7B] p-5"
          >
            <p className="text-2xl font-bold text-[#162127]">
              {String(index + 1).padStart(2, '0')}
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">
              {item}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border-2 border-[#724B39] bg-[#162127] p-6 text-[#CF9D7B]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#CF9D7B]/70">
            Write-Ups
          </p>
          <h2 className="mt-2 text-2xl font-bold">Expanded content sections</h2>
          <div className="mt-6 space-y-4">
            {writeUps.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#724B39] bg-[#CF9D7B] p-5 text-[#162127]"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#3A3534]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border-2 border-[#724B39] bg-[#F1DDCC] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">
            Image Gallery
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {galleryImages.map((image, index) => (
              <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className={[
                  'w-full rounded-2xl border-2 border-[#724B39] object-cover',
                  index === 0 || index === 3 ? 'h-64' : 'h-44',
                ].join(' ')}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
