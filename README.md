# iFind Real Estate LLC: website

Next.js 15 (App Router) + Tailwind CSS. Tagline: **Finding Value. Building Trust.**

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where to edit things
| What | File |
|---|---|
| Company details, phone, WhatsApp, email, ORN, developer list, team, process steps | `lib/site.ts` |
| Logo files (SVG, traced from the supplied PNG) | `public/brand/` |
| Image placeholders | `components/Placeholder.tsx` (replace with `<Image>` per spot) |
| Enquiry delivery (email) | `app/api/inquiry/route.ts` + env vars in `.env.example` |

## Enquiries
Chat widget and the contact form both post to `/api/inquiry`. Every enquiry is logged (Vercel → Logs).
Set `RESEND_API_KEY` and `INQUIRY_TO_EMAIL` in Vercel → Settings → Environment Variables to also receive each one by email.

## Placeholders to replace before launch
Phone, WhatsApp number, email, address, ORN number, broker profiles (name, BRN, photo), developer logos, all photos, Privacy Policy and Terms text.
