# PP Claim Intelligence v6.0 — GitHub Pages Edition

Static web app for **GitHub Pages** with direct, read-only Google Sheets access through **Google OAuth 2.0 + Google Sheets API**.

## Data sources

- Service Registry: `ข้อมูลส่งเบิก PP FS 69`
  - Sheet ID: `1NdQ_f-oTWEeYgf0ijSEdEizrML_pqIMFXmN8HIa_7pQ`
- Statement: `statement OP-UC 69`
  - Sheet ID: `1Psmp2tKYDDMIjIZy01kn89u7FN0sn-SRHGcQxjCjKRY`
- PP payment Source of Truth: **Statement column AI = PP**

## Why this architecture

GitHub Pages is static hosting. `google.script.run` only works inside an Apps Script-hosted HTML page, so this edition instead uses:

**GitHub Pages → Google OAuth → Google Sheets API (read-only) → Reconciliation Engine**

No patient data is committed to GitHub. The user must sign in with a Google account that already has permission to the source sheets.

## 1. Create a Google Cloud project

1. Open Google Cloud Console.
2. Create/select a project for PP Claim Intelligence.
3. Go to **APIs & Services → Library**.
4. Enable **Google Sheets API**.

## 2. Configure OAuth consent

For a Google Workspace hospital account, use **Internal** if your organization permits it.
Otherwise configure External/Test users and explicitly add authorized users.

Requested scope:

`https://www.googleapis.com/auth/spreadsheets.readonly`

The application only reads spreadsheets.

## 3. Create OAuth Client ID

1. **APIs & Services → Credentials**
2. Create Credentials → **OAuth client ID**
3. Application type: **Web application**
4. Add Authorized JavaScript origins.

For GitHub Pages:

`https://YOUR_USERNAME.github.io`

If the site is under a custom domain, add its origin, e.g.:

`https://ppclaim.examplehospital.go.th`

Do not add path names to Authorized JavaScript origins.

## 4. Configure the app

Edit `config.js`.

Replace:

`PUT_YOUR_GOOGLE_OAUTH_CLIENT_ID_HERE.apps.googleusercontent.com`

with your actual OAuth Client ID.

Do **not** place a client secret in GitHub. This application does not require one.

## 5. Publish with GitHub Pages

Create a GitHub repository and upload:

- `index.html`
- `config.js`
- `.nojekyll`

Then:

1. Repository → **Settings**
2. **Pages**
3. Source: Deploy from a branch
4. Branch: `main`
5. Folder: `/ (root)`
6. Save

Your site will be available at something similar to:

`https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`

## 6. Use

1. Open the GitHub Pages site.
2. Go to **แหล่งข้อมูล / ซิงก์**.
3. Click **เชื่อมบัญชี Google**.
4. Sign in with an account that has access to both sheets.
5. Click **ซิงก์ข้อมูลล่าสุด**.
6. The app reads service data and Statement directly.
7. Statement reimbursement is taken from **AI (PP)**.
8. Reconciliation / aggregate allocation / Fund Portfolio / Executive Alert run in the browser.

## Security

The GitHub repository must contain **no patient data** and **no OAuth client secret**.

A Google OAuth Client ID is a public browser identifier and can be stored in `config.js`.
Access to the actual Sheets is controlled by Google account permissions.

For hospital deployment:
- Prefer an organizational Google Workspace OAuth app.
- Restrict the source Sheets to authorized hospital accounts.
- Do not publish the Sheets to the web.
- Do not use “Anyone with the link” for patient-data Sheets.
- The current `admin/1234` client-side individual-menu login is still prototype-level. Replace it with RBAC in the v7 roadmap before multi-hospital production use.

## Performance

The Statement workbook is large. The GitHub edition:
- reads only columns `A:AP`,
- uses **AI (column 35)** for PP,
- loads rows in chunks,
- limits concurrent requests.

First sync may take longer than subsequent UI operations because reconciliation happens locally in the browser.

## Fallback

The existing local Excel upload controls remain available under the fallback section.

## Next roadmap

- v6.1 Exception Center
- v6.2 Confidence Score + Evidence Panel
- v6.3 Claim Health Score + Data Quality Score
- v6.4 Financial Funnel + monthly comparisons
- v7.0 Server-side RBAC + Audit Log
- v7.5 Multi-hospital
- v8.0 Region 7 Command Center
