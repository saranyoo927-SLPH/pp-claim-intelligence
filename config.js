/*
 * PP Claim Intelligence — GitHub Pages configuration
 * --------------------------------------------------
 * 1) Create a Google Cloud OAuth 2.0 Client ID (Web application).
 * 2) Enable Google Sheets API.
 * 3) Add your GitHub Pages URL to Authorized JavaScript origins:
 *      https://YOUR_GITHUB_USERNAME.github.io
 *    and, if using a custom domain, add that origin too.
 * 4) Put the Client ID below.
 *
 * Sheet IDs are identifiers, not passwords. Actual access is enforced by
 * the Google account that signs in and the sharing permissions of the sheets.
 */
window.PP_GITHUB_CONFIG = {
  GOOGLE_CLIENT_ID: "1038652470102-kd6fqbndv45ir5sb7tm5gjmvc1bn0qt5.apps.googleusercontent.com",

  SERVICE_SHEET_ID: "1NdQ_f-oTWEeYgf0ijSEdEizrML_pqIMFXmN8HIa_7pQ",
  STATEMENT_SHEET_ID: "1Psmp2tKYDDMIjIZy01kn89u7FN0sn-SRHGcQxjCjKRY"
};
