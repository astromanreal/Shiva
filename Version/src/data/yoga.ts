export interface MeditationBenefit {
    title: string;
    description: string;
}

export interface MindWorkingPoint {
    term: string;
    explanation: string;
}

export interface MeditationTechnique {
    name: string;
    icon: string; // Icon name from lucide-react
    description: string;
    steps: string[];
    note?: string;
}

export interface ClassicalDefinition {
    source: string;
    date: string;
    definition: string;
}

export interface YogaData {
    title: string;
    subtitle: string;
    tags: string[];
    heroImage: { src: string; alt: string; aiHint: string; };
    introduction: { title: string; content: string[]; }; // Changed content to array
    shivaConnection: {
        title: string;
        content: string;
        image: { src: string; alt: string; aiHint: string; };
    };
    mindWorking: {
        title: string;
        description: string;
        points: MindWorkingPoint[];
        goal: string;
    };
    benefits: { title: string; list: MeditationBenefit[]; };
    techniques: { title: string; list: MeditationTechnique[]; };
    classicalDefinitions: { // Added new section
        title: string;
        intro: string;
        definitions: ClassicalDefinition[];
    };
    conclusion: { title: string; quote: string; text: string; };
}

export const yogaData: YogaData = {
    title: "The Path of Yoga",
    subtitle: "Discover the ancient science of well-being, originating from Adiyogi (Shiva), designed to harmonize the body, mind, and spirit.",
    tags: ["Yoga", "Asana", "Pranayama", "Meditation", "Adiyogi", "Shiva"],
    heroImage: {
        src: "https://picsum.photos/seed/adiyogi-statue/800/450", // Placeholder image
        alt: "Adiyogi Shiva Statue",
        aiHint: "adiyogi shiva statue meditation yoga",
    },
    introduction: {
        title: "What is Yoga?",
        content: [
           "Yoga, derived from the Sanskrit root \"Yuj\" meaning 'to unite' or 'to yoke', is a vast collection of spiritual, physical, and mental practices originating in ancient India. Its goal is to unite the individual consciousness (Jivatma) with the universal consciousness (Paramatma). Lord Shiva, revered as Adiyogi (the first Yogi), is considered the ultimate source of Yoga, who transmitted this profound knowledge to humanity for liberation and self-realization.",
           "While often known in the West primarily for its physical postures (Asanas), Yoga encompasses a much broader spectrum, including ethical disciplines (Yamas and Niyamas), breath control (Pranayama), sense withdrawal (Pratyahara), concentration (Dharana), meditation (Dhyana), and absorption into the divine (Samadhi)."
        ]
    },
    shivaConnection: {
        title: "Yoga and Mahadeva",
        content: "Lord Shiva, as Adiyogi, embodies the ultimate potential of Yoga. His depiction as the Mahayogi, eternally absorbed in meditation on Mount Kailash, serves as the prime inspiration for practitioners. The practices of Yoga are considered a path to realize the Shiva tattva (Shiva principle) – the pure consciousness that resides within all beings. Through dedicated practice of Asana, Pranayama, and Dhyana, one purifies the body and mind, transcends limitations, and moves towards the state of union and liberation that Shiva represents.",
        image: {
            src: "https://picsum.photos/seed/shiva-meditating-kailash/300/200",
            alt: "Shiva meditating on Mount Kailash",
            aiHint: "shiva meditating kailash calm yogi adiyogi",
        }
    },
    mindWorking: { // This section seems more relevant to the Meditation page, but keeping it if intended for Yoga context too.
        title: "How the Mind Works: Towards Stillness",
        description: "Yoga philosophy describes the mind (Chitta) as prone to fluctuations (Vrittis). Meditation aims to calm these fluctuations.",
        points: [
            { term: "Chitta", explanation: "The mind-stuff, including intellect (Buddhi), ego (Ahamkara), and lower mind (Manas)." },
            { term: "Vrittis", explanation: "Thought-waves or modifications of the mind (e.g., right knowledge, wrong knowledge, imagination, sleep, memory)." },
            { term: "Kleshas", explanation: "Afflictions or causes of suffering (ignorance, egoism, attachment, aversion, fear of death) that arise from Vrittis." },
            { term: "Abhyasa & Vairagya", explanation: "Consistent practice (Abhyasa) and detachment (Vairagya) are the keys to controlling Vrittis." }
        ],
        goal: "The goal of Yoga, as defined by Patanjali, is 'Chitta Vritti Nirodhah' - the cessation of the modifications of the mind-stuff, allowing the seer to rest in their true nature."
    },
     classicalDefinitions: { // Added section data
        title: "Yoga in Classical Texts",
        intro: "The term 'Yoga' holds diverse meanings across various Indian philosophical and religious traditions. Here are some key definitions:",
        definitions: [
            {
                source: "Maitrayaniya Upanishad",
                date: "c. 4th century BCE",
                definition: "The oneness of breath, mind, and senses, and the surrender of all conceptions."
            },
            {
                source: "Katha Upanishad",
                date: "last centuries BCE",
                definition: "Firm restraint of the senses, leading to an undistracted state, considered the highest state."
            },
             {
                source: "Bhagavad Gita",
                date: "c. 2nd century BCE",
                definition: "Equanimity in success and failure (2.48); Skill in action (2.50); Separation from contact with suffering (6.23)."
            },
            {
                source: "Yoga Sutras of Patanjali",
                date: "c. first centuries CE",
                definition: "The calming down of the fluctuations/patterns of the mind (1.2)."
            },
             {
                source: "Yogabhasya",
                date: "same as Yoga Sutras",
                definition: "Yoga is Samadhi (concentration/absorption)."
            },
             {
                source: "Linga Purana",
                date: "7th–10th century CE",
                definition: "By the word 'yoga' is meant nirvana, the condition of Shiva."
            },
            {
                source: "Adi Shankara (Brahmasutra-bhasya)",
                date: "c. 8th century CE",
                definition: "Yoga is the means of perceiving reality."
            },
            {
                source: "Mālinīvijayottara Tantra (Kashmir Shaivism)",
                date: "6th–10th century CE",
                definition: "Yoga is said to be the oneness of one entity with another."
            },
             {
                source: "Yogabija (Hatha Yoga)",
                date: "14th century CE",
                definition: "The union of apana and prana, sun and moon, individual Self and supreme Self, and all dualities."
            }
        ],
    },
    benefits: {
        title: "Benefits of Yoga Practice",
        list: [
            { title: "Physical Health", description: "Improves flexibility, strength, balance, and circulation. Reduces pain and tension." },
            { title: "Mental Clarity & Focus", description: "Reduces mental chatter, enhances concentration and memory." },
            { title: "Stress Reduction", description: "Calms the nervous system, lowers cortisol, promotes relaxation." },
            { title: "Emotional Balance", description: "Increases self-awareness, reduces anxiety and depression, fosters resilience." },
            { title: "Spiritual Growth", description: "Facilitates self-discovery, deepens connection to inner self and consciousness." },
            { title: "Increased Energy", description: "Balances Prana (life force), leading to greater vitality." },
        ]
    },
    techniques: {
        title: "Core Yoga Components", // Changed title to be more general
        list: [
             {
                name: "Asana (Postures)",
                icon: "PersonStanding",
                description: "Physical postures designed to strengthen the body, improve flexibility, and create stability for deeper practices. Asanas prepare the physical body to hold higher energies and states of consciousness.",
                steps: [
                    "Start with foundational poses (e.g., Tadasana, Adho Mukha Svanasana).",
                    "Focus on proper alignment to prevent injury.",
                    "Coordinate breath with movement.",
                    "Hold poses with steady awareness.",
                    "Progress gradually based on flexibility and strength.",
                ],
                note: "Examples include Padmasana (Lotus), Trikonasana (Triangle), Bhujangasana (Cobra)."
            },
            {
                name: "Pranayama (Breath Control)",
                icon: "Wind",
                description: "Techniques for regulating the breath (Prana or life force). Pranayama purifies the energy channels (Nadis), calms the mind, and enhances vitality.",
                steps: [
                    "Sit comfortably with a straight spine.",
                    "Begin with simple awareness of natural breathing.",
                    "Practice techniques like Anulom Vilom (Alternate Nostril), Kapalbhati (Skull Shining), or Bhramari (Bee Breath).",
                    "Focus on the rhythm and flow of breath.",
                    "Maintain gentle awareness without straining.",
                ],
                note: "Pranayama directly influences the mind and energy levels."
            },
            {
                name: "Dhyana (Meditation)",
                icon: "Brain",
                description: "The practice of focused awareness and mindfulness, training the mind to become calm, clear, and one-pointed, leading towards deeper states of consciousness.",
                steps: [
                    "Find a quiet space and comfortable seated posture.",
                    "Choose a focus point (breath, mantra, object, or awareness itself).",
                    "Gently observe thoughts without judgment.",
                    "Return focus to the chosen point when the mind wanders.",
                    "Cultivate a state of detached witnessing.",
                ],
                note: "Meditation is the culmination of preparatory practices like Asana and Pranayama."
            },
            // Add Yamas/Niyamas, Pratyahara, Dharana, Samadhi later if desired
        ]
    },

    conclusion: {
        title: "The Unifying Path",
        quote: "Yoga is the journey of the self, through the self, to the Self. - The Bhagavad Gita",
        text: "Yoga, in its essence, is a holistic path gifted by Adiyogi Shiva for harmonizing all aspects of our being. Through dedicated practice, it leads from the physical to the subtle, culminating in the ultimate union and realization of the divine consciousness within."
    }
};


// Function to get yoga data
export const getYogaData = (): YogaData => {
  return yogaData;
};
