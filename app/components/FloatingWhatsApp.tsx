"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hi Elite Auto Detailing, I’m interested in booking. Can you help?"
  );

  return (
    <a
      href={`https://wa.me/447988770864?text=${message}`}
      aria-label="Message Elite Auto Detailing on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-black shadow-2xl shadow-black/40 transition hover:scale-110"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
}
