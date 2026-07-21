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
    "Arrange Edinburgh private hire, airport transfers, longer journeys and bespoke tours directly with Stevie Craig on WhatsApp.",
  path: "/",
});

const services = [
  {
    number: "01",
    title: "Private hire",
    text: "Pre-arranged journeys across Edinburgh and beyond, planned around where you need to be.",
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
            Edinburgh · Private hire · Bespoke tours
          </p>
          <h1>
            Edinburgh journeys,
            <br /> personally arranged.
          </h1>
          <p className="home-hero__intro">
            Private hire across Edinburgh and beyond, airport transfers and
            bespoke tours — arranged directly with Stevie.
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
            <p>Edinburgh based</p>
            <p>Journeys beyond the city</p>
            <p>Tours made around you</p>
          </div>
        </div>
      </section>

      <section className="intro-section page-width" id="services">
        <div className="intro-section__heading">
          <p className="eyebrow">A personal service</p>
          <h2>One driver. Every detail arranged with you.</h2>
        </div>
        <div className="intro-section__copy">
          <p className="lead">
            Speak to Stevie directly from the first message. Explain the
            journey you have in mind, and agree the practical details before
            you travel.
          </p>
          <p>
            Whether it is a journey within Edinburgh, a planned airport
            transfer, travel beyond the city or time set aside to explore,
            everything starts with a straightforward conversation.
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
          <h2>Travel that starts with your plans.</h2>
          <p>
            There is no online booking maze and no form to complete. Send the
            essentials on WhatsApp and arrange the journey directly with the
            person who will be driving.
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
              <h3>Agree the journey</h3>
              <p>Confirm the practical details directly with Stevie.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Travel as arranged</h3>
              <p>Meet at the agreed place and time for your journey.</p>
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
        title="Tell Stevie where you need to go."
        body="Send your pickup point, destination or tour idea, preferred date and passenger numbers. Stevie will organise the details with you on WhatsApp."
      />
    </>
  );
}
