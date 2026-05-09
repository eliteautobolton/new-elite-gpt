# Elite Auto Detailing Website V13

V13 adds Brevo mailing list integration.

## Added

- Premium homepage newsletter signup
- Secure Next.js API route:
  - `/app/api/newsletter/route.ts`
- Brevo contact creation
- Uses environment variables, so the API key is not exposed in browser code
- `.env.example` included

## Important security note

Do not hardcode your Brevo API key into any frontend file.

Since an API key was shared in chat, regenerate/rotate it in Brevo after setup.

## Vercel Environment Variables

In Vercel:

Project → Settings → Environment Variables

Add:

```bash
BREVO_API_KEY=your actual Brevo API key
BREVO_LIST_ID=your Brevo list ID number
```

## How to find BREVO_LIST_ID

Brevo → Contacts → Lists → open your list.

The list ID is the number shown in the URL or list details.

## Upload

Upload/replace the full V13 repo contents for easiest deployment.

Keep:

```bash
public/logo.png
```

## Run locally

Create `.env.local`:

```bash
BREVO_API_KEY=your_key
BREVO_LIST_ID=your_list_id
```

Then:

```bash
npm install
npm run dev
```
