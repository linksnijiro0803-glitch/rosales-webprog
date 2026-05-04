import { Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-[#162127] text-[#CF9D7B]">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b-2 border-[#724B39] bg-[#162127] p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:p-16">
          <div className="w-full max-w-md rounded-3xl border-2 border-[#724B39] bg-[#CF9D7B] p-8 text-[#162127] sm:p-10">
            <div className="mb-8 h-20 w-20 overflow-hidden rounded-2xl border-2 border-[#724B39] bg-[#162127]">
              <img
                src={logo}
                alt="BrightLine Studio"
                className="h-full w-full object-contain"
              />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#724B39]">
              BrightLine Studio
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight">
              Account access pages for the laboratory activity
            </h1>
            <p className="mt-4 text-sm leading-7 text-[#3A3534]">
              These screens are designed as static sign in and sign up pages.
              Authentication behavior is not connected yet.
            </p>
          </div>
        </div>

        <main className="flex items-center bg-[#162127] px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
