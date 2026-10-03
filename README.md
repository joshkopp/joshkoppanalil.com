# Josh Koppanalil — Personal Website

## Preview locally
Open `index.html` in a browser.

## Edit before publishing
- Update the project cards and experience descriptions to reflect what you want public.
- Replace `hello@joshkoppanalil.com` with an email address you are comfortable publishing, or remove the email button.
- Add links to public GitHub repositories or project demos when ready.

## Publish with GitHub Pages
1. Create a GitHub repository named `joshkoppanalil.com` (or another name).
2. Upload `index.html` to the repository root and commit.
3. In the repository, open Settings → Pages.
4. Under Build and deployment, choose Deploy from a branch, select `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to publish the site.

## Connect GoDaddy domain
In GitHub repository Settings → Pages, enter `joshkoppanalil.com` as the custom domain and save. GitHub will show the DNS records it expects. In GoDaddy Domain Portfolio → your domain → DNS, add the exact records shown by GitHub. Commonly, the apex domain uses four A records pointing to GitHub Pages and `www` uses a CNAME to `<your-github-username>.github.io`; use GitHub's current instructions rather than guessing. Keep existing email-related MX/TXT records if you use domain email. Once DNS verifies, enable Enforce HTTPS in GitHub Pages.
