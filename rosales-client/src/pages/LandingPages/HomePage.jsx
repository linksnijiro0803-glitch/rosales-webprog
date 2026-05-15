import Button from '../../components/Button';
import digicamImg from '../../assets/images/digicam.jpg';
import cinemaImg from '../../assets/images/cinema.jpg';
import framesImg from '../../assets/images/frames.jpg';
import paperbagImg from '../../assets/images/paperbag.jpg';

const highlights = [
  ['03', 'Main Pages'],
  ['01', 'Custom Logo'],
  ['06', 'Image Sections'],
  ['100%', 'Organized Layout'],
];

const features = [
  {
    title: 'Creative Design',
    image: paperbagImg,
    alt: 'paperbag',
    text: 'Good design helps a website feel professional and easy to use. Clean spacing and balanced sections improve readability and flow.',
  },
  {
    title: 'Meaningful Content',
    image: framesImg,
    alt: 'frames',
    text: 'Expanded write-ups help explain ideas clearly and make the page feel more complete and informative.',
  },
  {
    title: 'User-Friendly Layout',
    image: cinemaImg,
    alt: 'cinema',
    text: 'A clear layout makes navigation easier and improves the overall user experience.',
  },
];

const HomePage = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-8 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex min-h-[420px] flex-col justify-between rounded-3xl border-2 border-[#724B39] bg-[#162127] p-6 text-[#CF9D7B] shadow-[10px_10px_0_#724B39] sm:p-8">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#CF9D7B]/70">
              Home Page
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
              Welcome to BrightLine Studio
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#CF9D7B]/90 sm:text-base">
              BrightLine Studio is a simple and creative website layout that presents
              clean design ideas, meaningful content, and visual inspiration.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#CF9D7B]/75 sm:text-base">
              The goal of this page is to show how a homepage can be attractive
              and informative without becoming too complicated.
            </p>
          </div>

          <div className="mt-8">
            <Button to="/about" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
          <div className="order-2 grid gap-4 sm:order-1">
            {highlights.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border-2 border-[#724B39] bg-[#CF9D7B] p-5"
              >
                <p className="text-3xl font-bold text-[#162127]">{value}</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="order-1 overflow-hidden rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] sm:order-2">
            <img
              src={digicamImg}
              alt="digicam"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border-2 border-[#724B39] bg-[#F1DDCC] p-5 sm:p-6">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">
              Featured Sections
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#162127]">
              Simple content cards with images
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="overflow-hidden rounded-2xl border-2 border-[#724B39] bg-[#CF9D7B]"
            >
              <img
                src={feature.image}
                alt={feature.alt}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#162127]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#3A3534]">
                  {feature.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
