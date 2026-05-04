import { Link } from "react-router-dom";

import logo from '../assets/images/logo.jpg';

const Footer = () => {

  return (
<footer className="mt-20 bg-[#162127] text-[#CF9D7B]">

      {/* Main Grid */}
<div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.25fr_1fr_1fr_1fr]">

        {/* Logo / Brand */}
<div className="flex flex-col gap-2 md:col-span-1">
<img src={logo} alt="Logo" className="h-16 w-16 rounded-2xl border-2 border-[#CF9D7B] bg-[#CF9D7B]" />
<p className="max-w-xs text-sm leading-relaxed text-[#CF9D7B]/80">

           BrightLine Studio presents simple pages with clearer visual structure, stronger imagery, and organized content.
</p>
</div>

        {/* Articles */}
<div className="md:col-span-1">
<h3 className="font-semibold mb-4 text-white">Articles</h3>
<ul className="space-y-2 text-sm text-[#CF9D7B]/80">
<li><Link to="/articles" className="hover:text-white transition-colors">All Articles</Link></li>
<li><Link to="/articles/react-props" className="hover:text-white transition-colors">React Props</Link></li>
<li><Link to="/articles/react-hooks" className="hover:text-white transition-colors">React Hooks</Link></li>
</ul>
</div>

        {/* Company */}
<div className="md:col-span-1">
<h3 className="font-semibold mb-4 text-white">Company</h3>
<ul className="space-y-2 text-sm text-[#CF9D7B]/80">
<li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
<li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
<li><a href="#" className="hover:text-white transition-colors">News</a></li>
</ul>
</div>

        {/* Socials */}
<div className="md:col-span-1">
<h3 className="font-semibold mb-4 text-white">Follow Us</h3>
<ul className="space-y-2 text-sm text-[#CF9D7B]/80">
<li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
<li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
<li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
<li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
</ul>
</div>
</div>

      {/* Bottom Bar */}
<div className="border-t border-[#724B39] text-center py-4 text-xs text-[#CF9D7B]/70">

        © {new Date().getFullYear()} My Website. All Rights Reserved.
</div>
</footer>

  );

};

export default Footer;
 
