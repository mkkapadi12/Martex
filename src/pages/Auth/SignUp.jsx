import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/Auth/login.jpg";
import loginwrap from "../../assets/images/Auth/login-wrapper.jpg";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 py-[70px] sm::py-[80px] bg-no-repeat bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className="grid w-full max-w-6xl grid-cols-1 overflow-hidden bg-scroll bg-right bg-cover shadow-lg rounded-2xl md:grid-cols-2"
        style={{
          backgroundImage: `url(${loginwrap})`,
        }}
      >
        {/* Left Section */}

        <div className="flex flex-col justify-center p-6 bg-white md:p-12 ">
          <button className="flex items-center justify-center gap-3 py-3 font-semibold transition border border-gray-400 rounded-lg hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            <span>Sign in with Google</span>
          </button>

          <div className="flex items-center gap-4 my-6 text-base text-gray-500">
            <span className="flex-1 h-px bg-gray-200" />
            Or, sign in with your email
            <span className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block mb-3 text-base font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-3 text-base font-semibold text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-3 text-base font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="min 8 characters"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-500 -translate-y-1/2 right-4 top-1/2"
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
            </div>

            <div className="text-left">
              <span className="text-sm text-gray-600 sm:text-base">
                By clicking “Create Account”, you agree to our{" "}
                <a href="#" className="font-semibold text-[#6c757d] underline">
                  Terms
                </a>{" "}
                and that you have read our{" "}
                <a href="#" className="font-semibold text-[#6c757d] underline">
                  Privacy Policy
                </a>
              </span>
            </div>

            <button className="w-full py-3 font-semibold text-white transition-all bg-blue-500 rounded-lg duration-400 hover:bg-blue-700">
              Create Account
            </button>
          </form>

          <p className="mt-6 text-base text-center text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="pl-1 font-semibold text-blue-600 underline hover:text-[#454a4e] transition-all duration-300"
            >
              Login
            </Link>
          </p>
        </div>
        {/* Right Section */}

        <div className="relative flex-col justify-start hidden gap-8 p-16 text-white md:flex">
          {/* Logo */}
          <span className="text-base font-semibold uppercase">
            Start for free
          </span>

          {/* Content */}
          <div>
            <h2 className="text-6xl font-bold leading-tight">
              Create
              <br /> an account
            </h2>
            <p className="max-w-md mt-4 text-xl text-white/80">
              Integer congue sagittis and velna augue egestas magna suscipit
              purus aliquam
            </p>
          </div>

          {/* Copyright */}
          <div className="absolute right-16 bottom-16">
            <p className="text-base text-white/70">
              © 2025 Martex. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
