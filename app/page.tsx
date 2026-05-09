"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <section className="relative min-h-screen border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,132,255,0.34),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,216,77,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_45%)]" />

        <header className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Elite Auto Detailing logo"
              className="h-14 w-14 rounded-2xl object-contain"
            />
            <div>
              <p className="text-lg font-semibold tracking-tight">
                Elite Auto Detailing
              </p>
              <p className="text-xs text-white/55">Clean. Polish. Protect.</p>
            </div>
          </Link>

          <a
            href="tel:07988770864"
            className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/15 md:flex"
          >
            Call 07988770864
          </a>
        </header>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-12 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:pb-24 md:pt-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/75 backdrop-blur">
              <MapPin className="h-4 w-4 text-[#ffd84d]" />
              5 Thornton Street, Bolton, BL2 2BU
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
              Premium car care, made simple.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              Choose a monthly maintenance plan to keep your car fresh all year,
              or build a custom detail with paint enhancement and protection.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/build-your-detail"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd84d] px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-[#ffe276]"
              >
                Build your detail
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/maintenance-program"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/15"
              >
                View maintenance
              </Link>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-white/55 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <Sparkles className="mb-3 h-5 w-5 text-[#ffd84d]" />
                Valeting
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <ShieldCheck className="mb-3 h-5 w-5 text-[#58a6ff]" />
                Ceramic protection
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <SlidersHorizontal className="mb-3 h-5 w-5 text-[#ffd84d]" />
                Paint correction
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href="/build-your-detail"
              className="group relative overflow-hidden rounded-[2rem] border border-[#ffd84d]/35 bg-white/[0.09] p-6 shadow-2xl shadow-yellow-950/20 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.12]"
            >
              <div className="absolute right-5 top-5 rounded-full bg-[#ffd84d] px-3 py-1 text-xs font-bold text-black">
                Most popular
              </div>

              <SlidersHorizontal className="mb-8 h-10 w-10 text-[#ffd84d]" />

              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#58a6ff]">
                Custom package
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Build Your Detail
              </h2>

              <p className="mt-4 min-h-[96px] leading-7 text-white/62">
                Pick your vehicle size, choose your clean, add machine polishing
                and protection, then book straight through WhatsApp.
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-white/45">
                  Best for one-off bookings
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ffd84d] text-black transition group-hover:scale-110">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </Link>

            <Link
              href="/maintenance-program"
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.065] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.1]"
            >
              <Calendar className="mb-8 h-10 w-10 text-[#58a6ff]" />

              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ffd84d]">
                Monthly care
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Maintenance Program
              </h2>

              <p className="mt-4 min-h-[96px] leading-7 text-white/62">
                Start with a Full Valet, then keep your car clean with 1 Mini
                Detail per month for £45 over 1 year.
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-white/45">
                  Best for regular customers
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition group-hover:scale-110 group-hover:bg-[#ffd84d]">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </Link>

            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6 md:col-span-2">
              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <p className="text-sm text-white/40">Address</p>
                  <p className="mt-2 font-medium">
                    5 Thornton Street, Bolton, BL2 2BU
                  </p>
                </div>
                <div>
                  <p className="text-sm text-white/40">Phone</p>
                  <a
                    href="tel:07988770864"
                    className="mt-2 block font-medium text-[#ffd84d]"
                  >
                    07988770864
                  </a>
                </div>
                <div>
                  <p className="text-sm text-white/40">Booking</p>
                  <p className="mt-2 font-medium">
                    WhatsApp or online enquiry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 text-center md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#58a6ff]">
            Elite Auto Detailing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Not sure what to choose?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/58">
            Use Build Your Detail for the easiest route. You can select the size
            of your vehicle, choose the service level and send everything over
            in one WhatsApp message.
          </p>

          <Link
            href="/build-your-detail"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd84d] px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-[#ffe276]"
          >
            Start building
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-5 py-10 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Elite Auto Detailing logo"
            className="h-10 w-10 rounded-xl object-contain"
          />
          <p>Elite Auto Detailing</p>
        </div>
        <p>5 Thornton Street, Bolton, BL2 2BU • 07988770864</p>
      </footer>
    </main>
  );
}
