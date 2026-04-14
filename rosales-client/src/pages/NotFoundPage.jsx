import { Link } from 'react-router-dom';

const NotFoundPage = () => {

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-[#162127] text-[#CF9D7B] px-4">
<h1 className="text-6xl font-bold mb-4">404</h1>
<p className="text-xl mb-6 text-center">

        Oops! The page you are looking for does not exist.
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
 