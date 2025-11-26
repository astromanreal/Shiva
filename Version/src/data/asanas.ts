
import type { StaticImageData } from 'next/image';

export interface Asana {
  id: string;
  name: string;
  sanskritName?: string;
  description: string;
  type: string; // "Standing", "Sitting", "Reclining", "Balancing", "Inversion", etc.
  benefits: string[];
  image?: string | StaticImageData;
  aiHint?: string;
}

export const asanasData: Asana[] = [
  {
    id: "tadasana",
    name: "Mountain Pose",
    sanskritName: "ताडासन",
    description: "Tadasana is a foundational standing pose that cultivates stability, grounding, and awareness of posture. It aligns the body and engages core muscles.",
    type: "Standing",
    benefits: [
      "Improves posture and alignment",
      "Strengthens core muscles",
      "Grounds the body and mind",
      "Increases awareness of body mechanics"
    ],
    aiHint: "mountain pose tadasana standing grounding stability"
  },
  {
    id: "adho-mukha-svanasana",
    name: "Downward-Facing Dog",
    sanskritName: "अधोमुखश्वानासन",
    description: "Adho Mukha Svanasana is a versatile pose that stretches the entire body, strengthens the arms and legs, and calms the mind. It's often used as a transition in vinyasa flows.",
    type: "Standing",
    benefits: [
      "Stretches hamstrings, calves, and spine",
      "Strengthens arms and shoulders",
      "Calms the mind",
      "Relieves stress and mild depression"
    ],
    aiHint: "downward facing dog adho mukha svanasana stretch arms legs calm"
  },
  {
    id: "vrikshasana",
    name: "Tree Pose",
    sanskritName: "वृक्षासन",
    description: "Vrikshasana is a balancing pose that improves focus, concentration, and a sense of rootedness. It strengthens the legs and ankles while opening the hips.",
    type: "Standing, Balancing",
    benefits: [
      "Improves balance and coordination",
      "Strengthens legs and ankles",
      "Opens the hips",
      "Enhances focus and concentration"
    ],
    aiHint: "tree pose vrikshasana balancing focus concentration rooted"
  },
  {
    id: "trikonasana",
    name: "Triangle Pose",
    sanskritName: "त्रिकोणासन",
    description: "Trikonasana is a standing pose that stretches the sides of the body, strengthens the legs, and improves stability and balance.",
    type: "Standing",
    benefits: [
      "Stretches and strengthens the legs, knees, ankles, arms, and chest",
      "Stimulates the abdominal organs",
      "Increases mental and physical equilibrium",
      "Relieves stress"
    ],
    aiHint: "triangle pose trikonasana side stretch legs stability balance"
  },
  {
    id: "virabhadrasana-ii",
    name: "Warrior II",
    sanskritName: "वीरभद्रासन II",
    description: "Virabhadrasana II is a powerful standing pose that strengthens the legs, opens the hips, and increases stamina and focus.",
    type: "Standing",
    benefits: [
      "Strengthens legs, arms, and core",
      "Opens hips and chest",
      "Increases stamina and balance",
      "Promotes courage and inner strength"
    ],
    aiHint: "warrior 2 virabhadrasana ii strength stamina focus power"
  },
  {
    id: "paschimottanasana",
    name: "Seated Forward Bend",
    sanskritName: "पश्चिमोत्तानासन",
    description: "Paschimottanasana is a seated forward bend that stretches the entire back of the body, calms the mind, and relieves stress.",
    type: "Sitting, Forward bend",
    benefits: [
      "Stretches spine, shoulders, hamstrings",
      "Stimulates liver, kidneys, ovaries, and uterus",
      "Calms the brain",
      "Relieves stress and mild depression"
    ],
    aiHint: "seated forward bend paschimottanasana stretch spine calm stress"
  },
   {
    id: "setu-bandha-sarvangasana",
    name: "Bridge Pose",
    sanskritName: "सेतुबन्धसर्वाङ्गासन",
    description: "Setu Bandha Sarvangasana strengthens the back muscles, stretches the chest and shoulders, and calms the brain.",
    type: "Inversion, Backbend",
    benefits: [
      "Strengthens the back muscles",
      "Stretches the chest, shoulders, and thighs",
      "Improves circulation",
      "Calms the brain and nervous system"
    ],
    aiHint: "bridge pose setu bandha sarvangasana inversion backbend strength stretch"
  },
   {
    id: "bhujangasana",
    name: "Cobra Pose",
    sanskritName: "भुजङ्गासन",
    description: "Bhujangasana is a reclining backbend that opens the chest, strengthens the spine, and stimulates the abdominal organs.",
    type: "Reclining, Backbend",
    benefits: [
      "Stretches chest, shoulders, and abdomen",
      "Strengthens the spine",
      "Stimulates abdominal organs",
      "Relieves stress and fatigue"
    ],
    aiHint: "cobra pose bhujangasana reclining backbend chest spine strength"
  },
  {
    id: "shavasana",
    name: "Corpse Pose",
    sanskritName: "शवासन",
    description: "Shavasana is a pose of complete relaxation, designed to integrate the benefits of the practice and promote deep rest.",
    type: "Reclining",
    benefits: [
      "Calms the nervous system",
      "Reduces stress and anxiety",
      "Lowers blood pressure",
      "Promotes deep relaxation and body awareness"
    ],
    aiHint: "corpse pose shavasana reclining relaxation stress nervous system"
  },

  // Add more asanas following this pattern
];

// Function to get all Asanas
export const getAllAsanas = (): Asana[] => {
  return asanasData;
};

// Function to get a specific Asana by ID
export const getAsanaById = (id: string): Asana | undefined => {
  return asanasData.find(asana => asana.id === id);
};

