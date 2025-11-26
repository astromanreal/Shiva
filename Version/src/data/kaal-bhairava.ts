
export interface KaalBhairavaInfo {
    id: string;
    title: string;
    description: string;
    symbolism: string[];
    significance: string[];
    worship: string[];
    mantra: string;
    ashtakamTitle: string;
    ashtakamIntro: string;
    ashtakam: { verse: number; sanskrit: string; meaning?: string }[]; // Added optional meaning field
    aiHint: string;
}

export const kaalBhairavaData: KaalBhairavaInfo = {
    id: "kaal-bhairava",
    title: "Kaal Bhairava (काल भैरव)",
    description: "Kāla Bhairava is a Shaivite and Vajrayāna deity worshipped by Hindus and Buddhists. In Shaivism, he is a powerful manifestation, or avatar, of Shiva. In the tradition of Kashmir Shaivism, Bhairava represents the Supreme Reality, synonymous to Para Brahman. Generally in Hinduism, Bhairava is also called Dandapāni (\"[he who holds the] danda in [his] hand\"), as he holds a rod or danda to punish sinners, and Svaśva, meaning, \"he whose vehicle is a dog\". In Vajrayana Buddhism, he is considered a fierce emanation of boddhisatva Mañjuśrī, and also called Heruka, Vajrabhairava, Mahākāla and Yamantaka. Bhairava is worshipped throughout India, Nepal, Indonesia, Sri Lanka, and Japan, as well as in Tibetan Buddhism.",
    symbolism: [
        "Dog as Vahana: Represents Dharma, loyalty, and the ability to see beyond illusion.",
        "Skull (Kapala): Symbolizes detachment from ego and the physical form, transcending death.",
        "Trident/Danda (Staff): Represents the power to punish, control time, and destroy negativity.",
        "Fearsome Appearance: Instills fear in evil forces and removes fear from devotees.",
        "Garland of Skulls: Represents mastery over death and time.",
    ],
    significance: [
        "Lord of Time (Kala): Controls the flow of time and destiny.",
        "Guardian of Kashi: Protects the sacred city; it's believed one cannot attain moksha in Kashi without his grace.",
        "Destroyer of Fear & Ego: Helps devotees overcome internal and external fears and dissolve the ego.",
        "Remover of Obstacles & Sins: Worship helps clear hurdles and absolve sins.",
        "Connection to Death: Guides souls and presides over the transition.",
    ],
    worship: [
        "Prayers for protection against untimely death, fear, and negative energies.",
        "Worshipped particularly on Bhairava Ashtami.",
        "Offerings often include black items, mustard oil, and items associated with dogs.",
        "Considered essential for pilgrims visiting Kashi.",
    ],
    mantra: "ॐ कालभैरवाय नमः (Om Kalabhairavaya Namah)",
    ashtakamTitle: "Kaal Bhairava Ashtakam (कालभैरवाष्टकम्)",
    ashtakamIntro: "Composed by Adi Shankaracharya, this powerful hymn praises Kaal Bhairava, the supreme Lord of Kashi, seeking his protection and grace.",
    ashtakam: [
        {
            verse: 1,
            sanskrit: "देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं\nव्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम् ।\nनारदादियोगिवृन्दवन्दितं दिगंबरं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥१॥",
            meaning: "I worship Kaal Bhairava, the supreme Lord of Kashi, whose lotus feet are revered by Indra (King of Devas), who wears a serpent as his sacred thread, has the moon on his forehead, is the bestower of mercy, is praised by Narada and other yogis, and is Digambara (clad in directions/naked)."
        },
        {
            verse: 2,
            sanskrit: "भानुकोटिभास्वरं भवाब्धितारकं परं\nनीलकण्ठमीप्सितार्थदायकं त्रिलोचनम् ।\nकालकालमंबुजाक्षमक्षशूलमक्षरं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥२॥",
            meaning: "I worship Kaal Bhairava, the supreme Lord of Kashi, who shines like millions of suns, helps cross the ocean of existence, is supreme, has a blue throat, grants desired boons, has three eyes, is the death of death (Kala), has lotus-like eyes, holds an invincible trident (or spear), and is imperishable."
        },
        {
            verse: 3,
            sanskrit: "शूलटङ्कपाशदण्डपाणिमादिकारणं\nश्यामकायमादिदेवमक्षरं निरामयम् ।\nभीमविक्रमं प्रभुं विचित्रताण्डवप्रियं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥३॥",
            meaning: "I worship Kaal Bhairava, the supreme Lord of Kashi, who holds a trident, axe, noose, and staff; the primeval cause, dark-bodied, the first god, imperishable, free from disease, possesses formidable prowess, the Lord who loves the wondrous Tandava dance."
        },
        {
            verse: 4,
            sanskrit: "भुक्तिमुक्तिदायकं प्रशस्तचारुविग्रहं\nभक्तवत्सलं स्थितं समस्तलोकविग्रहम् ।\nविनिक्वणन्मनोज्ञहेमकिङ्किणीलसत्कटिं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥४॥",
            meaning: "I worship Kaal Bhairava, the supreme Lord of Kashi, the bestower of worldly enjoyment and liberation, having a praiseworthy beautiful form, affectionate towards devotees, abiding as the form of all worlds, whose waist adorned with tiny golden bells tinkles melodiously."
        },
        {
            verse: 5,
            sanskrit: "धर्मसेतुपालकं त्वधर्ममार्गनाशकं\nकर्मपाशमोचकं सुशर्मदायकं विभुम् ।\nस्वर्णवर्णशेषपाशशोभिताङ्गमण्डलं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥५॥",
            meaning: "I worship Kaal Bhairava, the supreme Lord of Kashi, the protector of the bridge of Dharma, the destroyer of the path of Adharma, the liberator from the bonds of Karma, the bestower of good fortune, the omnipresent Lord, whose body is adorned with a golden-hued serpent-noose."
        },
        {
            verse: 6,
            sanskrit: "रत्नपादुकाप्रभाभिरामपादयुग्मकं\nनित्यमद्वितीयमिष्टदैवतं निरञ्जनम् ।\nमृत्युदर्पनाशनं करालदंष्ट्रमोक्षणं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥६॥",
            meaning: "I worship Kaal Bhairava, the supreme Lord of Kashi, whose pair of feet are radiant with gem-studded sandals, who is eternal, without a second, the desired deity, stainless, the destroyer of the pride of Death, and who grants liberation through his fearsome fangs."
        },
        {
            verse: 7,
            sanskrit: "अट्टहासभिन्नपद्मजाण्डकोशसन्ततिं\nदृष्टिपातनष्टपापजालमुग्रशासनम् ।\nअष्टसिद्धिदायकं कपालमालिकाधरं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥७॥",
            meaning: "I worship Kaal Bhairava, the supreme Lord of Kashi, whose loud laughter shatters the multitude of universes born from Brahma, whose mere glance destroys the web of sins, who enforces stern discipline, the bestower of the eight siddhis (accomplishments), wearing a garland of skulls."
        },
        {
            verse: 8,
            sanskrit: "भूतसङ्घनायकं विशालकीर्तिदायकं\nकाशिवासलोकपुण्यपापशोधकं विभुम् ।\nनीतिमार्गकोविदं पुरातनं जगत्पतिं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥८॥",
            meaning: "I worship Kaal Bhairava, the supreme Lord of Kashi, the leader of the ghost hordes, the bestower of vast fame, the purifier of the merits and sins of the people residing in Kashi, the omnipresent Lord, proficient in the path of righteousness, ancient, the lord of the universe."
        },
        // Phalashruti (Benefit Verse) - Often included as 9th
        {
            verse: 9,
            sanskrit: "कालभैरवाष्टकं पठन्ति ये मनोहरं\nज्ञानमुक्तिसाधनं विचित्रपुण्यवर्धनम् ।\nशोकमोहदैन्यलोभकोपतापनाशनं\nते प्रयान्ति कालभैरवाङ्घ्रिसन्निधिं ध्रुवम् ॥९॥",
            meaning: "Those who read this captivating Kaal Bhairava Ashtakam, which is a means to attain knowledge and liberation, increases diverse merits, and destroys sorrow, delusion, poverty, greed, anger, and suffering, will certainly attain the proximity of Kaal Bhairava's feet after death."
        },
    ],
    aiHint: "kaal bhairava fierce shiva kashi guardian dog time"
};


// Function to get Kaal Bhairava data
export const getKaalBhairavaData = (): KaalBhairavaInfo => {
  return kaalBhairavaData;
};
