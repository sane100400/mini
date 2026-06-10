# AGENTS.md

## Deployment

- This repository deploys through GitHub Pages, not Vercel, Netlify, or another hosting service.
- Production deploys are triggered by pushing to `main`.
- The GitHub Pages workflow is `.github/workflows/deploy.yml`.
- The live custom domain is `aiforsane.kr`; keep `public/CNAME` set to `aiforsane.kr`.
- Before pushing a deploy, run `pnpm build` and `pnpm check`.
- If deployment status needs verification, use GitHub Actions or `gh run list` / `gh run watch` for the Pages workflow.
