import {CONTACT_EMAIL, CONTACT_PHONE} from '../lib/contact';

export const SITE_URL = 'https://chhotitokri.com';

export const SITE_NAME = 'Chhoti Tokri';

export const SITE_LOCALE = 'en_IN';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/aistudio/Image_6_e62c1819.jpeg`;

export const ORGANIZATION = {
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  description:
    'Chhoti Tokri is a brand showcase for thoughtfully sourced Indian food products including traditional grains, oils, honey, spices, and pantry foods.',
} as const;