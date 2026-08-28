// Site-wide business facts. SOURCE: reference/content-proudtosmile.md section 1.
// These are the real practice's published details — never edit them without
// explicit client sign-off.

export const PRACTICE = 'Proud To Smile Dentistry';
export const CITY = 'Bernardsville';
export const STATE = 'NJ';
export const PHONE = '908-221-1188';
export const PHONE_HREF = 'tel:+19082211188';
export const STREET = '10 Anderson Hill Road';
export const ADDRESS = '10 Anderson Hill Road, Bernardsville, NJ 07924';
export const POSTAL_CODE = '07924';
export const RATING = '4.96';

export const CATEGORY_LINE =
  'Cosmetic, Family, and General Dentistry & Orthodontic Dentistry located in Bernardsville, NJ';

export const TAGLINES = [
  'A beautiful smile is the essence of health',
  'We make our patients Proud To Smile',
];

export const ZOCDOC_URL =
  'https://www.zocdoc.com/practice/proud-to-smile-dentistry-90291?lock=true&referrerType=widget';

export const PATIENT_PORTAL_URL =
  'https://login.mydentistlink.com/auth/realms/dental/protocol/openid-connect/auth?client_id=dental-portal&business_info_uri=https%3A%2F%2Fmydentistlink.com%2Fapi%2Fv0%2Flogininfo%3Fsubdomain%3Dproudtosmile.mydentistlink.com&redirect_uri=https%3A%2F%2Fproudtosmile.mydentistlink.com%2Fapi%2Fv0%2Flogin%3Fbrand%3Ddentrix%26subdomain%3Dproudtosmile.mydentistlink.com&response_type=code';

/** Weave/wv3.io hosted intake packet — the practice's only patient form. */
export const PATIENT_FORMS_URL =
  'https://forms.wv3.io/form?formId=0e3b47c9-8e9d-46af-b0b6-c60766a4df55&companyId=a5e0fec3-0051-44ad-8fd0-6cf0fe36fa3a';

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=10+Anderson+Hill+Road+Bernardsville+NJ+07924';

export const SOCIAL = {
  facebook: 'https://www.facebook.com/Proudtosmile/',
  instagram: 'https://www.instagram.com/proudtosmile/',
  youtube: 'https://www.youtube.com/channel/UClzPIteZ-7o4VpC3dbZ2UFA',
};

export const HOURS = [
  { day: 'Monday', time: '8:00 AM – 12:00 PM', opens: '08:00', closes: '12:00' },
  { day: 'Tuesday', time: '9:00 AM – 6:00 PM', opens: '09:00', closes: '18:00' },
  { day: 'Wednesday', time: '9:00 AM – 6:00 PM', opens: '09:00', closes: '18:00' },
  { day: 'Thursday', time: '7:00 AM – 4:00 PM', opens: '07:00', closes: '16:00' },
  { day: 'Friday', time: '8:00 AM – 12:00 PM', opens: '08:00', closes: '12:00' },
  { day: 'Saturday', time: 'Closed', opens: null, closes: null },
  { day: 'Sunday', time: 'Closed', opens: null, closes: null },
];

/** Footer affiliation badges — names only; the real site renders them as logos. */
export const AFFILIATIONS = ['ADA', 'NJDA', 'AGD', 'IAFGG', 'DDS', 'BRBA', 'NAAFO', 'AAGO', 'AADSM'];
