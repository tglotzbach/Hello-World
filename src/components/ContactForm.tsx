"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-sm border border-ink/10 p-8 text-center">
        <h3 className="font-serif text-xl font-semibold tracking-tight">
          Thanks for reaching out
        </h3>
        <p className="mt-2 text-sm text-ink/50">
          I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        // Formspree endpoint — replace FORM_ID with your actual Formspree form ID
        fetch("https://formspree.io/f/FORM_ID", {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }).then(() => setSubmitted(true));
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink/70">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full border-b border-ink/15 bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-ink/30 focus:border-ink/40"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink/70">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border-b border-ink/15 bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-ink/30 focus:border-ink/40"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full resize-none border-b border-ink/15 bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-ink/30 focus:border-ink/40"
          placeholder="What can I help you with?"
        />
      </div>
      <button
        type="submit"
        className="border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-ink/80"
      >
        Send Message
      </button>
    </form>
  );
}
