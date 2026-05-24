export const SITE = {
  name: 'Laurel.gfk',
  url: (import.meta.env.PUBLIC_SITE_URL as string | undefined)?.replace(/\/$/, '') ?? 'https://laurel-gfk.vercel.app',
  description:
    'Artista plástica y muralista en Bogotá. Murales, pintura original, prints y cursos de arte.',
  instagram: 'https://www.instagram.com/laurel.gfk',
  linktree: 'https://linktr.ee/laurel.gfk',
  whatsapp: '573332672352',
  whatsappMsg: 'Hola Laurel, me interesa conocer más sobre tu trabajo 🎨',
  location: 'Bogotá, Colombia',
} as const;

export type Site = typeof SITE;
