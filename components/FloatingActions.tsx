"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="float-actions">
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          "Hi Metric Design Studio, I would like a quote for my home in Hyderabad.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn bg-[#25D366] text-white"
        aria-label="Chat with Metric Design Studio on WhatsApp"
      >
        <WhatsAppIcon size={24} />
      </a>
      <a
        href={`tel:${site.phoneRaw}`}
        className="float-btn bg-ink text-white"
        aria-label={`Call Metric Design Studio on ${site.phone}`}
      >
        <PhoneIcon size={20} />
      </a>
    </div>
  );
}
