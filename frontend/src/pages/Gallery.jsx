import React from "react";
import {
  Camera,
  Mountain,
  Tent,
  Snowflake,
  Trees,
  Image as ImageIcon,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Gallery = () => {
  const { theme } = useTheme();

  const dark = theme === "dark";

  const galleryImages = [
    {
      title: "Kedarkantha Trek",
      category: "Snow Trek",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },
    {
      title: "Camping Nights",
      category: "Camping",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      title: "Himalayan Peaks",
      category: "Mountains",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      title: "Forest Trails",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    {
      title: "Adventure Group",
      category: "Group Tour",
      image:
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    },
    {
      title: "Sunrise Trek",
      category: "Sunrise",
      image:
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606",
    },
  ];

  const categories = [
    {
      icon: <Mountain size={20} />,
      name: "Mountains",
    },
    {
      icon: <Tent size={20} />,
      name: "Camping",
    },
    {
      icon: <Snowflake size={20} />,
      name: "Snow Treks",
    },
    {
      icon: <Trees size={20} />,
      name: "Nature",
    },
    {
      icon: <Camera size={20} />,
      name: "Photography",
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
            OUR ADVENTURE GALLERY
          </span>

          <h1
            className={`mt-6 text-5xl md:text-6xl font-extrabold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Explore Moments
            <span className="text-green-600"> Beyond Mountains</span>
          </h1>

          <p
            className={`mt-6 max-w-3xl mx-auto text-lg leading-8 ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Every photograph tells a story of adventure, friendship,
            breathtaking landscapes, and unforgettable Himalayan experiences.
          </p>
        </section>

        {/* Stats */}

        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">

          {[
            { value: "500+", label: "Photos" },
            { value: "120+", label: "Trips" },
            { value: "40+", label: "Destinations" },
            { value: "5000+", label: "Happy Travelers" },
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

        {/* Gallery */}

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-3xl shadow-lg group ${
                dark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">

                <span className="text-green-600 text-sm font-semibold">
                  {item.category}
                </span>

                <h3
                  className={`mt-2 text-xl font-bold ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

              </div>
            </div>
          ))}

        </section>

        {/* CTA */}

        <section className="py-24 text-center">

          <ImageIcon
            className="mx-auto text-green-600 mb-6"
            size={50}
          />

          <h2
            className={`text-4xl font-bold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Ready to Create Your Own Adventure?
          </h2>

          <p
            className={`mt-5 max-w-2xl mx-auto ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join Traventure and make memories across the beautiful Himalayas.
            Your next unforgettable journey starts here.
          </p>

          <button className="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold transition">
            Explore Treks
          </button>

        </section>

      </div>
    </div>
  );
};

export default Gallery;