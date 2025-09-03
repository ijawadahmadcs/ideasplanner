import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <main className="bg-gray-100 text-gray-800">
      <section
        className="bg-blue-950 text-white w-full"
        // style={{
        //   backgroundImage: "url('/images/bg.jpeg')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase text-sm tracking-widest mb-2 text-blue-300">
              Personalization - a key to greater value
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              IdeasPlanner - online visioning and personalization tool.
            </h1>
            <p className="mb-6 text-gray-200">
              Fast reaction to customer's needs, instant price calculation,
              flexible design solutions - all that in one app.
            </p>
            <button className="bg-white hover:bg-gray-200 text-blue-950 font-semibold px-5 py-3 rounded shadow">
              RUN IDEASPLANNER
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              width={400}
              height={500}
              src={"/images/homepage_pic.png"}
              alt="IdeasPlanner Tool"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

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
      </section>
    </main>
  );
};

export default Main;
