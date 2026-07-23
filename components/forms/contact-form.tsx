"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { CheckCircle2 } from "lucide-react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

function validate(state: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!state.name.trim()) errors.name = "Please enter your name.";
  if (!state.phone.trim()) errors.phone = "Please enter a phone number so we can reach you.";
  if (state.email && !/^\S+@\S+\.\S+$/.test(state.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!state.message.trim()) errors.message = "Tell us a little about the job.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-highlight)] p-8 text-center"
      >
        <CheckCircle2 className="size-8 text-[var(--color-accent-ink)]" aria-hidden="true" />
        <p className="text-lg font-medium text-[var(--color-ink)]">
          Thank you — your request has been sent.
        </p>
        <p className="text-sm text-[var(--color-muted)]">
          A member of the Twin Brothers team will call you within one business hour.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-xs text-[var(--color-danger)]">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="07XX XXX XXX"
            invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-xs text-[var(--color-danger)]">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email (optional)</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {errors.email ? (
          <p id="email-error" className="mt-1.5 text-xs text-[var(--color-danger)]">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="service">Service needed</Label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(e) => handleChange("service", e.target.value)}
          className="h-11 w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 text-sm text-[var(--color-ink)] focus:border-[var(--color-primary)]"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <Label htmlFor="message">Tell us about the job</Label>
        <Textarea
          id="message"
          name="message"
          invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Property size, preferred date, and any specific concerns…"
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-[var(--color-danger)]">
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-[var(--color-danger)]">
          Something went wrong sending your request. Please call us directly or try again.
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Request"}
      </Button>
    </form>
  );
}
