# Agents — Blog Tech Project

## Available Agents

### `Explore` (Default)
Use for understanding project structure, finding files, or investigating patterns.

**Best for:**
- Finding where specific code lives
- Understanding directory structure
- Discovering patterns across multiple files

### `Review`
Use for code review, finding bugs, or quality assessment.

**Best for:**
- Pre-commit reviews
- Finding issues in new code
- Security or performance audit

### `Edit`
Use for targeted code changes when you know what needs to change.

**Best for:**
- Fixing specific bugs
- Adding similar changes to multiple places
- Quick refactoring

### `Write`
Use for creating new files or complete implementations.

**Best for:**
- New components
- New blog posts
- New pages or layouts

---

## When to Use Each Agent

| Task | Recommended Agent |
|------|-------------------|
| Understand project structure | `Explore` |
| Find a specific file | `Explore` |
| Review PR or new code | `Review` |
| Fix a bug | `Edit` or direct edit |
| Add a new component | `Write` |
| Create new blog post | `Write` |
| Refactor multiple files | Agent with specific scope |

---

## Project-Specific Guidelines

### Writing Blog Posts
When creating new content:
1. Follow the content collection schema in `CLAUDE.md`
2. Use proper MDX syntax with code fences for syntax highlighting
3. Add meaningful `tags` for categorization
4. For tutorials in a series, use `series` and `order` frontmatter

### Modifying Components
- Astro components live in `src/components/`
- Props should be typed with TypeScript interfaces
- Use Lucide icons from `@lucide/astro`
- Test responsive layouts on mobile viewport

### Adding New Routes
- Pages live in `src/pages/`
- Dynamic routes use `[slug].astro` syntax
- Content-driven routes use `getStaticPaths()` with content collections

### Theme/Dark Mode
- Dark mode uses Tailwind class strategy
- ThemeScript must remain inline to prevent FOUC
- Test both light and dark modes when modifying theme

---

## Agent Best Practices

1. **Read CLAUDE.md first** — It has the authoritative project context
2. **Use specific queries** — "Find all MDX files in tutorial folder" beats "find files"
3. **Review before applying** — Show diffs for review before large changes
4. **Respect content conventions** — Blog posts follow Indonesian language style
5. **Check existing patterns** — Copy styles from similar existing components
