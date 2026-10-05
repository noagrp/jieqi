# 二十四节气

A reusable educational app for the traditional Chinese 24 solar terms.

## Files
- `data/jieqi.json` — detailed structured knowledge for all 24 solar terms
- `src/jieqi-engine.js` — reusable data/search engine
- `vendor/lunar.js` — local fallback used only for exact current/next solar-term timing
- `index.html` — responsive live reader and 24-term cycle

## Data scope
Each solar term includes season, 节/中气 classification, solar longitude, usual Gregorian date range, meaning, climate/phenology, 三候, agriculture, customs, food, cultural notes and brief festival linkages.

The knowledge JSON is independent from the live date calculation, so it can be reused elsewhere.
