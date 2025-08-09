
import type { StaticImageData } from 'next/image';

export interface EventKeyInfo {
    label: string;
    value: string;
}

export type EventCategory = "Cosmic Balance" | "Divine Union & Family" | "Tests & Blessings" | "Fierce Manifestations";

export interface Event {
    id: string; // Unique identifier for the event
    title: string;
    description: string; // Short summary of the event
    longDescription?: string; // More detailed account of the event
    significance: string[]; // Key takeaways or importance
    keyFigures: string[]; // Main characters involved (e.g., Shiva, Parvati, Vishnu, Asuras)
    relatedTexts: string[]; // Scriptures where the event is mentioned
    category: EventCategory; // Added category for filtering
    keyInfo?: EventKeyInfo[]; // Quick facts (e.g., Location, Boon Granted, Weapon Used)
    aiHint?: string; // Hint for image generation
    image?: string | StaticImageData; // Optional image URL or static import
}

export const eventsData: Event[] = [
    {
        id: "samudra-manthan",
        title: "Samudra Manthan",
        description: "The churning of the cosmic ocean by Devas and Asuras to obtain Amrita, during which the deadly poison Halahala emerged.",
        significance: [
            "Demonstrates Shiva's compassion and sacrifice for the universe.",
            "Origin of the name Neelakantha.",
            "Highlights the consequences of seeking power (Amrita).",
            "Shows cooperation (even if temporary) between Devas and Asuras.",
        ],
        keyFigures: ["Shiva (Neelakantha)", "Vishnu (Kurma Avatar)", "Devas", "Asuras", "Vasuki"],
        relatedTexts: ["Bhagavata Purana", "Vishnu Purana", "Mahabharata"],
        category: "Cosmic Balance",
        image: "https://drive.google.com/uc?export=view&id=1Xzhu2JAhYZrvsySeNR5611rkoQpXLPCz",
        aiHint: "churning ocean devas asuras shiva poison neelakantha cosmic event",
    },
    {
        id: "daksha-yagna",
        title: "Daksha Yagna",
        description: "The grand sacrifice where Sati immolated herself, leading to Shiva's wrath and the destruction of the yagna.",
        significance: [
            "Illustrates the consequences of arrogance and disrespect towards divinity.",
            "Shows the inseparable bond between Shiva and Shakti (Sati).",
            "Led to the creation of Shakti Peethas.",
        ],
        keyFigures: ["Shiva", "Sati", "Daksha Prajapati", "Veerabhadra", "Bhadrakali", "Devas"],
        relatedTexts: ["Shiva Purana", "Skanda Purana", "Linga Purana", "Bhagavata Purana"],
        category: "Fierce Manifestations",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Daksha_yagna.jpg/500px-Daksha_yagna.jpg",
        aiHint: "sacrifice daksha sati shiva veerabhadra destruction yagna fire",
    },
     {
        id: "shivas-marriage-with-parvati",
        title: "Shiva’s Marriage with Parvati",
        description: "The celestial wedding of Lord Shiva and Goddess Parvati, symbolizing the union of pure consciousness with divine energy (Shakti).",
        significance: ["Union of Shiva & Shakti", "Cosmic balance", "Harmony of asceticism and devotion"],
        keyFigures: ["Shiva", "Parvati", "Himalaya", "Vishnu", "Brahma"],
        relatedTexts: ["Shiva Purana", "Skanda Purana", "Linga Purana"],
        category: "Divine Union & Family",
        aiHint: "shiva parvati wedding kailash divine marriage"
    },
    {
        id: "tripurasura-samhara",
        title: "Tripurasura Samhara",
        description: "Shiva's destruction of the three invincible flying cities (Tripura) built by the sons of the Asura Tarakasura.",
        significance: [
            "Showcases Shiva's supreme power as the ultimate destroyer of evil.",
            "Symbolizes the destruction of the three Gunas to attain liberation.",
            "Origin of the name Tripurantaka (Destroyer of Tripura).",
        ],
        keyFigures: ["Shiva (Tripurantaka)", "Tarakaksha", "Vidyunmali", "Kamalaksha", "Maya Danava", "Vishnu", "Brahma"],
        relatedTexts: ["Shiva Purana", "Mahabharata", "Linga Purana"],
        category: "Divine Battles",
        image: "https://unitywithinfinity.com/wp-content/uploads/2024/02/Tripurasura-asuras-of-the-three-cities.webp",
        aiHint: "shiva destroying three cities flying chariot bow arrow asuras tripurantaka cosmic battle",
    },
    {
        id: "ganga-avatarana",
        title: "Ganga Avatarana",
        description: "The story of how the celestial river Ganga descended to Earth, cushioned by Lord Shiva's matted locks.",
        significance: [
            "Shows Shiva's role as a controller of immense natural forces.",
            "Demonstrates Shiva's grace in fulfilling a devotee's (Bhagiratha's) request.",
            "Explains the sacred origin and purifying power of the River Ganga.",
        ],
        keyFigures: ["Shiva", "Ganga", "Bhagiratha", "King Sagara's Sons"],
        relatedTexts: ["Ramayana", "Mahabharata", "Bhagavata Purana", "Shiva Purana"],
        category: "Cosmic Balance",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Descent_of_the_Ganges_01.jpg/500px-Descent_of_the_Ganges_01.jpg",
        aiHint: "shiva catching river ganga head matted locks bhagiratha himalayas sacred river",
    },
     {
        id: "markandeya-vijaya",
        title: "Markandeya's Conquest over Death",
        description: "Shiva saving his young devotee Markandeya from Yama, the God of Death, establishing his supremacy over mortality.",
        significance: [
            "Ultimate demonstration of Shiva's power over death (Mrityunjaya).",
            "Highlights the protective power of unwavering devotion (bhakti).",
            "Shows that devotion can alter destiny.",
        ],
        keyFigures: ["Shiva (Kalantaka/Mrityunjaya)", "Markandeya", "Yama"],
        relatedTexts: ["Shiva Purana", "Skanda Purana", "Markandeya Purana"],
        category: "Tests & Blessings",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Markandeya_worships_Shiva_Linga.jpg/800px-Markandeya_worships_Shiva_Linga.jpg",
        aiHint: "shiva emerging lingam saving boy markandeya yama death divine protection",
    },
    {
        id: "ardhanarishvara-manifestation",
        title: "Ardhanarishvara Manifestation",
        description: "Shiva manifested as Ardhanarishvara, a composite form of Shiva and Parvati, representing the synthesis of masculine and feminine energies.",
        significance: ["Balance of Purusha and Prakriti", "Gender unity", "Cosmic completeness", "Oneness of all dualities."],
        keyFigures: ["Shiva", "Parvati"],
        relatedTexts: ["Shiva Purana", "Linga Purana", "Tantric texts"],
        category: "Cosmic Manifestations",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Ardhanarishvara_Natya_Shiva.jpg",
        aiHint: "shiva parvati combined half male half female ardhanarishvara"
    },
    {
        id: "ananda-tandava",
        title: "Ananda Tandava (Cosmic Dance)",
        description: "As Nataraja, Shiva performs the Ananda Tandava, symbolizing the cosmic cycles of creation, preservation, and destruction.",
        significance: ["Universal rhythm of life", "The five acts of Shiva (Pancha Krityas)", "Liberation through rhythm and awareness."],
        keyFigures: ["Shiva (Nataraja)", "Parvati", "Sages Patanjali & Vyaghrapada"],
        relatedTexts: ["Natya Shastra", "Shiva Purana", "Chidambara Mahatmyam"],
        category: "Cosmic Manifestations",
        aiHint: "shiva cosmic dance nataraja chidambaram tandava"
    },
    {
        id: "killing-of-andhaka",
        title: "Killing of Andhaka",
        description: "Shiva slays the demon Andhaka who tried to possess Parvati, symbolizing the conquest of ignorance and ego by divine wisdom.",
        significance: ["Victory of dharma over adharma", "Spiritual vigilance", "Justice and divine intervention."],
        keyFigures: ["Shiva", "Andhaka", "Parvati"],
        relatedTexts: ["Shiva Purana", "Linga Purana"],
        category: "Divine Battles",
        aiHint: "shiva fighting demon andhaka divine wrath ignorance"
    },
    {
        id: "birth-of-karthikeya",
        title: "Birth of Karthikeya (Skanda)",
        description: "Karthikeya, the son of Shiva and Parvati, was born to destroy the demon Tarakasura and lead the divine armies.",
        significance: ["Victory of righteousness", "Divine child energy", "Warrior for dharma."],
        keyFigures: ["Shiva", "Parvati", "Skanda", "Tarakasura"],
        relatedTexts: ["Skanda Purana", "Mahabharata", "Shiva Purana"],
        category: "Divine Union & Family",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kartikeya_Murugan.jpg/440px-Kartikeya_Murugan.jpg",
        aiHint: "shiva parvati son karthikeya skanda warrior god"
    },
     {
        id: "burning-of-kamadeva",
        title: "Burning of Kamadeva",
        description: "Shiva incinerates Kamadeva (the God of Love) with his third eye for disturbing his meditation, later reviving him in a formless state.",
        significance: ["Victory of tapasya (austerity) over desire.", "Divine love transcends lust.", "Mastery over the senses."],
        keyFigures: ["Shiva", "Kamadeva", "Parvati", "Rati"],
        relatedTexts: ["Shiva Purana", "Kumarasambhava"],
        category: "Tests & Blessings",
        aiHint: "shiva third eye burning kamadeva desire meditation"
    },
    {
        id: "appearance-as-bhikshatana",
        title: "Appearance as Bhikshatana",
        description: "Shiva appears as a handsome, nude beggar sage (Bhikshatana) to humble the arrogant sages of Daruka forest.",
        significance: ["Transcendence of societal norms", "Rejection of false pride", "Supremacy of inner realization."],
        keyFigures: ["Shiva (Bhikshatana)", "Sages of Daruka", "Parvati"],
        relatedTexts: ["Kurma Purana", "Linga Purana"],
        category: "Cosmic Manifestations",
        aiHint: "shiva beggar form bhikshatana sages forest"
    },
    {
        id: "establishment-of-jyotirlingas",
        title: "Establishment of Jyotirlingas",
        description: "Shiva manifested as an infinite pillar of light (Jyotirlinga) to settle a dispute between Brahma and Vishnu.",
        significance: ["Symbolizes Shiva's infinite nature", "Created sacred pilgrimage sites", "Represents cosmic anchor points of divine energy."],
        keyFigures: ["Shiva", "Brahma", "Vishnu"],
        relatedTexts: ["Shiva Purana", "Koti Rudra Samhita"],
        category: "Cosmic Manifestations",
        aiHint: "shiva jyotirlinga pillar light cosmic energy"
    },
    {
        id: "kiratarjuniya",
        title: "Kiratarjuniya (Shiva Tests Arjuna)",
        description: "Shiva, disguised as a Kirata (hunter), tests Arjuna's courage and devotion before granting him the powerful Pashupatastra weapon.",
        significance: ["Tests of devotion and valor", "Spiritual trial", "Importance of humility"],
        keyFigures: ["Shiva (as Kirata)", "Arjuna"],
        relatedTexts: ["Mahabharata (Vana Parva)", "Kiratarjuniya by Bharavi"],
        category: "Tests & Blessings",
        aiHint: "shiva disguised hunter arjuna battle pashupatastra"
    },
    {
        id: "shiva-teaches-saptarishis",
        title: "Shiva Teaching Yoga to Sapta Rishis",
        description: "As Adiyogi (the first Yogi), Shiva transmits the profound science of Yoga to the seven great sages.",
        significance: ["Origin of Yoga", "Transmission of eternal wisdom", "Guru-shishya parampara"],
        keyFigures: ["Shiva (Adiyogi)", "Sapta Rishis"],
        relatedTexts: ["Shaiva Agamas", "Yogic lore", "Shiva Purana"],
        category: "Tests & Blessings",
        aiHint: "shiva adiyogi seven sages yoga teaching meditation himalayas"
    },
    {
        id: "shiva-curses-brahma",
        title: "Shiva Curses Brahma",
        description: "Shiva curses Brahma for lying about reaching the top of the infinite pillar of light (Jyotirlinga).",
        significance: ["Supremacy of truth", "Humility before the infinite", "Destruction of ego"],
        keyFigures: ["Shiva", "Brahma", "Vishnu", "Ketaki flower"],
        relatedTexts: ["Shiva Purana", "Linga Purana"],
        category: "Tests & Blessings",
        aiHint: "shiva jyotirlinga brahma vishnu curse falsehood pillar of fire"
    },
     {
        id: "shiva-as-bhairava",
        title: "Shiva as Bhairava",
        description: "Shiva manifests as the fierce Bhairava to cut off Brahma's fifth head, which had grown arrogant.",
        significance: ["Destruction of arrogance", "Penance and karmic purification", "Embracing the shadow for transformation"],
        keyFigures: ["Shiva (Bhairava)", "Brahma"],
        relatedTexts: ["Shiva Purana", "Skanda Purana"],
        category: "Fierce Manifestations",
        aiHint: "shiva fierce bhairava brahma head kashi"
    },
    {
        id: "shivas-role-in-epics",
        title: "Shiva's Role in Epics",
        description: "Lord Shiva plays pivotal roles in both the Mahabharata and Ramayana, guiding, testing, and blessing key heroes.",
        significance: ["Protector of Dharma", "Bestower of divine weapons", "Symbol of cosmic balance and ascetic power"],
        keyFigures: ["Shiva", "Rama", "Arjuna", "Hanuman"],
        relatedTexts: ["Mahabharata", "Ramayana", "Shiva Purana"],
        category: "Tests & Blessings",
        aiHint: "shiva mahabharata ramayana divine presence"
    }
];


// Function to get all events
export const getAllEvents = (): Event[] => {
  return eventsData;
};

// Function to get a specific event by ID
export const getEventById = (id: string): Event | undefined => {
  return eventsData.find(event => event.id === id);
};
