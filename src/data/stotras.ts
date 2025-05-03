import type { StaticImageData } from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';


export interface StotraVerse {
    verse: number;
    sanskrit: string;
    meaning?: string; // Optional meaning
    transliteration?: string; // Optional transliteration
}

export interface Stotra {
    id: string; // Unique identifier (e.g., "shiva-tandava")
    title: string;
    sanskritTitle?: string; // Optional title in Sanskrit
    description: string; // Brief description of the stotra
    composer?: string; // Optional composer (e.g., Adi Shankaracharya, Ravana)
    deity: string; // Primary deity praised (e.g., Shiva, Kaal Bhairava)
    verses: StotraVerse[];
    aiHint?: string; // Hint for image generation on landing page
    image?: string | StaticImageData; // Optional image for landing page
}

// Data for Stotras
export const stotrasData: Stotra[] = [
    {
        id: "kaal-bhairava-ashtakam",
        title: "Kaal Bhairava Ashtakam",
        sanskritTitle: "कालभैरवाष्टकम्",
        description: "A powerful hymn composed by Adi Shankaracharya praising Kaal Bhairava, the fierce form of Shiva and the guardian Lord of Kashi.",
        composer: "Adi Shankaracharya",
        deity: "Kaal Bhairava (Shiva)",
        verses: [
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
            // Phalashruti (Benefit Verse)
            {
                verse: 9, // Often considered the 9th verse or Phalashruti
                sanskrit: "कालभैरवाष्टकं पठन्ति ये मनोहरं\nज्ञानमुक्तिसाधनं विचित्रपुण्यवर्धनम् ।\nशोकमोहदैन्यलोभकोपतापनाशनं\nते प्रयान्ति कालभैरवाङ्घ्रिसन्निधिं ध्रुवम् ॥९॥",
                meaning: "Those who read this captivating Kaal Bhairava Ashtakam, which is a means to attain knowledge and liberation, increases diverse merits, and destroys sorrow, delusion, poverty, greed, anger, and suffering, will certainly attain the proximity of Kaal Bhairava's feet after death."
            },
        ],
        aiHint: "kaal bhairava shiva kashi adi shankaracharya fierce",
        image: `https://picsum.photos/seed/kaal-bhairava-stotra/400/225`
    },
    {
        id: "shiva-tandava-stotram",
        title: "Shiva Tandava Stotram",
        sanskritTitle: "शिवताण्डवस्तोत्रम्",
        description: "A powerful and rhythmic hymn attributed to Ravana, describing Lord Shiva's cosmic Tandava dance, his power, and his beauty.",
        composer: "Ravana",
        deity: "Shiva (Nataraja)",
        verses: [
             {
                verse: 1,
                sanskrit: "जटाटवीगलज्जलप्रवाहपावितस्थले\nगलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम् ।\nडमड्डमड्डमड्डमन्निनादवड्डमर्वयं\nचकार चण्डताण्डवं तनोतु नः शिवः शिवम् ॥१॥",
                meaning: "From the forest of his matted locks, water flows and sanctifies the ground. On his neck hangs the high garland of the serpent king. The Damaru drum emits the sound 'Damat, Damat, Damat, Damat'. Shiva performed the fierce Tandava dance – may that Shiva extend auspiciousness to us."
            },
            {
                verse: 2,
                sanskrit: "जटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी-\n-विलोलवीचिवल्लरीविराजमानमूर्धनि ।\nधगद्धगद्धगज्ज्वलल्ललाटपट्टपावके\nकिशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम ॥२॥",
                meaning: "The celestial river Ganges, swirling in the deep well of his matted hair, moves playfully. His forehead blazes with fire – Dhagad, Dhagad, Dhagad. The crescent moon adorns his head like a jewel. May my delight be in Shiva, moment by moment."
            },
             {
                verse: 3,
                sanskrit: "धराधरेन्द्रनंदिनीविलासबन्धुबन्धुर-\nस्फुरद्दिगन्तसन्ततिप्रमोदमानमानसे ।\nकृपाकटाक्षधोरणीनिरुद्धदुर्धरापदि\nक्वचिद्दिगम्बरे मनो विनोदमेतु वस्तुनि ॥३॥",
                 meaning: "My mind seeks joy in Shiva, whose mind delights in the consort of the mountain king (Parvati). His compassionate glance arrests unbearable hardship. He is the one who wears the directions as his garment (Digambara)."
            },
             {
                verse: 4,
                sanskrit: "जटाभुजङ्गपिङ्गलस्फुरत्फणामणिप्रभा-\nकदम्बकुङ्कुमद्रवप्रलिप्तदिग्वधूमुखे ।\nमदान्धसिन्धुरस्फुरत्त्वगुत्तरीयमेदुरे\nमनो विनोदमद्भुतं बिभर्तु भूतभर्तरि ॥४॥",
                meaning: "May my mind find wonderful delight in the Lord of all beings (Bhūtabhartṛ). The radiant jewel on the hood of the serpent coiled in his matted hair spreads a reddish glow (like kumkuma) on the faces of the Dik-Vadhūs (goddesses of directions). He is covered by the skin of a majestic, intoxicated elephant."
            },
            {
                verse: 5,
                 sanskrit: "सहस्रलोचनप्रभृत्यशेषलेखशेखर-\nप्रसूनधूलिधोरणी विधूसराङ्घ्रिपीठभूः ।\nभुजङ्गराजमालया निबद्धजाटजूटकः\nश्रियै चिराय जायतां चकोरबन्धुशेखरः ॥५॥",
                meaning: "May Shiva, whose footstool is grayed by the dust from flowers fallen from the heads of all gods – Indra (Sahasralochana) and others – whose matted locks are tied by the serpent king garland, and who has the crescent moon (friend of the Chakora bird) as his crest-jewel, grant long-lasting prosperity."
            },
            {
                verse: 6,
                sanskrit:"ललाटचत्वरज्वलद्धनञ्जयस्फुलिङ्गभा-\nनिपीतपञ्चसायकं नमन्निलिम्पनायकम् ।\nसुधामयूखलेखया विराजमानशेखरं\nमहाकपालिसम्पदेशिरोजटालमस्तु नः ॥६॥",
                 meaning: "May we obtain the wealth of Siddhis from the tangled locks of Shiva, whose crest is adorned by the crescent moon (with nectar rays). He consumed the God of Love (Pañchasāyaka) with the sparks of fire blazing on his forehead. He is bowed to by all celestial leaders."
            },
            {
                verse: 7,
                 sanskrit:"करालभालपट्टिकाधगद्धगद्धगज्ज्वल-\nद्धनञ्जयाहुतीकृतप्रचण्डपञ्चसायके ।\nधराधरेन्द्रनन्दिनीकुचाग्रचित्रपत्रक-\n-प्रकल्पनैकशिल्पिनि त्रिलोचने रतिर्मम ॥७॥",
                meaning:"My delight is in the Three-Eyed Lord (Trilochana), who offered the mighty God of Love (Pañchasāyaka) to the fire blazing 'Dhagad, Dhagad' on his terrifying forehead. He is the sole artist capable of drawing decorative lines (patra-rekhas) on the breasts of Parvati, the daughter of the mountain king."
            },
            {
                verse: 8,
                sanskrit:"नवीनमेघमण्डली निरुद्धदुर्धरस्फुरत्-\nकुहूनिशीथिनीतमः प्रबन्धबद्धकन्धरः ।\nनिलिम्पनिर्झरीधरस्तनोतु कृत्तिसिन्धुरः\nकलानिधानबन्धुरः श्रियं जगद्धुरन्धरः ॥८॥",
                meaning:"May Shiva, the bearer of the universe's burden, grant us prosperity. His neck is dark like layers of new clouds on a moonless night (Amavasya). He bears the celestial river. He wears the elephant hide. His crest is adorned by the crescent moon (storehouse of arts)."
            },
             {
                verse: 9,
                sanskrit: "प्रफुल्लनीलपङ्कजप्रपञ्चकालिमप्रभा-\n-वलम्बिकण्ठकन्दलीरुचिप्रबद्धकन्धरम् ।\nस्मरच्छिदं पुरच्छिदं भवच्छिदं मखच्छिदं\nगजच्छिदान्धकच्छिदं तमन्तकच्छिदं भजे ॥९॥",
                 meaning:"I worship Him whose neck, holding the dark glow of the fully bloomed blue lotus series (resembling the universe's darkness), looks beautiful. I worship the destroyer of Manmatha (Smara), the destroyer of Tripura, the destroyer of worldly existence (Bhava), the destroyer of Daksha's sacrifice (Makha), the destroyer of Gajasura, the destroyer of Andhakasura, and the destroyer of Yama (Antaka)."
            },
             {
                verse: 10,
                 sanskrit: "अखर्वसर्वमङ्गलाकलाकदम्बमञ्जरी-\nरसप्रवाहमाधुरी विजृम्भणामधुव्रतम् ।\nस्मरान्तकं पुरान्तकं भवान्तकं मखान्तकं\nगजान्तकान्धकान्तकं तमन्तकान्तकं भजे ॥१०॥",
                 meaning:"I worship Him – the destroyer of Manmatha, Tripura, Bhava, Makha, Gajasura, Andhakasura, and Yama. He is like a bee enjoying the expanding sweetness from the nectar-flow of the cluster of auspicious Kadamba flowers (representing Parvati or auspicious arts)."
            },
            {
                verse: 11,
                 sanskrit: "जयत्वदभ्रविभ्रमभ्रमद्भुजङ्गमश्वस-\nद्विनिर्गमत्क्रमस्फुरत्करालभालहव्यवाट् ।\nधिमिद्धिमिद्धिमिध्वनन्मृदङ्गतुङ्गमङ्गल-\nध्वनिक्रमप्रवर्तितप्रचण्डताण्डवः शिवः ॥११॥",
                meaning:"Victorious is Shiva, whose fierce Tandava dance unfolds step-by-step to the auspicious, high-pitched sounds 'Dhimit, Dhimit, Dhimit' from the Mridanga drum. Fire emanates from His fierce forehead due to the breath of the serpent whirling violently in the sky."
            },
            {
                verse: 12,
                 sanskrit: "दृषद्विचित्रतल्पयोर्भुजङ्गमौक्तिकस्रजोर्-\n-गरिष्ठरत्नलोष्ठयोः सुहृद्विपक्षपक्षयोः ।\nतृणारविन्दचक्षुषोः प्रजामहीमहेन्द्रयोः\nसमं प्रवर्तयन्मनः कदा सदाशिवं भजे ॥१२॥",
                meaning:"When will I worship Lord Sadashiva, the eternally auspicious one, with an equal vision towards diverse paths, a serpent and a pearl garland, the most precious gem and a lump of dirt, a friend and an enemy, a blade of grass and a lotus-eyed person, common people and the emperor?"
            },
            {
                verse: 13,
                 sanskrit: "कदा निलिम्पनिर्झरीनिकुञ्जकोटरे वसन्\nविमुक्तदुर्मतिः सदा शिरः स्थमञ्जलिं वहन् ।\nविलोललोललोचनो ललामभाललग्नकः\nशिवेति मन्त्रमुच्चरन् कदा सुखी भवाम्यहम् ॥१३॥",
                meaning:"When will I be happy, living in a cave near the celestial river Ganga, free from ill thoughts, always holding my hands clasped on my head, with ecstatic, rolling eyes, focused on the forehead mark (tilaka), uttering the mantra 'Shiva'?"
            },
             {
                 verse: 14,
                 sanskrit: "इदम् हि नित्यमेवमुक्तमुत्तमोत्तमं स्तवं\nपठन्स्मरन्ब्रुवन्नरो विशुद्धिमेतिसन्ततम् ।\nहरे गुरौ सुभक्तिमाशु याति नान्यथा गतिं\nविमोहनं हि देहिनां सुशङ्करस्य चिन्तनम् ॥१४॥",
                meaning: "Whoever reads, remembers, and recites this supreme, best stotram daily, attains constant purity. He quickly obtains deep devotion unto Guru Hara (Shiva). There is no other way or refuge. Indeed, contemplation of Shankara is captivating for beings."
            },
            {
                 verse: 15, // Phalashruti part 1
                 sanskrit: "पूजावसानसमये दशवक्त्रगीतं\nयः शम्भुपूजनपरं पठति प्रदोषे ।\nतस्य स्थिरां रथगजेन्द्रतुरङ्गयुक्तां\nलक्ष्मीं सदैव सुमुखीं प्रददाति शम्भुः ॥१५॥",
                 meaning: "One who reads this song, sung by the ten-headed Ravana at the end of Shiva puja during Pradosha (twilight), Shambhu always bestows upon him stable prosperity with chariots, elephants, horses, and a pleasing disposition."
            },
        ],
        aiHint: "shiva tandava dance ravana cosmic fierce rhythm",
        image: `https://picsum.photos/seed/shiva-tandava/400/225`
    },
    {
        id: "rudrashtakam",
        title: "Rudrashtakam",
        sanskritTitle: "रुद्राष्टकम्",
        description: "An Ashtakam (eight-versed hymn) dedicated to Lord Rudra (Shiva), composed by Goswami Tulsidas. It praises Shiva's various attributes and seeks his grace.",
        composer: "Goswami Tulsidas",
        deity: "Rudra (Shiva)",
        verses: [
            {
                verse: 1,
                sanskrit: "नमामीशमीशान निर्वाणरूपं\nविभुं व्यापकं ब्रह्मवेदस्वरूपम् ।\nनिजं निर्गुणं निर्विकल्पं निरीहं\nचिदाकाशमाकाशवासं भजेऽहम् ॥१॥",
                meaning: "I bow to the Lord Ishana, whose form is Liberation itself (Nirvana), the omnipresent and all-pervading Brahman, manifest as the Vedas. I worship Shankara, who is my own Self, devoid of attributes, indivisible, desireless, the conscious ether, residing in the sky (or heart)."
            },
            {
                verse: 2,
                sanskrit: "निराकारमोंकारमूलं तुरीयं\nगिरा ग्यान गोतीतमीशं गिरीशम् ।\nकरालं महाकाल कालं कृपालं\nगुणागार संसारपारं नतोऽहम् ॥२॥",
                meaning: "I bow to the formless One, the root of Omkara, beyond the three states (Turiya). The Lord Girisha (Lord of Mountains), who is beyond speech, knowledge, and senses. The terrifying One, the Time of Mahakala (Great Time), the compassionate One, the abode of qualities, who helps cross the ocean of Samsara (worldly existence)."
            },
            {
                verse: 3,
                sanskrit: "तुषाराद्रि संकाश गौरं गभीरं\nमनोभूत कोटिप्रभा श्री शरीरम् ।\nस्फुरन्मौलि कल्लोलिनी चारु गङ्गा\nलसद्भालबालेन्दु कण्ठे भुजङ्गा ॥३॥",
                meaning: "He is white like the snow-clad mountain (Himalayas), profound. His body possesses the splendor of millions of Kamadevas (God of Love). The beautiful Ganga river flows playfully from His radiant head. The crescent moon adorns His forehead, and serpents grace His neck."
            },
            {
                verse: 4,
                sanskrit: "चलत्कुण्डलं भ्रू सुनेत्रं विशालं\nप्रसन्नाननं नीलकण्ठं दयालम् ।\nMṛgādhīśacarmāmbaraṁ muṇḍamālaṁ\npriyaṁ śaṅkaraṁ sarvanāthaṁ bhajāmi ॥4॥",
                meaning: "With dangling earrings, beautiful eyebrows and large eyes, a cheerful face, a blue throat, the compassionate One. Wearing the skin of the lion king (or elephant hide), adorned with a garland of skulls, I worship Shankara, the beloved Lord of All."
            },
             {
                verse: 5,
                sanskrit: "प्रचण्डं प्रकृष्टं प्रगल्भं परेशं\nअखण्डं अजं भानुकोटिप्रकाशम् ।\nत्रयः शूल निर्मूलनं शूलपाणिं\nभजेऽहं भवानीपतिं भावगम्यम् ॥५॥",
                meaning: "The fierce, excellent, bold, Supreme Lord. Indivisible, unborn, radiant like millions of suns. Holding a trident, He eradicates the three types of suffering. I worship Bhavani's consort (Shiva), who is attainable through loving devotion."
            },
            {
                verse: 6,
                sanskrit: "कलातीत कल्याण कल्पान्तकारी\nसदा सज्जनानन्ददाता पुरारी ।\nचिदानन्द संदोह मोहापहारी\nप्रसीद प्रसीद प्रभो मन्मथारी ॥६॥",
                meaning: "Beyond arts, auspicious, the cause of dissolution at the end of Kalpas (eons). Always the bestower of joy to the virtuous, the enemy of Tripura. The mass of consciousness and bliss, the remover of delusion. Be pleased, be pleased, O Lord, enemy of Manmatha (God of Love)!"
            },
            {
                verse: 7,
                sanskrit: "न यावद् उमानाथ पादारविन्दं\nभजन्तीह लोके परे वा नराणाम् ।\nन तावत्सुखं शान्ति सन्तापनाशं\nप्रसीद प्रभो सर्वभूताधिवासम् ॥७॥",
                meaning: "As long as people in this world or the next do not worship the lotus feet of Umanath (Shiva), they cannot attain happiness, peace, or relief from suffering. Be pleased, O Lord, who resides in all beings!"
            },
            {
                verse: 8,
                sanskrit: "न जानामि योगं जपं नैव पूजां\nनतोऽहं सदा सर्वदा शम्भु तुभ्यम् ।\nजरा जन्म दुःखौघ तातप्यमानं\nप्रभो पाहि आपन्नमामीश शम्भो ॥८॥",
                meaning: "I do not know yoga, japa (chanting), or puja (worship). I always bow to you, Shambhu, forever! Protect me, O Lord, who am afflicted by the torrent of suffering, old age, and birth. Save the distressed, O Lord Shambhu!"
            },
             // Phalashruti (Benefit Verse)
            {
                 verse: 9,
                 sanskrit: "रुद्राष्टकमिदं प्रोक्तं विप्रेण हरतोषये\nये पठन्ति नरा भक्त्या तेषां शम्भुः प्रसीदति ॥९॥",
                 meaning: "This Rudrashtakam was uttered by the Vipra (Brahmin - Tulsidas) for the pleasure of Hara (Shiva). Those people who read it with devotion, Shambhu becomes pleased with them."
            },
        ],
        aiHint: "shiva rudra tulsidas hymn peace devotion",
        image: `https://picsum.photos/seed/rudrashtakam/400/225`
    },
    {
        id: "shiva-panchakshara-stotram",
        title: "Shiva Panchakshara Stotram",
        sanskritTitle: "शिव पञ्चाक्षर स्तोत्रम्",
        description: "A beautiful hymn by Adi Shankaracharya praising Lord Shiva through the five sacred syllables 'Na-Ma-Shi-Va-Ya'. Each verse begins with one syllable.",
        composer: "Adi Shankaracharya",
        deity: "Shiva",
        verses: [
            {
                verse: 1,
                sanskrit: "नागेन्द्रहाराय त्रिलोचनाय\nभस्माङ्गरागाय महेश्वराय ।\nनित्याय शुद्धाय दिगम्बराय\nतस्मै न काराय नमः शिवाय ॥१॥",
                meaning: "Salutations to Shiva, who wears the king of snakes as a garland, the Three-Eyed God, whose body is smeared with sacred ash, the Great Lord (Maheshvara), the eternal, the pure, the Digambara (clad in directions) - to that 'Na' syllable, Salutations to Shiva!"
            },
            {
                verse: 2,
                sanskrit: "मन्दाकिनीसलिलचन्दनचर्चिताय\nनन्दीश्वरप्रमथनाथमहेश्वराय ।\nमन्दारपुष्पबहुपुष्पसुपूजिताय\nतस्मै म काराय नमः शिवाय ॥२॥",
                meaning: "Salutations to Shiva, who is worshipped with water from the Mandakini river and sandalwood paste, the Lord of Nandi and the Pramatha ganas, the Great Lord, worshipped with Mandara and many other flowers - to that 'Ma' syllable, Salutations to Shiva!"
            },
            {
                verse: 3,
                sanskrit: "शिवाय गौरीवदनाब्जवृन्द\nसूर्याय दक्षाध्वरनाशकाय ।\nश्रीनीलकण्ठाय वृषध्वजाय\nतस्मै शि काराय नमः शिवाय ॥३॥",
                meaning: "Salutations to Shiva, who is auspiciousness itself, the sun that makes Gauri's (Parvati's) lotus-face bloom, the destroyer of Daksha's sacrifice, the one with the auspicious blue throat, whose flag bears the emblem of the bull - to that 'Shi' syllable, Salutations to Shiva!"
            },
            {
                verse: 4,
                sanskrit: "वसिष्ठकुम्भोद्भवगौतमार्य\nमूनीन्द्रदेवार्चितशेखराय ।\nचन्द्रार्कवैश्वानरलोचनाय\nतस्मै व काराय नमः शिवाय ॥४॥",
                meaning: "Salutations to Shiva, whose crest is worshipped by the best sages like Vasishtha, Agastya (Kumbhodbhava), Gautama, and by the gods, whose eyes are the moon, sun, and fire - to that 'Va' syllable, Salutations to Shiva!"
            },
            {
                verse: 5,
                sanskrit: "यक्षस्वरूपाय जटाधराय\nपिनाकहस्ताय सनातनाय ।\nदिव्याय देवाय दिगम्बराय\nतस्मै य काराय नमः शिवाय ॥५॥",
                meaning: "Salutations to Shiva, who has the form of a Yaksha, who bears matted locks, who holds the Pinaka bow in his hand, the eternal one, the divine God, the Digambara - to that 'Ya' syllable, Salutations to Shiva!"
            },
            // Phalashruti (Benefit Verse)
            {
                verse: 6,
                sanskrit: "पञ्चाक्षरमिदं पुण्यं यः पठेच्छिवसन्निधौ ।\nशिवलोकमावाप्नोति शिवेन सह मोदते ॥६॥",
                meaning: "Whoever reads this sacred five-syllable hymn in the presence of Shiva, attains the abode of Shiva (Shivaloka) and rejoices with Shiva."
            },
        ],
        aiHint: "shiva panchakshara mantra adi shankaracharya five syllables nagendra",
        image: `https://picsum.photos/seed/panchakshara/400/225`
    },
    {
        id: "shiva-shadakshara-stotram",
        title: "Shiva Shadakshara Stotram",
        sanskritTitle: "शिव षडक्षर स्तोत्रम्",
        description: "A devotional hymn meditating on Lord Shiva through the power of each syllable in the six-syllable mantra 'Om Namah Shivaya'.",
        composer: "Often attributed to Adi Shankaracharya or found in Puranas",
        deity: "Shiva",
        verses: [
            {
                verse: 1,
                sanskrit: "ॐ कारं बिंदुसंयुक्तं नित्यं ध्यायन्ति योगिनः ।\nकामदं मोक्षदं चैव ॐ काराय नमो नमः ॥१॥",
                meaning: "Yogis constantly meditate on 'Omkara' associated with the Bindu (point/source). It grants desires and liberation. Salutations again and again to that 'Omkara'!"
            },
            {
                verse: 2,
                sanskrit: "नमंति ऋषयो देवा नमन्त्यप्सरसां गणाः ।\nनरा नमंति देवेशं न काराय नमो नमः ॥२॥",
                meaning: "Sages and Devas bow down, groups of Apsaras bow down, humans bow down to the Lord of Gods (Devesha). Salutations again and again to that 'Na' syllable!"
            },
            {
                verse: 3,
                sanskrit: "महादेवं महात्मानं महाध्यानपरायणम् ।\nमहापापहरं देवं म काराय नमो नमः ॥३॥",
                meaning: "The Great God (Mahadeva), the great soul (Mahatma), deeply absorbed in meditation (Mahadhyana), the God who destroys great sins. Salutations again and again to that 'Ma' syllable!"
            },
            {
                verse: 4,
                sanskrit: "शिवं शान्तं जगन्नाथं लोकानुग्रहकारकम् ।\nशिवमेकपदं नित्यं शि काराय नमो नमः ॥४॥",
                meaning: "Shiva, the peaceful, the Lord of the Universe (Jagannatha), who bestows grace upon the worlds. Shiva is the one eternal word/state. Salutations again and again to that 'Shi' syllable!"
            },
            {
                verse: 5,
                sanskrit: "वाहनं वृषभो यस्य वासुकिः कण्ठभूषणम् ।\nवामे शक्तिधरं देवं व काराय नमो नमः ॥५॥",
                meaning: "He whose vehicle (vahana) is the bull (Vrishabha), whose neck ornament is Vasuki (the serpent king). The God who holds Shakti (power/Parvati) on his left side. Salutations again and again to that 'Va' syllable!"
            },
            {
                verse: 6,
                sanskrit: "यत्र यत्र स्थितो देवः सर्वव्यापी महेश्वरः ।\nयो गुरुः सर्वदेवानां य काराय नमो नमः ॥६॥",
                meaning: "Wherever the God is situated, the all-pervading Great Lord (Maheshvara). He who is the Guru of all Gods. Salutations again and again to that 'Ya' syllable!"
            },
            // Phalashruti (Benefit Verse)
            {
                verse: 7,
                sanskrit: "षडक्षरमिदं स्तोत्रं यः पठेच्छिवसन्निधौ ।\nशिवलोकमवाप्नोति शिवेन सह मोदते ॥७॥",
                meaning: "Whoever reads this six-syllable hymn in the presence of Shiva, attains the abode of Shiva (Shivaloka) and rejoices with Shiva."
            },
        ],
        aiHint: "shiva shadakshara mantra om namah shivaya six syllables meditation",
        image: `https://picsum.photos/seed/shadakshara/400/225`
    },
    {
        id: "dakshinamurthy-stotram",
        title: "Dakshinamurthy Stotram",
        sanskritTitle: "दक्षिणामूर्ति स्तोत्रम्",
        description: "A profound hymn by Adi Shankaracharya praising Lord Shiva as Dakshinamurthy, the cosmic teacher who imparts knowledge through silence.",
        composer: "Adi Shankaracharya",
        deity: "Shiva (Dakshinamurthy)",
        verses: [
            // Dhyana Slokas (Prefix with verse 0.x)
             {
                verse: 0.1,
                sanskrit: "मौनव्याख्या प्रकटित परब्रह्मतत्त्वं युवानं\nवर्षिष्ठांते वसद् ऋषिगणैः आवृतं ब्रह्मनिष्ठैः ।\nआचार्येन्द्रं करकलित चिन्मुद्रमानंदमूर्तिं\nस्वात्मारामं मुदितवदनं दक्षिणामूर्तिमीडे ॥१॥",
                 meaning: "I praise Dakshinamurthy, the young Guru who reveals the knowledge of the supreme Brahman through silent explanation, who is surrounded by aged disciples established in Brahman, the best of teachers, whose hand holds the Chinmudra, the embodiment of bliss, who rejoices in his own Self, and whose face is joyful.",
                 transliteration: "Mauna-Vyaakhyaa Prakattita Para-Brahma-Tattvam Yuvaanam\nVarssisstthaam-Te Vasad Rssigannaih Aavrtam Brahma-Nisstthaih |\nAacaarye[a-I]ndram Kara-Kalita Cin-Mudram-Aananda-Muurtim\nSva-[A]atmaaraamam Mudita-Vadanam Dakssinnaamuurti-Miidde ||1||"
            },
            {
                verse: 0.2,
                sanskrit: "वटविटपिसमीपेभूमिभागे निषण्णं\nसकलमुनिजनानां ज्ञानदातारमारात् ।\nत्रिभुवनगुरुमीशं दक्षिणामूर्तिदेवं\nजननमरणदुःखच्छेद दक्षं नमामि ॥२॥",
                 meaning: "I bow to Lord Dakshinamurthy, seated on the ground near the Banyan tree, the nearby bestower of knowledge to all sages, the Guru of the three worlds, the Lord, adept at cutting away the sorrows of birth and death.",
                transliteration: "Vatta-Vittapi-Samiipe-Bhuumi-Bhaage Nissannnnam\nSakala-Muni-Janaanaam Jnyaana-Daataaram-Aaraat |\nTri-Bhuvana-Gurum-Iisham Dakssinnaamuurti-Devam\nJanana-Maranna-Duhkhac-Cheda Dakssam Namaami ||2||"
            },
            {
                verse: 0.3,
                sanskrit: "चित्रं वटतरोर्मूले वृद्धाः शिष्या गुरुर्युवा ।\nगुरोस्तु मौनं व्याख्यानं शिष्यास्तुच्छिन्नसंशयाः ॥३॥",
                 meaning: "Wonderful! Under the Banyan tree, the disciples are old, the Guru is young. The Guru's explanation is silence, yet the disciples' doubts are dispelled.",
                transliteration: "Citram Vatta-Taror-Muule Vrddhaah Shissyaa Gurur-Yuvaa |\nGuros-Tu Maunam Vyaakhyaanam Shissyaas-Tuc-Chinna-Samshayaah ||3||"
            },
             {
                verse: 0.4,
                sanskrit: "निधये सर्वविद्यानां भिषजे भवरोगिणाम् ।\nगुरवे सर्वलोकानां दक्षिणामूर्तये नमः ॥४॥",
                 meaning: "Salutations to Dakshinamurthy, the repository of all knowledge, the physician for those afflicted by the disease of worldly existence (samsara), the Guru of all worlds.",
                transliteration: "Nidhaye Sarva-Vidyaanaam Bhissaje Bhava-Roginnaam |\nGurave Sarva-Lokaanaam Dakssinnaamuurtaye Namah ||4||"
            },
            {
                verse: 0.5,
                sanskrit: "ॐ नमः प्रणवार्थाय शुद्धज्ञानैकमूर्तये ।\nनिर्मलाय प्रशान्ताय दक्षिणामूर्तये नमः ॥५॥",
                 meaning: "Om, Salutations to Dakshinamurthy, who is the meaning of Pranava (Om), the embodiment of pure, non-dual knowledge, stainless and utterly peaceful.",
                transliteration: "Om Namah Prannava-Arthaaya Shuddha-Jnyaanai[a-E]ka-Muurtaye |\nNirmalaaya Prashaantaaya Dakssinnaamuurtaye Namah ||5||"
            },
            {
                verse: 0.6,
                sanskrit: "चिद्घनाय महेशाय वटमूलनिवासिने ।\nसच्चिदानन्दरूपाय दक्षिणामूर्तये नमः ॥६॥",
                 meaning: "Salutations to Dakshinamurthy, the mass of consciousness, the Great Lord residing under the Banyan tree, whose form is Existence-Consciousness-Bliss (Satchidananda).",
                transliteration: "Cid-Ghanaaya Mahe[aa-Ii]shaaya Vatta-Muula-Nivaasine |\nSac-Cid-Aananda-Ruupaaya Dakssinnaamuurtaye Namah ||6||"
            },
            {
                verse: 0.7,
                sanskrit: "ईश्वरो गुरुरात्मेति मूर्तिभेदविभागिने ।\nव्योमवद् व्याप्तदेहाय दक्षिणामूर्तये नमः ॥७॥",
                 meaning: "Salutations to Dakshinamurthy, who manifests in different forms as God, Guru, and Self, whose body pervades everything like ether (space).",
                transliteration: "Iishvaro Gurur-Aatme[a-I]ti Muurti-Bheda-Vibhaagine |\nVyoma-Vad Vyaapta-Dehaaya Dakssinnaamuurtaye Namah ||7||"
            },
            // Main Stotram Verses
            {
                verse: 1,
                sanskrit: "विश्वं दर्पणदृश्यमाननगरीतुल्यं निजान्तर्गतं\nपश्यन्नात्मनि मायया बहिरिवोद्भूतं यथा निद्रया ।\nयः साक्षात्कुरुते प्रबोधसमये स्वात्मानमेवाद्वयं\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥१॥",
                meaning: "He who sees the universe, which is like a city seen in a mirror, as existing within himself, yet appearing outside due to Maya, like in a dream – upon awakening, realizes his own non-dual Self. To that Sri Gurumurti, this salutation to Sri Dakshinamurthy.",
                transliteration: "Vishvam Darpanna-Drshyamaana-Nagarii-Tulyam Nija-Antargatam\nPashyann-Aatmani Maayayaa Bahir-Ivo[a-U]dbhuutam Yathaa Nidrayaa |\nYah Saakssaat-Kurute Prabodha-Samaye Sva-[A]atmaanam-Eva-Advayam\nTasmai Shrii-Guru-Muurtaye Nama Idam Shrii-Dakssinnaamuurtaye ||1||"
            },
            {
                verse: 2,
                sanskrit: "बीजस्याऽन्तरिवाङ्कुरो जगदिदं प्राङ्गनिर्विकल्पं पुनः\nमायाकल्पितदेशकालकलना वैचित्र्यचित्रीकृतम् ।\nमायावीव विजृम्भयत्यपि महायोगीव यः स्वेच्छया\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥२॥",
                meaning: "This universe, initially undifferentiated like the sprout within a seed, later becomes diverse, painted by the distinctions of space and time conjured by Maya. He who, like a magician or a great Yogi, unfolds this universe by His own will – To that Sri Gurumurti, this salutation to Sri Dakshinamurthy.",
                transliteration: "Biijasya-Antar-Iva-Angkuro Jagad[t]-Idam Praangga-Nirvikalpam Punah\nMaayaa-Kalpita-Desha-Kaala-Kalanaa Vaicitrya-Citrii-Krtam |\nMaayaavi-Iva Vijrmbhayaty-Api Mahaa-Yogi-Iva Yah Sve[a-I]cchayaa\nTasmai Shrii-Guru-Muurtaye Nama Idam Shrii-Dakssinnaamuurtaye ||2||"
            },
            {
                verse: 3,
                sanskrit: "यस्यैव स्फुरणं सदात्मकमसत्कल्पार्थकं भासते\nसाक्षात्तत्त्वमसीति वेदवचसा यो बोधयत्याश्रितान् ।\nयत्साक्षात्करणाद्भवेन्न पुनरावृत्तिर्भवाम्भोनिधौ\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥३॥",
                meaning: "He whose light alone, which is of the nature of Existence (Sat), shines forth appearing as unreal, changing objects. He who teaches his devotees directly through the Vedic statement 'Tat Tvam Asi' (That Thou Art). By realizing Him directly, one does not return to the ocean of worldly existence – To that Sri Gurumurti, this salutation to Sri Dakshinamurthy.",
                transliteration: "Yasya-Eva Sphurannam Sada[a-A]atmakam-Asat-Kalpa-Arthakam Bhaasate\nSaakssaat-Tat-Tvam-Asi-Iti Veda-Vacasaa Yo Bodhayaty-Aashritaan |\nYat-Saakssaat-Karannaad-Bhaven-Na Punaraavrttir-Bhavaam-Bho-Nidhau\nTasmai Shrii-Guru-Muurtaye Nama Idam Shrii-Dakssinnaamuurtaye ||3||"
            },
             {
                verse: 4,
                sanskrit: "नानाच्छिद्रघटोदरस्थितमहादीपप्रभा भास्वरं\nज्ञानं यस्य तु चक्षुरादिकरणद्वारा वहिः स्पन्दते ।\nजानामीति तमेव भान्तमनुभात्येतत्समस्तं जगत्\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥४॥",
                meaning: "He whose knowledge shines forth brilliantly like the light of a great lamp placed inside a pot with many holes, pulsating outwards through the senses like eyes. 'I know' – following Him alone who shines, this entire universe shines – To that Sri Gurumurti, this salutation to Sri Dakshinamurthy.",
                transliteration: "Naanaac-Chidra-Ghatto[a-U]dara-Sthita-Mahaa-Diipa-Prabhaa Bhaasvaram\nJnyaanam Yasya Tu Cakssur-Aadi-Karanna-Dvaaraa Vahih Spandate |\nJaanaam-Iiti Tam-Eva Bhaantam-Anubhaaty-Etat-Samastam Jagat\nTasmai Shrii-Guru-Muurtaye Nama Idam Shrii-Dakssinnaamuurtaye ||4||"
            },
            {
                verse: 5,
                sanskrit: "देहं प्राणमपीन्द्रियाण्यपि चलां बुद्धिं च शून्यं विदुः\nस्त्रीबालान्धजडोपमास्त्वहमिति भ्रान्ता भृशं वादिनः ।\nमायाशक्तिविलासकल्पितमहाव्यामोहसंहारिणे\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥५॥",
                meaning: "Those deluded thinkers who strongly identify 'I' with the body, breath, senses, flickering intellect, or the void – comparable to women, children, the blind, or the dull – He destroys the great delusion created by the play of Maya's power – To that Sri Gurumurti, this salutation to Sri Dakshinamurthy.",
                transliteration: "Deham Praannam-Api-Indriyaanny-Api Calaam Buddhim Ca Shuunyam Viduh\nStrii-Baala-Andha-Jaddo(a-U)pamaas-tv[u-]Aham-Iti Bhraantaa Bhrsham Vaadinah |\nMaayaa-Shakti-Vilaasa-Kalpita-Mahaa-Vyaamoha-Samhaarinne\nTasmai Shrii-Guru-Muurtaye Nama Idam Shrii-Dakssinnaamuurtaye ||5||"
            },
             {
                verse: 6,
                sanskrit: "राहुग्रस्तदिवाकरेन्दुसदृशो मायासमाच्छादनात्\nसन्मात्रः करणोपसंहरणतो योऽभूत्सुषुप्तः पुमान् ।\nप्रागस्वाप्समिति प्रबोधसमये यः प्रत्यभिज्ञायते\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥६॥",
                meaning: "Like the sun or moon eclipsed by Rahu, the Self (Puman), though pure Existence (Sat), becomes dormant (Sushupta) due to the covering of Maya and the withdrawal of senses. He who, upon awakening, recognizes 'Previously, I slept' – To that Sri Gurumurti, this salutation to Sri Dakshinamurthy.",
                transliteration: "Raahu-Grasta-Divaakare[a-I]ndu-Sadrsho Maayaa-Sama-[A]acchaadanaat\nSan-Maatrah Karanno[a-U]pasangharannato Yo(a-A]bhuut-Sussuptah Pumaan |\nPraag-Asvaapsam-Iti Prabodha-Samaye Yah Pratyabhijnyaayate\nTasmai Shrii-Guru-Muurtaye Nama Idam Shrii-Dakssinnaamuurtaye ||6||"
            },
             {
                verse: 7,
                sanskrit: "बाल्यादिष्वपि जाग्रदादिषु तथा सर्वास्ववस्थास्वपि\nव्यावृत्तास्वनुवर्तमानमहमित्यन्तः स्फुरन्तं सदा ।\nस्वात्मानं प्रकटीकरोति भजतां यो मुद्रयाभद्रया\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥७॥",
                meaning: "He who reveals His own Self – which always shines within as 'I', persisting through changing states like childhood etc., and waking etc., even as they cease – to devotees through the auspicious Chinmudra – To that Sri Gurumurti, this salutation to Sri Dakshinamurthy.",
                transliteration: "Baalya-Adissv(u)-Api Jaagrad-Aadissu Tathaa Sarvaasv[u]-Avasthaasv[u]-Api\nVyaavrttaasv[u]-Anu-Vartamaanam-Aham-Ity[i]-Antah Sphurantam Sadaa |\nSva-[A]atmaanam Prakattii-Karoti Bhajataam Yo Mudrayaa-Bhadrayaa\nTasmai Shrii-Guru-Muurtaye Nama Idam Shrii-Dakssinnaamuurtaye ||7||"
            },
            {
                verse: 8,
                sanskrit: "विश्वं पश्यति कार्यकारणतया स्वस्वामिसम्बन्धतः\nशिष्याचार्यतया तथैव पितृपुत्राद्यात्मना भेदतः ।\nस्वप्ने जाग्रति वा य एष पुरुषो मायापरिभ्रामितः\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥८॥",
                meaning: "This very Self (Purusha), deluded by Maya, sees the world in terms of cause-effect, owner-owned relationships, teacher-disciple, and similarly father-son etc., through differentiation, whether in dream or waking state – To that Sri Gurumurti, this salutation to Sri Dakshinamurthy.",
                transliteration: "Vishvam Pashyati Kaarya-Kaaranna-Tayaa Svasvaami-Sambandhatah\nShissya-[A]acaarya-Tayaa Tatha-Eva Pitr-Putraady[i]-Aatmanaa Bhedatah |\nSvapne Jaagrati Vaa Ya Essa Purusso Maayaa-Paribhraamitah\nTasmai Shrii-Guru-Muurtaye Nama Idam Shrii-Dakssinnaamuurtaye ||8||"
            },
            {
                verse: 9,
                sanskrit: "भूरम्भांस्यनलोऽनिलोऽम्बरमहर्नाथो हिमांशु पुमान्\nइत्याभाति चराचरात्मकमिदं यस्यैव मूर्त्यष्टकम्\nनान्यत् किञ्चन विद्यते विमृशतां यस्मात्परस्माद्विभोः\nतस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥९॥",
                meaning: "Earth, water, fire, air, ether, sun, moon, and the individual soul (Puman) – this universe of moving and unmoving things shines forth as His eightfold form. For those who reflect, nothing exists other than Him, the Supreme Lord (Vibhu) – To that Sri Gurumurti, this salutation to Sri Dakshinamurthy.",
                transliteration: "Bhuur-Ambhaamsy-Analo-[A]nilo-[A]mbaram-Aharnaatho Himaamshu Pumaan\nIty[i]-Aabhaati Cara-Acara-[A]atmakam-Idam Yasya-Eva Muurty[i]-Assttakam\nNaanyat Kin.cana Vidyate Vimrshataam Yasmaat-Parasmaad-Vibhoh\nTasmai Shrii-Guru-Muurtaye Nama Idam Shrii-Dakssinnaamuurtaye ||9||"
            },
            // Phalashruti (Benefit Verse)
            {
                verse: 10,
                sanskrit: "सर्वात्मत्वमिति स्फुटीकृतमिदं यस्मादमुष्मिन् स्तवे\nतेनास्य श्रवणात्तदर्थमननाद्ध्यानाच्च संकीर्तनात् ।\nसर्वात्मत्वमहाविभूतिसहितं स्यादीश्वरत्वं स्वतः\nसिद्ध्येत्तत्पुनरष्टधा परिणतं चैश्वर्यमव्याहतम् ॥१०॥",
                meaning: "Because the state of being the Self of all (Sarvatmatva) is clearly revealed in this hymn, by listening to it, reflecting on its meaning, meditating upon it, and chanting it, one spontaneously attains Lordship (Ishvaratva) along with the great glory of being the Self of all, and furthermore, the eightfold unimpeded powers (Aishwarya) will be accomplished.",
                transliteration: "Sarva-[A]atmatvam-Iti Sphuttii-Krtam-Idam Yasmaad-Amussmin Stave\nTena-Asya Shravannaat-Tadartha-Mananaad-Dhyaanaac-Ca Sangkiirtanaat |\nSarva-(A)atmatva-Mahaa-Vibhuuti-Sahitam Syaad-Iishvaratvam Svatah\nSiddhyet-Tat-Punar-Assttadhaa Parinnatam Ca-[A]ishvaryam-Avyaahatam ||10||"
            },
        ],
        aiHint: "shiva dakshinamurthy teacher guru silence wisdom adi shankaracharya",
        image: `https://picsum.photos/seed/dakshinamurthy/400/225`
    },
     {
        id: "lingashtakam",
        title: "Lingashtakam",
        sanskritTitle: "लिङ्गाष्टकम्",
        description: "An Ashtakam praising the Shiva Lingam, the symbolic representation of Lord Shiva, extolling its virtues and significance.",
        composer: "Traditionally attributed to Adi Shankaracharya",
        deity: "Shiva (Lingam)",
        verses: [
            {
                verse: 1,
                sanskrit: "ब्रह्ममुरारिसुरार्चितलिङ्गं निर्मलभासितशोभितलिङ्गम् ।\nजन्मजदुःखविनाशकलिङ्गं तत् प्रणमामि सदाशिवलिङ्गम् ॥१॥",
                meaning: "I bow before that Sadaashiva Lingam, which is adored by Brahma, Vishnu and other Gods, which is pure, radiant, and resplendent, and which destroys the sorrows associated with birth.",
                transliteration: "Brahma-Muraari-Sura-Arcita-Linggam Nirmala-Bhaasita-Shobhita-Linggam |\nJanmaja-Duhkha-Vinaashaka-Linggam Tat Prannamaami Sadaashiva-Linggam ||1||"
            },
            {
                verse: 2,
                sanskrit: "देवमुनिप्रवरार्चितलिङ्गं कामदहं करुणाकरलिङ्गम् ।\nरावणदर्पविनाशनलिङ्गं तत् प्रणमामि सदाशिवलिङ्गम् ॥२॥",
                meaning: "I bow before that Sadaashiva Lingam, which is worshipped by the foremost Devas and Sages, which burns Kama (desire), the compassionate Lingam, and which destroyed the arrogance of Ravana.",
                transliteration: "Deva-Muni-Pravara-Aarcita-Linggam Kaama-Dahan Karunnaa-Kara-Linggam |\nRaavanna-Darpa-Vinaashana-Linggam Tat Prannamaami Sadaashiva-Linggam ||2||"
            },
            {
                verse: 3,
                sanskrit: "सर्वसुगन्धिसुलेपितलिङ्गं बुद्धिविवर्धनकारणलिङ्गम् ।\nसिद्धसुरासुरवन्दितलिङ्गं तत् प्रणमामि सदाशिवलिङ्गम् ॥३॥",
                meaning: "I bow before that Sadaashiva Lingam, which is anointed with all fragrant scents, which is the cause for the growth of wisdom, and which is worshipped by Siddhas, Devas, and Asuras.",
                transliteration: "Sarva-Sugandhi-Sulepita-Linggam Buddhi-Vivardhana-Kaaranna-Linggam |\nSiddha-Sura-Asura-Vandita-Linggam Tat Prannamaami Sadaashiva-Linggam ||3||"
            },
            {
                verse: 4,
                sanskrit: "कनकमहामणिभूषितलिङ्गं फणिपतिवेष्टितशोभितलिङ्गम् ।\nदक्षसुयज्ञविनाशनलिङ्गं तत् प्रणमामि सदाशिवलिङ्गम् ॥४॥",
                meaning: "I bow before that Sadaashiva Lingam, adorned with gold and great jewels, resplendent, encircled by the lord of serpents (Phanipati), and which destroyed the grand sacrifice of Daksha.",
                transliteration: "Kanaka-Mahaamanni-Bhuussita-Linggam Phanni-Pati-Vessttita-Shobhita-Linggam |\nDakssa-Su-Yajnya-Vinaashana-Linggam Tat Prannamaami Sadaashiva-Linggam ||4||"
            },
            {
                verse: 5,
                sanskrit: "कुङ्कुमचन्दनलेपितलिङ्गं पङ्कजहारसुशोभितलिङ्गम् ।\nसञ्चितपापविनाशनलिङ्गं तत् प्रणमामि सदाशिवलिङ्गम् ॥५॥",
                meaning: "I bow before that Sadaashiva Lingam, smeared with Kumkum (vermillion) and Sandalwood paste, beautifully adorned with lotus garlands, and which destroys accumulated sins.",
                transliteration: "Kungkuma-Candana-Lepita-Linggam Pangkaja-Haara-Su-Shobhita-Linggam |\nSan.cita-Paapa-Vinaashana-Linggam Tat Prannamaami Sadaashiva-Linggam ||5||"
            },
            {
                verse: 6,
                sanskrit: "देवगणार्चितसेवितलिङ्गं भावैर्भक्तिभिरेव च लिङ्गम् ।\nदिनकरकोटिप्रभाकरलिङ्गं तत् प्रणमामि सदाशिवलिङ्गम् ॥६॥",
                meaning: "I bow before that Sadaashiva Lingam, worshipped and served by the hosts of Devas with true devotional feelings (Bhavas) and devotion (Bhakti), and whose splendor is like millions of suns.",
                transliteration: "Deva-Ganna-Aarcita-Sevita-Linggam Bhaavair-Bhaktibhir-Eva Ca Linggam |\nDinakara-Kotti-Prabhaakara-Linggam Tat Prannamaami Sadaashiva-Linggam ||6||"
            },
            {
                verse: 7,
                sanskrit: "अष्टदलोपरिवेष्टितलिङ्गं सर्वसमुद्भवकारणलिङ्गम् ।\nअष्टदरिद्रविनाशितलिङ्गं तत् प्रणमामि सदाशिवलिङ्गम् ॥७॥",
                meaning: "I bow before that Sadaashiva Lingam, surrounded by eight-petaled lotuses, the cause of all creation, and the destroyer of the eight forms of poverty.",
                transliteration: "Asstta-Dalo-Parivessttita-Linggam Sarva-Samudbhava-Kaaranna-Linggam |\nAsstta-Daridra-Vinaashita-Linggam Tat Prannamaami Sadaashiva-Linggam ||7||"
            },
            {
                verse: 8,
                sanskrit: "सुरगुरुसुरवरपूजितलिङ्गं सुरवनपुष्पसदार्चितलिङ्गम् ।\nपरात्परं परमात्मकलिङ्गं तत् प्रणमामि सदाशिवलिङ्गम् ॥८॥",
                meaning: "I bow before that Sadaashiva Lingam, worshipped by the Guru of Devas (Brihaspati) and the best of Devas, constantly worshipped with flowers from celestial gardens (Suravana), the Lingam which is the Supreme Being, beyond the beyond.",
                transliteration: "Suraguru-Suravara-Puujita-Linggam Suravana-Pusspa-Sada-Aarcita-Linggam |\nParaatparam Paramaatmaka-Linggam Tat Prannamaami Sadaashiva-Linggam ||8||"
            },
             // Phalashruti (Benefit Verse)
            {
                verse: 9,
                sanskrit: "लिङ्गाष्टकमिदं पुण्यं यः पठेत् शिवसन्निधौ ।\nशिवलोकमवाप्नोति शिवेन सह मोदते ॥",
                meaning: "Whoever reads this sacred Lingashtakam in the presence of Shiva, attains the abode of Shiva (Shivaloka) and rejoices with Shiva.",
                transliteration: "Linggaassttakam-Idam Punnyam Yah Patthet Shiva-Sannidhau |\nShivalokam-Avaapnoti Shivena Saha Modate ||"
            }
        ],
        aiHint: "shiva lingam worship eight verses adi shankaracharya",
        image: `https://picsum.photos/seed/lingashtakam/400/225`
    },
     {
        id: "shiva-manasa-puja",
        title: "Shiva Manasa Puja",
        sanskritTitle: "शिवमानसपूजा",
        description: "A hymn conceptualizing the worship of Lord Shiva entirely within the mind, offering mental substitutes for all ritualistic items.",
        composer: "Adi Shankaracharya",
        deity: "Shiva",
        verses: [
            {
                verse: 1,
                sanskrit: "रत्नैः कल्पितमासनं हिमजलैः स्नानं च दिव्याम्बरं\nनानारत्नविभूषितं मृगमदामोदाङ्कितं चन्दनम् ।\nजातीचम्पकबिल्वपत्ररचितं पुष्पं च धूपं तथा\nदीपं देव दयानिधे पशुपते हृत्कल्पितं गृह्यताम् ॥१॥",
                meaning: "O Lord, Ocean of Mercy, Pashupati! Please accept this mentally conceived offering: a seat made of gems, a bath with cool waters, divine robes adorned with various jewels, sandalwood paste mixed with fragrant musk, flowers composed of Jati, Champaka, and Bilva leaves, incense, and a lamp.",
                transliteration: "Ratnaih Kalpitam-Aasanam Hima-Jalaih Snaanam Ca Divya-Ambaram\nNaanaa-Ratna-Vibhuussitam Mrga-Madaa-Moda-Angkitam Candanam |\nJaatii-Campaka-Bilva-Patra-Racitam Pusspam Ca Dhuupam Tathaa\nDiipam Deva Dayaa-Nidhe Pashupate Hrt-Kalpitam Grhyataam ||1||"
            },
            {
                verse: 2,
                sanskrit: "सौवर्णे नवरत्नखण्डरचिते पात्रे घृतं पायसं\nभक्ष्यं पञ्चविधं पयोदधियुतं रम्भाफलं पानकम् ।\nशाकानामयुतं जलं रुचिकरं कर्पूरखण्डोज्ज्वलं\nताम्बूलं मनसा मया विरचितं भक्त्या प्रभो स्वीकुरु ॥२॥",
                meaning: "O Lord! Please accept with devotion these offerings mentally prepared by me: Ghee and Payasam (sweet rice pudding) in a golden bowl inlaid with nine types of gems, five kinds of food items mixed with milk and curd, bananas, sweet drinks, countless vegetable dishes, tasty water brightened with camphor pieces, and betel leaves.",
                transliteration: "Sauvarnne Nava-Ratna-Khanndda-Racite Paatre Ghrtam Paayasam\nBhakssyam Pan.ca-Vidham Payo-Dadhi-Yutam Rambhaa-Phalam Paanakam |\nShaakaanaam-Ayutam Jalam Rucikaram Karpuura-Khannddo[a-U]jjvalam\nTaambuulam Manasaa Mayaa Viracitam Bhaktyaa Prabho Sviikuru ||2||"
            },
            {
                verse: 3,
                sanskrit: "छत्रं चामरयोर्युगं व्यजनकं चादर्शकं निर्मलं\nवीणाभेरिमृदङ्गकाहलकला गीतं च नृत्यं तथा ।\nसाष्टाङ्गं प्रणतिः स्तुतिर्बहुविधा ह्येतत्समस्तं मया\nसङ्कल्पेन समर्पितं तव विभो पूजां गृहाण प्रभो ॥३॥",
                meaning: "O Lord! Please accept this worship: an umbrella, a pair of Chamaras (fly-whisks), a fan, a spotless mirror, the arts of Veena, Bheri drum, Mridanga drum, Kahala horn, song and dance, full prostration (Sashtanga Pranam), various hymns – all this I have offered to You through mental conception.",
                transliteration: "Chatram Caamarayor-Yugam Vyajanakam Ca-Adarshakam Nirmalam\nViinnaa-Bheri-Mrdangga-Kaahala-Kalaa Giitam Ca Nrtyam Tathaa |\nSaassttaanggam Prannatih Stutir-Bahu-Vidhaa Hye[i-E]tat-Samastam Mayaa\nSangkalpena Samarpitam Tava Vibho Puujaam Grhaanna Prabho ||3||"
            },
            {
                verse: 4,
                sanskrit: "आत्मा त्वं गिरिजा मतिः सहचराः प्राणाः शरीरं गृहं\nपूजा ते विषयोपभोगरचना निद्रा समाधिस्थितिः ।\nसञ्चारः पदयोः प्रदक्षिणविधिः स्तोत्राणि सर्वा गिरो\nयद्यत्कर्म करोमि तत्तदखिलं शम्भो तवाराधनम् ॥४॥",
                meaning: "O Shambho! You are my Self, Girija (Parvati) is my intellect, Your attendants are my vital breaths (Pranas), my body is Your home. My worship of You is the experience of sense objects, my sleep is the state of Samadhi. My walking is the ritual of circumambulation around You, all my speech are hymns to You. Whatever actions I perform, all that is Your worship.",
                transliteration: "Aatmaa Tvam Girijaa Matih Sahacaraah Praannaah Shariiram Grham\nPuujaa Te Vissayo[a-U]pabhoga-Racanaa Nidraa Samaadhi-Sthitih |\nSan.caarah Padayoh Pradakssinna-Vidhih Stotraanni Sarvaa Giro\nYad-Yat-Karma Karomi Tat-Tad-Akhilam Shambho Tava-Araadhanam ||4||"
            },
            {
                verse: 5, // Same as Karacharana Kritam verse
                sanskrit: "करचरणकृतं वाक्कायजं कर्मजं वा\nश्रवणनयनजं वा मानसं वापराधम् ।\nविहितमविहितं वा सर्वमेतत्क्षमस्व\nजय जय करुणाब्धे श्रीमहादेव शम्भो ॥५॥",
                meaning: "O Great God Shambho, ocean of mercy! Please forgive all my wrongdoings, whether committed by hands or feet, speech or body, actions, ears or eyes, or by the mind; whether prescribed (lawful) or not prescribed (unlawful). Victory, Victory unto Thee!",
                transliteration: "Kara-Caranna-Krtam Vaak-Kaaya-Jam Karma-Jam Vaa\nShravanna-Nayana-Jam Vaa Maanasam Va-Aparaadham |\nVihitam-Avihitam Vaa Sarvam-Etat-Kssamasva\nJaya Jaya Karunna-Abdhe Shrii-Mahaadeva Shambho ||5||"
            }
        ],
        aiHint: "shiva mental worship manasa puja adi shankaracharya devotion mind",
        image: `https://picsum.photos/seed/manasa-puja/400/225`
    },
];


// Function to get all stotras
export const getAllStotras = (): Stotra[] => {
  // Sort stotras alphabetically by title
  return [...stotrasData].sort((a, b) => a.title.localeCompare(b.title));
};


// Function to get a specific stotra by ID
export const getStotraById = (id: string): Stotra | undefined => {
  return stotrasData.find(stotra => stotra.id === id);
};
