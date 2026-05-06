# Kuckuck Album

AI-assisted printable family photo album app.

## Stack

- Next.js (App Router)
- Supabase (auth, storage, database)
- Claude API (layout proposal generation)
- Vercel (hosting)

## Local Setup

1. Copy env template:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in values in `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ANTHROPIC_API_KEY`
3. Start the app:
   ```bash
   npm run dev
   ```

## Step-by-step Build Plan (1-3h/week)

1. **Auth foundation**: Google login/logout with Supabase.
2. **Photo upload**: Create storage bucket and upload UI.
3. **Album model**: Persist albums, photos, and page metadata.
4. **AI layout**: Generate page layouts via Claude API route.
5. **Print export**: Render and export multi-page PDF.
6. **Deploy**: Vercel project, env vars, and first shared test link.

## Next Step

Set up Supabase project + Google OAuth credentials, then we will implement login routes and session-aware UI.
