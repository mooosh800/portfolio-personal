/**
 * Edit this file to update the personal content of the site.
 * The email below is an editable placeholder — replace it with the real address.
 */
export const siteConfig = {
  name: 'LAMA ALHBABY',
  role: 'CREATIVE DIRECTOR',
  tagline: 'Ideas. Vision. Creative Direction.',

  about: {
    heading: 'A LITTLE ABOUT ME.',
    lines: [
      'Creative professional specializing in creative direction, visual communication, and brand identity.',
      'I transform ideas into meaningful visual experiences through strategic thinking and creative storytelling.',
      'Passionate about innovation, design, and the power of visual narratives.',
    ],
  },

  skills: {
    heading: 'CORE EXPERTISE.',
    items: [
      'Creative Direction',
      'Brand Identity',
      'Visual Communication',
      'Creative Strategy',
      'Digital Marketing',
    ],
  },

  contact: {
    heading: 'LET’S CONNECT.',
    email: 'you@example.com',
    closing: 'Open to creative collaborations and meaningful opportunities.',
  },

  footer: {
    copyrightYear: 2026,
  },

  navigation: [
    { id: 'introduction', label: 'Introduction', index: '01' },
    { id: 'about', label: 'About', index: '02' },
    { id: 'skills', label: 'Skills', index: '03' },
    { id: 'contact', label: 'Contact', index: '04' },
  ],
} as const;
