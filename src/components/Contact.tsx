import { m } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Loader2, Mail, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { socials } from "../lib/data";
import { fadeUp, viewportOnce } from "../lib/motion";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = { name?: string; email?: string; message?: string };

// Web3Forms — serverless form-to-email. Key lives in .env (never hardcoded).
const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

// Pragmatic email check — good enough for a contact form, no false rejects.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [errorText, setErrorText] = useState("");

  // Honeypot: a hidden field bots tend to fill. Uncontrolled + read via ref so
  // an automated fill is caught even though it never touches React state.
  const honeypotRef = useRef<HTMLInputElement>(null);

  // Prefilled mailto, used as a guaranteed fallback if the API call fails.
  const mailtoHref =
    `mailto:${socials.email}` +
    `?subject=${encodeURIComponent(`Portfolio enquiry from ${form.name || "someone"}`)}` +
    `&body=${encodeURIComponent(form.message || "")}`;

  // Update a field and clear its error as the user corrects it.
  const update = (key: keyof typeof form) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "That email doesn't look right.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Bot filled the honeypot → pretend it worked, send nothing.
    if (honeypotRef.current?.checked) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      const firstInvalid = (["name", "email", "message"] as const).find((k) => found[k]);
      if (firstInvalid) document.getElementById(firstInvalid)?.focus();
      return;
    }

    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorText("Form isn't configured — VITE_WEB3FORMS_ACCESS_KEY is missing.");
      return;
    }

    setStatus("sending");
    setErrors({});
    setErrorText("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          from_name: form.name,
          subject: `New portfolio message from ${form.name}`,
          botcheck: false,
        }),
      });

      const data: { success?: boolean; message?: string } = await res
        .json()
        .catch(() => ({}));

      if (!res.ok || !data.success) {
        throw new Error(data.message || `HTTP ${res.status}`);
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      // Keep the entered data so nothing is lost.
      setStatus("error");
      setErrorText(err instanceof Error ? err.message : "Unknown error");
    }
  };

  const field =
    "w-full rounded border border-rule bg-canvas px-3 py-2.5 font-mono text-[13px] text-fg placeholder:text-fg-dim transition-colors focus:border-syn-str focus:outline-none aria-[invalid=true]:border-syn-num";
  const errorLine = "mt-1 font-mono text-[11px] text-syn-num";

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading
        index="05"
        label="contact"
        title={
          <>
            Let&rsquo;s build <span className="text-syn-str">something.</span>
          </>
        }
      />

      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <m.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <p className="max-w-md text-[15px] leading-relaxed text-fg-mid">
            Open to opportunities, collaborations, or a good conversation about building things. Email
            is the fastest way to reach me.
          </p>

          <a
            href={`mailto:${socials.email}`}
            className="link-underline mt-7 inline-flex items-center gap-2 font-mono text-base text-syn-str sm:text-lg"
          >
            {socials.email}
            <ArrowUpRight size={16} />
          </a>

          <p className="mt-4 flex items-center gap-2 font-mono text-[13px] text-fg-mid">
            <MapPin size={15} className="text-fg-dim" />
            {socials.location}
          </p>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: socials.github, label: "GitHub", Icon: Github },
              { href: socials.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: `mailto:${socials.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded border border-rule text-fg-mid transition-colors hover:border-syn-str hover:text-syn-str"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </m.div>

        <m.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="flex items-end">
            <span className="tab">
              <span className="h-1.5 w-1.5 rounded-full bg-syn-str" />
              message.txt
            </span>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="panel flex flex-col gap-4 rounded-tl-none p-5 sm:p-6"
          >
            {/* Honeypot — hidden from humans, catches bots. Do not remove. */}
            <input
              ref={honeypotRef}
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              style={{ display: "none" }}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-[11px] text-fg-dim">
                  name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name")(e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={field}
                  placeholder="your name"
                />
                {errors.name && (
                  <p id="name-error" className={errorLine}>
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-[11px] text-fg-dim">
                  email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email")(e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={field}
                  placeholder="you@email.com"
                />
                {errors.email && (
                  <p id="email-error" className={errorLine}>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-[11px] text-fg-dim">
                message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => update("message")(e.target.value)}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${field} resize-none`}
                placeholder="what are you building?"
              />
              {errors.message && (
                <p id="message-error" className={errorLine}>
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="btn-solid mt-1 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={15} className="animate-spin motion-reduce:hidden" />
                  sending…
                </>
              ) : status === "sent" ? (
                "sent ✓"
              ) : (
                "send message"
              )}
            </button>

            {/* Screen readers announce state changes here. */}
            <div aria-live="polite" className="min-h-[1.25rem] font-mono text-[12px]">
              {status === "sending" && <p className="text-syn-cmt">{"// sending…"}</p>}
              {status === "sent" && (
                <p className="text-syn-str">{"// thanks — I'll get back to you soon"}</p>
              )}
              {status === "error" && (
                <div className="space-y-1.5">
                  <p className="text-syn-num">
                    Couldn&rsquo;t send through the form.{" "}
                    <a href={mailtoHref} className="text-syn-str underline">
                      Email me directly instead →
                    </a>
                  </p>
                  {errorText && (
                    <p className="break-words text-syn-cmt">{`// ${errorText.slice(0, 180)}`}</p>
                  )}
                </div>
              )}
            </div>
          </form>
        </m.div>
      </div>
    </section>
  );
}
