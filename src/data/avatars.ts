export interface AvatarStory {
  title: string;
  content: string;
}

export interface Avatar {
  id: string; // Unique identifier
  name: string;
  sanskritName?: string; // Optional Sanskrit name
  rank?: number; // Optional rank
  description: string;
  purpose: string;
  achievements: string[];
  stories: AvatarStory[];
  writtenTexts: string[];
  importance: string;
  mantras?: string[]; // Optional mantras
  image?: string; // Optional image URL
  aiHint?: string; // Optional hint for image generation
}


// Combined and refined list based on previous data and user's comprehensive list.
export const avatarsData: Avatar[] = [
  {
    id: "pippalada", // Merged Piplaad and Pippalada
    name: "Pippalada (Piplaad)",
    sanskritName: "पिप्पलाद",
    rank: 1,
    description: "Avatar born under a Peepal tree, associated with relieving Shani dosha.",
    purpose: "To help devotees overcome the malefic effects of Saturn (Shani) and answer profound questions.",
    achievements: ["Authored the Prashna Upanishad", "Mitigated Shani's influence through tapasya"],
    stories: [
      {
        title: "Birth and Confronting Shani",
        content: "Born to Sage Dadhichi after his sacrifice, Pippalada was abandoned but nurtured by a Peepal tree. He performed intense tapasya and questioned Shani Dev about his harshness towards children, eventually gaining control over Shani's influence through Shiva's grace."
      },
       {
        title: "Prashna Upanishad",
        content: "Six disciples approached Sage Pippalada with fundamental questions about creation, life force, consciousness, etc. His insightful answers form the basis of the Prashna Upanishad."
       }
    ],
    writtenTexts: ["Skanda Purana", "Prashna Upanishad"],
    importance: "Worshipped for relief from Saturn-related troubles and revered for profound wisdom.",
    mantras: ["ॐ नमः पिप्पलादाय नमः"],
    image: "https://i.pinimg.com/736x/cf/8a/2b/cf8a2b4cb05ba61b19e5ae80bd4a6e8b.jpg",
    aiHint: "sage peepal tree saturn prashna upanishad"
  },
  {
    id: "nandi",
    name: "Nandi",
    sanskritName: "नन्दी",
    rank: 2,
    description: "The divine bull, Shiva's sacred mount (vahana), chief Gana, and gatekeeper of Kailash.",
    purpose: "To serve as Shiva's vehicle, embody devotion, represent dharma, and guard Kailash.",
    achievements: ["Attained divinity through intense devotion", "Symbol of dharma, patience, strength, and joy", "Master of Agamas and Tantras"],
    stories: [
      {
        title: "Nandi's Tapasya",
        content: "Born to Sage Shilada, Nandi performed severe tapasya to Lord Shiva. Pleased, Shiva granted him immortality, made him his mount, the leader of the Ganas, and his constant companion."
      }
    ],
    writtenTexts: ["Shiva Purana", "Linga Purana", "Agamas"],
    importance: "Represents steadfast devotion, righteousness, and the joy of serving the divine. Prayers to Shiva are often directed through Nandi first.",
    mantras: ["ॐ नन्दिकेश्वराय नमः"],
    image: "https://i.pinimg.com/736x/e9/14/b6/e914b67bfd30839ae67c1c5f43a8778b.jpg",
    aiHint: "divine bull nandi shiva mount kailash gatekeeper devotion"
  },
  {
    id: "veerabhadra",
    name: "Veerabhadra",
    sanskritName: "वीरभद्र",
    rank: 3,
    description: "A fierce and formidable warrior avatar created from Shiva's wrath after Sati's self-immolation at Daksha's yagna.",
    purpose: "To destroy Daksha Prajapati's Yagna (sacrifice) and avenge the insult and death of Sati.",
    achievements: [
      "Emerged from Shiva's matted hair",
      "Led Shiva's Ganas (attendants) in battle with Bhadrakali",
      "Destroyed Daksha's sacrifice",
      "Beheaded Daksha Prajapati",
      "Punished arrogant gods and sages who supported Daksha",
    ],
    stories: [
      {
        title: "The Destruction of Daksha's Yagna",
        content: "Enraged by Sati's death, Shiva struck his matted hair on the ground, creating Veerabhadra. Commanded by Shiva, Veerabhadra, alongside Bhadrakali and the Ganas, stormed Daksha's sacrifice, vanquishing gods and sages, disrupting the ritual, and decapitating Daksha."
      }
    ],
    writtenTexts: ["Shiva Purana", "Skanda Purana", "Linga Purana", "Vayu Purana", "Mahabharata"],
    importance: "Symbol of divine rage against adharma (unrighteousness) and disrespect towards devotion. Represents cosmic justice and Shiva's protective fury.",
    mantras: ["ॐ वीरभद्राय नमः"],
    image: "https://i.pinimg.com/736x/b5/3e/c0/b53ec0f6d39fbd3a12b1b2c4437b2bcf.jpg",
    aiHint: "fierce warrior shiva wrath daksha yagna sati ganas bhadrakali"
  },
  {
    id: "bhairava",
    name: "Bhairava",
    sanskritName: "भैरव",
    rank: 4,
    description: "The terrifying aspect of Shiva (often considered a distinct form rather than avatar), associated with annihilation, protection, and mastery over time.",
    purpose: "To destroy ego, guard sacred spaces (especially Kashi/Shakti Peethas), control time (Kala), and punish transgression.",
    achievements: ["Manifested to cut off Brahma's fifth head (representing ego)", "Guardian of Shakti Peethas and Kashi", "Mastery over fear and death"],
    stories: [
      {
        title: "Brahma's Ego and the Kapalin",
        content: "When Brahma grew arrogant, claiming supremacy, Shiva manifested as Bhairava and severed Brahma's fifth head. As atonement, Bhairava wandered as a Kapalin (skull-bearer) until reaching Kashi, where the skull fell, absolving him."
      }
    ],
    writtenTexts: ["Shiva Purana", "Kurma Purana", "Tantric texts"],
    importance: "Represents the fierce aspect that destroys illusion, ego, and protects devotees. Kala Bhairava is the Lord of Time and guardian of Kashi.",
    mantras: ["ॐ कालभैरवाय नमः", "ॐ ह्रीं बटुकाय आपदुद्धारणाय कुरु कुरु बटुकाय ह्रीं ॐ"],
    image: "https://i.pinimg.com/736x/ab/b6/09/abb6098efd6fd1eaa431bebca3f45cc0.jpg",
    aiHint: "fierce shiva bhairava dog skull kashi time guardian tantra"
  },
    {
    id: "ashwatthama",
    name: "Ashwatthama",
    sanskritName: "अश्वत्थामा",
    rank: 5,
    description: "The son of Guru Dronacharya and Kripi, considered an immortal (Chiranjivi) and an avatar of one of the 11 Rudras (or Shiva himself).",
    purpose: "To fulfill his role as a warrior in the Mahabharata, though marked by controversial actions.",
    achievements: ["Skilled warrior possessing divine weapons (like Brahmastra)", "One of the Chiranjivis"],
    stories: [
      {
        title: "Mahabharata War and Curse",
        content: "A prominent Kaurava warrior. After the war, seeking revenge for his father's death and the Kauravas' defeat, he committed a heinous act by killing the Pandavas' sleeping sons and attempting to destroy Uttara's womb. For this, Krishna cursed him to wander the earth for millennia, suffering."
      }
    ],
    writtenTexts: ["Mahabharata"],
    importance: "Represents the complexities of dharma, the consequences of rage and unethical actions, and the burden of immortality under a curse.",
    image: "https://i.pinimg.com/736x/14/08/a2/1408a2a717591c69c67500920dab093b.jpg",
    aiHint: "warrior mahabharata dronacharya son curse immortal chiranjivi"
  },
   {
    id: "sharabha",
    name: "Sharabha",
    sanskritName: "शरभ",
    rank: 6,
    description: "A fierce part-lion, part-bird avatar with multiple limbs, manifested to pacify Vishnu's enraged Narasimha form.",
    purpose: "To calm the uncontrollable fury of Narasimha after he killed Hiranyakashipu.",
    achievements: ["Subdued the Narasimha avatar", "Restored cosmic balance"],
    stories: [
      {
        title: "Pacifying Narasimha",
        content: "After Narasimha destroyed Hiranyakashipu, his anger threatened the cosmos. The gods requested Shiva's intervention. Shiva manifested as the immensely powerful Sharabha, who enveloped Narasimha and calmed his rage, demonstrating Shiva's supreme power."
      }
    ],
    writtenTexts: ["Sharabha Upanishad", "Shiva Purana", "Linga Purana"],
    importance: "Symbolizes Shiva's supreme power, capable of controlling even the fiercest divine manifestations and restoring equilibrium.",
    image: "https://i.pinimg.com/736x/30/4a/7a/304a7ab215d05e9f99f590fbea041963.jpg",
    aiHint: "lion bird hybrid shiva narasimha pacify fierce supreme power"
  },
  {
    id: "grihapati",
    name: "Grihapati",
    sanskritName: "गृहपति",
    rank: 7,
    description: "An avatar born to the Brahmin Vishwanar and his wife Shuchishmati, representing the ideal householder.",
    purpose: "To exemplify the dharma and sanctity of the Grihastha (householder) life while being devoted to Shiva.",
    achievements: ["Mastered Vedas at a young age", "Overcame predicted early death through devotion to Agni and Shiva", "Became the presiding deity of household fire"],
    stories: [
      {
        title: "The Devout Householder Son",
        content: "Born through Shiva's boon, Grihapati was prophesied to die young from fire or lightning. Through intense worship of Agni and Shiva, he averted this fate and became a symbol of righteous family life blessed by divinity."
      }
    ],
    writtenTexts: ["Shiva Purana (Vāyavīya Saṃhitā)"],
    importance: "Highlights the possibility of attaining liberation and divine grace while living a responsible householder life.",
    image: "https://i.pinimg.com/736x/0f/3f/f5/0f3ff53b6260cbedd9060733c3b962d8.jpg",
    aiHint: "householder shiva brahmin boy agni devotion family life"
  },
  {
    id: "durvasa",
    name: "Durvasa",
    sanskritName: "दुर्वासा",
    rank: 8,
    description: "A legendary Rishi (sage) known for his immense ascetic power and notoriously short temper, considered an avatar of Shiva's anger.",
    purpose: "To test the patience, dharma, and hospitality of gods, kings, and sages, often through challenges and curses.",
    achievements: ["Possessed immense yogic and ascetic power (siddhis)", "His curses and boons significantly influenced many epic events"],
    stories: [
      {
        title: "Curse on Indra",
        content: "Feeling slighted by Indra, Durvasa cursed him and the Devas, causing them to lose their strength, fortune, and immortality, which eventually led to the Samudra Manthan."
      },
       {
        title: "Testing Ambarisha",
        content: "His attempt to test King Ambarisha's devotion backfired due to Vishnu's Sudarshana Chakra protecting the devotee, teaching Durvasa about the supremacy of Bhakti."
      }
    ],
    writtenTexts: ["Various Puranas (Bhagavata, Vishnu, etc.)", "Mahabharata", "Ramayana"],
    importance: "Represents the uncontrollable aspect of divine power, the importance of respecting ascetics, and serves as a catalyst in divine play (lila).",
    image: "https://i.pinimg.com/736x/09/49/6a/09496a649e918f601a427e7b9c535bed.jpg",
    aiHint: "angry sage curse ascetic power rishi tapasya test"
  },
  {
    id: "hanuman",
    name: "Hanuman",
    sanskritName: "हनुमान्",
    rank: 9,
    description: "The mighty Vanara deity, son of Vayu (Wind God), considered an avatar of Shiva (or one of the Rudras). Embodiment of devotion (bhakti), strength, and selfless service.",
    purpose: "To serve Lord Rama in his quest against Ravana and uphold Dharma.",
    achievements: ["Exemplar of Bhakti Yoga", "Crossed the ocean to Lanka", "Located Sita", "Burned Lanka", "Brought Sanjeevani herb", "Immense strength and loyalty"],
    stories: [
      {
        title: "Devotion in Ramayana",
        content: "Hanuman's life is a saga of unwavering devotion and service to Rama. From finding Sita to battling demons and saving Lakshmana, his feats demonstrate the power of faith and selflessness."
      }
    ],
    writtenTexts: ["Ramayana (especially Sundara Kanda)", "Mahabharata", "Puranas", "Hanuman Chalisa"],
    importance: "Ultimate symbol of devotion, loyalty, courage, strength, humility, and selfless service (Seva). Widely worshipped across India.",
    mantras: ["ॐ हनुमते नमः", "ॐ आञ्जनेयाय नमः", "मनोजवं मारुततुल्यवेगं..."],
    image: "https://i.pinimg.com/736x/6f/c2/fc/6fc2fcdf11b0e560166ad1b2b2e6ce83.jpg",
    aiHint: "monkey god rama devotion strength bhakti seva ramayana"
  },
  {
    id: "rishabha",
    name: "Rishabha",
    sanskritName: "ऋषभ",
    rank: 10,
    description: "An ancient ascetic king, considered an avatar of Shiva (or Vishnu in some texts) and revered as the first Tirthankara in Jainism.",
    purpose: "To teach the path of renunciation, non-violence (Ahimsa), and spiritual liberation through asceticism.",
    achievements: ["Taught civilization skills (agriculture, crafts)", "Renounced kingdom for extreme asceticism", "Established the path for future Tirthankaras (Jainism)"],
    stories: [
      {
        title: "The First Teacher",
        content: "King Rishabha, after ruling wisely, renounced his kingdom and embraced severe austerities, wandering naked and observing silence, demonstrating complete detachment and inspiring the path of liberation."
      }
    ],
    writtenTexts: ["Bhagavata Purana", "Vishnu Purana", "Jain Agamas"],
    importance: "Significant figure bridging Hinduism and Jainism, representing the ascetic path (Shramana tradition) and the ideal of detachment.",
    image: "https://i.pinimg.com/736x/36/81/9c/36819c861b6b38a884b8518d11293134.jpg",
    aiHint: "ascetic king jain tirthankara renunciation non-violence ahimsa"
  },
  {
    id: "yatinath",
    name: "Yatinath",
    sanskritName: "यतिनाथ",
    rank: 11,
    description: "An avatar who appeared as an ascetic guest (yati) to test a devout tribal couple.",
    purpose: "To test the hospitality, faith, and selflessness of devotees.",
    achievements: ["Tested and blessed the devout Bhil couple Aahuk and Aahuka"],
    stories: [
      {
        title: "Testing Aahuk and Aahuka",
        content: "Shiva appeared as Yatinath to Aahuk and Aahuka, a poor Bhil couple renowned for their hospitality. They welcomed him warmly. Later, Shiva tested them further, threatening their lives. Aahuk offered his own life to protect the guest. Pleased, Shiva revealed himself and granted them liberation."
      }
    ],
    writtenTexts: ["Shiva Purana"],
    importance: "Emphasizes the supreme virtue of hospitality towards guests (Atithi Devo Bhava) and selfless devotion, regardless of one's status.",
    image: "https://i.pinimg.com/736x/ef/84/5d/ef845dd4732eafccb6d6e8706ee167c7.jpg",
    aiHint: "ascetic guest bhil couple hospitality test devotion selfless"
  },
  {
    id: "krishna-darshana", // Keep distinct
    name: "Krishna Darshana",
    sanskritName: "कृष्णदर्शन",
    rank: 12,
    description: "An avatar highlighting the importance of yagna (sacrificial rituals) and Vedic duties.",
    purpose: "To emphasize the significance and power of Vedic rituals (Karma Kanda) for maintaining cosmic order and spiritual merit.",
    achievements: ["Appeared during a specific yagna", "Explained the underlying principles and necessity of rituals"],
    stories: [
      {
        title: "The Ritual Embodiment",
        content: "This avatar manifested specifically to underscore the importance of performing yagnas and other prescribed Vedic rituals correctly and with devotion, demonstrating their cosmic significance."
      }
    ],
    writtenTexts: ["Shiva Purana"],
    importance: "Reinforces the role and efficacy of Karma Kanda within the framework of Sanatana Dharma.",
    image: "https://i.pinimg.com/736x/82/1c/53/821c530f83f15d0098f48b2c75918afd.jpg",
    aiHint: "yagna ritual vedic importance karma kanda cosmic order"
  },
  {
    id: "bhikshuvarya",
    name: "Bhikshuvarya",
    sanskritName: "भिक्षुवर्य",
    rank: 13,
    description: "The avatar of Shiva as the supreme mendicant or beggar, representing detachment and the path of renunciation.",
    purpose: "To test the dharma and detachment of others; related to the atonement for severing Brahma's head.",
    achievements: ["Wandered with Brahma's skull as a begging bowl (Kapala)", "Tested sages and gods", "Established Kashi's significance for liberation from sin"],
    stories: [
      {
        title: "The Supreme Beggar",
        content: "As Bhairava, after cutting off Brahma's fifth head, Shiva was cursed to wander as a Bhikshu with the skull stuck to his hand. He begged for alms, testing many, until he reached Kashi, where the skull dropped, signifying absolution. This highlights detachment and the power of Kashi."
      }
    ],
    writtenTexts: ["Shiva Purana", "Kurma Purana", "Skanda Purana"],
    importance: "Represents ultimate detachment, the consequences of actions (even divine ones), the path of renunciation, and the sacredness of Kashi.",
    image: "https://i.pinimg.com/736x/5a/06/c5/5a06c5ed072daf8cff71533749d88c21.jpg",
    aiHint: "mendicant beggar skull bowl kashi detachment atonement bhairava"
  },
  {
    id: "sureshwar",
    name: "Sureshwar",
    sanskritName: "सुरेश्वर",
    rank: 14,
    description: "An avatar representing Shiva as the Lord of the Suras (Gods/Devas).",
    purpose: "To protect the gods, restore cosmic balance, and assert divine authority.",
    achievements: ["Appeared to aid Indra or other Devas in times of crisis", "Manifested divine form to assure and lead the Devas"],
    stories: [
      {
        title: "Lord of the Gods' Intervention",
        content: "In various instances when the Devas were overpowered by Asuras or faced cosmic imbalance, Shiva manifested as Sureshwar, sometimes resembling Indra but displaying supreme power, to restore order and protect the celestial realm."
      }
    ],
    writtenTexts: ["Shiva Purana"],
    importance: "Highlights Shiva's role as the ultimate authority ('Ishvara') and refuge for the celestial beings, the protector of cosmic dharma.",
    image: "https://i.pinimg.com/736x/35/27/62/3527622322a5a29bfe325824ec7a4283.jpg",
    aiHint: "lord of gods devas indra protection authority cosmic balance"
  },
  {
    id: "kirata", // Keep distinct
    name: "Kirata (Keerat)",
    sanskritName: "किरात",
    rank: 15,
    description: "An avatar of Shiva disguised as a tribal hunter (Kirata).",
    purpose: "To test the Pandava hero Arjuna's skill, determination, and worthiness before granting him the divine Pashupatastra weapon.",
    achievements: ["Engaged Arjuna in a fierce duel", "Recognized Arjuna's valor", "Granted the powerful Pashupatastra"],
    stories: [
      {
        title: "The Hunter and the Hero",
        content: "While Arjuna performed penance, Shiva appeared as a Kirata, with Parvati as a Kirati. They clashed over a hunted boar. Despite Arjuna's prowess, the Kirata matched him. Impressed, Shiva revealed himself and bestowed the invincible Pashupatastra upon Arjuna."
      }
    ],
    writtenTexts: ["Mahabharata (Kiratarjuniya Parva)"],
    importance: "Illustrates that divinity tests devotees rigorously and can appear in any form. Emphasizes valor, perseverance, and divine grace.",
    image: "https://i.pinimg.com/736x/8f/60/32/8f6032d412aa3753e6b5cfc2abfd9633.jpg",
    aiHint: "tribal hunter arjuna pashupatastra weapon test mahabharata duel"
  },
  {
    id: "sunartaka-nata", // Combined Sunatnartak and Nata
    name: "Sunartaka Nata",
    sanskritName: "सुनर्तक नट",
    rank: 16,
    description: "An avatar representing Shiva as the skillful, cosmic dancer (Nata) and actor.",
    purpose: "To exhibit the cosmic dance (Tandava), entertain, embody rhythm, and express the divine play (lila).",
    achievements: ["Performed enchanting and cosmic dances", "Showcased the artistic and rhythmic aspect of Shiva (Nataraja)"],
    stories: [
      {
        title: "The Divine Dancer",
        content: "This avatar focuses on Shiva's role as the supreme performer, the source of all arts, rhythm, and the cosmic dance that governs creation and destruction. It's closely linked to the iconography of Nataraja."
      }
    ],
    writtenTexts: ["Shiva Purana", "Natya Shastra references"],
    importance: "Related to Nataraja, symbolizing the dynamic nature of the universe, the cycles of creation and destruction, illusion, and grace, all expressed through dance.",
    image: "https://i.pinimg.com/736x/ca/3c/f0/ca3cf094d648d9d79b297587d78829c1.jpg",
    aiHint: "celestial dancer nataraja cosmic dance rhythm actor tandava"
  },
  {
    id: "brahmachari", // Keep distinct
    name: "Brahmachari",
    sanskritName: "ब्रह्मचारी",
    rank: 17, // Adjusted rank
    description: "An avatar of Shiva appearing as a celibate student or ascetic.",
    purpose: "To test Parvati's resolve and devotion during her intense tapasya to win him as her husband.",
    achievements: ["Tested Parvati's determination", "Engaged Parvati in philosophical debate"],
    stories: [
      {
        title: "Testing Parvati's Penance",
        content: "While Parvati performed severe austerities to marry Shiva, he appeared before her disguised as a young Brahmachari. He tried to dissuade her by criticizing Shiva's unconventional appearance and habits. Parvati staunchly defended Shiva, proving her unwavering devotion, which pleased him immensely."
      }
    ],
    writtenTexts: ["Shiva Purana", "Kumarasambhava (by Kalidasa)"],
    importance: "Highlights the importance of steadfast devotion and determination in spiritual pursuits, and Shiva's playful testing of his devotees.",
    image: "https://i.pinimg.com/736x/8f/60/32/8f6032d412aa3753e6b5cfc2abfd9633.jpg", // Same as Kirata as per user's list
    aiHint: "ascetic student shiva testing parvati penance devotion disguise"
  },
  {
    id: "yaksheshwara",
    name: "Yaksheshwara",
    sanskritName: "यक्षेश्वर",
    rank: 18, // Adjusted rank
    description: "Avatar of Shiva as the Lord of the Yakshas (nature spirits, often associated with wealth).",
    purpose: "To assert dominion over Yakshas, interact with Kubera (King of Yakshas), or teach humility.",
    achievements: ["Established authority over Yakshas", "Blessed or tested Kubera"],
    stories: [
      {
        title: "Lord of Yakshas and Kubera",
        content: "Shiva appeared in this form to quell the pride of Yakshas or to interact with Kubera, the god of wealth and king of Yakshas. Sometimes involves testing Kubera's attachment to wealth or blessing him."
      },
       {
        title: "Yaksha Prashna (in some interpretations)",
        content: "Though primarily linked to Dharma testing the Pandavas in Mahabharata, some narratives associate the concept of a powerful, testing Yaksha with Shiva's form."
       }
    ],
    writtenTexts: ["Puranas", "Mahabharata (Yaksha Prashna context potentially related)"],
    importance: "Shows Shiva's lordship over various classes of beings, including nature spirits, and his connection to wealth (as Kubera's friend) and hidden realms.",
    image: "https://i.pinimg.com/736x/dd/77/1d/dd771dff333e2a6129e8ea4fd4371bc4.jpg",
    aiHint: "lord of yakshas kubera wealth spirits nature test humility"
  },
   {
    id: "avadhuteshwara", // Combined Avadhut and Avadhuteshwar
    name: "Avadhuteshwara (Avadhut)",
    sanskritName: "अवधूतश्वर",
    rank: 19, // Adjusted rank
    description: "An ascetic avatar representing a liberated being (Avadhuta) who is beyond all worldly norms, dualities, and conventions.",
    purpose: "To test beings (like Indra) and exemplify the state of complete detachment and freedom.",
    achievements: ["Tested Indra's ego by appearing in an unconventional form", "Represents the highest state of renunciation and non-duality"],
    stories: [
      {
        title: "The Unconventional Ascetic",
        content: "Shiva as Avadhut often appears in strange or socially unacceptable forms, acting unpredictably to challenge societal norms and test the perception of others, demonstrating that divinity transcends appearances."
      }
    ],
    writtenTexts: ["Shiva Purana", "Avadhuta Gita context"],
    importance: "Symbolizes the liberated soul who operates beyond conventional rules, completely free from ego and duality. Represents the ultimate state of spiritual freedom.",
    image: "https://i.pinimg.com/736x/39/72/bb/3972bb8d1e1ab4e0b2bb24dcc36bb2d0.jpg",
    aiHint: "ascetic detached unconventional liberated soul freedom non-duality indra test"
  },
  {
    id: "ardhanarishvara",
    name: "Ardhanarishvara",
    sanskritName: "अर्धनारीश्वर",
    // rank: TBD (Already present in Mahadev Rup, handled there)
    description: "A composite form of Shiva and Parvati, half male and half female.",
    purpose: "To symbolize the synthesis of masculine and feminine energies, the inseparability of Shiva and Shakti.",
    achievements: ["Ultimate symbol of non-duality", "Represents balance of cosmic forces"],
    stories: [
       {
        title: "The Lord Who is Half Woman",
        content: "This iconic form shows Shiva and Parvati merged into one body, representing the essential unity of consciousness (Shiva) and energy (Shakti), and that the ultimate reality transcends gender."
       }
    ],
    writtenTexts: ["Puranas", "Tantras", "Iconographic texts"],
    importance: "A profound representation of cosmic unity, non-duality, and the interdependence of masculine and feminine principles.",
    image: "https://i.pinimg.com/736x/83/60/d3/8360d3496688a6fffeb1c50713f548fc.jpg",
    aiHint: "shiva parvati combined half male half female ardhanarishvara unity shakti"
  },
   {
    id: "mahesh",
    name: "Mahesh",
    sanskritName: "महेश",
    // rank: TBD
    description: "A name signifying Shiva as the 'Great Lord', often used interchangeably with Maheshwara.",
    purpose: "To represent Shiva's supreme lordship and authority over the cosmos.",
    achievements: ["Embodiment of supreme divine power and control"],
    stories: [
       {
        title: "The Great Lord",
        content: "Mahesh or Maheshwara is a fundamental name emphasizing Shiva's position as the highest deity, the ultimate reality, and the controller of the universe within Shaivism."
       }
    ],
    writtenTexts: ["Puranas", "Upanishads", "General Hindu Scriptures"],
    importance: "Highlights Shiva's status as the Supreme God.",
    image: "https://i.pinimg.com/736x/30/38/1a/30381a00a6255ba26cc90ff8fd9a5496.jpg",
    aiHint: "shiva great lord mahesh maheshwara supreme authority cosmos"
   },
   {
    id: "vrishabh", // Assuming Vrisheshwara refers to the Lord of Vrishabha (Nandi) or related aspect
    name: "Vrishabh (Vrisheshwara)",
    sanskritName: "वृषभ / वृषेश्वर",
    // rank: TBD
    description: "Avatar related to the bull (Vrishabha), representing Dharma, strength, and Shiva's connection to Nandi.",
    purpose: "To uphold Dharma and embody the strength and steadfastness associated with the bull.",
    achievements: ["Symbolizes Dharma", "Connection to Nandi"],
    stories: [
        {
            title: "Lord of the Bull",
            content: "This name or form emphasizes Shiva's mastery over the bull, symbolizing his control over Dharma (righteousness) and the animalistic nature, represented by his mount Nandi."
        }
    ],
    writtenTexts: ["Puranas"],
    importance: "Reinforces Shiva's connection to Dharma and Nandi.",
    image: "https://i.pinimg.com/736x/ed/4f/c2/ed4fc25e00db68a5256db097ed9bb5c5.jpg",
    aiHint: "shiva bull lord vrishabha nandi dharma strength"
   },
    {
    id: "vaishyanath",
    name: "Vaishyanath",
    sanskritName: "वैश्यनाथ",
    // rank: TBD
    description: "An avatar representing Shiva as the 'Lord of Vaishyas' or appearing to interact with the Vaishya (merchant/trading) community.",
    purpose: "To bless or test the dharma related to commerce, wealth creation, and societal contribution of the Vaishya varna.",
    achievements: ["Interacted with Vaishya devotees", "Upholding dharma related to trade/wealth"],
    stories: [
        {
            title: "Lord of Merchants",
            content: "Shiva may have taken this form to engage with merchants or traders, teaching righteous conduct in business or testing their devotion and generosity."
        }
    ],
    writtenTexts: ["Possibly local Puranic narratives or specific Samhitas"],
    importance: "Shows Shiva's presence and relevance across all sections of society and aspects of life, including economic activity.",
    image: "https://i.pinimg.com/736x/2e/34/2f/2e342fa3ffce48a0f7c9205ad7555d51.jpg",
    aiHint: "shiva lord merchant vaishya trade commerce dharma wealth"
   },
   {
    id: "dwijeshwara",
    name: "Dwijeshwara",
    sanskritName: "द्विजेश्वर",
    // rank: TBD
    description: "An avatar representing Shiva as the 'Lord of the Twice-Born' (Dwijas), particularly Brahmins.",
    purpose: "To interact with, test, or guide the Brahmin community, upholding Vedic knowledge and rituals.",
    achievements: ["Interacted with Brahmin devotees/sages", "Upholding Vedic dharma"],
    stories: [
        {
            title: "Lord of the Brahmins",
            content: "Shiva appeared in this form to engage with Brahmins, perhaps testing their knowledge, devotion, or adherence to rituals, reinforcing the importance of the priestly class in maintaining Vedic traditions."
        }
    ],
    writtenTexts: ["Possibly local Puranic narratives or specific Samhitas"],
    importance: "Emphasizes Shiva's connection to Vedic learning, rituals, and the Brahminical order.",
    image: "https://i.pinimg.com/736x/12/e4/92/12e492c0c441f5dd36a0c63d690446d3.jpg",
    aiHint: "shiva lord brahmin dwija twice-born vedic knowledge ritual dharma"
   },
   {
    id: "sadhu-dwija", // Less common, possibly related to Dwija or a specific story
    name: "Sadhu Dwija",
    sanskritName: "साधु द्विज",
    // rank: TBD
    description: "Possibly represents Shiva appearing as a virtuous Brahmin or ascetic.",
    purpose: "To exemplify righteous conduct or test others.",
    achievements: ["Appeared as a virtuous Brahmin"],
    stories: [
        {
            title: "The Virtuous Brahmin",
            content: "This might refer to a specific instance where Shiva took the form of a pious Brahmin to interact with devotees or test their perception of holiness."
        }
    ],
    writtenTexts: ["Likely specific, less common Puranic episodes"],
    importance: "Reinforces that divinity can manifest in simple, virtuous forms.",
    image: "https://i.pinimg.com/736x/5e/de/e1/5edee1da0ce7019c04018fb4f6813cae.jpg",
    aiHint: "shiva virtuous brahmin sadhu dwija ascetic piety"
   },
];

// Function to get all avatars
export const getAllAvatars = (): Avatar[] => {
  // Simple sorting by rank if available, then name
  return avatarsData.sort((a, b) => {
      if (a.rank && b.rank) return a.rank - b.rank;
      if (a.rank) return -1; // Avatars with rank come first
      if (b.rank) return 1;
      return a.name.localeCompare(b.name); // Fallback sort by name
    });
};

// Function to get a specific avatar by ID
export const getAvatarById = (id: string): Avatar | undefined => {
  return avatarsData.find(avatar => avatar.id === id);
};
