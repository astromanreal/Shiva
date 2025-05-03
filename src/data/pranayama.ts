export interface PranayamaSource {
    title: string;
    description: string;
    keyPoints?: string[];
    quote?: string;
    quoteSource?: string;
}

export interface PranayamaTechnique {
    name: string;
    sanskritName?: string;
    description: string;
}

export interface PranayamaData {
    title: string;
    subtitle: string;
    heroImage: { src: string; alt: string; aiHint: string; };
    introduction: string;
    sources: PranayamaSource[];
    hathaTechniques: {
        title: string;
        intro: string;
        techniques: PranayamaTechnique[];
        caution: string;
    };
    ultimateGoal: {
        title: string;
        description: string;
        quotes: { text: string; source: string; }[];
    };
    modernContext: {
        title: string;
        description: string;
    };
}

export const pranayamaData: PranayamaData = {
    title: "Pranayama (प्राणायाम)",
    subtitle: "The yogic science of breath control, regulating the vital life force (Prana) for physical health, mental clarity, and spiritual evolution.",
    heroImage: {
        src: "https://picsum.photos/seed/pranayama-breath/800/450",
        alt: "Person practicing pranayama in serene setting",
        aiHint: "pranayama yoga breath control meditation serene nature",
    },
    introduction: "Pranayama, derived from Sanskrit 'Prana' (vital life force) and 'ayama' (to extend, draw out, restrain, or control), is a cornerstone of yogic practice. It involves specific techniques to regulate the breath, thereby influencing the flow of Prana within the body's energy channels (Nadis). This conscious control over breath directly impacts the nervous system, mental state, and overall vitality.",
    sources: [
        {
            title: "Bhagavad Gita",
            description: "Verse 4.29 mentions breath restraint as a practice for those inclined towards trance (Samadhi). It describes offering the outgoing breath (Prana) into the incoming breath (Apana) and vice versa, eventually leading to the cessation of breathing as a form of sacrifice.",
            keyPoints: [
                "Links breath control to achieving trance.",
                "Describes regulating Prana and Apana.",
                "Views breath control as a form of sacrifice/offering.",
            ],
            quote: "practice by offering the movement of the outgoing breath into the incoming, and the incoming breath into the outgoing, and thus at last remain in trance, stopping all breathing.",
            quoteSource: "Bhagavad Gita 4.29"
        },
        {
            title: "Yoga Sutras of Patanjali",
            description: "Pranayama is the fourth limb of Patanjali's Ashtanga Yoga (verse 2.29). It's defined primarily by the regulation or cessation of inhalation and exhalation (verse 2.49). Patanjali introduces it (verse 1.34) as a method to stabilize the mind (Chitta). Key techniques mentioned are 'pracchardana' (exhalation) and 'vidharana' (retention).",
            keyPoints: [
                "Fourth limb of Ashtanga Yoga.",
                "Defined as control/cessation of breath movement.",
                "Aimed at stabilizing the mind.",
                "Involves regulated exhalation and retention.",
                "Complements Asana and prepares for Dharana/Dhyana.",
            ]
        }
    ],
    hathaTechniques: {
        title: "Pranayama in Hatha Yoga",
        intro: "Hatha Yoga texts, like the Hatha Yoga Pradipika, detail numerous Pranayama techniques, often involving breath retention (Kumbhaka) and energy locks (Bandhas). Some key techniques include:",
        techniques: [
            {
                name: "Nadi Shodhana",
                sanskritName: "नाडी शोधन",
                description: "Alternate nostril breathing, aimed at purifying the energy channels (Nadis) and balancing Prana.",
            },
            {
                name: "Ujjayi",
                sanskritName: "उज्जायी",
                description: "'Victorious Breath', characterized by a gentle constriction at the back of the throat, creating an ocean-like sound. Calming and heating.",
            },
             {
                name: "Kapalabhati",
                sanskritName: "कपालभाति",
                description: "'Skull Shining Breath', a Shatkarma (purification technique) involving forceful exhalations and passive inhalations. Energizing and cleansing.",
            },
            {
                name: "Bhastrika",
                sanskritName: "भस्त्रिका",
                description: "'Bellows Breath', involves forceful inhalations and exhalations, rapidly increasing energy levels. Highly energizing.",
            },
            {
                name: "Sitali / Sitkari",
                sanskritName: "शीतली / सीत्कारी",
                description: "Cooling breaths performed by inhaling through a rolled tongue (Sitali) or teeth (Sitkari).",
            },
            {
                name: "Bhramari",
                sanskritName: "भ्रामरी",
                description: "'Bee Breath', involves making a humming sound during exhalation. Calming and soothing for the mind.",
            },
             {
                name: "Surya Bhedana / Chandra Bhedana",
                sanskritName: "सूर्य भेदन / चन्द्र भेदन",
                description: "'Sun-piercing' (right nostril inhalation) and 'Moon-piercing' (left nostril inhalation) breaths to activate Pingala or Ida Nadis respectively.",
            },
             {
                name: "Kumbhaka",
                sanskritName: "कुम्भक",
                description: "Breath retention, practiced after inhalation (Antara Kumbhaka) or exhalation (Bahya Kumbhaka). Advanced technique requiring guidance.",
            },
        ],
        caution: "Pranayama, especially techniques involving retention (Kumbhaka) or forceful breathing, should be learned under the guidance of an experienced teacher. It's recommended to have a stable Asana practice before delving deep into Pranayama."
    },
    ultimateGoal: {
        title: "The Goal: Kevala Kumbhaka",
        description: "According to traditional texts, a primary aim of advanced Pranayama practice is to achieve 'Kevala Kumbhaka' – the spontaneous cessation of breath without effort. This state signifies mastery over Prana and leads to profound stillness of the mind.",
        quotes: [
            { text: "The real meaning of Pranayama... is the gradual cessation of breathing, the discontinuance of inhalation and exhalation.", source: "Paramahansa Yogananda" },
            { text: "The ultimate aim of pranayama is the suspension of breathing, causing the mind to swoon.", source: "Theos Bernard" }
        ]
    },
    modernContext: {
        title: "Modern Practice (Yoga as Exercise)",
        description: "In contemporary yoga styles often practiced as exercise, Pranayama frequently refers to synchronizing breath with movement (Vinyasa) or practicing basic breathing techniques like Ujjayi during Asana practice. While beneficial, this differs significantly from the traditional Hatha Yoga goal of prolonged retention and eventual breath cessation aimed at deep meditative states and Pranic control."
    }
};

// Function to get pranayama data
export const getPranayamaData = (): PranayamaData => {
    return pranayamaData;
};
