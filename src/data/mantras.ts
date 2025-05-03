

export interface Mantra {
  id: string;
  title: string;
  sanskrit: string;
  transliteration?: string;
  meaning?: string;
  aiHint?: string; // For potential image
}

// Note: Added standard transliteration and meanings for better context.
export const mantrasData: Mantra[] = [
  {
    id: "karacharana",
    title: "Karacharana Kritam (Prayer for Forgiveness)",
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
    sanskrit: `ॐ नमः शिवाय`,
    transliteration: `Om Namaḥ Śivāya`, // Added diacritic for consistency
    meaning: "Om, Salutations to Lord Shiva. This five-syllable mantra encapsulates the essence of Shaivism and is a powerful invocation of Shiva's grace and presence.",
    aiHint: "om namah shivaya mantra five syllables shiva devotion meditation"
   }
];

// Function to get all mantras
export const getAllMantras = (): Mantra[] => {
  return mantrasData;
};

// Function to get a specific mantra by ID
export const getMantraById = (id: string): Mantra | undefined => {
  return mantrasData.find(mantra => mantra.id === id);
};
