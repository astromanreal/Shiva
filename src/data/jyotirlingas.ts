
export interface JyotirlingaCoordinates {
  latitude: number;
  longitude: number;
}

export interface Jyotirlinga {
  id: string; // Derived from name for URL/key purposes
  name: string;
  sanskritName?: string; // Optional Sanskrit name if available or needed
  deity: string;
  location: string; // City/Area
  state: string;
  significance: string;
  coordinates: JyotirlingaCoordinates;
  aiHint: string; // For placeholder images
  image?: string; // Optional image URL
}

// Raw data provided by the user, with image URLs added
const rawData = [
  {
    name: "Somnath",
    deity: "Someshwara",
    location: "Prabhas Patan, Veraval",
    state: "Gujarat",
    significance: "Considered the first of the 12 Jyotirlingas. Rebuilt several times due to repeated destruction.",
    coordinates: { latitude: 20.8880, longitude: 70.4010 },
    image: "https://i.pinimg.com/736x/81/2b/a7/812ba7066aa4d34a1d7f3bfb358a6c22.jpg"
  },
  {
    name: "Mallikarjuna",
    deity: "Mallikarjuna Swamy",
    location: "Srisailam",
    state: "Andhra Pradesh",
    significance: "Located on the Nallamala Hills, it is both a Jyotirlinga and a Shakti Peetha.",
    coordinates: { latitude: 16.0722, longitude: 78.8688 },
    image: "https://i.pinimg.com/736x/7f/50/c2/7f50c21216061916b57c45b93e9a5b2e.jpg"
  },
  {
    name: "Mahakaleshwar",
    deity: "Mahakaleshwar",
    location: "Ujjain",
    state: "Madhya Pradesh",
    significance: "Only south-facing (Dakshinamukhi) Jyotirlinga; associated with time and death (Kala).",
    coordinates: { latitude: 23.1828, longitude: 75.7682 },
    image: "https://i.pinimg.com/736x/b7/d7/5f/b7d75f8a8c4d9f9898a9e71935d32421.jpg"
  },
  {
    name: "Omkareshwar",
    deity: "Omkareshwar",
    location: "Mandhata Island, Narmada River",
    state: "Madhya Pradesh",
    significance: "Island shaped like the Om symbol; revered alongside Amareshwar temple nearby.",
    coordinates: { latitude: 22.2420, longitude: 76.1486 },
    image: "https://i.pinimg.com/736x/1e/00/6f/1e006fc964d5e057226a9e5c3fae7c2e.jpg"
  },
  {
    name: "Kedarnath",
    deity: "Kedarnath",
    location: "Kedarnath, Himalayas",
    state: "Uttarakhand",
    significance: "One of the most remote Jyotirlingas; accessible only during specific months.",
    coordinates: { latitude: 30.7352, longitude: 79.0669 },
    image: "https://i.pinimg.com/736x/56/ee/6e/56ee6e8a84c4d605aad4a8400ec29a5c.jpg"
  },
  {
    name: "Bhimashankar",
    deity: "Bhimashankar",
    location: "Pune District",
    state: "Maharashtra",
    significance: "Surrounded by dense forests; origin of Bhima river.",
    coordinates: { latitude: 19.0730, longitude: 73.5539 },
    image: "https://i.pinimg.com/736x/30/58/93/3058937e74c59fa13214c0ddcf648b66.jpg"
  },
  {
    name: "Kashi Vishwanath",
    deity: "Vishwanath",
    location: "Varanasi",
    state: "Uttar Pradesh",
    significance: "Located on the banks of Ganga; one of the most revered pilgrimage sites.",
    coordinates: { latitude: 25.3109, longitude: 83.0095 },
    image: "https://i.pinimg.com/736x/44/fc/e1/44fce18349bce310581756f3b94288ad.jpg"
  },
  {
    name: "Trimbakeshwar",
    deity: "Trimbakeshwar",
    location: "Trimbak, Nashik",
    state: "Maharashtra",
    significance: "Source of the Godavari River; has three faces representing Brahma, Vishnu, and Shiva.",
    coordinates: { latitude: 19.9394, longitude: 73.5309 },
    image: "https://i.pinimg.com/736x/2f/f8/dc/2ff8dcc710b629467a463e778e51b205.jpg"
  },
  {
    name: "Vaidyanath",
    deity: "Vaidyanath",
    location: "Deoghar",
    state: "Jharkhand",
    significance: "Believed to heal diseases; associated with Ravana’s devotion to Shiva.",
    coordinates: { latitude: 24.4854, longitude: 86.6995 },
    image: "https://i.pinimg.com/736x/82/f8/df/82f8df4757dd21a1fa605f413924e79f.jpg"
  },
  {
    name: "Nageshwar",
    deity: "Nageshwar",
    location: "Dwarka",
    state: "Gujarat",
    significance: "Protector of devotees from poison and fear; closely linked with the legend of demon Daruka.",
    coordinates: { latitude: 22.2455, longitude: 68.9671 },
    image: "https://i.pinimg.com/736x/aa/82/41/aa82419e422ca9106e939c0131f0067e.jpg"
  },
  {
    name: "Rameshwar", // Changed name for ID consistency
    deity: "Ramanathaswamy",
    location: "Rameswaram",
    state: "Tamil Nadu",
    significance: "Linked with Ramayana; built by Lord Rama before crossing to Lanka.",
    coordinates: { latitude: 9.2885, longitude: 79.3177 },
    image: "https://i.pinimg.com/736x/e1/f9/95/e1f995a5e2b1bf617ae4be39f9b0c83c.jpg"
  },
  {
    name: "Grishneshwar",
    deity: "Grishneshwar",
    location: "Ellora, near Aurangabad",
    state: "Maharashtra",
    significance: "The last of the 12 Jyotirlingas; near Ellora Caves, UNESCO World Heritage Site.",
    coordinates: { latitude: 19.8707, longitude: 75.1796 },
    image: "https://i.pinimg.com/736x/06/de/2e/06de2e614744bf371ee94e77424f69a9.jpg"
  }
];

// Map Sanskrit names (if required) - using names for now
const sanskritNames: { [key: string]: string } = {
    "Somnath": "सोमनाथ",
    "Mallikarjuna": "मल्लिकार्जुन",
    "Mahakaleshwar": "महाकालेश्वर",
    "Omkareshwar": "ओंकारेश्वर",
    "Kedarnath": "केदारनाथ",
    "Bhimashankar": "भीमाशंकर",
    "Kashi Vishwanath": "काशी विश्वनाथ",
    "Trimbakeshwar": "त्र्यम्बकेश्वर",
    "Vaidyanath": "वैद्यनाथ",
    "Nageshwar": "नागेश्वर",
    "Rameshwar": "रामेश्वर",
    "Grishneshwar": "घृष्णेश्वर"
};


// Process raw data to create final Jyotirlinga array
export const jyotirlingasData: Jyotirlinga[] = rawData.map(item => ({
  ...item, // This will include the image field from rawData
  id: item.name.toLowerCase().replace(/ /g, '-'), // Generate ID from name
  sanskritName: sanskritNames[item.name] || '', // Add Sanskrit name
  // Simple AI hint based on name and location
  aiHint: `${item.name.toLowerCase()} jyotirlinga ${item.location.toLowerCase().split(',')[0]} temple shiva shrine`
}));

// Function to get all Jyotirlingas
export const getAllJyotirlingas = (): Jyotirlinga[] => {
  return jyotirlingasData;
};

// Function to get a specific Jyotirlinga by ID
export const getJyotirlingaById = (id: string): Jyotirlinga | undefined => {
  return jyotirlingasData.find(linga => linga.id === id);
};

