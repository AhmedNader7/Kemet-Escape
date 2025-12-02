import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaClock,
  FaCheck,
  FaArrowLeft,
  FaTimes,
} from "react-icons/fa";
import { mockTours } from "../../data/mockTours";

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
    preferredDate: "",
    specialRequests: "",
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  useEffect(() => {
    // Simulate API call
    const loadTour = () => {
      setTimeout(() => {
        const foundTour = mockTours.find((t) => t.id === parseInt(id));
        setTour(foundTour);
        setLoading(false);
      }, 500);
    };

    loadTour();
  }, [id]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Simulate booking submission
    setTimeout(() => {
      setBookingSubmitted(true);
      setShowBookingForm(false);
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tour Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The tour you're looking for doesn't exist.
          </p>
          <Link
            to="/tours"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Tours
          </Link>
        </div>
      </div>
    );
  }

  const images = [tour.image]; // In a real app, you'd have multiple images

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/tours"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Tours
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-2xl overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${tour.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Tour Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {tour.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-1" />
                  <span>{tour.destination}</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>
                    {tour.rating} ({tour.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {tour.description}
              </p>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center text-gray-600 mb-2">
                  <FaClock className="mr-2" />
                  <span className="font-medium">Duration</span>
                </div>
                <p className="text-gray-900 font-semibold">{tour.duration}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center text-gray-600 mb-2">
                  <FaUsers className="mr-2" />
                  <span className="font-medium">Group Size</span>
                </div>
                <p className="text-gray-900 font-semibold">
                  Up to {tour.maxGroupSize} people
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center text-gray-600 mb-2">
                  <FaCalendarAlt className="mr-2" />
                  <span className="font-medium">Best Time</span>
                </div>
                <p className="text-gray-900 font-semibold">{tour.bestTime}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="font-medium">Difficulty</span>
                </div>
                <p className="text-gray-900 font-semibold">{tour.difficulty}</p>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-600">Starting from</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-gray-900">
                      EGP {tour.price}
                    </span>
                    {tour.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        EGP 26000
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights and Includes */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Tour Highlights
            </h3>
            <ul className="space-y-3">
              {tour.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              What's Included
            </h3>
            <ul className="space-y-3">
              {tour.includes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Itinerary */}
        {tour.itinerary && (
          <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Detailed Itinerary
            </h3>
            <div className="space-y-6">
              {tour.itinerary.map((day, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">
                    Day {day.day}: {day.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {day.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Booking Confirmation */}
        {bookingSubmitted && (
          <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-6">
            <div className="text-center">
              <FaCheck className="text-green-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Booking Submitted Successfully!
              </h3>
              <p className="text-green-700">
                Thank you for your booking request. We'll contact you soon with confirmation details.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Book {tour.title}
                </h3>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    name="travelers"
                    value={bookingData.travelers}
                    onChange={handleInputChange}
                    min="1"
                    max={tour.maxGroupSize}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={bookingData.preferredDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any special requests or notes..."
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Price:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      EGP {tour.price * bookingData.travelers}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Submit Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDetail;
