"use client";

export default function GlossEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[8%] h-72 w-72 animate-[floatGlow_8s_ease-in-out_infinite] rounded-full bg-[#58a6ff]/20 blur-3xl" />
      <div className="absolute right-[-12%] top-[18%] h-80 w-80 animate-[floatGlow_10s_ease-in-out_infinite] rounded-full bg-[#ffd84d]/15 blur-3xl" />
      <div className="absolute bottom-[8%] left-[25%] h-56 w-56 animate-[floatGlow_12s_ease-in-out_infinite] rounded-full bg-white/8 blur-3xl" />
    </div>
  );
}
