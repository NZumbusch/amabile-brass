# Amabile Brass Website

Source code for the [Amabile Brass](https://amabilebrass.de) website. Lightweight single-page site built with Svelte 5, Vite, and Tailwind CSS.

## Development Setup

To run the project locally:

1. Install dependencies:

```bash
npm install
```

2. Start the development server:
11
```bash
npm run dev
```

## Managing Content

All text and concert listings are managed directly inside `src/App.svelte`.

- **Concerts:** Update the `upcomingConcerts` array at the top of the `<script>` block. Add a valid URL string to `ticketUrl` if tickets are available online, or set it to an empty string (`""`) if there is no ticket link.
- **Text & Localization:** Main site copy is stored in the `translations` object inside `src/App.svelte`. Modify the corresponding `de` and `en` properties to update German or English text.

## Deployment

The site is hosted on GitHub Pages. To build and deploy the latest version:

```bash
npm run deploy
```

This command executes the Vite build step and pushes the contents of the `dist/` directory to the `gh-pages` branch.

The custom domain (`amabilebrass.de`) is routed via the `public/CNAME` file. If the domain stops resolving after a deployment, verify that your DNS host's A-records still point to the official GitHub Pages IP addresses.
