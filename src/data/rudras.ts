export interface Rudra {
  id: string;
  name: string;
  sanskritName?: string; // Optional Sanskrit spelling
  role: string; // Core function or association
  description: string; // Fuller description
  story?: string; // Brief origin or associated myth
  powers: string[]; // Key abilities or attributes
  significance: string; // Importance in scriptures/philosophy
  image?: string; // Optional image URL
  aiHint?: string; // Hint for image generation if no specific image is provided
}

// Refining the 11 Rudras based on user list and common interpretations.
// Note: Interpretations vary widely. Some link them to Pranas, some to aspects of cosmic function.

export const rudrasData: Rudra[] = [
  {
    id: "kapali",
    name: "Kapali",
    sanskritName: "कपाली",
    role: "The Skull-Bearer",
    description: "This fierce form, often linked with Bhairava, carries a skull (Kapala) symbolizing the transcendence of ego and the impermanence of the physical body. He represents the state beyond life and death.",
    story: "Associated with the myth where Shiva, as Bhairava, severed Brahma's fifth head (ego) and carried the skull as penance, finally being absolved in Kashi. Embodies the ascetic who confronts death.",
    powers: ["Destruction of Ego", "Mastery over Time & Death", "Fierce Protection", "Supreme Detachment"],
    significance: "Symbolizes the ultimate reality beyond creation and destruction, freedom from illusion and the cycle of Samsara. Associated with intense ascetic practices.",
    image: "https://i.pinimg.com/736x/b8/31/6e/b8316e761ccad627c50f4f3a6a97b368.jpg",
    aiHint: "fierce shiva rudra skull kapala detachment kashi bhairava ascetic"
  },
  {
    id: "pingala",
    name: "Pingala",
    sanskritName: "पिङ्गल",
    role: "The Tawny/Golden-Brown One (Solar Energy)",
    description: "Represents the dynamic, active, life-giving solar energy, corresponding to the 'Pingala' Nadi (right energy channel) in yogic physiology. Embodies masculine, outward-focused, and vitalizing forces.",
    story: "This Rudra embodies Prana Vayu, the vital life force connected to the sun, governing action, metabolism, and conscious activity. Its energy needs balance with the lunar Ida channel.",
    powers: ["Vitality & Life Force (Prana)", "Action & Dynamism", "Solar Energy & Heat", "Metabolism Control"],
    significance: "Crucial in Yoga and Tantra for understanding energy flow (Prana). Represents the active principle essential for life and manifestation, balanced by lunar energy.",
    image: "https://i.pinimg.com/736x/00/2f/c9/002fc9bd15f10c319b9b9dde32296e7a.jpg",
    aiHint: "shiva rudra sun solar energy pingala nadi vitality action fire prana"
  },
  {
    id: "bhima",
    name: "Bhima",
    sanskritName: "भीम",
    role: "The Formidable/Terrible One",
    description: "Embodies Shiva's immense, overwhelming power and strength that inspires awe and fear. Represents the raw, untamed, destructive, yet protective force of nature and divinity.",
    story: "This form manifests when cosmic order is severely disrupted by powerful evil forces, showcasing Shiva's capacity for righteous and terrifying destruction to restore balance. Also linked to Apana Vayu (downward/eliminative energy).",
    powers: ["Immense Strength & Power", "Destruction of Evil", "Awe-Inspiring Presence", "Protection Against Great Threats"],
    significance: "Reflects the 'Bhima' (terrible/awesome) aspect invoked for protection and vanquishing powerful foes. Represents the necessary force for cosmic dissolution and removal of negativity.",
    image: "https://i.pinimg.com/736x/5a/dd/82/5add8209f93860a0d4c808149e3b744d.jpg",
    aiHint: "shiva rudra formidable strength terrible awesome power destruction apana"
  },
  {
    id: "virupaksha",
    name: "Virupaksha",
    sanskritName: "विरूपाक्ष",
    role: "The Odd-Eyed/Unconventional-Eyed One",
    description: "Signifies Shiva's unique perspective, seeing beyond conventional reality via his Third Eye (Ajna Chakra). 'Virupa' (deformed/unconventional) implies transcendental vision, not physical defect.",
    story: "The Third Eye grants insight, wisdom (Jnana), and the power to destroy negativity (like Kama). Virupaksha perceives the true nature of reality beyond illusion. Linked to Udana Vayu (upward energy, speech).",
    powers: ["Higher Perception & Insight (Third Eye)", "Transcendental Wisdom (Jnana)", "Destruction of Ignorance & Illusion", "Omniscience"],
    significance: "Central to Shiva's iconography, the Third Eye represents enlightenment, non-dual awareness, and the power to perceive truth directly.",
    image: "https://i.pinimg.com/736x/ab/ae/31/abae31412b1035ac07ec15fd3f9a0ba0.jpg",
    aiHint: "shiva rudra third eye wisdom perception insight ajna chakra udana"
  },
  {
    id: "vilohita",
    name: "Vilohita",
    sanskritName: "विलोहित",
    role: "The Deep Red/Purple One",
    description: "Represents Shiva's fiery, transformative energy, often linked to his association with Agni (Fire God) or his primal manifestation. The color symbolizes passion, sacrifice, and cosmic transitions like dawn/dusk.",
    story: "This form connects to Rudra's early Vedic association with fire and storms. The reddish hue signifies potent energy capable of both creation and destruction (dissolution). Linked to Samana Vayu (digestive/balancing energy).",
    powers: ["Fiery Energy (Tejas)", "Transformation & Sacrifice", "Connection to Agni", "Dissolution Power", "Passion"],
    significance: "Highlights Rudra-Shiva's connection to transformative fire (Yagna) and the power that fuels cosmic cycles. Embodies intense, purifying energy.",
    image: "https://i.pinimg.com/736x/56/aa/6f/56aa6f2d93b8f133419da6db23fa3153.jpg",
    aiHint: "shiva rudra red purple fire dawn dusk transformation agni samana"
  },
  {
    id: "shasta",
    name: "Shasta",
    sanskritName: "शास्ता",
    role: "The Teacher/Ruler/Commander",
    description: "Represents Shiva's authority as the supreme teacher (Adi Guru), the ruler of the cosmos, and the commander of divine forces (like Ganas). Embodies divine law and guidance.",
    story: "This aspect highlights Shiva's role in maintaining cosmic order (Dharma), imparting wisdom for liberation (Jnana), and governing the different realms and beings.",
    powers: ["Supreme Authority & Command", "Teaching & Imparting Wisdom", "Upholding Cosmic Law (Dharma)", "Leadership of Ganas/Forces"],
    significance: "Reflects Shiva's role as 'Ishana' (The Lord) and the ultimate Guru. In South India, Shasta is also a distinct deity sometimes identified with Ayyappa.",
    image: "https://i.pinimg.com/736x/10/d0/d8/10d0d8f35f8504fd3698d9b77810e054.jpg",
    aiHint: "shiva rudra teacher commander ruler dharma authority ganas guru ishana"
  },
  {
    id: "ajapada", 
    name: "Ajapada (Aja Ekapad)",
    sanskritName: "अजपाद / अज एकपाद",
    role: "The Unborn/One-Footed Goat (Cosmic Pillar)",
    description: "An ancient, enigmatic form representing the static, unmanifest, single foundation (Pillar/Axis Mundi) of the universe. 'One-footed' symbolizes stability, non-duality, and the immovable source.",
    story: "Aja Ekapad is an ancient Vedic deity linked to Rudra, representing the unmoving cosmic support, lightning, and the potential before creation.",
    powers: ["Cosmic Support & Stability", "Unmanifest Foundation", "Stillness & Non-Duality", "Transcendental Ground"],
    significance: "Symbolizes the unchanging axis around which creation revolves, the motionless source of all dynamism. Represents Shiva's transcendental, attributeless nature.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ekapada_shiva.jpg/500px-Ekapada_shiva.jpg",
    aiHint: "shiva rudra cosmic pillar axis unborn static support stability non-duality"
  },
  {
    id: "ahirbudhnya", 
    name: "Ahirbudhnya",
    sanskritName: "अहिर्बुध्न्य",
    role: "The Serpent of the Deep/Atmosphere",
    description: "Represents the primal serpentine power (Kundalini) residing coiled in the depths (base) of existence – the cosmic waters, the earth, or the atmosphere. Associated with hidden potential and foundational energy.",
    story: "A Vedic deity of the atmospheric depths/ocean, often grouped with Aja Ekapad and linked to Rudra. Symbolizes the coiled, latent energy (Shakti) at the base of creation and consciousness.",
    powers: ["Control over Deep Waters/Atmosphere", "Kundalini Shakti (Latent Energy)", "Connection to Subconscious", "Foundation Energy"],
    significance: "Symbolizes the latent potential within creation and individuals, the primordial energy connected to the base chakra (Muladhara) and the cosmic foundation.",
    image: "https://anantgyan.co.in/wp-content/uploads/2023/02/rudra-avatars-f.jpg",
    aiHint: "shiva rudra serpent deep waters atmosphere base kundalini energy latent"
  },
  {
    id: "shambhu",
    name: "Shambhu",
    sanskritName: "शम्भु",
    role: "The Source of Bliss/Auspiciousness",
    description: "Represents the supremely benevolent, auspicious, peace-giving, and bliss-granting aspect of Shiva. He is the source ('bhu') of all happiness and well-being ('sham').",
    story: "This is Shiva in his most approachable, compassionate, and grace-bestowing form, worshipped for peace, healing, prosperity, and spiritual joy. Linked to Vyana Vayu (pervading energy).",
    powers: ["Granting Bliss & Happiness (Ananda)", "Bestowing Auspiciousness", "Source of Peace & Serenity", "Healing & Well-being"],
    significance: "A fundamental benevolent name ('Saumya') for Shiva, highlighting his role as the ultimate source of joy and liberation, contrasting his fierce ('Raudra') forms.",
    image: "https://i.pinimg.com/736x/4d/55/d8/4d55d8a257ee6dbe81adbefb708fe16b.jpg",
    aiHint: "shiva rudra auspicious benevolent bliss peace happiness healing vyana"
  },
  {
    id: "chanda", 
    name: "Chanda",
    sanskritName: "चण्ड",
    role: "The Fierce/Violent/Passionate One",
    description: "Embodies intense, passionate, and sometimes terrifyingly wrathful energy. Represents the necessary force to destroy negativity, obstacles, and ignorance swiftly and decisively.",
    story: "Often paired with Munda as attendants of Durga/Kali (Chamunda). As a Rudra, Chanda signifies Shiva's own capacity for fierce, righteous power against adharma, embodying raw, untamed force.",
    powers: ["Fierce Energy & Righteous Wrath", "Passion & Intensity", "Swift Destruction of Obstacles", "Overcoming Deep Negativity"],
    significance: "Reflects the fierce ('Chandam', 'Ugra') nature described in scriptures. Represents the raw power needed to break inertia, delusion, and stubborn evil.",
    image: "https://shiva1008.com/wp-content/uploads/2024/03/Chanda-Rudra-avatar-of-lord-shiva.jpeg",
    aiHint: "shiva rudra fierce passionate intense wrath destruction energy chamunda"
  },
  {
    id: "bhava",
    name: "Bhava",
    sanskritName: "भव",
    role: "Existence/Being/Becoming/Origin",
    description: "Represents Shiva as the fundamental principle of existence, the source ('bhū') from which all creation emerges ('bhavati') and manifests. The pure state of 'being' or 'becoming'.",
    story: "Bhava is the underlying reality present in all that exists, the potentiality that unfolds as the cosmos. He is the origin and the substance of the universe.",
    powers: ["Source of Creation/Manifestation", "Pure Existence (Sat)", "Underlying Reality of All Beings", "Principle of Becoming"],
    significance: "A primary name for Shiva, identifying him with Existence itself. One of the Ashtamurti (eight forms) of Shiva, representing elements like Water or Space.",
    image: "https://www.templepurohit.com/wp-content/uploads/2020/11/rudra1.jpg",
    aiHint: "shiva rudra existence being creation source manifestation reality bhava"
  }
];

// Function to get all Rudras
export const getAllRudras = (): Rudra[] => {
  // Optionally sort if needed, e.g., alphabetically
   return [...rudrasData].sort((a, b) => a.name.localeCompare(b.name));
  // return rudrasData;
};

// Function to get a specific Rudra by ID
export const getRudraById = (id: string): Rudra | undefined => {
  return rudrasData.find(rudra => rudra.id === id);
};
