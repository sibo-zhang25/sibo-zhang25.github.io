# William (Sibo) Zhang — Personal portfolio

A single-page React and TypeScript portfolio presenting William Zhang’s AI engineering, data science, professional experience, and research. It uses a dark cyberpunk design with cyan and magenta accents, runs locally with Vite, and deploys as a static site to GitHub Pages. No backend or runtime environment secrets are needed.

## Run locally

Use Node.js 22.12 or newer and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://127.0.0.1:5173`.

## Update the content

Edit `src/content.ts` for the name, introduction, biography, selected projects, background, email, social links, and page metadata. Content is based on the supplied résumé and linked public repositories. Preserve team attribution, coursework labels, and research submission status when updating descriptions.

- `work.projects` contains the three featured projects, including roles and technology tags.
- `work.supportingProjects` contains smaller coursework projects with descriptions, technology tags, and repository links.
- `about.experience`, `about.education`, and `about.research` contain background entries with an ID, title, organization, period, and description.
- `about.interests` supplies the applied AI and engineering skills listed below the biography.

Project URLs and the contact email are optional. Leave them empty or omit them until you have real destinations; unconfigured actions are hidden rather than rendered as broken links. Omit social entries or leave their URLs empty until ready. For external destinations use a complete `https://` URL. Add your email address without a `mailto:` prefix.

The visual styling lives in `src/styles.css` and `src/components/ProjectArtwork.css`. Hero and project diagrams use CSS and SVG. The artwork is illustrative and is not a screenshot of a production application. Space Grotesk and IBM Plex Mono are bundled from Fontsource packages and served locally, with system font fallbacks and no external font service.

The site uses one dark theme, including browser UI colors. The hero's central connected-node symbol represents the AI/data theme and uses decorative inline SVG. Motion is limited to a 300 ms hero entrance and short hover transitions. Reduced-motion preferences disable spatial animation; diagrams remain static and page content remains visible.

`sampleContent` is `false` for this portfolio. Each featured project's `artwork` selects one of the three CSS illustrations (`legal`, `property`, or `climate`). The title and description in `src/content.ts` are inserted into the HTML during development and production builds, so metadata has a single source of truth.

The original résumé PDF remains locally at `assets/resume_sibo_zhang.pdf` for reference and is excluded from Git and the production build. This exclusion applies only to that PDF; the demo video, poster, and caption files remain included. The page publishes the selected background and contact details rather than the full document or a phone number.

## Project demo video

Microburbs Facts uses `assets/demo.mp4` in place of its CSS artwork. The original 1080p recording includes audio and runs for 2:27. Its inline player uses browser-native controls, starts only after pressing Play, and preserves the full 16:9 frame. Selectable English captions are off by default to avoid overlapping the recording's burned-in subtitles; viewers can enable them through the player's caption menu (browser accessibility preferences may also enable them). An adjacent **Open video** link is always available, including when embedded playback fails.

The optional `demo` object on a featured project configures its video, poster, dimensions, displayed duration, and caption track. Asset references use Vite-compatible `new URL(..., import.meta.url)` expressions, so they resolve in local development and the production build. Omit `demo` to use the project's existing artwork.

To update this recording:

1. Replace `assets/demo.mp4`, or change the literal asset URL in the Microburbs Facts `demo` entry in `src/content.ts`.
2. Replace `assets/microburbs-facts-poster.jpg` with a representative frame from the new recording.
3. Update `assets/microburbs-facts.en.vtt` with synchronized WebVTT captions. Check speech, names, meaningful non-speech audio, and cue timing against the recording; update the caption language and label if needed.
4. Update `width`, `height`, and `duration` to match the recording. The current player is designed for 16:9 demos.

`preload="none"` avoids prefetching the full recording. Native media lazy loading additionally defers the poster in supporting browsers; other browsers may load the small poster immediately. Caption and poster generation use temporary local tooling, with no transcription service or added application dependency. The original MP4 is not re-encoded.

## Verify and build

```sh
npm run check
npm run build
npm run preview
```

`check` validates TypeScript. `build` also runs that check and emits the production site into `dist/`. `preview` serves that production output locally, normally at `http://127.0.0.1:4173`.

Review the page at phone, tablet, and desktop widths. Check section navigation, keyboard focus, reduced-motion preferences, and every configured project or contact link.

## Delivery

- Current live website: [sibo-zhang25.github.io](https://sibo-zhang25.github.io/).
- Intended custom URL: [williamzhang.dev](https://williamzhang.dev/) — pending domain registration, DNS configuration, and HTTPS validation.
- Public source repository: [sibo-zhang25/sibo-zhang25.github.io](https://github.com/sibo-zhang25/sibo-zhang25.github.io).
- Deployment workflow: `.github/workflows/deploy.yml`, triggered by pushes to `main` or a manual `workflow_dispatch` run.

The build job uses Node.js 22, installs locked dependencies with `npm ci`, and runs `npm run build`, which includes TypeScript checking. It uploads only `dist/` as the Pages artifact. A separate deploy job runs after the build succeeds and publishes that artifact through the `github-pages` environment. The site is hosted at the domain root, using Vite's root base path (`/`).

Push changes to `main` to update the website automatically. Check the [deployment workflow runs](https://github.com/sibo-zhang25/sibo-zhang25.github.io/actions/workflows/deploy.yml) for build or deployment failures and the published URL. Local development and production preview commands above remain available before pushing.

### Connect williamzhang.dev

The domain has not been purchased or connected yet. Complete these steps in order:

1. Register `williamzhang.dev` for one year through Cloudflare in the domain owner's own account, using Cloudflare's free DNS service. The owner completes checkout directly; confirm availability and the current registration terms there.
2. In the `sibo-zhang25` GitHub account's **Settings → Pages**, add `williamzhang.dev` for ownership verification. Add the exact TXT value generated by GitHub at `_github-pages-challenge-sibo-zhang25.williamzhang.dev` in Cloudflare DNS. Wait for it to resolve, click **Verify** in GitHub, and retain the TXT record permanently.
3. In the website repository's **Settings → Pages → Custom domain**, save `williamzhang.dev` **before** adding the routing records below.
4. In Cloudflare DNS, add these records with **DNS only** proxy status and a **300-second TTL**. Replace conflicting web-routing records at these hosts, preserving unrelated DNS records such as email configuration and the ownership TXT record.

   | Type | Name | Target |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `sibo-zhang25.github.io` |

   Point `www` directly to the GitHub hostname, without a URL scheme or path. Do not add wildcard records. DNS propagation can take up to 24 hours despite the configured TTL.
5. Wait for GitHub Pages' DNS check and certificate provisioning to finish. Confirm that `https://williamzhang.dev/` has a valid certificate, then enable **Enforce HTTPS**. Do not treat the connection as complete until HTTPS works and enforcement is enabled; the enforcement option may take up to 24 hours to become available.
6. Verify the final site and redirects: `https://www.williamzhang.dev/` and the old GitHub Pages address should reach `https://williamzhang.dev/`; HTTP requests should redirect to HTTPS. Check section navigation, fonts, contact/project links, the demo poster, video playback and seeking, the **Open video** fallback, and selectable English captions. Confirm that MP4 byte-range requests return `206 Partial Content` and that the original résumé PDF remains excluded from Git and `dist/`.

This site publishes through a custom GitHub Actions workflow, so GitHub ignores a `CNAME` file in the repository or build output; no such file is required. Keep Vite's root base path (`/`) and the existing build/deployment workflow unchanged. See GitHub's [custom-domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) and [ownership verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) documentation.

### Roll back the custom domain

Remove the apex A records and `www` CNAME record added for GitHub Pages, or restore their prior routing destinations if appropriate. Wait for the previous TTL to expire and verify DNS propagation before clearing the repository's **Custom domain** setting in GitHub Pages. Keep the ownership verification TXT record and leave GitHub Pages enabled. Confirm that [sibo-zhang25.github.io](https://sibo-zhang25.github.io/) serves the site again, including the video and captions. This order avoids leaving routing records pointing to GitHub after detaching the domain.

### Roll back a change

Inspect recent commits, revert the commit that introduced the problem, and push the revert to `main`:

```sh
git log --oneline
git revert <bad-commit>
git push origin main
```

The push starts a new build and deployment containing the reverted code. Manually running the workflow against `main` builds the current `main` code; it does not undo a bad change.
