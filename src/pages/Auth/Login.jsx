import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/images/logo-white.png";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/Auth/login.jpg";
import loginwrap from "../../assets/images/Auth/login-wrapper.jpg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 bg-fixed bg-center bg-cover py-[60px] bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden bg-white shadow-lg rounded-2xl md:grid-cols-2">
        {/* Left Section */}
        <div
          className="relative flex-col justify-start hidden gap-8 p-16 text-white md:flex"
          style={{
            backgroundImage: `url(${loginwrap})`,
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-auto h-10 rounded" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Welcome <br /> back to Martex
            </h2>
            <p className="max-w-md mt-4 text-xl text-white/80">
              Integer congue sagittis and velna augue egestas magna suscipit
              purus aliquam
            </p>
          </div>

          {/* Copyright */}
          <div className="absolute left-16 bottom-16 ">
            <p className="text-base text-white/70">
              © 2025 Martex. All Rights Reserved
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center p-6 md:p-12">
          <button className="flex items-center justify-center gap-3 py-3 font-semibold transition border border-gray-400 rounded-lg hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            <span>Sign in with Google</span>
          </button>

          <div className="flex items-center gap-4 my-6 text-base text-martex-dark_text">
            <span className="flex-1 h-px bg-gray-200" />
            Or, sign in with your email
            <span className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block mb-2 text-base font-semibold text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-base font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="* * * * * * * *"
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
              <Link
                to="/reset-password"
                className="text-base text-martex-dark_blue hover:underline"
              >
                Forgot your password?
              </Link>
            </div>

            <button className="w-full py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-martex-light_blue hover:bg-martex-dark_blue">
              Log In
            </button>
          </form>

          <p className="mt-6 text-base text-center text-martex-dark_text">
            Don't have an account?
            <Link
              to="/signup"
              className="pl-1 font-semibold underline transition-all duration-300 text-martex-light_blue hover:text-martex-dark_text"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
