
export interface SuryaNamaskarMantra {
  step: number;
  asana: string;
  mantra: string;
  translation: string;
  sanskritMantra: string; // Added for display
}

export const suryaNamaskarMantras: SuryaNamaskarMantra[] = [
  {
    step: 1,
    asana: "Tadasana (Pranamasana)", // Often starts in Pranamasana
    mantra: "Oṃ Mitrāya Namaḥ",
    translation: "is affectionate to all",
    sanskritMantra: "ॐ मित्राय नमः",
  },
  {
    step: 2,
    asana: "Urdhva Hastasana",
    mantra: "Oṃ Ravaye Namaḥ",
    translation: "is the cause of all changes",
    sanskritMantra: "ॐ रवये नमः",
  },
  {
    step: 3,
    asana: "Padahastasana (Uttanasana)",
    mantra: "Oṃ Sūryāya Namaḥ",
    translation: "induces all activity",
    sanskritMantra: "ॐ सूर्याय नमः",
  },
  {
    step: 4,
    asana: "Ashwa Sanchalanasana", // One variation uses this
    mantra: "Oṃ Bhānave Namaḥ",
    translation: "diffuses light",
    sanskritMantra: "ॐ भानवे नमः",
  },
  {
    step: 5,
    asana: "Parvatasana (Adho Mukha Svanasana)", // Mountain pose or Downward Dog
    mantra: "Oṃ Khagāya Namaḥ",
    translation: "moves in the sky",
    sanskritMantra: "ॐ खगाय नमः",
  },
  {
    step: 6,
    asana: "Ashtanga Namaskara",
    mantra: "Oṃ Pūṣṇe Namaḥ",
    translation: "nourishes all",
    sanskritMantra: "ॐ पूष्णे नमः",
  },
  {
    step: 7,
    asana: "Bhujangasana",
    mantra: "Oṃ Hiraṇya Garbhāya Namaḥ",
    translation: "contains the golden rays",
    sanskritMantra: "ॐ हिरण्यगर्भाय नमः",
  },
  {
    step: 8,
    asana: "Parvatasana (Adho Mukha Svanasana)",
    mantra: "Oṃ Marīcaye Namaḥ",
    translation: "possesses rays", // Corrected translation
    sanskritMantra: "ॐ मरीचये नमः",
  },
  {
    step: 9,
    asana: "Ashwa Sanchalanasana",
    mantra: "Oṃ Ādityāya Namaḥ",
    translation: "is son of Aditi",
    sanskritMantra: "ॐ आदित्याय नमः",
  },
  {
    step: 10,
    asana: "Padahastasana (Uttanasana)",
    mantra: "Oṃ Savitre Namaḥ",
    translation: "produces everything",
    sanskritMantra: "ॐ सवित्रे नमः",
  },
  {
    step: 11,
    asana: "Urdhva Hastasana",
    mantra: "Oṃ Arkāya Namaḥ",
    translation: "is fit to be worshipped",
    sanskritMantra: "ॐ अर्काय नमः",
  },
  {
    step: 12,
    asana: "Tadasana (Pranamasana)",
    mantra: "Oṃ Bhāskarāya Namaḥ",
    translation: "is the cause of lustre",
    sanskritMantra: "ॐ भास्कराय नमः",
  },
];

// Function to get all mantras
export const getAllSuryaNamaskarMantras = (): SuryaNamaskarMantra[] => {
  return suryaNamaskarMantras;
};
