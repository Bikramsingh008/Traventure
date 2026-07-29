import React from "react";
import { Link } from "react-router-dom";
import { MapPinned, Mountain, ShieldCheck, Users, Award, Compass } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const features = [
  {
    icon: <Mountain size={32} />,
    title: "Expert Trek Leaders",
    description:
      "Our certified trek leaders ensure every journey is safe, enjoyable, and memorable."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Safety First",
    description:
      "We prioritize your safety with medical kits, experienced guides, and planned routes."
  },
  {
    icon: <MapPinned size={32} />,
    title: "Curated Adventures",
    description:
      "From hidden Himalayan trails to iconic mountain passes, every trip is carefully planned."
  },
  {
    icon: <Users size={32} />,
    title: "Community",
    description:
      "Meet like-minded travelers, make lifelong friendships, and create unforgettable memories."
  }
];

const stats = [
  { number: "5000+", title: "Happy Travelers" },
  { number: "120+", title: "Treks Completed" },
  { number: "40+", title: "Destinations" },
  { number: "4.9★", title: "Average Rating" }
];

const About = () => {
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
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}

        <section className="text-center py-14">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
              dark
                ? "bg-green-900/30 text-green-400"
                : "bg-green-100 text-green-700"
            }`}
          >
            ABOUT TRAVENTURE
          </span>

          <h1
            className={`mt-6 text-5xl md:text-6xl font-extrabold leading-tight ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Explore the Himalayas
            <br />
            <span className="text-green-600">with Confidence.</span>
          </h1>

          <p
            className={`mt-6 max-w-3xl mx-auto text-lg leading-8 ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Traventure is more than just a trekking company.
            We create unforgettable adventures across Uttarakhand and
            Himachal Pradesh while providing safe transportation,
            comfortable accommodations, delicious meals, and expert guidance
            from Delhi to the mountains.
          </p>
        </section>

        {/* Story */}

        <section className="grid lg:grid-cols-2 gap-12 py-16">

          <div>
            <h2
              className={`text-3xl font-bold mb-6 ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              Our Story
            </h2>

            <p
              className={`leading-8 ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Traventure was founded with one simple mission — to make
              Himalayan adventures accessible, affordable, and unforgettable.
              We noticed that many travelers struggled with transportation,
              accommodation, permits, and planning. So we created an
              all-in-one travel experience where you simply book your trek
              and we handle everything else.
            </p>

            <p
              className={`mt-6 leading-8 ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              From Delhi pickup to mountain camps, local guides,
              hotel stays, meals, and safe return journeys, every detail is
              managed by our experienced team.
            </p>
          </div>

          <div
            className={`rounded-3xl p-8 shadow-xl ${
              dark
                ? "bg-slate-800 border border-slate-700"
                : "bg-white border"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <Compass className="text-green-600" size={34} />
              <h3
                className={`text-2xl font-bold ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                Our Mission
              </h3>
            </div>

            <p
              className={`leading-8 ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              To provide safe, sustainable, and unforgettable adventure
              experiences while promoting responsible tourism in the Himalayas.
            </p>

            <div className="mt-10 flex items-center gap-4 mb-6">
              <Award className="text-green-600" size={34} />
              <h3
                className={`text-2xl font-bold ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                Our Vision
              </h3>
            </div>

            <p
              className={`leading-8 ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              To become India's most trusted adventure travel company by
              creating premium trekking experiences while preserving nature
              and supporting local communities.
            </p>
          </div>
        </section>

        {/* Features */}

        <section className="py-16">

          <h2
            className={`text-center text-4xl font-bold mb-14 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Why Choose Traventure?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  dark
                    ? "bg-slate-800 border border-slate-700"
                    : "bg-white border"
                }`}
              >
                <div className="text-green-600 mb-6">{item.icon}</div>

                <h3
                  className={`text-xl font-bold mb-4 ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`leading-7 ${
                    dark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}

        <section className="py-20">

          <div
            className={`rounded-3xl p-10 ${
              dark
                ? "bg-green-700"
                : "bg-green-600"
            }`}
          >
            <div className="grid md:grid-cols-4 gap-10 text-center">

              {stats.map((item, index) => (
                <div key={index}>
                  <h3 className="text-white text-5xl font-bold">
                    {item.number}
                  </h3>

                  <p className="mt-3 text-green-100 text-lg">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* CTA */}

        <section className="py-20 text-center">

          <h2
            className={`text-4xl font-bold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Your Next Adventure Begins Here
          </h2>

          <p
            className={`mt-6 max-w-2xl mx-auto text-lg ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join thousands of adventurers exploring the breathtaking beauty
            of Uttarakhand and Himachal Pradesh with Traventure.
          </p>

          <Link
            to="/treks"
            className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition inline-block"
          >
            Explore Treks
          </Link>

        </section>

      </div>
    </div>
  );
};

export default About;