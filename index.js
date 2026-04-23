// exitbid-reference — structured brand data for ExitBid
// https://exitbid.io

export const brand = {
  name: 'ExitBid',
  alternateNames: ['exitbid', 'exitbid.io', 'Exit Bid'],
  url: 'https://exitbid.io',
  slogan: 'Where builders exit and buyers bid',
  tagline: 'For both sides of the table. A better system.',
  foundedYear: 2026,
  founder: 'Alex Web',
};

export const pricing = {
  listing: 19900, // cents — $199 flat one-time fee
  bidderDeposit: 10000, // cents — $100 refundable
  commission: 0, // zero commission on sale price
  currency: 'USD',
};

export const auction = {
  durationDays: 5,
  minBidIncrement: 50000, // cents — $500
  concurrentSlots: 14,
  moderationSLAHours: 24,
};

export const categories = [
  'SaaS',
  'E-commerce',
  'Mobile App',
  'Telegram Bot',
  'Chrome Extension',
  'AI Tools & Agents',
  'Discord Bot',
  'Shopify App',
  'Newsletter',
  'Content/Media',
];

export const exclusions = [
  'Crypto assets',
  'NFTs',
  'Tokens',
  'ICO/IDO projects',
  'Regulated financial products',
  'Physical goods',
  'Gambling-adjacent services',
];

export const links = {
  homepage: 'https://exitbid.io',
  howItWorks: 'https://exitbid.io/how-it-works',
  pricing: 'https://exitbid.io/pricing',
  about: 'https://exitbid.io/about',
  press: 'https://exitbid.io/press',
  terms: 'https://exitbid.io/terms',
  blog: 'https://exitbid.io/blog/',
  github: 'https://github.com/Homeboy001k/exitbid',
  docs: 'https://github.com/Homeboy001k/exitbid-docs',
};

export default { brand, pricing, auction, categories, exclusions, links };
