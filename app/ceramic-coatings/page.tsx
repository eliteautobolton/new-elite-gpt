"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Droplets,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const options = [
  {
    title: "Wax",
    lifespan: "Short-term protection",
    text: "A quick gloss and protection option. Great for a fresh finish, but not as durable as a ceramic coating.",
  },
  {
    title: "1 Year Ceramic",
    lifespan: "Most popular",
    text: "A strong entry-level ceramic coating for gloss, water behaviour and easier maintenance washing.",
  },
  {
    title: "3 Year Ceramic",
    lifespan: "Longer durability",
    text: "A better option for customers who want stronger protection and longer-lasting performance.",
  },
  {
    title: "5 Year Ceramic",
    lifespan: "Premium protection",
    text: "The top protection option for customers wanting maximum durability, gloss and long-term ease of cleaning.",
  },
];

const benefits = [
  "Adds longer-lasting paint protection",
  "Makes washing easier",
  "Improves gloss and slickness",
  "Creates hydrophobic water behaviour",
  "Helps dirt release more easily",
  "Protects after machine polishing",
];

export default function CeramicCoatings() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,132,255,0.34),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,216,77,0.18),transparent_30%)]" />

        <header className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Elite Auto Detailing logo" className="h-14 w-14 rounded-2xl object-contain" />
            <div>
              <p className="text-lg font-semibold tracking-tight">Elite Auto Detailing</p>
              <p className="text-xs text-white/55">Ceramic Coatings</p>
            </div>
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
                Protection • gloss • easier maintenance
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
                Ceramic coatings keep the finish protected for longer.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                A ceramic coating bonds to the paintwork to create a durable protective layer. It helps improve gloss, water behaviour and makes future washing much easier.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/build-your-detail" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd84d] px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-[#ffe276]">
                  Add ceramic protection
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:07988770864" className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-center text-sm font-semibold backdrop-blur transition hover:bg-white/15">
                  Call 07988770864
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ffd84d]/35 bg-white/[0.08] p-6 shadow-2xl shadow-yellow-950/20 backdrop-blur-xl">
              <Droplets className="mb-5 h-10 w-10 text-[#58a6ff]" />
              <p className="text-sm text-white/45">Why customers love it</p>
              <h2 className="mt-2 text-4xl font-bold">Water flies off. Dirt sticks less.</h2>
              <p className="mt-4 leading-7 text-white/62">
                Ceramic protection helps the car stay cleaner for longer and makes maintenance washes feel easier, especially after a proper polish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 md:grid-cols-4">
          {options.map((option) => (
            <article key={option.title} className={`relative rounded-[2rem] border p-6 ${option.title === "1 Year Ceramic" ? "border-[#ffd84d]/50 bg-white/[0.09]" : "border-white/10 bg-white/[0.055]"}`}>
              {option.title === "1 Year Ceramic" && (
                <div className="absolute right-5 top-5 rounded-full bg-[#ffd84d] px-3 py-1 text-xs font-bold text-black">
                  Most popular
                </div>
              )}
              <ShieldCheck className="mb-5 h-8 w-8 text-[#ffd84d]" />
              <h2 className="text-2xl font-semibold">{option.title}</h2>
              <p className="mt-2 text-sm font-semibold text-[#58a6ff]">{option.lifespan}</p>
              <p className="mt-4 leading-7 text-white/58">{option.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div>
            <Sparkles className="mb-5 h-9 w-9 text-[#ffd84d]" />
            <h2 className="text-3xl font-semibold">Benefits of ceramic coating</h2>
            <p className="mt-4 leading-7 text-white/58">
              Ceramic coatings are ideal after machine polishing because they help lock in the finish and make future washing easier.
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
          <ShieldCheck className="mx-auto mb-5 h-10 w-10 text-[#ffd84d]" />
          <h2 className="text-3xl font-semibold md:text-5xl">Best paired with machine polishing.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/58">
            For the best finish, ceramic coating should be applied after the paint has been cleaned, decontaminated and polished.
          </p>
          <Link href="/build-your-detail" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd84d] px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-[#ffe276]">
            Build your detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-5 py-10 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
        <p>Elite Auto Detailing</p>
        <p>5 Thornton Street, Bolton, BL2 2BU • 07988770864</p>
      </footer>
    </main>
  );
}
