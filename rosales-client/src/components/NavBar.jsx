import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.jpg';

const links = [

  { label: 'Home', to: '/' },

  { label: 'About', to: '/about' },

  { label: 'Articles', to: '/articles' },

];

const NavBar = () => {

  return (
<header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#724B39] bg-[#162127]/95 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

        {/* LOGO + TITLE */}
<NavLink to="/" className="flex items-center gap-3">
<div className="h-12 w-12 overflow-hidden rounded-2xl border-2 border-[#CF9D7B] bg-[#CF9D7B]">
<img

              src={logo}

              alt="BrightLine Logo"

              className="h-full w-full object-contain"

            />
</div>
<div className="space-y-0.5">
<p className="text-lg font-bold uppercase tracking-[0.2em] text-[#CF9D7B]">

              BrightLine
</p>
<p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#724B39]">

              Studio
</p>
</div>
</NavLink>

        {/* NAV LINKS */}
<nav className="hidden items-center gap-2 md:flex">

          {links.map((link) => (
<NavLink

              key={link.to}

              to={link.to}

              end={link.to === '/'}

              className={({ isActive }) =>

                [

                  'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',

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