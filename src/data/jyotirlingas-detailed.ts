

export interface Location {
  place: string;
  district?: string;
  state: string;
  country: string;
  latitude?: number;
  longitude?: number;
  coordinates?: {
      latitude: number;
      longitude: number;
  };
  temple?: string;
  altitude?: string;
  city?: string;
}

export interface TempleDetails {
  temple_name: string;
  architecture_style: string;
  built_by?: string;
  rebuilt_by?: string[];
  current_structure_year?: string;
  constructed_by?: string;
  temple_complex?: string;
  features?: string[];
  access?: string[];
  altitude?: string;
  materials?: string[];
  notableFeatures?: string[];
}

export interface JyotirlingaSignificance {
  order: string | number;
  meaning?: string;
  symbolism?: string;
  associated_element?: string;
  spiritual_benefits?: string[];
  scriptural_reference?: string[] | string;
  associated_texts?: string[];
  beliefs?: string[];
}

export interface Legend {
  summary: string;
  scriptural_sources: string[];
  sources?: string[];
  story?: string;
  associatedFigures?: string[];
}

export interface TempleTiming {
  open: string;
  close: string;
  opening?: string;
  closing?: string;
  season?: string;
  aarti_timings?: {
    morning: string;
    midday: string;
    evening: string;
  };
}

export interface ArchitectureHighlights {
  shikhara_height?: string;
  main_sanctum?: string;
  direction?: string;
  special_feature?: string;
  jyotirlinga_type?: string;
  unique_feature?: string;
  bhasma_aarti?: string;
  situated_on?: string;
  river_nearby?: string;
}

export interface VisitInfo {
  nearest_railway_station: string;
  nearest_airport: string;
  best_time_to_visit: string;
  facilities?: string[];
  accessibility?: string;
  accommodation?: string;
  pilgrimage?: {
    importance: string;
    popularRoute: string;
  }
}

export interface Mantra {
  sanskrit: string;
  english: string;
  benefit: string;
}

export interface JyotirlingaDetailed {
  id: string; // Using string ID for consistency
  name: string;
  sanskrit_name?: string;
  alternateNames?: string[];
  location: Location;
  temple_details: TempleDetails;
  jyotirlinga_significance: JyotirlingaSignificance;
  legend: Legend;
  temple_timing: TempleTiming;
  festivals_celebrated: string[];
  rituals: string[];
  architecture_highlights: ArchitectureHighlights;
  images?: (string | { url: string; description: string })[];
  videos?: (string | { url: string; description: string })[];
  visit_info: VisitInfo;
  mantras?: Mantra[];
  tags: string[];
  image?: string; // From simple data, for hero image
  aiHint?: string; // From simple data
  deity?: { main_deity: string; consort?: string; form?: string, symbolism?: string, name?:string }; // New field
  description?: string; // New field
  jyotirlinga_order?: number;
  spiritual_significance?: string;
  associated_legend?: { summary: string, sources: string[] };
  features?: ArchitectureHighlights;
  media?: { image_url: string, video_links: string[], virtual_tour: string };
  official_website?: string;
  references?: string[];
  visitor_info?: VisitInfo;
}

const jyotirlingasDetailedData: Omit<JyotirlingaDetailed, 'image' | 'aiHint'>[] = [
  {
    id: "somnath",
    name: "Somnath Jyotirlinga",
    sanskrit_name: "सोमनाथ ज्योतिर्लिङ्ग",
    deity: {
      main_deity: "Someshwara (Shiva)",
      consort: "Parvati"
    },
    location: {
      place: "Prabhas Patan",
      district: "Gir Somnath",
      state: "Gujarat",
      country: "India",
      latitude: 20.888,
      longitude: 70.401
    },
    temple_details: {
      temple_name: "Somnath Temple",
      architecture_style: "Chaulukya (Solanki) style",
      built_by: "Initially by Moon God (Soma), rebuilt multiple times",
      rebuilt_by: [
        "Lord Soma (as per sacred accounts)",
        "Vikramaditya",
        "Maitraka Kings",
        "Sardar Vallabhbhai Patel (modern reconstruction)"
      ],
      current_structure_year: "1951"
    },
    jyotirlinga_significance: {
      order: 1,
      meaning: "Somnath means 'Lord of the Moon'.",
      symbolism: "Represents Shiva as the healer and forgiver. Associated with moon god Soma regaining his radiance after penance.",
      associated_element: "Moon / Soma",
      spiritual_benefits: [
        "Relief from sins",
        "Healing from emotional and mental distress",
        "Improvement in health and vitality"
      ]
    },
    legend: {
      summary: "The Moon God (Chandra) was cursed by his father-in-law Daksha to lose his radiance. Chandra performed penance to Lord Shiva at Prabhas Tirtha and was relieved of the curse. Shiva manifested as a Jyotirlinga, hence called Somnath.",
      scriptural_sources: [
        "Shiva Purana – Koti Rudra Samhita",
        "Skanda Purana",
        "Linga Purana"
      ]
    },
    temple_timing: {
      open: "6:00 AM",
      close: "9:00 PM",
      aarti_timings: {
        morning: "7:00 AM",
        midday: "12:00 PM",
        evening: "7:00 PM"
      }
    },
    festivals_celebrated: [
      "Mahashivratri",
      "Kartik Purnima",
      "Shravan Somvar",
      "Somnath Mahotsav"
    ],
    rituals: [
      "Abhishekam with milk, water, and honey",
      "Chandra Puja",
      "Somvar Vrat (Monday fasting)"
    ],
    architecture_highlights: {
      shikhara_height: "155 feet",
      main_sanctum: "Houses the Jyotirlinga",
      direction: "Triveni Sangam facing (Arabian Sea)",
      special_feature: "No land in straight line between temple and South Pole (inscription inside temple)"
    },
    images: [
      "https://example.com/images/somnath_temple.jpg",
      "https://example.com/images/somnath_jyotirlinga.jpg"
    ],
    videos: [
      "https://youtube.com/somnath-virtual-tour"
    ],
    visit_info: {
      nearest_railway_station: "Veraval (7 km)",
      nearest_airport: "Diu Airport (85 km), Rajkot (190 km)",
      best_time_to_visit: "October to March",
      facilities: ["Accommodation", "Guided tours", "Prasadam", "Online darshan"]
    },
    mantras: [
      {
        sanskrit: "ॐ सोमेश्वराय नमः",
        english: "Om Someshwaraya Namah",
        benefit: "Brings peace of mind and moon-related blessings"
      }
    ],
    tags: [
      "Jyotirlinga",
      "Shiva Temple",
      "Somnath",
      "Spiritual Healing",
      "Chandra Dev"
    ]
  },
   {
    id: "mallikarjuna",
    name: "Mallikarjuna Jyotirlinga",
    sanskrit_name: "मल्लिकार्जुन ज्योतिर्लिङ्ग",
    description: "Mallikarjuna Jyotirlinga is one of the twelve sacred Jyotirlingas of Lord Shiva and is located on the picturesque Srisailam hill in Andhra Pradesh. This temple is unique because it is one of the few places where both Shiva and Parvati are worshipped together. The temple is considered extremely holy and is an important site for Shaivites. The temple architecture reflects Vijayanagara and Chalukya styles and is situated amidst the Nallamala forest range on the banks of the Krishna River.",
    deity: {
      main_deity: "Mallikarjuna (Shiva)",
      consort: "Bhramaramba (Parvati)"
    },
    location: {
      place: "Srisailam",
      district: "Nandyal",
      state: "Andhra Pradesh",
      country: "India",
      latitude: 16.0725,
      longitude: 78.8694
    },
    temple_details: {
      temple_name: "Mallikarjuna Swamy Temple",
      architecture_style: "Dravidian"
    },
    jyotirlinga_significance: {
      order: 2,
      meaning: "Mallika means 'Jasmine' and Arjuna refers to Lord Shiva.",
      symbolism: "Represents the combined power of Shiva and Shakti. It is also a Shakti Peetha.",
      spiritual_benefits: [
        "Absolves sins and grants moksha.",
        "Relief from karmic bondage.",
        "Fulfills righteous desires."
      ]
    },
    legend: {
      summary: "According to sacred accounts, Shiva and Parvati came to reside at Srisailam to console their son Kartikeya, who was upset over the marriage of his brother Ganesha. Lord Shiva manifested here as Mallikarjuna, and Parvati as Bhramaramba.",
      scriptural_sources: [
        "Skanda Purana",
        "Shiva Purana",
        "Linga Purana"
      ]
    },
    temple_timing: {
      open: "4:30 AM",
      close: "10:00 PM"
    },
    festivals_celebrated: [
      "Maha Shivaratri",
      "Karthika Masam",
      "Navaratri",
      "Sravana Masam"
    ],
    rituals: [
      "Abhishekam",
      "Kumkumarchana for Bhramaramba Devi",
      "Darshan of Sparsha Lingam"
    ],
    architecture_highlights: {
      special_feature: "It is one of the rare temples which is both a Jyotirlinga and a Shakti Peetha.",
      situated_on: "Nallamala Hills",
      river_nearby: "Krishna River"
    },
    images: [
      {
        url: "https://example.com/images/mallikarjuna-temple.jpg",
        description: "Mallikarjuna Jyotirlinga Temple Front View"
      },
      {
        url: "https://example.com/images/mallikarjuna-linga.jpg",
        description: "Sacred Shiva Linga at Mallikarjuna"
      }
    ],
    visit_info: {
      nearest_railway_station: "Markapur Road (85 km)",
      nearest_airport: "Hyderabad (213 km)",
      best_time_to_visit: "September to February"
    },
    mantras: [
      {
        sanskrit: "ॐ श्री मल्लिकार्जुनाय नमः",
        english: "Om Shri Mallikarjunaya Namah",
        benefit: "For divine grace and fulfillment of wishes."
      }
    ],
    tags: [
      "Jyotirlinga",
      "Shaivism",
      "Shiva",
      "Andhra Pradesh",
      "Srisailam",
      "Pilgrimage",
      "Shakti Peetha"
    ],
    official_website: "https://www.srisailamonline.com"
  },
  {
    id: "mahakaleshwar",
    name: "Mahakaleshwar Jyotirlinga",
    sanskrit_name: "महाकालेश्वर ज्योतिर्लिङ्ग",
    description: "Mahakaleshwar Jyotirlinga is one of the most revered Shiva shrines and is located in the ancient city of Ujjain. This Jyotirlinga is unique as it is the only one facing south (Dakshinamukhi), considered highly auspicious and powerful in tantric traditions. The temple has a deep connection with time (Kala), and the deity is regarded as the Lord of Time—Mahakala.",
    deity: {
      main_deity: "Mahakaleshwar (Shiva)",
      consort: "Goddess Mahakali (as part of the Shakti Peetha nearby)"
    },
    location: {
      place: "Ujjain",
      district: "Ujjain",
      state: "Madhya Pradesh",
      country: "India",
      latitude: 23.1828,
      longitude: 75.7682
    },
    temple_details: {
      temple_name: "Mahakaleshwar Jyotirlinga Temple",
      architecture_style: "Maratha and Bhumija style",
    },
    jyotirlinga_significance: {
      order: 3,
      meaning: "The Great Lord of Time.",
      symbolism: "Represents Shiva as the master of time and death. The south-facing lingam is a unique feature associated with tantric power and control over mortality.",
      spiritual_benefits: [
          "Liberation from the fear of death.",
          "Grants moksha (liberation from rebirth).",
          "Protection from untimely death and calamities."
      ]
    },
    legend: {
      summary: "A demon named Dushana once terrorized Ujjain. To protect his devotees, Lord Shiva appeared from the ground as a fierce flame and destroyed the demon. The spot where Shiva appeared became the site of the Mahakaleshwar temple. It is said that Lord Shiva took this form to permanently reside in Ujjain as Mahakala.",
      scriptural_sources: [
        "Shiva Purana",
        "Skanda Purana",
        "Koti Rudra Samhita"
      ]
    },
    temple_timing: {
      open: "3:00 AM",
      close: "11:00 PM"
    },
    festivals_celebrated: [
      "Maha Shivaratri",
      "Nitya Bhasma Aarti",
      "Shravan Month",
      "Nag Panchami",
      "Harihara Milan during Kartik"
    ],
    rituals: [
      "Bhasma Aarti (daily morning ritual with sacred ash)",
      "Abhishekam",
      "Tantric worship"
    ],
    architecture_highlights: {
      special_feature: "Dakshinamukhi (south-facing lingam) and the daily Bhasma Aarti.",
      direction: "South",
      unique_feature: "Dakshinamukhi (south-facing lingam)",
      bhasma_aarti: "Performed daily with sacred ash from a cremation ground"
    },
     images: [
      {
        url: "https://example.com/images/mahakaleshwar-temple.jpg",
        description: "Mahakaleshwar Temple Ujjain Front View"
      },
      {
        url: "https://example.com/images/mahakaleshwar-linga.jpg",
        description: "Mahakaleshwar Jyotirlinga sanctum"
      }
    ],
    visit_info: {
      nearest_railway_station: "Ujjain Junction (2 km)",
      nearest_airport: "Devi Ahilya Bai Holkar Airport, Indore (55 km)",
      best_time_to_visit: "October to March"
    },
    mantras: [
      {
        sanskrit: "ॐ महाकालाय नमः",
        english: "Om Mahakalaya Namah",
        benefit: "For overcoming fear of time and death, and for immense courage."
      }
    ],
    tags: [
      "Jyotirlinga",
      "Shaivism",
      "Ujjain",
      "Mahakala",
      "Tantra",
      "Pilgrimage",
      "Madhya Pradesh"
    ],
    official_website: "https://mahakaleshwar.nic.in"
  },
  {
    id: "omkareshwar",
    name: "Omkareshwar Jyotirlinga",
    sanskrit_name: "ओंकारेश्वर ज्योतिर्लिङ्ग",
    deity: {
        name: "Omkareshwar Mahadev",
        main_deity: "Omkareshwar (Lord of the Om Sound)",
        form: "Shiva as Omkareshwar (Lord of the Om Sound)",
        symbolism: "Represents the formless aspect of Shiva manifesting as Omkara – the primal sound of the universe."
    },
    location: {
        place: "Mandhata Island, Narmada River",
        district: "Khandwa",
        state: "Madhya Pradesh",
        country: "India",
        coordinates: {
            latitude: 22.2445,
            longitude: 76.1511
        }
    },
    temple_details: {
        temple_name: "Omkareshwar Temple",
        architecture_style: "Nagara style with intricately carved spires",
        constructed_by: "Various dynasties over centuries, including the Paramaras and Marathas",
        temple_complex: "Situated on the sacred Om-shaped island formed naturally in the Narmada River",
        features: [
            "Two main Shiva lingams: Omkareshwar and Amareshwar",
            "River ghats, ancient shrines, and scenic surroundings"
        ]
    },
    jyotirlinga_significance: {
        order: 4,
        meaning: "Lord of the Om Sound",
        symbolism: "The primal sound of creation.",
        scriptural_reference: "Shiva Purana, Skanda Purana",
        associated_texts: [
            "Lingashtakam",
            "Shiva Mahimna Stotra"
        ],
        beliefs: [
            "It is believed that Lord Shiva appeared here to settle a dispute among Devas and Danavas.",
            "Worshipping Omkareshwar grants peace, spiritual progress, and liberation (moksha)."
        ]
    },
    legend: {
      summary: "King Mandhata of the Ikshvaku clan worshipped Lord Shiva here until the Lord manifested himself as a Jyotirlinga. Another legend speaks of a war between Devas and Danavas, where Devas prayed to Shiva who appeared as Omkareshwar and defeated the Danavas.",
      scriptural_sources: ["Shiva Purana"]
    },
    temple_timing: {
      open: "5:00 AM",
      close: "9:30 PM"
    },
    festivals_celebrated: [
        "Mahashivaratri",
        "Shravan Month (July–August)",
        "Narmada Jayanti"
    ],
    rituals: ["Narmada Snan (holy dip)", "Abhishekam", "Parikrama of the island"],
    architecture_highlights: {
      special_feature: "The island itself is shaped like the ॐ symbol."
    },
    visit_info: {
        best_time_to_visit: "October to March",
        accessibility: "Well-connected by road from Indore (77 km), ferry services available across Narmada",
        facilities: [
            "Accommodation for pilgrims",
            "Boating on Narmada",
            "Ropeway (Omkareshwar Parikrama)"
        ],
        nearest_railway_station: "Mortakka (12 km)",
        nearest_airport: "Indore (77 km)"
    },
    mantras: [{
      sanskrit: "ॐ ओंकारेश्वराय नमः",
      english: "Om Omkareshwaraya Namah",
      benefit: "Connects the devotee with the primal cosmic vibration."
    }],
    tags: [
      "Jyotirlinga",
      "Shiva Temple",
      "Omkareshwar",
      "Narmada River",
      "Madhya Pradesh",
      "Hindu Pilgrimage"
    ]
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath Jyotirlinga',
    sanskrit_name: 'केदारनाथ ज्योतिर्लिङ्ग',
    deity: {
      main_deity: 'Kedarnath (Shiva)',
      form: 'Lord of the Kedaara (humps)—who relieved the Pandavas of their guilt',
      consort: 'Goddess Parvati (in nearby temple at Triyuginarayan)',
    },
    location: {
      place: 'Kedarnath',
      district: 'Rudraprayag',
      state: 'Uttarakhand',
      country: 'India',
      coordinates: { latitude: 30.7352, longitude: 79.066 },
      altitude: '3,583 meters above sea level',
    },
    temple_details: {
      temple_name: 'Kedarnath Temple',
      architecture_style: 'Ancient North Indian Himalayan stone temple, Nagara style',
      built_by: 'Traditionally by the Pandavas; rebuilt by Adi Shankaracharya in 8th century CE',
      access: ['Trek from Gaurikund (14 km)', 'Helicopter services to Gaurikund'],
    },
    jyotirlinga_significance: {
      order: 5,
      meaning: 'Lord of the Field/Peak',
      symbolism: 'Represents Shiva as the eternal ascetic of the Himalayas, granting liberation from guilt and sin.',
      scriptural_reference: ['Skanda Purana – Kedara Khanda', 'Bhavishya Purana'],
      beliefs: ['Visiting Kedarnath absolves sins and grants moksha', 'Part of the Chota Char Dham pilgrimage circuit'],
    },
    legend: {
      summary: "After the Kurukshetra war, the Pandavas sought Shiva’s forgiveness. Shiva eluded them by hiding in the ground as a bull; when discovered, only his hump remained—hence Kedarnath.",
      sources: ["Mahabharata – Vana Parva", "Skanda Purana"],
      scriptural_sources: ["Mahabharata – Vana Parva", "Skanda Purana"],
    },
    temple_timing: {
      open: '4:00 AM',
      close: '9:00 PM',
      season: 'Open mid-April to November (weather-permitting)',
    },
    festivals_celebrated: ['Maha Shivaratri', 'Shravan Somvar', 'Badri-Kedar Festival'],
    rituals: ['Abhishekam with Himalayan water', 'Offerings of Brahma Kamal flower', 'Pandava Puja'],
    architecture_highlights: {
      jyotirlinga_type: 'Swayambhu (self-manifested)',
      unique_feature: 'Survived 2013 flash floods with minimal damage',
      special_feature: 'Uniquely shaped lingam resembling a bull\'s hump.',
    },
    images: [
      { url: 'https://example.com/images/kedarnath_temple.jpg', description: 'Kedarnath Temple at Dawn' },
      { url: 'https://example.com/images/kedarnath_valley.jpg', description: 'Surrounding Himalayan Valley' },
    ],
    visit_info: {
      best_time_to_visit: 'May to June & September to October',
      nearest_railway_station: 'Rishikesh (226 km)',
      nearest_airport: 'Jolly Grant Airport, Dehradun (239 km)',
      accommodation: 'Temples Guest Houses, PWD rest houses, Tented camps',
    },
    mantras: [
      {
        sanskrit: 'ॐ केदाराय नमः',
        english: 'Om Kedaraya Namah',
        benefit: 'For courage, spiritual strength, and absolution of sins.',
      },
    ],
    tags: ['Jyotirlinga', 'Kedarnath', 'Himalayas', 'Shaivism', 'Pilgrimage', 'Chota Char Dham'],
  },
  {
    id: "bhimashankar",
    name: "Bhimashankar Jyotirlinga",
    sanskrit_name: "भीमाशंकर ज्योतिर्लिङ्ग",
    deity: {
      main_deity: "Bhimashankar (Shiva)",
      form: "Shiva as the destroyer of demon Bhima",
      consort: "Goddess Parvati (Kamalarati)"
    },
    location: {
      place: "Bhimashankar",
      district: "Pune",
      state: "Maharashtra",
      country: "India",
      coordinates: {
        latitude: 19.0706,
        longitude: 73.5515
      }
    },
    temple_details: {
      temple_name: "Bhimashankar Temple",
      architecture_style: "Nagara style, black stone structure",
      built_by: "Nana Phadnavis in 18th century",
      altitude: "1,000 meters above sea level",
      access: [
        "Trek through Bhimashankar Wildlife Sanctuary",
        "Motorable road from Pune and Mumbai"
      ]
    },
    jyotirlinga_significance: {
      order: 6,
      meaning: "The one who makes one formidable (Bhima).",
      symbolism: "Represents Shiva's power to destroy powerful demons and protect his devotees.",
      spiritual_benefits: [
        "Worship here removes spiritual ignorance and sins.",
        "Considered sacred due to its location in Sahyadri hills."
      ],
      scriptural_reference: ["Shiva Purana – Koti Rudra Samhita"]
    },
    legend: {
      summary: "The demon Bhima, son of Kumbhakarna, terrorized the region. Lord Shiva appeared to protect sages and devotees and vanquished him, manifesting as a Jyotirlinga.",
      sources: ["Shiva Purana", "Local folklore"],
      scriptural_sources: ["Shiva Purana", "Local folklore"],
    },
    temple_timing: {
      opening: "4:30 AM",
      closing: "9:30 PM",
      open: "4:30 AM",
      close: "9:30 PM",
      season: "Accessible year-round, best in winter and post-monsoon"
    },
    festivals_celebrated: ["Maha Shivaratri", "Shravan Month Celebrations", "Kartika Poornima"],
    rituals: ["Abhishekam", "Rudrabhishekam"],
    architecture_highlights: {
      jyotirlinga_type: "Swayambhu (self-manifested)",
      unique_feature: "Temple is situated in a dense forest region rich in biodiversity and is part of a wildlife sanctuary."
    },
    images: [
      { url: "https://example.com/images/bhimashankar_temple.jpg", description: "Bhimashankar Temple nestled in Sahyadri hills" },
      { url: "https://example.com/images/bhimashankar_forest.jpg", description: "Lush green forest around the temple" }
    ],
    visit_info: {
      best_time_to_visit: "October to February",
      nearest_railway_station: "Pune (120 km)",
      nearest_airport: "Pune Airport (125 km)",
      accommodation: "Guesthouses, forest lodges, small hotels in nearby villages"
    },
    mantras: [
      {
        sanskrit: "ॐ भीमाशंकराय नमः",
        english: "Om Bhimashankaraya Namah",
        benefit: "For strength, courage, and protection from evil."
      }
    ],
    tags: ["Jyotirlinga", "Bhimashankar", "Maharashtra", "Shaivism", "Wildlife Sanctuary", "Pilgrimage"]
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath Jyotirlinga",
    sanskrit_name: "काशी विश्वनाथ ज्योतिर्लिङ्ग",
    deity: {
      main_deity: "Vishwanath (Shiva as the Lord of the Universe)",
      form: "Shiva as Vishweshwar (Universal Lord)",
      consort: "Goddess Annapurna"
    },
    location: {
      place: "Varanasi (Kashi)",
      district: "Varanasi",
      state: "Uttar Pradesh",
      country: "India",
      coordinates: {
        latitude: 25.3109,
        longitude: 83.0095
      }
    },
    temple_details: {
      temple_name: "Kashi Vishwanath Temple",
      architecture_style: "North Indian temple architecture (Nagara style)",
      built_by: "Rebuilt by Ahilyabai Holkar in 1780",
      altitude: "80.71 meters",
      access: [
        "Located on the western bank of the Ganga in Varanasi",
        "Accessible by foot through narrow alleys from Dashashwamedh Ghat or Godowlia"
      ]
    },
    jyotirlinga_significance: {
      order: 7,
      meaning: "Lord of the Universe",
      symbolism: "Represents Shiva as the supreme ruler and the ultimate reality that pervades the cosmos.",
      spiritual_benefits: [
          "Grants Moksha (liberation).",
          "Believed that Lord Shiva himself chants the Taraka Mantra to those who die in Kashi."
      ],
      scriptural_reference: ["Shiva Purana", "Skanda Purana", "Kashi Khanda"],
      beliefs: [
          "One of the most sacred places for attaining liberation.",
          "Kashi is said to rest on Shiva's trident, making it indestructible."
      ]
    },
    legend: {
      summary: "Kashi (Varanasi) is believed to be the place where Shiva grants liberation. The temple has stood the test of time, surviving invasions, demolitions, and being rebuilt by devotees over centuries.",
      scriptural_sources: ["Kashi Khanda of Skanda Purana", "Shiva Purana"]
    },
    festivals_celebrated: [
      "Maha Shivaratri",
      "Dev Deepawali",
      "Shravan Somvar",
      "Makar Sankranti"
    ],
    temple_timing: {
      opening: "3:00 AM",
      closing: "11:00 PM",
      open: "3:00 AM",
      close: "11:00 PM",
      season: "Open year-round"
    },
    rituals: ["Ganga Aarti", "Abhishekam", "Rudrabhishekam"],
    architecture_highlights: {
      jyotirlinga_type: "Highly revered and central to Shaivism",
      unique_feature: "Located in Kashi, considered one of the holiest cities in Hinduism; associated with the Ganga and liberation."
    },
    visit_info: {
      best_time_to_visit: "October to March",
      nearest_railway_station: "Varanasi Junction",
      nearest_airport: "Lal Bahadur Shastri International Airport",
      accommodation: "Hotels, Dharamshalas, and lodges in Varanasi"
    },
    images: [
      { "url": "https://example.com/images/kashi_vishwanath_temple.jpg", "description": "The golden spire of the Kashi Vishwanath Temple" },
      { "url": "https://example.com/images/kashi_ghat.jpg", "description": "Ganga ghats of Kashi near the temple" }
    ],
    mantras: [{
      sanskrit: "ॐ श्री विश्वनाथाय नमः",
      english: "Om Shri Vishwanathaya Namah",
      benefit: "For universal consciousness and liberation."
    }],
    tags: [
      "Jyotirlinga",
      "Kashi Vishwanath",
      "Varanasi",
      "Shaivism",
      "Moksha",
      "Pilgrimage"
    ]
  },
  {
    id: "trimbakeshwar",
    name: "Trimbakeshwar Jyotirlinga",
    sanskrit_name: "त्र्यम्बकेश्वर ज्योतिर्लिङ्ग",
    jyotirlinga_order: 8,
    deity: {
      main_deity: "Trimbakeshwar (Shiva as the Lord of the Trinity)",
      form: "Shiva with three faces symbolizing Brahma, Vishnu, and Mahesh",
      consort: "Goddess Parvati",
    },
    location: {
      place: "Trimbak",
      district: "Nashik",
      state: "Maharashtra",
      country: "India",
      coordinates: {
        latitude: 19.9406,
        longitude: 73.5292,
      },
    },
    temple_details: {
      temple_name: "Trimbakeshwar Shiva Temple",
      architecture_style: "Hemadpanthi style (black stone)",
      built_by: "Peshwa Balaji Baji Rao (Nanasaheb) in the 18th century",
      altitude: "700 meters",
      access: [
        "Located at the source of the Godavari River",
        "Accessible by road from Nashik city (~28 km)",
      ],
    },
    jyotirlinga_significance: {
      order: 8,
      meaning: "The Three-Eyed Lord",
      symbolism: "The three faces of the Lingam symbolize Brahma, Vishnu, and Shiva, embodying the cosmic functions of creation, preservation, and destruction.",
      spiritual_benefits: [
        "Associated with moksha and pitru dosha nivaran (ancestral peace rituals).",
      ],
      scriptural_reference: ["Shiva Purana", "Padma Purana"],
      beliefs: [
        "One of the rare Jyotirlingas where the lingam has three faces representing the Trimurti.",
        "Believed to be the place where the sacred Godavari River originates.",
      ],
    },
    associated_legend: {
      summary: "Sage Gautama was granted the flow of the sacred Ganga (as Godavari) here by Shiva. To sanctify the place, Lord Shiva made His abode here as Trimbakeshwar. The Lingam is said to be eroding, symbolizing the erasure of sins.",
      sources: ["Shiva Purana", "Padma Purana"],
    },
    legend: {
      summary: "Sage Gautama was granted the flow of the sacred Ganga (as Godavari) here by Shiva. To sanctify the place, Lord Shiva made His abode here as Trimbakeshwar. The Lingam is said to be eroding, symbolizing the erasure of sins.",
      scriptural_sources: ["Shiva Purana", "Padma Purana"],
    },
    festivals_celebrated: [
      "Maha Shivaratri",
      "Kumbh Mela (every 12 years)",
      "Shravan Somvar",
      "Ganga Dashahara",
    ],
    rituals: ["Abhishekam", "Pitru Dosh Puja"],
    temple_timing: {
      opening: "5:30 AM",
      closing: "9:00 PM",
      open: "5:30 AM",
      close: "9:00 PM",
      season: "Open year-round",
    },
    architecture_highlights: {
      jyotirlinga_type: "Rare three-faced lingam representing Trimurti",
      unique_feature: "Origin of Godavari River and one of the most powerful sites for ancestor-related rituals.",
    },
    visit_info: {
      best_time_to_visit: "October to March",
      nearest_railway_station: "Nashik Road",
      nearest_airport: "Ozar Airport, Nashik",
      accommodation: "Available in Trimbak and Nashik",
    },
    images: [
      {
        url: "https://example.com/images/trimbakeshwar_temple.jpg",
        description: "Trimbakeshwar Temple structure in black stone",
      },
      {
        url: "https://example.com/images/godavari_origin.jpg",
        description: "Origin point of Godavari near Trimbakeshwar",
      },
    ],
    mantras: [
      {
        sanskrit: "ॐ त्र्यम्बकेश्वराय नमः",
        english: "Om Tryambakeshwaraya Namah",
        benefit: "For health, longevity, and ancestral blessings.",
      },
    ],
    tags: [
      "Jyotirlinga",
      "Trimbakeshwar",
      "Nashik",
      "Trimurti",
      "Godavari",
      "Ancestral Rituals",
      "Pilgrimage",
    ],
  },
  {
    id: "vaidyanath",
    name: "Vaidyanath Jyotirlinga",
    sanskrit_name: "वैद्यनाथ ज्योतिर्लिङ्ग",
    alternateNames: ["Baidyanath", "Vaijnath"],
    jyotirlinga_order: 9,
    description: "Vaidyanath Jyotirlinga is revered as the healing form of Shiva. It is believed that Shiva appeared here as a healer ('Vaidya') to cure Ravana’s wounds after he offered his ten heads in penance. Devotees pray here for health, longevity, and freedom from ailments.",
    deity: {
        main_deity: "Shiva as Vaidyanath (The Divine Healer)",
        consort: "Parvati"
    },
    location: {
        place: "Deoghar",
        state: "Jharkhand",
        country: "India",
        coordinates: {
            latitude: 24.4872,
            longitude: 86.6958
        }
    },
    temple_details: {
        temple_name: "Baidyanath Temple",
        architecture_style: "Nagara style with a pyramidal spire",
        materials: ["Stone", "Granite"],
        notableFeatures: ["The temple is surrounded by 21 smaller temples", "Gold urn atop the spire"]
    },
    jyotirlinga_significance: {
        order: 9,
        meaning: "The Lord of Physicians (Divine Healer)",
        symbolism: "Vaidyanath Jyotirlinga is revered as the healing form of Shiva. It is believed that Shiva appeared here as a healer ('Vaidya') to cure Ravana’s wounds after he offered his ten heads in penance.",
        spiritual_benefits: ["Devotees pray here for health, longevity, and freedom from ailments."]
    },
    legend: {
        summary: "According to sacred accounts, Ravana, a great devotee of Shiva, offered his ten heads in penance. Pleased, Shiva healed Ravana and granted him a Jyotirlinga. Ravana was tricked by the gods into placing the lingam in Deoghar, where it became rooted and became Vaidyanath Jyotirlinga.",
        scriptural_sources: ["Shiva Purana", "Local Folklore"],
        associatedFigures: ["Ravana", "Shiva", "Vishnu"]
    },
    temple_timing: {
        open: "4:00 AM",
        close: "9:00 PM"
    },
    festivals_celebrated: [
        "Shravan Mela (July–August)",
        "Maha Shivaratri",
        "Nag Panchami"
    ],
    rituals: [
        "Abhishekam with water, milk, and bilva leaves",
        "Rudrabhishek",
        "Kanwar Yatra during Shravan"
    ],
    architecture_highlights: {
        special_feature: "A major site for healing prayers and associated with the legend of Ravana."
    },
    visit_info: {
        nearest_railway_station: "Deoghar (JSME)",
        nearest_airport: "Deoghar Airport (DGH)",
        best_time_to_visit: "October to March",
        pilgrimage: {
            importance: "One of the 12 sacred Jyotirlingas and a major site for healing prayers",
            popularRoute: "Pilgrims walk from Sultanganj (approx. 105 km) to Deoghar carrying water from the Ganga in kanwars"
        }
    },
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Baidyanath_Temple_Deoghar.jpg/800px-Baidyanath_Temple_Deoghar.jpg"],
    tags: [
        "Jyotirlinga",
        "Vaidyanath",
        "Deoghar",
        "Jharkhand",
        "Healing",
        "Pilgrimage",
        "Ravana"
    ],
    official_website: "https://deoghar.nic.in/tourist-place/baidyanath-dham/",
  },
  {
    id: "nageshwar",
    name: "Nageshwar Jyotirlinga",
    sanskrit_name: "नागेश्वर ज्योतिर्लिङ्ग",
    alternateNames: ["Nageshwara", "Naganath", "Darukavan Nageshwar"],
    jyotirlinga_order: 10,
    description: "Nageshwar Jyotirlinga symbolizes protection from all kinds of poison and evil. It is believed that Lord Shiva appeared here to protect his devotee Supriya from the demon Daruka. The lingam here is unique as it faces south and is said to be self-manifested.",
    deity: {
        main_deity: "Shiva as Nageshwar (Lord of Serpents)",
        consort: "Parvati"
    },
    location: {
        city: "Near Dwarka",
        state: "Gujarat",
        country: "India",
        place: "Near Dwarka",
        coordinates: {
            latitude: 22.2701,
            longitude: 69.1674
        }
    },
    temple_details: {
        temple_name: "Nageshwar Jyotirlinga Temple",
        architecture_style: "Modern style with traditional elements",
        materials: ["Sandstone", "Marble"],
        notableFeatures: ["80 ft tall Shiva statue", "Red-pink stone shikhara"]
    },
    jyotirlinga_significance: {
        order: 10,
        meaning: "Lord of Serpents",
        symbolism: "Symbolizes protection from all kinds of poison and evil. It is believed that Lord Shiva appeared here to protect his devotee Supriya from the demon Daruka.",
        spiritual_benefits: ["Freedom from fear and evil."]
    },
    legend: {
        summary: "The legend tells of a devotee named Supriya who was imprisoned by the demon Daruka. Supriya worshipped Shiva while in captivity, and Shiva appeared to rescue him, destroying the demon. The place where Shiva manifested to protect his devotee came to be known as Nageshwar, and the lingam established there became one of the Jyotirlingas.",
        scriptural_sources: ["Shiva Purana"],
        associatedFigures: ["Supriya", "Daruka", "Shiva"]
    },
    festivals_celebrated: [
        "Maha Shivaratri",
        "Shravan Maas (July–August)",
        "Nag Panchami"
    ],
    rituals: [
        "Abhishekam with water, milk, ghee, and honey",
        "Offerings of bilva leaves and flowers",
        "Special pujas during Shravan and Shivaratri"
    ],
    architecture_highlights: {
        special_feature: "A powerful site for devotees seeking spiritual strength and freedom from fear and evil."
    },
    visit_info: {
        best_time_to_visit: "October to March",
        nearest_railway_station: "Dwarka Railway Station",
        nearest_airport: "Jamnagar Airport",
        pilgrimage: {
            importance: "A powerful site for devotees seeking spiritual strength and freedom from fear and evil",
            popularRoute: "Located on the route between Dwarka and Bet Dwarka, easily accessible by road"
        }
    },
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Nageshwar_Jyotirlinga_Temple.jpg/800px-Nageshwar_Jyotirlinga_Temple.jpg"],
    tags: [
        "Jyotirlinga",
        "Nageshwar",
        "Gujarat",
        "Shaivism",
        "Serpent Lord"
    ],
    official_website: "https://dwarka.gujarat.gov.in/tourist-place/nageshwar-jyotirling/",
    temple_timing: {
      open: "6:00 AM",
      close: "9:00 PM"
    }
  },
  {
    id: "rameshwaram",
    name: "Rameshwaram Jyotirlinga",
    sanskrit_name: "रामेश्वरम् ज्योतिर्लिङ्ग",
    alternateNames: ["Ramanathaswamy Jyotirlinga", "Rameswaram Jyotirlinga"],
    description: "Rameshwaram is one of the holiest Hindu pilgrimage sites and the southernmost of the 12 Jyotirlingas. It is closely associated with Lord Rama, who is believed to have worshipped Shiva here before crossing to Lanka. The temple is also part of the Char Dham Yatra.",
    jyotirlinga_order: 11,
    deity: {
        main_deity: "Shiva as Ramanathaswamy (Lord of Rama)",
        consort: "Parvati"
    },
    location: {
        place: "Rameswaram",
        state: "Tamil Nadu",
        country: "India",
        coordinates: {
            latitude: 9.288,
            longitude: 79.317
        }
    },
    temple_details: {
        temple_name: "Ramanathaswamy Temple",
        architecture_style: "Dravidian",
        materials: ["Granite", "Limestone"],
        notableFeatures: [
            "Longest temple corridor in Asia (approx. 1220 meters)",
            "Beautiful gopurams and pillared halls"
        ]
    },
    jyotirlinga_significance: {
        order: 11,
        meaning: "Lord of Rama",
        symbolism: "Represents the unity of Shaivism and Vaishnavism, and the sanctity of devotion.",
        spiritual_benefits: ["Absolving sins, particularly the sin of killing a Brahmin (Brahmahatya)."],
        scriptural_reference: ["Ramayana", "Skanda Purana"]
    },
    legend: {
        summary: "According to sacred accounts, after defeating Ravana in Lanka, Lord Rama wanted to absolve the sin of killing a Brahmin (Ravana). He installed a Shiva lingam here and worshipped Lord Shiva. The main lingam is believed to have been made by Sita out of sand, while a second lingam was brought from Kailash by Hanuman.",
        scriptural_sources: ["Ramayana", "Skanda Purana"],
        associatedFigures: ["Rama", "Sita", "Hanuman", "Ravana"]
    },
    temple_timing: {
        open: "5:00 AM",
        close: "9:00 PM"
    },
    festivals_celebrated: [
        "Maha Shivaratri",
        "Thai Amavasya",
        "Navaratri",
        "Rama Navami"
    ],
    rituals: [
        "Bathing in the 22 holy theerthams (temple tanks)",
        "Abhishekam to the Shiva Lingam with water from Ganga",
        "Special poojas during festivals and Amavasya"
    ],
    architecture_highlights: {
        special_feature: "The longest temple corridor in Asia."
    },
    visit_info: {
        best_time_to_visit: "October to April",
        nearest_railway_station: "Rameswaram Railway Station",
        nearest_airport: "Madurai Airport (170 km)",
        pilgrimage: {
            importance: "A must-visit for both Shaivites and Vaishnavites. Considered equivalent to Kashi. Visiting Rameshwaram after Kashi is highly auspicious.",
            popularRoute: "Madurai → Ramanathapuram → Rameswaram (well connected by rail and road)"
        }
    },
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ramanathaswamy_Temple.jpg/800px-Ramanathaswamy_Temple.jpg"],
    tags: [
        "Jyotirlinga",
        "Rameshwaram",
        "Tamil Nadu",
        "Shaivism",
        "Vaishnavism",
        "Ramayana",
        "Pilgrimage"
    ],
    official_website: "https://hrce.tn.gov.in/hrcehome/index_temple.php?tid=4219"
  },
   {
    id: "grishneshwar",
    name: "Grishneshwar Jyotirlinga",
    sanskrit_name: "घृष्णेश्वर ज्योतिर्लिङ्ग",
    alternateNames: ["Ghushmeshwar", "Grushmeshwar"],
    description: "Grishneshwar is the twelfth and last Jyotirlinga on Earth. It is situated near the UNESCO World Heritage Site of Ellora Caves. The temple is revered as the place where Lord Shiva manifested to bless a devoted woman named Kusuma.",
    jyotirlinga_order: 12,
    deity: {
        main_deity: "Shiva as Grishneshwar",
        consort: "Parvati (as Kusuma)"
    },
    location: {
        place: "Verul",
        district: "Aurangabad",
        state: "Maharashtra",
        country: "India",
        coordinates: {
            latitude: 20.0311,
            longitude: 75.1797
        }
    },
    temple_details: {
        temple_name: "Grishneshwar Temple",
        architecture_style: "South Indian Hemadpanthi Style",
        materials: ["Black stone"],
        notableFeatures: [
            "5-tier shikhara (tower)",
            "Beautiful sculptures of various Hindu deities",
            "Carvings from Puranic legends"
        ]
    },
    jyotirlinga_significance: {
        order: 12,
        meaning: "Lord of Compassion",
        symbolism: "Represents Shiva's boundless compassion and grace towards his devotees.",
        spiritual_benefits: ["Fulfillment of desires, family well-being, and moksha."]
    },
    legend: {
        summary: "A devout woman named Kusuma used to worship a Shiva lingam by immersing it in a tank daily. Her husband's jealous first wife killed her son. Still, Kusuma continued her devotion. Pleased by her dedication, Lord Shiva resurrected her son and appeared as a Jyotirlinga at this site. The deity came to be known as Grishneshwar, meaning 'Lord of Compassion.'",
        scriptural_sources: ["Shiva Purana"],
        associatedFigures: ["Kusuma", "Parvati", "Shiva"]
    },
    temple_timing: {
        open: "5:30 AM",
        close: "9:30 PM"
    },
    festivals_celebrated: [
        "Maha Shivaratri",
        "Shravan Maas",
        "Diwali",
        "Holi"
    ],
    rituals: [
        "Rudrabhishek of the Jyotirlinga",
        "Offering bilva leaves, milk, and water",
        "Special poojas during Maha Shivaratri"
    ],
    architecture_highlights: {
        special_feature: "Located near the Ellora Caves, a UNESCO World Heritage Site."
    },
    visit_info: {
        best_time_to_visit: "October to March",
        nearest_railway_station: "Aurangabad",
        nearest_airport: "Aurangabad Airport",
        pilgrimage: {
            importance: "As the last of the twelve Jyotirlingas, it is especially sacred.",
            popularRoute: "Aurangabad → Ellora → Verul"
        }
    },
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Grishneshwar_Temple.jpg/800px-Grishneshwar_Temple.jpg"],
    tags: [
        "Jyotirlinga",
        "Grishneshwar",
        "Maharashtra",
        "Shaivism",
        "Ellora Caves",
        "Pilgrimage"
    ],
    official_website: "https://aurangabad.gov.in/tourist-place/grishneshwar-temple/"
  }
];

export const getJyotirlingaDetailedById = (id: string): (JyotirlingaDetailed) | undefined => {
  const linga = jyotirlingasDetailedData.find(linga => linga.id.toString() === id || linga.name.toLowerCase().replace(/ /g, '-').includes(id.replace(/ /g, '-')));
  if (linga) {
      // Find the corresponding simple data to merge image/aiHint
      const { jyotirlingasData } = require('./jyotirlingas');
      const simpleData = jyotirlingasData.find((s: any) => s.id === id);
      return { ...simpleData, ...linga } as JyotirlingaDetailed;
  }
  return undefined;
};









