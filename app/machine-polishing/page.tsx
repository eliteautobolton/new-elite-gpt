"use client";

import Link from "next/link";
import GoogleReviews from "../components/GoogleReviews";
import GlossEffects from "../components/GlossEffects";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  Sun,
  Wand2,
} from "lucide-react";

const stages = [
  {
    title: "Stage 1 Gloss",
    bestFor: "Light swirls, dull paint and extra shine",
    text: "A single-stage machine polish designed to improve gloss, clarity and light swirl marks. Ideal for cars that are already in decent condition but need bringing back to life.",
  },
  {
    title: "Stage 2 Correct",
    bestFor: "Visible swirls, wash marks and tired paint",
    text: "A stronger correction process for paintwork with more obvious defects. This is the sweet spot for most cars that have never been polished properly.",
  },
  {
    title: "Stage 3 Restore",
    bestFor: "Heavily marked or neglected paint",
    text: "A heavier restoration approach for paintwork with deeper swirls, oxidation, heavier defects or years of poor washing. This is a more involved detail.",
  },
];

const benefits = [
  "Restores gloss and depth",
  "Reduces visible swirl marks",
  "Improves paint clarity",
  "Makes colour look richer",
  "Prepares paint for ceramic coating",
  "Makes the car look newer and cleaner",
];

export default function MachinePolishing() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <GlossEffects />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,132,255,0.34),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,216,77,0.18),transparent_30%)]" />

        <header className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" aria-label="Elite Auto Detailing home">
            <img src="/logo.png" alt="Elite Auto Detailing logo" className="h-22 w-22 rounded-2xl object-contain" />
          </Link>

          <Link href="/build-your-detail" className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/15 md:flex">
            Build your detail
          </Link>
        </header>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-20">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>

          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/75 backdrop-blur">
                Gloss • swirl reduction • paint correction
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
                Machine polishing brings tired paint back to life.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                Over time, poor washing, road grime and daily use leave paintwork looking dull and covered in swirl marks. Machine polishing improves the finish by carefully refining the clear coat to restore gloss, depth and clarity.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/build-your-detail" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd84d] px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-[#ffe276]">
                  Add polishing to your detail
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:07988770864" className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-center text-sm font-semibold backdrop-blur transition hover:bg-white/15">
                  Call 07988770864
                </a>
              </div>
            </div>

            <div className="gloss-card premium-reflection soft-shimmer rounded-[2rem] border border-[#ffd84d]/35 bg-white/[0.08] p-6 shadow-2xl shadow-yellow-950/20 backdrop-blur-xl">
              <Sun className="mb-5 h-10 w-10 text-[#ffd84d]" />
              <p className="text-sm text-white/45">Why it matters</p>
              <h2 className="mt-2 text-4xl font-bold">Summer shows everything.</h2>
              <p className="mt-4 leading-7 text-white/62">
                Swirls and haze are most visible in direct sun. A machine polish helps the paint look sharper, glossier and more premium before protection is applied.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {stages.map((stage, index) => (
            <article key={stage.title} className="soft-shimmer rounded-[2rem] border border-white/10 bg-white/[0.055] p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ffd84d] font-bold text-black">
                {index + 1}
              </div>
              <h2 className="text-2xl font-semibold">{stage.title}</h2>
              <p className="mt-2 text-sm font-semibold text-[#58a6ff]">{stage.bestFor}</p>
              <p className="mt-4 leading-7 text-white/58">{stage.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div>
            <Wand2 className="mb-5 h-9 w-9 text-[#ffd84d]" />
            <h2 className="text-3xl font-semibold">Benefits of machine polishing</h2>
            <p className="mt-4 leading-7 text-white/58">
              This is one of the biggest visual upgrades you can give a car, especially before ceramic coating.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-2xl bg-black/25 p-4 text-white/75">
                <Check className="h-5 w-5 shrink-0 text-[#ffd84d]" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#ffd84d]/35 bg-white/[0.08] p-6 text-center md:p-10">
          <Sparkles className="mx-auto mb-5 h-10 w-10 text-[#ffd84d]" />
          <h2 className="text-3xl font-semibold md:text-5xl">Not sure which stage?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/58">
            Use Build Your Detail and select the stage that sounds closest. We can confirm the right option after seeing the paint in person or from photos.
          </p>
          <Link href="/build-your-detail" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd84d] px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-[#ffe276]">
            Build your detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <GoogleReviews />

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-5 py-10 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
        <p>Elite Auto Detailing</p>
        <p>5 Thornton Street, Bolton, BL2 2BU • 07988770864</p>
      </footer>
    </main>
  );
}
