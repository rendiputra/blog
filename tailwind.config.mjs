import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': 'rgb(203 213 225)', // slate-300
            '--tw-prose-headings': 'rgb(241 245 249)', // slate-100
            '--tw-prose-lead': 'rgb(148 163 184)', // slate-400
            '--tw-prose-links': 'rgb(56 189 248)', // sky-400
            '--tw-prose-bold': 'rgb(241 245 249)', // slate-100
            '--tw-prose-counters': 'rgb(148 163 184)', // slate-400
            '--tw-prose-bullets': 'rgb(71 85 105)', // slate-600
            '--tw-prose-hr': 'rgb(30 41 59)', // slate-800
            '--tw-prose-quotes': 'rgb(241 245 249)', // slate-100
            '--tw-prose-quote-borders': 'rgb(51 65 85)', // slate-700
            '--tw-prose-captions': 'rgb(148 163 184)', // slate-400
            '--tw-prose-code': 'rgb(56 189 248)', // sky-400
            '--tw-prose-pre-code': 'rgb(203 213 225)', // slate-300
            '--tw-prose-pre-bg': 'rgb(15 23 42)', // slate-950
            '--tw-prose-th-borders': 'rgb(51 65 85)', // slate-700
            '--tw-prose-td-borders': 'rgb(30 41 59)', // slate-800
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};
