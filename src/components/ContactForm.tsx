"use client";

import { FormEvent, useState } from "react";

const CONTACT_RECIPIENTS = [
  "angeles.ckloie@gmail.com",
  "mendiola.lespaul.dev@gmail.com",
].join(",");

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    if (!trimmedEmail || !trimmedSubject || !trimmedMessage) {
      return;
    }

    const body = [
      `From: ${trimmedEmail}`,
      `Subject: ${trimmedSubject}`,
      "",
      trimmedMessage,
    ].join("\n");

    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", CONTACT_RECIPIENTS);
    gmailUrl.searchParams.set("su", trimmedSubject);
    gmailUrl.searchParams.set("body", body);

    window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
      <label className="block text-xs font-medium uppercase tracking-[0.16em] text-muted">
        Email Address
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          className="mt-3 w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-foreground/30"
        />
      </label>

      <label className="mt-5 block text-xs font-medium uppercase tracking-[0.16em] text-muted">
        Subject
        <input
          type="text"
          name="subject"
          required
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder="Project inquiry"
          className="mt-3 w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-foreground/30"
        />
      </label>

      <label className="mt-5 block text-xs font-medium uppercase tracking-[0.16em] text-muted">
        Message
        <textarea
          name="message"
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell me about your project or opportunity..."
          className="mt-3 w-full resize-y rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-foreground/30"
        />
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-[var(--btn-primary-bg)] py-3.5 text-sm font-medium text-[var(--btn-primary-fg)] transition hover:opacity-90"
      >
        Send Message
      </button>
    </form>
  );
}
