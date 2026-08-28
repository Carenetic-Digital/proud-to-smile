// Service page content for all 14 real Proud To Smile services.
//
// SOURCE OF TRUTH: reference/content-proudtosmile.md section 4. Every claim
// below is a condensation of that file's verbatim extraction from the live
// proudtosmile.com service pages — nothing here is invented. Where the real
// site didn't publish a detail (a process, a candidacy list, an FAQ), the
// field is simply omitted and the template skips that section.
//
// Page structure mirrors the design reference's service template
// (reference/screenshots/service-dental-implants.png):
//   hero → why/benefits + photo → candidacy → options grid → process +
//   costs → aftercare + photo → FAQs → related services → CTA
//
// Branding: "Clear Aligner Therapy" is the on-page name for /service/invisalign
// (client decision — slug kept for SEO continuity).

export interface SubService {
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  /** On-page and nav name. */
  title: string;
  /** <title> tag — service + practice + city, per the SEO brief. */
  seoTitle: string;
  /** Meta description. */
  description: string;
  /** Hero paragraph under the H1. */
  heroIntro: string;
  /** "Why Choose X?" block. */
  why: { heading: string; intro: string; benefits: string[] };
  /** "Is X Right for You?" block — omitted where the real site had no such copy. */
  candidacy?: { heading: string; intro: string; listHeading: string; items: string[]; note?: string };
  /** The sub-treatment card grid. */
  options: { heading: string; items: SubService[] };
  /** Numbered "what to expect" steps. */
  process?: { heading: string; steps: string[] };
  /** Aftercare / maintenance tips. */
  aftercare?: { heading: string; intro?: string; tips: string[] };
  faqs?: Faq[];
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  /** Slugs of related services shown at the foot of the page. */
  related: string[];
}

const IMG = '/images/proudtosmile';

export const services: Service[] = [
  {
    slug: 'cleaning',
    title: 'Cleanings',
    seoTitle: 'Dental Cleanings in Bernardsville, NJ | Proud To Smile Dentistry',
    description:
      'Thorough dental cleanings and check-ups in Bernardsville, NJ with Patricia Swaintek-Lamb, DMD and Karima West, RDH. Call 908-221-1188 to schedule.',
    heroIntro:
      'Dental cleanings are a critical part of your oral health care. Our team provides thorough cleanings and check-ups to prevent decay and gum disease, promoting a healthy smile.',
    why: {
      heading: 'Why Professional Cleanings Matter',
      intro:
        'Your hygienist is extremely detailed when using specialized tools to reach areas, like your gumline and between your teeth, that regular brushing and flossing miss.',
      benefits: [
        'Removes the plaque and tartar that brushing and flossing leave behind',
        'Prevents the inflamed gums and tooth decay that untreated buildup causes',
        'Supports whole-body health — poor oral health is linked to systemic conditions including heart disease',
        'Gives Dr. Swaintek-Lamb a regular look at problems while they are still small',
      ],
    },
    options: {
      heading: 'What Your Cleaning Includes',
      items: [
        {
          title: 'Comprehensive Exams',
          text: 'A full examination precedes every cleaning, so anything that needs attention is caught early.',
        },
        {
          title: 'Plaque & Tartar Removal',
          text: 'Dr. Swaintek-Lamb is gentle but effectively breaks away stubborn plaque and tartar, including below the gumline.',
        },
        {
          title: 'Polishing & Flossing',
          text: 'A high-powered rotating brush polish finishes the visit, along with a thorough flossing.',
        },
        {
          title: 'Preventive Care Education',
          text: 'You leave knowing exactly how to care for your teeth between visits.',
        },
      ],
    },
    process: {
      heading: 'What to Expect',
      steps: [
        'A comprehensive exam of your teeth and gums.',
        'Removal of plaque and tartar from the tooth surfaces and gumline.',
        'Flossing between every tooth.',
        'A polish with a high-powered rotating brush.',
        'Preventive care guidance tailored to what we found.',
      ],
    },
    faqs: [
      {
        q: 'How long does a cleaning take?',
        a: 'Plan for up to one hour. A comprehensive exam precedes the cleaning itself.',
      },
      {
        q: 'How often should I have my teeth cleaned?',
        a: 'Twice yearly, at six-month intervals. Patients with gum disease or decay-prone teeth may need to come in more often.',
      },
    ],
    image: `${IMG}/dental-tools.webp`,
    imageAlt: 'Dental hygiene tools laid out at Proud To Smile Dentistry',
    secondaryImage: `${IMG}/patient-getting-treated.webp`,
    secondaryImageAlt: 'Patient being treated by a provider at Proud To Smile Dentistry',
    related: ['periodontal-therapy', 'pediatric-dentistry', 'teeth-whitening'],
  },

  {
    slug: 'veneers',
    title: 'Veneers',
    seoTitle: 'Porcelain Veneers in Bernardsville, NJ | Proud To Smile Dentistry',
    description:
      'Porcelain veneers in Bernardsville, NJ. Dr. Patricia Swaintek-Lamb designs personalized veneer treatment plans with a trial smile preview. Call 908-221-1188.',
    heroIntro:
      'Veneers transform your smile and mask minor oral imperfections, like chips, stains, or gaps between teeth. Dr. Swaintek-Lamb develops personalized treatment plans with step-by-step guidance.',
    why: {
      heading: 'Why Choose Veneers?',
      intro:
        'Veneers are thin porcelain shells that Dr. Swaintek-Lamb bonds to the front surfaces of your teeth. Patients receive a "trial smile" preview before committing to treatment.',
      benefits: [
        'Conceals chipped teeth, gaps, and stains that resist whitening',
        'Reshapes teeth that are smaller than average or pointy',
        'Preview your result with a trial smile before any permanent work begins',
        'Lasts 12–15 years on average with proper maintenance',
      ],
    },
    candidacy: {
      heading: 'Are Veneers Right for You?',
      intro:
        'Veneers address a specific set of cosmetic concerns. Dr. Swaintek-Lamb reviews your goals, examines your teeth, and takes X-rays before recommending them.',
      listHeading: 'Veneers Commonly Address:',
      items: [
        'Chipped teeth',
        'Gaps between teeth',
        'Stains and discoloration resistant to whitening',
        'Smaller-than-average teeth',
        'Pointy teeth',
      ],
      note: 'The practice generally recommends between six and eight veneers for an optimally balanced smile.',
    },
    options: {
      heading: 'Your Veneer Treatment',
      items: [
        {
          title: 'Porcelain Veneers',
          text: 'Thin porcelain shells bonded to the front surfaces of your teeth, custom made by a dental lab.',
        },
        {
          title: 'Trial Smile Preview',
          text: 'See and wear a preview of your new smile before committing to the permanent treatment.',
        },
        {
          title: 'Chip & Gap Correction',
          text: 'Close gaps and conceal chips without the treatment time that braces or bonding alternatives require.',
        },
        {
          title: 'Smile Makeover Planning',
          text: 'A personalized plan with step-by-step guidance through every stage of your treatment.',
        },
      ],
    },
    process: {
      heading: 'The Veneer Process',
      steps: [
        'Examination and X-rays to confirm veneers are the right choice.',
        'A trial period so you can preview your new smile.',
        'Tooth preparation under local anesthetic, including enamel removal.',
        'Impressions taken and sent to the dental laboratory.',
        'Bonding of your final veneers and adjustment of your bite.',
      ],
    },
    aftercare: {
      heading: 'Caring for Your Veneers',
      intro: 'Veneers last 12–15 years on average when they are properly maintained.',
      tips: [
        'Brush and floss as you would your natural teeth',
        'Keep your biannual visits with the practice',
        'Avoid biting your nails',
        'Avoid chewing ice',
      ],
    },
    faqs: [
      {
        q: 'How long do veneers last?',
        a: 'Veneers last 12–15 years on average with proper maintenance — brushing, flossing, and biannual visits.',
      },
      {
        q: 'How many veneers will I need?',
        a: 'The practice recommends between six and eight veneers for optimal balance, though your treatment plan is personalized to your smile.',
      },
      {
        q: 'Can I see the result before committing?',
        a: 'Yes. Patients receive a "trial smile" preview before the permanent treatment begins.',
      },
    ],
    image: `${IMG}/woman-smiling-at-dentist.webp`,
    imageAlt: 'Patient smiling after veneer treatment at Proud To Smile Dentistry',
    related: ['teeth-whitening', 'crowns', 'cosmetic-and-restorative-dentistry'],
  },

  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    seoTitle: 'Teeth Whitening in Bernardsville, NJ | Proud To Smile Dentistry',
    description:
      'Opalescence BOOST in-office teeth whitening in Bernardsville, NJ. Remove years of stains in about two hours, with results lasting up to three years.',
    heroIntro:
      'If you have yellow or discolored teeth, Opalescence™ teeth whitening can eliminate years of stains and help you achieve a more pristine smile.',
    why: {
      heading: 'Why Choose In-Office Whitening?',
      intro:
        'Teeth whitening is a cosmetic treatment that uses hydrogen peroxide gel or other similar solutions to remove stains from the surfaces of your teeth. Our office uses a chemically activated Opalescence gel.',
      benefits: [
        'In-office treatment takes about two hours',
        'Results last an average of three years',
        'No special activating light required',
        'Removes years of accumulated surface staining',
      ],
    },
    candidacy: {
      heading: 'Why Teeth Discolor',
      intro:
        'Understanding what stained your teeth helps us set the right expectations for your result.',
      listHeading: 'Common Causes Include:',
      items: [
        'Natural aging and enamel wear that reveals the yellow dentin underneath',
        'Coffee, red wine, and cola',
        'Tomato sauces, berries, and curries',
        'Tetracycline medication',
        'Poor oral hygiene',
        'Tobacco use',
        'Oral trauma',
      ],
    },
    options: {
      heading: 'Your Whitening Options',
      items: [
        {
          title: 'Opalescence BOOST® In-Office',
          text: 'A protective covering is applied, then whitening gel is brushed onto your teeth by hand — oxidation lifts the stains.',
        },
        {
          title: 'Stain & Discoloration Removal',
          text: 'Targets years of surface staining from food, drink, tobacco, and age-related enamel wear.',
        },
        {
          title: 'Whitening Maintenance',
          text: 'Twice-daily brushing, regular flossing, and six-month checkups keep your result bright.',
        },
      ],
    },
    process: {
      heading: 'What to Expect',
      steps: [
        'A protective covering is applied to shield your gums and soft tissue.',
        'Opalescence BOOST® whitening gel is applied to your teeth with a handheld brush.',
        'The gel oxidizes and lightens the stains — no special light is needed.',
        'The full appointment takes roughly two hours.',
      ],
    },
    aftercare: {
      heading: 'Keeping Your Smile Bright',
      intro: 'Results last an average of three years when maintained.',
      tips: ['Brush twice daily', 'Floss regularly', 'Keep your six-month checkups'],
    },
    faqs: [
      {
        q: 'How long do whitening results last?',
        a: 'An average of three years, maintained with twice-daily brushing, regular flossing, and six-month checkups.',
      },
      {
        q: 'How long does the appointment take?',
        a: 'The in-office treatment takes about two hours.',
      },
    ],
    image: `${IMG}/woman-smiling-at-dentist.webp`,
    imageAlt: 'Patient with a bright smile after teeth whitening at Proud To Smile Dentistry',
    related: ['veneers', 'cosmetic-and-restorative-dentistry', 'cleaning'],
  },

  {
    slug: 'emergency-dentistry',
    title: 'Emergency Dentistry',
    seoTitle: 'Emergency Dentist in Bernardsville, NJ | Proud To Smile Dentistry',
    description:
      'Same-day emergency dental care in Bernardsville, NJ. Chipped teeth, broken restorations, and sudden pain. Call 908-221-1188 for immediate assistance.',
    heroIntro:
      'We make an effort to leave room in our schedule to take care of patients who need immediate assistance — chipped teeth, broken restorations, and sudden pain.',
    why: {
      heading: 'Why Emergency Care Matters',
      intro:
        'Emergency dentistry addresses unexpected dental injuries and pain, often from falls or sports injuries. Prompt treatment can prevent complications or save a tooth.',
      benefits: [
        'Room left in the daily schedule for patients who need immediate assistance',
        'Addresses sudden pain, soft tissue swelling, and uncontrollable bleeding',
        'Prompt care can prevent complications or save a tooth',
        'Immediate appointments and online booking available',
      ],
    },
    candidacy: {
      heading: 'When to Seek Emergency Care',
      intro: 'Call the practice right away if you experience any of the following.',
      listHeading: 'Seek Care Immediately For:',
      items: [
        'A knocked-out tooth',
        'A loose restoration',
        'Cracked or chipped teeth',
        'Objects stuck between your teeth',
        'Unusual gum swelling or an abscess',
        'Severe tooth pain',
      ],
    },
    options: {
      heading: 'Emergencies We Treat',
      items: [
        { title: 'Same-Day Appointments', text: 'We hold room in the schedule for patients who need to be seen immediately.' },
        { title: 'Knocked-Out Tooth', text: 'Fast treatment gives the best chance of saving a tooth that has been knocked out.' },
        { title: 'Cracked or Chipped Teeth', text: 'Repair of damage from falls, sports injuries, and biting hard objects.' },
        { title: 'Loose or Lost Restorations', text: 'Re-seating or replacing a crown, filling, or other restoration that has come loose.' },
        { title: 'Severe Tooth Pain', text: 'Diagnosis and relief for sudden, severe pain — including pain with no obvious cause.' },
        { title: 'Gum Swelling & Abscess', text: 'Treatment for unusual soft tissue swelling and infection.' },
      ],
    },
    process: {
      heading: 'At Your Emergency Appointment',
      steps: [
        'X-rays and a comprehensive exam to identify the problem.',
        'Immediate treatment where possible — this may include extraction or oral surgery.',
        'Or a temporary fix, with a follow-up appointment scheduled for the permanent repair.',
      ],
    },
    aftercare: {
      heading: 'Preventing Dental Emergencies',
      tips: [
        'Wear protective gear during sports',
        'Avoid chewing hard objects',
        "Don't use your teeth as tools",
      ],
    },
    image: `${IMG}/patient-getting-treated.webp`,
    imageAlt: 'Emergency dental treatment at Proud To Smile Dentistry in Bernardsville, NJ',
    related: ['extractions-oral-surgery', 'crowns', 'periodontal-therapy'],
  },

  {
    slug: 'crowns',
    title: 'Crowns',
    seoTitle: 'Dental Crowns in Bernardsville, NJ | Proud To Smile Dentistry',
    description:
      'All-porcelain and porcelain-fused-to-metal dental crowns in Bernardsville, NJ. Protect a weak or damaged tooth while preserving its natural root.',
    heroIntro:
      'Dental crowns protect a weak or irregular tooth but preserve the natural root and structure to help you maintain optimal oral health.',
    why: {
      heading: 'Why Choose a Dental Crown?',
      intro:
        'Dental crowns are a type of restoration. They act like caps that replace the visible portion of your natural tooth, in either porcelain-fused-to-metal or all-porcelain.',
      benefits: [
        'Protects a worn-down tooth from further damage',
        'Preserves your natural root and tooth structure',
        'Completes a root canal procedure',
        'Improves the appearance of a discolored tooth',
      ],
    },
    candidacy: {
      heading: 'Do You Need a Crown?',
      intro: 'Dr. Swaintek-Lamb may recommend a crown in several situations.',
      listHeading: 'Crowns Are Used To:',
      items: [
        'Protect worn-down teeth',
        'Complete root canal procedures',
        'Cover teeth weakened by prior treatment',
        'Stop damage to chipped or cracked teeth',
        'Improve the appearance of a discolored tooth',
        'Top a dental implant',
      ],
    },
    options: {
      heading: 'Crown Options',
      items: [
        { title: 'All-Porcelain Crowns', text: 'A natural-looking restoration with no metal, well suited to visible teeth.' },
        { title: 'Porcelain-Fused-to-Metal', text: 'A porcelain exterior over a metal substructure.' },
        { title: 'Root Canal Restorations', text: 'A crown completes a root canal, sealing and protecting the treated tooth.' },
        { title: 'Implant Crowns', text: 'The visible tooth that tops a dental implant post.' },
      ],
    },
    process: {
      heading: 'The Crown Process',
      steps: [
        'Assessment of the tooth and surrounding structure.',
        'Tooth preparation, with the area numbed first.',
        'Impressions taken for your custom crown.',
        'A temporary crown placed while the permanent one is made.',
        'Bonding of your final crown.',
      ],
    },
    aftercare: {
      heading: 'Caring for Your Crown',
      tips: ['Brush twice daily', 'Floss around the crown', 'Keep up with regular professional cleanings'],
    },
    image: `${IMG}/dental-services.webp`,
    imageAlt: 'Treatment room where crowns are placed at Proud To Smile Dentistry',
    related: ['dental-implants', 'veneers', 'extractions-oral-surgery'],
  },

  {
    slug: 'invisalign',
    title: 'Clear Aligner Therapy',
    seoTitle: 'Clear Aligners in Bernardsville, NJ | Proud To Smile Dentistry',
    description:
      'Clear aligner therapy in Bernardsville, NJ — a discreet alternative to metal braces for teens and adults. Most treatment completes in 12–18 months.',
    heroIntro:
      'Clear aligner therapy provides a discreet alternative to traditional metal braces. Offered to teens and adults, it may also reduce sleep apnea symptoms or TMJ dysfunction.',
    why: {
      heading: 'Why Choose Clear Aligners?',
      intro:
        'Clear plastic aligners are worn 20–22 hours a day and removed only for eating and oral hygiene. They straighten your teeth while improving your oral and airway health.',
      benefits: [
        'Discreet — a clear alternative to traditional metal braces',
        'Removable for eating, brushing, and flossing',
        'May reduce sleep apnea symptoms or TMJ dysfunction',
        'Most treatment plans complete in 12–18 months*',
      ],
    },
    candidacy: {
      heading: 'What Clear Aligners Treat',
      intro:
        'Clear aligner therapy corrects a wide range of alignment and bite problems in teens and adults.',
      listHeading: 'Commonly Treated Concerns:',
      items: [
        'Crowding',
        'Overlapping or crooked teeth',
        'Gaps between teeth',
        'Misaligned jaws',
        'TMJ dysfunction',
        'Bite abnormalities including crossbite, underbite, and overbite',
      ],
      note: '*Most people complete treatment in 12–18 months, but depending on the issues addressed and your goals, it may take longer.',
    },
    options: {
      heading: 'Clear Aligner Therapy Options',
      items: [
        { title: 'Aligners for Adults', text: 'A discreet way to straighten teeth without the appearance of metal braces.' },
        { title: 'Aligners for Teens', text: 'Clear aligner therapy is offered to teens as well as adults.' },
        { title: 'Crowding & Gaps', text: 'Corrects crowding, overlapping and crooked teeth, and gaps between teeth.' },
        { title: 'Bite Correction', text: 'Addresses misaligned jaws and bite abnormalities including crossbite, underbite, and overbite.' },
      ],
    },
    process: {
      heading: 'How Treatment Works',
      steps: [
        'Review of your dental records and an oral exam.',
        'Digital X-rays and intraoral scanner impressions.',
        'Computer-aided treatment planning.',
        'Manufacture of your custom aligners.',
        'Multi-week follow-ups as you progress through each aligner set.',
      ],
    },
    aftercare: {
      heading: 'Caring for Your Aligners',
      tips: [
        'Rinse with cold water several times a day',
        'Brush your aligners nightly with soft bristles',
        'Use cleaning crystals for a deeper clean',
        'Wear them 20–22 hours a day, removing only to eat and clean your teeth',
      ],
    },
    faqs: [
      {
        q: 'How long does treatment take?',
        a: 'Most people complete treatment in 12–18 months, but depending on the issues addressed and your goals, it may take longer.',
      },
      {
        q: 'How many hours a day do I wear them?',
        a: '20–22 hours a day. They are removed only for eating and oral hygiene.',
      },
      {
        q: 'Is this the same as Invisalign?',
        a: 'Clear aligner therapy is the same category of treatment patients often know by the Invisalign® brand name. The practice also offers Spark® clear aligners.',
      },
    ],
    image: `${IMG}/woman-smiling-at-dentist.webp`,
    imageAlt: 'Patient with a straightened smile after clear aligner therapy',
    related: ['cosmetic-and-restorative-dentistry', 'sleep-apnea', 'pediatric-dentistry'],
  },

  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    seoTitle: 'Dental Implants in Bernardsville, NJ | Proud To Smile Dentistry',
    description:
      'Dental implants in Bernardsville, NJ with Patricia Swaintek-Lamb, DMD. A permanent, natural-looking tooth replacement that can endure a lifetime.',
    heroIntro:
      'Dental implants replicate natural teeth and can endure a lifetime with proper care. Treatment is led by Dr. Patricia Swaintek-Lamb and Karima West.',
    why: {
      heading: 'Why Choose Dental Implants?',
      intro:
        'An implant is a titanium post surgically placed into the jawbone as an artificial tooth root, supporting a crown that restores the visible tooth structure.',
      benefits: [
        'Comfortable fit and natural appearance',
        'Permanent — implants can endure a lifetime with proper care',
        'Easy to keep clean, just like natural teeth',
        'Stimulates bone growth and density, preventing facial sagging',
        'Keeps adjacent teeth from shifting',
        'Cost-effective over the long term',
      ],
    },
    candidacy: {
      heading: 'Are Dental Implants Right for You?',
      intro:
        'Dr. Swaintek-Lamb evaluates your overall health, gum health, and jawbone density before recommending implants.',
      listHeading: 'Good Candidates Generally Have:',
      items: [
        'Good overall health',
        'Adequate jawbone density',
        'Healthy gums',
        'Non-smoker status',
      ],
      note: 'Dental implants are for adults only.',
    },
    options: {
      heading: 'Dental Implant Options',
      items: [
        { title: 'Single-Tooth Implants', text: 'One titanium post supporting one crown, replacing a single missing tooth.' },
        { title: 'Implant-Supported Bridges', text: 'Implants anchoring a bridge to replace several teeth in a row.' },
        { title: 'Implant-Supported Dentures', text: 'Dentures that attach to titanium posts set in the jawbone rather than resting on the gums.' },
        { title: 'Surgical Placement', text: 'Dr. Swaintek-Lamb has advanced oral surgery training and places implants in-house.' },
      ],
    },
    process: {
      heading: 'The Implant Process',
      steps: [
        'Surgical placement of the titanium post into the jawbone.',
        'A healing period while the post integrates with the bone (osseointegration).',
        'Placement of your crown or bridge.',
      ],
    },
    faqs: [
      {
        q: 'How long does treatment take?',
        a: 'Dental implants require multiple visits over several months, because the post must integrate with your jawbone before the crown is placed.',
      },
      {
        q: 'How long do implants last?',
        a: 'Implants can endure a lifetime with proper care.',
      },
      {
        q: 'Am I a candidate if I smoke?',
        a: 'Good candidates are generally non-smokers with good overall health, adequate jawbone density, and healthy gums. Dr. Swaintek-Lamb will assess your specific situation.',
      },
    ],
    image: `${IMG}/dental-services.webp`,
    imageAlt: 'Treatment room where dental implants are placed at Proud To Smile Dentistry',
    secondaryImage: `${IMG}/patient-getting-treated.webp`,
    secondaryImageAlt: 'Patient receiving implant treatment at Proud To Smile Dentistry',
    related: ['crowns', 'dentures', 'extractions-oral-surgery'],
  },

  {
    slug: 'botox',
    title: 'Botox',
    seoTitle: 'Botox for Jaw Pain in Bernardsville, NJ | Proud To Smile',
    description:
      'Therapeutic Botox in Bernardsville, NJ with Patricia Swaintek-Lamb, DMD — for teeth grinding, jaw muscle tension, gummy smiles, and tension headaches.',
    heroIntro:
      'Botox is offered as a solution for facial discomfort and jaw pain, treating teeth grinding, headaches, and jaw-related issues.',
    why: {
      heading: 'Why Botox in a Dental Practice?',
      intro:
        "Botox is an injectable drug that's derived from a toxin produced by the bacterium Clostridium botulinum, and it works by reducing muscle activity — which makes it useful for a specific set of dental concerns.",
      benefits: [
        'Reduces the muscle activity behind clenching and grinding',
        'Softens the appearance of a gummy smile',
        'Eases jaw muscle spasms and tension',
        'Can relieve tension-related headaches',
      ],
    },
    options: {
      heading: 'Dental Applications',
      items: [
        { title: 'Teeth Grinding & Clenching', text: 'Reduces the muscle activity that drives clenching and grinding.' },
        { title: 'Gummy Smile Treatment', text: 'Improves the appearance of a gummy smile and dental "black triangle" spaces.' },
        { title: 'Jaw Muscle Tension', text: 'Treats jaw muscle spasms and abnormally large jaw muscles. May be used alongside dental implants to reduce tension.' },
        { title: 'Tension Headaches', text: 'Addresses headaches linked to jaw and facial muscle tension.' },
      ],
    },
    image: `${IMG}/smiling-patient-with-provider.webp`,
    imageAlt: 'Dr. Patricia Swaintek-Lamb consulting with a patient at Proud To Smile Dentistry',
    related: ['sleep-apnea', 'cosmetic-and-restorative-dentistry', 'crowns'],
  },

  {
    slug: 'dentures',
    title: 'Dentures',
    seoTitle: 'Dentures in Bernardsville, NJ | Proud To Smile Dentistry',
    description:
      'Conventional, immediate, and implant-supported dentures in Bernardsville, NJ with Patricia Swaintek-Lamb, DMD and Karima West, RDH.',
    heroIntro:
      'Dentures are an option to replace one or more missing permanent teeth. Modern dentures use hard resin prosthetic teeth attached to a supporting structure that suctions to the gumline.',
    why: {
      heading: 'When Dentures Make Sense',
      intro:
        'Dentures are most necessary when teeth are severely decayed or gum disease is severe. For more limited tooth loss, alternatives like implants or bridges may be a better fit.',
      benefits: [
        'Replaces one, several, or a full arch of missing teeth',
        'Modern hard resin teeth on a structure that suctions to the gumline',
        'Options for both upper and lower arches',
        'Implant-supported versions available for added stability',
      ],
    },
    options: {
      heading: 'Types of Dentures',
      items: [
        { title: 'Conventional Dentures', text: 'Removable dentures for the upper arch, lower arch, or both.' },
        { title: 'Immediate Dentures', text: 'A temporary denture placed the same day your teeth are extracted.' },
        { title: 'Implant-Supported Dentures', text: 'Dentures that attach to titanium posts set into the jawbone.' },
        { title: 'Denture Care & Maintenance', text: 'Guidance on cleaning and caring for your dentures so they last.' },
      ],
    },
    aftercare: {
      heading: 'Caring for Your Dentures',
      tips: [
        'Soak your dentures in a cleaning solution or water overnight',
        'Use soft brushes with non-abrasive denture cleaners',
        'Avoid dropping them',
        'Avoid chewing hard objects',
      ],
    },
    image: `${IMG}/dental-services.webp`,
    imageAlt: 'Treatment room at Proud To Smile Dentistry in Bernardsville, NJ',
    related: ['dental-implants', 'extractions-oral-surgery', 'crowns'],
  },

  {
    slug: 'periodontal-therapy',
    title: 'Periodontal Therapy',
    seoTitle: 'Gum Disease Treatment in Bernardsville, NJ | Proud To Smile',
    description:
      'Gum disease treatment in Bernardsville, NJ. Scaling and root planing, laser gum therapy, and antibiotic therapy for gingivitis and periodontitis.',
    heroIntro:
      "Consider periodontal therapy if you're one of the more than 45% of American adults with gum disease. Our team regularly uses periodontal therapy to manage gum disease, including gingivitis and periodontitis.",
    why: {
      heading: 'Why Treat Gum Disease?',
      intro:
        'Periodontal therapy is a dental subspecialty that treats gum disease, including gingivitis and periodontitis. Without intervention and treatment, gum disease may increase your risk of more serious oral health problems, including tooth loss and bone decay.',
      benefits: [
        'Manages both gingivitis and periodontitis',
        'Reduces the risk of tooth loss and bone decay',
        'Removes bacteria and tartar from beneath the gumline',
        'Several treatment options depending on severity',
      ],
    },
    candidacy: {
      heading: 'Symptoms of Gum Disease',
      intro:
        'More than 45% of American adults have gum disease. Contact the practice if you notice any of these signs.',
      listHeading: 'Watch For:',
      items: [
        'Persistent bad breath',
        'Gums pulling away from your teeth',
        'Painful chewing',
        'Loose teeth',
        'Sensitive teeth',
        'Tender or bleeding gums',
      ],
    },
    options: {
      heading: 'Periodontal Treatment Options',
      items: [
        {
          title: 'Scaling & Root Planing',
          text: 'Uses handheld tools or a dental laser to clean bacteria and tartar from beneath your gumline.',
        },
        {
          title: 'Laser Gum Therapy',
          text: 'A dental laser cleans below the gumline as an alternative to handheld instruments.',
        },
        {
          title: 'Antibiotic Therapy',
          text: 'Prescription medication that eliminates harmful bacteria.',
        },
        {
          title: 'Flap Surgery & Grafts',
          text: 'A tissue graft procedure for severe gum disease.',
        },
      ],
    },
    aftercare: {
      heading: 'Preventing Gum Disease',
      intro: 'Good oral hygiene is the most effective prevention.',
      tips: ['Brush your teeth twice daily', 'Floss regularly', 'Visit the dentist twice a year'],
    },
    image: `${IMG}/dental-tools.webp`,
    imageAlt: 'Instruments used for periodontal therapy at Proud To Smile Dentistry',
    related: ['cleaning', 'extractions-oral-surgery', 'emergency-dentistry'],
  },

  {
    slug: 'cosmetic-and-restorative-dentistry',
    title: 'Cosmetic & Restorative Dentistry',
    seoTitle: 'Cosmetic Dentistry in Bernardsville, NJ | Proud To Smile',
    description:
      'Cosmetic and restorative dentistry in Bernardsville, NJ — veneers, bonding, tooth-colored fillings, inlays and onlays, whitening, and gum recontouring.',
    heroIntro:
      'Dr. Patricia Swaintek-Lamb, DMD and Karima West, RDH offer cosmetic dentistry to address gaps, discoloration, and misalignment — upgrading worn, damaged, misaligned, and discolored teeth.',
    why: {
      heading: 'Why Cosmetic & Restorative Care?',
      intro:
        'Cosmetic treatment improves more than appearance — it also improves functionality and makes teeth easier to clean. The restorative side treats damaged or missing teeth to improve your smile’s overall health and appearance.',
      benefits: [
        'Upgrades worn, damaged, misaligned, and discolored teeth',
        'Improves function alongside appearance',
        'Makes teeth easier to keep clean',
        'Restores damaged or missing teeth with fillings, implants, bridges, and crowns',
      ],
    },
    options: {
      heading: 'Common Treatments',
      items: [
        { title: 'Gum Recontouring', text: 'Evens out your gumline for a more balanced smile.' },
        { title: 'Dental Bonding', text: 'Tooth-colored resin repairs applied directly to the tooth.' },
        { title: 'Tooth-Colored Fillings', text: 'Fillings that match your natural tooth shade.' },
        { title: 'Porcelain Inlays & Onlays', text: 'Custom porcelain restorations for damage too large for a filling.' },
        { title: 'Porcelain Veneers', text: 'Thin porcelain shells bonded to the front surfaces of your teeth.' },
        { title: 'Opalescence® Teeth Whitening', text: 'In-office whitening that removes years of surface staining.' },
      ],
    },
    image: `${IMG}/woman-smiling-at-dentist.webp`,
    imageAlt: 'Patient smiling after cosmetic dental treatment at Proud To Smile Dentistry',
    related: ['veneers', 'teeth-whitening', 'crowns'],
  },

  {
    slug: 'extractions-oral-surgery',
    title: 'Extractions & Oral Surgery',
    seoTitle: 'Tooth Extractions in Bernardsville, NJ | Proud To Smile',
    description:
      'Tooth extractions, wisdom teeth removal, implant placement, and periodontal surgery in Bernardsville, NJ. Dr. Swaintek-Lamb has advanced oral surgery training.',
    heroIntro:
      'Oral surgery removes decay, disease, and damage, which helps you avoid complications and pain in the long term. Dr. Swaintek-Lamb offers advanced oral surgery training.',
    why: {
      heading: 'Why Oral Surgery?',
      intro:
        'Removing decay, disease, and damage now helps you avoid complications and pain later. Recovery from oral surgery is typically faster than from other surgical procedures.',
      benefits: [
        'Removes decay, disease, and damage before they cause complications',
        'Recovery is typically faster than other surgical procedures',
        'Performed in-house by a dentist with advanced oral surgery training',
        'Covers everything from simple extractions to implant placement',
      ],
    },
    options: {
      heading: 'Procedures We Perform',
      items: [
        {
          title: 'Tooth Extractions',
          text: 'For advanced decay, to prepare for implants or dentures, or for impacted and crowding wisdom teeth — from simple (elevators and forceps) to surgical (gum incisions).',
        },
        {
          title: 'Wisdom Teeth Removal',
          text: 'Removal of impacted wisdom teeth or wisdom teeth crowding the rest of your bite.',
        },
        {
          title: 'Implant Placement Surgery',
          text: 'Titanium posts surgically placed into the jawbone to replace missing tooth roots.',
        },
        {
          title: 'Periodontal Surgery',
          text: 'For advanced gum disease — bacterial removal and possible gum contouring.',
        },
        {
          title: 'Biopsy Procedures',
          text: 'Minor oral surgery to take tissue samples from suspicious areas.',
        },
      ],
    },
    aftercare: {
      heading: 'Recovery & Aftercare',
      intro: 'Recovery from oral surgery is typically faster than from other surgical procedures.',
      tips: [
        'Follow your post-care instructions closely',
        'Take any prescribed medication as directed',
        'Stick to a soft-food diet',
        'Avoid straws',
        'Avoid high-impact activity',
      ],
    },
    image: `${IMG}/dental-services.webp`,
    imageAlt: 'Surgical treatment room at Proud To Smile Dentistry in Bernardsville, NJ',
    related: ['dental-implants', 'emergency-dentistry', 'periodontal-therapy'],
  },

  {
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    seoTitle: "Children's Dentist in Bernardsville, NJ | Proud To Smile",
    description:
      'Pediatric dentistry in Bernardsville, NJ — cleanings, sealants, fluoride, and digital X-rays for infants, children, and teens.',
    heroIntro:
      'Dr. Patricia Swaintek-Lamb, DMD and Karima West, RDH provide personalized oral health care to infants, children, and teens — checkups, preventive cleanings, and patient education.',
    why: {
      heading: 'Care Built Around Your Child',
      intro:
        'Pediatric dentistry means personalized oral health care for infants, children, and teens, combining checkups, preventive cleanings, and education.',
      benefits: [
        'Cleanings every six months that remove plaque from teeth and beneath the gums',
        'Preventive sealants and fluoride to protect developing teeth',
        'Digital X-rays sized for children',
        'Restorations, alignment, and periodontal care when they are needed',
      ],
    },
    options: {
      heading: 'Services for Children & Teens',
      items: [
        {
          title: "Children's Cleanings & Exams",
          text: "Removes plaque from your child's teeth and beneath their gums, every six months.",
        },
        {
          title: 'Dental Sealants',
          text: 'Thin plastic coverings applied to the chewing surfaces to protect against decay.',
        },
        {
          title: 'Fluoride Treatments',
          text: 'A naturally occurring compound that helps strengthen the tooth enamel.',
        },
        {
          title: 'Digital X-Rays for Kids',
          text: "Capture photos of your child's tooth roots, jaws, and alveolar bone.",
        },
        {
          title: "Kids' Restorations",
          text: 'Fillings or crowns for cavities and chips.',
        },
        {
          title: 'Alignment & Gum Care',
          text: 'Clear aligners correct alignment problems; scaling and root planing treats gum disease when present.',
        },
      ],
    },
    aftercare: {
      heading: 'What to Bring to the Appointment',
      tips: [
        'Dental insurance card',
        'A list of medications and supplements',
        'Recent X-ray results',
        'Any questions or concerns',
        'Documentation of symptoms',
        'Previous dentist information, if applicable',
      ],
    },
    image: `${IMG}/smiling-patient-with-provider.webp`,
    imageAlt: 'A young patient with a provider at Proud To Smile Dentistry',
    related: ['cleaning', 'invisalign', 'emergency-dentistry'],
  },

  {
    slug: 'sleep-apnea',
    title: 'Sleep Apnea Treatment',
    seoTitle: 'Sleep Apnea Treatment in Bernardsville, NJ | Proud To Smile',
    description:
      'Dental sleep apnea treatment in Bernardsville, NJ. Diagnostic testing and airway-focused care for snoring and sleep apnea.',
    heroIntro:
      'If you snore in your sleep and wake up feeling tired, you may have a sleep breathing disorder. We offer treatments that may help minimize these symptoms and give you the ability to sleep soundly again.',
    why: {
      heading: 'An Airway-Focused Approach',
      intro:
        'Dr. Patti Swaintek-Lamb and the team provide the latest diagnostic testing and sleep apnea treatments with a focus on airway health. Sleep apnea is a condition where complications in your airway and sinus passage cause sleep disruption.',
      benefits: [
        'The latest diagnostic testing, with a focus on airway health',
        'Dentists who specialize in sleep apnea can help treat some of the underlying cause',
        'Comprehensive care addressing the teeth, muscles, and joints of the head and neck',
        'Clear aligner therapy may also reduce sleep apnea symptoms',
      ],
    },
    candidacy: {
      heading: 'Symptoms of Sleep Apnea',
      intro:
        'Sleep apnea disrupts your sleep when complications arise in your airway and sinus passage. Its effects reach well beyond feeling tired.',
      listHeading: 'Common Symptoms:',
      items: [
        'Snoring',
        'Trouble breathing',
        'Fatigue and chronic sleep deprivation',
        'Memory loss and confusion',
        'Acid reflux',
        'A weakened immune system',
        'High blood pressure and heart problems',
      ],
      note: 'Left untreated, sleep apnea is associated with increased blood pressure, chronic headaches and fatigue, increased risk of stroke and heart attack, insufficient oxygen to the brain, and increased risk of mood disorders such as depression.',
    },
    options: {
      heading: 'Treatment Options',
      items: [
        { title: 'Airway-Focused Diagnostics', text: 'The latest diagnostic testing, with the focus on your airway health.' },
        { title: 'Oral Appliance Therapy', text: 'Dental treatment that addresses some of the underlying cause of the condition.' },
        { title: 'Snoring Solutions', text: 'Treatment aimed at minimizing snoring and the sleep disruption it causes.' },
        { title: 'TMJ & Airway Care', text: 'Comprehensive care addressing the teeth, muscles, and joints of the head and neck.' },
      ],
    },
    image: `${IMG}/smiling-patient-with-provider.webp`,
    imageAlt: 'Dr. Patti Swaintek-Lamb discussing sleep apnea treatment with a patient',
    related: ['invisalign', 'botox', 'cleaning'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
