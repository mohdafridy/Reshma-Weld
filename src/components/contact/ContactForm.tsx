import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, Send } from "lucide-react";
import Button from "../ui/Button";
import type { RequirementType } from "../../types";

const requirementTypes: RequirementType[] = ["Sales", "Rental", "Service", "General Enquiry"];

const queryTypeMap: Record<string, RequirementType> = {
  quote: "Sales",
  rental: "Rental",
  service: "Service",
};

interface FormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  requirementType: RequirementType;
  product: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  location: "",
  requirementType: "General Enquiry",
  product: "",
  message: "",
};

const inputClasses =
  "w-full border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-steel-400 transition-colors focus:border-accent-500 focus:outline-none";

const labelClasses = "mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-700";

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam && queryTypeMap[typeParam]) {
      setForm((prev) => ({ ...prev, requirementType: queryTypeMap[typeParam] }));
    }
  }, [searchParams]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, boolean>> = {};
    if (!form.name.trim()) nextErrors.name = true;
    if (!form.phone.trim() && !form.email.trim()) {
      nextErrors.phone = true;
      nextErrors.email = true;
    }
    if (!form.message.trim()) nextErrors.message = true;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // NOTE: No backend/email service is configured yet. Wire this handler
    // to a real form endpoint or email API before relying on it in production.
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 border border-ink-900/10 bg-white px-8 py-16 text-center">
        <CheckCircle2 size={44} className="text-ok-500" strokeWidth={1.5} />
        <h3 className="text-2xl font-semibold text-ink-950">Enquiry Received</h3>
        <p className="max-w-md text-steel-500">
          Thank you for reaching out. Our team will review your requirement and get back to you
          shortly.
        </p>
        <Button
          variant="outline"
          size="md"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="border border-ink-900/10 bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name <span className="text-accent-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={`${inputClasses} ${errors.name ? "border-accent-500" : ""}`}
            placeholder="Your full name"
            aria-invalid={errors.name}
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            className={inputClasses}
            placeholder="Company name"
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={`${inputClasses} ${errors.phone ? "border-accent-500" : ""}`}
            placeholder="Contact number"
            aria-invalid={errors.phone}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={`${inputClasses} ${errors.email ? "border-accent-500" : ""}`}
            placeholder="you@company.com"
            aria-invalid={errors.email}
          />
        </div>

        <div>
          <label htmlFor="location" className={labelClasses}>
            City / State
          </label>
          <input
            id="location"
            type="text"
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
            className={inputClasses}
            placeholder="e.g. Chennai, Tamil Nadu"
          />
        </div>

        <div>
          <label htmlFor="requirementType" className={labelClasses}>
            Requirement Type
          </label>
          <select
            id="requirementType"
            value={form.requirementType}
            onChange={(e) => update("requirementType", e.target.value as RequirementType)}
            className={`${inputClasses} appearance-none`}
          >
            {requirementTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="product" className={labelClasses}>
            Product / Equipment
          </label>
          <input
            id="product"
            type="text"
            value={form.product}
            onChange={(e) => update("product", e.target.value)}
            className={inputClasses}
            placeholder="e.g. Portable Inverter Welding Machine"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Message <span className="text-accent-500">*</span>
          </label>
          <textarea
            id="message"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={5}
            className={`${inputClasses} resize-none ${errors.message ? "border-accent-500" : ""}`}
            placeholder="Tell us about your requirement — equipment, quantity, timeline, or project details."
            aria-invalid={errors.message}
            aria-required="true"
          />
        </div>
      </div>

      {Object.keys(errors).length > 0 && (
        <p className="mt-4 text-sm text-accent-600">
          Please fill in your name, a way to reach you (phone or email), and your message.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" icon={Send} className="mt-6 w-full sm:w-auto">
        Send Enquiry
      </Button>
    </form>
  );
}
