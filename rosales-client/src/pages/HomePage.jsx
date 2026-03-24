import Button from '../components/Button';
import digicamImg from '../assets/images/digicam.jpg';
import cinemaImg from '../assets/images/cinema.jpg';
import framesImg from '../assets/images/frames.jpg';
import paperbagImg from '../assets/images/paperbag.jpg';
 
const HomePage = () => {
 
  return (
<div className="flex w-full flex-col gap-6">
 
      {/* HERO SECTION */}
<section className="border-y-2 border-[#724B39] bg-[#162127] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
<div className="grid gap-8 lg:grid-cols-2 lg:items-center">
<div>
<p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">
 
              Home Page
</p>
<h1 className="max-w-xl text-3xl font-bold leading-tight text-[#CF9D7B] sm:text-4xl">
 
              Welcome to BrightLine Studio
</h1>
<p className="mt-4 max-w-lg text-sm leading-7 text-[#CF9D7B] sm:text-base">
 
              BrightLine Studio is a simple and creative website layout that presents
 
              clean design ideas, meaningful content, and visual inspiration. This
 
              homepage introduces visitors to a modern and organized interface where
 
              images and write-ups work together to create a more engaging browsing
 
              experience.
</p>
<p className="mt-4 max-w-lg text-sm leading-7 text-[#724B39] sm:text-base">
 
              The goal of this page is to show how a homepage can be both attractive
 
              and informative without becoming too complicated. It highlights design,
 
              creativity, and clarity through a balanced structure and readable
 
              content sections.
</p>
<div className="mt-6">
<Button to="/about" variant="primary">
 
                Learn More
</Button>
</div>
</div>
 
          {/* IMAGE */}
<div className="h-[280px] overflow-hidden rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B]">
<img
 
              src={digicamImg}
 
              alt="digicam"
 
              className="h-full w-full object-cover"
 
            />
</div>
</div>
</section>
 
      {/* KPI / INFO SECTION */}
<section className="border-y-2 border-[#724B39] bg-[#162127] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
<div className="mb-6">
<p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">
 
            Highlights
</p>
<h2 className="mt-2 text-2xl font-semibold text-[#CF9D7B]">
 
            What this website offers
</h2>
</div>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-5">
<p className="text-4xl font-bold text-[#162127]">03</p>
<p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">
 
              Main Pages
</p>
</div>
<div className="rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-5">
<p className="text-4xl font-bold text-[#162127]">01</p>
<p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">
 
              Custom Logo
</p>
</div>
<div className="rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-5">
<p className="text-4xl font-bold text-[#162127]">06</p>
<p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">
 
              Image Sections
</p>
</div>
<div className="rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-5">
<p className="text-4xl font-bold text-[#162127]">100%</p>
<p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">
 
              Organized Layout
</p>
</div>
</div>
</section>
 
      {/* FEATURE CARDS */}
<section className="border-y-2 border-[#724B39] bg-[#162127] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
<div className="mb-6">
<p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">
 
            Featured Sections
</p>
<h2 className="mt-2 text-2xl font-semibold text-[#CF9D7B]">
 
            Simple content cards with images
</h2>
</div>
<div className="grid gap-4 md:grid-cols-3">
<article className="overflow-hidden rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B]">
<img
 
              src={paperbagImg}
 
              alt="paperbag"
 
              className="h-56 w-full object-cover"
 
            />
<div className="p-4">
<h3 className="text-lg font-semibold text-[#162127]">
 
                Creative Design
</h3>
<p className="mt-3 text-sm leading-6 text-[#3A3534]">
 
                Good design helps a website feel professional and easy to use.
 
                Clean spacing and balanced sections improve readability and flow.
</p>
</div>
</article>
<article className="overflow-hidden rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B]">
<img
 
              src={framesImg}
 
              alt="frames"
 
              className="h-56 w-full object-cover"
 
            />
<div className="p-4">
<h3 className="text-lg font-semibold text-[#162127]">
 
                Meaningful Content
</h3>
<p className="mt-3 text-sm leading-6 text-[#3A3534]">
 
                Expanded write-ups help explain ideas clearly and make the page
 
                feel more complete and informative.
</p>
</div>
</article>
<article className="overflow-hidden rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B]">
<img
 
              src={cinemaImg}
 
              alt="cinema"
 
              className="h-56 w-full object-cover"
 
            />
<div className="p-4">
<h3 className="text-lg font-semibold text-[#162127]">
 
                User-Friendly Layout
</h3>
<p className="mt-3 text-sm leading-6 text-[#3A3534]">
 
                A clear layout makes navigation easier and improves the overall
 
                user experience.
</p>
</div>
</article>
</div>
</section>
</div>
 
  );
 
};
 
export default HomePage;
 
 