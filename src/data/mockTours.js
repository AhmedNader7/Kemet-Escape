import cardImg from "../assets/Gemini_Generated_Image_ppbrqgppbrqgppbr.png"

export const mockTours = [
  {
    id: 1,
    title: "Nile Palace Cruise – Aswan to Luxor",
    destination: "Aswan to Luxor, Egypt",
    duration: "4 Days / 3 Nights",
    price: 22000,
    originalPrice: 22000,
    rating: 4.9,
    reviews: 0,
    image:
      cardImg,
    description:
      "A timeless voyage crafted by Kemet Escape. Step aboard a river that has carried the stories of pharaohs for thousands of years. The Nile Palace Cruise invites you to drift between temples, legends, and golden horizons as you journey from Aswan to Luxor—where every sunrise feels like it's been waiting just for you.",
    highlights: [
      "High Dam Visit",
      "Philae Temple",
      "Kom Ombo Temple",
      "Temple of Edfu",
      "Luxor Temple",
      "Karnak Temple",
      "Valley of the Kings",
      "Temple of Hatshepsut",
      "Colossi of Memnon",
    ],
    includes: [
      "Nile Palace Cruise (4 days / 3 nights) – full board",
      "Sleeping train from Cairo to Aswan",
      "Private transfers throughout",
      "All guided sightseeing with an Egyptologist (Arabic / English)",
      "Entrance fees to all listed sites",
      "24/7 trip assistance",
      "QR code containing your complete digital itinerary",
    ],
    category: "Historical",
    difficulty: "Easy",
    maxGroupSize: 20,
    languages: ["English", "Arabic"],
    departureCity: "Cairo",
    bestTime: "October - April",
    currency: "EGP",
    itinerary: [
      {
        day: 1,
        title: "Aswan's Warm Welcome",
        description:
          "Your journey begins the moment your train pulls into Aswan. A private transfer whisks you to the cruise, where the Nile glimmers outside your cabin window. A hearty lunch awaits on deck. Visit the powerful High Dam. Wander through the mystical Philae Temple, reborn on its island. Dinner on board. Overnight in Aswan, lulled to sleep by sleep by the river's rhythm.",
      },
      {
        day: 2,
        title: "Kom Ombo & The Night of Colors",
        description:
          "The day opens softly with breakfast on deck. Optional morning excursion for those craving more discovery. Sail toward Kom Ombo, where twin gods share a single temple. Explore the haunting beauty of Kom Ombo Temple. Drift onward to Edfu as the sky melts into orange. Dinner followed by the beloved Galabya Party—a night where tradition meets laughter. Overnight in Edfu.",
      },
      {
        day: 3,
        title: "Temples, Bridges, and the Gates of Thebes",
        description:
          "Morning light spills through your window as breakfast is served. Visit the majestic Temple of Edfu, still echoing with the footsteps of ancient priests. Sail north toward Esna, passing beneath the low Esna Bridge. Continue to Luxor—ancient Thebes, city of immortal kings. Explore the illuminated corridors of Luxor Temple. Wander through the vast, awe-inspiring pillars of Karnak, a forest of stone unlike anything else on earth. Overnight in Luxor.",
      },
      {
        day: 4,
        title: "The Kingdom of the Afterlife",
        description:
          "Your final morning begins with breakfast before check-out. Cross to the West Bank, where Egypt's greatest secrets rest. Stand before the elegant Temple of Hatshepsut, carved into the cliffs. Journey through the Valley of the Kings, home to the tombs of pharaohs. Visit the eternal guardians—the Colossi of Memnon. Private transfer to Luxor train station for your departure.",
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
