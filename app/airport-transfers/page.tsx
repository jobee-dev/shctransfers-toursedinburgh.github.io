import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site-shell";
import {
  pageMetadata,
  serviceStructuredData,
  siteConfig,
} from "@/lib/site";

const pageTitle = "Edinburgh Airport Transfers";
const pageDescription =
  "Pre-book Edinburgh Airport transfers for up to 8 passengers. Arrange pickups or drop-offs across Edinburgh and beyond directly with Stevie by WhatsApp.";

export const metadata: Metadata = pageMetadata({
  title: "Edinburgh Airport Transfers | SHC Transfers & Tours",
  description: pageDescription,
  path: "/airport-transfers",
  absoluteTitle: true,
  shareTitle: "Edinburgh Airport Transfers for up to 8 Passengers",
  shareImagePath: "/og-edinburgh-airport-transfers.jpg",
  shareImageAlt:
    "Edinburgh Airport transfers for up to 8 passengers with SHC Transfers & Tours",
});

const faqs = [
  {
    question: "How do I book an Edinburgh Airport transfer?",
    answer:
      "Message Stevie on WhatsApp with your pickup and destination, travel date, preferred time, flight number, passenger total and luggage details. He’ll reply with availability and a quote.",
  },
  {
    question: "How many passengers can travel?",
    answer:
      "The vehicle can carry up to 8 passengers. Include the number of passengers and the amount of luggage when you enquire so the journey can be discussed properly.",
  },
  {
    question: "Where will I meet Stevie at Edinburgh Airport?",
    answer:
      "The exact meeting point and pickup details are agreed directly before you travel. Keep your phone available after landing in case the details need to be confirmed.",
  },
  {
    question: "Can I book a drop-off at Edinburgh Airport?",
    answer:
      "Yes. Send your pickup address, date, preferred pickup time, flight departure time, passenger total and luggage details.",
  },
  {
    question: "Is this a walk-up Edinburgh Airport taxi?",
    answer:
      "No. SHC Transfers & Tours provides pre-arranged private hire. Your journey must be discussed and booked in advance rather than requested from the airport taxi rank.",
  },
  {
    question: "Can I travel beyond Edinburgh?",
    answer:
      "Yes. Airport transfers within Edinburgh and longer journeys beyond the city can be discussed and arranged in advance.",
  },
];

export default function AirportTransfersPage() {
  const schema = serviceStructuredData({
    path: "/airport-transfers",
    name: pageTitle,
    description: pageDescription,
    serviceType: "Pre-booked Edinburgh Airport private hire transfers",
    faqs,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <nav className="breadcrumb page-width" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Edinburgh Airport transfers</span>
      </nav>

      <PageHero
        eyebrow="Pre-booked private hire"
        title={<>Edinburgh Airport transfers for up to 8 passengers.</>}
        intro="Arrange a private hire pickup or drop-off between Edinburgh Airport, the city and destinations beyond Edinburgh. Message Stevie directly for availability and a quote."
        image="/images/edinburgh-skyline.webp"
        imageAlt="Edinburgh skyline seen across the city"
        kind="airport"
        imagePosition="62% center"
      />

      <section className="editorial-section page-width">
        <div className="editorial-section__aside">
          <p className="eyebrow">Airport transfers</p>
        </div>
        <div className="editorial-section__content">
          <h2>A direct journey to or from Edinburgh Airport.</h2>
          <div className="two-column-copy">
            <p className="lead">
              Travel between Edinburgh Airport and your home, hotel, venue or
              onward destination in a vehicle carrying up to 8 passengers.
            </p>
            <p>
              Every transfer is arranged directly with Stevie before travel.
              Share the journey details on WhatsApp, then receive a reply with
              availability, a quote and the information needed for pickup.
            </p>
          </div>
        </div>
      </section>

      <section className="simple-points page-width">
        <h2>What the service covers.</h2>
        <ul>
          <li>Edinburgh Airport pickups</li>
          <li>Edinburgh Airport drop-offs</li>
          <li>Groups of up to 8 passengers</li>
          <li>Longer journeys beyond Edinburgh</li>
        </ul>
      </section>

      <section className="detail-list page-width">
        <div className="detail-list__intro">
          <p className="eyebrow">How to book</p>
          <h2>Three steps before you travel.</h2>
        </div>
        <dl>
          <div>
            <dt>1. Send your journey</dt>
            <dd>
              Message your pickup, destination, travel date, preferred time,
              flight number, passenger total and luggage details.
            </dd>
          </div>
          <div>
            <dt>2. Check availability</dt>
            <dd>
              Stevie will reply directly to discuss the journey, confirm
              availability and provide a quote.
            </dd>
          </div>
          <div>
            <dt>3. Agree the details</dt>
            <dd>
              Confirm the booking and keep the agreed pickup or drop-off
              information with you for the day of travel.
            </dd>
          </div>
        </dl>
      </section>

      <section className="editorial-section page-width airport-guidance">
        <div className="editorial-section__aside">
          <p className="eyebrow">Arrivals & departures</p>
        </div>
        <div className="editorial-section__content">
          <h2>Useful details for each direction.</h2>
          <div className="two-column-copy">
            <div>
              <h3>Arriving at Edinburgh Airport</h3>
              <p>
                Include the flight number and scheduled landing time when you
                enquire. Your exact meeting point will be agreed directly
                before travel, so keep your phone available after landing.
              </p>
            </div>
            <div>
              <h3>Travelling to Edinburgh Airport</h3>
              <p>
                Send the pickup address, flight departure time and when you
                would like to arrive at the airport. Mention every passenger
                and any larger or unusual luggage.
              </p>
            </div>
          </div>
          <p className="airport-guidance__note">
            Airport access arrangements can change. Check{" "}
            <a
              href="https://www.edinburghairport.com/transport-links/taxis"
              target="_blank"
              rel="noreferrer"
            >
              Edinburgh Airport’s current taxi and private-hire guidance
            </a>{" "}
            before your journey.
          </p>
        </div>
      </section>

      <section className="editorial-section page-width">
        <div className="editorial-section__aside">
          <p className="eyebrow">Edinburgh & beyond</p>
        </div>
        <div className="editorial-section__content">
          <h2>City addresses and longer onward journeys.</h2>
          <div className="two-column-copy">
            <p className="lead">
              Arrange airport travel to or from homes, hotels, venues and
              transport connections across Edinburgh.
            </p>
            <p>
              Need to continue beyond the city? Send the full destination when
              you enquire. Longer journeys can be discussed in advance, with
              the route and quote agreed directly before you book.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-section page-width">
        <div className="faq-section__heading">
          <p className="eyebrow">Before you book</p>
          <h2>Edinburgh Airport transfer questions.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="related-link page-width">
        <p>Ready to ask about your airport journey?</p>
        <Link href="/contact">
          Contact {siteConfig.shortName} <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
