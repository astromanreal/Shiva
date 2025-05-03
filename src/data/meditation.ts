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

export interface MeditationData {
    title: string;
    subtitle: string;
    tags: string[];
    heroImage: { src: string; alt: string; aiHint: string; };
    introduction: { title: string; content: string; };
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
    conclusion: { title: string; quote: string; text: string; };
}

export const meditationData: MeditationData = {
    title: "The Path of Dhyana (Meditation)",
    subtitle: "Journey inward to stillness and wisdom, following the path illuminated by Mahadeva, the Adiyogi.",
    tags: ["Mindfulness", "Consciousness", "Wisdom", "Inner Peace", "Shiva"],
    heroImage: {
        src: "https://picsum.photos/seed/meditating-shiva-himalayas/800/450",
        alt: "Shiva meditating in the Himalayas",
        aiHint: "shiva meditating himalayas calm serene energy",
    },
    introduction: {
        title: "Understanding Meditation (Dhyana)",
        content: "Meditation, or Dhyana, is the practice of training the mind to achieve a state of focused awareness, mental clarity, and emotional calm. It's not about stopping thoughts, but about observing them without judgment, cultivating a state of detached witnessing. In the yogic tradition, Mahadeva (Shiva) is revered as the Adiyogi, the first yogi and the ultimate master of meditation, eternally absorbed in the stillness of pure consciousness.",
    },
    shivaConnection: {
        title: "Mahadeva: The Embodiment of Meditation",
        content: "Lord Shiva, often depicted deep in meditation atop Mount Kailash, symbolizes the pinnacle of meditative absorption (Samadhi). His stillness represents the unchanging, eternal consciousness (Purusha) underlying all of existence. His third eye signifies the eye of wisdom (Jnana Chakshu) opened through deep introspection. Dakshinamurthy, his form as the silent teacher, imparts profound wisdom through meditative stillness. Practicing meditation is a way to connect with this inner Shiva-nature – the silent, aware, blissful Self.",
        image: {
            src: "https://picsum.photos/seed/dakshinamurthy-teaching/300/200",
            alt: "Dakshinamurthy teaching silently",
            aiHint: "dakshinamurthy shiva teacher silent wisdom banyan tree"
        }
    },
    mindWorking: {
        title: "How the Mind Works: Towards Stillness",
        description: "Yoga philosophy describes the mind (Chitta) as prone to fluctuations (Vrittis). Meditation aims to calm these fluctuations.",
        points: [
            { term: "Chitta", explanation: "The mind-stuff, including intellect (Buddhi), ego (Ahamkara), and lower mind (Manas)." },
            { term: "Vrittis", explanation: "Thought-waves or modifications of the mind (e.g., right knowledge, wrong knowledge, imagination, sleep, memory)." },
            { term: "Kleshas", explanation: "Afflictions or causes of suffering (ignorance, egoism, attachment, aversion, fear of death) that arise from Vrittis." },
            { term: "Abhyasa & Vairagya", explanation: "Consistent practice (Abhyasa) and detachment (Vairagya) are the keys to controlling Vrittis." }
        ],
        goal: "The goal of meditation is 'Chitta Vritti Nirodhah' (Patanjali Yoga Sutras 1.2) - the cessation of the modifications of the mind-stuff, leading to the seer resting in their own true nature."
    },
    benefits: {
        title: "Benefits of Meditation",
        list: [
            { title: "Mental Clarity & Focus", description: "Reduces mental chatter, enhances concentration and decision-making." },
            { title: "Stress Reduction", description: "Calms the nervous system, lowers cortisol levels, promotes relaxation." },
            { title: "Emotional Balance", description: "Increases self-awareness, reduces reactivity, fosters compassion." },
            { title: "Enhanced Well-being", description: "Improves sleep, lowers blood pressure, boosts immune function." },
            { title: "Spiritual Growth", description: "Facilitates self-discovery, deepens connection to inner self and consciousness." },
            { title: "Increased Wisdom", description: "Develops insight (Prajna) into the nature of reality and the self." },
        ]
    },
    techniques: {
        title: "Basic Meditation Techniques",
        list: [
            {
                name: "Mindful Breathing (Anapanasati)",
                icon: "Wind",
                description: "Focusing attention on the natural sensation of the breath.",
                steps: [
                    "Sit comfortably with a straight spine.",
                    "Gently close your eyes or lower your gaze.",
                    "Bring your awareness to the sensation of your breath entering and leaving your nostrils or the rise and fall of your abdomen.",
                    "Observe the breath without trying to change it.",
                    "When the mind wanders (which it will), gently acknowledge the thought and bring your focus back to the breath.",
                    "Start with 5-10 minutes and gradually increase.",
                ],
                note: "This is a foundational practice for developing concentration."
            },
            {
                name: "Mantra Meditation (Japa)",
                icon: "BookOpen", // Placeholder, maybe a sound icon if available
                description: "Repeating a sacred sound or phrase silently or aloud.",
                steps: [
                    "Choose a mantra (e.g., 'Om', 'Om Namah Shivaya', 'So Hum').",
                    "Sit comfortably.",
                    "Silently or gently repeat the mantra in your mind.",
                    "Let the mantra be the focus of your awareness.",
                    "If thoughts arise, gently return your attention to the mantra.",
                    "Using Mala beads can help maintain focus and rhythm.",
                ],
                note: "Mantra helps to quiet the mind and invoke specific energies."
            },
            // Add more techniques like Walking Meditation, Body Scan, Loving-Kindness etc. later
        ]
    },
    conclusion: {
        title: "The Essence of Meditation",
        quote: "Meditation is not evasion; it is a serene encounter with reality.",
        text: "Through consistent practice, meditation unveils the inherent peace and wisdom within, the very essence symbolized by Mahadeva. It is a path to understanding the mind, transcending limitations, and realizing the boundless nature of consciousness."
    }
};


// Function to get meditation data
export const getMeditationData = (): MeditationData => {
  return meditationData;
};
