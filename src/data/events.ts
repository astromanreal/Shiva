import type { StaticImageData } from 'next/image';

export interface EventKeyInfo {
    label: string;
    value: string;
}

export interface Event {
    id: string; // Unique identifier for the event
    title: string;
    description: string; // Short summary of the event
    longDescription?: string; // More detailed account of the event
    significance: string[]; // Key takeaways or importance
    keyFigures: string[]; // Main characters involved (e.g., Shiva, Parvati, Vishnu, Asuras)
    relatedTexts: string[]; // Scriptures where the event is mentioned
    keyInfo?: EventKeyInfo[]; // Quick facts (e.g., Location, Boon Granted, Weapon Used)
    aiHint?: string; // Hint for image generation
    image?: string | StaticImageData; // Optional image URL or static import
}

export const eventsData: Event[] = [
    {
        id: "samudra-manthan",
        title: "Samudra Manthan (Churning of the Ocean)",
        description: "The churning of the cosmic ocean by Devas and Asuras to obtain Amrita (nectar of immortality), during which the deadly poison Halahala emerged.",
        longDescription: "To regain their strength and immortality, the Devas and Asuras collaborated to churn the Ocean of Milk using Mount Mandara as the churning rod and Vasuki, the serpent king, as the rope. Vishnu took the Kurma (tortoise) avatar to support the mountain. Many treasures emerged, but also the lethal Halahala poison, which threatened to destroy all creation. At the plea of the gods, Lord Shiva consumed the poison, holding it in his throat, which turned blue, earning him the name Neelakantha (The Blue-Throated One).",
        significance: [
            "Demonstrates Shiva's compassion and sacrifice for the universe.",
            "Origin of the name Neelakantha.",
            "Highlights the consequences of seeking power (Amrita).",
            "Shows cooperation (even if temporary) between Devas and Asuras.",
        ],
        keyFigures: ["Shiva (Neelakantha)", "Vishnu (Kurma Avatar)", "Devas", "Asuras", "Vasuki"],
        relatedTexts: ["Bhagavata Purana", "Vishnu Purana", "Mahabharata"],
        keyInfo: [
            { label: "Key Outcome", value: "Emergence of Amrita and Halahala" },
            { label: "Shiva's Action", value: "Consumed Halahala Poison" },
            { label: "Location", value: "Ocean of Milk (Kshira Sagara)" },
        ],
        aiHint: "churning ocean devas asuras shiva poison neelakantha",
    },
    {
        id: "daksha-yagna",
        title: "Daksha Yagna (Daksha's Sacrifice)",
        description: "The grand sacrifice organized by Daksha Prajapati, to which Shiva and Sati were not invited, leading to Sati's self-immolation and the destruction of the yagna.",
        longDescription: "Daksha, father of Sati and father-in-law of Shiva, held a massive yagna but deliberately excluded Shiva due to his unconventional nature. Sati, deeply hurt by the insult to her husband, went to the yagna uninvited and confronted her father. Unable to bear the disrespect shown to Shiva, she immolated herself in the sacrificial fire. Hearing this, Shiva unleashed his fury, creating Veerabhadra and Bhadrakali from his rage. They led the Ganas to destroy the yagna, humiliating the gods and ultimately beheading Daksha (who was later revived with a goat's head).",
        significance: [
            "Illustrates the consequences of arrogance and disrespect towards divinity.",
            "Shows the inseparable bond between Shiva and Shakti (Sati).",
            "Led to the creation of Shakti Peethas where parts of Sati's body fell.",
            "Demonstrates Shiva's fierce aspect when provoked.",
        ],
        keyFigures: ["Shiva", "Sati", "Daksha Prajapati", "Veerabhadra", "Bhadrakali", "Devas"],
        relatedTexts: ["Shiva Purana", "Skanda Purana", "Linga Purana", "Bhagavata Purana"],
        keyInfo: [
            { label: "Cause", value: "Insult to Shiva and Sati" },
            { label: "Key Action", value: "Sati's Self-Immolation" },
            { label: "Shiva's Response", value: "Destruction of Yagna via Veerabhadra" },
            { label: "Location", value: "Daksha's Sacrificial Arena" },
        ],
        aiHint: "sacrifice daksha sati shiva veerabhadra destruction",
    },
    {
        id: "tripurasura-samhara",
        title: "Tripurasura Samhara (Destruction of the Three Cities)",
        description: "Shiva's destruction of the three invincible flying cities (Tripura) built by the sons of the Asura Tarakasura.",
        longDescription: "After Tarakasura's sons (Tarakaksha, Vidyunmali, Kamalaksha) obtained boons from Brahma, they built three flying cities of gold, silver, and iron. These cities could only be destroyed when aligned, by a single arrow. Empowered by their cities, the Asuras terrorized the universe. The Devas sought Shiva's help. Shiva manifested as Tripurantaka, using the earth as his chariot, the Vedas as horses, Mount Meru as his bow, Vasuki as the bowstring, and Vishnu as his arrow. Waiting for the precise moment when the cities aligned, Shiva released the Pashupatastra, incinerating Tripura and the Asuras within.",
        significance: [
            "Showcases Shiva's supreme power as the ultimate destroyer of evil.",
            "Symbolizes the destruction of the three Gunas (Sattva, Rajas, Tamas) or the three states (waking, dreaming, deep sleep) to attain liberation.",
            "Highlights the collective effort of the Devas and cosmic elements supporting Shiva.",
            "Origin of the name Tripurantaka (Destroyer of Tripura).",
        ],
        keyFigures: ["Shiva (Tripurantaka)", "Tarakaksha", "Vidyunmali", "Kamalaksha", "Maya Danava (Architect)", "Vishnu", "Brahma", "Devas"],
        relatedTexts: ["Shiva Purana", "Mahabharata", "Linga Purana"],
        keyInfo: [
            { label: "Enemy", value: "Tripurasuras (Tarakasura's sons)" },
            { label: "Weapon Used", value: "Pashupatastra (as a single arrow)" },
            { label: "Condition for Destruction", value: "Cities aligned perfectly" },
            { label: "Shiva's Form", value: "Tripurantaka" },
        ],
        aiHint: "shiva destroying three cities flying chariot bow arrow asuras tripurantaka",
    },
    {
        id: "ganga-avatarana",
        title: "Ganga Avatarana (Descent of the Ganges)",
        description: "The story of how the celestial river Ganga descended to Earth, cushioned by Lord Shiva's matted locks.",
        longDescription: "King Sagara's 60,000 sons were reduced to ashes by Sage Kapila's gaze. To liberate their souls, King Sagara's descendant, Bhagiratha, performed intense tapasya to bring the celestial river Ganga to Earth to purify their ashes. Pleased by his devotion, Ganga agreed to descend, but her force was immense and could shatter the Earth. Bhagiratha then prayed to Lord Shiva, who agreed to bear the brunt of Ganga's descent. Shiva stood majestically as Ganga crashed onto his head, getting trapped in his matted locks (jata). He then released her gently in streams onto the Himalayas, from where she flowed across the plains, purifying the ashes of Sagara's sons and becoming a sacred river for all.",
        significance: [
            "Shows Shiva's role as a controller of immense natural forces.",
            "Demonstrates Shiva's grace in fulfilling a devotee's (Bhagiratha's) difficult request.",
            "Explains the sacred origin and purifying power of the River Ganga.",
            "Highlights the importance of penance (tapasya).",
        ],
        keyFigures: ["Shiva", "Ganga", "Bhagiratha", "King Sagara's Sons", "Sage Kapila"],
        relatedTexts: ["Ramayana", "Mahabharata", "Bhagavata Purana", "Shiva Purana"],
        keyInfo: [
            { label: "Purpose", value: "Liberation of King Sagara's sons" },
            { label: "Devotee", value: "Bhagiratha" },
            { label: "Shiva's Action", value: "Caught Ganga in his matted locks" },
            { label: "Outcome", value: "River Ganga flows on Earth" },
        ],
        aiHint: "shiva catching river ganga head matted locks bhagiratha himalayas",
    },
     {
        id: "markandeya-vijaya",
        title: "Markandeya Vijaya (Conquest over Death)",
        description: "Shiva saving his young devotee Markandeya from Yama, the God of Death.",
        longDescription: "Sage Markandeya was destined to die at the age of sixteen. As Yama arrived to claim his life, Markandeya was engrossed in worshipping a Shiva Lingam, clinging to it tightly. When Yama threw his noose (pasha) to capture Markandeya, it looped around the Lingam as well. Enraged at this act against his devotee and his symbol, Shiva emerged fiercely from the Lingam, kicked Yama in the chest, and subdued him. Pleased with Markandeya's devotion, Shiva blessed him with immortality, decreeing he would remain forever sixteen.",
        significance: [
            "Ultimate demonstration of Shiva's power over death (Mrityunjaya).",
            "Highlights the protective power of unwavering devotion (bhakti).",
            "Shows that devotion can alter destiny.",
            "Origin of the name Kalantaka (Ender of Death/Time).",
        ],
        keyFigures: ["Shiva (Kalantaka/Mrityunjaya)", "Markandeya", "Yama (God of Death)"],
        relatedTexts: ["Shiva Purana", "Skanda Purana", "Bhagavata Purana"],
        keyInfo: [
            { label: "Devotee", value: "Markandeya" },
            { label: "Antagonist", value: "Yama (God of Death)" },
            { label: "Shiva's Action", value: "Emerged from Lingam, defeated Yama" },
            { label: "Boon Granted", value: "Immortality (Chiranjivi)" },
        ],
        aiHint: "shiva emerging lingam saving boy markandeya yama death",
    },
    // Add more events as needed
];


// Function to get all events
export const getAllEvents = (): Event[] => {
  return eventsData;
};

// Function to get a specific event by ID
export const getEventById = (id: string): Event | undefined => {
  return eventsData.find(event => event.id === id);
};
