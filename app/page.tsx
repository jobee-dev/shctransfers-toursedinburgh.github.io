import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta, WhatsAppLink } from "@/components/site-shell";
import {
  pageMetadata,
  siteConfig,
  structuredData,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Edinburgh Private Hire & Bespoke Tours",
  description:
    "Book Edinburgh private hire, airport transfers, longer journeys and bespoke tours with Stevie Craig by WhatsApp.",
  path: "/",
});

const services = [
  {
    number: "01",
    title: "Private hire",
    text: "Private hire for journeys across Edinburgh and longer trips beyond the city.",
    href: "/private-hire",
  },
  {
    number: "02",
    title: "Airport transfers",
    text: "Edinburgh Airport pickups and drop-offs with the details agreed directly before you travel.",
    href: "/airport-transfers",
  },
  {
    number: "03",
    title: "Bespoke tours",
    text: "A day shaped around your interests, your pace and the places you would like to see.",
    href: "/tours",
  },
];

const faqs = [
  {
    question: "How do I book a journey?",
    answer:
      "Send Stevie a WhatsApp message with your pickup point, destination, preferred date and time, and number of passengers. The details can then be agreed directly with you.",
  },
  {
    question: "Can I arrange travel beyond Edinburgh?",
    answer:
      "Yes. The service is based in Edinburgh and longer journeys beyond the city can be discussed and arranged in advance.",
  },
  {
    question: "Are tours based on a fixed itinerary?",
    answer:
      "No fixed itinerary is advertised. Bespoke tours are discussed around the places, interests, pace and time that suit you.",
  },
  {
    question: "Can I arrange an Edinburgh Airport transfer?",
    answer:
      "Yes. Share whether you need a pickup or drop-off, along with your travel date, time, flight details and passenger numbers.",
  },
];

export default function Home() {
  const schema = structuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <section className="home-hero">
        <img
          className="home-hero__image"
          src="/images/edinburgh-skyline.webp"
          alt="Edinburgh skyline with the Balmoral clock tower and Edinburgh Castle"
          width="2000"
          height="1328"
          fetchPriority="high"
        />
        <div className="home-hero__shade" />
        <div className="home-hero__content page-width">
          <p className="eyebrow eyebrow--gold">
            Edinburgh · Airport transfers · Tours
          </p>
          <h1>
            Private hire across
            <br /> Edinburgh and beyond.
          </h1>
          <p className="home-hero__intro">
            Local journeys, Edinburgh Airport transfers, longer-distance
            travel and bespoke tours. Message Stevie on WhatsApp to book.
          </p>
          <div className="hero-actions">
            <WhatsAppLink />
            <Link href="#services" className="text-link text-link--light">
              Explore services <span aria-hidden="true">↓</span>
            </Link>
          </div>
          {!siteConfig.whatsappReady && (
            <p className="pending-note pending-note--light">
              <span aria-hidden="true" /> WhatsApp number pending
            </p>
          )}
        </div>
        <div className="home-hero__facts" aria-label="Service summary">
          <div className="page-width home-hero__facts-inner">
            <p>Edinburgh private hire</p>
            <p>Airport transfers</p>
            <p>Longer trips and tours</p>
          </div>
        </div>
      </section>

      <section className="intro-section page-width" id="services">
        <div className="intro-section__heading">
          <p className="eyebrow">Private hire services</p>
          <h2>Local journeys, airport runs and longer trips.</h2>
        </div>
        <div className="intro-section__copy">
          <p className="lead">
            Message Stevie directly to check availability, get a quote and
            book your journey.
          </p>
          <p>
            Send your pickup point, destination, preferred date and time, and
            passenger numbers on WhatsApp. Stevie will reply with the details.
          </p>
        </div>
      </section>

      <section className="service-index page-width" aria-label="Services">
        {services.map((service) => (
          <Link href={service.href} className="service-row" key={service.href}>
            <span className="service-row__number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <span className="service-row__arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </section>

      <section className="image-statement">
        <div className="image-statement__image">
          <img
            src="/images/edinburgh-street.webp"
            alt="A historic Edinburgh street with stone buildings"
            width="1600"
            height="1067"
            loading="lazy"
          />
        </div>
        <div className="image-statement__copy">
          <p className="eyebrow eyebrow--gold">Edinburgh and beyond</p>
          <h2>Tell Stevie where and when.</h2>
          <p>
            There is no form to complete. Send the pickup, destination, date,
            time and passenger numbers on WhatsApp to check availability.
          </p>
          <Link href="/private-hire" className="text-link text-link--light">
            About private hire <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="process page-width">
        <div className="process__heading">
          <p className="eyebrow">How it works</p>
          <h2>Three simple steps.</h2>
        </div>
        <ol className="process__steps">
          <li>
            <span>01</span>
            <div>
              <h3>Send the details</h3>
              <p>Share your pickup, destination or tour idea, date and time.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Check availability</h3>
              <p>Stevie will reply with availability and the journey details.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Confirm the booking</h3>
              <p>Confirm the pickup place and time, then you are ready to go.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="faq-section page-width">
        <div className="faq-section__heading">
          <p className="eyebrow">Useful to know</p>
          <h2>Common questions.</h2>
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

      <FinalCta
        title="Ready to book?"
        body="Send your pickup point, destination or tour idea, preferred date and passenger numbers. Stevie will reply on WhatsApp."
      />
    </>
  );
}
