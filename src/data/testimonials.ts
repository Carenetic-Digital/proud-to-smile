// Real patient reviews. SOURCE: reference/content-proudtosmile.md section 5.
// 26 reviews from the live /testimonials page (Apr 2023 – Oct 2025), plus the
// longer homepage quotes. Overall rating 4.96.
//
// NEVER add a review that is not in that file.

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
  /** Provider the review names, where one is named. */
  provider?: 'patricia-swaintek-lamb-dmd' | 'karima-west-rdh';
}

export const testimonials: Testimonial[] = [
  { quote: 'I have a million dollar smile and could not be happier that I decided to do this.', author: 'Keith S.', context: 'October 2025' },
  { quote: "Dr. Patti is not only efficient and knowledgeable, but she's also one of the most empathetic, kind, and personable dentists I've ever met.", author: 'Jose O.', context: 'February 2025', provider: 'patricia-swaintek-lamb-dmd' },
  { quote: 'As always; professional, thorough and considerate…', author: 'Douglas A.', context: 'January 2025' },
  { quote: 'Karima is the best.', author: 'Todd M.', context: 'August 2024', provider: 'karima-west-rdh' },
  { quote: 'Karima is attentive, making sure that you are comfortable and pain free.', author: 'Kathleen S.', context: 'June 2024', provider: 'karima-west-rdh' },
  { quote: 'I feel very comfortable with her doing my dental cleaning.', author: 'Kim C.', context: 'May 2024' },
  { quote: "She provides straightforward feedback on what's going well and what could be better.", author: 'Mark A.', context: 'May 2024' },
  { quote: 'I look forward to my cleanings and check ups with her.', author: 'Gregory S.', context: 'May 2024' },
  { quote: 'Dr Patty and her staff are true professionals and always go out of their way.', author: 'Scott B.', context: 'April 2024', provider: 'patricia-swaintek-lamb-dmd' },
  { quote: 'Karima is extremely professional and kind.', author: 'Edward/Jamie F.', context: 'April 2024', provider: 'karima-west-rdh' },
  { quote: 'My family and I all love her. And we highly recommend her.', author: 'Leslie M.', context: 'December 2023' },
  { quote: 'Her crowns fit perfectly and look and feel exactly like a real tooth.', author: 'John O.', context: 'November 2023', provider: 'patricia-swaintek-lamb-dmd' },
  { quote: 'Absolutely amazing…. Up to this point i abhorred any sort of dental work.', author: 'Dennis G.', context: 'October 2023' },
  { quote: 'High-tech and thorough.', author: 'James F.', context: 'October 2023' },
  { quote: 'Karima makes my dental cleaning a pleasant experience.', author: 'Amy P.', context: 'October 2023', provider: 'karima-west-rdh' },
  { quote: 'I came to her pretty nervous due to my complicated dental history and this has been nothing but a great experience.', author: 'Karly K.', context: 'September 2023' },
  { quote: 'Everything was in good condition — No new cavities and the crowns look good.', author: 'Wolfgang B.', context: 'September 2023' },
  { quote: 'Dr. Patti and her staff are always welcoming and provide a warm and friendly atmosphere.', author: 'Diane Q.', context: 'September 2023', provider: 'patricia-swaintek-lamb-dmd' },
  { quote: 'Everyone was very nice and professional.', author: 'Jim F.', context: 'June 2023' },
  { quote: 'Everyone was so kind and helpful from the moment I walked in.', author: 'Jenna J.', context: 'June 2023' },
  { quote: 'Caring attitude. Pain free extractions. Fast recovery.', author: 'Herbert F.', context: 'June 2023' },
  { quote: 'The best cleaning EVER.', author: 'Kim C.', context: 'June 2023' },
  { quote: 'They take time to make sure the patient understands any procedure.', author: 'Diane Q.', context: 'June 2023' },
  { quote: 'Always great, professional, communicative, and knowledgeable.', author: 'Stanton P.', context: 'June 2023' },
  { quote: "I've had a couple urgent issues and they get me in and fixed quickly.", author: 'Stephen M.', context: 'May 2023' },
  { quote: 'The competency, efficiency and kindness of Dr. Patti and her team was extraordinary!', author: 'Carol Z.', context: 'April 2023', provider: 'patricia-swaintek-lamb-dmd' },
];

/** The longer quotes the real site rotates on its homepage. */
export const featuredTestimonials: Testimonial[] = [
  { quote: 'I have been going to Dr. Patti for the last 25 years. She is the best. Her practice is very tech savvy unlike other dentists.', author: 'Naresh P.', context: 'Patient of 25 years', provider: 'patricia-swaintek-lamb-dmd' },
  { quote: "Dr. Patti is not only efficient and knowledgeable, but she's also one of the most empathetic, kind, and personable dentists I've ever met.", author: 'Jose O.', context: 'February 2025', provider: 'patricia-swaintek-lamb-dmd' },
  { quote: 'The competency, efficiency and kindness of Dr. Patti and her team was extraordinary!', author: 'Carol Z.', context: 'April 2023', provider: 'patricia-swaintek-lamb-dmd' },
];

export const forProvider = (slug: string) => testimonials.filter((t) => t.provider === slug);
