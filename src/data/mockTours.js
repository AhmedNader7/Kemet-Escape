import tourImg from "../assets/Untitled-1.png";

export const mockTours = [
  {
    id: 1,
    title: "From the Pyramids to Petra",
    destination: "Cairo, Egypt to Petra, Jordan",
    duration: "5 Days / 4 Nights",
    price: 52500,
    rating: 4.9,
    reviews: 0,
    image: tourImg,
    description:
      "A 5-day luxurious historical escape connecting the wonders of Egypt and Jordan. Experience the majestic Pyramids, cruise the Nile, and explore the rose-red city of Petra.",
    highlights: [
      "Giza Pyramids & Sphinx",
      "Nile Cruise Dinner",
      "Egyptian Museum & Khan el-Khalili",
      "The Rose City of Petra",
      "Dead Sea Floating Experience",
    ],
    includes: [
      "5-Star Hotel Accommodation (2 nights Cairo, 2 nights Jordan)",
      "International Flight (Cairo to Amman)",
      "Private Transfers & Tourist Coaches",
      "All guided sightseeing with professionals",
      "Entrance fees to all listed sites",
    ],
    category: "Historical",
    difficulty: "Easy",
    maxGroupSize: 50,
    languages: ["English", "Arabic"],
    departureCity: "Cairo",
    bestTime: "October - April",
    audience: "Families & Tourists",
    currency: "EGP",
    itinerary: [
      {
        day: 1,
        title: "Cairo Arrival & Pyramids",
        description:
          "Airport pickup, Giza Pyramids, Camel ride, Traditional lunch, Nile Cruise Dinner.",
      },
      {
        day: 2,
        title: "Historic Cairo",
        description:
          "Egyptian Museum, Khan el-Khalili tour, Oriental lunch, Free time.",
      },
      {
        day: 3,
        title: "Journey to Jordan",
        description:
          "Flight from Cairo to Amman, Transfer to hotel, Evening Amman tour.",
      },
      {
        day: 4,
        title: "The Rose City",
        description:
          "Full day exploring Petra, Lunch inside the site, Photography tour.",
      },
      {
        day: 5,
        title: "Dead Sea & Departure",
        description:
          "Floating in the Dead Sea, Relaxation at the resort, Airport transfer for departure.",
      },
    ],
  },
];

export const categories = [
  "All",
  "Romantic",
  "Cultural",
  "Beach",
  "Adventure",
  "Historical",
  "Nature",
  "Wildlife",
  "Island",
];

export const destinations = [
  "All Destinations",
  "Europe",
  "Asia",
  "America",
  "Africa",
  "Oceania",
];
