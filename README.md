# Jareena Abdul — Portfolio

A single-page personal portfolio: projects, skills, education and contact details, with
project details opening in an accessible dialog.

Built with React 19, TanStack Start, TypeScript, Tailwind CSS v4 and shadcn/ui.

## Run it locally

You need Node.js 20 or newer (or Bun).

```sh
npm install
npm run dev
```

Open the address it prints (usually http://localhost:8080).

Other commands:

```sh
npm run build     # production build
npm run preview   # serve the production build
npm run lint      # code checks
npm run test      # tests
```

## Upload it to GitHub

1. On github.com, click **New repository**, give it a name (for example `portfolio`),
   leave it **Public**, and click **Create repository** without adding a README.
2. In the folder with this code, run:

```sh
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

3. Refresh the repository page on GitHub — your code will be there.

Prefer dragging and dropping? On the empty repository page, GitHub offers
"uploading an existing file". Add the files, then commit. The `.gitignore` file already
keeps `node_modules` and build output out of the repository.

## Where things live

| Path | What it holds |
| --- | --- |
| `src/routes/index.tsx` | Every section of the page (hero, projects, about, skills, education, contact) and the project dialogs |
| `src/routes/__root.tsx` | Page title and social-sharing metadata |
| `src/styles.css` | Colours, fonts, spacing — the design system used across the site |
| `src/assets/` | Images used on the page |
| `src/components/ui/` | Shared building blocks such as the button and dialog |

## Editing your details

Your name, email, phone and LinkedIn address are in `src/routes/index.tsx`. Search for
`LINKEDIN_URL`, `jareenaaug0802@gmail.com` or `+91` to find and change them.
