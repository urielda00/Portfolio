"use client";

import { useEffect } from "react";

const RENDER_WAKEUP_URLS = [
  "https://shopme26.onrender.com/health",
  "https://chaos-to-sprint.onrender.com/health",
  "https://cards-game-nb5r.onrender.com/api/health",
];

let didWakeRenderServices = false;

export default function RenderWakeup() {
  useEffect(() => {
    if (didWakeRenderServices) return;
    didWakeRenderServices = true;

    RENDER_WAKEUP_URLS.forEach((url) => {
      fetch(url, {
        method: "GET",
        cache: "no-store",
        keepalive: true,
      }).catch(() => {});
    });
  }, []);

  return null;
}
