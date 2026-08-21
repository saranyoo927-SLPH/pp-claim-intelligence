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
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDijJgPufTk9UJ36n_YtGFoZ6a1yF16xjU",
  authDomain: "pp-claim-intelligence-3eb40.firebaseapp.com",
  projectId: "pp-claim-intelligence-3eb40",
  storageBucket: "pp-claim-intelligence-3eb40.firebasestorage.app",
  messagingSenderId: "273830068500",
  appId: "1:273830068500:web:a2fb6d81c4c55701774201",
  measurementId: "G-3Z9ZH5WLLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
};
