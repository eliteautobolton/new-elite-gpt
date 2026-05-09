"use client";

import { Mail, Sparkles } from "lucide-react";
import { useState } from "react";

export default function NewsletterSignup() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data?.message || "Could not join the list.");
        return;
      }

      setStatus("success");
      setMessage("You’re on the Elite list. Watch out for offers and cancellation slots.");
      setFirstName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Could not connect. Please try again.");
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="premium-reflection soft-shimmer rounded-[2rem] border border-[#ffd84d]/35 bg-white/[0.07] p-6 shadow-2xl shadow-yellow-950/20 backdrop-blur-xl md:p-10">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffd84d] text-black">
              <Mail className="h-6 w-6" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#58a6ff]">
              Elite List
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Offers, cancellations and priority slots.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-white/58">
              Join the Elite Auto Detailing mailing list for seasonal offers,
              last-minute spaces, detailing tips and maintenance reminders.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
            <div className="grid gap-4">
              <label className="space-y-2">
                <span className="text-sm text-white/60">First name</span>
                <input
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="Brandon"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 outline-none ring-[#58a6ff] transition focus:ring-2"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm text-white/60">Email address</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 outline-none ring-[#58a6ff] transition focus:ring-2"
                />
              </label>

              <button
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ffd84d] px-6 py-4 text-sm font-bold text-black transition hover:scale-[1.01] hover:bg-[#ffe276] disabled:opacity-60"
              >
                <Sparkles className="h-5 w-5" />
                {status === "loading" ? "Joining..." : "Join the Elite List"}
              </button>

              {message && (
                <p
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    status === "success"
                      ? "bg-[#25D366]/15 text-[#8df5b0]"
                      : "bg-red-500/15 text-red-200"
                  }`}
                >
                  {message}
                </p>
              )}

              <p className="text-xs leading-5 text-white/38">
                No spam. Just Elite Auto Detailing updates, offers and priority
                booking access. You can unsubscribe at any time.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
