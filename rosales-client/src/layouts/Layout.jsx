import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';

import Footer from '../components/Footer';

const Layout = () => {

  return (
<div className="min-h-screen bg-[#162127] text-[#0C1519] flex flex-col">

      {/* Navbar */}
<NavBar />

      {/* Main Content */}
<main className="flex-grow pt-20">
<Outlet />
</main>

      {/* Footer */}
<Footer />
</div>

  );

};

export default Layout;
 