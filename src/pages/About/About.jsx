import {
  FaUsers,
  FaGlobe,
  FaAward,
  FaHeart,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import devPhoto from "../../assets/ad7b256d-2ccf-405d-8b03-7eb4a55d2e01.jpg"

const About = () => {
  const stats = [
    { icon: FaUsers, value: "50,000+", label: "Happy Travelers" },
    { icon: FaGlobe, value: "100+", label: "Destinations" },
    { icon: FaAward, value: "15+", label: "Years Experience" },
    { icon: FaHeart, value: "4.9/5", label: "Customer Rating" },
  ];

  const team = [
    {
      name: "Ahmed Nader",
      role: "Frontend Developer",
      image: devPhoto,
      bio: "Frontend Developer with hands-on experience in **React, React Router, Next.js",
      linkedIn: "https://www.linkedin.com/in/ahmed-nader-46b925325/",
      gitHub: "https://github.com/AhmedNader7",
    },
  ];

  const values = [
    {
      icon: FaHeart,
      title: "Passion for Travel",
      description:
        "We believe travel has the power to transform lives and create lasting memories.",
    },
    {
      icon: FaUsers,
      title: "Personalized Service",
      description:
        "Every traveler is unique, and we tailor our services to meet individual preferences and needs.",
    },
    {
      icon: FaGlobe,
      title: "Sustainable Tourism",
      description:
        "We promote responsible travel that respects local cultures and preserves natural environments.",
    },
    {
      icon: FaAward,
      title: "Quality Assurance",
      description:
        "We partner with only the best local operators and maintain the highest standards of service.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About TravelPro
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Creating extraordinary travel experiences that connect people with
              the world's most beautiful destinations.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="text-blue-600 text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small travel agency to a global leader in curated tourism
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Founded with a Vision
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                TravelPro was born from a simple belief: that travel should be
                more than just visiting places—it should be about creating
                meaningful connections, discovering new perspectives, and
                collecting stories that last a lifetime.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Since our founding in 2008, we've grown from a small team of
                passionate travelers to a global network of travel experts,
                local partners, and satisfied customers spanning six continents.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to innovate and adapt, using technology and
                local expertise to create travel experiences that are as unique
                as our travelers themselves.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🌍</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Global Reach
                </h4>
                <p className="text-gray-700">
                  Operating in over 100 countries with local experts who know
                  their destinations intimately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <value.icon className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Tech Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate travel experts behind your dream vacations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-160 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-between">
                    <p className="text-blue-400 hover:text-blue-600"><a href={member.linkedIn} target="_blank">LinkedIn</a></p>
                    <p className="text-red-400 hover:text-red-600"><a href={member.gitHub} target="_blank">Github</a></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect trip. Get in touch with our travel
            experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-3">
              <FaMapMarkerAlt />
              <span>123 Travel Street, Alexandrya, Egypt</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaPhone />
              <span>+20 1558858776</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaEnvelope />
              <span>info@kemetescape-eg.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
