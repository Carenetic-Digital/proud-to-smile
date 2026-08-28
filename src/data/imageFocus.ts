/**
 * Focal point per photograph, as a Tailwind `object-position` utility.
 *
 * The wide 1420x700 stock photos are re-cropped by `object-cover` into boxes
 * ranging from a 2.9:1 homepage band down to 1.3:1 half-width panels. A photo
 * whose subject sits off-centre therefore loses part of a face at the default
 * `50% 50%` — and because these images are passed into shared components
 * (PageHero, the service template) as props, the framing has to travel with
 * the file rather than being set per page.
 *
 * Subject positions below were measured against the 1420x700 sources.
 */
const FOCUS: Record<string, string> = {
  // Two subjects: hygienist ~x650-900, patient's face ~x950-1150. The tall
  // homepage crop shows only ~44% of the width, and centring sliced through
  // the patient's face. 80% frames both, with the chair headrest as a natural
  // right edge; top-aligned because the hygienist's head starts at the top.
  'hero-woman-at-dentist.webp': 'object-[80%_top]',

  // The patient's face occupies x945-1390 — centred on ~82% of the width. A
  // centred crop cut the frame just behind her right eye on the half-width
  // panels (and clipped the eye itself at mobile widths).
  'smiling-patient-with-provider.webp': 'object-[90%_center]',

  // Deliberately centred: the hygienist's crown touches the top edge and the
  // patient's chin the bottom, so the subjects span more height than the short
  // bands can show. Centring is the crop that keeps both sets of facial
  // features intact — biasing either way eats one of them.
  'dental-services.webp': 'object-center',
};

/** Tailwind object-position class for an image src, defaulting to centre. */
export function focusFor(src?: string): string {
  if (!src) return 'object-center';
  return FOCUS[src.split('/').pop() ?? ''] ?? 'object-center';
}
