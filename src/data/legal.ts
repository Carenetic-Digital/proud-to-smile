// The 11 legal/compliance pages the reference site carries.
//
// IMPORTANT: this is standard policy boilerplate adapted to Proud To Smile's
// real business details (name, address, phone, jurisdiction). The reference
// site's own versions were unedited template text, so there was nothing
// practice-specific to carry over. THIS COPY MUST BE REVIEWED BY THE CLIENT
// AND THEIR COUNSEL BEFORE LAUNCH — particularly the HIPAA, Consent for
// Treatment, Financial Policies, and Grievance Procedure documents, which
// describe obligations the practice has to actually be following.

export interface LegalSection {
  heading: string;
  body: string[];
  list?: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  sections: LegalSection[];
}

const PRACTICE = 'Proud To Smile Dentistry';
const ADDR = '10 Anderson Hill Road, Bernardsville, NJ 07924';
const TEL = '908-221-1188';
const CONTACT = `${PRACTICE}, ${ADDR}, or call ${TEL}`;

export const legalDocs: LegalDoc[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    seoTitle: `Privacy Policy | ${PRACTICE}`,
    description: `How ${PRACTICE} collects, uses, and protects your information.`,
    intro: `${PRACTICE} ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This policy explains what we collect through this website and how we use it.`,
    sections: [
      {
        heading: 'Information You Provide',
        body: ['We collect information you choose to give us, which may include:'],
        list: [
          'Your name and contact details, including email address and phone number',
          'Appointment requests and the information you supply with them',
          'Messages you send us through the site or our online forms',
          'Health and insurance information submitted through our patient intake form',
        ],
      },
      {
        heading: 'Information Collected Automatically',
        body: ['When you visit this site, some information is collected automatically:'],
        list: [
          'Browser type and version',
          'Pages visited and time spent on them',
          'The website that referred you',
          'General device and connection information',
        ],
      },
      {
        heading: 'How We Use Your Information',
        body: ['We use the information we collect to:'],
        list: [
          'Schedule, confirm, and manage your appointments',
          'Provide and coordinate your dental care',
          'Respond to your questions and requests',
          'Process insurance claims and payments',
          'Improve this website and the service we provide',
          'Meet our legal and regulatory obligations',
        ],
      },
      {
        heading: 'Protected Health Information',
        body: [
          'Health information you share with the practice is separately protected under HIPAA. Our Notice of Privacy Practices, together with our HIPAA Compliance Statement, governs how we handle protected health information — those terms take precedence over this policy where the two overlap.',
        ],
      },
      {
        heading: 'Sharing Your Information',
        body: [
          'We do not sell your personal information. We share it only with service providers who help us operate the practice and this website — such as our appointment booking, patient portal, and forms providers — and only to the extent they need it to perform that service. We may also disclose information where the law requires it.',
        ],
      },
      {
        heading: 'Third-Party Services',
        body: [
          'This site links to third-party services including our online booking provider, patient portal, and patient forms platform. Those services have their own privacy policies, and we encourage you to read them. We are not responsible for the practices of sites we link to.',
        ],
      },
      {
        heading: 'Your Choices',
        body: [
          'You may ask us to correct or update the information we hold about you, and you may request a copy of your records. To make a request, contact us at the details below.',
        ],
      },
      {
        heading: 'Contact Us',
        body: [`Questions about this policy can be directed to ${CONTACT}.`],
      },
    ],
  },

  {
    slug: 'terms-conditions',
    title: 'Terms & Conditions',
    seoTitle: `Terms & Conditions | ${PRACTICE}`,
    description: `The terms that govern your use of the ${PRACTICE} website.`,
    intro: `By accessing and using this website, you agree to these terms. If you do not agree with them, please do not use the site.`,
    sections: [
      {
        heading: 'Use of This Site',
        body: [
          'You may use this website for lawful purposes only. You agree not to use it in any way that could damage, disable, or impair the site, or interfere with anyone else’s use of it.',
        ],
      },
      {
        heading: 'Not Medical Advice',
        body: [
          'The content on this site is provided for general information only. It is not dental or medical advice and is not a substitute for an examination, diagnosis, or treatment plan from a qualified provider. Never delay seeking professional care because of something you read here.',
        ],
      },
      {
        heading: 'No Provider-Patient Relationship',
        body: [
          'Using this website, submitting a form, or requesting an appointment does not by itself create a provider-patient relationship. That relationship begins when you are seen and accepted as a patient of the practice.',
        ],
      },
      {
        heading: 'Intellectual Property',
        body: [
          `All content on this site — text, images, logos, and design — is the property of ${PRACTICE} or its licensors and is protected by copyright and trademark law. You may not reproduce or redistribute it without our written permission.`,
        ],
      },
      {
        heading: 'Third-Party Links',
        body: [
          'This site links to services operated by others, including our booking, portal, and forms providers. We do not control those sites and are not responsible for their content or practices.',
        ],
      },
      {
        heading: 'Limitation of Liability',
        body: [
          `To the fullest extent permitted by law, ${PRACTICE} is not liable for any damages arising from your use of, or inability to use, this website.`,
        ],
      },
      {
        heading: 'Governing Law',
        body: [
          'These terms are governed by the laws of the State of New Jersey, without regard to its conflict of law provisions.',
        ],
      },
      {
        heading: 'Changes to These Terms',
        body: [
          'We may update these terms from time to time. Continued use of the site after a change means you accept the revised terms.',
        ],
      },
      { heading: 'Contact Us', body: [`Questions about these terms can be directed to ${CONTACT}.`] },
    ],
  },

  {
    slug: 'hipaa-compliance-statement',
    title: 'HIPAA Compliance Statement',
    seoTitle: `HIPAA Compliance Statement | ${PRACTICE}`,
    description: `How ${PRACTICE} protects your health information under HIPAA.`,
    intro: `${PRACTICE} is committed to protecting the privacy and security of your protected health information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and applicable New Jersey law.`,
    sections: [
      {
        heading: 'Our Commitment',
        body: [
          'We are required by law to maintain the privacy of your protected health information, to give you notice of our legal duties and privacy practices with respect to that information, and to follow the terms of the notice currently in effect.',
        ],
      },
      {
        heading: 'How We May Use and Disclose Your Information',
        body: ['We may use and disclose your protected health information for the following purposes:'],
        list: [
          'Treatment — to provide, coordinate, and manage your dental care, including with other providers involved in your treatment',
          'Payment — to bill and collect payment from you, your insurer, or another responsible party',
          'Health care operations — for quality assessment, staff training, licensing, and business management',
          'As required by law — including public health reporting, and reporting suspected abuse or neglect',
        ],
      },
      {
        heading: 'Your Rights',
        body: ['With respect to your protected health information, you have the right to:'],
        list: [
          'Inspect and obtain a copy of your dental records',
          'Request a correction to information you believe is inaccurate or incomplete',
          'Request restrictions on how we use or disclose your information',
          'Request that we communicate with you by a particular means or at a particular location',
          'Receive an accounting of certain disclosures we have made',
          'Receive a paper copy of our Notice of Privacy Practices',
          'Be notified in the event of a breach of your unsecured protected health information',
        ],
      },
      {
        heading: 'Safeguards',
        body: [
          'We maintain administrative, physical, and technical safeguards designed to protect your information — including access controls on our systems, staff training on privacy obligations, and agreements with the vendors who handle information on our behalf.',
        ],
      },
      {
        heading: 'Filing a Complaint',
        body: [
          `If you believe your privacy rights have been violated, you may file a complaint with the practice at ${CONTACT}, or with the U.S. Department of Health and Human Services Office for Civil Rights. We will not retaliate against you for filing a complaint.`,
        ],
      },
    ],
  },

  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    seoTitle: `Cookie Policy | ${PRACTICE}`,
    description: `How ${PRACTICE} uses cookies and similar technologies on this website.`,
    intro: 'This policy explains what cookies are, how this website uses them, and how you can control them.',
    sections: [
      {
        heading: 'What Cookies Are',
        body: [
          'Cookies are small text files a website places on your device. They let the site remember things about your visit — your preferences, for example — and help us understand how the site is used.',
        ],
      },
      {
        heading: 'How We Use Cookies',
        body: ['This site may use cookies for the following purposes:'],
        list: [
          'Essential — cookies required for the site to function and for security',
          'Preference — remembering choices you make, such as accessibility settings',
          'Analytics — understanding which pages are visited so we can improve the site',
        ],
      },
      {
        heading: 'Third-Party Cookies',
        body: [
          'Third-party services embedded in or linked from this site — including our online booking, patient portal, and patient forms providers — may set their own cookies. Those are governed by the third party’s own policies.',
        ],
      },
      {
        heading: 'Managing Cookies',
        body: [
          'Every major browser lets you view, delete, and block cookies through its settings. Blocking cookies may mean parts of this site no longer work as intended.',
        ],
      },
      { heading: 'Contact Us', body: [`Questions about this policy can be directed to ${CONTACT}.`] },
    ],
  },

  {
    slug: 'disclaimer',
    title: 'Disclaimer',
    seoTitle: `Disclaimer | ${PRACTICE}`,
    description: `Important information about the content published on the ${PRACTICE} website.`,
    intro: 'Please read this disclaimer carefully before relying on anything published on this website.',
    sections: [
      {
        heading: 'General Information Only',
        body: [
          'The content on this site is published for general informational purposes. It does not constitute dental, medical, or professional advice, and it is not a substitute for a consultation with a qualified provider who has examined you.',
        ],
      },
      {
        heading: 'Individual Results Vary',
        body: [
          'Any treatment outcomes, timelines, or results described on this site — including before-and-after photographs in our smile gallery — reflect the experience of specific patients. Your own result depends on your clinical situation and cannot be guaranteed.',
        ],
      },
      {
        heading: 'No Guarantee of Accuracy',
        body: [
          'We work to keep this site accurate and current, but we make no warranty that the content is complete, accurate, or up to date at any given moment. Clinical guidance changes, and so does the practice.',
        ],
      },
      {
        heading: 'External Links',
        body: [
          'Links to other websites are provided for convenience. We do not endorse and are not responsible for their content.',
        ],
      },
      {
        heading: 'In an Emergency',
        body: [
          `If you are experiencing a medical emergency, call 911. For a dental emergency during office hours, call the practice on ${TEL} — we leave room in the schedule for patients who need immediate assistance.`,
        ],
      },
    ],
  },

  {
    slug: 'accessibility-statement',
    title: 'Accessibility Statement',
    seoTitle: `Accessibility Statement | ${PRACTICE}`,
    description: `${PRACTICE} is committed to making this website accessible to everyone.`,
    intro: `${PRACTICE} is committed to ensuring that this website is accessible to people with disabilities, and to providing an equally good experience however you browse.`,
    sections: [
      {
        heading: 'Our Standard',
        body: [
          'This site has been built to conform with the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. Those guidelines explain how to make web content more accessible to people with a wide range of disabilities.',
        ],
      },
      {
        heading: 'What We Have Done',
        body: ['Measures taken during the design and build of this site include:'],
        list: [
          'Colour combinations tested to meet or exceed AA contrast ratios',
          'Full keyboard operability, with a visible focus indicator on every interactive element',
          'Semantic HTML and ARIA landmarks so screen readers can navigate the page structure',
          'Descriptive alternative text on meaningful images',
          'Text that reflows and remains readable when zoomed or on small screens',
          'A skip link to jump straight to the main content',
        ],
      },
      {
        heading: 'Ongoing Effort',
        body: [
          'Accessibility is not a one-time exercise. We review the site as it changes and correct issues we find.',
        ],
      },
      {
        heading: 'Tell Us About a Problem',
        body: [
          `If you encounter a barrier on this site, or need information in a different format, please tell us — call ${TEL} or write to us at ${ADDR}. We will work with you to provide the information you need and to fix the underlying problem.`,
        ],
      },
    ],
  },

  {
    slug: 'consent-for-treatment',
    title: 'Consent for Treatment',
    seoTitle: `Consent for Treatment | ${PRACTICE}`,
    description: `Information about informed consent for dental treatment at ${PRACTICE}.`,
    intro: 'This page explains what informed consent means at our practice. Formal consent is obtained in writing before treatment begins, and it is part of our new-patient intake packet.',
    sections: [
      {
        heading: 'What Informed Consent Means',
        body: [
          'Before any treatment, your provider will explain what is proposed, why it is recommended, what it involves, the reasonably foreseeable risks, the alternatives available to you, and what is likely to happen if you decide to do nothing. You will have the opportunity to ask questions and to have them answered before you decide.',
        ],
      },
      {
        heading: 'Your Right to Decide',
        body: [
          'Consent is yours to give and yours to withdraw. You may decline any recommended treatment, ask for time to consider it, or seek a second opinion. Declining treatment will not affect your standing as a patient of this practice, though we will explain the consequences of leaving a condition untreated.',
        ],
      },
      {
        heading: 'Minors and Legal Guardians',
        body: [
          'For patients under 18, consent must be given by a parent or legal guardian. Please make sure a consenting adult accompanies a minor patient to their appointment, or that arrangements have been agreed with the office in advance.',
        ],
      },
      {
        heading: 'Emergency Treatment',
        body: [
          'In a genuine emergency, where a delay would put your health at serious risk and consent cannot be obtained, treatment necessary to address the emergency may be provided.',
        ],
      },
      {
        heading: 'Questions',
        body: [
          `If anything about a proposed treatment is unclear, ask — before you sign anything. Call ${TEL} or raise it with your provider at your appointment.`,
        ],
      },
    ],
  },

  {
    slug: 'notice-of-non-discrimination',
    title: 'Notice of Non-discrimination',
    seoTitle: `Notice of Non-discrimination | ${PRACTICE}`,
    description: `${PRACTICE} does not discriminate on the basis of race, colour, national origin, age, disability, sex, or gender identity.`,
    intro: `${PRACTICE} complies with applicable federal and New Jersey civil rights laws and does not discriminate on the basis of race, colour, national origin, age, disability, sex, gender identity, or sexual orientation.`,
    sections: [
      {
        heading: 'Our Commitment',
        body: ['We do not exclude people or treat them differently because of any protected characteristic. Every patient receives the same standard of care and the same courtesy.'],
      },
      {
        heading: 'Support for Patients with Disabilities',
        body: ['We provide free aids and services to people with disabilities to communicate effectively with us, which may include:'],
        list: [
          'Qualified sign language interpreters',
          'Written information in other formats, including large print',
          'Assistance navigating this website or completing our forms',
        ],
      },
      {
        heading: 'Language Assistance',
        body: [
          'If your primary language is not English, free language assistance can be arranged. Please let the office know in advance of your appointment so we can make the arrangements.',
        ],
      },
      {
        heading: 'Requesting Assistance or Raising a Concern',
        body: [
          `To request an aid or service, or to raise a concern about discrimination, contact us at ${CONTACT}. You may also file a civil rights complaint with the U.S. Department of Health and Human Services Office for Civil Rights.`,
        ],
      },
    ],
  },

  {
    slug: 'patient-rights-responsibilities',
    title: 'Patient Rights & Responsibilities',
    seoTitle: `Patient Rights & Responsibilities | ${PRACTICE}`,
    description: `What you can expect from ${PRACTICE}, and what we ask of you as a patient.`,
    intro: 'A good clinical relationship runs both ways. This page sets out what you can expect from us, and what we ask of you.',
    sections: [
      {
        heading: 'Your Rights',
        body: ['As a patient of this practice, you have the right to:'],
        list: [
          'Be treated with respect, dignity, and consideration, without discrimination',
          'Receive care from qualified providers in a safe and clean environment',
          'Have your treatment options, risks, and alternatives explained in terms you understand',
          'Participate in decisions about your care, and to refuse any recommended treatment',
          'Privacy and confidentiality of your health information',
          'Access your dental records and request corrections to them',
          'Know the expected cost of treatment before it begins',
          'Raise a concern or complaint without it affecting your care',
          'Seek a second opinion',
        ],
      },
      {
        heading: 'Your Responsibilities',
        body: ['To help us give you the best care, we ask that you:'],
        list: [
          'Provide accurate and complete information about your health history, medications, and symptoms',
          'Tell us promptly if your health, insurance, or contact details change',
          'Follow the treatment plan you have agreed to, and tell us if you cannot',
          'Keep your appointments, and give reasonable notice if you need to cancel',
          'Meet your financial obligations to the practice',
          'Treat our staff and other patients with courtesy',
          'Ask questions when something is not clear',
        ],
      },
      {
        heading: 'If Something Goes Wrong',
        body: [
          'If you are unhappy with any aspect of your care, tell us. Our grievance procedure explains how concerns are handled.',
        ],
      },
    ],
  },

  {
    slug: 'financial-policies',
    title: 'Financial Policies',
    seoTitle: `Financial Policies | ${PRACTICE}`,
    description: `Payment, insurance, and billing policies at ${PRACTICE} in Bernardsville, NJ.`,
    intro: 'These are the financial policies of the practice. If anything here raises a question about your particular situation, call the office and ask for our patient care coordinator.',
    sections: [
      {
        heading: 'Estimates Before Treatment',
        body: [
          'You will receive an itemised treatment plan with the expected cost of each procedure before work begins, with your insurance contribution applied so you can see your expected out-of-pocket amount.',
        ],
      },
      {
        heading: 'Payment',
        body: [
          'Payment is due at the time of service unless other arrangements have been agreed in advance. Balances can be settled at the office, over the phone, or through the patient portal.',
        ],
      },
      {
        heading: 'Insurance',
        body: [
          'We accept all major insurance providers and will submit claims on your behalf. Please understand that your policy is a contract between you and your insurer — you remain responsible for any amount your plan does not cover, including deductibles, co-payments, and non-covered procedures. Benefit estimates are not a guarantee of payment.',
        ],
      },
      {
        heading: 'Appointments and Cancellations',
        body: [
          'Appointment time is reserved specifically for you. If you need to cancel or reschedule, please give the office as much notice as you reasonably can so the time can be offered to another patient.',
        ],
      },
      {
        heading: 'Outstanding Balances',
        body: [
          'If you are having difficulty with a balance, contact the office before it becomes a problem. We would far rather work out an arrangement with you than let an account go unresolved.',
        ],
      },
      {
        heading: 'Questions',
        body: [`Call ${TEL} and ask for our patient care coordinator, who handles treatment and financial planning and insurance coordination.`],
      },
    ],
  },

  {
    slug: 'grievance-procedure',
    title: 'Grievance Procedure',
    seoTitle: `Grievance Procedure | ${PRACTICE}`,
    description: `How to raise a concern or complaint with ${PRACTICE} in Bernardsville, NJ.`,
    intro: 'If you are unhappy with any part of your experience here, we want to know. This page explains how to raise it and what happens next.',
    sections: [
      {
        heading: 'Raising a Concern',
        body: [
          `Start by telling us directly — call ${TEL} and ask to speak with the practice manager, or write to us at ${ADDR}. Most concerns are resolved in that first conversation.`,
        ],
      },
      {
        heading: 'What to Include',
        body: ['To help us look into it properly, it helps if you can tell us:'],
        list: [
          'Your name and the best way to reach you',
          'The date of the appointment or event concerned',
          'What happened, in your own words',
          'What outcome you are hoping for',
        ],
      },
      {
        heading: 'What Happens Next',
        body: [
          'We will acknowledge your concern, look into what happened, and come back to you with our findings and any action we are taking. If we need longer to investigate, we will tell you that rather than leave you waiting.',
        ],
      },
      {
        heading: 'No Retaliation',
        body: [
          'Raising a concern will never affect the care you receive or your standing as a patient of this practice.',
        ],
      },
      {
        heading: 'External Options',
        body: [
          'If you are not satisfied with our response, you may raise the matter with the New Jersey State Board of Dentistry. Concerns specifically about the privacy of your health information may also be taken to the U.S. Department of Health and Human Services Office for Civil Rights.',
        ],
      },
    ],
  },
];

export const getLegalDoc = (slug: string) => legalDocs.find((d) => d.slug === slug);
