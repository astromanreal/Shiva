

// This interface is becoming very complex. It's a union of many different structures.
// For a real application, these might be better as separate types with a common base.
// But for this project, a single large interface with many optional fields will work.

export interface Iconography {
    attributes?: string[] | { [key: string]: any };
    posture?: string;
    mount?: string;
    form?: string;
    color?: string;
    eyes?: string | number;
    hair?: string;
    symbols?: string[];
    weapons?: string[] | { [key: string]: any }[];
    weapons_or_attributes?: string[];
    aura?: string;
    faces?: number;
    hands?: number | { mudra: string }[];
    elements?: string[];
    body_division?: string;
    attributes_male?: { [key: string]: any };
    attributes_female?: { [key: string]: any };
    stance?: string;
    direction_faced?: string;
    seated_on?: string;
    gesture?: string;
    demon_under_foot?: string;
    features?: string[];
    variations?: string[];
    eye_color?: string;
    ornaments?: string[];
    location?: string;
    face?: string;
    third_eye?: boolean;
    attire?: string;
    appearance?: string;
    pose?: string; // from ardhanarishvara
    expression?: string; // from Tripurantaka
    number_of_arms?: number;
    weapons_and_items?: {name: string, symbolism: string}[];

}

export interface TempleAssociation {
    name: string;
    location: string;
    importance?: string;
    significance?: string;
    description?: string;
}

export interface ScripturalReference {
    text: string;
    quote?: string;
    verse?: string;
    mention?: string;
    description?: string;
    source?: string;
    link?: string;
}

export interface ExternalLink {
    title: string;
    url: string;
}

export interface Mantra {
    name?: string;
    text_sanskrit?: string;
    sanskrit?: string;
    mantra?: string;
    meaning?: string;
    face?: string;
    transliteration?: string;
    title?: string;
    translation?: string;
}

export interface FaceDetail {
    name: string;
    meaning: string;
    function: string;
    element: string;
    direction: string;
    color: string;
    associated_quality: string;
}

export interface MahadevRup {
  id: string;
  name: string;
  sanskritName?: string;
  sanskrit_name?: string; // from new data
  title?: string;
  description: string;
  category: "Supreme & Transcendental" | "Cosmic & Philosophical" | "Iconic & Symbolic" | string;
  symbolism: string[] | { [key: string]: any };
  significance: string | string[] | { [key: string]: any };
  relatedConcepts?: string[];
  mantra?: string | Mantra[]; // Can be simple string or array of objects
  mantras?: Mantra[] | string[];
  aiHint: string;
  image?: string;
  meaning?: string;
  formType?: string;
  form_type?: string;
  philosophicalMeaning?: { [key: string]: any };
  philosophical_meaning?: { [key: string]: any };
  associatedPhilosophies?: string[];
  iconography_detail?: Iconography;
  iconography?: Iconography; // from new data
  templeAssociations?: TempleAssociation[];
  temples?: TempleAssociation[];
  scripturalReferences_detail?: ScripturalReference[];
  scriptural_references?: ScripturalReference[] | string[]; // from tripurantaka
  scriptures?: (string | { text: string; source: string; verse: string; translation: string; })[];
  relatedFestivals?: string[];
  associated_forms?: (string | {name: string, relation: string})[];
  associated_elements?: string[];
  goal_of_path?: string;
  is_worshipped?: boolean;
  is_formless?: boolean;
  notes?: string | string[];
  external_links?: ExternalLink[];
  // Fields for new complex data
  type?: string;
  nature?: string;
  essence?: string;
  position?: string;
  philosophical_context?: { [key: string]: any } | string[];
  attributes?: { [key: string]: any } | string[];
  forms_and_variants?: { [key: string]: any }[];
  associated_goddess?: string;
  guardian_role?: string;
  worship?: { [key: string]: any };
  // For Aghori
  domain?: string[];
  associated_with?: string[];
  philosophy?: string;
  practices?: { [key: string]: any };
  // For Panchabrahma
  faces?: FaceDetail[];
  translation?: string;
  aspect?: string;
  overview?: string;
  classification?: string;
  level?: string;
  associated_traditions?: string[];
  vehicle?: string;
  consort?: string;
  abode?: string;
  associated_texts?: (string | {name: string, location: string, description: string})[];
  key_roles?: string[];
  festivals?: (string | {name: string, location: string, description: string} | {name: string})[];
  image_url?: string;
  tags?: string[];
  associated_legends?: {title: string, summary: string}[] | string[];
  qualities?: string[];
  associated_rishis?: string[];
  cultural_references?: { influence: string; used_in: string[] };
  spiritual_significance?: string | string[] | { [key: string]: any };
  references?: ScripturalReference[];
  art_and_culture?: { influence: string; used_in: string[] };
  quotes?: { source: string; text: string }[];
  representation?: string;
  // Ardhanarishvara fields
  philosophical_significance?: string | string[] | { [key: string]: any };
  temples_and_iconic_representations?: TempleAssociation[];
  worship_and_rituals?: { festival: string; associated_practices: string[] };
  related_forms?: (string | {name: string, relation: string})[];
  importance_in_spiritual_practice?: string;
  artistic_and_cultural_impact?: string;
  source_references?: {source: string, link?: string}[];
  theme?: string; // from Tripurantaka
  cultural_significance?: string; // from Tripurantaka
  associated_scriptures?: string[];
  cosmic_function?: { [key: string]: any };
}


export const mahadevRupData: MahadevRup[] = [
  // Supreme & Transcendental Forms
   {
    id: "rupa_parashiva",
    name: "Parashiva",
    sanskrit_name: "परशिव",
    meaning: "The Supreme Shiva; the Transcendental Absolute",
    title: "The Supreme Reality", // Added for consistency
    category: "Supreme & Transcendental",
    form_type: "Nirguna (Formless)",
    description: "Parashiva is the highest, formless, and transcendental aspect of Lord Shiva, beyond all manifestation and attributes. In Shaiva Siddhanta and Kashmir Shaivism, Parashiva is the ultimate reality from which all creation emerges and into which it dissolves. Parashiva is Nirguna Brahman—without form, qualities, or limitations—representing the unchanging, eternal source of everything.",
    symbolism: [
      "Formlessness",
      "Transcendence",
      "Absolute Reality",
      "Source of All Manifestation",
      "Beyond Attributes (Nirguna)"
    ],
    significance: "Parashiva represents the ultimate goal of spiritual liberation (moksha) in Shaiva traditions. It is beyond comprehension, mind, and speech, and cannot be worshipped in the traditional sense. It is the state of pure being, awareness, and bliss (Sat-Chit-Ananda) in its most abstract form.",
    associatedPhilosophies: [
      "Shaiva Siddhanta",
      "Kashmir Shaivism",
      "Advaita Shaivism",
      "Nirguna Brahman concept",
      "Vedanta (in non-dual interpretation)"
    ],
    iconography: {
      form: "Formless (Arupa)",
      color: "Not Applicable",
      eyes: "Not Applicable",
      hair: "Not Applicable",
      symbols: ["Void", "Pure Consciousness", "Bindu", "Nada", "Absolute Light"],
      mount: "Not Applicable",
      weapons: [],
      aura: "Infinite, radiant consciousness beyond duality"
    },
    scriptural_references: [
      {
        text: "Shiva Sutras",
        quote: "चित्तं आत्मा - The Consciousness is the Self."
      },
      {
        text: "Vijnana Bhairava Tantra",
        quote: "शून्यता सर्वविषयविनिर्मुक्ता परा शिवा। - Emptiness, free from all objects, is the supreme Shiva."
      },
      {
        text: "Shiva Purana",
        quote: "न स रूपं न चासौ नाम न च तस्य स्थितिः परा। - That (Parashiva) has no form, no name, and no fixed abode."
      }
    ],
    associated_forms: [
      "Sadashiva",
      "Maheshwara",
      "Shiva as Nirguna Brahman",
      "Shivayoga",
      "Bindu (in Tantra)"
    ],
    associated_elements: [
      "Akasha (Space)",
      "Beyond Pancha Mahabhuta (5 Elements)"
    ],
    goal_of_path: "Liberation (Moksha) through realization of oneness with Parashiva",
    relatedConcepts: [
      "Sat-Chit-Ananda",
      "Shuddha Tattvas",
      "Paramashiva",
      "Turiyatita (Beyond the Fourth State)",
      "Kaivalya (Ultimate Freedom)"
    ],
    is_worshipped: false,
    is_formless: true,
    notes: "Parashiva is not a worshipped deity in the traditional anthropomorphic sense. Realization of Parashiva is considered the ultimate enlightenment and liberation. Represented as the bindu (dot) in Shaiva diagrams symbolizing source and return point.",
    external_links: [
      {
        title: "Shaiva Siddhanta Overview",
        url: "https://en.wikipedia.org/wiki/Shaiva_Siddhanta"
      },
      {
        title: "Kashmir Shaivism and Parashiva",
        url: "https://en.wikipedia.org/wiki/Kashmir_Shaivism"
      }
    ],
    aiHint: "parashiva supreme shiva formless absolute transcendental unmanifest",
    image: "https://drive.google.com/uc?export=view&id=1M8XwF8bSq9YYsvcfiGBKgldqExbLQI6h",
  },
  {
    id: "rupa_sadasiva",
    name: "Sadashiva",
    sanskrit_name: "सदाशिव",
    meaning: "The Eternally Auspicious",
    title: "The Eternally Auspicious",
    type: "Supreme Form",
    category: "Supreme & Transcendental",
    position: "First manifest form of Parashiva in Shaiva Siddhanta",
    philosophical_context: {
      school: ["Shaiva Siddhanta", "Kashmir Shaivism"],
      description: "Sadashiva is the highest manifest form of the formless Parashiva, representing a state where the duality of subject and object begins to emerge. He embodies both transcendence and limited manifestation.",
      relation_to_parashiva: "Sadashiva emerges as the first expression of Parashiva, carrying forward the Supreme's will to create while retaining transcendence.",
      level: "Turiya-Tita (Beyond the Fourth State)"
    },
    iconography: {
      faces: 5,
      hands: 10,
      posture: "Usually seated or standing in yogic or blessing posture",
      attributes: [
        "Represents the Panchakritya: Srishti (creation), Sthiti (preservation), Samhara (destruction), Tirobhava (concealment), Anugraha (grace/liberation)",
        "Five faces represent the five directions (East, West, North, South, and Zenith)"
      ],
      weapons: [
        { name: "Trishula (Trident)" },
        { name: "Damaru (Drum)" },
        { name: "Akshamala (Rosary)" },
        { name: "Kamandalu (Water Pot)" },
        { name: "Abhaya Mudra (Gesture of Protection)" },
        { name: "Varada Mudra (Gesture of Blessing)" },
        { name: "Pustaka (Sacred Book)" },
        { name: "Flame (Agni)" },
        { name: "Snake (Naga)" },
        { name: "Lotus" }
      ],
      mount: "No specific mount; sometimes associated with bull (Nandi) or abstract divine presence"
    },
    symbolism: [
      "Five Faces (Panchamukha)",
      "Ten Hands (representing ten directions)",
      "Divine cosmic functions (Panchakritya)",
      "Luminous Form of subtle nature"
    ],
    significance: "The highest active form of Shiva responsible for the cosmic functions, especially bestowing grace (Anugraha) and liberation. Often represented by the Mukhalingam.",
    description: "Sadashiva is the highest manifest form of the formless Parashiva, representing a state where the duality of subject and object begins to emerge. He is depicted with five faces and ten hands, representing the five holy acts (Panchakritya) of creation, preservation, destruction, obscuration (grace), and liberation (grace).",
    relatedConcepts: ["Shaiva Siddhanta", "Panchakritya", "Panchamukha", "Anugraha (Grace)", "Mukhalingam", "Agamas"],
    mantras: [
      {
        name: "Sadashiva Gayatri",
        sanskrit: "ॐ सदाशिवाय विद्महे महादेवाय धीमहि तन्नो रुद्रः प्रचोदयात्",
        meaning: "Om. Let us meditate on the eternally auspicious Sadashiva. May the great Lord Mahadeva inspire and enlighten us."
      }
    ],
    aiHint: "sadasiva five faces ten hands shiva supreme manifestation grace",
    image: "https://drive.google.com/uc?export=view&id=1do-bvQPcvPYFx7dFOryNY-GZtDYbHoyR",
  },
  {
    id: "rupa_panchabrahma",
    name: "Panchabrahma",
    sanskrit_name: "पञ्चब्रह्म",
    title: "The Five Realities",
    category: "Supreme & Transcendental",
    description: "Panchabrahma refers to the five faces or aspects of Shiva (Sadyojata, Vamadeva, Aghora, Tatpurusha, Ishana) which correspond to the five elements, five senses, five directions, and perform the five cosmic acts (Panchakritya).",
    translation: "The Five Realities",
    aspect: "Supreme & Transcendental",
    overview: "Panchabrahma represents the fivefold manifestation of Lord Shiva, symbolizing the five essential aspects of existence. These five faces—Sadyojata, Vamadeva, Aghora, Tatpurusha, and Ishana—each represent a facet of cosmic function and consciousness.",
    significance: "Each face corresponds to one of the five universal functions (Panchakritya)—creation, preservation, destruction, concealment, and grace. Together, they illustrate the wholeness and omnipresence of Shiva as both immanent and transcendent.",
    faces: [
      { name: "Sadyojata", meaning: "The One Who is Born Now", function: "Creation (Srishti)", element: "Earth", direction: "West", color: "White", associated_quality: "Material manifestation" },
      { name: "Vamadeva", meaning: "The Pleasant and Beautiful", function: "Preservation (Sthiti)", element: "Water", direction: "North", color: "Red", associated_quality: "Beauty and nourishment" },
      { name: "Aghora", meaning: "The Fierce One", function: "Destruction (Samhara)", element: "Fire", direction: "South", color: "Blue", associated_quality: "Transformation and purification" },
      { name: "Tatpurusha", meaning: "That Supreme Person", function: "Concealment (Tirobhava)", element: "Air", direction: "East", color: "Yellow", associated_quality: "Individual ego and limitation" },
      { name: "Ishana", meaning: "The Lord", function: "Grace (Anugraha)", element: "Ether (Space)", direction: "Zenith (Upward)", color: "Transparent/Purple", associated_quality: "Supreme liberation and knowledge" }
    ],
    symbolism: [ "Five faces representing cosmic functions", "Five elements (Pancha Mahabhutas)", "Five directions", "Five senses (Jnanendriyas)", "Unity of diverse aspects of reality" ],
    iconography: {
      faces: 5,
      hands: 10,
      weapons_or_attributes: [ "Trishula (trident)", "Damaru (drum)", "Akshamala (rosary)", "Kamandalu (water pot)", "Abhaya mudra (gesture of protection)", "Varada mudra (gesture of blessing)", "Scriptures", "Fire", "Deer", "Lotus" ],
      color: "Multicolored, representing all five aspects",
      mount: "Nandi (in symbolic form or surrounding the cosmic axis)"
    },
    associatedPhilosophies: [ "Shaiva Siddhanta", "Kashmir Shaivism", "Vedanta integration", "Panchakritya Doctrine" ],
    associated_forms: [ {name: "Sadashiva"}, {name: "Parashiva"}, {name: "Maheshwara"} ],
    mantras: [
      { face: "Sadyojata", mantra: "ॐ सद्योजाताय नमः" },
      { face: "Vamadeva", mantra: "ॐ वामदेवाय नमः" },
      { face: "Aghora", mantra: "ॐ अघोराय नमः" },
      { face: "Tatpurusha", mantra: "ॐ तत्पुरुषाय नमः" },
      { face: "Ishana", mantra: "ॐ ईशानाय नमः" }
    ],
    aiHint: "shiva five faces panchabrahma sadasiva elements cosmic functions creation",
    image: "https://drive.google.com/uc?export=view&id=1MO7ZFks121wT0ILemvy9wcNEwWgoQj19",
  },

  // Cosmic & Philosophical Forms
  {
    id: "rupa_mahadeva",
    name: "Mahadeva",
    sanskrit_name: "महादेव",
    meaning: "The Great God",
    title: "The Great God",
    category: "Cosmic & Philosophical",
    description: "Mahadeva represents the all-powerful, compassionate, and supreme form of Shiva who pervades and governs the cosmos. Worshipped as the protector of Dharma and destroyer of evil, he is the one who holds together the cosmic law and guides souls toward liberation.",
    classification: "Supreme Deity",
    nature: "Personal, Form-based, All-Encompassing",
    essence: "Mahadeva represents the all-powerful, compassionate, and supreme form of Shiva who pervades and governs the cosmos. Worshipped as the protector of Dharma and destroyer of evil, he is the one who holds together the cosmic law and guides souls toward liberation.",
    symbolism: ["Master of Time and Death", "Supreme Yogi and Ascetic", "Lord of Creation and Destruction", "Merciful and Just", "Embodiment of all aspects (Rudra, Sadashiva, Parashiva)"],
    significance: "Represents Shiva in his most complete and accessible saguna (with attributes) form, embodying all his powers and aspects. This is the form most commonly revered in Puranic lore and worship.",
    attributes: { faces: "One or Five (symbolizing Panchabrahma)", hands: "Two or Four (sometimes more in tantric forms)", complexion: "Ash-grey or radiant white", eye: "Third eye symbolizing higher consciousness", hair: "Matted with crescent moon and Ganga" },
    weapons: [ {name:"Trishula (Trident)"}, {name:"Damaru (Drum)"}, {name:"Pasha (Noose)"}, {name:"Axe (Parashu)"} ],
    mount: "Nandi (the sacred bull)",
    consort: "Parvati (Shakti)",
    abode: "Mount Kailash",
    associated_texts: [ "Shiva Purana", "Linga Purana", "Vedas (especially Rudram, Yajurveda)", "Mahabharata (Shiva Sahasranama)", "Upanishads (Kaivalya, Svetasvatara)" ],
    key_roles: [ "Lord of Yoga and Meditation", "Protector of Dharma", "Destroyer of Evil", "Supreme Liberator", "Compassionate Father of All Beings" ],
    festivals: [ {name:"Mahashivaratri"}, {name:"Shravan Maas"}, {name:"Kartik Purnima"} ],
    mantras: [{mantra: "ॐ नमः शिवाय"}, {mantra: "महादेवाय नमः"}, {mantra: "ॐ त्र्यम्बकं यजामहे"}],
    associated_forms: [ {name:"Rudra"}, {name:"Parashiva"}, {name:"Sadashiva"}, {name:"Panchabrahma"}, {name:"Nataraja"}, {name:"Ardhanarishvara"} ],
    iconography: { elements: [ "Third Eye (knowledge and destruction)", "Blue Throat (Neelakantha – from drinking poison)", "Ash-smeared body (renunciation)", "Serpent Ornaments (ego conquered)", "Tiger Skin (power over instincts)", "Crescent Moon (cycle of time)", "River Ganga (purity and life-giving flow)" ] },
    philosophical_context: { shaivism_schools: [ "Shaiva Siddhanta", "Kashmir Shaivism", "Pashupata Shaivism", "Nath Tradition" ], core_idea: "Mahadeva represents Shiva in his fully engaged, relatable, and benevolent form — accessible to devotion, meditation, and philosophical inquiry. He is the bridge between the unknowable Absolute (Parashiva) and the living world." },
    cosmic_function: {
        panchakritya: [
          "Srishti (Creation)",
          "Sthiti (Preservation)",
          "Samhara (Destruction)",
          "Tirobhava (Veiling/Obscuration)",
          "Anugraha (Grace/Liberation)"
        ]
    },
    worship: {
        temples: [
          {name:"Kedarnath"},
          {name:"Kashi Vishwanath"},
          {name:"Somnath"},
          {name:"Mallikarjuna"},
          {name:"Rameshwaram"},
          {name:"Mahakaleshwar"},
          {name:"Omkareshwar"}
        ],
        rituals: [
          "Abhishekam with water, milk, honey, ghee, and bilva leaves",
          "Chanting of Rudram",
          "Meditation on Om Namah Shivaya"
        ]
    },
    aiHint: "mahadeva great god supreme shiva kailash meditating",
    image: "https://i.pinimg.com/736x/2b/93/68/2b9368354dd902f78ac2dee8eac98b38.jpg",
  },
  {
    id: "rupa_ishvara",
    name: "Ishvara",
    sanskrit_name: "ईश्वर",
    meaning: "The Lord of Manifestation",
    title: "The Lord of Manifestation",
    category: "Cosmic & Philosophical",
    description: "Ishvara is the personal form of the supreme, formless Brahman, manifesting as the cosmic controller. In Shaivism, Ishvara is Shiva who governs the universe with divine will and compassion. While Parashiva is the unmanifest absolute, Ishvara is the aspect that engages with the world — creating, sustaining, and dissolving it.",
    form_type: "Manifest",
    level: "Supreme Personal God",
    domain: [ "Manifestation", "Control", "Divine Will", "Cosmic Regulation" ],
    associated_traditions: [ "Shaivism", "Vedanta", "Kashmir Shaivism", "Shaiva Siddhanta" ],
    philosophical_context: {
        school: "Shaivism (various)",
        position: "Manifest Personal Aspect of Parashiva",
        role: "The lord who wills creation and governs all manifest phenomena",
        relation_to_parashiva: "Parashiva is the Nirguna (attribute-less) Brahman, Ishvara is Saguna (with attributes) Brahman"
    },
    symbolism: [ "Divine Will (Iccha Shakti)", "Supreme Intelligence (Jnana Shakti)", "Power of Action (Kriya Shakti)", "Compassionate Ruler", "Cosmic Order" ],
    iconography: {
        appearance: "Radiant, majestic form of Shiva with adorned ornaments and a serene, powerful aura",
        faces: 1,
        hands: "Two or Four (varies)",
        weapons: [
            {name: "Trishula (Trident)"},
            {name: "Damaru (Drum)"},
            {name: "Abhaya Mudra (gesture of fearlessness)"},
            {name: "Varada Mudra (gesture of granting boons)"}
        ],
        attire: "Tiger skin, adorned with snakes and sacred ash",
        symbols: [ "Crescent Moon", "Third Eye", "River Ganga flowing from hair" ]
    },
    significance: "This concept bridges the gap between the formless Absolute (Brahman) and the personal God who can be worshipped and related to. Ishvara is the source of divine order and cosmic law.",
    relatedConcepts: ["Saguna Brahman", "Maya", "Cosmic Order (Rita)", "Bhakti Yoga"],
    mantras: [{mantra: "Om Ishvaraya Namah"}, {mantra: "Om Namah Shivaya"}, {mantra: "Om Tatpurushaya Vidmahe Mahadevaya Dhimahi Tanno Rudrah Prachodayat"}],
    worship: {
        temples: "Most Shiva temples worship Ishvara in linga form",
        festivals: ["Maha Shivaratri", "Shravan Maas", "Pradosham"],
        rituals: "Abhisheka (ritual bathing), chanting mantras, offering Bilva leaves, lighting lamps"
    },
    associated_forms: [
        {name: "Parashiva", relation: "Unmanifest"},
        {name: "Sadashiva", relation: "First Manifest"},
        {name: "Panchabrahma", relation: "Cosmic Faces"},
        {name: "Mahadeva", relation: "Supreme Personal God"}
    ],
    scriptural_references: [
        {text: "Shvetashvatara Upanishad", quote: "He is the one God, hidden in all beings, all-pervading, the self within all beings, the overseer of all actions, the dwelling of all beings, the witness, the knower, the only one who grants liberation."},
        {text: "Shaiva Agamas", mention: "Ishvara is worshipped as the Supreme Lord, holding the powers of will, knowledge, and action."}
    ],
    aiHint: "ishvara shiva personal god supreme controller cosmos divine will",
    image: "https://i.pinimg.com/736x/35/27/62/3527622322a5a29bfe325824ec7a4283.jpg",
  },
  {
    id: "rupa_dakshinamurthy",
    name: "Dakshinamurthy",
    sanskrit_name: "दक्षिणामूर्ति",
    meaning: "The South-Facing Teacher",
    title: "The South-Facing Teacher",
    category: "Cosmic & Philosophical",
    description: "Shiva as the supreme teacher of yoga, music, and wisdom (Jnana), imparting knowledge silently through parā vāk (supreme speech) or non-verbal transmission. He is the Adi Guru, the first teacher, who dispels ignorance by his very presence.",
    nature: "Supreme Guru",
    aspect: "Jnana (Knowledge)",
    representation: "Shiva as the universal teacher imparting wisdom in silence",
    type: "Manifestation",
    iconography: {
      direction_faced: "South",
      seated_on: "Sacred banyan tree (Vatavriksha)",
      gesture: "Jnana Mudra (gesture of wisdom)",
      mount: "None",
      number_of_arms: 4,
      weapons_and_items: [
        {name: "Flame (Agni)", symbolism: "Illumination and dissolution of ignorance"},
        {name: "Scripture (Palm leaf or manuscript)", symbolism: "Sacred knowledge"},
        {name: "Rosary (Rudraksha mala)", symbolism: "Spiritual practice and focus"},
        {name: "Abhaya Mudra", symbolism: "Gesture of reassurance and fearlessness"}
      ],
      demon_under_foot: "Apasmara (demon of ignorance)",
      appearance: "Youthful sage with serene expression, teaching rishis through silence"
    },
    symbolism: [
      "South-facing: Dispelling darkness (ignorance), direction of death and transformation",
      "Banyan Tree: Immortality and eternal knowledge",
      "Silent teaching (Mauna Upadesha): The highest form of transmission beyond words",
      "Jnana Mudra: Union of individual and universal consciousness",
    ],
    significance: {
      role: "Supreme teacher of yoga, music, vedanta, and spiritual truth",
      teaches: "Silence, inner realization, self-inquiry",
      disciples: ["Sanaka", "Sanandana", "Sanatana", "Sanatkumara (the four sages)"],
      core_message: "The ultimate knowledge is self-realization, received not through speech but through inner awakening"
    },
    associated_scriptures: [
        "Shiva Purana",
        "Skanda Purana",
        "Upanishads (Jnana Kanda)",
        "Dakshinamurti Stotram by Adi Shankaracharya"
    ],
    festivals: [
      {name: "Guru Purnima"},
      {name:"Thursday (Guruvaar)", description: "day of the Guru"}
    ],
    relatedConcepts: ["Guru", "Jnana (Knowledge)", "Silence", "Advaita Vedanta", "Yoga", "Music", "Parā Vāk (Supreme Speech)", "Inner Guru"],
    worship: {
      common_forms_of_worship: [
        "Recitation of Dakshinamurthy Stotram",
        "Meditation under sacred trees",
        "Silence and self-inquiry",
        "Offerings of white flowers and ghee lamps"
      ],
      iconic_temples: [
        {
          "name": "Alangudi Dakshinamurthy Temple",
          "location": "Tamil Nadu, India"
        },
        {
          "name": "Vaideeswaran Koil",
          "location": "Tamil Nadu, India"
        }
      ]
    },
    philosophical_context: {
        schools: ["Advaita Vedanta", "Shaiva Siddhanta"],
        position: "Highest teacher within the manifest world; bridge between Parashiva and the devotee"
    },
    related_forms: [
        {name: "Ishvara"}, {name: "Mahadeva"}, {name: "Sadashiva"}, {name: "Parashiva"}
    ],
    tags: [ "Shiva", "Guru", "Vedanta", "Dakshinamurthy", "South-Facing", "Jnana", "Silence" ],
    aiHint: "shiva teacher guru silent teaching sages south facing banyan tree",
    image: "https://i.pinimg.com/736x/8a/26/2e/8a262eb6a09ce616f87b650ab00d6995.jpg",
  },
  {
    id: "rupa_adiyogi",
    name: "Adiyogi",
    sanskrit_name: "आदियोगी",
    meaning: "The First Yogi",
    title: "The First Yogi",
    category: "Cosmic & Philosophical",
    description: "Adiyogi is the primordial form of Shiva as the first Yogi, who introduced the science of Yoga to humanity. He is regarded as the originator of yogic systems, who transmitted profound inner sciences to the Sapta Rishis (Seven Sages). This transmission laid the foundation of all spiritual traditions rooted in yogic principles.",
    aspect: "Supreme Source of Yoga",
    form_type: "Divine Teacher Form",
    domain: ["Yoga", "Meditation", "Inner Science", "Enlightenment"],
    symbolism: ["Primordial Guru (Adi Guru)", "Infinite knowledge", "Yogic stillness", "Cosmic alignment", "Union of body, mind and spirit"],
    iconography: {
      face: "Serene and meditative expression",
      eyes: "Half-closed indicating inward awareness",
      posture: "Seated in Padmasana (lotus posture)",
      hands: [{ mudra: "Jnana Mudra (gesture of wisdom)" }, { mudra: "Abhaya Mudra (gesture of fearlessness)" }],
      attire: "Simple yogic robes or bare upper body",
      hair: "Matted locks flowing upwards (jata)",
      third_eye: true,
      mount: "Earth as the seat of stillness",
      aura: "Cosmic blue radiance symbolizing vastness",
      weapons: [{name: "Inner Discipline", symbolism: "Conquering ignorance through yogic practice"}]
    },
    associated_rishis: ["Agastya", "Bhrigu", "Vashishta", "Vishwamitra", "Atri", "Bharadvaja", "Gautama"],
    mantras: [{mantra: "Om Adiyogine Namah"}],
    philosophical_context: ["Hatha Yoga", "Kriya Yoga", "Jnana Yoga", "Raja Yoga", "Tantra", "Shaiva Philosophy"],
    spiritual_significance: "Adiyogi represents the cosmic source of all yogic knowledge and spiritual disciplines. His silent transmission through parā vāṇī (supreme speech) invokes deep meditative wisdom. He is not a historical teacher but a timeless reality accessible within.",
    cultural_references: {
        texts: [
          "Shiva Purana",
          "Yogic Traditions of Nath Sampradaya",
          "Shaiva Agamas"
        ],
        sculptures: [
          {name: "Adiyogi Statue at Isha Foundation, Coimbatore", description: "112 feet tall, representing 112 ways to attain liberation"}
        ]
    },
    qualities: ["Stillness", "Silence", "Awareness", "Discipline", "Self-realization"],
    festivals: [{ name: "Maha Shivaratri" }, { name: "International Day of Yoga" }],
    abode: "Symbolically seated in all yogis’ hearts; associated with Kailash",
    associated_forms: [{name: "Dakshinamurthy"}, {name: "Parashiva"}, {name: "Rudra"}, {name: "Ishvara"}],
    references: [{ source: "Shiva Mahapurana", link: "https://www.wisdomlib.org/hinduism/book/shiva-purana-english" }, { source: "Isha Foundation – Adiyogi", link: "https://isha.sadhguru.org/global/en/adiyogi" }, { source: "Agamas and Yogic Literature" }],
    aiHint: "shiva meditating yogi first guru adiyogi mountains knowledge",
    image: "https://i.pinimg.com/736x/a9/f4/99/a9f499fec025f95e21653b655694ba43.jpg",
  },

  // Iconic & Symbolic Forms
  {
    id: "rupa_nataraja",
    name: "Nataraja",
    sanskrit_name: "नटराज",
    meaning: "The Lord of Dance",
    title: "The Lord of Dance",
    category: "Iconic & Symbolic",
    description: "Shiva as the cosmic dancer, performing the Tandava, the dance of creation, preservation, and destruction. He dances within a circle of flames (Prabhamandala), balancing on the demon Apasmara (symbolizing ignorance).",
    type: "Cosmic Form",
    aspect: "Dynamic & Symbolic",
    representation: "Shiva performing the Ananda Tandava within a ring of fire",
    symbolism: {
        "dance": "Ananda Tandava (Dance of Bliss)",
        "circle_of_fire": "Cycle of birth, life, death, and rebirth (Samsara)",
        "dwarf_apasmara": "Ignorance trampled by Shiva",
        "raised_leg": "Liberation and upliftment of devotees",
        "damaru": "Creation, sound, rhythm of the universe",
        "fire": "Destruction and transformation",
        "hand_pose": "Abhaya mudra (fearlessness and protection)",
        "flowing_hair": "Spread of divine energy"
    },
    significance: {
        cosmic_role: [
            "Creation (Srishti)",
            "Preservation (Sthiti)",
            "Destruction (Samhara)",
            "Obscuration (Tirobhava)",
            "Grace/Liberation (Anugraha)"
        ],
        philosophy: [
            "Symbol of the eternal cosmic cycle",
            "Balance between destruction and regeneration",
            "Master of rhythm and movement of the universe",
            "Represents the unity of opposites: stillness in motion"
        ]
    },
    iconography: {
        location: "Chidambaram Temple, Tamil Nadu (primary)",
        appearance: "Four-armed Shiva dancing in ring of fire with dwarf demon underfoot",
        hair: "Flowing, matted locks with Ganga and crescent moon",
        third_eye: true,
        ornaments: ["Serpent ornaments", "sacred ash"],
        stance: "Dancing (Tandava pose), one foot on demon Apasmara, one raised",
        hands: 4,
        weapons: [{name: "Damaru (drum)"}, {name: "Agni (fire)"}],
        demon_under_foot: "Apasmara (ignorance)"
    },
    mantras: [{sanskrit: "ॐ नटराजाय नमः"}],
    associated_texts: [
        {name: "Shiva Purana"},
        {name: "Ananda Tandava Stotram"},
        {name: "Chidambara Rahasya (Secret of Consciousness)"},
        {name: "Tirumurai (Shaiva texts in Tamil)"}
    ],
    temples: [
        {
          name: "Nataraja Temple",
          location: "Chidambaram, Tamil Nadu",
          importance: "Primary temple dedicated to Nataraja; center of cosmic consciousness"
        },
        {
          name: "Konark Sun Temple (depictions)",
          location: "Odisha, India",
          importance: "Has intricate depictions of dancing Shiva"
        }
    ],
    art_and_culture: {
        influence: "Inspired classical Indian dance forms like Bharatanatyam",
        used_in: [
          "Temple art",
          "Bronze sculpture (notably Chola bronzes)",
          "Indian philosophy",
          "Modern physics as a metaphor (e.g., CERN's statue of Nataraja)"
        ]
    },
    quotes: [
        {
          source: "CERN, Geneva",
          text: "The dancing Shiva is a cosmic metaphor for the rhythm of subatomic particles."
        },
        {
          source: "Ananda Tandava Stotram",
          text: "Let me behold the joy of the cosmic dancer whose dance awakens creation and ends in silence."
        }
    ],
    external_links: [
        {
          title: "Nataraja – The Cosmic Dancer (Chidambaram Temple)",
          url: "https://en.wikipedia.org/wiki/Nataraja"
        },
        {
          title: "Nataraja and the Dance of Physics – CERN",
          url: "https://home.cern/news/news/cern/shiva-statue-cern"
        }
    ],
    relatedConcepts: ["Tandava Dance", "Cosmic Cycles (Yugas)", "Shaiva Siddhanta", "Art and Sculpture"],
    aiHint: "shiva cosmic dancer nataraja fire circle drum tandava",
    image: "https://i.pinimg.com/736x/27/30/c0/2730c0096d134d26f368a8c4454d2e20.jpg",
  },
  {
    id: "rupa_ardhanarishvara",
    name: "Ardhanarishvara",
    sanskrit_name: "अर्धनारीश्वर",
    meaning: "The Lord Who is Half Woman",
    title: "The Lord Who is Half Woman",
    category: "Iconic & Symbolic",
    description: "A composite androgynous form of the Hindu god Shiva and his consort Parvati, representing the synthesis of masculine and feminine energies of the universe. The form is depicted as half-male and half-female, split vertically, symbolizing the inseparable nature of Purusha (consciousness) and Prakriti (nature).",
    type: "Composite Form",
    aspect: "Union of Shiva and Shakti",
    symbolism: [
      "Unity of opposites",
      "Divine balance of masculine and feminine",
      "Non-duality (Advaita)",
      "Interdependence of creation",
      "Cosmic wholeness"
    ],
    iconography: {
      body_division: "Right half is Shiva (male), left half is Parvati (female)",
      attributes_male: {
        hair: "Jata (matted hair) with crescent moon and Ganga",
        adornments: "Rudraksha, serpent ornaments",
        attire: "Tiger skin or loincloth",
        arms: ["Trishula (trident)", "Damaru (drum)"]
      },
      attributes_female: {
        hair: "Ornamental braid with flowers",
        adornments: "Bangles, earrings, crown, necklace",
        attire: "Silken sari",
        arms: ["Lotus", "Mirror or Parashu (axe)"]
      },
      mount: "Nandi (Shiva’s bull) and Lion (Parvati’s mount) in composite forms",
      pose: "Graceful tribhanga pose, representing dance and balance"
    },
    philosophical_significance: [
        "Illustrates the concept of Ardhatva (completeness through union)",
        "Symbolizes the inseparability of Shiva and Shakti",
        "Represents cosmic duality and harmony",
        "Seen in non-dualistic schools like Shaivism and Shakta traditions"
    ],
    associated_texts: [
        {name:"Shiva Purana"},
        {name:"Linga Purana"},
        {name:"Skanda Purana"},
        {name:"Tantric texts"},
        {name:"Kashyapa Shilpa Shastra", description:"describes iconography"}
    ],
    temples_and_iconic_representations: [
        {
            "name": "Ardhanareeswarar Temple",
            "location": "Tiruchengode, Tamil Nadu, India",
            "significance": "One of the most important temples dedicated to Ardhanarishvara"
        },
        {
            "name": "Elephanta Caves",
            "location": "Maharashtra, India",
            "significance": "Renowned rock-cut sculpture of Ardhanarishvara"
        }
    ],
    worship_and_rituals: {
        "festival": "Shivaratri",
        "associated_practices": [
            "Worshipped for harmony in relationships and balance of energies",
            "Common in tantric worship and yogic meditations"
        ]
    },
    related_forms: [
      {name: "Shiva"},
      {name: "Parvati"},
      {name: "Uma Maheshvara", relation: "Joint form of Shiva and Parvati"},
      {name: "Kameshvara-Kameshwari", relation: "Tantric divine couple"}
    ],
    relatedConcepts: ["Purusha and Prakriti", "Shiva-Shakti union", "Non-duality (Advaita)", "Cosmic Androgyny"],
    importance_in_spiritual_practice: "Contemplating Ardhanarishvara helps transcend duality and understand the unified nature of existence. The form inspires inner balance of masculine and feminine qualities and is meditated upon for spiritual integration.",
    artistic_and_cultural_impact: "Influential in Indian art, sculpture, dance (particularly Bharatanatyam), and temple architecture, representing divine aesthetics and cosmic balance.",
    source_references: [
      {source: "Shiva Purana – Rudra Samhita"},
      {source: "Linga Purana – Uttara Bhaga"},
      {source: "Skanda Purana – Kashi Khanda"},
      {source: "Iconography in Indian Art by C. Sivaramamurti"},
      {source: "Ardhanarishvara: The Androgyne of Indian Art by V. K. Subramanian"}
    ],
    significance: "Represents the inseparable union of Shiva (Purusha) and Shakti (Prakriti). It signifies that the ultimate reality is a balance and synthesis of opposites, beyond all duality.",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Ardhanarishvara.jpg",
    tags: [
        "Shiva",
        "Parvati",
        "Divine Union",
        "Shaivism",
        "Shakta",
        "Symbolism",
        "Balance",
        "Non-duality"
    ],
    aiHint: "shiva parvati combined half male half female ardhanarishvara",
    image: "https://i.pinimg.com/1200x/a9/85/9d/a9859dfc2176a6befb097cbe2e43fcae.jpg",
  },
  {
    id: "rupa_bhairava",
    name: "Bhairava",
    sanskrit_name: "भैरव",
    meaning: "The Terrifying One",
    title: "The Terrifying One",
    category: "Iconic & Symbolic",
    description: "The fierce and terrifying manifestation of Shiva associated with annihilation, destruction of ego, and protection. Often depicted with fearsome attributes like multiple arms, sharp teeth, a garland of skulls, and accompanied by a dog.",
    type: "Fierce Form",
    nature: "Ugra (Fierce), Protector, Destroyer of Ego",
    essence: "The fierce manifestation of Shiva representing annihilation, protection, time, and transcendence of fear.",
    symbolism: [
      "Terrifying yet protective form",
      "Destruction of ego and ignorance",
      "Transcendence of time (Kala Bhairava)",
      "Guardianship of sacred spaces (Kshetrapala)",
      "Wrathful compassion"
    ],
    significance: {
      'Guardian Role': "Bhairava guards sacred spaces (especially Kashi and Shakti Peethas).",
      'Control over Time': "As Kala Bhairava, he controls time and grants liberation from its cycle.",
      'Ego Annihilation': "Worshipped to overcome fear, enemies, and negative influences.",
    },
    attributes: {
      form: "Fierce form of Shiva, often depicted with a wrathful expression, wearing skulls, animal skins, and carrying weapons",
      faces: "One or multiple fierce faces",
      arms: "4, 8 or more arms depending on regional depiction",
      mount: "Dog (symbol of loyalty, vigilance, and the threshold between life and death)",
      weapons: [ {name:"Trishula (Trident)"}, {name:"Damaru (Drum)"}, {name:"Sword"}, {name:"Skull cup (Kapala)"}, {name:"Noose"}, {name:"Flaming torch"} ]
    },
    forms_and_variants: [
      { name: "Kala Bhairava", meaning: "Lord of Time", significance: "Regulator of time and death; fierce protector of Dharma." },
      { name: "Ashta Bhairavas", meaning: "Eight Bhairavas", list: [ "Asitanga Bhairava", "Ruru Bhairava", "Chanda Bhairava", "Krodha Bhairava", "Unmatta Bhairava", "Kapala Bhairava", "Bheeshana Bhairava", "Samhara Bhairava" ], function: "Each governs a direction, controls time, space, elements, and guards sacred paths." }
    ],
    philosophical_meaning: {
      Shaiva_view: "Bhairava is the form of Shiva that destroys the ego and liberates the soul by confronting the seeker with ultimate truth.",
      Kashmir_Shaivism: "‘Bhairava’ comes from ‘Bha’ (creation), ‘Ra’ (sustenance), ‘Va’ (destruction) – symbolizing the totality of Shiva’s functions. Also equated with the supreme state of consciousness (Bhairava Tattva)."
    },
    worship: {
      mantra: "ॐ भैरवाय नमः (Om Bhairavaya Namah)",
      offerings: [ "Black sesame", "Alcohol (in tantric traditions)", "Mustard oil lamps", "Red flowers", "Meat (in some tantric forms)" ],
      days: "Worshipped primarily on Tuesdays, Saturdays, and during Kalabhairava Ashtami",
      temples: [ {name: "Kaal Bhairav Temple, Varanasi"}, {name: "Kala Bhairava Temple, Ujjain"}, {name: "Batuk Bhairav Temple, Varanasi"}, {name: "Kalabhairava Temple, Kathmandu (Nepal)"} ]
    },
    associated_goddess: "Bhairavi (his consort, feminine fierce energy)",
    guardian_role: "Considered Kshetrapala – guardian deity of Shiva temples and sacred sites",
    scriptures: [ {name:"Rudrayamala Tantra"}, {name:"Bhairava Tantra"}, {name:"Shiva Purana"}, {name:"Skanda Purana"}, {name:"Kalabhairava Ashtakam (by Adi Shankaracharya)"}, {name:"Vijnana Bhairava Tantra (Kashmir Shaivism – philosophical exposition)"} ],
    relatedConcepts: ["Kala Bhairava (Time)", "Annihilation", "Protection", "Tantric Practices", "Shakti Peethas"],
    mantras: [{mantra: "ॐ कालभैरवाय नमः"}],
    aiHint: "fierce shiva bhairava dog skull trident kashi guardian",
    image: "https://i.pinimg.com/736x/ab/b6/09/abb6098efd6fd1eaa431bebca3f45cc0.jpg",
  },
  {
    id: "rupa_aghori",
    name: "Aghori",
    sanskrit_name: "अघोरी",
    meaning: "The Fearless Ascetic",
    title: "The Fearless Ascetic",
    category: "Iconic & Symbolic",
    description: "A radical ascetic sect of Shaivism known for their extreme practices. They seek liberation by embracing what society considers taboo or impure, seeing divinity in everything.",
    type: "Rudra Rupa",
    nature: "Ascetic, Fearless, Transcendental",
    domain: ["Liberation", "Non-duality", "Transgression", "Fearlessness"],
    associated_with: ["Lord Shiva", "Smashana (cremation grounds)", "Kapalika tradition"],
    philosophy: "Aghoris follow an extreme path of Shaivism aiming for moksha (liberation) through transcendence of dualities such as pure and impure, life and death, sacred and taboo. They believe everything is Shiva, and nothing is inherently impure.",
    symbolism: [
      "Fearlessness in facing death and decay",
      "Unity of opposites",
      "Overcoming societal norms",
      "Realization of the non-dual Absolute",
    ],
    practices: {
      common_practices: [
        "Living in cremation grounds (Shmashana sadhana)",
        "Meditation with skulls (Kapala sadhana)",
        "Use of ashes from dead bodies (Vibhuti)",
        "Consumption of offerings from funeral rituals (Charanamrit)",
        "Rituals invoking Bhairava and Kali"
      ],
      path: "Left-hand path (Vamachara) of Tantra",
      purpose: "To dissolve ego, destroy attachment, and attain moksha"
    },
    iconography: {
      appearance: "Naked or in ash-smeared bodies, adorned with bones or skull garlands, fierce expressions, dreadlocks, often seen in trance or deep meditation",
      symbols: ["Skull", "Trident (Trishula)", "Ash", "Fire"],
    },
    mantras: [{
        mantra: "ॐ अघोरेभ्यो तथ अघोरेभ्यो नमः",
        name: "Aghor Mantra"
    }],
    scriptural_references: [
      { text: "Shiva Purana" },
      { text: "Rudra Yamala Tantra" },
      { text: "Kaulajnananirnaya" },
      { text: "Aghora Trilogy by Vimalananda (modern source)" }
    ],
    related_forms: [ {name: "Bhairava"}, {name: "Kapalika"}, {name: "Avadhuta"}, {name: "Kaula Tantric Yogis"} ],
    significance: "Aghoris represent an extreme path of non-duality, seeking direct realization by confronting the most feared aspects of existence. They embody Shiva's aspect that lies beyond conventional purity and impurity.",
    relatedConcepts: ["Asceticism", "Tantra", "Non-duality (Advaita)", "Cremation Grounds", "Transcendence"],
    aiHint: "aghori ascetic shiva cremation ground skull intense unconventional",
    image: "https://i.pinimg.com/736x/91/2f/7d/912f7d7a3cb8eeb6842b55c64c237856.jpg",
  },
  {
    id: "rupa_neelakantha",
    name: "Neelakantha",
    sanskrit_name: "नीलकण्ठ",
    meaning: "The Blue-Throated One",
    title: "The Blue-Throated One",
    category: "Iconic & Symbolic",
    description: "Neelakantha is the form Shiva assumed after consuming the deadly Halahala poison that emerged during the Samudra Manthan (Churning of the Ocean). To save the cosmos from destruction, Shiva drank the poison, which lodged in his throat and turned it blue, giving him the name 'Neelakantha'. This act is seen as the ultimate self-sacrifice for cosmic welfare.",
    nature: "Protective & Sacrificial",
    symbolism: [
        "Blue throat (from holding Halahala poison)",
        "Supreme compassion and self-sacrifice",
        "Protector of the universe",
        "Embodiment of fearlessness"
    ],
    iconography: {
        appearance: "Shiva is depicted with a calm and serene expression, a blue-colored throat glowing subtly, seated or standing in meditation or cosmic awareness.",
        attributes: [
            "Blue throat (Vishakantha)",
            "Crescent moon in hair",
            "Third eye on forehead",
            "Ganga flowing from matted hair",
            "Tiger skin garment",
            "Serpent ornaments"
        ],
        weapons: [
            { "name": "Trishula (Trident)" },
            { "name": "Damaru (Drum)" },
            { "name": "Khatvanga (Skull-staff)" }
        ],
        mount: "Nandi (the sacred bull)"
    },
    associated_legends: [
        {
            "title": "Samudra Manthan – Churning of the Ocean",
            "summary": "During the cosmic churning by the Devas and Asuras to obtain Amrita (nectar of immortality), the deadly Halahala poison emerged. To prevent universal destruction, Shiva drank it. Parvati stopped it in his throat, turning it blue and earning him the title Neelakantha."
        }
    ],
    significance: "Represents ultimate self-sacrifice for universal good. Emphasizes the protective and nurturing aspect of Shiva. Symbolizes Shiva’s power to transform poison (negativity) into stillness and compassion.",
    worship: {
        festivals: [
            "Worshipped during Mahashivaratri and in rituals seeking protection and purification",
            "Especially venerated in temples that commemorate Samudra Manthan"
        ]
    },
    related_forms: [ {name: "Rudra"}, {name: "Bhairava"}, {name: "Tripurantaka"}, {name: "Vishakantha"}, {name: "Mahadeva"} ],
    associated_texts: [ {name:"Shiva Purana"}, {name:"Skanda Purana"}, {name:"Mahabharata"}, {name:"Bhagavata Purana"} ],
    mantras: [
        {
            "title": "Neelakantha Mantra",
            "sanskrit": "नीलकण्ठाय नमः",
            "transliteration": "Neelakanthāya Namah",
            "translation": "Salutations to the Blue-Throated One"
        }
    ],
    relatedConcepts: [ "Samudra Manthan", "Halahala", "Cosmic Sacrifice", "Divine Intervention" ],
    temples: [
        {
            "name": "Kalahasti Temple",
            "location": "Andhra Pradesh, India",
            "description": "Associated with Vayu and Neelakantha aspects of Shiva"
        },
        {
            "name": "Neelakanth Mahadev Temple",
            "location": "Rishikesh, Uttarakhand, India",
            "description": "Dedicated to Shiva in the Neelakantha form, built near the mythological location where he consumed the poison"
        }
    ],
    image_url: "https://i.pinimg.com/736x/1d/59/89/1d5989d26704752f5e35d7d1db52a8ee.jpg",
    aiHint: "shiva blue throat poison samudra manthan compassion",
    image: "https://i.pinimg.com/736x/1d/59/89/1d5989d26704752f5e35d7d1db52a8ee.jpg",
  },
   {
    id: "rupa_lingam",
    name: "Shiva Lingam",
    sanskrit_name: "शिव लिङ्गम्",
    meaning: "The Formless Form",
    title: "The Formless Form",
    category: "Iconic & Symbolic",
    description: "An abstract or aniconic representation of Shiva, often depicted as a cylindrical pillar, sometimes emerging from a yoni (representing Shakti). It symbolizes the formless (Nirguna) yet potent (Saguna) nature of the Absolute Reality.",
    nature: "Symbolic Representation",
    aspect: "Formless and Eternal",
    symbolism: [
      "Formlessness and Eternity",
      "Union of Shiva and Shakti",
      "Infinite Cosmic Pillar",
      "Source of All Creation",
      "Transcendence Beyond Attributes"
    ],
    iconography: { 
      form: "Cylindrical black stone or metal pillar, often resting in a Yoni base", 
      features: [ "Smooth, rounded top (symbol of the infinite)", "Often surrounded by water, flowers, and Bilva leaves", "Represents unmanifest energy and consciousness" ], 
      variations: [ "Eklinga (one lingam)", "Chaturmukha Lingam (four-faced)", "Jyotirlinga (pillar of light)", "Swayambhu Lingam (self-manifested)" ] 
    },
    worship: {
      rituals: ["Abhishekam with water, milk, honey, and ghee", "Offerings of Bilva leaves, flowers, sandal paste", "Chanting of 'Om Namah Shivaya'"],
      festivals: ["Maha Shivaratri", "Pradosham", "Shravan Month Worship"]
    },
    temples: [
      { name: "Kashi Vishwanath", location: "Varanasi, Uttar Pradesh, India" },
      { name: "Somnath Jyotirlinga", location: "Gujarat, India" },
      { name: "Kedarnath Temple", location: "Uttarakhand, India" },
      { name: "Amarnath Cave Temple", location: "Jammu and Kashmir, India" }
    ],
    philosophical_meaning: {
      nirguna: "The Lingam is worshipped as Nirguna Brahman—beyond form, gender, and attributes.",
      saguna: "When worshipped with rituals and personified attributes, it becomes Saguna Shiva.",
      cosmic_principle: "Represents the Axis Mundi (cosmic axis), linking the Earth to the Divine."
    },
    relatedConcepts: ["Formless (Nirguna Brahman)", "Manifest (Saguna Brahman)", "Creation", "Cosmic Pillar", "Shiva-Shakti Union", "Brahman", "Purusha and Prakriti", "Yin and Yang (comparable duality)", "Axis Mundi", "Non-duality (Advaita)"],
    scriptural_references: [
      { text: "Shiva Purana", description: "Describes the origin of the lingam and its supreme status as the beginningless and endless pillar of fire (Jyotirlinga)." },
      { text: "Linga Purana", description: "Dedicated entirely to the worship, philosophy, and symbolism of the Shiva Lingam." },
      { text: "Skanda Purana", description: "Narrates how various Lingas manifested in different locations (e.g., Jyotirlingas)." },
      { text: "Vedas (Yajurveda)", description: "Mentions the lingam in its symbolic sense representing the Absolute Reality (Brahman)." }
    ],
    tags: ["Lingam", "Shiva", "Yoni", "Aniconic Symbol", "Jyotirlinga", "Eternal Pillar"],
    aiHint: "shiva lingam abstract pillar yoni worship symbol formless",
    image: "https://i.pinimg.com/736x/ac/00/3e/ac003e07cb1f1f574967af5b89bc083e.jpg",
  },
   {
    id: "rupa_tripurantaka",
    name: "Tripurantaka",
    sanskrit_name: "त्रिपुरान्तक",
    translation: "Slayer of the Three Cities",
    title: "Slayer of the Three Cities",
    category: "Iconic & Symbolic",
    description: "Tripurantaka is the form of Shiva who destroyed the three cities (Tripura) of the demons Tarakaksha, Kamalaksha, and Vidyunmali. These cities symbolized ego, ignorance, and attachment. The annihilation signifies the destruction of the triple impurities (Mala, Karma, Maya) that obscure the soul. Shiva destroyed the cities with a single arrow, riding a chariot made by the gods themselves, symbolizing the convergence of all cosmic forces under his supreme will.",
    form_type: "Fierce Form",
    attributes: [ "Destroyer of Ego, Illusion, and Bondage", "Embodiment of Cosmic Will", "Master of Supreme Aim (Paramartha)" ],
    symbolism: { "Tripura": "The three cities representing body, mind, and intellect or the three impurities (anava, karma, maya).", "Single Arrow": "Oneness of supreme knowledge and power.", "Divine Chariot": "Constructed with cosmic elements — Earth as chariot, Sun and Moon as wheels, Brahma as charioteer, and Mount Meru as bow." },
    iconography: {
        weapons: [ {name: "Bow made from Mount Meru"}, {name: "Arrow representing Brahmanic energy"} ],
        vehicle: "Chariot constructed by Vishwakarma using cosmic elements",
        pose: "Standing or seated on a chariot, holding a bow and single arrow",
        expression: "Majestic and focused, embodying supreme will and precision",
        aura: "Fiery yet composed, surrounded by flames or cosmic weapons"
    },
    significance: "This form represents Shiva's power to destroy complex and well-fortified negativity with a single, perfectly timed act of grace and power. It's a reminder that no evil is invincible.",
    relatedConcepts: ["Tripura", "Maya", "Ego", "Pashupatastra"],
    scriptural_references: [{name: "Shiva Purana"}, {name: "Linga Purana"}, {name: "Mahabharata"}],
    mantras: [{sanskrit: "ॐ त्रिपुरान्तकाय नमः।", transliteration: "Om Tripurāntakāya Namaḥ"}],
    theme: "Destruction of ignorance, ego, and illusion to attain liberation",
    related_forms: [{name:"Rudra"}, {name:"Mahadeva"}, {name:"Bhairava"}],
    cultural_significance: "Tripurantaka is celebrated in temples and rituals that symbolize victory of divine wisdom over demonic ignorance. It is a reminder of the inner war we must win to achieve moksha.",
    tags: ["Fierce Form", "Tripura", "Liberation", "Destruction", "Mythological Victory"],
    associated_legends: [{title: "Destruction of Tripura (Three Fortified Cities)", summary:"The three sons of the demon Tarakasura built three invincible flying cities and wreaked havoc. Shiva, on a divine chariot with a single arrow, destroyed all three cities when they aligned."}, {title: "Slaying of the Tripurasuras", summary:"The demons Tarakaksha, Kamalaksha, and Vidyunmali were the rulers of the three cities who were ultimately slain by Shiva's Pashupatastra arrow."}],
    qualities: ["Liberator of the soul", "Vanquisher of ignorance", "Supreme Archer"],
    aiHint: "shiva tripurantaka destroyer three cities cosmic archer",
    image: "https://unitywithinfinity.com/wp-content/uploads/2024/02/Tripurasura-asuras-of-the-three-cities.webp",
  },
  {
    id: "rupa_mrityunjaya",
    name: "Mrityunjaya",
    sanskrit_name: "मृत्युञ्जय",
    translation: "Conqueror of Death",
    title: "Conqueror of Death",
    category: "Iconic & Symbolic",
    description: "Mrityunjaya is the victorious form of Shiva who conquers death (Mrityu) and grants freedom from mortal limitations. He is invoked through the powerful Maha Mrityunjaya Mantra for healing, protection from untimely death, and spiritual awakening. As Mrityunjaya, Shiva transcends time and mortality, guiding the devotee beyond fear and into immortality and peace.",
    form_type: "Protective Form",
    attributes: [ "Healer of All Ills", "Granter of Longevity", "Liberator from the Cycle of Birth and Death" ],
    symbolism: { "Three-Eyed Form": "Vision into past, present, and future; mastery over time.", "Amrita (Nectar of Immortality)": "Symbolizes divine grace and eternal life.", "Maha Mrityunjaya Mantra": "A sacred vibrational formula for protection, rejuvenation, and moksha." },
    iconography: {
        weapons: [ {name:"Trishula (Trident)"}, {name:"Kamandalu (Water Pot of Life)"}, {name:"Deer (symbol of the restless mind)"}, {name:"Damaru (Drum of Creation)"} ],
        vehicle: "Nandi, the sacred bull",
        pose: "Seated in deep meditation or blessing posture",
        expression: "Serene and compassionate",
        aura: "Glowing, with a third eye radiating divine light and a healing presence"
    },
    significance: "Worshipping Shiva as Mrityunjaya is believed to grant protection from untimely death and severe illnesses. The Mahamrityunjaya Mantra is one of the most powerful healing mantras in Hinduism.",
    relatedConcepts: ["Mahamrityunjaya Mantra", "Healing", "Longevity", "Moksha"],
    scriptural_references: [{name: "Rigveda"}, {name: "Yajurveda"}, {name: "Shiva Purana"}, {name: "Mahabharata"}],
    mantras: [{sanskrit: "ॐ त्र्य॑म्बकं यजामहे सु॒गन्धिं॑ पुष्टि॒वर्ध॑नम् ।\nउ॒र्वा॒रु॒कमि॑व॒ बन्ध॑नान् मृ॒त्योर्मु॑क्षीय॒ माऽमृता॑॑त् ।।", transliteration: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam,\nUrvarukamiva Bandhanan Mrityor Mukshiya Maamritat", meaning: "We worship the Three-eyed One (Lord Shiva) Who is fragrant and Who nourishes all beings. May He liberate us from death for the sake of immortality, even as the cucumber is severed from its bondage (to the creeper)."}],
    theme: "Victory over death, spiritual longevity, healing, and liberation",
    related_forms: [{name: "Mahadeva"}, {name: "Tryambaka"}, {name: "Neelakantha"}],
    cultural_significance: "Mrityunjaya is worshipped across India and beyond for protection from sudden death, during serious illness, or in times of deep fear. Temples and rituals invoke this form especially through the chanting of the Maha Mrityunjaya Mantra during life-threatening conditions.",
    tags: ["Healer", "Immortality", "Deathless", "Protective Form", "Mantra Shakti", "Tryambaka"],
    associated_legends: [{title:"Saving Rishi Markandeya", summary:"Shiva appeared to save the young sage Markandeya from the clutches of Yama, the God of Death, granting him immortality."}, {title:"Origin in Vedas", summary:"The mantra is found in the Rigveda and Yajurveda, referring to Shiva as Tryambaka, the three-eyed one."}],
    qualities: ["Immortal", "Compassionate", "Supreme Protector"],
    aiHint: "shiva mrityunjaya conqueror death healing mantra protection",
    image: "https://bambinos.live/images/blog/1745588655m.jpg",
  },
  {
    id: "rupa_pashupati",
    name: "Pashupati",
    sanskrit_name: "पशुपति",
    translation: "Lord of All Beings",
    title: "Lord of All Beings",
    category: "Iconic & Symbolic",
    description: "Pashupati is one of the most ancient and foundational aspects of Shiva, worshipped as the supreme lord of all creatures (Pashu). In this form, Shiva is the compassionate master who governs and ultimately liberates all living beings from the bonds (Pasha) of ego, desire, and ignorance. Pashupati represents the soul's journey from bondage to ultimate freedom and spiritual realization.",
    form_type: "Cosmic Sovereign Form",
    attributes: [ "Master of Pashus (bound souls)", "Liberator from Pasha (bondage)", "Protector of all life forms" ],
    symbolism: { "Pashu (Animal/Bound Being)": "All living beings trapped in worldly illusion and karmic cycles.", "Pasha (Bond/Rope)": "Symbol of attachment, ego, and ignorance.", "Pati (Lord)": "The liberating master who severs the ties of bondage and grants moksha." },
    iconography: {
        weapons: [ {name: "Trishula (Trident)"}, {name: "Pasha (Noose)"}, {name: "Damaru (Drum of Creation)"} ],
        vehicle: "Nandi (The Bull), symbolizing dharma and strength",
        pose: "Seated in yogic posture or in lordly stance",
        expression: "Serene, all-knowing gaze",
        features: "Surrounded by animals or shown with a rope (pasha) in one hand, representing the control over beings"
    },
    significance: "This is one of Shiva's most ancient forms, revered in the Vedas and famously enshrined in the Pashupatinath Temple in Nepal. He is seen as the divine protector of all life.",
    relatedConcepts: ["Pasha (Bondage)", "Liberation (Moksha)", "Vedic Rudra", "Lord of Animals"],
    scriptural_references: [ {name:"Yajurveda"}, {name:"Shvetashvatara Upanishad"}, {name:"Mahabharata"}, {name:"Shiva Purana"}, {name:"Linga Purana"} ],
    mantras: [ {sanskrit:"ॐ नमः पशुपतये नमः।", transliteration:"Om Namah Pashupataye Namah"} ],
    theme: "Spiritual bondage and liberation, universal lordship, compassion for all beings",
    related_forms: [{name:"Mahadeva"}, {name:"Rudra"}, {name:"Tryambaka"}],
    cultural_significance: "Pashupati is deeply venerated in both Vedic and pre-Vedic cultures, with prominent worship in Nepal at the Pashupatinath Temple, a UNESCO World Heritage Site. This form signifies Shiva’s connection with nature, animals, and his role as the ultimate liberator of souls trapped in worldly existence.",
    tags: ["Liberator", "Compassionate", "Ancient Form", "Master of Souls", "Pashupatinath", "Vedic Shiva"],
    associated_legends: [
        {title: "Ancient worship in the Indus Valley Civilization", summary: "Seen in the famous Pashupati seal from Mohenjo-daro"},
        {title: "Mentioned in Yajurveda and Shvetashvatara Upanishad", summary: "Described as the divine master who liberates the soul"},
        {title: "Form central to many Shaivite traditions", summary: "Emphasizes liberation (Moksha)"}
    ],
    qualities: [ "Compassionate", "All-controlling", "Liberator", "Transcendental" ],
    aiHint: "shiva pashupati lord animals beings nepal temple",
    image: "https://i.pinimg.com/1200x/8c/12/09/8c12096742beb10c684b0bbaacc22514.jpg",
  },
  {
    id: "rupa_chandrashekhara",
    name: "Chandrashekhara",
    sanskrit_name: "चन्द्रशेखर",
    translation: "The Moon-Crowned Lord",
    title: "The Moon-Crowned Lord",
    category: "Iconic & Symbolic",
    description: "Chandrashekhara is the peaceful and majestic aspect of Lord Shiva who adorns the crescent moon (Chandra) on his jata (matted locks). This form symbolizes Shiva's dominion over the mind, emotions, and the ever-flowing cycles of time, which the moon governs in Hindu cosmology. The moon on Shiva’s head represents the waxing and waning of the mind and the stability one can achieve through spiritual mastery.",
    form_type: "Celestial-Adorned Form",
    attributes: [ "Wears the crescent moon on his head", "Master of time and emotion", "Embodiment of calm and clarity" ],
    symbolism: { "Crescent Moon": "Control over time and the mind; represents Soma (divine nectar) and immortality.", "Jata (Matted Locks)": "Ascetic power and connection with cosmic energies.", "Coolness of the Moon": "Soothing, nurturing presence of Shiva in the universe." },
    iconography: {
        weapons: [ {name:"Trishula (Trident)"}, {name:"Damaru (Drum)"} ],
        vehicle: "Nandi (The Bull), representing strength and dharma",
        pose: "Standing or seated in meditative calmness",
        expression: "Tranquil and luminous",
        features: "Crescent moon on top of the matted hair, third eye on forehead, snake around neck, serene expression"
    },
    significance: "The moon symbolizes the mind and the passage of time. By wearing it, Shiva shows that he is the master of both, and that a calm, controlled mind is the highest ornament for a yogi.",
    relatedConcepts: ["Soma", "Mind", "Time Cycles", "Yoga"],
    scriptural_references: [ {name:"Shiva Purana"}, {name:"Skanda Purana"}, {name:"Rudra Ashtadhyayi"}, {name: "Shri Chandrashekhara Ashtakam"} ],
    mantras: [ {sanskrit: "ॐ चन्द्रशेखराय नमः।", transliteration: "Om Chandrashekaraya Namah"} ],
    theme: "Mastery over mind, calming presence, eternal time",
    related_forms: [ {name:"Dakshinamurti"}, {name:"Mrityunjaya"}, {name:"Soma-sambhava"} ],
    cultural_significance: "Chandrashekhara is worshipped for peace of mind, emotional balance, and healing of mental ailments. The image of Shiva with the moon on his head is one of the most iconic forms, emphasizing his role as the cosmic yogi and eternal source of tranquility. The Chandrashekhara Ashtakam by Adi Shankaracharya is a popular hymn in devotion to this form.",
    tags: ["Tranquility", "Mind Mastery", "Moon Symbol", "Eternal Time", "Peaceful Form", "Healing"],
    associated_legends: [{title: "Saving the Moon God", summary: "When the moon was cursed by Daksha and began to wane, he sought refuge in Shiva. Shiva wore the moon on his head, granting him the power of rejuvenation and saving him from destruction."}, {title: "Mentioned in Puranas", summary: "Mentioned in various Puranas and hymns as the controller of time and the bringer of cool peace."}],
    qualities: ["Serene", "Wise", "Stable", "Graceful"],
    aiHint: "shiva crescent moon head chandrashekhara time control",
    image: "https://i.pinimg.com/1200x/55/1d/b4/551db4e6255fde030e362860c4c4edca.jpg",
  },
  {
    id: "rupa_vishwanatha",
    name: "Vishwanatha",
    sanskrit_name: "विश्वनाथ",
    translation: "Lord of the Universe",
    title: "Lord of the Universe",
    category: "Iconic & Symbolic",
    description: "Vishwanatha, meaning 'Lord of the Universe', is a majestic and all-encompassing form of Lord Shiva. Revered as the eternal guardian of Kashi (Varanasi), Vishwanatha is considered the supreme consciousness that governs all creation. He is believed to bestow liberation (moksha) upon those who depart the world in Kashi, whispering the sacred Taraka Mantra in their ears at the moment of death. This form symbolizes absolute authority over space, time, life, and death.",
    form_type: "Universal Ruler Form",
    attributes: [
      "Supreme Ruler of the Cosmos",
      "Presiding Deity of Kashi (Varanasi)",
      "Embodiment of liberation and divine sovereignty",
    ],
    symbolism: {
      "Universal Lordship": "He is the master of the entire cosmos — manifest and unmanifest.",
      "Kashi Connection": "Kashi is said to rest on Shiva's trishula and is untouched by worldly destruction.",
      "Moksha Bestower": "Liberator of souls from the cycle of birth and death.",
    },
    iconography: {
        weapons: [ { name: "Trishula (Trident)" }, { name: "Damaru (Drum)" } ],
        vehicle: "Nandi (The Bull), representing righteousness and unwavering devotion",
        pose: "Standing regally or seated in yogic stillness",
        expression: "Benevolent, majestic, all-knowing",
        features: "Adorned with sacred ash, matted locks, crescent moon, third eye, holds trident and damaru"
    },
    significance: "This form emphasizes Shiva's role as the ultimate sovereign of all creation. It is believed that dying in Kashi, under the grace of Vishwanatha, grants immediate liberation.",
    relatedConcepts: ["Kashi (Varanasi)", "Jyotirlinga", "Moksha", "Cosmic Sovereignty"],
    scriptural_references: [
      {name:"Kashi Khanda of the Skanda Purana"},
      {name:"Shiva Purana"},
      {name:"Linga Purana"},
      {name:"Mahabharata – Anushasana Parva"},
    ],
    mantras: [{sanskrit: "ॐ नमः शिवाय"}, {sanskrit: "ॐ श्री विश्वनाथाय नमः।", transliteration: "Om Shri Vishwanathaya Namah"}],
    theme: "Supreme Divinity, Sovereignty over the Universe, Liberation",
    related_forms: [ {name:"Mahadeva"}, {name:"Mrityunjaya"}, {name:"Tripurantaka"}, {name:"Kashi Vishwanath Jyotirlinga"} ],
    cultural_significance: "Vishwanatha is at the spiritual heart of Sanatan Dharma, especially in the sacred city of Varanasi — the spiritual capital of India. The Kashi Vishwanath Temple draws millions of devotees seeking blessings and liberation. This form of Shiva symbolizes divine kingship and moksha, making him central to rituals of life and death. He is the deity of final refuge and eternal truth.",
    tags: ["Universal Ruler", "Kashi", "Liberation", "Jyotirlinga", "Divine Majesty", "Spiritual Sovereignty"],
    associated_legends: [
      {title: "Founding of Kashi", summary: "It is said that Kashi was founded by Shiva himself and rests on the tip of his trishula, immune to cosmic dissolution (pralaya)."},
      {title: "Taraka Mantra", summary: "Devotees believe that Lord Vishwanatha personally grants moksha by uttering the Taraka Mantra to the soul at the time of death in Kashi."},
      {title: "Jyotirlinga", summary: "The Kashi Vishwanath temple is one of the twelve Jyotirlingas, marking his powerful presence."}
    ],
    qualities: [ "Majestic", "Compassionate", "Omnipresent", "Liberator" ],
    aiHint: "shiva vishwanatha kashi varanasi lord universe",
    image: "https://i.pinimg.com/1200x/35/09/82/350982ae4cc6c4e69b1e1c4fba3ebb66.jpg",
  }
];

// Function to get all Mahadev Rup forms
export const getAllMahadevRup = (): MahadevRup[] => {
  return mahadevRupData;
};

// Function to get a specific Mahadev Rup form by ID
export const getMahadevRupById = (id: string): MahadevRup | undefined => {
  // Normalize ID by removing potential prefixes for matching
  const cleanId = id.replace(/^rupa-/, '').replace(/^rupa_/, '');
  return mahadevRupData.find(rup => 
    rup.id.replace(/^rupa-/, '').replace(/^rupa_/, '') === cleanId
  );
};





