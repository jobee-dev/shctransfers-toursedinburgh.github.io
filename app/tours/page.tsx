import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta, PageHero } from "@/components/site-shell";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Bespoke Tours from Edinburgh",
  description:
    "Discuss a bespoke Edinburgh or Scotland tour with Stevie Craig, shaped around your interests, timing and preferred pace.",
  path: "/tours",
});

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Bespoke tours from Edinburgh"
        title={<>See more, at a pace that suits you.</>}
        intro="Start with the places or interests you have in mind. Stevie can help shape a private tour around your available time and starting point."
        image="/images/edinburgh-landscape.webp"
        imageAlt="The Edinburgh skyline viewed from Arthur’s Seat at sunset"
        kind="tour"
        imagePosition="center 52%"
      />

      <section className="editorial-section page-width">
        <div className="editorial-section__aside">
          <p className="eyebrow">Made around you</p>
          <p className="section-number">03</p>
        </div>
        <div className="editorial-section__content">
          <h2>Not a fixed route. A day discussed with you.</h2>
          <div className="two-column-copy">
            <p className="lead">
              Bespoke tours begin with a conversation about what you would
              like to see and how you would like the day to feel.
            </p>
            <p>
              Share your interests, starting point and the time you have
              available. An itinerary can then be discussed without tying you
              to a generic advertised route.
            </p>
          </div>
        </div>
      </section>

      <section className="tour-notes">
        <div className="page-width tour-notes__inner">
          <div>
            <p className="eyebrow eyebrow--gold">Shape the day</p>
            <h2>Four useful starting points.</h2>
          </div>
          <ol>
            <li><span>01</span><p>The places or subjects that interest you</p></li>
            <li><span>02</span><p>Where you would like to begin and finish</p></li>
            <li><span>03</span><p>How much time you have available</p></li>
            <li><span>04</span><p>The pace you would prefer for the day</p></li>
          </ol>
        </div>
      </section>

      <section className="related-link page-width">
        <p>Looking for straightforward transport instead?</p>
        <Link href="/private-hire">
          See private hire <span aria-hidden="true">→</span>
        </Link>
      </section>

      <FinalCta
        eyebrow="Discuss a bespoke tour"
        title="Begin with the day you have in mind."
        body="Share your preferred date, starting point, interests and passenger numbers. Stevie can then discuss the possibilities directly with you."
        kind="tour"
      />
    </>
  );
}
