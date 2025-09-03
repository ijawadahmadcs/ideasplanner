import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-4 m-5 ">
        <div>
          <h2 className="text-xl font-bold mb-3">JSC IDEAS for PEOPLE</h2>
          <p className="text-sm mb-1 flex items-center gap-2">
            <FaMapMarkerAlt /> Kastonu g. 8 D. Riese Vilniaus raj, Vilnius 14261
          </p>
          <p className="text-sm mb-1 flex items-center gap-2">
            <FaPhoneAlt /> +37067822055
          </p>
          <p className="text-sm mb-1 flex items-center gap-2">
            <FaEnvelope /> info@ideaswood.eu
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaClock /> I-V 8:00-17:00 | VI-VII: Closed
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">Products</h2>
          <ul className="space-y-1 text-sm">
            <li>Sheds / Storage Cabins</li>
            <li>Garden Cabins</li>
            <li>Summer Houses / Chalets</li>
            <li>Garages / Carports</li>
            <li>Home Offices / Studios</li>
            <li>Villas / Country Houses</li>
            <li>Pergolas</li>
            <li>Saunas</li>
            <li>Stables & Kiosks</li>
            <li>Hot Tubs</li>
            <li>Insulated Wooden Houses</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">Information</h2>
          <ul className="space-y-1 text-sm">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Site Map</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">Customer Support</h2>
          <p className="text-sm mb-2">
            Do you have any questions? We can help!
          </p>
          <p className="text-sm mb-2">
            Give us the details. We will get back to you as soon as possible.
          </p>
          <button className="bg-white text-blue-950 font-bold px-4 py-2 rounded hover:bg-gray-200">
            Quick Contact
          </button>
        </div>
      </div>

      <div className="bg-blue-900 text-center py-4 text-sm">
        © 2021 JSC IDEAS for PEOPLE | Powered by Anteeo
      </div>
    </footer>
  );
};

export default Footer;
