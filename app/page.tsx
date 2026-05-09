"use client";

import Link from "next/link";
import { Check, Phone, MapPin, Calendar, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

const packages = [
  { name: "Mini Valet", price: "From £20", tagline: "Fast refresh for cars that need bringing back up.", bestFor: "Maintenance clean", features: ["Exterior safe wash", "Wheels cleaned", "Interior vacuum", "Dashboard and plastics wiped down", "Windows cleaned", "Tyres dressed"] },
  { name: "Mini Detail", price: "From £60", tagline: "A stronger clean with more attention to finish and presentation.", bestFor: "Best value upgrade", popular: true, features: ["Everything in Mini Valet", "Deeper interior clean", "Paintwork cleaned and protected", "Door shuts cleaned", "Trim dressed", "Fresh, glossy finish"] },
  { name: "Full Valet", price: "From £120", tagline: "A proper reset back to a high standard inside and out.", bestFor: "Deep reset", features: ["Full exterior wash", "Full interior deep clean", "Seats wet vacced", "Carpets wet vacced", "Stain removal where possible", "Glass, trims and plastics finished"] },
  { name: "Machine Polish", price: "From £100", tagline: "Bring paintwork back to life and reduce visible swirls.", bestFor: "Gloss upgrade", features: ["Safe wash preparation", "Paint decontamination", "Single-stage machine polish", "Gloss enhancement", "Light swirl reduction", "Ideal before ceramic coating"] },
  { name: "Ceramic Coating", price: "From £50", tagline: "Longer-lasting protection with easier maintenance washing.", bestFor: "Protection", features: ["Paintwork preparation", "Ceramic coating application", "Hydrophobic finish", "Improved gloss", "Easier future cleaning", "Upgrade options available"] },
  { name: "Wet Vac Interior Add-on", price: "From £60", tagline: "For seats, carpets, stains, work cars and family cars.", bestFor: "Interior stains", features: ["Seat wet vac options", "Carpet extraction", "Stain improvement", "Odour improvement", "Ideal with Full Valet", "Photos recommended for quote"] },
  { name: "Dog Hair Removal", price: "Quoted on condition", tagline: "Heavy pet hair removed properly before the car is finished.", bestFor: "Pet hair", features: ["Pet hair removal", "Interior vacuum", "Seat and carpet attention", "Boot area clean-up", "Works well with Full Valet", "Quote after photos or inspection"] },
];

export default function Home() {
  const [selectedPackages, setSelectedPackages] = useState<string[]>(["Mini Detail"]);
  const [form, setForm] = useState({ name: "", phone: "", car: "", date: "", time: "", message: "" });
  const selectedSummary = useMemo(() => selectedPackages.length ? selectedPackages.join(", ") : "General Enquiry", [selectedPackages]);

  const togglePackage = (name: string) => setSelectedPackages((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  const selectAndScroll = (name: string) => {
    setSelectedPackages((current) => current.includes(name) ? current : [...current, name]);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingMessage = `NEW ELITE AUTO DETAILING BOOKING

Selected services:
${selectedPackages.length ? selectedPackages.map((item) => `- ${item}`).join("\n") : "- General enquiry only"}

Name: ${form.name}
Phone: ${form.phone}
Vehicle: ${form.car}
Preferred date: ${form.date}
Preferred time: ${form.time}

General enquiry / extra info:
${form.message}`;
    window.location.href = `mailto:eliteautodetailingbookings@gmail.com?subject=New Elite Auto Detailing Booking&body=${encodeURIComponent(bookingMessage)}`;
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,132,255,0.36),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,216,77,0.20),transparent_30%)]" />
        <header className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Elite Auto Detailing logo" className="h-14 w-14 rounded-2xl object-contain" />
            <div><p className="text-lg font-semibold tracking-tight">Elite Auto Detailing</p><p className="text-xs text-white/55">Clean. Polish. Protect.</p></div>
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-white/65 md:flex">
            <Link href="/maintenance-program" className="hover:text-white">Maintenance</Link>
            <Link href="/build-your-detail" className="hover:text-white">Build Your Detail</Link>
            <a href="tel:07988770864" className="rounded-full border border-white/15 bg-white/10 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/15">Call 07988770864</a>
          </nav>
        </header>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-24 md:pt-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/75 backdrop-blur"><MapPin className="h-4 w-4 text-[#ffd84d]" />5 Thornton Street, Bolton, BL2 2BU</div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">Pick your detailing package like you pick what to watch.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">A polished, Netflix-style package menu built to help customers compare, select multiple services, and book without messing about.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })} className="rounded-full bg-[#ffd84d] px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-[#ffe276]">View packages</button>
              <Link href="/build-your-detail" className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-center text-sm font-semibold backdrop-blur transition hover:bg-white/15">Build your detail</Link>
            </div>
          </div>

          <div className="grid gap-4">
            <Link href="/maintenance-program" className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl transition hover:-translate-y-1">
              <Calendar className="mb-5 h-8 w-8 text-[#ffd84d]" /><p className="text-sm text-white/50">New</p><h2 className="text-3xl font-semibold">Maintenance Program</h2><p className="mt-3 text-white/65">Start with a Full Valet, then unlock Mini Details at £45 per month for 1 year.</p>
            </Link>
            <Link href="/build-your-detail" className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl transition hover:-translate-y-1">
              <SlidersHorizontal className="mb-5 h-8 w-8 text-[#58a6ff]" /><p className="text-sm text-white/50">Interactive</p><h2 className="text-3xl font-semibold">Build Your Detail</h2><p className="mt-3 text-white/65">Choose make, model, size, base package, polish stage and protection, then book by WhatsApp.</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#58a6ff]">Packages</p><h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Compare. Select. Book.</h2></div>
          <p className="max-w-xl text-white/58">Select multiple services at once. Perfect for upselling full valet, polish and ceramic coating together.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((item) => {
            const selected = selectedPackages.includes(item.name);
            return (
              <article key={item.name} className={`relative overflow-hidden rounded-[2rem] border p-5 transition duration-300 hover:-translate-y-1 ${selected ? "border-[#ffd84d] bg-white/[0.12] shadow-2xl shadow-yellow-950/20" : item.popular ? "border-[#ffd84d]/40 bg-white/[0.09]" : "border-white/10 bg-white/[0.055]"}`}>
                {item.popular && <div className="absolute right-5 top-5 rounded-full bg-[#ffd84d] px-3 py-1 text-xs font-bold text-black">Popular</div>}
                <div className="pr-20"><p className="text-sm text-[#58a6ff]">{item.bestFor}</p><h3 className="mt-2 text-2xl font-semibold">{item.name}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-white/58">{item.tagline}</p></div>
                <div className="mt-5 border-t border-white/10 pt-5"><p className="text-3xl font-bold tracking-tight">{item.price}</p></div>
                <ul className="mt-5 space-y-3">{item.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-white/72"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ffd84d]" />{feature}</li>)}</ul>
                <div className="mt-6 grid gap-3"><button onClick={() => togglePackage(item.name)} className={`w-full rounded-2xl px-5 py-4 text-sm font-bold transition ${selected ? "bg-[#ffd84d] text-black hover:bg-[#ffe276]" : "bg-white text-black hover:bg-[#58a6ff]"}`}>{selected ? "Selected ✓" : "Add to booking"}</button><button onClick={() => selectAndScroll(item.name)} className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.1]">Add & go to form</button></div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="booking" className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#58a6ff]">Booking</p><h2 className="mt-3 text-4xl font-semibold tracking-tight">Your selected services</h2>
            <div className="mt-6 rounded-[2rem] border border-white/10 bg-black/25 p-5">
              {selectedPackages.length ? <div className="space-y-3">{selectedPackages.map((item) => <div key={item} className="flex items-center justify-between rounded-2xl bg-white/[0.06] px-4 py-3"><span className="font-medium">{item}</span><button onClick={() => togglePackage(item)} className="text-sm text-white/45 transition hover:text-white">Remove</button></div>)}</div> : <p className="text-white/55">No package selected yet. You can still send a general enquiry.</p>}
              <p className="mt-5 text-sm leading-6 text-white/55">Final quote may depend on vehicle size, condition, dog hair, staining, mould, or extra polishing required.</p>
            </div>
            <div className="mt-6 flex items-center gap-3 text-white/60"><Phone className="h-5 w-5 text-[#ffd84d]" /><span>07988770864</span></div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-[#080b13] p-5 shadow-2xl shadow-black/30 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2"><span className="text-sm text-white/60">Name</span><input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 outline-none ring-[#58a6ff] transition focus:ring-2" /></label>
              <label className="space-y-2"><span className="text-sm text-white/60">Phone</span><input name="phone" value={form.phone} onChange={handleChange} required className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 outline-none ring-[#58a6ff] transition focus:ring-2" /></label>
              <label className="space-y-2 md:col-span-2"><span className="text-sm text-white/60">Car / van details</span><input name="car" value={form.car} onChange={handleChange} placeholder="e.g. BMW 3 Series, Tesla Model Y, work van" className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 outline-none ring-[#58a6ff] transition focus:ring-2" /></label>
              <label className="space-y-2"><span className="text-sm text-white/60">Preferred date</span><input type="date" name="date" value={form.date} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 outline-none ring-[#58a6ff] transition focus:ring-2" /></label>
              <label className="space-y-2"><span className="text-sm text-white/60">Preferred time</span><input type="time" name="time" value={form.time} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 outline-none ring-[#58a6ff] transition focus:ring-2" /></label>
              <label className="space-y-2 md:col-span-2"><span className="text-sm text-white/60">General enquiry / extra info</span><textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about stains, dog hair, mould, scratches, ceramic coating, or anything else you want sorting." className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 outline-none ring-[#58a6ff] transition focus:ring-2" /></label>
            </div>
            <button className="mt-5 w-full rounded-2xl bg-[#ffd84d] px-6 py-4 text-sm font-bold text-black transition hover:scale-[1.01] hover:bg-[#ffe276]">Send booking request</button>
            <p className="mt-4 text-center text-xs text-white/40">5 Thornton Street, Bolton, BL2 2BU • 07988770864</p>
          </form>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-8"><Link href="/" className="flex items-center gap-3"><img src="/logo.png" alt="Elite Auto Detailing logo" className="h-10 w-10 rounded-xl object-contain" /><p>Elite Auto Detailing</p></Link><p>5 Thornton Street, Bolton, BL2 2BU • 07988770864</p></footer>
    </main>
  );
}
