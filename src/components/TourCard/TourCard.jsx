import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaClock, FaUsers } from "react-icons/fa";

const TourCard = ({ tour }) => {
  const {
    id,
    title,
    destination,
    price,
    originalPrice,
    rating,
    reviews,
    duration,
    category,
    image,
    highlights,
    currency,
  } = tour;

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const getCategoryColor = (category) => {
    const colors = {
      Romantic: "bg-pink-500",
      Cultural: "bg-purple-500",
      Beach: "bg-blue-500",
      Adventure: "bg-green-500",
      City: "bg-orange-500",
      Nature: "bg-emerald-500",
    };
    return colors[category] || "bg-gray-500";
  };

  const getCurrencySymbol = (currency) => {
    const symbols = {
      USD: "$",
      EGP: "EGP",
    };
    return symbols[currency] || currency;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop";
          }}
        />

        {/* Category Badge */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-semibold ${getCategoryColor(
            category
          )}`}
        >
          {category}
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Location */}
        <div className="mb-2">
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center text-gray-600 text-sm">
            <FaMapMarkerAlt className="mr-1 text-blue-500" />
            {destination}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-semibold text-gray-900">{rating}</span>
          </div>
          <span className="text-gray-600 text-sm ml-1">
            ({reviews} reviews)
          </span>
        </div>

        {/* Duration and Group Size */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <FaClock className="mr-1 text-blue-500" />
            {duration}
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-green-500" />
            Small group
          </div>
        </div>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {highlights.slice(0, 2).map((highlight, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  {highlight}
                </span>
              ))}
              {highlights.length > 2 && (
                <span className="text-gray-500 text-xs">
                  +{highlights.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                {getCurrencySymbol(currency)}
                {price}
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  {getCurrencySymbol(currency)}
                  26000
                </span>
              )}
            </div>
            <span className="text-sm text-gray-600">per person</span>
          </div>

          <Link
            to={`/tours/${id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
