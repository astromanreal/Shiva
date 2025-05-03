
import type { LucideIcon } from 'lucide-react';

export interface ShivaAttribute {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name or 'Om' for custom SVG
  aiHint?: string; // Optional hint for image if needed later
}

// Mapping common terms to potential Lucide icons (best effort)
// Using generic icons where specific ones don't exist.
export const attributesData: ShivaAttribute[] = [
  {
    id: "third-eye",
    name: "Third Eye (Tryambakam)",
    description: "Represents wisdom, higher perception, and the power to destroy ignorance or evil (like burning Kama).",
    icon: "Eye",
    aiHint: "shiva third eye forehead wisdom"
  },
  {
    id: "crescent-moon",
    name: "Crescent Moon (Chandrashekhara)",
    description: "Symbolizes control over time, the mind, and the cycles of nature. Linked to Soma (nectar/plant).",
    icon: "Moon",
    aiHint: "shiva crescent moon head time control"
  },
  {
    id: "ashes",
    name: "Ashes (Bhasma/Vibhuti)",
    description: "Represents impermanence of material existence, detachment, purity, and the ultimate reality.",
    icon: "Sparkles", // Generic for purity/essence
    aiHint: "shiva covered ashes vibhuti detachment"
  },
  {
    id: "matted-hair",
    name: "Matted Hair (Jata)",
    description: "Signifies asceticism, control over vital energies (like holding Ganga), and renunciation.",
    icon: "Wind", // Represents vital energy/Ganga flow
    aiHint: "shiva matted hair jata ascetic ganga"
  },
  {
    id: "blue-throat",
    name: "Blue Throat (Neelakantha)",
    description: "Result of consuming Halahala poison to save the universe, symbolizing compassion, sacrifice, and control over negativity.",
    icon: "Droplet", // Represents liquid/poison contained
    aiHint: "shiva blue throat neelakantha poison compassion"
  },
  {
    id: "meditating-yogi",
    name: "Meditating Yogi",
    description: "Depicts Shiva as the Lord of Yoga, master of meditation, stillness, and inner focus.",
    icon: "Brain", // Represents mind/meditation
    aiHint: "shiva meditating yogi mount kailash stillness"
  },
  {
    id: "sacred-ganga",
    name: "Sacred Ganga (Gangadhara)",
    description: "Bearer of the holy river Ganga in his matted locks, symbolizing purification, control over powerful forces, and grace.",
    icon: "Waves", // Represents river/water
    aiHint: "shiva ganga river hair purification grace"
  },
  {
    id: "tiger-skin",
    name: "Tiger Skin",
    description: "Symbolizes mastery over nature, fearlessness, control over animalistic instincts, and conquering power.",
    icon: "Cat", // Closest animal icon
    aiHint: "shiva sitting tiger skin mastery power"
  },
  {
    id: "serpent",
    name: "Serpent (Vasuki)",
    description: "Represents Kundalini energy, control over ego, cycles of time, and fearlessness towards death.",
    icon: "Vegan", // Represents serpent (as no snake icon exists)
    aiHint: "shiva serpent neck vasuki kundalini energy"
  },
  {
    id: "trident",
    name: "Trident (Trishula)",
    description: "Represents the three aspects (creator, preserver, destroyer), three gunas (Sattva, Rajas, Tamas), and power over the three worlds.",
    icon: "Vegan", // Using the placeholder Trident SVG requires special handling, using generic for now. Can be replaced with SVG component later.
    aiHint: "shiva trident trishula weapon power three aspects"
  },
  {
    id: "drum",
    name: "Drum (Damaru)",
    description: "Hourglass-shaped drum symbolizing the cosmic sound of creation (Nada Brahma), rhythm, and time.",
    icon: "Drum",
    aiHint: "shiva drum damaru creation sound rhythm"
  },
  {
    id: "axe",
    name: "Axe (Parashu)",
    description: "Weapon symbolizing the power to cut through obstacles, attachments, and ignorance.",
    icon: "Axe",
    aiHint: "shiva axe parashu weapon cutting obstacles"
  },
   {
    id: "deer",
    name: "Deer",
    description: "Symbolizes the controlled, wandering mind or the gentleness amidst Shiva's fierce aspects.",
    icon: "Rabbit", // Closest gentle animal
    aiHint: "shiva holding deer gentle mind control"
  },
  {
    id: "rosary-beads",
    name: "Rosary Beads (Rudraksha)",
    description: "Symbolizes grace, meditation, ascetic life, and connection to spiritual practice.",
    icon: "CircleEllipsis", // Represents beads/cycle
    aiHint: "shiva rudraksha beads rosary meditation ascetic"
  },
  {
    id: "nandi",
    name: "Nandi (Bull Mount)",
    description: "Shiva's divine bull mount (vahana), symbolizing dharma, strength, patience, and steadfast devotion.",
    icon: "Beef", // Represents Bull
    aiHint: "shiva nandi bull mount dharma devotion strength"
  },
  {
    id: "mount-kailasa",
    name: "Mount Kailasa",
    description: "Shiva's traditional abode in the Himalayas, considered the spiritual center of the universe.",
    icon: "Mountain",
    aiHint: "mount kailash shiva abode himalayas spiritual center"
  },
  {
    id: "gana",
    name: "Gana (Attendants)",
    description: "Ghostly or divine attendants of Shiva, representing forces of nature and spirits under his command.",
    icon: "Users",
    aiHint: "shiva ganas attendants spirits ghostly hosts"
  },
  {
    id: "varanasi",
    name: "Varanasi (Kashi)",
    description: "The city specially loved by Shiva, considered a holy pilgrimage site offering liberation.",
    icon: "Building", // Represents city
    aiHint: "varanasi kashi city shiva holy pilgrimage liberation"
  }
];

// Function to get all attributes
export const getAllAttributes = (): ShivaAttribute[] => {
  return attributesData;
};

// Function to get a specific attribute by ID
export const getAttributeById = (id: string): ShivaAttribute | undefined => {
  return attributesData.find(attr => attr.id === id);
};
