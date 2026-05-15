import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { createUser } from "../../services/UserService";

const inputClasses =
  "mt-2 w-full rounded-xl border border-[#724B39] bg-[#CF9D7B] px-4 py-3 text-sm text-[#162127] outline-none transition placeholder:text-[#724B39] focus:border-[#162127] focus:bg-[#e6bfa3]";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    contactNumber: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    address: "",
    type: "editor",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    try {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age,
        gender: formData.gender,
        contactNumber: formData.contactNumber,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        address: formData.address,
        type: formData.type,
      };

      await createUser(userData);

      setSuccess("Account created successfully! Redirecting to sign in...");

      setTimeout(() => {
        navigate("/auth/signin");
      }, 1200);
    } catch (err) {
      console.error("Sign up failed:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Sign up failed. Please try again.");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-[#CF9D7B] sm:text-4xl">
        Sign Up
      </h1>

      <p className="mt-3 text-sm leading-6 text-[#CF9D7B]">
        Create your account and start your experience.
      </p>

      {error && (
        <div className="mt-5 rounded-xl border border-red-500 bg-red-100 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {success && (
        <div className="mt-5 rounded-xl border border-green-500 bg-green-100 px-4 py-3 text-sm text-green-700">
          {success}
        </div>
      )}

      <form onSubmit={handleSignUp} className="mt-8 space-y-5">
        {/* Name Fields */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-[#CF9D7B]">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#CF9D7B]">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-[#CF9D7B]">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-[#CF9D7B]">Age</label>
            <input
              type="text"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#CF9D7B]">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={inputClasses}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[#CF9D7B]">
            Contact Number
          </label>
          <input
            type="text"
            name="contactNumber"
            placeholder="Enter your contact number"
            value={formData.contactNumber}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#CF9D7B]">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#CF9D7B]">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Choose a username"
            value={formData.username}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-[#CF9D7B]">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            className={inputClasses}
            required
          />
          <p className="mt-2 text-xs text-[#724B39]">
            Use at least 8 characters with letters, numbers, and symbols.
          </p>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm font-medium text-[#CF9D7B]">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        {/* Submit */}
        <Button type="submit" variant="primary" className={actionButtonClassName}>
          CREATE ACCOUNT
        </Button>
      </form>

      {/* Footer */}
      <div className="mt-8 border-t border-[#724B39] pt-6 text-sm text-[#CF9D7B]">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-semibold text-white hover:text-[#CF9D7B]"
        >
          Sign In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
