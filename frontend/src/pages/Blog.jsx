import React from "react";
import {
  BookOpen,
  Mountain,
  Compass,
  Backpack,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Blog = () => {
  const { theme } = useTheme();

  const dark = theme === "dark";

  const blogs = [
    {
      title: "Top 10 Treks in Uttarakhand You Must Experience",
      category: "Travel Guide",
      date: "15 July 2026",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },
    {
      title: "Complete Packing Checklist for Himalayan Treks",
      category: "Tips",
      date: "20 July 2026",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      title: "Best Time to Visit Himachal for Trekking",
      category: "Adventure",
      date: "25 July 2026",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
  ];

  const categories = [
    {
      icon: <Mountain size={20} />,
      name: "Treks",
    },
    {
      icon: <Backpack size={20} />,
      name: "Packing Tips",
    },
    {
      icon: <Compass size={20} />,
      name: "Travel Guides",
    },
    {
      icon: <BookOpen size={20} />,
      name: "Adventure Stories",
    },
  ];

  return (
    <div
      className={`min-h-screen pt-24 transition-all duration-300 ${
        dark
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}

        <section className="text-center py-16">

          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
              dark
                ? "bg-green-900/30 text-green-400"
                : "bg-green-100 text-green-700"
            }`}
          >
            TRAVEL BLOG
          </span>

          <h1
            className={`mt-6 text-5xl md:text-6xl font-extrabold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Stories From
            <span className="text-green-600"> The Himalayas</span>
          </h1>

          <p
            className={`mt-6 max-w-3xl mx-auto text-lg leading-8 ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore travel guides, trekking tips, destination insights,
            packing checklists, adventure stories, and everything you need
            before your next Himalayan journey.
          </p>

        </section>

        {/* Stats */}

        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">

          {[
            { value: "100+", label: "Travel Articles" },
            { value: "20+", label: "Travel Guides" },
            { value: "40+", label: "Destinations" },
            { value: "10K+", label: "Monthly Readers" },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl p-6 text-center ${
                dark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white border"
              }`}
            >
              <h2
                className={`text-3xl font-bold ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                {item.value}
              </h2>

              <p
                className={`mt-2 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* Categories */}

        <section className="flex flex-wrap justify-center gap-4 mb-16">

          {categories.map((item) => (
            <button
              key={item.name}
              className={`flex items-center gap-2 px-5 py-3 rounded-full transition ${
                dark
                  ? "bg-slate-800 hover:bg-green-600 text-white"
                  : "bg-white border hover:bg-green-600 hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}

        </section>

        {/* Featured Blogs */}

        <section className="mb-24">

          <h2
            className={`text-4xl font-bold mb-10 text-center ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-3xl shadow-lg group ${
                  dark ? "bg-slate-800" : "bg-white"
                }`}
              >

                <div className="overflow-hidden">

                  <img
                    src={`${blog.image}?auto=format&fit=crop&w=900&q=80`}
                    alt={blog.title}
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                  />

                </div>

                <div className="p-6">

                  <span className="text-green-600 font-semibold text-sm">
                    {blog.category}
                  </span>

                  <h3
                    className={`mt-3 text-2xl font-bold ${
                      dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {blog.title}
                  </h3>

                  <div
                    className={`flex items-center gap-2 mt-4 text-sm ${
                      dark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <Calendar size={16} />
                    {blog.date}
                  </div>

                  <button className="mt-6 flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* Newsletter */}

        <section
          className={`rounded-3xl p-10 text-center ${
            dark
              ? "bg-slate-800 border border-slate-700"
              : "bg-green-50"
          }`}
        >

          <BookOpen className="mx-auto text-green-600 mb-5" size={48} />

          <h2
            className={`text-4xl font-bold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Never Miss an Adventure
          </h2>

          <p
            className={`mt-4 max-w-2xl mx-auto ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Subscribe to receive trekking guides, travel tips,
            destination updates, and exclusive offers directly in your inbox.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">

            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 px-5 py-4 rounded-xl border outline-none ${
                dark
                  ? "bg-slate-900 border-slate-700 text-white"
                  : "bg-white border-gray-300"
              }`}
            />

            <button className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition">
              Subscribe
            </button>

          </div>

        </section>

      </div>
    </div>
  );
};

export default Blog;