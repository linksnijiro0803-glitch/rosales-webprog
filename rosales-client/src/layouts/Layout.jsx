import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';

import Footer from '../components/Footer';

const Layout = () => {

  return (
<div className="min-h-screen bg-[#E8D2C1] text-[#162127] flex flex-col">

      {/* Navbar */}
<NavBar />

      {/* Main Content */}
<main className="flex-grow pt-24">
<Outlet />
</main>

      {/* Footer */}
<Footer />
</div>

  );

};

export default Layout;
 
