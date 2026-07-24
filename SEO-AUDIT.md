# SEO audit: Edinburgh Airport transfers

Audit date: 24 July 2026

Primary target query: `edinburgh airport transfers`

Primary landing page:
`https://shctransfers-toursedinburgh.com/airport-transfers/`

## Executive assessment

The site had the foundations needed for crawling: HTTPS canonicals, a robots
file, an XML sitemap, responsive pages, descriptive URLs and internal links.
The main ranking constraint was not basic indexability. It was that the target
landing page contained roughly a hundred words, answered few booking questions
and gave Google little evidence that it was a strong result for Edinburgh
Airport transfer intent.

The page-one results reviewed during this audit consistently provide several
of the following: an exact-query heading, detailed arrival and departure
information, vehicle or passenger capacity, booking steps, pickup guidance,
route information, pricing or quote expectations, FAQs, reviews and strong
local business signals. SHC should compete with accurate first-hand information
rather than unsupported claims or a large set of near-duplicate location pages.

No SEO change can guarantee a first-page result. Rankings depend on Google,
local searcher context, competitors, site history, links, reviews and real
business prominence. The changes in this audit establish a substantially
stronger landing page; the off-site work below is still essential.

## Live search and hosting baseline

- The production home page and airport-transfer page return `200 OK`.
- HTTP, `www` and non-trailing-slash URLs redirect to the preferred HTTPS
  canonical URL.
- A nonexistent URL returns a genuine `404`.
- The public robots file allows crawling and references the production sitemap.
- A public search for the exact domain returned no indexed SHC pages during the
  audit. The domain also appeared in a newly registered `.com` list dated
  23 July 2026. This means the site has essentially no search history yet.
- The first-page results sampled for the primary query were established airport
  operators, local private-hire businesses and large travel marketplaces.

## Findings and changes

### Critical: the target page was too thin

Status: fixed

- Rebuilt the airport-transfer page around the exact search intent.
- Added a concise query-aligned title, description and H1.
- Added unique information about arrivals, departures, group capacity,
  luggage details, pre-booking, pickup details and longer onward journeys.
- Added a visible booking process and six truthful customer questions.
- Added a direct link to Edinburgh Airport's current official access guidance.

### High: weak entity and page-level structured data

Status: fixed

- Added page-specific `Service`, `WebPage`, `BreadcrumbList` and visible FAQ
  structured data to the airport-transfer page.
- Connected the service to the site's organization entity.
- Removed unsupported 24-hour opening-hours and price-range claims.
- Removed unsupported Glasgow and Central Belt coverage from the organization
  markup.

### High: search result presentation

Status: fixed

- Set the airport page title to
  `Edinburgh Airport Transfers | SHC Transfers & Tours`.
- Wrote a page-specific meta description focused on pre-booking, Edinburgh,
  passenger capacity and direct contact.
- Added a page-specific social preview.
- Kept one canonical URL with the site's established trailing-slash convention.

### Medium: internal relevance and crawl paths

Status: fixed

- Kept the airport page in desktop and mobile primary navigation.
- Kept contextual links from the home and private-hire pages.
- Added a visible breadcrumb and a contact link from the airport page.
- Updated `llms.txt` with the stronger service summary.

### Medium: inaccurate sitemap freshness signals

Status: fixed

- Replaced a build-time timestamp that made every page appear newly modified
  on every deployment.
- Removed `changefreq` and `priority`, which Google does not use.
- Set `lastmod` to the date of this significant content and structured-data
  update.

### Medium: invalid favicon output

Status: fixed

- Removed metadata that rendered a shortcut icon URL ending in
  `[object Object]`.
- Retained the valid SVG favicon and Apple touch icon.

### High: local trust and prominence are still incomplete

Status: owner action required

The website does not currently publish or connect to a verified Google Business
Profile, customer reviews, a full public business address or service-area
profile, licence details, an About page, or consistent third-party citations.
Only add details that are accurate and appropriate to publish.

Recommended actions:

1. Create or fully complete the Google Business Profile using the exact SHC
   name, phone number, website, categories, service area and hours.
2. Link the profile directly to the airport-transfer landing page if airport
   transfers are the primary service, otherwise use the home page.
3. Add genuine photos of the vehicle, luggage space, driver and airport
   journey experience to the profile and site.
4. Ask real customers for Google reviews after completed journeys. Do not buy
   reviews or gate negative feedback.
5. Publish accurate licence, operator, vehicle, payment, cancellation,
   accessibility and child-seat information once confirmed.
6. Earn relevant local citations and links from Edinburgh tourism, hotel,
   venue, wedding, golf and travel partners. Keep the business name, phone and
   URL consistent.
7. Avoid mass-produced neighbourhood or hotel pages unless each page contains
   genuinely distinct, useful first-hand information.

### Critical: measurement and indexing are not verifiable from source code

Status: owner action required

1. Verify the domain in Google Search Console.
2. Submit
   `https://shctransfers-toursedinburgh.com/sitemap.xml`.
3. Inspect the live airport-transfer URL and request indexing after deployment.
4. Check the Page indexing, HTTPS, Core Web Vitals and structured-data reports.
5. Record a baseline for impressions, clicks, click-through rate and average
   position for:
   - `edinburgh airport transfers`
   - `edinburgh airport transfer`
   - `airport transfers edinburgh`
   - `edinburgh airport private hire`
   - `8 seater edinburgh airport transfer`
6. Review performance after 28 days and again after 90 days. Improve the page
   from actual query and conversion data rather than adding repetitive copy.

Because no pages surfaced in the public index check, Search Console URL
Inspection and a manual indexing request for the airport-transfer URL should be
treated as the immediate next action after deployment.

## Validation criteria

- Every public route returns server-rendered HTML with a unique title.
- Every route is indexable and has a self-referencing HTTPS canonical.
- Robots allow crawling and name the production sitemap.
- The sitemap contains only canonical public routes.
- The airport page includes one clear H1, crawlable internal links, page-level
  schema and visible content matching that schema.
- Unsupported claims such as 24/7 availability, flight tracking, meet and
  greet, fixed pricing, licensing or guarantees are not published.
- Responsive images have explicit dimensions and the leading page image is
  prioritised for loading.
