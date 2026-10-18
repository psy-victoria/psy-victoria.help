# Website launch audit

Checked: 8 October 2026 (Australia/Sydney). Live site: https://psy-victoria.help/.

Publication was explicitly skipped by the owner. All additions below are in the local upload package and are not yet live.

## Three verification passes

1. Live HTTP: all ten current HTML pages returned 200; HTTPS redirect confirmed; 125 linked targets returned 200 using GET; existing anchors checked. sitemap.xml was missing and missing URLs used the default GitHub 404.
2. Local source: 14 HTML files, 13 sitemap URLs and 497 local references passed structure and link checks. All 36 qualification cards and all 10 original review images remain available. Main text contrast checked.
3. Behavior: a simulated DOM test passed language permission, refusal, revocation, repeat visits, blocked storage, translation and mobile-menu behavior. This is not a browser render test. The browser helper failed with a sandbox setup error, so visual mobile QA and browser performance metrics remain unverified.

## Screenshot checklist

| Item | Result | Evidence / action |
| --- | --- | --- |
| Privacy policy | Added locally | privacy.html: operator, enquiries, hosting, storage, Cloudflare measurement and contact rights. |
| Terms and conditions | Added locally | terms.html: site use, adult online sessions, booking, payment arrangements, cancellation discussion and confidentiality. |
| Secrets off the frontend | Checked source | Static HTML/JS has no secret credentials or form backend. Cloudflare public beacon configuration is not a secret. |
| Force HTTPS | Verified live | HTTP request finished at https://psy-victoria.help/; HTTPS returned 200. |
| Cookie / storage controls | Added locally | Optional language storage now requires an Allow choice. Refusal and revocation remove the language key. Cloudflare RUM is disclosed separately. |
| Meta titles and descriptions | Checked and extended | Unique page titles, descriptions and canonical addresses; both RU and EN. 404 has noindex. |
| Social preview image | Improved locally | 1200x630 local JPEG; image dimensions and Twitter summary card metadata. |
| Favicon | Verified live | Existing SVG returned 200; connected to every page including 404. |
| Sitemap and robots | Added locally | 13 public URLs in sitemap.xml; robots.txt references it. Cloudflare may prefix its own robots content on publication. |
| Image alt text | Checked source | All image elements have alt. Informative images have bilingual descriptions; decorative banners have empty alt. |
| Image compression | Improved locally | 31 WebP display copies; 6.14 MB saved across those copies. Readable document and review originals remain linked. |
| Page load speed | HTTP timings checked; browser metrics unavailable | Existing 10 HTML GETs took 0.068-0.474 s in this audit. These are request times, not LCP or a mobile speed score. |
| Color contrast | Checked main text colors | Action blue / white: 5.84:1; muted / white: 5.60:1; navy / white: 12.91:1. Bright accent is used for focus and decoration. |
| Mobile friendly | Responsive source checked; visual QA pending | Mobile-first CSS, viewport, flexible layouts and controls. Browser helper failed to start; no visual mobile pass claimed. |
| Custom 404 | Added locally | 404.html with noindex, home link, translated text, root-relative asset/policy paths for nested missing URLs. |
| Broken links | Verified live and checked locally | 125 live link targets returned 200 using GET. HEAD requests are rejected by the live server and were not treated as broken links. 497 local references passed. |
| Form validation | Not applicable | There is no enquiry, payment or login form. Contact links open email or messengers. |
| Spam protection | Not applicable to site forms | No public form or server endpoint; no CAPTCHA or new data collection introduced. |
| Analytics | Existing live service disclosed | Cloudflare automatically injects Web Analytics. It is a hosting setting, not controlled by the language storage buttons. No additional tracker added. |
| One clear call to action | Preserved | Primary action invites the visitor to discuss a consultation; article pages link to contact information. |

## Hosting and policy follow-up

- Source security metadata includes CSP and a strict-origin-when-cross-origin referrer policy. HTTP response controls such as HSTS, frame-ancestors and Permissions-Policy require hosting configuration. No host settings were changed.
- Cloudflare RUM was found in the live HTML, together with its email decoding script. Privacy and storage pages describe this hosting behavior. If the owner wants measurement disabled, switch it off in Cloudflare rather than relying on a language preference banner.
- GitHub Pages serves the custom 404 after 404.html is uploaded. Check an arbitrary nested missing URL after publication.
- Fee, cancellation notice, refund details and session record retention were not supplied. The terms state that these are agreed directly before booking/payment; they contain no invented fixed fee, deadline or retention duration. The owner should ensure the published description matches actual practice.
- This checklist is a technical and content audit, not a certification of legal compliance.

## Sources

- [Cloudflare RUM privacy and data collection](https://developers.cloudflare.com/speed/observatory/rum-beacon/): performance metrics, automatic injection and lack of browser storage.
- [GitHub custom 404 guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site): static 404.html hosting behavior.
- [ICO storage and access guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/): storage controls are based on actual technology and purpose; applicability depends on jurisdiction.
