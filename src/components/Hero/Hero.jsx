import { Link } from "react-router-dom";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import heroImg from "../../assets/Untitled-1.png";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/70 via-blue-700/50 to-blue-900/70"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-linear-to-br from-transparent via-white to-transparent opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Your
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
              Dream Destination
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Embark on unforgettable journeys with our expertly crafted tourism
            programs. From exotic beaches to majestic mountains, your adventure
            awaits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tours"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Tours
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400 bg-opacity-20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
