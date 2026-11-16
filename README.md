# Shehnai – Wedding Invitation

## Local
```
bun install      # ya: npm install
bun run dev      # http://localhost:3000
bun run build
```

## Details edit karna
`src/lib/wedding-invitation-data.ts` (naam, date, venue, events, Instagram/WhatsApp)

Laptop wali video/image: `src/assets/landscape/video.mp4` aur `cover.png`
Seal ki position: `src/lib/stage-assets.ts`

## Vercel par deploy
Is project mein `@lovable.dev/vite-tanstack-config` (TanStack Start + Nitro) hai, jise Vercel khud pehchan leta hai — extra config nahi chahiye.

**Option A – GitHub se (recommended):**
1. Project ko GitHub repo mein push karein.
2. https://vercel.com/new → repo import karein → Framework "TanStack Start" → Deploy.

**Option B – CLI se:**
```
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

Agar framework detect na ho: `vercel project update <project-name> --framework tanstack-start`

## WhatsApp / social preview (OG image)
- Image: `public/og-image.jpg` (1200x630)
- Live domain milne par `src/lib/site.ts` mein `SITE_URL` badal dein, phir dobara deploy karein.
- Preview refresh karwane ke liye: https://developers.facebook.com/tools/debug/ mein link daal kar "Scrape Again" dabayein (WhatsApp purana preview cache rakhta hai).
