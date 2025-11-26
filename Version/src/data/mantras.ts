

export interface Mantra {
  id: string;
  title: string;
  sanskritTitle?: string;
  sanskrit: string;
  transliteration?: string;
  meaning?: string;
  aiHint?: string; // For potential image
  type?: string;
  origin?: string;
  purpose?: string;
}

// Note: Added standard transliteration and meanings for better context.
export const mantrasData: Mantra[] = [
  {
    id: "karacharana",
    title: "Karacharana Kritam (Prayer for Forgiveness)",
    sanskritTitle: "करचरण कृतं वाक्कायजं",
    type: "Dhyana (Meditation) Mantra",
    origin: "Puranic",
    purpose: "A prayer for forgiveness for all wrongdoings, whether intentional or unintentional.",
    sanskrit: `करचरण कृतं वाक्कायजं कर्मजं वा ।
श्रवणनयनजं वा मानसं वापराधं ।
विहितमविहितं वा सर्वमेतत्क्षमस्व ।
जय जय करुणाब्धे श्रीमहादेव शम्भो ॥`,
    transliteration: `Karacharana kṛtaṃ vākkāyajaṃ karmajaṃ vā |
Śravaṇanayanajaṃ vā mānasaṃ vā'parādhaṃ |
Vihitamavihitaṃ vā sarvametatkṣamasva |
Jaya jaya karuṇābdhe śrīmahādeva śambho ||`,
    meaning: "Oh Great God Shambho, ocean of mercy! Please forgive all my wrongdoings, whether committed by hands or feet, speech or body, actions, ears or eyes, or by the mind; whether prescribed (lawful) or not prescribed (unlawful). Victory, Victory unto Thee!",
    aiHint: "prayer forgiveness hands folded devotion shiva abstract"
  },
  {
    id: "karpura-gauram",
    title: "Karpura Gauram Karunavataram",
    sanskritTitle: "कर्पूरगौरं करुणावतारं",
    type: "Mangalacharana (Auspicious Beginning)",
    origin: "Puranic",
    purpose: "An invocation praising Shiva's auspicious attributes, often recited during Aarti.",
    sanskrit: `कर्पूरगौरं करुणावतारं
संसारसारम् भुजगेन्द्रहारम् ।
सदावसन्तं हृदयारविन्दे
भवं भवानीसहितं नमामि ॥`,
    transliteration: `Karpūragauraṁ karuṇāvatāraṁ
Saṁsārasāram bhujagendrahāram |
Sadāvasantaṁ hṛdayāravinde
Bhavaṁ bhavānīsahitaṁ namāmi ||`,
    meaning: "I bow to Bhavam (Shiva), who is white as camphor, the embodiment of compassion, the essence of the world, who wears the serpent king as a garland, ever dwelling in the lotus of the heart, accompanied by Bhavani (Parvati).",
    aiHint: "shiva camphor white compassion parvati prayer arti"
  },
  {
    id: "mahamrityunjaya",
    title: "Mahamrityunjaya Mantra",
    sanskritTitle: "महामृत्युंजय मंत्र",
    type: "Moksha & Healing Mantra",
    origin: "Vedic",
    purpose: "For protection from untimely death, for health, and for spiritual liberation.",
    sanskrit: `ॐ त्र्य॑म्बकं यजामहे सु॒गन्धिं॑ पुष्टि॒वर्ध॑नम् ।
उ॒र्वा॒रु॒कमि॑व॒ बन्ध॑नान् मृ॒त्योर्मु॑क्षीय॒ माऽमृता॑॑त् ।।`,
    transliteration: `oṃ tryambakaṃ yajāmahe sugandhiṃ puṣṭivardhanam |
urvārukamiva bandhanān mṛtyormukṣīya mā'mṛtāt ||`,
    meaning: "We worship the Three-eyed One (Lord Shiva) Who is fragrant and Who nourishes all beings. May He liberate us from death for the sake of immortality, even as the cucumber is severed from its bondage (to the creeper).",
    aiHint: "mahamrityunjaya mantra shiva healing protection immortality tryambakam"
  },
  {
    id: "shiva-gayatri",
    title: "Shiva Gayatri Mantra",
    sanskritTitle: "शिव गायत्री मंत्र",
    type: "Vedic Praise",
    origin: "Vedic",
    purpose: "To invoke Lord Rudra (Shiva) for higher intellect and illumination of the mind.",
    sanskrit: `ॐ तत्पुरुषाय विद्महे
महादेवाय धीमहि ।
तन्नो रुद्रः प्रचोदयात् ॥`,
    transliteration: `Oṃ Tatpuruṣāya Vidmahe
Mahādevāya Dhīmahi |
Tanno Rudraḥ Pracodayāt ||`,
    meaning: "Om, Let me meditate on the Great Purusha (Supreme Being), Oh, Mahadeva (Greatest God), give me higher intellect, And let God Rudra illuminate my mind.",
    aiHint: "shiva gayatri mantra meditation illumination rudra intellect"
  },
   {
    id: "om-namah-shivaya",
    title: "Om Namah Shivaya (Panchakshara Mantra)",
    sanskritTitle: "ॐ नमः शिवाय",
    type: "Beej (Seed) Mantra",
    origin: "Vedic",
    purpose: "The foundational mantra of Shaivism, used for devotion, meditation, and invoking Shiva's grace.",
    sanskrit: `ॐ नमः शिवाय`,
    transliteration: `Om Namaḥ Śivāya`,
    meaning: "Om, Salutations to Lord Shiva. This five-syllable mantra encapsulates the essence of Shaivism and is a powerful invocation of Shiva's grace and presence.",
    aiHint: "om namah shivaya mantra five syllables shiva devotion meditation"
   },
   {
    id: "shivopasana-mantra",
    title: "Shivopasana Mantra",
    sanskritTitle: "शिवोपासना मंत्र",
    type: "Upasana (Worship) Mantra",
    origin: "Vedic",
    purpose: "A short invocation praising Shiva as the all-pervading Supreme Being.",
    sanskrit: "ॐ नमः शिवाय शान्ताय कारणत्रय हेतवे।\nनिवेद्यमि चत्मानं गतिस्त्वं परमेश्वरः॥",
    transliteration: "om namaḥ śivāya śāntāya kāraṇatraya hetave |\nnivedayāmi cātmānaṁ gatistvaṁ parameśvaraḥ ||",
    meaning: "Salutations to the peaceful Lord Shiva, the cause of the threefold causes. I offer myself to you; you are my refuge, O Supreme Lord."
  },
];

// Function to get all mantras
export const getAllMantras = (): Mantra[] => {
  return mantrasData;
};

// Function to get a specific mantra by ID
export const getMantraById = (id: string): Mantra | undefined => {
  return mantrasData.find(mantra => mantra.id === id);
};
