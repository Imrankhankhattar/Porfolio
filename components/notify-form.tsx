"use client";

import { useState } from "react";

export function NotifyForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <p className="mt-8 text-sm text-emerald-600 dark:text-emerald-400">Thanks — you&apos;re on the list!</p>;
  }

  return (
    <form
      className="mx-auto mt-8 flex max-w-sm gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="you@example.com"
        className="flex-1 rounded-md border border-black/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-emerald-500 dark:border-white/10"
      />
      <button
        type="submit"
        className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
      >
        Notify Me
      </button>
    </form>
  );
}
