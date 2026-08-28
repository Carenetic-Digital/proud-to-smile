// Provider profiles. SOURCE: reference/content-proudtosmile.md section 3.
//
// Only the two clinical providers the real practice publishes profile pages
// for. Support team members (Nanette, Marcela, Francesca, Jawad, Erin) are
// listed on /about/our-team/ — the real site gives first names and short
// blurbs only, no individual pages.
//
// A third associate dentist was due to join in August 2026; per
// state.json -> pages.notes.third_provider, do NOT add an entry until the
// client supplies the real bio and headshot.

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
