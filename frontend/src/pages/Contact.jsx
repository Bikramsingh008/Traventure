import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
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

        <section className="text-center py-16">

          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
              dark
                ? "bg-green-900/30 text-green-400"
                : "bg-green-100 text-green-700"
            }`}
          >
            CONTACT TRAVENTURE
          </span>

          <h1
            className={`mt-6 text-5xl md:text-6xl font-extrabold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Plan Your
            <span className="text-green-600"> Next Adventure</span>
          </h1>

          <p
            className={`mt-6 max-w-3xl mx-auto text-lg leading-8 ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have questions about trekking, bookings, transportation, or custom
            travel plans? Our team is here to help you make your Himalayan
            journey smooth and unforgettable.
          </p>

        </section>

        {/* Contact Cards */}

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

          {[
            {
              icon: <Phone size={30} />,
              title: "Call Us",
              value: "+91 98765 43210",
            },
            {
              icon: <Mail size={30} />,
              title: "Email",
              value: "info@traventure.com",
            },
            {
              icon: <MapPin size={30} />,
              title: "Office",
              value: "Delhi, India",
            },
            {
              icon: <Clock size={30} />,
              title: "Working Hours",
              value: "9:00 AM - 7:00 PM",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${
                dark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white border shadow-sm"
              }`}
            >
              <div className="text-green-600 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3
                className={`font-bold text-xl ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-2 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.value}
              </p>
            </div>
          ))}

        </section>

        {/* Contact Form */}

        <section className="grid lg:grid-cols-2 gap-10 mb-24">

          <div
            className={`rounded-3xl p-8 ${
              dark
                ? "bg-slate-800 border border-slate-700"
                : "bg-white shadow-lg"
            }`}
          >

            <h2
              className={`text-3xl font-bold mb-8 ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className={`w-full rounded-xl px-5 py-4 border outline-none ${
                  dark
                    ? "bg-slate-900 border-slate-700 text-white"
                    : "border-gray-300"
                }`}
              />

              <input
                type="email"
                placeholder="Email Address"
                className={`w-full rounded-xl px-5 py-4 border outline-none ${
                  dark
                    ? "bg-slate-900 border-slate-700 text-white"
                    : "border-gray-300"
                }`}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className={`w-full rounded-xl px-5 py-4 border outline-none ${
                  dark
                    ? "bg-slate-900 border-slate-700 text-white"
                    : "border-gray-300"
                }`}
              />

              <textarea
  name="message"
  rows={5}
  placeholder="Tell us about your travel plan..."
  className={`w-full rounded-xl px-5 py-4 border outline-none resize-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ${
    dark
      ? "bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
      : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
  }`}
/>

              <button className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold flex justify-center items-center gap-2">
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

          {/* Right Side */}

          <div className="space-y-8">

            <div
              className={`rounded-3xl p-8 ${
                dark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white shadow-lg"
              }`}
            >

              <h2
                className={`text-3xl font-bold mb-5 ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                Visit Our Office
              </h2>

              <p
                className={`leading-8 ${
                  dark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Traventure Adventure Pvt. Ltd.
                <br />
                Connaught Place,
                <br />
                New Delhi - 110001
                <br />
                India
              </p>

            </div>

            <div
              className={`rounded-3xl h-72 flex items-center justify-center ${
                dark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-gray-200"
              }`}
            >
              <div className="text-center">

                <MapPin
                  size={50}
                  className="mx-auto text-green-600"
                />

                <p
                  className={`mt-4 ${
                    dark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Google Map will be integrated here.
                </p>

              </div>
            </div>

          </div>

        </section>

        {/* CTA */}

        <section
          className={`rounded-3xl p-10 text-center mb-20 ${
            dark
              ? "bg-slate-800 border border-slate-700"
              : "bg-green-50"
          }`}
        >

          <MessageCircle
            className="mx-auto text-green-600 mb-5"
            size={48}
          />

          <h2
            className={`text-4xl font-bold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Need Immediate Assistance?
          </h2>

          <p
            className={`mt-4 max-w-2xl mx-auto ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Our travel experts are available to help you choose the perfect trek,
            customize your itinerary, and answer all your travel-related
            questions.
          </p>

          <button className="mt-8 px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition">
            Chat on WhatsApp
          </button>

        </section>

      </div>
    </div>
  );
};

export default Contact;