import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.jpg';

const links = [

  { label: 'Home', to: '/' },

  { label: 'About', to: '/about' },

  { label: 'Articles', to: '/articles' },

];

const NavBar = () => {

  return (
<header className="fixed inset-x-0 top-0 z-50 bg-[#E8D2C1]/90 px-4 py-3 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border-2 border-[#724B39] bg-[#162127] px-4 py-3 shadow-[8px_8px_0_#724B39] sm:px-6">

        {/* LOGO + TITLE */}
<NavLink to="/" className="flex items-center gap-3">
<div className="h-11 w-11 overflow-hidden rounded-xl border-2 border-[#CF9D7B] bg-[#CF9D7B]">
<img

              src={logo}

              alt="BrightLine Logo"

              className="h-full w-full object-contain"

            />
</div>
<div className="space-y-0.5">
<p className="text-base font-bold uppercase tracking-[0.18em] text-[#CF9D7B]">

              BrightLine
</p>
<p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#CF9D7B]/70">

              Studio
</p>
</div>
</NavLink>

        {/* NAV LINKS */}
<nav className="hidden items-center gap-2 md:flex">

  <div className="hidden items-center gap-2 md:flex">
  <NavLink
    to="/auth/signin"
    className="rounded-xl border-2 border-[#724B39] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#CF9D7B] transition hover:bg-[#724B39] hover:text-white"
  >
    Sign In
  </NavLink>

  <NavLink
    to="/auth/signup"
    className="rounded-xl border-2 border-[#CF9D7B] bg-[#CF9D7B] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#162127] transition hover:opacity-90"
  >
    Sign Up
  </NavLink>
</div>

          {links.map((link) => (
<NavLink

              key={link.to}

              to={link.to}

              end={link.to === '/'}

              className={({ isActive }) =>

                [

                  'rounded-xl border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',

                  isActive

                    ? 'border-[#CF9D7B] bg-[#CF9D7B] text-[#162127]'

                    : 'border-transparent text-[#CF9D7B] hover:border-[#724B39] hover:bg-[#724B39] hover:text-white',

                ].join(' ')

              }
>

              {link.label}
</NavLink>

          ))}
</nav>
</div>
</header>

  );

};

export default NavBar;
