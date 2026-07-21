# Stevie Craig Private Hires and Tours

Five-page website for Edinburgh private hire, airport transfers, longer journeys and bespoke tours.

## Local development

```bash
npm install
npm run dev
```

## Launch configuration

Copy `.env.example` to `.env` and set both values before creating a public build:

- `NEXT_PUBLIC_SITE_URL`: final HTTPS custom domain without a trailing slash.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: international WhatsApp number using digits only.

Until both values are valid, the site remains in preview mode: search crawlers are blocked and WhatsApp buttons show the pending contact state.

## Validation

```bash
npm test
```
