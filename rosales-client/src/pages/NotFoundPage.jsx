import { Link } from 'react-router-dom';
import catlaughImg from '/src/assets/images/catlaugh.jpg';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#162127] text-[#CF9D7B] px-4 text-center">
      
      {/* Image */}
      <div className="mb-6">
        <img
          src={catlaughImg}
          alt="Page not found"
          className="w-40 md:w-52 h-auto rounded-lg shadow-lg opacity-90"
        />
      </div>

      <h1 className="text-6xl font-bold mb-2">404</h1>

      <p className="text-lg mb-6 max-w-md">
        Oops! The page you are looking for does not exist or has been moved HAHAHAHAHAHAHAHA.
      </p>

      <Link
        to="/"
        className="rounded-md bg-[#724B39] px-6 py-3 font-semibold hover:bg-[#CF9D7B] hover:text-[#162127] transition-colors"
      >
        Back to Home
      </Link>

    </div>
  );
};

export default NotFoundPage;