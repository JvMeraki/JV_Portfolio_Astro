<table>
  <tr>
    <td valign="middle">
      <h1>🚀 Javi Martínez <a href="https://jv-portfolio-astro.vercel.app/en">Portfolio</a></h1>
      <p>
        Welcome to my personal portfolio, built with <a href="https://astro.build">Astro</a>, <a href="https://svelte.dev">Svelte</a>, and <a href="https://tailwindcss.com">TailwindCSS</a>!
        Showcasing my projects, skills, and experience as a web developer.
      </p>
    </td>
    <td valign="middle" width="100">
      <img src="public/profile-pic.webp" alt="Profile" width="70" style="border-radius:50%;margin-left:20px;">
    </td>
  </tr>
</table>

---

## ✨ Features

- **Multi-language**: Español, English, Français, Italiano, Português, 한국어
- **Modern stack**: Astro, Svelte, TailwindCSS
- **Responsive Design**: Looks great on all devices
- **Animated Dock Menu**: Svelte-powered social links
- **Smooth Navigation**: Scrollspy, animated nav, and section highlights
- **Technologies Carousel**: Animated, interactive tech showcase
- **Accessible & Fast**: Optimized for performance and accessibility

---

## 📁 Project Structure

```
/
├── public/                # Static assets (images, flags, SVGs)
├── src/
│   ├── assets/            # Project-specific assets
│   ├── components/        # Astro & Svelte UI components
│   ├── data/              # Shared content, localized content and loaders
│   ├── i18n/              # Locale registry, utilities and UI translations
│   ├── layouts/           # Page layouts
│   ├── lib/               # Utility functions
│   ├── pages/             # Astro pages (including dynamic routes. [lang])
│   └── styles/            # Global and component CSS
├── astro.config.mjs       # Astro configuration
├── tailwind.config.ts     # TailwindCSS configuration
├── svelte.config.js       # Svelte integration
└── package.json
```

---

## 🛠️ Getting Started

1. **Install dependencies**

   ```sh
   pnpm install
   ```

2. **Start the development server**

   ```sh
   pnpm dev
   ```

   Visit [localhost:4321](http://localhost:4321) in your browser.

3. **Build for production**

   ```sh
   pnpm build
   ```

4. **Preview the build**
   ```sh
   pnpm preview
   ```

---

## 🌐 Internationalization (i18n)

This portfolio supports multiple languages.  
Change the language using the picker in the navigation bar.

Locales are registered in `src/i18n/locales.ts`, which is the source used by
the route generator and language picker. UI labels live in one JSON dictionary
per language under `src/i18n/locales/`; `ui.ts` provides the typed loader and checks
that every locale contains the same keys.

Portfolio content follows a different model: shared project metadata lives in
`src/data/projects/common.json`, while translated titles, descriptions and URLs
live in one JSON file per language under `src/data/projects/`. The loader checks
that every language contains the same project IDs and valid technologies before
the site is built.

About content follows the same per-language structure under `src/data/about/`.
Its loader validates the required sections before rendering them.

Experience and education use a shared manifest plus one translated JSON file
per language under `src/data/experience/` and `src/data/education/`. Stable IDs
keep the entries aligned even when a translation changes.

To add a project, add its technical metadata to `common.json`, add the same ID
to every locale file, then run `pnpm check` and `pnpm build`.

---

## 📦 Tech Stack

- [**Astro**](https://astro.build/) – Static site generator
- [**Svelte**](https://svelte.dev/) – Interactive components
- [**TailwindCSS**](https://tailwindcss.com/) – Utility-first CSS
- [**TypeScript**](https://www.typescriptlang.org/) – Type safety
- [**Vercel**](https://vercel.com/) – Deployment

---

## 📸 Screenshots

<p align="center">
  <img src="public/screenshots/home.png" alt="Home" width="600" style="margin:10px;">
</p>
<p align="center">
  <img src="public/screenshots/techs.png" alt="Technologies" width="600" style="margin:10px;">
</p>
<p align="center">
  <img src="public/screenshots/projects.png" alt="Projects" width="600" style="margin:10px;">
</p>
<p align="center">
  <img src="public/screenshots/movil.png" alt="Movil" width="350" style="margin:10px;">
</p>

---

## 🤝 Connect

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="22" style="vertical-align:middle;margin-right:6px;"> [LinkedIn](https://www.linkedin.com/in/brayanjmartinezp/)
- <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="22" style="vertical-align:middle;margin-right:6px;"> [Instagram](https://www.instagram.com/jv_fearnot)

---

> _Created by Brayan Javier Martínez Pinzón_  
> _Built with Astro, Svelte, and TailwindCSS_
