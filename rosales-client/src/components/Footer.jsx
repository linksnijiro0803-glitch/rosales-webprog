import { Link } from "react-router-dom";

import logo from '../assets/images/logo.jpg';

const Footer = () => {

  return (
<footer className="bg-[#724B39] text-white mt-20">

      {/* Main Grid */}
<div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo / Brand */}
<div className="flex flex-col gap-2 md:col-span-1">
<img src={logo} alt="Logo" className="h-16 w-16 rounded-md" />
<p className="text-sm text-white/90 leading-relaxed">

           BWAHAHAHAHAHAHAHAH
</p>
</div>

        {/* Articles */}
<div className="md:col-span-1">
<h3 className="font-semibold mb-4 text-white/95">Articles</h3>
<ul className="space-y-2 text-sm text-white/90">
<li><Link to="/articles" className="hover:text-black transition-colors">All Articles</Link></li>
<li><Link to="/articles/react-props" className="hover:text-black transition-colors">React Props</Link></li>
<li><Link to="/articles/react-hooks" className="hover:text-black transition-colors">React Hooks</Link></li>
</ul>
</div>

        {/* Company */}
<div className="md:col-span-1">
<h3 className="font-semibold mb-4 text-white/95">Company</h3>
<ul className="space-y-2 text-sm text-white/90">
<li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
<li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
<li><a href="#" className="hover:text-black transition-colors">News</a></li>
</ul>
</div>

        {/* Socials */}
<div className="md:col-span-1">
<h3 className="font-semibold mb-4 text-white/95">Follow Us</h3>
<ul className="space-y-2 text-sm text-white/90">
<li><a href="#" className="hover:text-black transition-colors">Facebook</a></li>
<li><a href="#" className="hover:text-black transition-colors">Twitter (X)</a></li>
<li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
<li><a href="#" className="hover:text-black transition-colors">YouTube</a></li>
</ul>
</div>
</div>

      {/* Bottom Bar */}
<div className="border-t border-[#5a382a] text-center py-4 text-xs text-white/80">

        © {new Date().getFullYear()} My Website. All Rights Reserved.
</div>
</footer>

  );

};

export default Footer;
 