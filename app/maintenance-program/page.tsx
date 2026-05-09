"use client";

import Link from "next/link";
import GoogleReviews from "../components/GoogleReviews";
import GlossEffects from "../components/GlossEffects";
import { ArrowLeft, Check, CalendarClock, Sparkles, ShieldCheck } from "lucide-react";

export default function MaintenanceProgram() {
  const whatsappMessage = encodeURIComponent(
    `Hi Elite Auto Detailing, I’m interested in the Maintenance Program.

I understand it starts with a Full Valet, then Mini Details are available at £45 per month for 1 clean per month for 1 year.

Can you send me the details please?`
  );

  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <GlossEffects />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,132,255,0.34),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,216,77,0.18),transparent_30%)]" />
        <header className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" aria-label="Elite Auto Detailing home"><img src="/logo.png" alt="Elite Auto Detailing logo" className="h-22 w-22 rounded-2xl object-contain" /></Link>
          <Link href="/" className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/15 md:flex">Back home</Link>
        </header>
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-20">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"><ArrowLeft className="h-4 w-4" />Back to packages</Link>
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/75 backdrop-blur">1 clean per month • 1 year program</p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">Keep your car clean all year for £45 per month.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">The Elite Auto Detailing Maintenance Program starts with a Full Valet to reset the car properly. After that, Mini Details are available at a discounted rate of £45 per month, with 1 clean per month for 1 year.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/447988770864?text=${whatsappMessage}`} className="rounded-full bg-[#ffd84d] px-6 py-3 text-center text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-[#ffe276]">Ask about maintenance</a><Link href="/build-your-detail" className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-center text-sm font-semibold backdrop-blur transition hover:bg-white/15">Build a custom detail</Link></div>
            </div>
            <div className="gloss-card premium-reflection soft-shimmer rounded-[2rem] border border-[#ffd84d]/35 bg-white/[0.08] p-6 shadow-2xl shadow-yellow-950/20 backdrop-blur-xl">
              <p className="text-sm text-white/50">Basic Maintenance Package</p><h2 className="mt-2 text-4xl font-bold text-[#ffd84d]">£45 / month</h2><p className="mt-2 text-white/60">After initial Full Valet</p>
              <div className="mt-6 grid gap-3">{["Starts with a Full Valet","Then 1 Mini Detail per month","Discounted rate fixed at £45 per month","Program lasts for 1 year","Basic package can be customised on request"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-black/25 p-4 text-white/75"><Check className="h-5 w-5 shrink-0 text-[#ffd84d]" />{item}</div>)}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><div className="grid gap-5 md:grid-cols-3">{[[Sparkles,"Step 1: Reset","We begin with a Full Valet so the car starts at the right standard before maintenance begins."],[CalendarClock,"Step 2: Monthly Clean","You get 1 Mini Detail per month for £45, keeping the car fresh instead of letting it get too far gone."],[ShieldCheck,"Step 3: Customise","Need extras like wet vac, dog hair, polish or protection? The basic package can be tailored on request."]].map(([Icon,title,text]: any) => <div key={title} className="soft-shimmer rounded-[2rem] border border-white/10 bg-white/[0.055] p-6"><Icon className="mb-5 h-8 w-8 text-[#ffd84d]" /><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-white/58">{text}</p></div>)}</div></section>
      <GoogleReviews />

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-5 py-10 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-8"><p>Elite Auto Detailing</p><p>5 Thornton Street, Bolton, BL2 2BU • 07988770864</p></footer>
    </main>
  );
}
