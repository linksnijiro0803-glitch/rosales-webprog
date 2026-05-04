import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-[#724B39] bg-[#CF9D7B] px-4 py-3 text-sm text-[#162127] outline-none transition placeholder:text-[#724B39] focus:border-[#162127] focus:bg-[#e6bfa3]';

const actionButtonClassName =
  'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-[#CF9D7B] sm:text-4xl">
        Sign In
      </h1>

      <p className="mt-3 text-sm leading-6 text-[#CF9D7B]">
        Access your account and continue your experience.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label className="text-sm font-medium text-[#CF9D7B]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className={inputClasses}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#CF9D7B]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs text-[#724B39]">
            Minimum 8 characters with numbers and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-[#CF9D7B]">
            <input type="checkbox" className="accent-[#CF9D7B]" />
            Remember me
          </label>

          <button
            type="button"
            className="text-[#724B39] hover:text-[#CF9D7B]"
          >
            Forgot Password?
          </button>
        </div>

        <Button type="button" variant="primary" className={actionButtonClassName}>
          SIGN IN
        </Button>
      </form>

      <div className="mt-8 border-t border-[#724B39] pt-6 text-sm text-[#CF9D7B]">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-white hover:text-[#CF9D7B]">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
