// Provider profiles. SOURCE: reference/content-proudtosmile.md section 3,
// plus client-supplied bio + headshot for Dr. Madison Costello (2026-09-10).
//
// Only the clinical providers the practice publishes profile pages for.
// Support team members (Nanette, Marcela, Francesca, Jawad, Erin) are listed
// on /about/our-team/ — the real site gives first names and short blurbs
// only, no individual pages.

export interface Doctor {
  slug: string;
  name: string;
  credentials: string;
  /** Role line shown under the name. */
  title: string;
  seoTitle: string;
  description: string;
  /** Bio paragraphs. Empty array = the real site has not published a bio. */
  bio: string[];
  /** Shown in place of a bio when `bio` is empty. */
  bioPending?: string;
  education?: string[];
  affiliations?: string[];
  specialties?: string[];
  /** Verbatim philosophy quotes from the provider's own page. */
  philosophy?: string[];
  image: string;
  imageAlt: string;
  /** Intrinsic pixel dimensions of `image` — declared on every <img> so the
   *  browser reserves the right box. These differ per provider (Patricia's
   *  headshot is 800x1000, Karima's is only 300x400), so they must come from
   *  the data rather than be hardcoded in each template. */
  imageWidth: number;
  imageHeight: number;
  /** Service slugs this provider is named on in the source content. */
  services: string[];
  /** A real patient review naming this provider (see content section 5). */
  testimonial?: { quote: string; author: string; context: string };
}

export const doctors: Doctor[] = [
  {
    slug: 'patricia-swaintek-lamb-dmd',
    name: 'Patricia Swaintek-Lamb',
    credentials: 'DMD',
    title: 'Owner, Proud To Smile Dentistry',
    seoTitle: 'Patricia Swaintek-Lamb, DMD | Dentist in Bernardsville, NJ',
    description:
      'Patricia Swaintek-Lamb, DMD owns Proud To Smile Dentistry in Bernardsville, NJ, with over 25 years of experience in cosmetic dentistry and sleep apnea care.',
    bio: [
      'Patricia Swaintek-Lamb, DMD serves as owner of Proud to Smile Dentistry in Bernardsville, New Jersey, bringing over 25 years of dental experience. She specializes in cosmetic dentistry and sleep apnea treatment.',
      "Her interest in dentistry emerged while working in a dental office during college. She was attracted to the office's positive energy in educating and treating patients about good oral health.",
      'She views dental careers as fortunate opportunities to create healthy, beautiful smiles for her patients.',
    ],
    education: [
      "Bachelor's degree in biology — Villanova University, Villanova, PA",
      'Doctorate of Medical Dentistry (DMD), 1992 — Temple University Maurice H. Kornberg School of Dentistry, Philadelphia, PA',
      'General practice residency — Heart Hospital, Allentown, PA',
    ],
    affiliations: [
      'Clinical instructor, Aesthetic Excellence Course, The Center for Dental Ceramics, Richfield, OH',
      'Attending dentist, Morristown Medical Center, NJ',
      'Recipient, Morton L. Wertheimer Award (2019–2020), for outstanding contribution to residency program',
    ],
    specialties: [
      'Cosmetic dentistry',
      'Sleep apnea treatment',
      'Implant and general dentistry',
      'Orthodontics',
    ],
    philosophy: [
      'Each patient is unique and deserves to be treated as an individual.',
      'Dental care should never be unpleasant or intimidating.',
    ],
    image: '/images/proudtosmile/patricia-swaintek-lamb-headshot.webp',
    imageAlt: 'Patricia Swaintek-Lamb, DMD of Proud To Smile Dentistry in Bernardsville, NJ',
    imageWidth: 800,
    imageHeight: 1000,
    services: [
      'cosmetic-and-restorative-dentistry',
      'sleep-apnea',
      'dental-implants',
      'veneers',
      'crowns',
      'invisalign',
      'botox',
      'extractions-oral-surgery',
    ],
    testimonial: {
      quote:
        "Dr. Patti is not only efficient and knowledgeable, but she's also one of the most empathetic, kind, and personable dentists I've ever met.",
      author: 'Jose O.',
      context: 'February 2025',
    },
  },

  {
    slug: 'madison-costello-dmd',
    name: 'Madison Costello',
    credentials: 'DMD',
    title: 'Associate Dentist',
    seoTitle: 'Madison Costello, DMD | Associate Dentist in Bernardsville, NJ',
    description:
      'Madison Costello, DMD is an associate dentist at Proud To Smile Dentistry in Bernardsville, NJ, trained at Rutgers School of Dental Medicine with a hospital-based residency at Morristown Medical Center.',
    bio: [
      'Dr. Madison Costello joins Proud to Smile Dentistry as an associate dentist, bringing a strong foundation in patient care and clinical training. A lifelong North Jersey resident, she is passionate about caring for the community she calls home.',
      'She earned her bachelor\u2019s degree from Lafayette College, where she majored in Neuroscience with a minor in Art History, before going on to earn her dental degree from Rutgers School of Dental Medicine, known for its excellent clinical training. She then completed a rigorous, hospital-based General Practice Residency at Morristown Medical Center, a Level 1 Trauma Center, where she received comprehensive training across all facets of dentistry \u2014 including significant exposure to oral and maxillofacial surgery and complex dental emergencies. She continues to remain on staff at Morristown Medical Center, performing general dentistry in the operating room.',
      'Dr. Costello is dedicated to delivering high-quality, patient-centered care, and is committed to making sure every patient feels genuinely cared for, well-informed, and confident in their treatment plan. With a thoughtful and compassionate approach, she views dentistry as a collaboration between herself and her patients, working together to find the best path forward for each person\u2019s needs and goals. Even in her earliest clinical experiences, she found that the relationships she built with patients were what she loved most about the profession, and she looks forward to building those same connections with the patients at Proud to Smile Dentistry.',
      'Outside the office, she enjoys pickleball, snowboarding, music, and traveling, and is a former lacrosse player who represented New Jersey at nationals and earned an All-Star team selection.',
    ],
    education: [
      'Bachelor\u2019s degree in neuroscience, minor in art history \u2014 Lafayette College, Easton, PA',
      'Doctor of Dental Medicine (DMD) \u2014 Rutgers School of Dental Medicine, Newark, NJ',
      'General practice residency \u2014 Morristown Medical Center (Level 1 Trauma Center), Morristown, NJ',
    ],
    affiliations: [
      'Staff dentist, Morristown Medical Center, NJ \u2014 general dentistry in the operating room',
    ],
    specialties: [
      'General dentistry',
      'Dental emergencies',
      'Oral surgery training',
      'Patient-centered, collaborative care',
    ],
    image: '/images/proudtosmile/madison-costello-headshot.webp',
    imageAlt: 'Madison Costello, DMD of Proud To Smile Dentistry in Bernardsville, NJ',
    imageWidth: 800,
    imageHeight: 1000,
    services: [
      'cosmetic-and-restorative-dentistry',
      'emergency-dentistry',
      'extractions-oral-surgery',
      'crowns',
      'cleaning',
      'dentures',
    ],
  },

  {
    slug: 'karima-west-rdh',
    name: 'Karima West',
    credentials: 'RDH',
    title: 'Registered Dental Hygienist',
    seoTitle: 'Karima West, RDH | Dental Hygienist in Bernardsville, NJ',
    description:
      'Karima West, RDH is a registered dental hygienist at Proud To Smile Dentistry in Bernardsville, NJ.',
    // The live site displays literally "coming soon.." for Karima's bio. Do
    // not invent one — carry the real state of the page and let the patient
    // reviews that name her do the talking.
    bio: [],
    bioPending:
      'A full biography for Karima is on the way. In the meantime, our patients describe her better than we could.',
    image: '/images/proudtosmile/karima-west-headshot.jpg',
    imageAlt: 'Karima West, RDH of Proud To Smile Dentistry in Bernardsville, NJ',
    imageWidth: 300,
    imageHeight: 400,
    services: ['cleaning', 'periodontal-therapy', 'pediatric-dentistry', 'dentures', 'dental-implants'],
    testimonial: {
      quote: 'Karima is attentive, making sure that you are comfortable and pain free.',
      author: 'Kathleen S.',
      context: 'June 2024',
    },
  },
];

export const getDoctor = (slug: string) => doctors.find((d) => d.slug === slug);

/** Support team from the real /providers listing — first names only, as published. */
export const supportTeam = [
  {
    name: 'Nanette',
    role: 'Dental Assistant',
    text: 'Over 25 years in dentistry — and she loves her job as much today as she did when she started.',
  },
  {
    name: 'Marcela',
    role: 'Patient Care Coordinator',
    text: 'Handles treatment and financial planning and insurance coordination, and assists with restorative and clear aligner appointments.',
  },
  {
    name: 'Francesca',
    role: 'Marketing and Patient Care Coordinator',
    text: 'Focuses on community building and promotes the highlights of the office.',
  },
  {
    name: 'Jawad',
    role: 'Dental Assistant',
    text: 'A Montclair State University graduate with a BS in Biology, who aspires to attend dental school.',
  },
  {
    name: 'Erin',
    role: 'Patient Care Coordinator',
    text: 'Focuses on patient connection and health support. Outside the office she enjoys hiking and cooking.',
  },
];
