// Shared schema.org node builders.
//
// The practice is ONE entity across the whole site, so it gets one stable
// `@id` and every page that mentions it references that id instead of
// declaring a rival business node. BaseLayout emits the full node site-wide;
// /locations/bernardsville/ extends the same id rather than duplicating it.
//
// Business facts come from ./site.ts — never hardcode them here.

import {
  PRACTICE, CITY, STATE, STREET, POSTAL_CODE, HOURS, MAPS_URL, SOCIAL,
} from './site';

/** E.164 form of PHONE, which schema.org wants. */
export const TELEPHONE = '+1-908-221-1188';

export const OG_IMAGE = '/images/proudtosmile/hero-woman-at-dentist.webp';

export const practiceId = (site: URL | undefined) => `${site?.href ?? '/'}#practice`;
export const websiteId = (site: URL | undefined) => `${site?.href ?? '/'}#website`;

export const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: STREET,
  addressLocality: CITY,
  addressRegion: STATE,
  postalCode: POSTAL_CODE,
  addressCountry: 'US',
};

/** Only the days the office actually opens. */
export const openingHours = HOURS.filter((h) => h.opens).map((h) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: `https://schema.org/${h.day}`,
  opens: h.opens,
  closes: h.closes,
}));

export const AREA_SERVED = ['Bernardsville, NJ', 'Somerset County, NJ', 'Morris County, NJ'];

/**
 * The canonical practice node, emitted site-wide by BaseLayout.
 *
 * TODO(client sign-off): `geo` (latitude/longitude) and `priceRange` are both
 * strong local-pack signals, but both are factual claims about the business —
 * add them once the practice confirms the values. Do NOT add `aggregateRating`
 * here: Google prohibits self-serving review markup on your own business page.
 */
export function practiceSchema(site: URL | undefined) {
  const logo = new URL('/images/proudtosmile/logo.webp', site).href;
  return {
    '@type': 'Dentist',
    '@id': practiceId(site),
    name: PRACTICE,
    url: site?.href,
    logo,
    image: logo,
    telephone: TELEPHONE,
    address: postalAddress,
    areaServed: AREA_SERVED,
    openingHoursSpecification: openingHours,
    hasMap: MAPS_URL,
    sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.youtube],
  };
}

export function websiteSchema(site: URL | undefined) {
  return {
    '@type': 'WebSite',
    '@id': websiteId(site),
    name: PRACTICE,
    url: site?.href,
    inLanguage: 'en-US',
    publisher: { '@id': practiceId(site) },
  };
}
