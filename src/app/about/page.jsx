import React from "react";

const About = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
          About us
        </h2>
        <h3 className="text-xl font-semibold mb-4">What is IdeasPlanner?</h3>
        <p className="mb-4">
          <strong>IDEASPLANNER</strong> is an advanced online design and
          calculation tool for planning{" "}
          <strong>
            GARDEN STRUCTURES, CABINS, SAUNAS, PERGOLAS, CARPORTS, WOODEN HOUSES
          </strong>
          , and other timber buildings.
        </p>
        <p className="mb-4">
          It is developed for{" "}
          <strong>PRODUCERS, CONSTRUCTORS, ARCHITECTS, and DEALERS</strong> who
          want to save time and resources while offering precise, instant
          solutions to their clients.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <strong>DRAW AND CONFIGURE STRUCTURES ONLINE</strong> - no CAD
            software needed
          </li>
          <li>
            <strong>VISUALIZE DESIGNS IN 3D</strong> - bring ideas to life
            instantly
          </li>
          <li>
            <strong>CALCULATE MATERIAL LISTS AND PRICING AUTOMATICALLY</strong>{" "}
            - accurate offers, no guesswork
          </li>
          <li>
            <strong>
              GENERATE DETAILED TECHNICAL DRAWINGS AND READY-MADE OFFERS
            </strong>{" "}
            - in just minutes
          </li>
        </ul>
        <p className="mb-4 font-semibold">
          IDEASPLANNER HELPS YOU REDUCE ERRORS, SPEED UP YOUR WORK, AND IMPROVE
          YOUR CLIENT EXPERIENCE - FROM FIRST CONCEPT TO FINAL OFFER.
        </p>
        <p>
          Discover how IdeasPlanner can transform your business today! <br />
          Contact us:{" "}
          <a
            href="mailto:info@ideasplanner.com"
            className="text-blue-900 underline"
          >
            info@ideasplanner.com
          </a>
        </p>
        {/* <div className="max-w-7xl mx-auto px-4 py-1 flex flex-row justify-around items-center gap-4 m-5  ">
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
        </div> */}
      </section>
    </div>
  );
};

export default About;
