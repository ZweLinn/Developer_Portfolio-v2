# Person Portfolio V2.0

Personal portfolio website Built with Svelte SvelteKit and backed by Sanity CMS.

## Features

- Hero section with CV download link
- About Me section with bio and portrait
- Work experience timeline pulled from Sanity
- Project listing with featured and regular projects
- Individual project detail pages at `/projects/[slug]`
- Skills grid using Devicon icons
- Certifications list
- Contact form powered by Web3Forms with client-side validation
- Dark and light theme toggle
- Responsive layout with Tailwind CSS

## Tech Stack

- [SvelteKit](https://svelte.dev/docs/kit) 2 and [Svelte](https://svelte.dev) 5 (runes mode)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Vite](https://vite.dev/) 8
- [Sanity](https://www.sanity.io/) as headless CMS
- [mode-watcher](https://github.com/svecosystem/mode-watcher) for theme management
- [Web3Forms](https://web3forms.com/) for the contact form
- [Devicon](https://devicon.dev/) for skill and social icons
- [Inter Tight](https://fonts.google.com/specimen/Inter+Tight) via Google Fonts

## Getting Started

### Prerequisites

- Node.js 18 or later
- [pnpm](https://pnpm.io/) (the project uses a pnpm workspace)

### Install dependencies

```sh
pnpm install
```

### Start the development server

```sh
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

### Build for production

```sh
pnpm build
```

### Preview the production build

```sh
pnpm preview
```

### Type checking

```sh
pnpm check
```

## Project Structure

```text
src/
  app.html                    # HTML shell, fonts, and Devicon stylesheet
  components/
    sections/                 # Homepage and project page sections
    ui/                       # Header, footer, and shared UI pieces
  lib/
    assets/                   # Static assets such as the favicon
    types/sanity.d.ts         # TypeScript types for Sanity documents
  routes/
    +layout.svelte            # Root layout with header, footer, and theme watcher
    +page.svelte              # Homepage
    +page.ts                  # Homepage data loading from Sanity
    layout.css                # Global styles and design tokens
    projects/[slug]/          # Individual project detail pages
  utils/
    sanity.ts                 # Sanity client and image URL builder
```

Path aliases are configured in `vite.config.ts`:

- `$components` -> `src/components/`
- `$assets` -> `src/assets/`
- `$lib` -> `src/lib/`
- `$utils` -> `src/utils/`

## Content Management

Content is managed in Sanity and fetched at build/request time through the client defined in `src/utils/sanity.ts`. The current connection uses:

- Project ID: `ytompvz5`
- Dataset: `production`
- API version: `2026-03-01`

The homepage loads the following Sanity document types:

- `experience` - job title, company, and start/end dates
- `project` - title, slug, summary, cover image, gallery, tech stack, role, links, and featured flag
- `skills` - a list of skill names and Devicon icon classes
- `certifications` - certification names and URLs

Sanity image URLs are generated with `@sanity/image-url`. The TypeScript types in `src/lib/types/sanity.d.ts` are generated from the Sanity schema and should be kept in sync when the schema changes.

## Contact Form

The contact form in `src/components/sections/ContactSection.svelte` posts to the Web3Forms API. The endpoint and access key are currently hardcoded in that component, so update them there if the form owner or access key changes.

## Deployment

The project currently uses `@sveltejs/adapter-auto`, which adapts automatically to supported hosting platforms. If you settle on a specific target environment, replace it with the matching adapter from the [SvelteKit adapter docs](https://svelte.dev/docs/kit/adapters).

## License

This is a private personal project. All rights reserved.
