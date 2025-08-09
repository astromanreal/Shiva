

export interface Iconography {
  appearance: string;
  symbols: string[];
  weapons: string[];
  mount: string;
  direction?: string;
  element?: string;
}

export interface AssociatedDeity {
  name: string;
  relation: string;
}

export interface RudraMantra {
  name: string;
  text: string;
  translation: string;
  usage: string;
}

export interface TempleInfo {
  name: string;
  location: string;
  importance: string;
}

export interface FestivalInfo {
  name: string;
  significance: string;
}

export interface ExternalLink {
  title: string;
  url: string;
}

export interface MediaContent {
    url: string;
    caption: string;
}

export interface RudraStory {
    title: string;
    summary: string;
    source: string;
}

export interface Rudra {
  id: string;
  name: string;
  sanskritName?: string;
  alternativeNames?: string[];
  rank?: number;
  type: string;
  description: string;
  symbolism: string;
  originStory: {
    summary: string;
    sourceTexts: string[];
  };
  iconography: Iconography;
  associatedDeities: AssociatedDeity[];
  mantras: RudraMantra[];
  philosophicalSignificance: string;
  roleInCosmicFunctions: string[];
  relatedAvatars: AssociatedDeity[];
  storiesAndLegends: RudraStory[];
  worship: {
    temples: TempleInfo[];
    festivals: FestivalInfo[];
    rituals: string[];
  };
  media?: {
    images: MediaContent[];
    videos: MediaContent[];
    audio: MediaContent[];
  };
  tags: string[];
  externalLinks?: ExternalLink[];
  lastUpdated?: string;
  role: string; // From old structure, useful for list page
  powers: string[]; // From old structure, can be merged
  aiHint?: string;
  image?: string;
}


// Placeholder data matching the new detailed structure.
// This will be expanded later by the user.
export const rudrasData: Rudra[] = [
  {
    id: "kapali",
    name: "Kapali",
    sanskritName: "कपाली",
    alternativeNames: ["Skull-Bearer", "Kapaleshwara", "Kapaleshwaramurti"],
    rank: 1,
    type: "Ekadasha Rudra",
    description: "Kapali is the first of the Ekadasha Rudras — the eleven fierce manifestations of Lord Shiva. The name 'Kapali' literally means 'Skull-Bearer' and refers to Shiva's aspect as a renunciate who carries the skull of Brahma, symbolizing his role as the destroyer of ego, illusion, and even the creator itself. Kapali stands for the **limitless ascetic power of Shiva** who transcends creation, time, and societal norms.",
    symbolism: "Kapali symbolizes renunciation, destruction of false knowledge (Avidya), transcendence over the ego, and the wisdom that lies beyond duality. His skull represents the impermanence of life, the futility of pride, and the eternal presence of truth.",
    originStory: {
      summary: "When Brahma developed arrogance over his role as the Creator, a fifth head emerged on his body and began to speak falsehoods. Shiva, in his Kapali form, cut off this fifth head to remove the ego of creation. He then carried the skull (Kapala) as a beggar, wandering to atone for the act of Brahmahatya (killing of a creator) until purified.",
      sourceTexts: [
        "Shiva Purana – Vidyeshwara Samhita",
        "Skanda Purana",
        "Matsya Purana",
        "Linga Purana",
        "Vayu Purana"
      ]
    },
    iconography: {
      appearance: "Kapali is depicted as a fierce ascetic with matted locks (jata), ash-smeared body, and wearing garlands of skulls (mundamala). He holds a begging bowl made from a skull (kapala), a trident (trishula), and sometimes a staff (khattvanga). His eyes are wide with fire, and his third eye is open.",
      symbols: ["Skull (Kapala)", "Fire", "Trident", "Ash", "Third Eye"],
      weapons: ["Trident (Trishula)", "Kapala Danda", "Flaming eyes"],
      mount: "None (wandering ascetic)",
      direction: "South",
      element: "Akasha (Space)"
    },
    associatedDeities: [
      {
        name: "Mahakali",
        relation: "His feminine counterpart in wrathful energy and cremation symbolism."
      },
      {
        name: "Bhairavi",
        relation: "Partner in fierce forms; both dwell in the cremation grounds."
      },
      {
        name: "Brahma",
        relation: "Kapali severed Brahma’s fifth head to end his ego — symbolizing correction of false pride."
      }
    ],
    mantras: [
      {
        name: "Kapali Rudra Mantra",
        text: "ॐ कपालिने नमः",
        translation: "Om, salutations to Kapali, the bearer of the skull.",
        usage: "Used for inner renunciation, spiritual detachment, and overcoming ego."
      },
      {
        name: "Kapaleshwara Gayatri",
        text: "ॐ कपालेश्वराय विद्महे श्मशानवासी धीमहि। तन्नः रुद्रः प्रचोदयात्॥",
        translation: "We meditate on Kapaleshwara, the Lord of skulls who resides in cremation grounds; may that Rudra inspire us.",
        usage: "For invoking fierce, protective, and transcendent energies."
      }
    ],
    philosophicalSignificance: "Kapali reveals the impermanence of material existence and the need to transcend ego and false knowledge. In Shaiva Siddhanta and Advaita, Kapali is the destroyer of 'Ajnana' (ignorance) and is symbolic of the disintegration of the individual 'I' into the universal Self. He walks beyond karma, caste, class, or social duty — embodying **total spiritual liberation**.",
    roleInCosmicFunctions: [
      "Dissolution (Pralaya)",
      "Transcendence of Ego",
      "Destruction of Falsehood",
      "Guardianship of Aghora and Tantra",
      "Guide for the Yogis and Renunciates"
    ],
    relatedAvatars: [
      {
        name: "Bhairava",
        relation: "Kapali and Bhairava are both fierce, cremation-ground dwellers who destroy ignorance and protect seekers."
      },
      {
        name: "Dakshinamurti",
        relation: "Kapali destroys false knowledge; Dakshinamurti installs true wisdom."
      },
      {
        name: "Aghora",
        relation: "Aghora is a Rudra-tattva of Kapali’s essence — fearless, death-transcending, compassionately wrathful."
      }
    ],
    storiesAndLegends: [
      {
        title: "Kapali and the Curse of Brahmahatya",
        summary: "After beheading Brahma’s fifth head, Kapali was cursed with Brahmahatya dosha. He wandered the world as a Bhikshatana (divine beggar), finally redeemed when Vishnu received his offering and purified him.",
        source: "Shiva Purana – Vidyeshwara Samhita"
      },
      {
        title: "Kapali in Kashi",
        summary: "In Kashi, Kapali is worshiped near the cremation grounds as the purifier of sins. He grants liberation (moksha) to those who truly renounce ego.",
        source: "Kashi Khand – Skanda Purana"
      }
    ],
    worship: {
      temples: [
        {
          name: "Kapaleeshwarar Temple",
          location: "Mylapore, Chennai",
          importance: "One of the most sacred temples dedicated to Kapali form; associated with Parvati worship as Karpagambal."
        },
        {
          name: "Kapal Mochan",
          location: "Yamunanagar, Haryana",
          importance: "Believed to be where Shiva was freed from Brahmahatya; site of Kapali purification."
        }
      ],
      festivals: [
        {
          name: "Mahashivaratri",
          significance: "Kapali is invoked through midnight vigils and ash-worship; especially important in cremation ground sadhanas."
        },
        {
          name: "Kapali Brahmotsavam",
          significance: "Celebrated at Mylapore; special procession and offerings to Kapali and Parvati."
        }
      ],
      rituals: [
        "Rudrabhisheka with ash and water",
        "Chanting of Sri Rudram",
        "Offerings of bael leaves and black sesame",
        "Silent meditation on death and truth"
      ]
    },
    media: {
      images: [],
      videos: [],
      audio: []
    },
    tags: [
      "Ekadasha Rudra",
      "Kapali",
      "Skull-Bearer",
      "Shaivism",
      "Fierce Forms of Shiva",
      "Kapalika Tradition",
      "Tantra",
      "Cremation Ground Sadhana"
    ],
    externalLinks: [
      {
        title: "Kapali in Puranas",
        url: "https://www.wisdomlib.org/definition/kapali"
      },
      {
        title: "Kapaleeshwarar Temple – Official Site",
        url: "https://www.kapaleeswarartemple.com/"
      }
    ],
    lastUpdated: "2025-07-16",
    role: "The Skull-Bearer",
    powers: ["Destruction of Ego", "Mastery over Time & Death", "Fierce Protection", "Supreme Detachment"],
    image: "https://i.pinimg.com/736x/b8/31/6e/b8316e761ccad627c50f4f3a6a97b368.jpg",
    aiHint: "fierce shiva rudra skull kapala detachment kashi bhairava ascetic",
  },
  {
    id: "pingala",
    name: "Pingala",
    sanskritName: "पिङ्गल",
    alternativeNames: ["Pingalaksha", "Pingaleshwar", "Surya-Rudra"],
    rank: 2,
    type: "Ekadasha Rudra",
    description: "Pingala is the second of the eleven Rudras — representing the **fiery, tawny, solar aspect** of Lord Shiva. The name 'Pingala' refers to a **reddish-brown or golden hue**, symbolizing brilliance, tapas (austerity), and the burning away of karmas. This Rudra governs the **vital breath (Prana)** and the **Pingala Nadi** in yogic philosophy, which corresponds to the **Sun channel** flowing on the right side of the body.",
    symbolism: "Pingala signifies **purifying fire, life force, karmic energy, and righteous discipline**. He stands for **transformation through tapas**, and the controlled flame that burns ignorance, fueling awakening and vitality.",
    originStory: {
        summary: "Pingala emerged from the right eye of Rudra during the act of cosmic wrath. As fire incarnate, he was tasked with **energizing life**, **burning impurities**, and **activating karma**. In yogic lore, he represents the Pingala Nadi — the solar energy channel that governs outward action, logic, and strength.",
        sourceTexts: [
            "Shiva Purana – Rudra Samhita",
            "Vayu Purana – Ekadasha Rudra Chapter",
            "Yajurveda – Sri Rudram",
            "Yoga Tattva Upanishad – Pranic Nadis"
        ]
    },
    iconography: {
        appearance: "Pingala is depicted with a glowing golden or tawny complexion, eyes like burning embers, and a radiant halo. He wears tiger skin and is surrounded by golden flames. His hands hold a chakra (solar disc), sword, and staff of fire.",
        symbols: ["Sun disc", "Flames", "Golden Aura", "Tiger skin", "Staff of energy"],
        weapons: ["Flaming sword", "Solar chakra", "Agni danda (staff of fire)"],
        mount: "Golden chariot or lion",
        direction: "East",
        element: "Fire (Agni)"
    },
    associatedDeities: [
        {
            name: "Surya (Sun God)",
            relation: "Pingala reflects solar qualities — brilliance, discipline, and life-giving energy."
        },
        {
            name: "Agni",
            relation: "As the fire deity, Agni symbolizes the same purifying power embodied by Pingala."
        },
        {
            name: "Shakti (as Kundalini)",
            relation: "Pingala Nadi activates outward Shakti and balances ida-pingala flows in yoga."
        }
    ],
    mantras: [
        {
            name: "Pingala Rudra Mantra",
            text: "ॐ पिङ्गलाय नमः",
            translation: "Om, salutations to Pingala, the tawny one of burning energy.",
            usage: "Chanted to energize life, purify karma, and kindle inner strength."
        },
        {
            name: "Pingala Surya Gayatri",
            text: "ॐ पिङ्गलाय विद्महे ज्वालामुखाय धीमहि। तन्नो रुद्रः प्रचोदयात्॥",
            translation: "We meditate on Pingala, the radiant flame-faced Rudra; may he inspire and energize us.",
            usage: "For invoking solar energy and vitality."
        }
    ],
    philosophicalSignificance: "Pingala represents the **discipline of yogic fire**, the **outward-moving energy (Rajas)**, and the **inner sun** that sustains life. In Tantra and Yoga, he governs the **Pingala Nadi**, associated with masculine, solar, and logical faculties. Spiritually, Pingala teaches the value of **purification through controlled intensity** — not destructive fire, but the fire of yoga, service, and dharma.",
    roleInCosmicFunctions: [
        "Vitality and Energy Circulation",
        "Solar Regulation",
        "Karmic Activation",
        "Purification through Austerity",
        "Outward Strength and Logic"
    ],
    relatedAvatars: [
        {
            name: "Surya Narayana",
            relation: "Pingala and Surya both represent divine illumination and action."
        },
        {
            name: "Virabhadra",
            relation: "Pingala’s energy is channeled in the warrior rage of Virabhadra."
        },
        {
            name: "Skanda (Kartikeya)",
            relation: "Born of Shiva’s fiery seed — an embodiment of Pingala-like martial brilliance."
        }
    ],
    storiesAndLegends: [
        {
            title: "Pingala and the Demons of Sloth",
            summary: "When tamasic forces began to cloud human minds, Shiva released Pingala to burn away inertia and instill tapas. The world regained vigor and moral clarity.",
            source: "Skanda Purana – Rudra Manifestation Stories"
        },
        {
            title: "Pingala’s Blessing to a Yogi",
            summary: "A sincere yogi, failing to raise kundalini, prayed to Rudra. Pingala appeared in a vision and unblocked his Nadi system, igniting spiritual fire and awakening.",
            source: "Yoga folklore of the Nath Sampradaya"
        }
    ],
    worship: {
        temples: [
            {
                name: "Pingaleshwar Mahadev Temple",
                location: "Kutch, Gujarat",
                importance: "Believed to be a sacred site where Shiva appeared as Pingala to protect the region from tamas and drought."
            },
            {
                name: "Surya Narayan Temple (Konark)",
                location: "Odisha",
                importance: "Though dedicated to Surya, tantric traditions associate Pingala Rudra as the fiery Shaiva guardian of solar temples."
            }
        ],
        festivals: [
            {
                name: "Makar Sankranti",
                significance: "Sun’s transition — celebrated as an energetic shift; devotees invoke Pingala for blessings of light and vitality."
            },
            {
                name: "Ratha Saptami",
                significance: "Solar festivity — Pingala is honored in inner rituals of yogis and tantrics."
            }
        ],
        rituals: [
            "Surya Arghya (Sunwater offering)",
            "Pingala Mantra Japam",
            "Austerities (Tapasya)",
            "Pranayama focusing on Pingala Nadi"
        ]
    },
    media: {
        images: [],
        videos: [],
        audio: []
    },
    tags: [
        "Ekadasha Rudra",
        "Pingala",
        "Solar Energy",
        "Shaivism",
        "Yoga",
        "Tantra",
        "Kundalini",
        "Pranayama",
        "Vitality"
    ],
    externalLinks: [
      {
        title: "Pingala Nadi in Yoga",
        url: "https://www.wisdomlib.org/definition/pingala-nadi"
      },
      {
        title: "Ekadasha Rudras – Complete Reference",
        url: "https://www.wisdomlib.org/hinduism/book/the-shiva-purana/d/doc365654.html"
      }
    ],
    lastUpdated: "2025-07-16",
    role: "The Tawny/Golden-Brown One (Solar Energy)",
    powers: ["Vitality & Life Force (Prana)", "Action & Dynamism", "Solar Energy & Heat", "Metabolism Control"],
    image: "https://i.pinimg.com/736x/00/2f/c9/002fc9bd15f10c319b9b9dde32296e7a.jpg",
    aiHint: "shiva rudra sun solar energy pingala nadi vitality action fire prana",
  },
  {
    id: "bhima",
    name: "Bhima",
    sanskritName: "भीम",
    alternativeNames: ["Bhimarudra", "Bhimeshwar", "Bhayanaka Murti", "Ugra Bhima"],
    rank: 3,
    type: "Ekadasha Rudra",
    description: "Bhima is the third Rudra among the Ekadasha Rudras of Shiva — a manifestation of **tremendous force**, **overwhelming presence**, and **unshakable power**. His name itself means 'terrible' or 'formidable', denoting his capacity to **destroy adharma, uproot chaos, and shatter illusions**. Bhima embodies **Ugra Tattva** — the terrifying form of truth that annihilates ignorance and ego without hesitation.",
    symbolism: "Bhima represents **divine ferocity, righteous destruction, supreme valor**, and **absolute fearlessness**. His presence dissolves doubt and delusion, empowering spiritual warriors to face inner and outer demons.",
    originStory: {
        summary: "Bhima emerged from the **middle brow of Rudra**, born at a time when **Asuras (demons)** had grown invincible through false boons and illusions. He appeared as a dark, thundering force that shook even the Devas. With a single roar, he scattered legions of evil beings, restoring balance. He is the destroyer of excessive pride, injustice, and demonic arrogance.",
        sourceTexts: [
            "Shiva Purana – Rudra Samhita",
            "Vayu Purana – Ekadasha Rudra Section",
            "Mahabharata – Shanti Parva (allusion)",
            "Skanda Purana"
        ]
    },
    iconography: {
        appearance: "Bhima is depicted as towering, dark-blue or smoky-grey in color, with **fiery eyes**, **flaming hair**, and an aura of thunderclouds. He has four to ten arms, each holding massive weapons like maces, axes, and thunderbolts. His roar is said to shake the worlds. Flames and storms whirl around him.",
        symbols: ["Mace", "Thunderbolt", "Axe", "Storm clouds", "Flames"],
        weapons: ["Gada (mace)", "Parashu (axe)", "Vajra (thunderbolt)", "Sword of Destruction"],
        mount: "Elephant or Wild Bull",
        direction: "North-East",
        element: "Air + Fire"
    },
    associatedDeities: [
        {
            name: "Bhadrakali",
            relation: "Partner in cosmic destruction during times of adharma. Together, they annihilate egoistic forces."
        },
        {
            name: "Indra",
            relation: "Bhima channels Vajra-like thunder energy, sometimes surpassing Indra’s power."
        },
        {
            name: "Bhairava",
            relation: "Bhima is often considered an ugra precursor to Bhairava's tantric form."
        }
    ],
    mantras: [
        {
            name: "Bhima Rudra Mantra",
            text: "ॐ भीमाय नमः",
            translation: "Om, salutations to Bhima, the terrible one.",
            usage: "Invoked for strength in battles (inner/outer), destruction of fear, and courage to face truth."
        },
        {
            name: "Bhimeshwar Gayatri",
            text: "ॐ भीमाय विद्महे कालरूपाय धीमहि। तन्नो रुद्रः प्रचोदयात्॥",
            translation: "We meditate on Bhima, the time-form of Rudra; may that fierce one awaken us.",
            usage: "To invoke immense strength and overcome great obstacles."
        }
    ],
    philosophicalSignificance: "Bhima is the **force of fearless dissolution** — the inner storm that clears obstacles to realization. Philosophically, he reveals that **destruction is not cruelty**, but the **removal of ignorance**, falsehood, and decay. In yogic terms, Bhima corresponds to the **kundalini surge breaking blockages**. In Vedanta, he is the reality that **destroys illusion and ego** through direct intensity.",
    roleInCosmicFunctions: [
        "Destruction of Adharma",
        "Dissolution of Fear",
        "Channeling Ugra Energy",
        "Protection through Ferocity",
        "Empowering Divine Justice"
    ],
    relatedAvatars: [
        {
            name: "Veerabhadra",
            relation: "Both represent fierce divine warriors; Bhima is the older, primal energy."
        },
        {
            name: "Narasingha Bhairava",
            relation: "A Bhairava form showing similar wrathful compassion as Bhima."
        },
        {
            name: "Hanuman",
            relation: "Shares the strength, fearlessness, and unwavering dharma of Bhima Rudra."
        }
    ],
    storiesAndLegends: [
        {
            title: "Bhima and the City of Illusion",
            summary: "A city built by Asuras using Maya deluded even the gods. Bhima entered the city, shattered every illusion, and destroyed the demons within — teaching that only **truth stands unshaken before the storm of Rudra.**",
            source: "Skanda Purana – Ugra Rudra Khand"
        },
        {
            title: "Bhima in the Battle of Cosmic Dharma",
            summary: "In the great battle when Yugas transitioned, Bhima appeared to **purge the universe** of accumulated Adharma and grant a clean slate to Satya Yuga.",
            source: "Vayu Purana – Rudra Descent Verses"
        }
    ],
    worship: {
        temples: [
            {
                name: "Bhimeshwar Temple",
                location: "Bhimashankar, Maharashtra",
                importance: "One of the 12 Jyotirlingas — believed to be where Bhima Rudra appeared to destroy a demon and bless sages."
            },
            {
                name: "Bheemalingeswara Swamy Temple",
                location: "East Godavari, Andhra Pradesh",
                importance: "Ancient Shaiva site — worships the fierce aspect of Shiva as Bhima."
            }
        ],
        festivals: [
            {
                name: "Mahashivaratri",
                significance: "Ugra worship is performed invoking Bhima Rudra for fearlessness and dharmic strength."
            },
            {
                name: "Bhimashankar Utsav",
                significance: "Annual festival where Bhima Rudra’s stories are recited and fierce rituals performed."
            }
        ],
        rituals: [
            "Offerings of red sandal, honey, and strong incense",
            "Rudrabhisheka with fire chants",
            "Mantra japam with fierce invocations",
            "Silent meditation invoking inner fearlessness"
        ]
    },
    media: {
        images: [],
        videos: [],
        audio: []
    },
    tags: [
        "Ekadasha Rudra",
        "Bhima",
        "Ugra Shiva",
        "Fierce Aspect",
        "Shaivism",
        "Warrior Energy",
        "Karma Destruction",
        "Bhimashankar"
    ],
    externalLinks: [
        {
            title: "Bhima Rudra – Wisdomlib Definition",
            url: "https://www.wisdomlib.org/definition/bhima"
        },
        {
            title: "Bhimashankar Jyotirlinga",
            url: "https://en.wikipedia.org/wiki/Bhimashankar_Temple"
        }
    ],
    lastUpdated: "2025-07-16",
    role: "The Formidable/Terrible One",
    powers: ["Immense Strength & Power", "Destruction of Evil", "Awe-Inspiring Presence", "Protection Against Great Threats"],
    image: "https://i.pinimg.com/736x/5a/dd/82/5add8209f93860a0d4c808149e3b744d.jpg",
    aiHint: "shiva rudra formidable strength terrible awesome power destruction apana",
  },
  {
    id: "virupaksha",
    name: "Virupaksha",
    sanskritName: "विरूपाक्ष",
    alternativeNames: ["Trinetra", "Virupa Netra", "Virupaksheshwara"],
    rank: 4,
    type: "Ekadasha Rudra",
    description: "Virupaksha is the fourth of the Ekadasha Rudras of Shiva, known as the 'One with Strange or Uneven Eyes'. This form represents Shiva’s **all-seeing awareness**, particularly the **third eye (Trinetra)** that perceives truth beyond form and illusion. He is the cosmic observer, the silent witness of all time, events, and karma — neutral, unshakable, yet capable of consuming everything in a glance.",
    symbolism: "Virupaksha symbolizes **divine insight**, the **power of intuitive perception**, and the ability to **see beyond maya (illusion)**. His dissimilar eyes represent the duality of the material world and the third eye denotes transcendental wisdom. He watches over all beings without attachment, like an eternal guardian of cosmic truth.",
    originStory: {
        summary: "When devas and sages requested a Rudra who could **oversee the karmic actions** of all beings across time, Shiva manifested as Virupaksha — the all-seeing Rudra with dissimilar eyes. He was tasked with maintaining the **balance between karma and divine intervention**, ensuring the impartial flow of cosmic justice. It is said that his mere gaze can burn away falsehood and ignorance.",
        sourceTexts: [
            "Shiva Purana – Rudra Samhita",
            "Skanda Purana – Kashi Khanda",
            "Mahabharata – Moksha Dharma",
            "Yajurveda – Rudra Adhyaya"
        ]
    },
    iconography: {
        appearance: "Virupaksha is shown with **three eyes** — two regular and one vertical eye on the forehead radiating light or fire. His complexion ranges from **smoky grey to deep blue**, his body adorned with snakes and ash. He holds a **mirror (symbol of reflection)**, **rosary**, and **trident**, and is often seated in meditation or blessing pose.",
        symbols: ["Third Eye", "Mirror", "Snakes", "Ash", "Damaru"],
        weapons: ["Trishula", "Gaze of Fire (Third Eye)", "Danda"],
        mount: "Tiger or Lion (symbolizing insight and strength)",
        direction: "West",
        element: "Akasha (Space) and Light"
    },
    associatedDeities: [
        {
            name: "Durga (as Mahavidya Tripura Sundari)",
            relation: "Represents divine vision and balance, often paired with Virupaksha in esoteric Shaiva-Shakta traditions."
        },
        {
            name: "Chitragupta",
            relation: "As the recorder of karma, Chitragupta works under Virupaksha’s divine gaze."
        },
        {
            name: "Dakshinamurti",
            relation: "The silent teacher form of Shiva, teaching through inner vision — related closely to Virupaksha’s insight."
        }
    ],
    mantras: [
        {
            name: "Virupaksha Rudra Mantra",
            text: "ॐ विरूपाक्षाय नमः",
            translation: "Om, salutations to Virupaksha, the all-seeing One.",
            usage: "Chanted to awaken inner clarity, perception, and protection from illusion."
        },
        {
            name: "Virupaksha Dhyana Mantra",
            text: "ॐ त्रिनेत्राय विद्महे विरूपाक्षाय धीमहि। तन्नो रुद्रः प्रचोदयात्॥",
            translation: "We meditate on the Three-Eyed One, Virupaksha; may that Rudra guide our vision.",
            usage: "For enhancing inner wisdom and perception."
        }
    ],
    philosophicalSignificance: "Virupaksha is the **inner witness (Sakshi)** of Vedanta, representing the **Atman** who sees all but is unaffected. His third eye symbolizes **Jnana (knowledge)**, **Vairagya (detachment)**, and **direct perception of Brahman**. In Shaiva Yoga, he is the one who **burns ignorance through inner vision**, reminding the seeker to see beyond surface dualities.",
    roleInCosmicFunctions: [
        "Cosmic Surveillance",
        "Burning of Ignorance",
        "Karmic Balance",
        "Third-Eye Activation",
        "Wisdom and Insight"
    ],
    relatedAvatars: [
        {
            name: "Dakshinamurti",
            relation: "Teacher of silent knowledge — the awakened form of inner seeing."
        },
        {
            name: "Ardhanarishvara",
            relation: "As the seer of unity in duality, Virupaksha complements the idea of balance in Ardhanarishvara."
        },
        {
            name: "Kalagni Rudra",
            relation: "Shares the inner fire and power of destruction via perception."
        }
    ],
    storiesAndLegends: [
        {
            title: "Virupaksha and the Deceiver Sage",
            summary: "A sage misled kings and people by false predictions. Virupaksha appeared in a vision and exposed the illusion, teaching that **true vision lies beyond sensory perception**.",
            source: "Shaiva Kathas – Oral tradition"
        },
        {
            title: "Virupaksha's Eye Burns a Demon",
            summary: "When a demon disguised himself and tried to trick Parvati, Shiva opened his third eye and burned him to ash instantly — showing that **truth sees through all forms.**",
            source: "Skanda Purana – Uma Samhita"
        }
    ],
    worship: {
        temples: [
            {
                name: "Virupaksha Temple",
                location: "Hampi, Karnataka",
                importance: "One of the most ancient and sacred Shiva temples in India; the deity is worshiped as Virupaksha, the all-seeing Rudra."
            },
            {
                name: "Virupa Linga Shrine",
                location: "Kashi (Varanasi), Uttar Pradesh",
                importance: "A subtle linga in the inner sanctum of Kashi Vishwanath, associated with Virupaksha’s invisible sight."
            }
        ],
        festivals: [
            {
                name: "Maha Shivaratri",
                significance: "Virupaksha is invoked during midnight meditations to awaken inner seeing and burn past karma."
            },
            {
                name: "Guru Purnima",
                significance: "Virupaksha is honored as the silent guide (Antar Guru) who bestows inner light."
            }
        ],
        rituals: [
            "Trataka (gazing meditation on Shiva’s eye)",
            "Abhisheka with camphor and bilva leaves",
            "Chanting of Sri Rudram with third-eye focus",
            "Meditation on the Ajna Chakra (third eye center)"
        ]
    },
    media: {
        images: [],
        videos: [],
        audio: []
    },
    tags: [
        "Ekadasha Rudra",
        "Virupaksha",
        "Third Eye",
        "Shaivism",
        "Witness Consciousness",
        "Wisdom",
        "Trinetra",
        "Karma Watcher"
    ],
    externalLinks: [
        {
            title: "Virupaksha – Meaning and Significance",
            url: "https://www.wisdomlib.org/definition/virupaksha"
        },
        {
            title: "Virupaksha Temple, Hampi",
            url: "https://en.wikipedia.org/wiki/Virupaksha_Temple,_Hampi"
        }
    ],
    lastUpdated: "2025-07-16",
    role: "The Odd-Eyed/Unconventional-Eyed One",
    powers: ["Higher Perception & Insight (Third Eye)", "Transcendental Wisdom (Jnana)", "Destruction of Ignorance & Illusion", "Omniscience"],
    image: "https://i.pinimg.com/736x/ab/ae/31/abae31412b1035ac07ec15fd3f9a0ba0.jpg",
    aiHint: "shiva rudra third eye wisdom perception insight ajna chakra udana",
  },
  {
    id: "vilohita",
    name: "Vilohita",
    sanskritName: "विलोहित",
    alternativeNames: ["Rakta-Rudra", "Lohitaksha", "Lalateshwar"],
    rank: 5,
    type: "Ekadasha Rudra",
    description: "Vilohita is the fifth of the Ekadasha Rudras, the eleven fierce manifestations of Lord Shiva. His name means 'red-hued' or 'blood-colored', signifying the **fiery intensity of divine transformation, fierce compassion, inner sacrifice, and raw ascetic energy**. Vilohita is the embodiment of the sacred blood — not violence, but the **life-force** and **sacrificial fire** that purifies, dissolves ignorance, and renews cosmic harmony.",
    symbolism: "Vilohita represents **the red of transformation, penance, love, and inner burning**. He is the Rudra of **inner alchemy** — where blood, fire, and willpower are merged to transmute the ego into light. His reddish form reflects both **destructive passion** and **divine sacrifice**.",
    originStory: {
      summary: "When the world was steeped in tamas (dark inertia) and beings had forgotten self-sacrifice, Shiva created Vilohita from his own blood mixed with Agni (fire). As a red-hued, fiery ascetic, he descended to ignite **tapasya (austerity)** and awaken **sacred self-offering**. He taught rishis that true blood-offering is the sacrifice of ego, not violence.",
      sourceTexts: [
        "Shiva Purana – Rudra Samhita",
        "Vayu Purana – Ekadasha Rudra Section",
        "Mahabharata – Shanti Parva",
        "Skanda Purana – Kriya Yogic passages"
      ]
    },
    iconography: {
      appearance: "Vilohita is portrayed with a **deep red or blood-hued complexion**, clad in red bark garments or smeared with red sandal paste and sacred ash. His eyes glow crimson like rising fire. He holds **a blood-red trident**, **kapala (skull bowl)**, and a **rosary of red seeds**. Often seated in deep tapas (meditative penance), surrounded by an aura of flames.",
      symbols: ["Blood-red aura", "Trident", "Skull bowl", "Rosary of Rudraksha or red seeds"],
      weapons: ["Trishula (red trident)", "Kapala (skull bowl)", "Fire staff"],
      mount: "Owl or Deer",
      direction: "South-East",
      element: "Blood + Fire (Agni)"
    },
    associatedDeities: [
      {
        name: "Chandeshwar",
        relation: "Both reflect fierce devotion and sacred rage turned toward dharma."
      },
      {
        name: "Agni",
        relation: "Vilohita embodies inner fire and sacred offering."
      },
      {
        name: "Kali",
        relation: "Both represent red-shakti — transformative power and transcendence beyond form."
      }
    ],
    mantras: [
      {
        name: "Vilohita Rudra Mantra",
        text: "ॐ विलोहिताय नमः",
        translation: "Om, salutations to Vilohita, the red-hued Rudra.",
        usage: "Used to invoke inner courage, purification of karmic patterns, and dedication to spiritual fire."
      },
      {
        name: "Vilohita Tapasya Gayatri",
        text: "ॐ रक्तवर्णाय विद्महे अग्निनेत्राय धीमहि। तन्नो रुद्रः प्रचोदयात्॥",
        translation: "We meditate on the red-colored One, the fire-eyed Rudra. May he inspire us toward divine self-offering.",
        usage: ""
      }
    ],
    philosophicalSignificance: "Vilohita represents the **alchemical transformation of the soul** through the fire of discipline, devotion, and ego-sacrifice. Philosophically, he aligns with **Jnana Yoga (path of wisdom)** and **Tapas (spiritual heat)**. His blood-red symbolism is **not about violence**, but the **intensity needed to dissolve illusion** and awaken higher consciousness.",
    roleInCosmicFunctions: [
      "Alchemical Purification",
      "Ignition of Tapasya (Austerity)",
      "Transformation of Ego",
      "Catalyzing Sacrificial Awareness",
      "Burning away Past Karmas"
    ],
    relatedAvatars: [
      {
        name: "Bhairava",
        relation: "Shares the skull symbolism and burning gaze of inner transformation."
      },
      {
        name: "Kapali",
        relation: "Vilohita often appears with Kapali in tantric texts — one bearing blood, one bearing skulls."
      },
      {
        name: "Virabhadra",
        relation: "Both have fiery rage, but Vilohita is the more silent, internalized form."
      }
    ],
    storiesAndLegends: [
      {
        title: "Vilohita and the Bloodless Yajna",
        summary: "When people began offering animal blood in yajnas, Shiva appeared as Vilohita and stopped the ritual, teaching that **the true offering is one’s inner ego and desires**, not flesh.",
        source: "Skanda Purana – Shaiva Kriya Section"
      },
      {
        title: "Vilohita Burns the Dark Cloud",
        summary: "When a sentient dark fog of ignorance blanketed sages, Vilohita meditated and his third-eye fire burned the cloud. Knowledge dawned once more.",
        source: "Yoga Shaiva Traditions – Siddha Legends"
      }
    ],
    worship: {
      temples: [
        {
          name: "Vilohiteshwar Mahadev Mandir",
          location: "Ujjain, Madhya Pradesh (symbolic shrine)",
          importance: "Said to host a fire-yajna every full moon in honor of Vilohita’s tapas. Rituals include red turmeric, camphor, and silent meditation."
        },
        {
          name: "Lohiteshwara Linga Shrine",
          location: "Varanasi (Kashi)",
          importance: "Ancient underground Shaiva linga believed to hold the fire of Vilohita Rudra."
        }
      ],
      festivals: [
        {
          name: "Karthika Deepam",
          significance: "Festival of inner fire — ascetics invoke Vilohita to awaken tapas and burn old karma."
        },
        {
          name: "Chaitra Navratri (Day 5)",
          significance: "Tantrics meditate on Vilohita for inner purification through heat and discipline."
        }
      ],
      rituals: [
        "Lighting red deepas (lamps) with ghee and kumkum",
        "Chanting with Rudraksha rosary soaked in rose water",
        "Silent fasting tapas with focus on Muladhara Chakra",
        "Offering red sandal, vermilion, and red flowers"
      ]
    },
    media: {
      images: [],
      videos: [],
      audio: []
    },
    tags: [
      "Ekadasha Rudra",
      "Vilohita",
      "Red Flame",
      "Tapas",
      "Shaivism",
      "Karma Purification",
      "Sacrifice",
      "Inner Fire"
    ],
    externalLinks: [
      {
        title: "Vilohita Rudra – Wisdomlib",
        url: "https://www.wisdomlib.org/definition/vilohita"
      },
      {
        title: "Symbolism of Red-Hued Shiva",
        url: "https://www.dollsofindia.com/library/shiva/"
      }
    ],
    lastUpdated: "2025-07-16",
    role: "The Deep Red/Purple One",
    powers: ["Fiery Energy (Tejas)", "Transformation & Sacrifice", "Connection to Agni", "Dissolution Power", "Passion"],
    image: "https://i.pinimg.com/736x/56/aa/6f/56aa6f2d93b8f133419da6db23fa3153.jpg",
    aiHint: "shiva rudra red purple fire dawn dusk transformation agni samana",
  },
  {
    id: "shasta",
    name: "Shasta",
    sanskritName: "शास्ता",
    alternativeNames: ["Dharma Shasta", "Hariharasuta", "Manu Shasta", "Sastha"],
    rank: 6,
    type: "Ekadasha Rudra",
    description: "Shasta is the sixth of the Ekadasha Rudras of Lord Shiva — the **righteous instructor**, **disciplinarian**, and **divine protector of dharma**. He is both a guardian and a spiritual teacher who upholds cosmic law through wisdom, strength, and moral clarity. Shasta is revered as **a synthesis of Shiva’s commanding presence and Vishnu’s righteous compassion**, often manifested to restore balance in eras of moral decay.",
    symbolism: "Shasta symbolizes the **cosmic principle of righteous discipline (niyama)**, **law enforcement of karma**, and **benevolent authority**. As a divine enforcer, he commands respect not through fear, but through **virtuous authority, sacred guidance, and just protection** of the weak and virtuous.",
    originStory: {
      summary: "When the Devas were overwhelmed by Adharmic forces that broke the laws of cosmic order, Shiva manifested Shasta as a righteous warrior-sage to **re-establish discipline and moral clarity**. In many traditions, Shasta is also described as the **divine offspring of Shiva and Vishnu in Mohini form**, embodying both power and harmony.",
      sourceTexts: [
        "Skanda Purana – Shaiva Khanda",
        "Shiva Purana – Rudra Samhita",
        "Brahmanda Purana – Harihara Shakta tradition",
        "Ayyappan Mahatmya – South Indian Shaiva text"
      ]
    },
    iconography: {
      appearance: "Shasta is depicted as a **young, radiant warrior** or sage with a **gentle yet commanding presence**. He may be seen seated on a white tiger or horse, holding scriptures in one hand and weapons like a bow or sword in the other. Sometimes shown in yogic posture, his eyes shine with truth and moral certainty.",
      symbols: ["Scripture", "Bow and Arrow", "Sword", "Tiger", "White Horse"],
      weapons: ["Dhanush (Bow)", "Khadga (Sword)", "Danda (Staff of Dharma)"],
      mount: "White Horse or Tiger",
      direction: "South",
      element: "Earth + Ether (Prithvi + Akasha)"
    },
    associatedDeities: [
      {
        name: "Harihara (Shiva-Vishnu fusion)",
        relation: "Shasta embodies the balance of Shiva’s will and Vishnu’s compassion."
      },
      {
        name: "Ayyappa",
        relation: "Widely believed to be an incarnation of Shasta, especially in South India."
      },
      {
        name: "Manu",
        relation: "As the first law-giver in Hindu tradition, Manu is often guided by Shasta."
      }
    ],
    mantras: [
      {
        name: "Shasta Rudra Mantra",
        text: "ॐ शास्त्रे नमः",
        translation: "Om, salutations to Shasta, the divine instructor and law-giver.",
        usage: "Used for spiritual discipline, dharmic clarity, and righteous leadership."
      },
      {
        name: "Dharma Shasta Gayatri",
        text: "ॐ धर्मशास्त्राय विद्महे न्यायमूर्तये धीमहि। तन्नो रुद्रः प्रचोदयात्॥",
        translation: "We meditate upon Dharma Shasta, the embodiment of justice; may that Rudra guide us on the path of righteousness.",
        usage: ""
      }
    ],
    philosophicalSignificance: "Shasta represents **Niyama**, the internal discipline essential for liberation. In Vedantic terms, he is the **cosmic embodiment of Satya (truth), Nyaya (justice), and Dharma (law)**. He reveals that **true power is rooted in wisdom**, and **freedom is attained through self-discipline**. As a Rudra, he upholds moral order with compassion, not control.",
    roleInCosmicFunctions: [
      "Upholding Dharma",
      "Spiritual Instruction",
      "Moral Law Enforcement",
      "Karmic Supervision",
      "Protection of the Righteous"
    ],
    relatedAvatars: [
      {
        name: "Ayyappan",
        relation: "Regarded as a major avatar of Shasta in Kerala and Tamil traditions."
      },
      {
        name: "Dakshinamurti",
        relation: "While Dakshinamurti teaches through silence, Shasta instructs through action and law."
      },
      {
        name: "Bhagavan Manu",
        relation: "Works in tandem with Shasta to establish dharmic codes in each age."
      }
    ],
    storiesAndLegends: [
      {
        title: "Shasta and the Disobedient Yogi",
        summary: "A powerful yogi turned arrogant after gaining siddhis and began misleading others. Shasta appeared as a young teacher and gently dismantled the ego of the yogi, restoring humility and right practice.",
        source: "Skanda Purana – Shaiva Dharma tales"
      },
      {
        title: "Birth of Ayyappa as Shasta's Avatar",
        summary: "To vanquish Mahishi and restore peace among Devas, Shiva and Vishnu (as Mohini) created a radiant warrior-child — **Ayyappa**, the incarnation of Shasta, who combined fierce discipline with divine grace.",
        source: "Ayyappa Mahatmya – Southern Shaiva tradition"
      }
    ],
    worship: {
      temples: [
        {
          name: "Sabarimala Temple",
          location: "Kerala, India",
          importance: "Sacred temple of Ayyappa (Shasta) — one of the largest annual pilgrimage sites in the world. Pilgrims observe strict vratas to invoke Shasta’s blessings."
        },
        {
          name: "Hariharaputra Temple",
          location: "Tamil Nadu, Karnataka",
          importance: "Temples dedicated to Shasta in his combined Harihara form."
        }
      ],
      festivals: [
        {
          name: "Mandala Pooja & Makaravilakku",
          significance: "Sacred observances linked to Shasta's Ayyappa incarnation. Involves 41-day vratas (disciplines), barefoot pilgrimage, and community harmony."
        }
      ],
      rituals: [
        "Vrata (vow) observance with celibacy and simplicity",
        "Abhisheka with pure water, sandal, and tulsi",
        "Chanting of Shasta Gayatri",
        "Offering of jaggery-rice (aval) and ghee-lamps"
      ]
    },
    media: {
      images: [],
      videos: [],
      audio: []
    },
    tags: [
      "Ekadasha Rudra",
      "Shasta",
      "Ayyappan",
      "Dharma",
      "Shaivism",
      "Discipline",
      "Harihara",
      "Law and Justice"
    ],
    externalLinks: [
      {
        title: "Shasta – Definition and Significance",
        url: "https://www.wisdomlib.org/definition/shasta"
      },
      {
        title: "Sabarimala and Ayyappa Tradition",
        url: "https://en.wikipedia.org/wiki/Ayyappan"
      }
    ],
    lastUpdated: "2025-07-16",
    role: "The Teacher/Ruler/Commander",
    powers: ["Supreme Authority & Command", "Teaching & Imparting Wisdom", "Upholding Cosmic Law (Dharma)", "Leadership of Ganas/Forces"],
    image: "https://i.pinimg.com/736x/10/d0/d8/10d0d8f35f8504fd3698d9b77810e054.jpg",
    aiHint: "shiva rudra teacher commander ruler dharma authority ganas guru ishana",
  },
  {
    id: "ajapada",
    name: "Ajapada",
    sanskritName: "अजपाद",
    alternativeNames: ["Ajapa Rudra", "Nishchala", "The Silent Mover"],
    rank: 7,
    type: "Ekadasha Rudra",
    description: "Ajapada is the 7th of the Ekadasha Rudras, symbolizing **divine stillness within movement** and **transcendental breath**. His name implies 'the one who walks without feet' or 'the silent stepper'. Ajapada is the **inner presence of Shiva in every breath**, associated with the concept of **Ajapa Japa** — the spontaneous, natural repetition of the divine sound within all beings (So-Ham). He represents the **subtle spiritual force** that pervades the cosmos without action, yet supports all actions.",
    symbolism: "Ajapada stands for **effortless divine awareness**, **silent witnessing**, and **non-doing in doing** — the Yogic ideal of action without ego. He is the Rudra who pervades prana, yet remains untouched by it. He rules **Ajna Chakra** (Third Eye) and is present in the **natural flow of breath (So-Ham)**.",
    originStory: {
      summary: "In ancient times, when yogis lost connection with true inner awareness and became entangled in rituals and noise, Shiva manifested Ajapada — the Rudra of **silent inner mantra**, to guide them back to the path of stillness. He taught that **breath itself is worship**, and true Shiva is realized in the subtle 'So-Ham' that echoes through life.",
      sourceTexts: [
        "Shiva Purana – Rudra Samhita",
        "Yoga Vashistha",
        "Upanishads – Hamsa Upanishad, Tejobindu Upanishad",
        "Vayu Purana – Rudra section"
      ]
    },
    iconography: {
      appearance: "Ajapada is portrayed as a **silent, meditative ascetic**, with calm eyes closed or half-open. He may be depicted standing or floating above the ground, indicating 'motionlessness in movement'. He is wrapped in a white or light-blue aura, symbolizing breath, and often has a **swan (Hamsa)** near him. He carries no weapons but may hold a **water pot (kamandalu)**, **japa mala**, or **lotus of breath**.",
      symbols: ["Swan (Hamsa)", "Japa Mala", "Kamandalu", "Lotus", "Air"],
      weapons: ["None (Non-violence and presence are his power)"],
      mount: "Hamsa (Swan) – Symbol of the breath and soul",
      direction: "Upward (Akasha), representing inner ascent",
      element: "Vayu (Air / Prana)"
    },
    associatedDeities: [
      {
        name: "Dakshinamurti",
        relation: "Both teach through silence; Ajapada through breath, Dakshinamurti through stillness."
      },
      {
        name: "Hamsa",
        relation: "The swan represents the liberated soul; the mantra So-Ham is their shared essence."
      },
      {
        name: "Dattatreya",
        relation: "The wandering sage who internalized Ajapa Japa to attain realization."
      }
    ],
    mantras: [
      {
        name: "Ajapada Rudra Mantra",
        text: "ॐ अजपादाय नमः",
        translation: "Om, salutations to Ajapada, the One who moves without motion.",
        usage: "Chanted to calm the mind, deepen pranic awareness, and enter meditative silence."
      },
      {
        name: "Ajapa Gayatri",
        text: "ॐ सोऽहं विद्महे प्राणरूपाय धीमहि। तन्नः शिवः प्रचोदयात्॥",
        translation: "We meditate on the Self as So-Ham, the form of breath; may that Shiva awaken our inner flow.",
        usage: ""
      }
    ],
    philosophicalSignificance: "Ajapada represents the **Ajapa Japa — the unceasing inner repetition of the mantra 'So-Ham'** with every breath. In Vedanta, he embodies the **pure witness consciousness (Sakshi Chaitanya)**. In Yoga, he is the **control of Prana** and realization through breath-awareness. Ajapada's presence is felt in every inhalation and exhalation — the divine rhythm of life.",
    roleInCosmicFunctions: [
      "Regulator of Breath and Prana",
      "Guide of Inner Stillness",
      "Silent Watcher in all Actions",
      "Supporter of Meditation and Yoga",
      "Subtle Presence in all Beings"
    ],
    relatedAvatars: [
      {
        name: "Rishabha",
        relation: "Both signify inner detachment and quiet righteousness."
      },
      {
        name: "Sthanu",
        relation: "Another form of Shiva representing unmoving stillness."
      },
      {
        name: "Yogeshwar",
        relation: "Shiva as the Master of Yoga and breath control."
      }
    ],
    storiesAndLegends: [
      {
        title: "Ajapada Teaches the Silent Yogi",
        summary: "A prideful yogi who mastered external forms approached Shiva. Ajapada appeared and simply exhaled, filling the space with divine vibration. The yogi realized that **true mastery lies in the breath, not posture or control.**",
        source: "Tejobindu Upanishad"
      },
      {
        title: "The Swan That Speaks So-Ham",
        summary: "A sacred account speaks of a mystical swan in the Himalayas that repeats 'So-Ham' with every breath. It is said to be Ajapada himself in disguise, guiding seekers through pranic resonance.",
        source: "Hamsa Upanishad"
      }
    ],
    worship: {
      temples: [
        {
          name: "Ajapadalingeshwar Temple (symbolic)",
          location: "Near Gokarna, Karnataka (hidden yogic shrine)",
          importance: "A secluded meditation cave-shrine where breath-oriented sadhana is practiced."
        }
      ],
      festivals: [
        {
          name: "Pranayama Day",
          significance: "Day dedicated to inner breath practice; Ajapada is meditated upon for pranic awareness."
        },
        {
          name: "Maha Shivaratri (Midnight Prana Dharana)",
          significance: "Ajapada Rudra is invoked for deep inner stillness and So-Ham japa throughout the night."
        }
      ],
      rituals: [
        "So-Ham breath meditation",
        "Silent Pranayama with mantra",
        "Lighting of a wind-fed flame as symbol of breath",
        "Japa mala practice during sunrise and sunset"
      ]
    },
    media: {
      images: [],
      videos: [],
      audio: []
    },
    tags: [
      "Ekadasha Rudra",
      "Ajapada",
      "Breath Awareness",
      "Ajapa Japa",
      "Shaivism",
      "Prana",
      "Swan",
      "So-Ham",
      "Meditative Rudra"
    ],
    externalLinks: [
      {
        title: "Ajapada – The Breath Rudra",
        url: "https://www.wisdomlib.org/definition/ajapada"
      },
      {
        title: "Ajapa Japa and the Breath of Shiva",
        url: "https://www.yogapedia.com/definition/ajapa-japa"
      }
    ],
    lastUpdated: "2025-07-16",
    role: "The Unborn/One-Footed Goat (Cosmic Pillar)",
    powers: ["Cosmic Support & Stability", "Unmanifest Foundation", "Stillness & Non-Duality", "Transcendental Ground"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ekapada_shiva.jpg/500px-Ekapada_shiva.jpg",
    aiHint: "shiva rudra cosmic pillar axis unborn static support stability non-duality",
  },
  {
    id: "ahirbudhnya",
    name: "Ahirbudhnya",
    sanskritName: "अहिर्बुध्न्य",
    alternativeNames: ["Serpent of the Deep", "Nāga-Rudra", "Ananta-Rudra"],
    rank: 8,
    type: "Ekadasha Rudra",
    description: "Ahirbudhnya is the 8th of the Ekadasha Rudras, representing Shiva’s cosmic presence in the **deepest layers of existence — the subconscious, the abyssal, and the unseen**. His name combines 'Ahi' (serpent) and 'Budhnya' (foundation or depth), symbolizing the **coiled kundalini energy**, **the oceanic depths**, and the **mysteries of the underworld**. He is revered as the guardian of tantric secrets, protector of mystical knowledge, and the Rudra of transcendental transformation.",
    symbolism: "Ahirbudhnya symbolizes **Shiva as the primal serpent energy** resting at the base of the universe and within the human spine (Muladhara). He governs **kundalini shakti**, **mystical wisdom**, and **the secrets of time, space, and creation**. His presence awakens deep inner forces that lie dormant until consciously activated.",
    originStory: {
      summary: "When darkness veiled the world from within — through fear, forgetfulness, and ignorance of the Self — Shiva descended into the cosmic depths as Ahirbudhnya. In the form of an ancient cosmic serpent, he **awakened the sleeping universe** from its unconscious state and re-established the pathway between the subtle (yogic kundalini) and the transcendent.",
      sourceTexts: [
        "Ahirbudhnya Samhita (Pancharatra Agama)",
        "Shiva Purana – Rudra Samhita",
        "Mahabharata – Vana Parva",
        "Skanda Purana – Tantra sections"
      ]
    },
    iconography: {
      appearance: "Ahirbudhnya is portrayed as a **serpentine or naga-like form of Rudra**, with a hooded cobra crown and glowing blue or blackish complexion. His body coils like a cosmic spiral, radiating subtle power. His eyes are closed in deep trance or flash like lightning when active. He holds **a staff entwined with serpents**, **a lotus**, and **a mystic yantra**.",
      symbols: ["Serpent", "Lotus rising from water", "Coiled energy", "Yantra", "Blue ocean"],
      weapons: ["Serpent staff", "Trident with spiral design", "Disc of hidden fire"],
      mount: "Serpent (Nāga) or Makara (mythical aquatic being)",
      direction: "Downward (symbolic of inner descent to rise)",
      element: "Water + Ether (Apas + Akasha)"
    },
    associatedDeities: [
      {
        name: "Ananta Shesha",
        relation: "Both represent the infinite serpent of cosmic support."
      },
      {
        name: "Kundalini Shakti",
        relation: "Ahirbudhnya rules over the sleeping serpent energy within the spine."
      },
      {
        name: "Varuna",
        relation: "Both are deities of depth, hidden realms, and esoteric knowledge."
      }
    ],
    mantras: [
      {
        name: "Ahirbudhnya Rudra Mantra",
        text: "ॐ अहिर्बुध्न्याय नमः",
        translation: "Om, salutations to Ahirbudhnya, the Serpent of the Deep.",
        usage: "Chanted for awakening kundalini, clearing subconscious blocks, and accessing hidden wisdom."
      },
      {
        name: "Ahirbudhnya Gayatri",
        text: "ॐ नागबन्धाय विद्महे गूढतत्त्वाय धीमहि। तन्नो रुद्रः प्रचोदयात्॥",
        translation: "We meditate on the Serpent-Lord of hidden truths; may Rudra inspire our inner ascent.",
        usage: ""
      }
    ],
    philosophicalSignificance: "Ahirbudhnya reflects the **Tantric Yogic understanding** of reality — where transformation arises from confronting and embracing inner depths. He is the **guardian of the subconscious**, the **catalyst of kundalini awakening**, and the **bridge between unconscious primal forces and spiritual liberation**.",
    roleInCosmicFunctions: [
      "Custodian of Hidden Wisdom",
      "Awakener of Kundalini",
      "Protector of Secret Yogic Paths",
      "Guardian of the Abyss and Underworld Realms",
      "Balancer of Inner and Outer Worlds"
    ],
    relatedAvatars: [
      {
        name: "Kapali",
        relation: "Both embody esoteric power and skull-bearing mysticism."
      },
      {
        name: "Ajapada",
        relation: "Ajapada represents the breath of the subtle body, Ahirbudhnya the depth of the subtle energy itself."
      },
      {
        name: "Bhairava",
        relation: "Both fiercely protect secret knowledge and shatter egoic resistance."
      }
    ],
    storiesAndLegends: [
      {
        title: "The Serpent of Silence",
        summary: "A legend speaks of a time when the sages lost access to the Vedas' inner meanings. Ahirbudhnya emerged from the sea of silence, offered a yantra from the deep, and taught the path of inner listening.",
        source: "Ahirbudhnya Samhita"
      },
      {
        title: "The Coiling of the Universe",
        summary: "In a pre-creation stage, Shiva coiled himself as Ahirbudhnya to hold all potential energy. When he uncoiled, galaxies were birthed — hence he is called 'the Serpent of Origins'.",
        source: "Vayu Purana – Rudra Vrittanta"
      }
    ],
    worship: {
      temples: [
        {
          name: "Ahirbudhnya Mahadev Shrine",
          location: "Ujjain, Madhya Pradesh (symbolic tantric shrine)",
          importance: "Worshiped in tantric sects for awakening inner energy and serpent fire (kundalini)."
        },
        {
          name: "Nāga Shakti Peethas (Serpent Shrines)",
          location: "Kundalini centers of India",
          importance: "Ajna and Muladhara chakra-oriented temples dedicated to Ahirbudhnya energy."
        }
      ],
      festivals: [
        {
          name: "Nag Panchami",
          significance: "Dedicated to serpent energies — tantric followers honor Ahirbudhnya for awakening the base energies."
        },
        {
          name: "Shivaratri – Midnight Yoga",
          significance: "Practitioners invoke Ahirbudhnya at midnight through breath-holding and yantra meditation."
        }
      ],
      rituals: [
        "Yantra worship of the spiral energy (Shiva Chakra)",
        "Meditation on the rising kundalini through breath and mantra",
        "Offerings of milk, sesame, and ghee to serpent symbols",
        "Visualization of cosmic coil and descent into self"
      ]
    },
    media: {
      images: [],
      videos: [],
      audio: []
    },
    tags: [
      "Ekadasha Rudra",
      "Ahirbudhnya",
      "Kundalini",
      "Tantra",
      "Nāga",
      "Shaivism",
      "Deep Consciousness",
      "Mystical Energy",
      "Hidden Wisdom"
    ],
    externalLinks: [
      {
        title: "Ahirbudhnya Samhita – Full Text",
        url: "https://www.wisdomlib.org/hinduism/book/ahirbudhnya-samhita"
      },
      {
        title: "Kundalini and Shiva’s Serpent Aspect",
        url: "https://www.yogajournal.com/practice/kundalini-and-the-serpent/"
      }
    ],
    lastUpdated: "2025-07-16",
    role: "The Serpent of the Deep/Atmosphere",
    powers: ["Control over Deep Waters/Atmosphere", "Kundalini Shakti (Latent Energy)", "Connection to Subconscious", "Foundation Energy"],
    image: "https://anantgyan.co.in/wp-content/uploads/2023/02/rudra-avatars-f.jpg",
    aiHint: "shiva rudra serpent deep waters atmosphere base kundalini energy latent",
  },
  {
    id: "shambhu",
    name: "Shambhu",
    sanskritName: "शम्भु",
    alternativeNames: ["Shambhava", "Shambhunatha", "Shambhudeva"],
    rank: 9,
    type: "Ekadasha Rudra",
    description: "Shambhu is the 9th of the Ekadasha Rudras, representing the **most benevolent, bliss-bestowing, and auspicious aspect of Shiva**. The name 'Shambhu' is derived from 'Sham' (happiness, bliss, prosperity) and 'bhu' (to be or to cause). He is **the giver of peace and welfare**, the Rudra who shines not in fury but in **compassion, kindness, and grace**. He represents **Shiva as the cosmic benefactor**, protector of devotees, and healer of sorrows.",
    symbolism: "Shambhu embodies **inner contentment, auspiciousness, divine kindness, and blissful transcendence**. He is often invoked at the beginning and end of Vedic rituals as the source of blessings. He is the serene flame in the heart, the silence after storm, and the deep joy that emerges through surrender.",
    originStory: {
      summary: "As sages and beings became disheartened with the pain of life and harsh laws of karma, Shiva manifested Shambhu — the Rudra of auspicious peace — to **heal the world with compassion**, to **bless those in despair**, and to **uplift the righteous through unconditional love**. Unlike other Rudras who challenge and purify, Shambhu **gently elevates the soul with blissful awareness**.",
      sourceTexts: [
        "Shiva Purana – Rudra Samhita",
        "Linga Purana",
        "Vishnu Purana – Hymns to Shambhu",
        "Taittiriya Aranyaka – Shambhava Mantra"
      ]
    },
    iconography: {
      appearance: "Shambhu is portrayed as a **calm, smiling yogi** seated in **padmasana**, with **glowing white or golden aura**. His eyes are filled with compassion, and he radiates an aura of serenity and divine joy. He holds a **kamandalu (water pot)**, **rosary (japa mala)**, and often raises a hand in **abhaya mudra** (gesture of protection and peace). A crescent moon glows gently on his head.",
      symbols: ["Abhaya Mudra", "Crescent Moon", "Japa Mala", "Kamandalu", "Peaceful Aura"],
      weapons: ["None (His power is grace)"],
      mount: "Nandi (the calm, devoted bull)",
      direction: "Northeast (Ishanya)",
      element: "Akasha (Ether/Pure Space)"
    },
    associatedDeities: [
      {
        name: "Dakshinamurti",
        relation: "Both embody peaceful wisdom; Shambhu teaches through compassion, Dakshinamurti through silence."
      },
      {
        name: "Hari (Vishnu)",
        relation: "Shambhu and Vishnu are worshiped together as the sources of divine grace and preservation."
      },
      {
        name: "Uma / Parvati",
        relation: "As the consort of Shambhu, she complements his bliss with maternal compassion."
      }
    ],
    mantras: [
      {
        name: "Shambhu Rudra Mantra",
        text: "ॐ शम्भवे नमः",
        translation: "Om, salutations to Shambhu, the blissful and auspicious Lord.",
        usage: "Chanted for inner peace, overcoming sorrow, and invoking divine grace."
      },
      {
        name: "Shambhava Gayatri",
        text: "ॐ शम्भवे विद्महे शिवाय धीमहि। तन्नो रुद्रः प्रचोदयात्॥",
        translation: "We meditate on Shambhu, the blissful one; may that Rudra inspire us with divine peace.",
        usage: ""
      }
    ],
    philosophicalSignificance: "Shambhu represents **Ananda** (bliss), **Shubha** (auspiciousness), and **Sharanagati** (surrender). In Vedanta, he is associated with the **bliss sheath (Anandamaya Kosha)** and with the experience of **Turiya** — the fourth transcendent state. Shambhu teaches that **grace, not effort alone, leads to moksha**.",
    roleInCosmicFunctions: [
      "Bestower of Grace and Blessings",
      "Healer of Emotional and Spiritual Wounds",
      "Guide to Peace and Devotion",
      "Protector of Seekers",
      "Guardian of Divine Welfare"
    ],
    relatedAvatars: [
      {
        name: "Sureshwar",
        relation: "Both are divine rulers and benefactors; Sureshwar leads with sovereignty, Shambhu with peace."
      },
      {
        name: "Brahmachari",
        relation: "Both represent inner purity, though Shambhu is post-purification bliss."
      },
      {
        name: "Mahesh",
        relation: "A grand form of Shiva with Shambhu as the essence of benevolence."
      }
    ],
    storiesAndLegends: [
      {
        title: "The Gift of Shambhu’s Smile",
        summary: "A devotee cursed with endless sorrow prayed for years. One night, Shambhu appeared in a dream and smiled. That smile dissolved lifetimes of karma and brought the devotee immediate peace.",
        source: "Shiva Purana – Shambhava Upakhyana"
      },
      {
        title: "Shambhu Calms the Rudras",
        summary: "When the other Rudras became too intense in their transformations, Shambhu manifested and pacified them, restoring cosmic balance through peace.",
        source: "Linga Purana – Rudra Gita"
      }
    ],
    worship: {
      temples: [
        {
          name: "Shambhu Mahadev Temple",
          location: "Shambhu, Punjab, India",
          importance: "A rare shrine dedicated to the benevolent form of Shiva as Shambhu."
        },
        {
          name: "Jyotirlinga Shrines",
          location: "Across India",
          importance: "Shambhu is invoked in all Shiva temples during daily blessings and arati chants."
        }
      ],
      festivals: [
        {
          name: "Maha Shivaratri",
          significance: "Shambhu is invoked for peace and joy during the nightlong worship of Shiva."
        },
        {
          name: "Shravan Mondays",
          significance: "Devotees seek Shambhu’s blessings during this sacred month dedicated to Shiva."
        }
      ],
      rituals: [
        "Offering white flowers, milk, and sandalwood paste",
        "Chanting 'Om Shambhave Namah' with inner surrender",
        "Meditative worship in silence and gratitude",
        "Lighting of ghee lamps with prayers for universal peace"
      ]
    },
    media: {
      images: [],
      videos: [],
      audio: []
    },
    tags: [
      "Ekadasha Rudra",
      "Shambhu",
      "Bliss",
      "Compassion",
      "Shaivism",
      "Grace",
      "Peace",
      "Spiritual Healing",
      "Auspiciousness"
    ],
    externalLinks: [
      {
        title: "Shambhu – The Peaceful Aspect of Rudra",
        url: "https://www.wisdomlib.org/definition/shambhu"
      },
      {
        title: "Vedantic Meaning of Shambhava",
        url: "https://www.hindupedia.com/en/Shambhu"
      }
    ],
    lastUpdated: "2025-07-16",
    role: "The Source of Bliss/Auspiciousness",
    powers: ["Granting Bliss & Happiness (Ananda)", "Bestowing Auspiciousness", "Source of Peace & Serenity", "Healing & Well-being"],
    image: "https://i.pinimg.com/736x/4d/55/d8/4d55d8a257ee6dbe81adbefb708fe16b.jpg",
    aiHint: "shiva rudra auspicious benevolent bliss peace happiness healing vyana",
  },
  {
    id: "chanda",
    name: "Chanda",
    sanskritName: "चण्ड",
    alternativeNames: ["Chanda Rudra", "Chandesha", "Chandavira", "Rudra of Fierce Flame"],
    rank: 10,
    type: "Ekadasha Rudra",
    description: "Chanda is the 10th of the Ekadasha Rudras, representing the **fiery, untamed, and intensely wrathful aspect of Shiva**. His name evokes a blazing storm — destructive, wild, and purifying. He manifests when **adharma (unrighteousness) crosses its limits**, when demons and egoic forces grow arrogant, and when **the cosmos requires fierce correction**. Chanda does not negotiate — he strikes with precision, burning all that obstructs dharma.",
    symbolism: "Chanda symbolizes the **cosmic flame of divine anger** that annihilates evil and restores harmony. He is not rage for the sake of rage, but **surgical wrath** — awakened only when the path of righteousness is blocked. He represents the **Tamas-shattering force** within spiritual practice and **transmutation through fire**.",
    originStory: {
      summary: "When the daityas (demons) performed dark yajnas to conquer the heavens, and the balance of the three worlds was overturned, Shiva manifested as Chanda — a **terrible Rudra of black fire**, wielding weapons made of thunder and bone. His roars shattered mountains and his eyes incinerated armies. With divine fury, he restored cosmic balance and withdrew only after every trace of adharma was burnt.",
      sourceTexts: [
        "Shiva Purana – Rudra Samhita",
        "Vayu Purana – Ekadasha Rudra Chapter",
        "Linga Purana",
        "Mahabharata – Accounts of fierce Rudra forms"
      ]
    },
    iconography: {
      appearance: "Chanda is depicted as a **towering, flame-covered Rudra**, with **glowing red eyes**, a **mane of fire**, and **ash-covered body**. His arms wield **a giant mace**, **lightning trident**, and **a skull-bow**. His laughter terrifies even rakshasas, and his aura is scorching like a thousand suns. A necklace of bones and a blazing aura surround him.",
      symbols: ["Fire", "Thunderbolt", "Skull bow", "Blazing trident", "Ashes"],
      weapons: ["Trishula (Trident of Flame)", "Gada (Mace of Judgment)", "Dhanush (Skull Bow)", "Flaming Chakra"],
      mount: "Mahakal Lion or Fire Dragon (symbolic of fury and divine justice)",
      direction: "South (Dakshina) – the direction of death and transformation",
      element: "Agni (Fire)"
    },
    associatedDeities: [
      {
        name: "Kali",
        relation: "Both destroy inner and outer evil through fierce compassion and divine rage."
      },
      {
        name: "Narasimha",
        relation: "Both are unstoppable manifestations of divine wrath to protect devotees."
      },
      {
        name: "Rudrani",
        relation: "Consort of fierce Rudras, embodying shakti in destructive form."
      }
    ],
    mantras: [
      {
        name: "Chanda Rudra Mantra",
        text: "ॐ चण्डरुद्राय नमः",
        translation: "Om, salutations to Chanda Rudra, the Fierce Flame of Shiva.",
        usage: "Invoked for destroying inner demons, external negativity, and fear."
      },
      {
        name: "Chanda Kavacha (Protective Invocation)",
        text: "ॐ चण्डः पातु मे मूर्धानं, भ्रूवोर्भौ चण्डविग्रहः। लोचनं ज्वालमाली च, रक्षत्वजितविक्रमः॥",
        translation: "May Chanda guard my crown, may the flame-eyed one protect my vision, may the undefeated fire surround me.",
        usage: ""
      }
    ],
    philosophicalSignificance: "Chanda represents the **inner yogic fire (Tapas)** that burns impurities. Spiritually, he is invoked during **intense transformation**, **ego death**, and **times of crisis** where only fierce divine force can liberate. He burns illusions, attachments, and even karma — leaving the soul naked in truth.",
    roleInCosmicFunctions: [
      "Annihilator of Evil and Corruption",
      "Purifier of the Cosmos through Fire",
      "Protector of Dharma through Force",
      "Destroyer of Ego and Darkness",
      "Catalyst for Sudden Transformation"
    ],
    relatedAvatars: [
      {
        name: "Veerabhadra",
        relation: "Both emerge from Shiva’s anger to destroy adharma; Veerabhadra is precise, Chanda is relentless."
      },
      {
        name: "Bhairava",
        relation: "Bhairava is the guardian of boundaries; Chanda is the destroyer of trespassers."
      },
      {
        name: "Sharabha",
        relation: "Sharabha subdues divine rage (like Narasimha); Chanda wields that rage when needed."
      }
    ],
    storiesAndLegends: [
      {
        title: "The Wrath of Chanda on the Demon King",
        summary: "A demon king once declared that no god could challenge him. Asuras spread destruction across realms. Chanda Rudra emerged in a cyclone of fire, turned day into night, and erased the king’s memory of power before incinerating his palace with a single roar.",
        source: "Linga Purana"
      },
      {
        title: "The Inner Fire of the Rishi",
        summary: "A rishi unable to conquer his lust invoked Chanda to burn his own weakness. Chanda appeared within him, blazed through every impurity, and left behind a crystal-clear consciousness. The rishi became a jivanmukta (liberated soul).",
        source: "Vayu Purana"
      }
    ],
    worship: {
      temples: [
        {
          name: "Chanda Mahadev Temple",
          location: "Vindhya Mountains (symbolic yogic shrine)",
          importance: "A cave-temple where ascetics invoke Rudra’s fire for inner purification."
        },
        {
          name: "Kaleshwar Temples (Dedicated to fiery forms)",
          location: "Telangana, Chhattisgarh, Karnataka",
          importance: "Worship Chanda along with Veerabhadra and Bhairava during fire yajnas."
        }
      ],
      festivals: [
        {
          name: "Rudra Yajna – Fire Sacrifice",
          significance: "Chanda is invoked to burn karmic blocks and misfortune."
        },
        {
          name: "Mahashivaratri – Midnight Fire Meditation",
          significance: "Advanced sadhakas meditate on Chanda’s fire to destroy ego and delusion."
        }
      ],
      rituals: [
        "Lighting of fire altars (Agni Kunda)",
        "Offerings of red flowers, sesame oil, and mustard seeds",
        "Recitation of Rudra Chamakam and Chanda Stuti",
        "Fasting with tapas to invoke inner flame"
      ]
    },
    media: {
      images: [],
      videos: [],
      audio: []
    },
    tags: [
      "Ekadasha Rudra",
      "Chanda",
      "Fire",
      "Divine Wrath",
      "Rudra",
      "Destruction",
      "Shaivism",
      "Purification",
      "Warrior Aspect"
    ],
    externalLinks: [
      {
        title: "Chanda – Fierce Rudra of Shiva",
        url: "https://www.wisdomlib.org/definition/chanda-rudra"
      },
      {
        title: "Tapas and Rudra Fire in Vedic Yoga",
        url: "https://www.yogapedia.com/tapas-and-fire-in-yoga"
      }
    ],
    lastUpdated: "2025-07-16",
    role: "The Fierce/Violent/Passionate One",
    powers: ["Fierce Energy & Righteous Wrath", "Passion & Intensity", "Swift Destruction of Obstacles", "Overcoming Deep Negativity"],
    image: "https://shiva1008.com/wp-content/uploads/2024/03/Chanda-Rudra-avatar-of-lord-shiva.jpeg",
    aiHint: "shiva rudra fierce passionate intense wrath destruction energy chamunda",
  },
  {
    id: "bhava",
    name: "Bhava",
    sanskritName: "भाव",
    alternativeNames: ["Bhavanatha", "Bhaava-Rudra", "Shiva-Bhava", "The Source"],
    rank: 11,
    type: "Ekadasha Rudra",
    description: "Bhava is the 11th and culminating Rudra among the Ekadasha Rudras, symbolizing **Shiva as the essence of existence**, the **creative impulse behind the universe**, and the **manifestation of pure being**. He represents the ever-flowing, ever-becoming aspect of the divine — the **womb of creation**, the **core of consciousness**, and the **foundation of both manifest and unmanifest reality**.",
    symbolism: "Bhava symbolizes **existence itself** — the spark of creation that arises from stillness. While other Rudras destroy, protect, or purify, Bhava **gives rise to form, name, experience, and being**. He is associated with the **power of manifestation**, **continuity**, and **eternal presence**. In spiritual practice, Bhava represents the deep state of being-awareness — Sat-Chit-Ananda.",
    originStory: {
      summary: "As the cycles of destruction came to a close, and the void awaited new emergence, Shiva manifested as Bhava — **the one who becomes**. From his formless nature arose the seeds of universes. Bhava infused all things with the **urge to exist**, to grow, to express. The Vedas declare: ‘From Bhava, all beings arise. In Bhava, they are sustained. Into Bhava, they dissolve again.’",
      sourceTexts: [
        "Shiva Purana – Rudra Samhita",
        "Yajurveda – Sri Rudram (Bhava is invoked multiple times)",
        "Vishnu Purana",
        "Linga Purana – Cosmic Manifestation Chapters"
      ]
    },
    iconography: {
      appearance: "Bhava is shown as a radiant figure of **luminescent white-gold light**, often in **meditative poise**, with a serene smile and glowing third eye. He may hold a **lotus (symbolizing creation)**, a **trident (signifying will, action, and knowledge)**, and a **Vedas scroll (source of cosmic law)**. His form shines like a morning sun and his aura extends infinitely.",
      symbols: ["Lotus", "Vedas scroll", "Light orb", "Eternal flame", "Trident"],
      weapons: ["No aggressive weapons — only tools of creation and law"],
      mount: "None or Etheric Lion (symbolic of cosmic will)",
      direction: "Zenith (above all directions) – transcendence",
      element: "Akasha + Prana (Space and Life Force)"
    },
    associatedDeities: [
      {
        name: "Brahma",
        relation: "Bhava manifests the impulse of creation that Brahma executes — both are linked to genesis."
      },
      {
        name: "Sadashiva",
        relation: "Bhava is Sadashiva’s dynamic, manifesting aspect."
      },
      {
        name: "Parvati",
        relation: "With Bhava, Parvati becomes the Shakti — together, they generate all that exists."
      }
    ],
    mantras: [
      {
        name: "Bhava Mantra (Rudram Invocation)",
        text: "ॐ नमो भगवते भवे नमः",
        translation: "Om, salutations to Bhagavan Bhava, the Source of All Beings.",
        usage: "Used in Sri Rudram for invoking the nourishing, sustaining power of Shiva."
      },
      {
        name: "Bhava Gayatri",
        text: "ॐ भवानाथाय विद्महे शिवतत्त्वाय धीमहि। तन्नो रुद्रः प्रचोदयात्॥",
        translation: "We meditate on Bhavanatha, the source-being of existence; may Rudra enlighten us toward our true essence.",
        usage: ""
      }
    ],
    philosophicalSignificance: "Bhava is **Shiva as Sat (Being)** — pure existence. Spiritually, Bhava guides seekers to recognize the **eternal self beyond change**. In Vedanta, he reflects the **witness-consciousness** underlying all mental, physical, and cosmic forms. In Shaiva Tantra, Bhava is the state of **total presence and unity**.",
    roleInCosmicFunctions: [
      "Initiator of Creation",
      "Sustainer of Existence",
      "Unifier of Form and Formlessness",
      "Giver of Life and Consciousness",
      "Guide to Self-Realization"
    ],
    relatedAvatars: [
      {
        name: "Rishabha",
        relation: "Both express foundational spiritual values — Bhava in cosmic terms, Rishabha in dharmic life."
      },
      {
        name: "Grihapati",
        relation: "As Grihapati rules sacred domestic fire, Bhava is the source of that sacred flame itself."
      },
      {
        name: "Mahesh",
        relation: "Bhava is the serene core of Maheshwara’s sovereignty."
      }
    ],
    storiesAndLegends: [
      {
        title: "Bhava and the First Flame",
        summary: "Before even Brahma awoke, Bhava stirred within the void, uttered the first syllable ‘AUM’, and a great flame burst forth. From that flame arose time, space, and the potential of all souls.",
        source: "Linga Purana"
      },
      {
        title: "Bhava's Blessing to the Vedas",
        summary: "The Rishis were overwhelmed by the vastness of truth. Bhava appeared, gave them the Vedas in seed form, and taught that being itself is the root of all knowledge.",
        source: "Vishnu Purana"
      }
    ],
    worship: {
      temples: [
        {
          name: "Bhavanatha Mahadev Temple",
          location: "Junagadh, Gujarat, India",
          importance: "A sacred temple dedicated to Bhava as the lord of existence and protector of dharma."
        },
        {
          name: "Jyotirlingas (especially Omkareshwar and Mahakaleshwar)",
          importance: "These temples embody Bhava's sustaining presence across time and space."
        }
      ],
      festivals: [
        {
          name: "Shivaratri – Night of Being",
          significance: "Bhava is invoked for self-awareness and connection with pure existence."
        },
        {
          name: "Chaitra Pratipada (Cosmic New Year)",
          significance: "Bhava is worshipped as the one who brings forth the next cycle of creation."
        }
      ],
      rituals: [
        "Chanting 'Om Namo Bhagavate Bhave Namah' at dawn",
        "Offering sandalwood, white lotus, and clarified butter",
        "Silent meditation on the 'I am' presence",
        "Recitation of Sri Rudram with intent on the word 'Bhava'"
      ]
    },
    media: {
      images: [],
      videos: [],
      audio: []
    },
    tags: [
      "Ekadasha Rudra",
      "Bhava",
      "Existence",
      "Creation",
      "Shiva as Being",
      "Consciousness",
      "Shaivism",
      "Spiritual Awakening"
    ],
    externalLinks: [
      {
        title: "Bhava – Rudra of Manifestation",
        url: "https://www.wisdomlib.org/definition/bhava-rudra"
      },
      {
        title: "Bhava in Sri Rudram",
        url: "https://www.sringeri.net/sri-rudram-mantras"
      }
    ],
    lastUpdated: "2025-07-16",
    role: "Existence/Being/Becoming/Origin",
    powers: ["Source of Creation/Manifestation", "Pure Existence (Sat)", "Underlying Reality of All Beings", "Principle of Becoming"],
    image: "https://www.templepurohit.com/wp-content/uploads/2020/11/rudra1.jpg",
    aiHint: "shiva rudra existence being creation source manifestation reality bhava",
  }
];


// Function to get all Rudras
export const getAllRudras = (): Rudra[] => {
  // Sort alphabetically by name
  return [...rudrasData].sort((a, b) => {
    if (a.rank && b.rank) {
      return a.rank - b.rank;
    }
    if (a.rank) return -1;
    if (b.rank) return 1;
    return a.name.localeCompare(b.name);
  });
};

// Function to get a specific Rudra by ID
export const getRudraById = (id: string): Rudra | undefined => {
  return rudrasData.find(rudra => rudra.id === id);
};





    
