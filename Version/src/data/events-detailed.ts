
// src/data/events-detailed.ts

import type { StaticImageData } from 'next/image';

// --- Interface Definitions for Detailed Event Data ---

export interface KeyFigure {
  name: string;
  role: string;
  epithet?: string;
  ledBy?: string;
  form?: string;
}

export interface Symbolism {
  [key: string]: string | string[] | { [key: string]: string | string[] };
}

export interface TextualReference {
  text: string;
  sections?: string[];
  reference?: string;
  author?: string;
  details?: string;
}

export interface LocationAssociated {
  name?: string;
  type?: string; 
  location?: string; 
  description?: string; 
  place?: string;
  spiritual_context?: string;
  note?: string;
}

export interface ShivaAspect {
  name: string;
  meaning: string;
  description: string;
}

export interface Impact {
  cosmic: string;
  spiritual: string;
}

export interface FestivalAssociation {
  name?:string;
  festival?: string;
  significance?: string;
  connection?: string; 
  description?: string;
  region?: string;
}

export interface LearnMoreLink {
  title: string;
  url: string;
  label?: string;
}

export interface NarrativeStage {
    stage: string;
    details: string;
}

export interface DetailedEvent {
  id: string; // Derived from eventName for linking
  eventName: string;
  title: string;
  alternateNames?: string[];
  associatedDeity?: string; // For summary/filter
  deityInvolved?: string[]; // For detailed list
  description: string;
  keyFigures: KeyFigure[]; // Normalized from mainCharacters
  symbolism?: Symbolism;
  divineEmergences?: string[];
  textualReferences: TextualReference[];
  locationsAssociated: LocationAssociated[];
  shivaAspect?: ShivaAspect;
  impact?: Impact | string[];
  spiritualSignificance?: string; 
  artDepictions?: string[] | {form: string; examples: string[]}[];
  festivalAssociations: FestivalAssociation[];
  learnMoreLinks?: LearnMoreLink[];
  image?: string | StaticImageData;
  aiHint?: string;
  modernSignificance?: string;
  iconography?: { [key: string]: string | string[] | { [key:string]: string}[]};
  narrative?: NarrativeStage[];
  teachings?: string[];
}


// --- Detailed Event Data Array ---

const eventsDetailedData: Omit<DetailedEvent, 'id' | 'image' | 'aiHint'>[] = [
  // --- SAMUDRA MANTHAN DATA ---
  {
    eventName: "Samudra Manthan",
    title: "Churning of the Ocean",
    alternateNames: ["Ksheera Sagara Manthan", "Ocean of Milk Churning"],
    associatedDeity: "Shiva (Neelakantha)",
    deityInvolved: ["Shiva", "Vishnu", "Devas", "Asuras"],
    description: "Samudra Manthan, or the Churning of the Ocean, is a grand cosmic event described in various Hindu scriptures where the Devas (gods) and Asuras (demons) churned the Ksheera Sagara (Ocean of Milk) to obtain Amrita (nectar of immortality). During the intense churning, several divine objects and beings emerged, including the lethal poison Halahala, which threatened to destroy all of creation. Lord Shiva, in an act of supreme compassion, consumed the poison to protect the universe, holding it in his throat, which turned blue — earning him the name 'Neelakantha'.",
    keyFigures: [
      { name: "Shiva", role: "Consumed the Halahala poison to save the cosmos", epithet: "Neelakantha" },
      { name: "Vishnu", role: "Took the form of Kurma (tortoise) to support Mount Mandara", epithet: "Kurma Avatar" },
      { name: "Devas", role: "Churned the ocean to regain strength and immortality", ledBy: "Indra" },
      { name: "Asuras", role: "Assisted in churning in hopes of gaining immortality" },
      { name: "Mount Mandara", role: "Used as the churning rod" },
      { name: "Vasuki", role: "Serpent used as the churning rope" }
    ],
    symbolism: {
      poisonHalahala: "Represents toxic emotions and karmas released during spiritual transformation.",
      shivaDrinkingPoison: "Symbol of supreme sacrifice and mastery over death and ego.",
      churning: "Metaphor for the struggle between good and evil, leading to spiritual enlightenment."
    },
    divineEmergences: [
      "Kamadhenu (wish-fulfilling cow)",
      "Airavata (Indra's elephant)",
      "Kalpavriksha (divine tree)",
      "Apsaras (celestial maidens)",
      "Chandra (Moon)",
      "Lakshmi (Goddess of wealth)",
      "Dhanvantari (Divine physician with Amrita)",
      "Halahala (deadly poison)"
    ],
    textualReferences: [
      { text: "Bhagavata Purana", sections: ["Canto 8, Chapters 5–12"] },
      { text: "Vishnu Purana", sections: ["Book 1, Chapter 9"] },
      { text: "Mahabharata", sections: ["Adi Parva"] },
      { text: "Ramayana", sections: ["Balakanda, references in the story of Vishwamitra and others"] }
    ],
    locationsAssociated: [
      { name: "Mount Mandara", type: "Mythical mountain used as the churning rod" },
      { name: "Ksheera Sagara", type: "Cosmic Ocean of Milk" }
    ],
    shivaAspect: {
      name: "Neelakantha",
      meaning: "The Blue-Throated One",
      description: "When the deadly Halahala poison emerged, Lord Shiva selflessly drank it to protect the universe. He held it in his throat, turning it blue, symbolizing the act of containing negativity without letting it affect one's core essence."
    },
    impact: {
      cosmic: "Balance restored between Devas and Asuras through the emergence of Amrita.",
      spiritual: "Teaches self-sacrifice, detachment, and control over inner poison (anger, ego, etc.)."
    },
    artDepictions: [
      "Shiva seated with blue throat and calm expression, surrounded by Devas and Asuras",
      "Vishnu in Kurma form holding Mount Mandara",
      "Ocean churning scene with celestial beings emerging"
    ],
    festivalAssociations: [
      { name: "Maha Shivaratri", significance: "Shiva’s Neelakantha form is remembered as the savior of creation" }
    ],
    learnMoreLinks: [
      { title: "Bhagavata Purana - Samudra Manthan", url: "https://www.wisdomlib.org/hinduism/book/the-bhagavata-purana" },
      { title: "Neelakantha – The Blue Throated Shiva", url: "https://www.hindujagruti.org/hinduism/knowledge/article/what-is-neelkanth" }
    ]
  },
  // --- DAKSHA YAGNA DATA ---
  {
    eventName: "Daksha Yagna",
    title: "Daksha Yagna (Daksha's Sacrifice)",
    alternateNames: ["Daksha's Yajna", "Sati's Self-Immolation"],
    associatedDeity: "Shiva",
    deityInvolved: ["Shiva", "Sati", "Daksha Prajapati", "Vishnu", "Virabhadra", "Bhrigu"],
    description: "Daksha Yagna is one of the most pivotal events in Shaivite lore. Daksha Prajapati, one of the sons of Brahma and a powerful progenitor, organized a massive yagna (sacrifice) but deliberately did not invite his son-in-law Shiva due to his disapproval of Shiva's ascetic lifestyle. Despite Shiva's warnings, Sati, his consort and Daksha's daughter, insisted on attending the yagna. On arrival, she witnessed her husband being disrespected and was overwhelmed with sorrow and rage. Unable to bear the humiliation, she immolated herself in the sacrificial fire. Enraged by her death, Shiva created Virabhadra and Bhadrakali, who stormed the yagna and wreaked havoc. Daksha was beheaded, and the entire ceremony was destroyed. Later, on the request of other gods, Shiva forgave Daksha and restored him to life, replacing his head with that of a goat. This event marks the deep cosmic grief and wrath of Shiva and the power of love and respect in divine relationships.",
    keyFigures: [
      { name: "Lord Shiva", role: "Husband of Sati, disrespected by Daksha, destroys the yagna through Virabhadra" },
      { name: "Sati", role: "Daughter of Daksha, wife of Shiva, immolates herself due to the insult to Shiva" },
      { name: "Daksha Prajapati", role: "Organizer of the yagna, disrespects Shiva, later revived with a goat's head" },
      { name: "Virabhadra", role: "Ferocious form created from Shiva’s wrath to destroy the yagna" },
      { name: "Vishnu", role: "Tries to intervene and calm the situation during the destruction" }
    ],
    spiritualSignificance: "The Daksha Yagna signifies the importance of humility, devotion, and the dangers of ego. It also marks the beginning of Sati’s transformation into Parvati in her next birth and the renewed union with Shiva. It reflects the dynamics between worldly pride and divine love.",
    textualReferences: [
      { text: "Shiva Purana", sections: ["Rudra Samhita", "Sati Khand"] },
      { text: "Skanda Purana", sections: ["Kashi Khanda"] },
      { text: "Linga Purana", sections: ["Chapter 18-19"] }
    ],
    iconography: {
        virabhadraAppearance: "Fierce warrior with matted hair, holding weapons, blazing eyes of rage, created from a lock of Shiva’s hair",
        satiImmolating: "Sati, full of divine radiance, entering the yagna fire in defiance and anguish"
    },
    festivalAssociations: [
      { name: "Maha Shivaratri", connection: "Devotees recall Shiva’s grief and the great destruction" }
    ],
    modernSignificance: "Kankhal near Haridwar is believed to be the site of the original Daksha Yagna. The Daksha Mahadev Temple stands there today. The tale is often cited as a lesson in devotion, divine justice, and cosmic love.",
    locationsAssociated: [
      { name: "Daksha Mahadev Temple", location: "Kankhal, Haridwar, Uttarakhand, India" },
      { name: "Sati Kund", location: "Believed to be the site where Sati immolated herself" }
    ]
  },
  // --- TRIPURASURA SAMHARA DATA ---
  {
    eventName: "Tripurasura Samhara",
    title: "Destruction of the Three Cities",
    alternateNames: ["Tripura Dahana"],
    associatedDeity: "Shiva (Tripurantaka)",
    deityInvolved: ["Shiva", "Tarakaksha", "Vidyunmali", "Kamalaksha", "Vishnu", "Brahma", "Devas"],
    description: "Tripurasura Samhara is a grand cosmic event where Lord Shiva, as Tripurantaka, destroys the three flying, invincible cities known as Tripura, built by the sons of the demon Tarakasura. These cities posed a great threat to the Devas and the cosmic order. The act symbolizes the destruction of ego, illusion (maya), and worldly desires.",
    keyFigures: [
      { name: "Shiva", role: "Destroyer of the three cities", epithet: "Tripurantaka" },
      { name: "Tarakaksha, Kamalaksha, Vidyunmali", role: "The three Asura sons of Tarakasura who built Tripura" },
      { name: "Vishnu", role: "Became the arrow used by Shiva" },
      { name: "Brahma", role: "Acted as the charioteer for Shiva's cosmic chariot" }
    ],
    symbolism: {
      "Tripura": "The three cities representing body, mind, and intellect or the three impurities (anava, karma, maya).",
      "Single arrow": "Oneness of supreme knowledge and power.",
      "Divine Chariot": "The convergence of all cosmic forces to support Dharma."
    },
    textualReferences: [
      { text: "Shiva Purana", sections: ["Rudra Samhita - Yuddha Khand"] },
      { text: "Mahabharata", sections: ["Shanti Parva, Chapter 339"] },
      { text: "Skanda Purana", sections: ["Kashi Khanda"] }
    ],
    locationsAssociated: [
      { name: "Tripura", type: "Three mythical flying cities of gold, silver, and iron" }
    ],
    shivaAspect: {
      name: "Tripurantaka",
      meaning: "Destroyer of the Three Cities",
      description: "In this form, Shiva wields a cosmic bow and arrow, embodying the focused will required to annihilate deep-rooted ignorance and negativity with a single, precise act."
    },
    spiritualSignificance: "This event signifies the inner victory over the threefold bonds of ego, karma, and maya that keep the soul in bondage. Shiva’s calm yet decisive act shows the triumph of divine will over ignorance and arrogance.",
    artDepictions: [
      "Shiva as Tripurantaka riding a divine chariot, drawing his bow.",
      "The three cities aligning before being consumed by fire.",
      "Gods forming different parts of Shiva's divine war equipment."
    ],
    festivalAssociations: [
      { name: "Tripurari Purnima", significance: "Celebrated on Kartik Purnima, marking Shiva's victory over Tripura." }
    ],
    learnMoreLinks: [
      { title: "Tripurasura Samhara - Shiva Purana Summary", url: "https://www.wisdomlib.org/hinduism/book/shiva-purana-english" },
      { title: "Tripurantaka Form of Shiva", url: "https://www.hindupedia.com/en/Tripurantaka" }
    ]
  },
  // --- GANGA AVATARANA ---
  {
    eventName: "Ganga Avatarana",
    title: "Descent of the Ganges",
    alternateNames: ["Bhagirathi Ganga Avataran"],
    associatedDeity: "Shiva (Gangadhara)",
    deityInvolved: ["Shiva", "Ganga", "Bhagiratha"],
    description: "Ganga Avatarana marks the descent of the celestial river Ganga from the heavens to Earth. This divine intervention was orchestrated by King Bhagiratha's severe penance to purify the ashes of his ancestors. The immense force of Ganga's descent was so powerful it could have shattered the Earth, so Lord Shiva compassionately agreed to channel her flow by capturing her in his matted locks, allowing her to flow gently across the Earth.",
    keyFigures: [
        { name: "Shiva", role: "Received Ganga in his matted locks", epithet: "Gangadhara" },
        { name: "Ganga", role: "The celestial river who descended to Earth" },
        { name: "Bhagiratha", role: "The king whose penance brought Ganga to Earth" },
        { name: "King Sagara's Sons", role: "Ancestors whose souls were liberated by Ganga" }
    ],
    shivaAspect: {
        name: "Gangadhara",
        meaning: "The Bearer of Ganga",
        description: "Shiva as Gangadhara is the supreme controller of cosmic forces. By containing the mighty Ganga in his matted locks, he demonstrates his immense power, compassion, and his role as a divine facilitator who bridges the celestial and terrestrial realms."
    },
    narrative: [
        { stage: "Background", details: "King Sagara's 60,000 sons were burnt to ashes by Sage Kapila's gaze. Their souls could only be liberated by the purifying waters of the celestial river Ganga." },
        { stage: "Bhagiratha’s Penance", details: "Bhagiratha, a descendant of Sagara, undertook a rigorous penance to please Brahma and Ganga. Ganga agreed to descend but warned her force would destroy the Earth." },
        { stage: "Shiva's Intervention", details: "Bhagiratha then prayed to Shiva, who compassionately agreed to receive Ganga. As she descended, Shiva captured her in his matted locks, breaking her fall and releasing her gently." },
        { stage: "Liberation", details: "Ganga followed Bhagiratha to the spot where his ancestors' ashes lay. Upon flowing over them, their souls were purified and attained moksha." }
    ],
    symbolism: {
        Ganga: "Represents purity, compassion, and liberating knowledge.",
        ShivaAsGangadhara: "Symbolizes mastery over powerful natural and emotional forces.",
        Bhagiratha: "Represents unwavering devotion and righteous effort (tapasya)."
    },
    textualReferences: [
        { text: "Ramayana", sections: ["Balakanda"] },
        { text: "Mahabharata", sections: ["Anushasana Parva"] },
        { text: "Shiva Purana", sections: ["Vidyeshwara Samhita"] }
    ],
    locationsAssociated: [
      { name: "Gangotri", place: "Gangotri", description: "Source of the river Ganga in the Himalayas." },
      { name: "Ganga Sagar", place: "Ganga Sagar", description: "Where Ganga meets the ocean, marking the endpoint of Bhagiratha’s journey." },
      { name: "Triveni Sangam", place: "Prayagraj", description: "The confluence of Ganga, Yamuna, and Saraswati." }
    ],
    festivalAssociations: [
        { name: "Ganga Dussehra", description: "Celebrates the descent of Ganga to Earth, observed on the tenth day of the waxing moon in Jyeshtha." },
        { name: "Kumbh Mela", description: "A massive spiritual gathering held at Triveni Sangam, associated with Ganga’s purifying powers." }
    ],
    artDepictions: [
        "Sculptures at Mahabalipuram showing Ganga descending into Shiva’s locks.",
        "Pahari and Mughal paintings depicting Bhagiratha praying and Shiva catching Ganga."
    ],
    spiritualSignificance: "The power of tapasya (penance) and dharma-driven action. Divine grace flows in response to selfless devotion. Shiva’s compassion and willingness to bear burdens for the welfare of the world."
  },
    // --- MARKANDEYA VIJAYA ---
  {
    eventName: "Markandeya Vijaya",
    title: "Markandeya's Conquest over Death",
    alternateNames: ["Kalantaka Leela", "Mrityunjaya Lilā"],
    associatedDeity: "Shiva (Kalantaka)",
    deityInvolved: ["Shiva", "Markandeya", "Yama"],
    description: "The story of Markandeya is one of intense devotion and divine grace, where Shiva saves his young devotee from Yama, the God of Death, thereby conquering death itself.",
    keyFigures: [
        { name: "Shiva", role: "Defeated Yama to save his devotee", epithet: "Kalantaka / Mrityunjaya" },
        { name: "Markandeya", role: "The young sage destined to die at sixteen, saved by devotion" },
        { name: "Yama", role: "The God of Death, who was defeated by Shiva" },
        { name: "Rishi Mrikandu", role: "Father of Markandeya" }
    ],
    shivaAspect: {
        name: "Kalantaka",
        meaning: "The Ender of Death/Time",
        description: "In this fierce form, Shiva emerges from the Lingam to protect his devotee. He embodies the principle that devotion can overcome even fate and mortality, establishing him as Mrityunjaya, the conqueror of death."
    },
    narrative: [
        { stage: "The Boon and the Curse", details: "Rishi Mrikandu was granted a son, Markandeya, who was blessed with brilliance but destined to live only for sixteen years." },
        { stage: "Unwavering Devotion", details: "As he neared his sixteenth year, Markandeya engaged in intense worship of a Shiva Lingam, constantly chanting the Mahamrityunjaya Mantra." },
        { stage: "Confrontation with Yama", details: "On the destined day, Yama arrived to take Markandeya's soul. Terrified, Markandeya clung to the Shiva Lingam." },
        { stage: "Shiva's Intervention", details: "When Yama cast his noose, it looped around the Lingam as well. Enraged, Shiva burst forth from the Lingam, struck Yama, and subdued him." },
        { stage: "The Blessing of Immortality", details: "Pleased with his devotion, Shiva revived Yama but blessed Markandeya with eternal youth and immortality, making him a Chiranjivi." }
    ],
    symbolism: {
        ConquestOverDeath: "Devotion to Shiva transcends the fear and finality of death.",
        PowerOfBhakti: "Sincere devotion can alter destiny and attract divine grace.",
        MrityunjayaMantra: "A powerful tool for healing, protection, and overcoming mortality."
    },
    textualReferences: [
        { text: "Shiva Purana", sections: ["Rudra Samhita"] },
        { text: "Skanda Purana" },
        { text: "Markandeya Purana" }
    ],
    locationsAssociated: [
        { name: "Amritaghateswarar-Abirami Temple", location: "Thirukkadaiyur, Tamil Nadu", description: "Believed to be the primary site where this event occurred." }
    ],
    festivalAssociations: [
        { name: "Maha Shivaratri", description: "Devotees chant the Mahamrityunjaya Mantra, celebrating Shiva's victory over death." },
        { name: "Karthika Month", description: "Special pujas for longevity are performed in temples dedicated to this event." }
    ],
    spiritualSignificance: "This tale is a cornerstone of Shaivism, establishing Shiva as the ultimate protector and Mrityunjaya. It provides hope and strength to devotees facing fear, illness, and mortality.",
    learnMoreLinks: [
      { title: "The Story of Markandeya", url: "https://www.wisdomlib.org/hinduism/book/the-shiva-purana/d/doc365671.html" }
    ]
  },
  // --- ARDHANARISHVARA MANIFESTATION ---
  {
    eventName: "Ardhanarishvara Manifestation",
    title: "Ardhanarishvara Manifestation",
    alternateNames: ["Ardhanari Form", "Ardhanareeswara"],
    associatedDeity: "Shiva (as Ardhanarishvara)",
    deityInvolved: ["Shiva", "Parvati"],
    description: "Ardhanarishvara is a composite form of Shiva and Parvati fused into one body, half male and half female, depicting the inseparable nature of the divine masculine and feminine. It symbolizes cosmic balance and the synthesis of all dualities.",
    keyFigures: [
        { name: "Shiva", role: "The right (male) half, representing consciousness (Purusha)" },
        { name: "Parvati", role: "The left (female) half, representing energy (Prakriti)" }
    ],
    narrative: [
        { stage: "The Wish for Unity", details: "As the cosmic dance of creation continued, Parvati desired complete unity with Shiva—not just in spirit, but in form. Moved by her deep devotion and love, Shiva granted her wish." },
        { stage: "The Manifestation", details: "Shiva manifested as Ardhanarishvara, with the right half of the body as male and the left as female. This awed the sages and devas, revealing that the source of creation is the perfect fusion of both energies." }
    ],
    symbolism: {
        themes: [
            "Union of Purusha (consciousness) and Prakriti (nature)",
            "Gender balance and harmony",
            "Non-duality and cosmic integration",
            "Wholeness of existence through duality"
        ]
    },
    textualReferences: [
        { text: "Shiva Purana", sections: ["Rudra Samhita"] },
        { text: "Skanda Purana" },
        { text: "Linga Purana" }
    ],
    locationsAssociated: [
        { name: "Ardhanareeswarar Temple", location: "Tiruchengode, Tamil Nadu", description: "Dedicated to this form of Shiva." },
        { name: "Ellora Caves", location: "Maharashtra", description: "Famous rock-cut sculpture of Ardhanarishvara." }
    ],
    festivalAssociations: [
        { festival: "Maha Shivaratri", description: "Worship of Shiva-Shakti as one is central." },
        { festival: "Navaratri", description: "Celebrates the divine feminine, often culminating in honoring the union with Shiva." }
    ],
    spiritualSignificance: "This sacred form teaches that all life arises from balance and mutual respect. It transcends human gender roles and social norms, showing that both aspects—masculine and feminine—exist within every being. Recognizing and honoring both leads to inner harmony and spiritual wholeness.",
    learnMoreLinks: [
      { title: "Ardhanarishvara – Symbolism and Meaning", url: "https://en.wikipedia.org/wiki/Ardhanarishvara" }
    ]
  },
   // --- Ananda Tandava ---
  {
    eventName: "Ananda Tandava (Cosmic Dance of Bliss)",
    title: "Ananda Tandava – The Cosmic Dance of Bliss",
    alternateNames: ["Nataraja Dance"],
    associatedDeity: "Shiva (as Nataraja)",
    deityInvolved: ["Shiva", "Apasmara", "Parvati"],
    description: "Shiva, in his divine form as Nataraja (the Lord of Dance), performs the Ananda Tandava in the sacred space of Chidambaram. This cosmic dance symbolizes the dynamic balance of the universe — creation, preservation, destruction, illusion, and liberation. Each gesture and movement of Shiva during the Tandava carries profound metaphysical meanings, portraying the eternal rhythm of existence.",
    keyFigures: [
        { name: "Shiva as Nataraja", role: "The Cosmic Dancer" },
        { name: "Parvati", role: "As Sivakamasundari, witnessing the dance" },
        { name: "Apasmara", role: "The dwarf demon of ignorance, crushed under Shiva's foot" },
        { name: "Patanjali and Vyaghrapada", role: "Sages who witnessed the dance" }
    ],
    symbolism: {
        damaru: "Creation – the primal sound of AUM (ॐ)",
        agni: "Destruction – the end of illusion and ignorance",
        abhaya_mudra: "Protection and reassurance to devotees",
        raised_foot: "Liberation – the path to moksha",
        apasmara: "Ignorance being crushed under cosmic wisdom",
        circle_of_fire: "Samsara – the endless cycle of birth, death, and rebirth"
    },
    textualReferences: [
        { text: "Ananda Tandava Stotra" },
        { text: "Shiva Purana" },
        { text: "Chidambara Mahatmyam" },
        { text: "Tevaram Hymns by Nayanmars" }
    ],
    locationsAssociated: [
      { place: "Chidambaram Temple (Kanaka Sabha)", location: "Tamil Nadu", spiritual_context: "Represents Akasha (ether), the space of consciousness where the dance occurs." }
    ],
    festivalAssociations: [
        { festival: "Natyanjali Festival", description: "Annual dance offering at Chidambaram." },
        { festival: "Arudra Darshan", description: "Celebrated in Margazhi month (Dec/Jan)." },
        { festival: "Maha Shivaratri", description: "Celebrated with Tandava themes." }
    ],
    teachings: [
        "The universe is a divine play (Lila) of dynamic forces.",
        "True freedom lies in rising above ignorance and illusion.",
        "Creation and destruction are part of the same divine cycle.",
        "Through discipline and surrender, one can attune to the cosmic rhythm."
    ]
  },
  // --- Killing of Andhaka ---
  {
    eventName: "Killing of Andhaka",
    title: "Destruction of Demon Andhaka",
    deityInvolved: ["Shiva", "Parvati", "Andhaka"],
    description: "This event describes the slaying of the demon Andhaka by Lord Shiva after Andhaka attempts to forcefully possess Parvati. Blinded by arrogance and desire, Andhaka invoked his own doom. Shiva fought a fierce battle and ultimately impaled Andhaka on his trident. In his dying moments, Andhaka repented and was blessed with liberation, symbolizing the purification of ignorance through divine intervention.",
    keyFigures: [
        { name: "Shiva", role: "Destroyer of ego and protector of dharma", epithet: "Andhakasura Samhara Murti" },
        { name: "Parvati", role: "Represents divine Shakti and purity" },
        { name: "Andhaka", role: "Demon king symbolizing spiritual blindness and lust" }
    ],
    symbolism: {
        victoryOverDarkness: "Triumph of divine knowledge over ignorance (Andhaka means 'the blind one').",
        purification: "The battle represents the inner struggle to overcome ego and desire.",
        redemption: "Andhaka's eventual liberation shows Shiva's compassion even for his enemies."
    },
    textualReferences: [
        { text: "Shiva Purana", details: "Andhaka Samhita – Describes the full battle between Shiva and Andhaka." },
        { text: "Linga Purana", details: "Mentions Andhaka's lineage and the cosmic reason behind his slaying." },
        { text: "Skanda Purana", details: "Narrates the repentance and transformation of Andhaka into a Shiva gana." }
    ],
    locationsAssociated: [
        { name: "Mount Kailash", description: "The primary battleground for this cosmic conflict." },
        { name: "Andhakeshwara Temple", location: "Warangal, Telangana", description: "A temple dedicated to this fierce form of Shiva." }
    ],
    shivaAspect: {
      name: "Andhakasura Samhara Murti",
      meaning: "The one who destroyed the demon Andhaka",
      description: "A fierce, warrior form of Shiva that demonstrates his power to annihilate adharma and protect divine order."
    },
    festivalAssociations: [
        { name: "Maha Shivaratri", description: "The fierce, protective aspects of Shiva are honored." }
    ],
    teachings: [
      "Lust and ego blind even the mighty, leading to destruction.",
      "True surrender, even at the moment of death, is accepted by the Divine.",
      "The feminine divine (Parvati) must always be honored and protected as Shakti.",
      "The destruction of inner darkness (Andhaka = 'blind one') is the role of Shiva."
    ]
  },
  {
    eventName: "Birth of Karthikeya",
    title: "Birth of Karthikeya (Skanda)",
    deityInvolved: ["Shiva", "Parvati", "Karthikeya", "Agni", "Ganga", "Krittikas", "Tarakasura"],
    description: "The miraculous birth of Karthikeya from the divine sparks of Shiva to destroy the powerful demon Tarakasura, who could only be killed by Shiva's son.",
    keyFigures: [
        { name: "Shiva", role: "Father of Karthikeya" },
        { name: "Parvati", role: "Mother of Karthikeya" },
        { name: "Karthikeya", role: "Divine warrior son", epithet: "Skanda" },
        { name: "Tarakasura", role: "The demon who needed to be vanquished" }
    ],
    narrative: [
        { stage: "Boon of Tarakasura", details: "The demon Tarakasura obtained a boon that he could only be killed by a son of Shiva." },
        { stage: "Divine Union", details: "The gods orchestrated the divine marriage of Shiva and Parvati." },
        { stage: "Birth of Karthikeya", details: "The fiery seed of Shiva was carried by Agni and Ganga, finally manifesting as six babies in the Saravana forest, who were then unified into one by Parvati." },
        { stage: "Slaying of Tarakasura", details: "Karthikeya grew into a powerful warrior, led the divine army, and defeated Tarakasura, restoring peace." }
    ],
    symbolism: {
        divineChild: "The birth represents divine intervention for restoring dharma.",
        sixHeads: "Symbolizes mastery over the six senses and all-seeing wisdom.",
        velSpear: "Represents the power of knowledge and focus to destroy ignorance."
    },
    textualReferences: [
        { text: "Skanda Purana" },
        { text: "Shiva Purana" },
        { text: "Mahabharata" }
    ],
    locationsAssociated: [
        { name: "Saravana Lake", description: "The mythical lake where Karthikeya was born." },
        { name: "Palani Hills", location: "Tamil Nadu", description: "A major pilgrimage site for Lord Murugan (Karthikeya)." }
    ],
    festivalAssociations: [
        { name: "Skanda Shashti" },
        { name: "Thaipusam" }
    ],
    teachings: [
        "Righteousness (dharma) is protected by divine intervention.",
        "Harmony of male and female divine forces is essential for creation.",
        "Nurturing aspects of nature play a role in divine plans.",
        "Courage is needed to confront and defeat inner and outer demons."
    ],
    spiritualSignificance: "Represents the victory of righteousness over evil and the importance of divine grace and leadership in spiritual warfare."
  },
  {
    eventName: "Burning of Kamadeva",
    title: "The Incineration of Desire",
    deityInvolved: ["Shiva", "Kamadeva", "Parvati", "Rati", "Indra"],
    description: "Kamadeva, the god of love, was sent by the Devas to awaken Shiva’s desire so that he may unite with Parvati and beget a powerful son who could defeat the demon Tarakasura. As Kamadeva disturbed Shiva’s deep meditation, Shiva opened his third eye in fury and incinerated Kamadeva instantly into ashes. Later, moved by the pleas of Rati (Kamadeva’s wife) and understanding the divine necessity of the act, Shiva granted Kamadeva a formless, subtle existence.",
    keyFigures: [
      { name: "Shiva", role: "The ascetic who transcends desire" },
      { name: "Kamadeva", role: "God of Love" },
      { name: "Parvati", role: "Performs penance to win Shiva's love through devotion" },
      { name: "Rati", role: "Kamadeva's consort" },
    ],
    symbolism: {
      fire_of_third_eye: "Represents supreme wisdom and the destruction of ego and desire",
      formlessness_of_kama: "Symbolizes transcendence of sensual desire into divine will",
      divine_love: "Teaches the path from physical longing to spiritual union"
    },
    teachings: [
      "Mastery over desire is essential for spiritual growth.",
      "Divine will transcends worldly temptations.",
      "Love, when purified, leads to higher purpose and dharma.",
      "The power of tapas (austerity) is immense, but can be disturbed by distractions."
    ],
    textualReferences: [
      { text: "Shiva Purana" },
      { text: "Skanda Purana" },
      { text: "Kalika Purana" }
    ],
    locationsAssociated: [
      { name: "Mount Kailash", description: "The abode of Shiva where the event took place" }
    ],
    festivalAssociations: [
      { festival: "Kamadahana", description: "Celebrated in South India to commemorate the burning of Kamadeva; people burn effigies as a ritual" }
    ],
    impact: [
      "Leads to the birth of Kartikeya (Skanda), the warrior son of Shiva",
      "Reinforces Shiva’s title as Yogeshwara — the master of yogic detachment",
      "Marks the turning point in the love story of Shiva and Parvati"
    ]
  },
  {
    eventName: "Appearance as Bhikshatana",
    title: "Shiva as Bhikshatana – The Naked Mendicant",
    deityInvolved: ["Shiva", "Parvati", "Sages of Daruka forest"],
    description: "In the Daruka forest, a group of arrogant sages were proud of their rituals and spiritual knowledge, believing themselves to be supreme. To humble them and awaken true wisdom, Shiva took the form of Bhikshatana — a nude, wandering ascetic with unmatched beauty, carrying a begging bowl made from a human skull. His form mesmerized the sages' wives, drawing their devotion and breaking the sages’ arrogance. Shiva, accompanied by Parvati, revealed that true renunciation is not about outer rituals but inner detachment and humility.",
    keyFigures: [
      { name: "Shiva", role: "The naked mendicant who challenges dogma" },
      { name: "Sages of Daruka forest", role: "Represent pride in ritualism" },
      { name: "Wives of the Sages", role: "Represent pure devotion that sees beyond form" },
    ],
    symbolism: {
      nudity: "Symbol of complete renunciation and freedom from societal constructs",
      begging_bowl: "Emblem of detachment and the rejection of materialism",
      enchantment_of_sages_wives: "Illustrates that pride in spiritual knowledge is still bondage if ego remains"
    },
    teachings: [
      "True spirituality transcends external rituals and dogmas.",
      "Ego is the greatest obstacle on the path of liberation.",
      "Humility is essential for receiving divine grace.",
      "Divine plays (leelas) often break norms to convey deeper truths."
    ],
    textualReferences: [
      { text: "Shiva Purana", details: "Rudra Samhita" },
      { text: "Linga Purana" },
      { text: "Tevaram hymns (Tamil Shaiva literature)" }
    ],
    locationsAssociated: [
      { name: "Daruka Forest", description: "Mythical forest where the event took place." },
      { name: "Thiruvetkalam Temple", location: "Chidambaram, Tamil Nadu", description: "Dedicated to Shiva’s Bhikshatana form."}
    ],
    festivalAssociations: [
      { name: "Bhikshatana Utsavam", description: "Celebrated in select Shaiva temples where the Bhikshatana form of Shiva is taken out in processions." }
    ],
    impact: [
      "Destroyed the pride of learned sages",
      "Taught the supremacy of inner realization over external ritualism",
      "Established the form of Shiva as the wandering divine ascetic",
      "Reinforced the idea that divinity is beyond societal norms"
    ]
  },
  {
    eventName: "Establishment of Jyotirlingas",
    title: "Manifestation of the Twelve Jyotirlingas",
    alternateNames: ["Jyotirlinga Manifestation"],
    deityInvolved: ["Shiva", "Brahma", "Vishnu"],
    description: "In a divine event signifying Shiva's eternal supremacy, twelve sacred Jyotirlingas were established across India. This was triggered when Brahma and Vishnu debated their superiority. Shiva appeared as an infinite column of light (Jyoti) that pierced all realms, which neither could find the end of. Humbled, they recognized Shiva's infinite nature. The places where this light manifested became Jyotirlingas, radiant symbols of his formless divinity.",
    keyFigures: [
      { name: "Shiva", role: "Appeared as an infinite column of light (Jyotirlinga)" },
      { name: "Vishnu", role: "Traveled downwards to find the end of the light" },
      { name: "Brahma", role: "Traveled upwards to find the beginning of the light" }
    ],
    symbolism: {
        themes: [
            "Symbol of the formless, infinite, self-luminous reality (Paramashiva)",
            "Each of the twelve lingas represents a unique aspect of Shiva's cosmic presence",
            "Transcendence beyond form, ego, time, and direction"
        ]
    },
    teachings: [
      "God is beyond form, name, and material dimensions.",
      "True realization comes from humility and surrender.",
      "Divinity manifests differently in different places, but is ultimately One.",
      "Pilgrimage to Jyotirlingas symbolizes an inward spiritual journey to realize the Light within."
    ],
    textualReferences: [
      { text: "Shiva Purana", details: "Kotirudra Samhita" },
      { text: "Linga Purana" },
      { text: "Skanda Purana" }
    ],
    locationsAssociated: [
      { name: "Somnath", location: "Gujarat" },
      { name: "Mallikarjuna", location: "Andhra Pradesh" },
      { name: "Mahakaleshwar", location: "Madhya Pradesh" },
      { name: "Omkareshwar", location: "Madhya Pradesh" },
      { name: "Kedarnath", location: "Uttarakhand" },
      { name: "Bhimashankar", location: "Maharashtra" },
      { name: "Kashi Vishwanath", location: "Uttar Pradesh" },
      { name: "Trimbakeshwar", location: "Maharashtra" },
      { name: "Vaidyanath", location: "Jharkhand" },
      { name: "Nageshwar", location: "Gujarat" },
      { name: "Rameshwaram", location: "Tamil Nadu" },
      { name: "Grishneshwar", location: "Maharashtra" }
    ],
    festivalAssociations: [
      { festival: "Maha Shivaratri", region: "All Jyotirlinga sites", description: "Grand celebration of Shiva’s divine presence; devotees offer night-long prayers." },
      { festival: "Shravan Maas", region: "India", description: "Peak pilgrimage season for visiting Jyotirlingas." }
    ],
    impact: [
      "Established Shiva’s supremacy and infinite nature",
      "Created sacred pilgrimage sites across the Indian subcontinent",
      "Unified diverse regional traditions into one spiritual geography"
    ],
    learnMoreLinks: [
      { label: "Dvadasha Jyotirlinga Stotra", url: "https://www.wisdomlib.org/hinduism/book/shiva-purana-english/d/doc245535.html" }
    ]
  },
  {
    eventName: "Shiva’s Marriage with Parvati",
    title: "The Divine Marriage of Shiva and Parvati",
    alternateNames: ["Shiv-Parvati Vivah"],
    deityInvolved: ["Shiva", "Parvati", "Himalaya", "Menavati", "Narada", "Vishnu", "Brahma"],
    description: "The celestial wedding of Lord Shiva and Goddess Parvati is a sacred union symbolizing the merging of pure consciousness with divine energy (Shakti). After Parvati's intense tapas (austerity) and devotion, Shiva accepted her as his consort, marking the beginning of their eternal companionship.",
    keyFigures: [
        { name: "Shiva", role: "The divine groom, representing consciousness" },
        { name: "Parvati", role: "The divine bride, representing devotion and energy" },
        { name: "Vishnu", role: "Presiding deity and Parvati's symbolic brother" },
        { name: "Brahma", role: "The divine priest for the wedding" }
    ],
    narrative: [
        { stage: "Parvati's Penance", details: "Parvati performs severe tapasya to win Shiva’s heart and prove her devotion." },
        { stage: "Shiva's Test", details: "Shiva tests Parvati's resolve in various disguised forms before accepting her love." },
        { stage: "The Unconventional Groom", details: "Shiva arrives for the wedding with a wild entourage of ganas, ghosts, and sages, shocking Parvati's family." },
        { stage: "Divine Union", details: "Shiva reveals his majestic form, and the celestial wedding is solemnized, restoring cosmic balance and joy." }
    ],
    symbolism: {
        themes: [
            "Union of consciousness (Shiva) and Shakti (energy)",
            "Harmony of asceticism and worldly duties",
            "Divine love transcending appearances",
        ]
    },
    textualReferences: [
        { text: "Shiva Purana", details: "Rudra Samhita" },
        { text: "Skanda Purana" },
        { text: "Linga Purana" },
        { text: "Kalika Purana" }
    ],
    locationsAssociated: [
        { name: "Triyuginarayan Temple", location: "Uttarakhand", description: "Believed to be the site of the divine wedding, with an eternal flame." },
        { name: "Mount Kailash", description: "The divine abode where Shiva and Parvati reside after their marriage." }
    ],
    festivalAssociations: [
        { name: "Maha Shivaratri", description: "Celebrates the divine marriage of Shiva and Parvati." },
        { name: "Teej", description: "A festival where women pray for marital bliss, inspired by Parvati's devotion." }
    ],
    teachings: [
        "True devotion and penance are always rewarded.",
        "Divine love transcends physical appearances and societal norms.",
        "The balance of asceticism and household life is essential for cosmic harmony."
    ],
    spiritualSignificance: "This union is fundamental to Shaivism and Shaktism, representing the non-dual reality where consciousness and energy are inseparable. It forms the basis for the divine family, including their sons Ganesha and Kartikeya."
  },
  {
    eventName: "Kiratarjuniya (Shiva Tests Arjuna)",
    title: "Kiratarjuniya (Shiva Tests Arjuna)",
    description: "In order to obtain divine weapons for the upcoming Mahabharata war, Arjuna performs severe penance in the forest to please Lord Shiva. To test his valor and devotion, Shiva disguises himself as a Kirata (tribal hunter). A fierce duel ensues between Arjuna and the Kirata over a wild boar. Impressed by Arjuna's determination and humility, Shiva reveals his true form and blesses him with the mighty Pashupatastra.",
    deityInvolved: ["Shiva (as Kirata)", "Arjuna", "Parvati"],
    keyFigures: [
        { name: "Shiva", role: "Disguised as Kirata (hunter)", form: "Kirata" },
        { name: "Arjuna", role: "Pandava prince performing penance" },
        { name: "Mukut", role: "Demon disguised as a boar" }
    ],
    narrative: [
        { stage: "Penance", details: "Arjuna performs intense tapas to gain powerful weapons for the war." },
        { stage: "The Dispute", details: "A wild boar (demon Mukut) attacks Arjuna. Both he and a Kirata (Shiva) shoot it simultaneously, leading to a dispute over the kill." },
        { stage: "The Duel", details: "Arjuna, proud of his skills, battles the Kirata. Despite his prowess, he is matched and eventually exhausted by the mysterious hunter." },
        { stage: "The Revelation", details: "Humbled, Arjuna worships a Shiva Lingam, and his offerings appear on the Kirata. He realizes the hunter is Shiva and surrenders." },
        { stage: "The Boon", details: "Pleased with his valor and devotion, Shiva grants Arjuna the divine Pashupatastra weapon." }
    ],
    symbolism: {
        "The Test": "Divine trials are meant to purify ego and strengthen resolve.",
        "The Duel": "Represents the inner battle between ego and surrender.",
        "Pashupatastra": "Symbolizes divine grace and power bestowed upon a worthy seeker."
    },
    textualReferences: [
        { text: "Mahabharata", details: "Vana Parva" },
        { text: "Shiva Purana" },
        { text: "Kiratarjuniya by Bharavi", details: "A famous Sanskrit epic poem detailing this event." }
    ],
    locationsAssociated: [
        { name: "Indrakila Mountain", description: "The site of Arjuna's penance (location debated)." }
    ],
    festivalAssociations: [
        { festival: "Maha Shivaratri", description: "Shiva's grace upon devotees is remembered." }
    ],
    teachings: [
        "True devotion requires humility and surrender.",
        "Tests by the divine are meant to strengthen, not punish.",
        "Victory comes from a combination of effort (tapas), courage, and surrender to a higher power."
    ],
    spiritualSignificance: "This event highlights the dynamic relationship between a devotee and the divine. It teaches that spiritual progress requires not just effort but also the grace that comes from passing divine tests of character and ego."
  },
   {
    eventName: "Shiva Teaching Yoga to Sapta Rishis (Adiyogi)",
    title: "Shiva Teaching Yoga to Sapta Rishis",
    deityInvolved: ["Shiva (as Adiyogi)", "Sapta Rishis", "Parvati"],
    description: "Lord Shiva, as Adiyogi (the first yogi), transmitted the profound knowledge of yoga to the Sapta Rishis — the seven great sages. These teachings formed the foundation of yogic science and were carried to different parts of the world by the Rishis.",
    keyFigures: [
        { name: "Shiva", role: "The primordial yogi", epithet: "Adiyogi" },
        { name: "Sapta Rishis", role: "The first disciples of yoga" },
        { name: "Parvati", role: "Witness to the divine transmission" }
    ],
    narrative: [
        { stage: "Deep Meditation", details: "Shiva enters into deep yogic meditation for thousands of years, immersed in blissful stillness." },
        { stage: "The Longing of the Sages", details: "Seven sages, seeking the ultimate truth, approach Shiva with intense devotion." },
        { stage: "The Transmission", details: "Moved by their determination, Shiva imparts the sevenfold paths of yoga, one for each rishi, through silent transmission." },
        { stage: "Spreading the Knowledge", details: "The Sapta Rishis carry this knowledge across the globe, forming the bedrock of Sanatan Dharma." }
    ],
    symbolism: {
        Adiyogi: "The original source of all yogic and spiritual knowledge.",
        SilentTeaching: "Represents that true knowledge is experiential and transcends words.",
        SevenPaths: "Symbolizes that the path to liberation is diverse, suiting different temperaments."
    },
    textualReferences: [
        { text: "Shiva Purana" },
        { text: "Agamas and Tantras" },
        { text: "Skanda Purana" }
    ],
    locationsAssociated: [
        { name: "Mount Kailash", description: "The traditional site of this divine teaching." },
        { name: "Isha Yoga Center, Coimbatore", description: "Features a large Adiyogi statue, a modern tribute." }
    ],
    festivalAssociations: [
        { name: "Guru Purnima", description: "Honors Shiva as the first Guru." },
        { name: "International Day of Yoga", description: "Celebrates the global impact of the knowledge transmitted by Adiyogi." }
    ],
    teachings: [
        "Yoga is the ultimate science of inner transformation.",
        "Self-realization is the highest purpose of life.",
        "Discipline, detachment, and surrender are keys to spiritual growth.",
        "The guru-shishya (teacher-disciple) lineage is sacred."
    ],
    spiritualSignificance: "This event marks the origin of all yogic traditions. It establishes Shiva as the Adi Guru, the first and foremost teacher, whose wisdom provides the path to human liberation and self-realization."
  },
  {
    eventName: "Shiva Curses Brahma",
    title: "Shiva Curses Brahma",
    deityInvolved: ["Shiva", "Brahma", "Vishnu", "Ketaki Flower"],
    description: "Once, a dispute arose between Brahma and Vishnu over who was supreme. To resolve this, a fiery infinite pillar of light (linga) appeared before them — it was Lord Shiva in his formless aspect. Brahma went upwards to find the top, and Vishnu went downward to find the base. Vishnu returned accepting defeat, but Brahma lied, claiming he saw the top, with the Ketaki flower as false witness. Enraged by this deception, Shiva appeared from the linga, cursed Brahma that he would never be worshipped on Earth and declared Vishnu worthy of worship.",
    keyFigures: [
      { name: "Shiva", role: "Appears as the infinite fiery Linga" },
      { name: "Brahma", role: "The Creator, who lies" },
      { name: "Vishnu", role: "The Preserver, who accepts truth" },
      { name: "Ketaki Flower", role: "The false witness" }
    ],
    narrative: [
      { stage: "The Dispute", details: "Brahma and Vishnu argue about their supremacy." },
      { stage: "The Test", details: "An infinite pillar of fire appears. Vishnu goes down as a boar, Brahma up as a swan." },
      { stage: "The Lie", details: "Vishnu admits defeat. Brahma lies, using the Ketaki flower as a witness." },
      { stage: "The Curse", details: "Shiva emerges, curses Brahma for his deceit, and blesses Vishnu for his honesty." }
    ],
    symbolism: {
      Lingodbhava: "Symbolizes Shiva's formless, infinite nature.",
      Curse: "Represents the consequences of ego and dishonesty in the spiritual path."
    },
    textualReferences: [
      { text: "Shiva Purana" },
      { text: "Linga Purana" },
      { text: "Skanda Purana" }
    ],
    locationsAssociated: [
      { name: "Tiruvannamalai (Arunachala Hill)", location: "Tamil Nadu", description: "Regarded as the site of the original Lingodbhava." }
    ],
    festivalAssociations: [
      { name: "Karthigai Deepam", description: "Celebrated at Arunachala Hill to commemorate the fire-linga." },
      { name: "Mahashivaratri", description: "Associated with the Lingodbhava form of Shiva." }
    ],
    teachings: [
      "Truthfulness is more revered than power or status.",
      "False ego and pride lead to downfall, even among gods.",
      "The infinite nature of the divine cannot be measured through egoic efforts.",
      "Humility and surrender are keys to divine favor."
    ],
    spiritualSignificance: "This event establishes Shiva's supremacy, the importance of truth, and explains why Brahma is not widely worshipped."
  },
  {
      eventName: "Shiva’s Role in Mahabharata & Ramayana",
      title: "Shiva's Role in Mahabharata & Ramayana",
      description: "Lord Shiva plays a pivotal yet often subtle role in both the Mahabharata and Ramayana, guiding, testing, and blessing key heroes. His influence highlights the cosmic balance, the power of penance, and the interconnectedness of all divine forces.",
      deityInvolved: ["Shiva", "Rama", "Arjuna", "Hanuman", "Ravana"],
      keyFigures: [
          { name: "Shiva (Mahadeva)", role: "Cosmic overseer and bestower of boons" },
          { name: "Rama", role: "Worshipper of Shiva at Rameshwaram" },
          { name: "Arjuna", role: "Recipient of the Pashupatastra weapon from Shiva" },
          { name: "Hanuman", role: "Rudra avatar of Shiva" },
          { name: "Ravana", role: "Great devotee of Shiva" }
      ],
      narrative: [
          { stage: "Role in Ramayana", details: "Shiva is revered by both Rama and Ravana. Rama worships Shiva at Rameshwaram to seek blessings before his final battle. Hanuman, a central hero, is an incarnation of Shiva's Rudra aspect. Ravana's immense power stems from his devotion to Shiva." },
          { stage: "Role in Mahabharata", details: "Shiva tests Arjuna's valor in the form of a Kirata (hunter) before granting him the Pashupatastra, a divine weapon crucial for the Kurukshetra War. This event emphasizes that great power must be earned through humility and tapasya." }
      ],
      symbolism: {
          "Divine Impartiality": "Shiva blesses both heroes (Rama) and anti-heroes (Ravana) based on their devotion, showcasing his role beyond simple dualities.",
          "Power of Penance": "Both Arjuna's and Ravana's stories highlight that sincere tapasya to Shiva yields immense power."
      },
      textualReferences: [
          { text: "Ramayana", details: "Yuddha Kanda (Rameshwaram episode)" },
          { text: "Mahabharata", details: "Vana Parva (Kiratarjuniya episode)" },
          { text: "Shiva Purana", details: "Details of Pashupatastra and Ravana's boons" }
      ],
      locationsAssociated: [
          { name: "Rameshwaram", location: "Tamil Nadu", description: "Site of the Jyotirlinga installed by Lord Rama." },
          { name: "Mount Kailash", description: "The abode of Shiva, which Ravana attempted to lift." },
          { name: "Indrakila Hill", description: "Site of Arjuna's penance." }
      ],
      teachings: [
          "The path of dharma requires both divine grace and personal effort.",
          "Even avatars of Vishnu, like Rama, show reverence to Shiva, highlighting divine unity.",
          "Great power comes with great responsibility and must be earned through worthiness."
      ],
      spiritualSignificance: "Shiva's role in the epics establishes him not just as a sectarian deity, but as a fundamental cosmic force whose blessings and tests are crucial for the unfolding of dharma across ages."
  },
  {
      eventName: "Shiva as Bhairava (Destruction of Brahma's Fifth Head)",
      title: "Shiva as Bhairava",
      alternateNames: ["Brahma-Shirashcheda Murti"],
      deityInvolved: ["Shiva", "Brahma", "Vishnu"],
      description: "Lord Shiva manifested as Bhairava, a fierce and terrifying form, to punish Lord Brahma for his arrogance and falsehood. Brahma, who had five heads, falsely claimed supremacy and insulted Shiva. In his Bhairava form, Shiva severed Brahma's fifth head, establishing the importance of truth, humility, and the supremacy of divine order.",
      keyFigures: [
          { name: "Shiva", role: "Manifested as Bhairava", epithet: "Bhairava" },
          { name: "Brahma", role: "The arrogant creator" },
          { name: "Vishnu", role: "Witness to the event" }
      ],
      shivaAspect: {
          name: "Bhairava",
          meaning: "The Terrifying One",
          description: "This form of Shiva enforces divine law without attachment or hesitation, destroying ego and falsehood to protect cosmic order."
      },
      spiritualSignificance: "The event symbolizes the destruction of ego, the need for humility even among gods, and the enforcement of dharma (cosmic order). Bhairava is considered a fierce guardian and protector who annihilates falsehood and pride.",
      textualReferences: [
          { text: "Shiva Purana" },
          { text: "Kalika Purana" },
          { text: "Tantric texts" }
      ],
      locationsAssociated: [
          { name: "Varanasi (Kashi)", description: "Where Bhairava is especially revered as the city's guardian (Kotwal)." }
      ],
      teachings: [
          "No one is above dharma, not even the gods.",
          "Ego and pride must be destroyed to progress spiritually.",
          "Fierce forms of divinity play crucial roles in maintaining cosmic balance."
      ]
  }
];

// --- Function to retrieve detailed event data ---

import { eventsData } from './events'; // Import summary data

/**
 * Gets the detailed data for a specific event by its ID.
 * Merges summary data (like image, aiHint) with detailed data.
 * @param id The unique ID of the event (e.g., "samudra-manthan").
 * @returns A DetailedEvent object or undefined if not found.
 */
export const getDetailedEventById = (id: string): DetailedEvent | undefined => {
  const summaryData = eventsData.find(event => event.id === id);
  if (!summaryData) return undefined;

  // Normalize ID and eventName for robust matching
  const normalizedId = id.toLowerCase().replace(/ /g, '-').replace(/[()']/g, '');
  const detailData = eventsDetailedData.find(event => 
      event.eventName.toLowerCase().replace(/ /g, '-').replace(/[()']/g, '').startsWith(normalizedId)
  );

  if (!detailData) {
    // Fallback if no detailed data exists yet, using summary data.
    // This part can be enhanced later. For now, we'll assume a match is needed.
    return undefined;
  }

  return {
    ...detailData,
    id: summaryData.id,
    image: summaryData.image,
    aiHint: summaryData.aiHint,
  } as DetailedEvent;
};
