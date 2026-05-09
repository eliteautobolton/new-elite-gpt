"use client";

import Link from "next/link";
import GoogleReviews from "../components/GoogleReviews";
import GlossEffects from "../components/GlossEffects";
import { ArrowLeft, ArrowRight, Check, MapPin } from "lucide-react";

export default function LocationPage() {
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

          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/75 backdrop-blur">
              <MapPin className="h-4 w-4 text-[#ffd84d]" />
              5 Thornton Street, Bolton, BL2 2BU
            </div>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Car Detailing Manchester
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              Premium car detailing for customers in Manchester and surrounding areas. Choose a custom detail, machine polish, ceramic protection or regular maintenance plan with Elite Auto Detailing.
            </p>

            <Link href="/build-your-detail" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd84d] px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-[#ffe276]">
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Full valets and interior deep cleans",
            "Machine polishing and paint enhancement",
            "Ceramic coatings and protection options",
            "Maintenance plans for regular customers",
            "WhatsApp booking and quick enquiries",
            "Based in Bolton with local customers nearby",
          ].map((item) => (
            <div key={item} className="soft-shimmer rounded-[2rem] border border-white/10 bg-white/[0.055] p-6">
              <Check className="mb-5 h-6 w-6 text-[#ffd84d]" />
              <p className="font-semibold">{item}</p>
            </div>
          ))}
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
