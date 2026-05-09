"use client";

import Link from "next/link";
import { ArrowLeft, Check, Car, MessageCircle, Search, Sparkles, Calculator, Wand2 } from "lucide-react";
import { useMemo, useState } from "react";


const vehicleSizes = ["Small", "Medium", "Large", "XL"];

const basePackages = [

  { name: "Mini Detail", description: "Strong maintenance-style clean with presentation and protection focus.", small: 60, medium: 70, large: 85, xl: 100 },
  { name: "Full Valet", description: "Deep interior and exterior reset, ideal for dirtier vehicles.", small: 120, medium: 135, large: 155, xl: 180 },
  { name: "Full Detail", description: "The full works approach for a car that needs proper attention.", small: 180, medium: 220, large: 260, xl: 320 },
];

const polishOptions = [
  { name: "No Machine Polish", description: "Skip machine polishing and focus on cleaning/protection.", small: 0, medium: 0, large: 0, xl: 0 },
  { name: "Stage 1 Gloss", description: "Gloss enhancement and light swirl improvement.", small: 100, medium: 120, large: 140, xl: 170 },
  { name: "Stage 2 Correct", description: "More correction for visible swirls and tired paint.", small: 180, medium: 220, large: 260, xl: 320 },
  { name: "Stage 3 Restore", description: "Heavy restoration approach for neglected or heavily marked paint.", small: 300, medium: 380, large: 460, xl: 560 },
];

const protectionOptions = [
  { name: "No Protection", description: "No wax or ceramic added.", small: 0, medium: 0, large: 0, xl: 0 },
  { name: "Wax", description: "Glossy short-term protection and a nice finish.", small: 35, medium: 45, large: 55, xl: 70 },
  { name: "1 Year Ceramic", description: "Entry ceramic protection for easier maintenance.", small: 80, medium: 100, large: 125, xl: 150 },
  { name: "3 Year Ceramic", description: "Longer ceramic protection with stronger durability.", small: 160, medium: 200, large: 250, xl: 300 },
  { name: "5 Year Ceramic", description: "Premium long-term ceramic protection package.", small: 260, medium: 320, large: 400, xl: 480 },
];

const conditionOptions = [
  { name: "Average condition", price: 0 },
  { name: "Heavy staining", price: 35 },
  { name: "Dog hair", price: 35 },
  { name: "Mould / biohazard", price: 60 },
];

function priceForSize(item: any, size?: string) {
  if (!size) return 0;
  const key = size.toLowerCase();
  return item[key] || 0;
}

export default function BuildYourDetail() {
  const [vehicleSize, setVehicleSize] = useState("");
  const [basePackage, setBasePackage] = useState("");
  const [polish, setPolish] = useState("");
  const [protection, setProtection] = useState("");
  const [conditions, setConditions] = useState<string[]>([]);


  const selectedBase = basePackages.find((item) => item.name === basePackage);
  const selectedPolish = polishOptions.find((item) => item.name === polish);
  const selectedProtection = protectionOptions.find((item) => item.name === protection);

  const conditionTotal = conditions.reduce((sum, name) => {
    const found = conditionOptions.find((item) => item.name === name);
    return sum + (found?.price || 0);
  }, 0);

  const total = useMemo(() => {
    if (!vehicleSize) return null;
    return (
      priceForSize(selectedBase, vehicleSize) +
      priceForSize(selectedPolish, vehicleSize) +
      priceForSize(selectedProtection, vehicleSize) +
      conditionTotal
    );
  }, [vehicleSize, selectedBase, selectedPolish, selectedProtection, conditionTotal]);

  const bookingReady = vehicleSize && basePackage && polish && protection;

  const toggleCondition = (name: string) => {
    setConditions((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name]
    );
  };

  const whatsappText = `Hi Elite Auto Detailing, I want to book a Build Your Detail package.

Vehicle size: ${vehicleSize || "Not selected"}

Base package: ${basePackage || "Not selected"}
Paint enhancement: ${polish || "Not selected"}
Protection: ${protection || "Not selected"}
Condition extras: ${conditions.length ? conditions.join(", ") : "None selected"}

Estimated guide price: ${total ? `£${total}` : "To confirm"}

Can you confirm the final price and availability please?`;

  const whatsappLink = `https://wa.me/447988770864?text=${encodeURIComponent(whatsappText)}`;

  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,132,255,0.34),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,216,77,0.18),transparent_30%)]" />
        <header className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Elite Auto Detailing logo" className="h-14 w-14 rounded-2xl object-contain" />
            <div><p className="text-lg font-semibold tracking-tight">Elite Auto Detailing</p><p className="text-xs text-white/55">Build Your Detail</p></div>
          </Link>
          <Link href="/" className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/15 md:flex">Back home</Link>
        </header>

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-20">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"><ArrowLeft className="h-4 w-4" />Back to packages</Link>
          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/75 backdrop-blur">No API needed • built-in vehicle database</p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">Build the exact detail your car needs.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">Choose your car from the database, pick a base clean, add paint enhancement, choose protection, then send everything straight to WhatsApp.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">
              <Car className="mb-5 h-9 w-9 text-[#ffd84d]" />
              <p className="text-sm text-white/45">Live estimate</p>
              <h2 className="mt-2 text-4xl font-bold text-[#ffd84d]">{total ? `£${total}` : "Build quote"}</h2>
              <p className="mt-3 text-sm text-white/55">Guide price only. Final quote depends on condition after inspection/photos.</p>
              <div className="mt-5 space-y-2 text-sm text-white/65">
                <p>Vehicle: {vehicleSize || "Not selected"}</p>
                
                <p>Base: {basePackage || "Not selected"}</p>
                <p>Paint: {polish || "Not selected"}</p>
                <p>Protection: {protection || "Not selected"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 md:p-8">
          <StepHeader number="1" title="Choose your vehicle size" subtitle="Simple sizing system for faster bookings." />

          <div className="grid gap-4 md:grid-cols-4">
            {vehicleSizes.map((size) => {
              const active = vehicleSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setVehicleSize(size)}
                  className={`rounded-[1.5rem] border p-6 text-left transition hover:-translate-y-1 ${
                    active
                      ? "border-[#ffd84d] bg-white/[0.12]"
                      : "border-white/10 bg-black/25 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold">{size}</h3>
                      <p className="mt-2 text-sm text-white/55">
                        {size === "Small" && "Fiesta, Polo, A1, Yaris"}
                        {size === "Medium" && "3 Series, Golf, A4, Focus"}
                        {size === "Large" && "SUVs, estates, larger saloons"}
                        {size === "XL" && "Vans, pickups, 7 seaters"}
                      </p>
                    </div>
                    {active && <Check className="h-5 w-5 text-[#ffd84d]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <SelectorSection number="2" title="Choose your base package" items={basePackages} selected={basePackage} setSelected={setBasePackage} vehicleSize={vehicleSize} />
        <SelectorSection number="3" title="Paint enhancement" items={polishOptions} selected={polish} setSelected={setPolish} vehicleSize={vehicleSize} />
        <SelectorSection number="4" title="Protection" items={protectionOptions} selected={protection} setSelected={setProtection} vehicleSize={vehicleSize} />

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 md:p-8">
          <StepHeader number="5" title="Condition extras" subtitle="Optional extras that affect quote accuracy." />
          <div className="grid gap-4 md:grid-cols-4">
            {conditionOptions.map((item) => {
              const active = conditions.includes(item.name);
              return (
                <button key={item.name} onClick={() => toggleCondition(item.name)} className={`rounded-[1.5rem] border p-5 text-left transition hover:-translate-y-1 ${active ? "border-[#ffd84d] bg-white/[0.12]" : "border-white/10 bg-black/25 hover:bg-white/[0.08]"}`}>
                  <div className="flex justify-between gap-3"><h3 className="font-semibold">{item.name}</h3>{active && <Check className="h-5 w-5 text-[#ffd84d]" />}</div>
                  <p className="mt-3 text-sm text-[#ffd84d]">{item.price ? `+£${item.price}` : "Included"}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#ffd84d]/35 bg-white/[0.08] p-5 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#58a6ff]">Final step</p>
              <h2 className="mt-3 text-3xl font-semibold">Book your custom detail on WhatsApp</h2>
              <p className="mt-3 max-w-2xl text-white/58">This sends the vehicle, selected package, machine polish, protection, extras and guide price straight to Elite Auto Detailing.</p>
              <div className="mt-5 rounded-2xl bg-black/25 p-4 text-sm text-white/70">
                <Calculator className="mb-2 h-5 w-5 text-[#ffd84d]" />
                Guide estimate: <span className="font-bold text-[#ffd84d]">{total ? `£${total}` : "select vehicle and options"}</span>
              </div>
            </div>

            <a href={bookingReady ? whatsappLink : "#"} className={`inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-4 text-sm font-bold transition ${bookingReady ? "bg-[#25D366] text-black hover:scale-[1.02]" : "pointer-events-none bg-white/10 text-white/45"}`}>
              <MessageCircle className="h-5 w-5" />
              {bookingReady ? "Book on WhatsApp" : "Complete selections first"}
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-5 py-10 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
        <p>Elite Auto Detailing</p>
        <p>5 Thornton Street, Bolton, BL2 2BU • 07988770864</p>
      </footer>
    </main>
  );
}

function StepHeader({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ffd84d] font-bold text-black">{number}</div>
      <div><h2 className="text-3xl font-semibold">{title}</h2><p className="text-white/55">{subtitle}</p></div>
    </div>
  );
}

function Select({ label, value, onChange, options, placeholder, disabled }: { label: string; value: string; onChange: (value: string) => void; options: string[]; placeholder: string; disabled?: boolean }) {
  return (
    <label className="space-y-2">
      <span className="text-sm text-white/60">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none ring-[#58a6ff] transition focus:ring-2 disabled:opacity-40">
        <option value="">{placeholder}</option>
        {options.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </label>
  );
}

function SelectorSection({ number, title, items, selected, setSelected, vehicleSize }: { number: string; title: string; items: any[]; selected: string; setSelected: (value: string) => void; vehicleSize?: string }) {
  return (
    <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 md:p-8">
      <StepHeader number={number} title={title} subtitle="Select one option." />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => {
          const isSelected = selected === item.name;
          const price = vehicleSize ? priceForSize(item, vehicleSize) : 0;
          return (
            <button key={item.name} onClick={() => setSelected(item.name)} className={`rounded-[1.5rem] border p-5 text-left transition hover:-translate-y-1 ${isSelected ? "border-[#ffd84d] bg-white/[0.12]" : "border-white/10 bg-black/25 hover:bg-white/[0.08]"}`}>
              <div className="flex items-start justify-between gap-4">
                <div><h3 className="text-xl font-semibold">{item.name}</h3><p className="mt-1 text-sm font-bold text-[#ffd84d]">{vehicleSize ? (price ? `+£${price}` : "£0") : "Select vehicle first"}</p></div>
                {isSelected && <Check className="h-5 w-5 text-[#ffd84d]" />}
              </div>
              <p className="mt-4 text-sm leading-6 text-white/58">{item.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
