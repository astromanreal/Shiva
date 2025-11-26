
// src/data/attributes.ts

export interface MahadevaAttribute {
  name: string;
  sanskrit?: string;
  description: string;
  symbolism: string[];
  associatedEvents?: string[];
  scripturalReference?: string[];
  iconography: string;
  associatedDeities?: string[];
  associatedRituals?: string[];
  associatedPractices?: string[];
}

export interface AttributesData {
  mahadevaAttributes: MahadevaAttribute[];
}

export const attributesData: AttributesData = {
  "mahadevaAttributes": [
    {
      "name": "Third Eye (Tryambakam)",
      "sanskrit": "त्र्यम्बक",
      "description": "Shiva's mystical third eye represents supreme wisdom, higher perception, and the fiery power to destroy ignorance, evil, and illusion.",
      "symbolism": [
        "Wisdom beyond duality",
        "Destruction of ego and evil",
        "Inner vision and intuition"
      ],
      "associatedEvents": [
        "Burning of Kamadeva",
        "Annihilation of Tripurasuras"
      ],
      "scripturalReference": ["Shiva Purana", "Linga Purana"],
      "iconography": "Depicted as a vertical eye in the middle of the forehead, radiating divine energy."
    },
    {
      "name": "Crescent Moon (Chandrashekhara)",
      "sanskrit": "चन्द्रशेखर",
      "description": "Shiva adorns the waxing crescent moon on his matted locks, symbolizing mastery over time and the cycles of creation.",
      "symbolism": [
        "Control over time and mind",
        "Immortality and nectar (Soma)",
        "Union of cool moonlight and fiery asceticism"
      ],
      "associatedDeities": ["Chandra Deva", "Soma"],
      "scripturalReference": ["Shiva Purana", "Skanda Purana"],
      "iconography": "A silver crescent shining above his forehead amidst the hair."
    },
    {
      "name": "Ashes (Bhasma / Vibhuti)",
      "sanskrit": "भस्म",
      "description": "Sacred ash smeared on Shiva's body signifies the impermanence of material existence and the soul’s eternal nature.",
      "symbolism": [
        "Detachment from material life",
        "Purity beyond desires",
        "Reminder of mortality"
      ],
      "associatedRituals": [
        "Applying vibhuti during Rudra Abhishekam",
        "Mahashivaratri worship"
      ],
      "scripturalReference": ["Shiva Mahimna Stotra"],
      "iconography": "White-grey sacred ash covering the body."
    },
    {
      "name": "Matted Hair (Jata)",
      "sanskrit": "जटा",
      "description": "Shiva’s matted locks signify his mastery over life energies and his ascetic renunciation.",
      "symbolism": [
        "Control of prana (vital energy)",
        "Renunciation of worldly pleasures",
        "Source of the holy Ganga"
      ],
      "associatedEvents": ["Descent of Ganga (Gangadhara)"],
      "iconography": "Long, twisted locks tied high on the head."
    },
    {
      "name": "Blue Throat (Neelakantha)",
      "sanskrit": "नीलकण्ठ",
      "description": "Shiva drank the Halahala poison during the churning of the ocean to protect the universe, holding it in his throat, turning it blue.",
      "symbolism": [
        "Ultimate compassion and self-sacrifice",
        "Absorbing negativity to protect creation",
        "Power to transform poison into stillness"
      ],
      "associatedEvents": ["Samudra Manthana"],
      "scripturalReference": ["Bhagavata Purana", "Shiva Purana"],
      "iconography": "A glowing blue neck against an ash-covered body."
    },
    {
      "name": "Meditating Yogi",
      "description": "Shiva as the supreme ascetic, immersed in deep meditation atop Mount Kailasa.",
      "symbolism": [
        "Inner stillness",
        "Mastery of senses",
        "Source of yogic wisdom"
      ],
      "associatedPractices": ["Dhyana Yoga", "Tapasya"],
      "iconography": "Seated in padmasana, eyes half closed, with serene expression."
    },
    {
      "name": "Sacred Ganga (Gangadhara)",
      "sanskrit": "गंगाधर",
      "description": "Shiva holds the celestial river Ganga in his hair, breaking her fierce descent to protect the earth.",
      "symbolism": [
        "Purification and grace",
        "Control over powerful natural forces",
        "Life-giving compassion"
      ],
      "associatedEvents": ["Descent of Ganga"],
      "iconography": "A stream of water flowing from the crown of his hair."
    },
    {
      "name": "Tiger Skin",
      "description": "Shiva sits or wears the skin of a tiger, symbolizing conquest over animal instincts and fearlessness.",
      "symbolism": [
        "Dominance over primal nature",
        "Victory over ego",
        "Strength and power"
      ],
      "associatedEvents": ["Defeat of Daruka forest sages"],
      "iconography": "Golden tiger skin worn as a loincloth or seat."
    },
    {
      "name": "Serpent (Vasuki)",
      "description": "The divine serpent Vasuki coils around Shiva’s neck, symbolizing fearlessness and mastery of life energy.",
      "symbolism": [
        "Awakening of Kundalini",
        "Cycle of time",
        "Control over death"
      ],
      "associatedEvents": ["Samudra Manthana"],
      "iconography": "A calm cobra with its hood open resting around his neck."
    },
    {
      "name": "Trident (Trishula)",
      "description": "Three-pronged spear representing creation, preservation, and destruction, as well as the three gunas.",
      "symbolism": [
        "Power over the three worlds",
        "Balance of cosmic forces",
        "Transcendence of dualities"
      ],
      "iconography": "A tall spear with three sharp prongs."
    },
    {
      "name": "Drum (Damaru)",
      "description": "Hourglass drum producing the cosmic sound of creation (Om), marking the rhythm of the universe.",
      "symbolism": [
        "Nada Brahma (sound as the source of creation)",
        "Time and cycles",
        "Communication of spiritual truths"
      ],
      "associatedEvents": ["Tandava"],
      "iconography": "A small double-headed drum tied with cords."
    },
    {
      "name": "Axe (Parashu)",
      "description": "Weapon symbolizing cutting away ignorance and obstacles.",
      "symbolism": [
        "Detachment from material bondage",
        "Overcoming illusions",
        "Destroying unrighteousness"
      ]
    },
    {
      "name": "Deer",
      "description": "A gentle creature often seen in Shiva’s hand or beside him, symbolizing the tamed wandering mind.",
      "symbolism": [
        "Mind under control",
        "Grace within power",
        "Gentle vigilance"
      ]
    },
    {
      "name": "Rosary Beads (Rudraksha)",
      "description": "Beads sacred to Shiva, believed to be formed from his tears.",
      "symbolism": [
        "Meditation and spiritual focus",
        "Protection and health",
        "Divine connection"
      ],
      "associatedRituals": ["Japa meditation"]
    },
    {
      "name": "Nandi (Bull Mount)",
      "description": "Shiva’s vahana symbolizing dharma, loyalty, and strength.",
      "symbolism": [
        "Righteousness (dharma)",
        "Devotion and patience",
        "Strength in service"
      ],
      "iconography": "A seated white bull gazing at Shiva."
    },
    {
      "name": "Mount Kailasa",
      "description": "Shiva’s abode in the Himalayas, considered the spiritual center of the cosmos.",
      "symbolism": [
        "Axis mundi (cosmic center)",
        "Eternal stillness",
        "Seat of supreme consciousness"
      ]
    },
    {
      "name": "Gana (Attendants)",
      "description": "Celestial attendants of Shiva, representing both divine and ghostly aspects.",
      "symbolism": [
        "Harmony between opposites",
        "Control over spirits",
        "Command over nature’s forces"
      ]
    },
    {
      "name": "Varanasi (Kashi)",
      "description": "Sacred city loved by Shiva, granting liberation to those who die there.",
      "symbolism": [
        "Gateway to moksha",
        "Spiritual sanctuary",
        "Center of Shaiva devotion"
      ]
    },
    {
      "name": "Ash-Smeared Body (Digambara)",
      "description": "Shiva’s unclothed, ash-covered form representing total renunciation.",
      "symbolism": [
        "Freedom from material bonds",
        "Union with the element of earth",
        "Ultimate ascetic ideal"
      ]
    },
    {
      "name": "Kundalas (Makara Earrings)",
      "description": "Different earrings on each ear, representing the union of male and female principles.",
      "symbolism": [
        "Balance of Shiva and Shakti",
        "Duality merged into oneness"
      ]
    },
    {
      "name": "Flame (Agni in Hand)",
      "description": "The fire in Shiva’s palm during Tandava, representing destruction for renewal.",
      "symbolism": [
        "Transformation through destruction",
        "Purification",
        "Cycle of rebirth"
      ]
    }
  ]
};

// Function to get all attributes
export const getAllAttributes = (): MahadevaAttribute[] => {
  return attributesData.mahadevaAttributes;
};
