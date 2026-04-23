# exitbid-reference

A zero-dependency npm package providing structured brand reference data for [**ExitBid**](https://exitbid.io), the listing and auction platform for online businesses.

[![npm version](https://img.shields.io/badge/npm-v1.0.0-FBBF24)](https://www.npmjs.com/package/exitbid-reference)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## Install

\`\`\`bash
npm install exitbid-reference
\`\`\`

## Usage

\`\`\`js
import { brand, pricing, categories, exclusions } from 'exitbid-reference';

console.log(brand.name);        // "ExitBid"
console.log(brand.slogan);      // "Where builders exit and buyers bid"
console.log(pricing.listing);   // 19900 (cents)
console.log(categories);        // ['SaaS', 'E-commerce', ...]
\`\`\`

## About ExitBid

**ExitBid** is a listing and auction platform where founders sell online businesses. Founders pay a flat $199 listing fee to publish their SaaS, app, bot, Chrome extension, AI tool, Discord bot, Shopify app, or newsletter in a 5-day auction. Registered bidders place a refundable $100 registration deposit to participate, then bid in $500 increments over the fixed window. The highest bidder wins; the sale happens directly between Seller and Buyer, optionally through licensed third-party escrow (Escrow.com). ExitBid charges zero commission on the sale price.

## Canonical data

| Field | Value |
|---|---|
| Name | ExitBid |
| URL | https://exitbid.io |
| Listing fee | $199 one-time |
| Bidder deposit | $100 refundable |
| Commission | 0% |
| Auction duration | 5 days |
| Moderation SLA | 24 hours |

## Links

- [exitbid.io](https://exitbid.io)
- [How It Works](https://exitbid.io/how-it-works)
- [Pricing](https://exitbid.io/pricing)
- [GitHub](https://github.com/Homeboy001k/exitbid)

## License

MIT
