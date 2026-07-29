import React from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Mountain,
  ArrowRight,
  Chrome,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Signup = () => {
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
              Join Traventure
            </h1>

            <p className="mt-6 text-lg leading-8 text-green-100">
              Start your journey with Traventure and explore the majestic
              Himalayas. Create your account to book treks, manage your trips,
              receive exclusive offers, and enjoy seamless adventure planning.
            </p>

            <div className="mt-10 space-y-4">

              <div>🏔️ Book Premium Treks</div>

              <div>🚐 Pickup & Drop from Delhi</div>

              <div>🏕️ Hotel & Camping Included</div>

              <div>⭐ Exclusive Member Discounts</div>

            </div>

          </div>

          {/* Right Side */}

          <div className="p-8 md:p-14">

            <h2
              className={`text-4xl font-bold ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              Create Account
            </h2>

            <p
              className={`mt-3 ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Join thousands of adventure lovers.
            </p>

            <form className="mt-8 space-y-5">

              <div className="relative">

                <User
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  className={`w-full rounded-xl pl-12 pr-4 py-4 border outline-none ${
                    dark
                      ? "bg-slate-900 border-slate-700 text-white"
                      : "border-gray-300"
                  }`}
                />

              </div>

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

                <Phone
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
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

              <div className="relative">

                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={`w-full rounded-xl pl-12 pr-4 py-4 border outline-none ${
                    dark
                      ? "bg-slate-900 border-slate-700 text-white"
                      : "border-gray-300"
                  }`}
                />

              </div>

              <label
                className={`flex items-start gap-3 text-sm ${
                  dark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <input
                  type="checkbox"
                  className="mt-1"
                />

                <span>
                  I agree to the{" "}
                  <span className="text-green-600 font-semibold cursor-pointer">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-green-600 font-semibold cursor-pointer">
                    Privacy Policy
                  </span>.
                </span>

              </label>

              <button
                className="w-full bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2"
              >
                Create Account
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

            {/* Social Signup */}

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
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Signup;