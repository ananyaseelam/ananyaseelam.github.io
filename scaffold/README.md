# Personal Site — Scaffold

This is a starting-point scaffold matching the design plan: one scrolling
home page (Hero → Experience → Social Impact → Hobbies → About), plus
sub-pages for projects, research, and the crochet gallery — each with a
back button that returns you to your exact scroll position on the home page.

## How to use this

1. Create your Next.js app first (if you haven't already):
   ```bash
   npx create-next-app@latest my-personal-site
   ```
   Choose: TypeScript = Yes, Tailwind = Yes, App Router = Yes, `src/` directory = Yes.

2. Copy everything from this scaffold's `src/` folder and `tailwind.config.ts`
   into your new project, overwriting the defaults it generated.

3. Add real images for the crochet gallery. Put them in `public/crochet/`
   (create that folder) and update the `image` paths in
   `src/content/crochet.json` to match, e.g. `/crochet/blanket.jpg`.

4. Run it:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

## Where to edit content

You should rarely need to touch component code to update the site —
everything content-related lives in `src/content/`:

| File | Controls |
|---|---|
| `profile.json` | Your name, blurb, LinkedIn, email |
| `experience.json` | Companies, roles, projects, languages per project |
| `social-impact.json` | Research papers, organizations, advocacy |
| `crochet.json` | Each crochet piece (title, image, pattern, yarn, date) |

Adding a new project, paper, or crochet piece is just adding a new entry
to the relevant JSON array.

## Where to edit design

All colors live as CSS variables in `src/app/globals.css`, under `:root`.
To re-theme the site, change `--color-accent` there — everything
(buttons, tags, hover states) references that one variable, either
directly or via the Tailwind color extension in `tailwind.config.ts`.

Fonts are loaded in `src/app/layout.tsx` via `next/font/google`
(JetBrains Mono for headers, Inter for body) — swap the font imports
there if you want to try different faces later.

## What's stubbed vs. real

- **Hero, Experience, Social Impact, Hobbies, About**: fully wired to
  the JSON content files — just replace the placeholder text/data.
- **Crochet gallery**: fully working masonry + lightbox, needs real
  images dropped into `public/crochet/`.
- **Project & research sub-pages**: working dynamic routes
  (`/projects/[slug]`, `/research/[slug]`), currently just showing the
  summary — add a longer write-up, images, or links as those pages grow.
- **Back button**: uses `router.back()` so the browser restores your
  scroll position on the home page automatically.

## Next steps once running

- Swap placeholder copy for your real bio, roles, and project details
- Add real profile/company logos if you want them
- Deploy: push to GitHub, then import the repo at vercel.com — it
  auto-detects Next.js and deploys with no config needed
