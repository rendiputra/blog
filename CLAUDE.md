# Blog Tech — Astro Indonesian Tech Blog

Static blog site for Indonesian-language technical articles and tutorials, built with Astro + Tailwind CSS + MDX.

## Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (localhost:4321) |
| `npm run build` | Build production static site |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |
| `npx astro check` | Type-check all Astro files |

## Architecture

```
src/
├── components/        # Astro components (reusable UI)
│   ├── Header.astro       # Nav + mobile menu
│   ├── SeriesNav.astro    # Tutorial series navigation
│   ├── TableOfContents.astro  # Auto-generated TOC
│   ├── ThemeToggle.astro  # Dark/light mode switch
│   └── ThemeScript.astro  # Dark mode FOUC prevention (inline)
├── content/           # Blog content (MDX)
│   ├── config.ts          # Zod schemas for collections
│   ├── artikel/           # Article posts
│   └── tutorial/          # Tutorial posts (supports series)
├── layouts/           # Page templates
│   ├── BaseLayout.astro   # HTML wrapper + global styles
│   └── PostLayout.astro  # Article/tutorial layout
└── pages/             # Routes
    ├── index.astro        # Homepage (latest posts)
    ├── artikel/          # /artikel/* routes
    └── tutorial/         # /tutorial/* routes
```

## Key Files

- `astro.config.mjs` — Site config (URL, integrations, Shiki theme)
- `tailwind.config.mjs` — Tailwind + typography plugin config
- `src/content/config.ts` — Content collection schemas (Zod)
- `src/layouts/PostLayout.astro` — Post rendering template
- `src/components/TableOfContents.astro` — Auto-generates TOC from headings

## Code Style

- **TypeScript**: Strict mode (`astro/tsconfigs/strict`)
- **Astro components**: `.astro` files with frontmatter + template
- **Imports**: Use `@/` alias for `src/` paths
- **Icons**: Lucide icons via `@lucide/astro`
- **Styling**: Tailwind utility classes, NOT inline `<style>` blocks (except for Tailwind's `@apply`)

## Content Collections

### Schema: artikel
```typescript
{
  title: string
  description: string
  pubDate: Date
  tags: string[]
  coverImage?: string
}
```

### Schema: tutorial
```typescript
{
  title: string
  description: string
  pubDate: Date
  tags: string[]
  series?: string    // Groups multi-part tutorials
  order?: number      // Position within series
}
```

### Writing a New Post

1. Create MDX file in `src/content/artikel/` or `src/content/tutorial/`
2. Filename = URL slug (e.g., `getting-started-typescript.mdx`)
3. Add required frontmatter (title, description, pubDate, tags)
4. For tutorials in a series: add `series: "Series Name"` and `order: 1`

## Gotchas

- **Dark mode FOUC**: `ThemeScript.astro` must be inline `<script>` in `<head>` — do NOT move to external file
- **Mobile menu**: Uses vanilla JS in `<script>` tag within `Header.astro`
- **Series navigation**: Only renders if post has `series` frontmatter defined
- **Build output**: Auto-deploys to GitHub Pages on push to `master` via `.github/workflows/deploy.yml`
- **Code blocks**: Use Shiki syntax highlighting (no extra config needed)

## Environment

No `.env` required. Static site has no server-side secrets.

## Testing

No test framework configured. Run `npm run astro check` to validate types.
