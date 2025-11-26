
export interface Mudra {
  id: string;
  name: string;
  sanskritName?: string;
  englishName: string;
  otherMeanings?: string;
  description: string;
  aiHint?: string; // For potential future images
}

// Data based on user input, formatted into the interface
const rawMudraData = [
  { sanskrit: "Anjali Mudra", english: "Gesture of reverence", other: "Offering; Prayer", desc: "Palms touching, fingers pointing upward. May be placed in front of the sternum, the forehead, or overhead." },
  { sanskrit: "Dhyana Mudra", english: "Psychic gesture of meditation", other: "", desc: "Upturned hands overlapping each other, usually right on top of left, with the thumbs touching." },
  { sanskrit: "Vāyu Mudra", english: "Psychic gesture of element air", other: "", desc: "Tip of index finger on the ball of the thumb, with thumb over the bent finger. Other three fingers are extended." },
  { sanskrit: "Shunya Mudra", english: "Psychic gesture of void, empty", other: "Shuni Mudra", desc: "Middle finger bent, with thumb over it. Other three fingers are extended. Sometimes, tip of the bent finger on the ball of the thumb." },
  { sanskrit: "Prithvi Mudra", english: "Psychic gesture of element earth", other: "", desc: "Ring finger bent, with thumb over it. Other three fingers are extended." },
  { sanskrit: "Varuna Mudra", english: "Psychic gesture of element water", other: "", desc: "Little finger bent, with thumb over it. Other three fingers are extended." },
  { sanskrit: "Shakti Mudra", english: "Psychic gesture of power", other: "", desc: "Tips of little and ring fingers of both hands touching, with middle and index fingers folded. Sometimes, thumb folded towards the palm." },
  { sanskrit: "Hakini Mudra", english: "", other: "Hand-steepling or finger-tenting", desc: "Joining matching fingertips of right and left hands." },
  { sanskrit: "Prāna Mudra", english: "Psychic gesture to activate life force energy", other: "", desc: "Tips of little finger and ring fingers touch thumb. Other two fingers are extended." },
  { sanskrit: "Apāna Mudra", english: "Psychic gesture of life force", other: "", desc: "Tips of middle and ring fingers touch thumb. Other two fingers are extended." },
  { sanskrit: "Poorna Mudra", english: "Gesture of full breath", other: "Brahma Mudra", desc: "Thumb tucked in, placed at the base of the fingers. Remaining fingers curled over thumb, forming a fist. Hands are then tucked under the navel area, with fingers facing upwards, and back of the fingers touching." },
  { sanskrit: "Jnana Mudra", english: "Psychic gesture of knowledge", other: "Gyana Mudra", desc: "Tip of index finger touches thumb, palm facing downward. Other three fingers are extended." },
  { sanskrit: "Chin Mudra", english: "Psychic gesture of consciousness", other: "", desc: "Tip of index finger touches thumb, palm facing upward. Other three fingers are extended." },
  { sanskrit: "Adi Mudra", english: "The first gesture (as held by a new born baby)", other: "", desc: "Thumb tucked in, placed at the base of the fingers. Remaining fingers curled over thumb, forming a fist." },
  { sanskrit: "Chinmaya Mudra", english: "Pervaded by consciousness mudrā", other: "", desc: "Tip of thumb and index finger touching. Other three fingers are folded." },
  { sanskrit: "Yoni Mudra", english: "Attitude of the womb or source", other: "", desc: "Hands touching by the tips of thumbs and index fingers. Other six fingers are either interlaced or folded and pressed together." },
  { sanskrit: "Bhairav Mudra", english: "Fierce or terrifying attitude", other: "", desc: "Upturned hands overlapping each other, usually right on top of left." },
  { sanskrit: "Hridaya Mudra", english: "Heart gesture", other: "", desc: "Index finger bent under the thumb. Middle and ring finger touching tip of thumb. Little finger extended." },
  { sanskrit: "Vishnu Mudra", english: "Hand gesture of Lord Vishnu", other: "", desc: "Thumb, ring and little finger extended. Index and middle finger folded and touching pad of thumb." },
  { sanskrit: "Granthita Mudra", english: "Knot gesture", other: "", desc: "Thumb and index fingers of each hand touch at tips and are interlaced, other fingers are interlaced and folded at the knuckles." },
  { sanskrit: "Mahasir Mudra", english: "Great head gesture", other: "", desc: "Done with the right hand. Ring finger is curled into the palm. The tips of the index and middle finger touch the tip of the thumb. Little finger extended." },
];

export const mudrasData: Mudra[] = rawMudraData.map(item => ({
  id: item.sanskrit.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''),
  name: item.sanskrit, // Keep original Sanskrit name as primary name
  sanskritName: item.sanskrit,
  englishName: item.english,
  otherMeanings: item.other || undefined, // Set to undefined if empty
  description: item.desc,
  aiHint: `${item.sanskrit.split(' ')[0].toLowerCase()} mudra hand gesture yoga` // Basic AI hint
}));


// Function to get all Mudras
export const getAllMudras = (): Mudra[] => {
  return mudrasData;
};

// Function to get a specific Mudra by ID
export const getMudraById = (id: string): Mudra | undefined => {
  return mudrasData.find(mudra => mudra.id === id);
};
