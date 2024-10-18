import React from "react";

// Import images
import brandImage from '../images/brand.png';
import webImage from '../images/web.png';
import mobileImage from '../images/mobile.png';
import videoImage from '../images/video.png';
import softwareImage from '../images/software.png';
import consultantImage from '../images/conseltant.png';

const services = [
  { title: "Graphic Design", image: brandImage, color: "blue" },
  { title: "Web Development", image: webImage, color: "orange" },
  { title: "Mobile Development", image: mobileImage, color: "green" },
  { title: "Motion & Video editing", image: videoImage, color: "purple" },
  { title: "Software Development", image: softwareImage, color: "gray" },
  { title: "Consulting", image: consultantImage, color: "yellow" },
];

function getServiceDescription(title) {
  switch (title) {
    case "Graphic Design":
      return "We help businesses stand out with impactful branding strategies that communicate value and build a strong identity.";
    case "Web Development":
      return "We create fast, responsive, and user-friendly websites that drive engagement and deliver seamless digital experiences.";
    case "Mobile Development":
      return "Our mobile apps are designed to provide intuitive, feature-rich experiences across all platforms, enhancing your business's mobile presence.";
    case "Motion & Video editing":
      return "Our motion graphics and video services bring your brand to life with engaging and dynamic visual storytelling.";
    case "Software Development":
      return "From concept to deployment, we deliver custom software solutions that address your unique business challenges.";
    case "Consulting":
      return "Our expert consulting services guide businesses through digital transformation, technology adoption, and process optimization for long-term growth.";
    default:
      return "";
  }
}

export default function Services() {
  return (
    <section className="py-5 bg-gradient-to-b from-white to-gray-100 sm:py-16 lg:py-24">
      <h1 className="text-center py-10 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse ">
        What We Offer
      </h1>
      <div className="px-4 mx-auto mt-10 max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="relative flex items-center justify-center mx-auto mb-8">
                  <svg
                    className={`text-${service.color}-100`}
                    width="100"
                    height="100"
                    viewBox="0 0 72 75"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-10 h-10 text-blue-600"
                    />
                  </div>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-center text-gray-900">{service.title}</h3>
                <p className="mt-4 text-base text-center text-gray-600">
                  {getServiceDescription(service.title)}
                </p>
              </div>
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${service.color}-400 to-${service.color}-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}