"use client";

import { useRouter } from "next/navigation";

// Uses router.back() rather than <Link href="/">. This walks back through
// browser history instead of doing a fresh navigation, which is what lets
// the browser restore the visitor's exact scroll position on the home page
// instead of dropping them back at the top.
export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-secondary transition-colors hover:text-accent"
    >
      ← Back
    </button>
  );
}
