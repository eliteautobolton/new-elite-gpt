"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Google Review",
    text: "Elite Auto Detailing reviews are shown through Google. Tap below to read the latest live reviews.",
  },
  {
    name: "Verified Customers",
    text: "See real customer feedback, ratings and photos directly on the Google Business Profile.",
  },
  {
    name: "Leave a Review",
    text: "Had your car detailed by us? Leaving a Google review helps a local Bolton business grow.",
  },
];

export default function GoogleReviews() {
  const placeId = "ChIJbdkbEMune0gRHKMSCnvMoRY";
  const reviewLink = `https://search.google.com/local/writereview?placeid=${placeId}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=Elite%20Auto%20Detailing%205%20Thornton%20Street%20Bolton&query_place_id=${placeId}`;

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 md:p-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ffd84d]">
              Google Reviews
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              See what customers say.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/58">
              Google reviews are linked directly from our Business Profile so customers can check the latest feedback before booking.
            </p>
          </div>

          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 fill-[#ffd84d] text-[#ffd84d]" />
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <p className="font-semibold">{review.name}</p>
              <p className="mt-3 text-sm leading-6 text-white/58">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#ffd84d] px-6 py-3 text-center text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-[#ffe276]"
          >
            View Google reviews
          </a>

          <a
            href={reviewLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
          >
            Leave a review
          </a>
        </div>
      </div>
    </section>
  );
}
