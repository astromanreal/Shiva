export interface MahadevRup {
  id: string; // Unique identifier
  name: string;
  title: string; // Short title like "The Fierce", "The Ascetic"
  description: string; // Detailed description of this form
  symbolism: string[]; // Key symbolic elements
  significance: string; // Why this form is important
  relatedConcepts: string[]; // Connections to practices, philosophies etc.
  mantra?: string; // Optional associated mantra
  aiHint: string; // Hint for image generation
}

export const mahadevRupData: MahadevRup[] = [
   {
    id: "parashiva",
    name: "Parashiva (परशिव)",
    title: "The Supreme Reality",
    description: "The highest, unmanifest, formless, and transcendental aspect of Shiva beyond all attributes and comprehension, as conceptualized in Shaiva Siddhanta and Kashmir Shaivism. It is the absolute reality from which everything originates.",
    symbolism: [
      "Formlessness",
      "Transcendence",
      "Absolute Reality",
      "Beyond Attributes (Nirguna)",
      "Source of All Manifestation"
    ],
    significance: "Represents the ultimate, unmanifest source and destination of the cosmos, beyond the manifested forms like Sadashiva or Maheshwara. It is the goal of liberation in these schools.",
    relatedConcepts: ["Shaiva Siddhanta", "Kashmir Shaivism", "Nirguna Brahman", "Transcendence", "Absolute Reality"],
    aiHint: "parashiva supreme shiva formless absolute transcendental unmanifest",
  },
  {
    id: "sadasiva",
    name: "Sadasiva (सदाशिव)",
    title: "The Eternally Auspicious",
    description: "The Supreme Being in Shaiva Siddhanta, the first manifestation of Parashiva. Depicted with five faces and ten hands, representing the five holy acts (Panchakritya) of creation, preservation, destruction, obscuration (grace), and liberation (grace). Considered the highest manifest form.",
    symbolism: [
      "Five Faces (Panchamukha): Representing Sadyojata, Vamadeva, Aghora, Tatpurusha, Ishana (creation, preservation, destruction, concealment, grace)",
      "Ten Hands: Representing the ten directions",
      "Trident, Axe, Noose etc.: Divine powers and functions",
      "Luminous Form: Subtle, absolute nature"
    ],
    significance: "The highest active form of Shiva responsible for the cosmic functions, especially bestowing grace (Anugraha) and liberation. Often represented by the Mukhalingam.",
    relatedConcepts: ["Shaiva Siddhanta", "Panchakritya", "Panchamukha", "Anugraha (Grace)", "Mukhalingam", "Agamas"],
    aiHint: "sadasiva five faces ten hands shiva supreme manifestation grace",
  },
  {
    id: "panchabrahma",
    name: "Panchabrahma (पञ्चब्रह्म)",
    title: "The Five Realities/Creators",
    description: "Refers to the five faces or aspects of Shiva (often identified with Sadasiva's faces: Sadyojata, Vamadeva, Aghora, Tatpurusha, Ishana) which correspond to the five elements, five senses, five directions, and perform the five cosmic acts (Panchakritya).",
    symbolism: [
      "Sadyojata (West/Earth/Creation)",
      "Vamadeva (North/Water/Preservation)",
      "Aghora (South/Fire/Destruction/Rejuvenation)",
      "Tatpurusha (East/Air/Concealment)",
      "Ishana (Upward/Ether/Grace)"
    ],
    significance: "Represents the totality of Shiva's manifested power and cosmic functions operating through these five fundamental aspects. They embody the entire creation.",
    relatedConcepts: ["Sadasiva", "Panchakritya", "Five Elements", "Cosmic Functions", "Manifestation"],
    aiHint: "shiva five faces panchabrahma sadasiva elements cosmic functions creation",
  },
  {
    id: "nataraja",
    name: "Nataraja (नटराज)",
    title: "The Lord of Dance",
    description: "Shiva as the cosmic dancer, performing the Tandava, the dance of creation, preservation, and destruction. He dances within a circle of flames (Prabhamandala), balancing on the demon Apasmara (symbolizing ignorance).",
    symbolism: [
      "Damaru (drum): Sound of creation",
      "Agni (fire): Power of destruction/transformation",
      "Raised Leg: Liberation (moksha)",
      "Apasmara (demon underfoot): Conquest of ignorance and ego",
      "Abhaya Mudra (hand gesture): Fearlessness, protection",
      "Ganga in hair: Control over powerful forces",
      "Serpent: Kundalini energy, control over death",
    ],
    significance: "Represents the eternal cosmic cycles, the dynamic nature of reality, and the balance between creation and destruction. It's a profound symbol in Shaivism and Indian art.",
    relatedConcepts: ["Tandava Dance", "Cosmic Cycles (Yugas)", "Shaiva Siddhanta", "Art and Sculpture"],
    mantra: "ॐ नटराजाय नमः (Om Natarajaya Namah)",
    aiHint: "shiva cosmic dancer nataraja fire circle drum tandava",
  },
  {
    id: "ardhanarishvara",
    name: "Ardhanarishvara (अर्धनारीश्वर)",
    title: "The Lord Who is Half Woman",
    description: "A composite form of Shiva and his consort Parvati, depicted as half male and half female, split down the middle. It symbolizes the synthesis of masculine and feminine energies of the universe.",
    symbolism: [
      "Right side (Shiva): Ascetic qualities, matted locks, serpent, tiger skin",
      "Left side (Parvati): Feminine grace, ornaments, silk garment, developed breast",
      "Union: Interdependence of masculine and feminine principles",
      "Non-duality: Ultimate reality beyond gender",
    ],
    significance: "Represents the inseparable union of Shiva (Purusha - consciousness) and Shakti (Prakriti - energy/matter). It signifies that the ultimate reality is a balance and synthesis of opposites, beyond duality.",
    relatedConcepts: ["Shiva-Shakti", "Purusha-Prakriti", "Non-duality (Advaita)", "Gender Synthesis"],
    aiHint: "shiva parvati combined half male half female ardhanarishvara",
  },
  {
    id: "bhairava",
    name: "Bhairava (भैरव)",
    title: "The Terrifying One",
    description: "The fierce and terrifying manifestation of Shiva associated with annihilation, destruction of ego, and protection. Often depicted with fearsome attributes like multiple arms, sharp teeth, a garland of skulls, and accompanied by a dog.",
    symbolism: [
      "Dog: Represents dharma, sometimes seen as impure yet loyal",
      "Skull (Kapala): Transcending ego, non-attachment to the physical form",
      "Trident/Weapons: Power to destroy negativity and protect",
      "Nakedness: Freedom from worldly illusions",
    ],
    significance: "Bhairava guards sacred spaces (especially Kashi and Shakti Peethas), destroys the ego, and controls time (as Kala Bhairava). Worshipped to overcome fear, enemies, and negative influences.",
    relatedConcepts: ["Kala Bhairava (Time)", "Annihilation", "Protection", "Tantric Practices", "Shakti Peethas"],
    mantra: "ॐ कालभैरवाय नमः (Om Kalabhairavaya Namah)",
    aiHint: "fierce shiva bhairava dog skull trident kashi guardian",
  },
  {
    id: "aghori",
    name: "Aghori (अघोरी)",
    title: "The Fearless Ascetic",
    description: "A radical ascetic sect of Shaivism known for their extreme practices and disregard for social norms. They often dwell in cremation grounds, use human skulls, and seek liberation by embracing what society considers taboo or impure, seeing divinity in everything.",
    symbolism: [
      "Cremation Grounds: Transcending life and death",
      "Skulls/Bones: Impermanence of the physical body",
      "Ash Smearing: Detachment, purity beyond form",
      "Unconventional Practices: Breaking societal conditioning and duality",
    ],
    significance: "Aghoris represent an extreme path of non-duality, seeking direct realization by confronting the most feared aspects of existence. They embody Shiva's aspect that lies beyond conventional purity and impurity.",
    relatedConcepts: ["Asceticism", "Tantra", "Non-duality (Advaita)", "Cremation Grounds", "Transcendence"],
    aiHint: "aghori ascetic shiva cremation ground skull intense unconventional",
  },
  {
    id: "adiyogi",
    name: "Adiyogi (आदियोगी)",
    title: "The First Yogi",
    description: "Shiva considered as the originator of Yoga and the first Guru. He is the source of yogic sciences, who transmitted the knowledge of self-transformation and liberation to the Saptarishis (seven sages).",
    symbolism: [
      "Meditative Posture: Stillness, inner focus",
      "Upward Gaze/Third Eye Focus: Higher consciousness",
      "Crescent Moon: Mastery over mind and time",
      "Serpent: Kundalini energy, mastery over life force",
    ],
    significance: "Recognizes Shiva as the ultimate source of spiritual knowledge and the path of Yoga. Adiyogi represents the potential within every human being to attain liberation through yogic practices.",
    relatedConcepts: ["Yoga", "Meditation", "Guru", "Saptarishis", "Self-Realization", "Kundalini"],
    aiHint: "shiva meditating yogi first guru adiyogi mountains knowledge",
  },
   {
    id: "dakshinamurthy",
    name: "Dakshinamurthy (दक्षिणामूर्ति)",
    title: "The South-Facing Teacher",
    description: "Shiva as the supreme teacher of yoga, music, and wisdom (Jnana), imparting knowledge silently through parā vāk (supreme speech) or non-verbal transmission.",
    symbolism: [
      "Facing South: Direction of change/death, signifying mastery over it",
      "Under Banyan Tree: Symbol of cosmic knowledge",
      "Teaching Sages: Imparting wisdom to enlightened beings",
      "Chin Mudra (hand gesture): Union of individual soul (Jiva) and supreme self (Paramatma)",
      "Book/Veena: Mastery over scriptures and arts",
      "Apasmara (demon underfoot): Crushing ignorance",
    ],
    significance: "Represents Shiva as the ultimate Guru who imparts the highest knowledge of Brahman through silence and subtle means. He is the embodiment of awareness and wisdom.",
    relatedConcepts: ["Guru", "Jnana (Knowledge)", "Silence", "Advaita Vedanta", "Yoga", "Music"],
    mantra: "ॐ दक्षिणामूर्तये नमः (Om Dakshinamurthaye Namah)",
    aiHint: "shiva teacher guru silent teaching sages south facing banyan tree",
  },
  {
    id: "neelakantha",
    name: "Neelakantha (नीलकण्ठ)",
    title: "The Blue-Throated One",
    description: "The form Shiva took after consuming the deadly Halahala poison that emerged during the Samudra Manthan (Churning of the Ocean), holding it in his throat to save the universe.",
    symbolism: [
      "Blue Throat: Containing poison, control over negativity",
      "Serenity Despite Poison: Detachment, mastery over suffering",
      "Act of Consumption: Sacrifice, compassion for the world",
    ],
    significance: "Demonstrates Shiva's immense compassion, sacrifice, and power to neutralize negativity for the sake of creation. It shows his ability to absorb and transmute destructive forces.",
    relatedConcepts: ["Samudra Manthan", "Halahala Poison", "Compassion", "Sacrifice", "Transformation"],
    aiHint: "shiva blue throat poison samudra manthan compassion",
  },
   {
    id: "lingam",
    name: "Shiva Lingam (शिव लिङ्गम्)",
    title: "The Formless Form",
    description: "An abstract or aniconic representation of Shiva, often depicted as a cylindrical pillar, sometimes emerging from a yoni (representing Shakti). It symbolizes the formless (Nirguna) yet potent (Saguna) nature of the Absolute Reality.",
    symbolism: [
      "Cylindrical Pillar: Infinite cosmic pillar of fire (Stambha), axis mundi",
      "Round Top: Limitless nature, Brahman",
      "Yoni Base (often): Union of Shiva and Shakti, creative potential",
      "Abstract Form: Beyond physical attributes, the unmanifest source",
    ],
    significance: "The Lingam is the most prevalent symbol for worshipping Shiva, representing the ultimate, formless reality from which everything emerges and into which everything dissolves. It signifies creative power and transcendence.",
    relatedConcepts: ["Formless (Nirguna Brahman)", "Manifest (Saguna Brahman)", "Creation", "Cosmic Pillar", "Shiva-Shakti Union"],
    aiHint: "shiva lingam abstract pillar yoni worship symbol formless",
  },
];

// Function to get all Mahadev Rup forms
export const getAllMahadevRup = (): MahadevRup[] => {
  return mahadevRupData;
};

// Function to get a specific Mahadev Rup form by ID
export const getMahadevRupById = (id: string): MahadevRup | undefined => {
  return mahadevRupData.find(rup => rup.id === id);
};