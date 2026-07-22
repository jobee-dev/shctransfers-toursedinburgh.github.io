import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const routes = [
  [
    "/",
    "Private Hire and Airport Transfers from Edinburgh",
    "Private hire across",
    "Hi Stevie, I'd like to arrange a journey.",
  ],
  [
    "/private-hire",
    "Private Hire in Edinburgh and Beyond | SHC Transfers &amp; Tours",
    "Private hire in Edinburgh",
    "Hi Stevie, I'd like to arrange private hire.",
  ],
  [
    "/airport-transfers",
    "Edinburgh Airport Transfers | SHC Transfers &amp; Tours",
    "Edinburgh Airport pickups",
    "Hi Stevie, I'd like to arrange an airport transfer.",
  ],
  [
    "/tours",
    "Private Tours from Edinburgh | SHC Transfers &amp; Tours",
    "Private tours from Edinburgh",
    "Hi Stevie, I'd like to discuss a private tour.",
  ],
  [
    "/contact",
    "Contact &amp; Book | SHC Transfers &amp; Tours",
    "Contact Stevie",
    "Hi Stevie, I'd like to arrange a journey.",
  ],
];

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);

async function render(pathname) {
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

for (const [pathname, title, heading, bookingMessage] of routes) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.ok(html.includes(`<title>${title}</title>`));
    assert.match(html, new RegExp(heading, "i"));
    assert.match(html, /<meta name="robots" content="index, follow"/i);
    assert.doesNotMatch(html, /noindex|nofollow|preview\.steviecraig\.example/i);
    const canonicalPath = pathname === "/" ? "/" : `${pathname}/`;
    assert.match(
      html,
      new RegExp(
        `<link rel="canonical" href="https://shctransfers-toursedinburgh\\.com${canonicalPath}"`,
        "i",
      ),
    );
    assert.match(html, /Message me/i);
    assert.match(html, /up to 8 passengers/i);
    assert.match(html, /SHC Transfers &amp; Tours/i);
    assert.doesNotMatch(html, /Stevie Craig/i);
    assert.match(html, /data-primary-booking-cta/i);
    assert.match(html, /mobile-booking-bar/i);
    assert.match(html, /href="tel:\+447528862843"/i);
    assert.match(html, /shctransfers\.tours@gmail\.com/i);
    assert.doesNotMatch(html, /stevenjamescraig39@gmail\.com/i);
    assert.match(html, /href="https:\/\/wa\.me\/447528862843\?text=/i);
    const whatsappHref = html.match(
      /href="(https:\/\/wa\.me\/447528862843\?text=[^"]+)"/i,
    )?.[1];
    assert.ok(whatsappHref);
    assert.equal(
      new URL(
        whatsappHref.replaceAll("&amp;", "&").replaceAll("&#x27;", "'"),
      ).searchParams.get("text")?.startsWith(bookingMessage),
      true,
    );
    assert.doesNotMatch(html, /WhatsApp number pending/i);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  });
}

test("production robots allow crawling and advertise the sitemap", async () => {
  const response = await render("/robots.txt");
  assert.equal(response.status, 200);
  const text = await response.text();
  assert.match(text, /Allow: \/$/m);
  assert.doesNotMatch(text, /Disallow: \/$/m);
  assert.match(
    text,
    /Sitemap: https:\/\/shctransfers-toursedinburgh\.com\/sitemap\.xml/i,
  );
});

test("home advertises transport-focused WhatsApp and social preview metadata", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.match(
    html,
    /<meta property="og:title" content="Private Hire and Airport Transfers from Edinburgh"/i,
  );
  assert.match(
    html,
    /<meta name="twitter:title" content="Private Hire and Airport Transfers from Edinburgh"/i,
  );
  assert.match(
    html,
    /https:\/\/shctransfers-toursedinburgh\.com\/og-edinburgh-private-hire\.jpg/i,
  );
  assert.match(html, /<meta property="og:image:width" content="1200"/i);
  assert.match(html, /<meta property="og:image:height" content="630"/i);
});

test("llms.txt describes the public services without unsupported claims", async () => {
  const llms = await readFile(
    new URL("../public/llms.txt", import.meta.url),
    "utf8",
  );

  assert.match(llms, /^# SHC Transfers & Tours$/m);
  assert.match(llms, /https:\/\/shctransfers-toursedinburgh\.com\/private-hire\//i);
  assert.match(llms, /https:\/\/shctransfers-toursedinburgh\.com\/airport-transfers\//i);
  assert.match(llms, /https:\/\/shctransfers-toursedinburgh\.com\/tours\//i);
  assert.match(llms, /\+44 7528 862843/);
  assert.match(llms, /shctransfers\.tours@gmail\.com/i);
  assert.doesNotMatch(llms, /stevenjamescraig39@gmail\.com/i);
  assert.match(llms, /up to 8 passengers/i);
  assert.doesNotMatch(llms, /licensed|24\/7|guaranteed|fixed price/i);
});

test("sitemap contains every canonical public route", async () => {
  const response = await render("/sitemap.xml");
  assert.equal(response.status, 200);
  const xml = await response.text();

  for (const [pathname] of routes) {
    const canonicalPath = pathname === "/" ? "/" : `${pathname}/`;
    assert.match(
      xml,
      new RegExp(
        `https://shctransfers-toursedinburgh\\.com${canonicalPath}`,
        "i",
      ),
    );
  }
});

test("home includes truthful service structured data", async () => {
  const response = await render("/");
  const html = await response.text();
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /TaxiService/);
  assert.match(html, /FAQPage/);
  assert.match(html, /Edinburgh/);
  assert.match(html, /shctransfers\\u002etours@gmail\\u002ecom|shctransfers\.tours@gmail\.com/i);
  assert.doesNotMatch(html, /aggregateRating|priceRange|openingHours/i);
});
