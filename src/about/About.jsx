import React from "react";
import img from '../images/img-3.jpg'

function About() {
  return (
    <section id="About" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3 scale-105 opacity-10"></div>
            <img
              className="relative z-10 w-full rounded-2xl shadow-xl"
              src={img}
              alt="Team working together"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              Why Choose Us?
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Get work done, fast!
            </h2>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Whether you're looking to enhance your digital presence, streamline operations, or build a stronger brand, Daluultech is your trusted partner for tech-driven innovation.
            </p>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              We pride ourselves on a customer-first approach, delivering quality, reliability, and cutting-edge solutions for businesses of all sizes.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            >
              Explore more
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;