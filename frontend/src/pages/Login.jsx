import React from "react";
import {
  Mail,
  Lock,
  Mountain,
  ArrowRight,
  Chrome,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Login = () => {
  const { theme } = useTheme();

  const dark = theme === "dark";

  return (
    <div
      className={`min-h-screen pt-24 transition-all duration-300 ${
        dark
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div
          className={`grid lg:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl ${
            dark
              ? "bg-slate-800 border border-slate-700"
              : "bg-white"
          }`}
        >

          {/* Left Side */}

          <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-green-600 to-emerald-700 text-white p-12">

            <Mountain size={60} />

            <h1 className="text-5xl font-bold mt-8">
              Welcome Back
            </h1>

            <p className="mt-6 text-lg leading-8 text-green-100">
              Sign in to continue your Himalayan adventures with Traventure.
              Manage bookings, explore treks, save your favourite destinations
              and plan your next unforgettable journey.
            </p>

            <div className="mt-10 space-y-4">

              <div>✅ Access your bookings</div>

              <div>✅ Save favourite treks</div>

              <div>✅ Faster checkout</div>

              <div>✅ Exclusive travel offers</div>

            </div>

          </div>

          {/* Right Side */}

          <div className="p-8 md:p-14">

            <h2
              className={`text-4xl font-bold ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              Login
            </h2>

            <p
              className={`mt-3 ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Sign in to your Traventure account.
            </p>

            <form className="mt-10 space-y-6">

              <div className="relative">

                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full rounded-xl pl-12 pr-4 py-4 border outline-none ${
                    dark
                      ? "bg-slate-900 border-slate-700 text-white"
                      : "border-gray-300"
                  }`}
                />

              </div>

              <div className="relative">

                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className={`w-full rounded-xl pl-12 pr-4 py-4 border outline-none ${
                    dark
                      ? "bg-slate-900 border-slate-700 text-white"
                      : "border-gray-300"
                  }`}
                />

              </div>

              <div className="flex items-center justify-between text-sm">

                <label
                  className={`flex items-center gap-2 ${
                    dark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <input type="checkbox" />
                  Remember Me
                </label>

                <button
                  type="button"
                  className="text-green-600 hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

              <button
                className="w-full bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2"
              >
                Login
                <ArrowRight size={18} />
              </button>

            </form>

            {/* Divider */}

            <div className="flex items-center my-8">

              <div className="flex-1 h-px bg-gray-300"></div>

              <span
                className={`px-4 ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                OR
              </span>

              <div className="flex-1 h-px bg-gray-300"></div>

            </div>

            {/* Social Buttons */}

            <div className="space-y-4">

              <button
                className={`w-full border rounded-xl py-3 flex justify-center items-center gap-3 transition ${
                  dark
                    ? "border-slate-600 hover:bg-slate-700 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Chrome size={20} />
                Continue with Google
              </button>

              <button
                className={`w-full border rounded-xl py-3 flex justify-center items-center gap-3 transition ${
                  dark
                    ? "border-slate-600 hover:bg-slate-700 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Facebook size={20} />
                Continue with Facebook
              </button>

            </div>

            <p
              className={`mt-10 text-center ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-green-600 font-semibold hover:underline"
              >
                Create Account
              </Link>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;