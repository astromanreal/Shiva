
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
}

// Raw data provided by the user
const rawData = [
  {
    name: "Somnath",
    deity: "Someshwara",
    location: "Prabhas Patan, Veraval",
    state: "Gujarat",
    significance: "Considered the first of the 12 Jyotirlingas. Rebuilt several times due to repeated destruction.",
    coordinates: { latitude: 20.8880, longitude: 70.4010 }
  },
  {
    name: "Mallikarjuna",
    deity: "Mallikarjuna Swamy",
    location: "Srisailam",
    state: "Andhra Pradesh",
    significance: "Located on the Nallamala Hills, it is both a Jyotirlinga and a Shakti Peetha.",
    coordinates: { latitude: 16.0722, longitude: 78.8688 }
  },
  {
    name: "Mahakaleshwar",
    deity: "Mahakaleshwar",
    location: "Ujjain",
    state: "Madhya Pradesh",
    significance: "Only south-facing (Dakshinamukhi) Jyotirlinga; associated with time and death (Kala).",
    coordinates: { latitude: 23.1828, longitude: 75.7682 }
  },
  {
    name: "Omkareshwar",
    deity: "Omkareshwar",
    location: "Mandhata Island, Narmada River",
    state: "Madhya Pradesh",
    significance: "Island shaped like the Om symbol; revered alongside Amareshwar temple nearby.",
    coordinates: { latitude: 22.2420, longitude: 76.1486 }
  },
  {
    name: "Kedarnath",
    deity: "Kedarnath",
    location: "Kedarnath, Himalayas",
    state: "Uttarakhand",
    significance: "One of the most remote Jyotirlingas; accessible only during specific months.",
    coordinates: { latitude: 30.7352, longitude: 79.0669 }
  },
  {
    name: "Bhimashankar",
    deity: "Bhimashankar",
    location: "Pune District",
    state: "Maharashtra",
    significance: "Surrounded by dense forests; origin of Bhima river.",
    coordinates: { latitude: 19.0730, longitude: 73.5539 }
  },
  {
    name: "Kashi Vishwanath",
    deity: "Vishwanath",
    location: "Varanasi",
    state: "Uttar Pradesh",
    significance: "Located on the banks of Ganga; one of the most revered pilgrimage sites.",
    coordinates: { latitude: 25.3109, longitude: 83.0095 }
  },
  {
    name: "Trimbakeshwar",
    deity: "Trimbakeshwar",
    location: "Trimbak, Nashik",
    state: "Maharashtra",
    significance: "Source of the Godavari River; has three faces representing Brahma, Vishnu, and Shiva.",
    coordinates: { latitude: 19.9394, longitude: 73.5309 }
  },
  {
    name: "Vaidyanath",
    deity: "Vaidyanath",
    location: "Deoghar",
    state: "Jharkhand",
    significance: "Believed to heal diseases; associated with Ravana’s devotion to Shiva.",
    coordinates: { latitude: 24.4854, longitude: 86.6995 }
  },
  {
    name: "Nageshwar",
    deity: "Nageshwar",
    location: "Dwarka",
    state: "Gujarat",
    significance: "Protector of devotees from poison and fear; closely linked with the legend of demon Daruka.",
    coordinates: { latitude: 22.2455, longitude: 68.9671 }
  },
  {
    name: "Rameshwar", // Changed name for ID consistency
    deity: "Ramanathaswamy",
    location: "Rameswaram",
    state: "Tamil Nadu",
    significance: "Linked with Ramayana; built by Lord Rama before crossing to Lanka.",
    coordinates: { latitude: 9.2885, longitude: 79.3177 }
  },
  {
    name: "Grishneshwar",
    deity: "Grishneshwar",
    location: "Ellora, near Aurangabad",
    state: "Maharashtra",
    significance: "The last of the 12 Jyotirlingas; near Ellora Caves, UNESCO World Heritage Site.",
    coordinates: { latitude: 19.8707, longitude: 75.1796 }
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
  ...item,
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
