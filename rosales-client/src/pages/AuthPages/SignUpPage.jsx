import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-[#724B39] bg-[#CF9D7B] px-4 py-3 text-sm text-[#162127] outline-none transition placeholder:text-[#724B39] focus:border-[#162127] focus:bg-[#e6bfa3]';

const actionButtonClassName =
  'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-[#CF9D7B] sm:text-4xl">
        Sign Up
      </h1>

      <p className="mt-3 text-sm leading-6 text-[#CF9D7B]">
        Create your account and start your experience.
      </p>

      <form className="mt-8 space-y-5">
        
        {/* Name Fields */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-[#CF9D7B]">
              First Name
            </label>
            <input
              type="text"
              placeholder="First name"
              className={inputClasses}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#CF9D7B]">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last name"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-[#CF9D7B]">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className={inputClasses}
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-[#CF9D7B]">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs text-[#724B39]">
            Use at least 8 characters with letters, numbers, and symbols.
          </p>
        </div>

        {/* Confirm Password (important UX) */}
        <div>
          <label className="text-sm font-medium text-[#CF9D7B]">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className={inputClasses}
          />
        </div>

        {/* Submit */}
        <Button type="submit" variant="primary" className={actionButtonClassName}>
          CREATE ACCOUNT
        </Button>
      </form>

      {/* Footer */}
      <div className="mt-8 border-t border-[#724B39] pt-6 text-sm text-[#CF9D7B]">
        Already have an account?{' '}
        <Link to="/signin" className="font-semibold text-white hover:text-[#CF9D7B]">
          Sign In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;