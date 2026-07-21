import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta, PageHero } from "@/components/site-shell";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Edinburgh Airport Transfers",
  description:
    "Arrange an Edinburgh Airport pickup or drop-off directly with Stevie Craig, with your journey details agreed in advance.",
  path: "/airport-transfers",
});

export default function AirportTransfersPage() {
  return (
    <>
      <PageHero
        eyebrow="Edinburgh Airport transfers"
        title={<>A clearer start or finish to your journey.</>}
        intro="Arrange an Edinburgh Airport pickup or drop-off in advance, with your route, timing and flight details agreed directly."
        image="/images/edinburgh-skyline.webp"
        imageAlt="Edinburgh skyline seen across the city"
        kind="airport"
        imagePosition="62% center"
      />

      <section className="editorial-section page-width">
        <div className="editorial-section__aside">
          <p className="eyebrow">Before you travel</p>
          <p className="section-number">02</p>
        </div>
        <div className="editorial-section__content">
          <h2>Airport details agreed before the day.</h2>
          <div className="two-column-copy">
            <p className="lead">
              Share whether you need an airport pickup or drop-off, along with
              the date, time and address at the other end of the journey.
            </p>
            <p>
              For an arrival, include the flight number and scheduled landing
              time. Pickup details can then be confirmed directly with Stevie
              rather than left unclear on the day.
            </p>
          </div>
        </div>
      </section>

      <section className="timeline-section page-width">
        <div>
          <p className="eyebrow">Your message</p>
          <h2>Include the essentials.</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <p>Pickup or drop-off</p>
          </li>
          <li>
            <span>02</span>
            <p>Date and preferred time</p>
          </li>
          <li>
            <span>03</span>
            <p>Flight number for arrivals</p>
          </li>
          <li>
            <span>04</span>
            <p>Passenger and luggage details</p>
          </li>
        </ol>
      </section>

      <section className="related-link page-width">
        <p>Need a journey elsewhere in Edinburgh?</p>
        <Link href="/private-hire">
          See private hire <span aria-hidden="true">→</span>
        </Link>
      </section>

      <FinalCta
        eyebrow="Arrange an airport transfer"
        title="Send the flight and journey details."
        body="Tell Stevie whether you need a pickup or drop-off, then include your date, time, flight number, address and passenger numbers."
        kind="airport"
      />
    </>
  );
}
