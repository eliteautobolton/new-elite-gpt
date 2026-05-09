"use client";

import Link from "next/link";
import GoogleReviews from "../components/GoogleReviews";
import GlossEffects from "../components/GlossEffects";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Wand2 } from "lucide-react";
import { useMemo, useState } from "react";

const questions = [
  {
    key: "condition",
    title: "What condition is the car in?",
    options: ["Pretty clean", "Average daily driver", "Dirty / stained", "Dog hair or mould"],
  },
  {
    key: "paint",
    title: "How does the paint look?",
    options: ["Glossy already", "A bit dull", "Swirls in the sun", "Heavily marked"],
  },
  {
    key: "protection",
    title: "How long do you want protection to last?",
    options: ["No protection", "Wax finish", "Around 1 year", "3 years or more"],
  },
];

export default function WhatsBestForMe() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const recommendation = useMemo(() => {
    const condition = answers.condition;
    const paint = answers.paint;
    const protection = answers.protection;

    let base = "Mini Detail";
    if (condition === "Average daily driver") base = "Full Valet";
    if (condition === "Dirty / stained" || condition === "Dog hair or mould") base = "Full Valet";

    let polish = "No Machine Polish";
    if (paint === "A bit dull") polish = "Stage 1 Gloss";
    if (paint === "Swirls in the sun") polish = "Stage 2 Correct";
    if (paint === "Heavily marked") polish = "Stage 3 Restore";

    let coating = "No Protection";
    if (protection === "Wax finish") coating = "Wax";
    if (protection === "Around 1 year") coating = "1 Year Ceramic";
    if (protection === "3 years or more") coating = "3 Year Ceramic";

    return { base, polish, coating };
  }, [answers]);

  const complete = questions.every((q) => answers[q.key]);

  const whatsappText = `Hi Elite Auto Detailing, I used the What’s Best For Me quiz.

Recommended:
Base package: ${recommendation.base}
Paint enhancement: ${recommendation.polish}
Protection: ${recommendation.coating}

My answers:
Condition: ${answers.condition || "Not answered"}
Paint: ${answers.paint || "Not answered"}
Protection: ${answers.protection || "Not answered"}

Can you confirm what you’d recommend and availability please?`;

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

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-20">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>

          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/75 backdrop-blur">
                Quick recommendation quiz
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
                Not sure what to choose?
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                Answer 3 quick questions and we’ll recommend a base package, polish level and protection option.
              </p>
            </div>

            <div className="gloss-card premium-reflection soft-shimmer rounded-[2rem] border border-[#ffd84d]/35 bg-white/[0.08] p-6 shadow-2xl shadow-yellow-950/20 backdrop-blur-xl">
              <Wand2 className="mb-5 h-10 w-10 text-[#ffd84d]" />
              <p className="text-sm text-white/45">Your recommendation</p>
              <h2 className="mt-2 text-3xl font-semibold">{complete ? "Ready" : "Answer the quiz"}</h2>
              <div className="mt-5 space-y-2 text-sm text-white/65">
                <p>Base: {recommendation.base}</p>
                <p>Paint: {recommendation.polish}</p>
                <p>Protection: {recommendation.coating}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-6">
          {questions.map((question, index) => (
            <div key={question.key} className="soft-shimmer rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ffd84d] font-bold text-black">
                  {index + 1}
                </div>
                <h2 className="text-2xl font-semibold">{question.title}</h2>
              </div>

              <div className="grid gap-3 md:grid-cols-4">
                {question.options.map((option) => {
                  const active = answers[question.key] === option;
                  return (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setAnswers((current) => ({ ...current, [question.key]: option }))}
                      className={`rounded-[1.5rem] border p-5 text-left transition hover:-translate-y-1 ${
                        active ? "border-[#ffd84d] bg-white/[0.12]" : "border-white/10 bg-black/25 hover:bg-white/[0.08]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold">{option}</span>
                        {active && <Check className="h-5 w-5 text-[#ffd84d]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#ffd84d]/35 bg-white/[0.08] p-6 md:p-8">
          <h2 className="text-3xl font-semibold">Your suggested package</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-black/25 p-5"><p className="text-sm text-white/40">Base</p><p className="mt-2 text-xl font-semibold text-[#ffd84d]">{recommendation.base}</p></div>
            <div className="rounded-2xl bg-black/25 p-5"><p className="text-sm text-white/40">Paint</p><p className="mt-2 text-xl font-semibold text-[#ffd84d]">{recommendation.polish}</p></div>
            <div className="rounded-2xl bg-black/25 p-5"><p className="text-sm text-white/40">Protection</p><p className="mt-2 text-xl font-semibold text-[#ffd84d]">{recommendation.coating}</p></div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={complete ? `https://wa.me/447988770864?text=${encodeURIComponent(whatsappText)}` : "#"}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${
                complete ? "bg-[#25D366] text-black hover:scale-[1.02]" : "pointer-events-none bg-white/10 text-white/45"
              }`}
            >
              <MessageCircle className="h-5 w-5" />
              Send to WhatsApp
            </a>

            <Link href="/build-your-detail" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/15">
              Build manually
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
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
