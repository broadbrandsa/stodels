# Deployment

## GitHub

Push the repository to GitHub. Vercel will connect directly to the repo.

## Vercel Project Setup

| Setting              | Value                          |
| -------------------- | ------------------------------ |
| Import source        | GitHub repository              |
| Framework preset     | Next.js                        |
| Root directory       | `.` (project root)             |
| Build command        | `pnpm build`                   |
| Install command      | `pnpm install`                 |
| Output directory     | Leave blank (Next.js default)  |

No `vercel.json` is needed. The default Next.js configuration handles everything.

## Environment Variables

| Variable             | Purpose                        | Required |
| -------------------- | ------------------------------ | -------- |
| `GA_MEASUREMENT_ID`  | Google Analytics 4 measurement ID | Optional |

Add environment variables in **Vercel Dashboard > Project Settings > Environment Variables**.

## Auto-Deploy

Every push to the `main` branch triggers an automatic production deployment. Pull request branches get preview deployments.

## Manual Redeploy

If needed, trigger a redeploy from the Vercel dashboard or run:

```bash
vercel --prod
```
