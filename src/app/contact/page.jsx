import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-950 mb-2">Contact Us</h1>
          <p className="text-gray-600">
            Have questions? We'd love to hear from you. Fill out the form or
            reach us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Your message..."
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
          <div className="bg-blue-950 text-white rounded-lg shadow-lg p-6 space-y-4 flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <FaPhoneAlt /> <span>+37067822055</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope /> <span>info@ideaswood.eu</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />{" "}
              <span>
                Kastonu g. 8 D. Riese Vilniaus raj, 14261 Vilnius, Lithuania
              </span>
            </div>
            <p className="text-sm mt-4">
              Working Hours: <br />
              Monday-Friday: 8:00-17:00 <br />
              Saturday-Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
