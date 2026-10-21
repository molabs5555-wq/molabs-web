import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { API } from "@/lib/site";

const fieldClass =
  "w-full bg-ink/80 border border-line px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/30 transition-colors";

export const ContactForm = ({ idPrefix = "contact", onSuccess }) => {
  const location = useLocation();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, { ...form, source_page: location.pathname });
      toast.success("Transmission received. An operator will reply within 24 hours.");
      setForm({ name: "", email: "", company: "", message: "" });
      onSuccess?.();
    } catch (err) {
      toast.error("Transmission failed. Check your inputs and retry.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4" data-testid={`${idPrefix}-contact-form`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          data-testid={`${idPrefix}-contact-name-input`}
          required
          value={form.name}
          onChange={update("name")}
          placeholder="Name"
          className={fieldClass}
        />
        <input
          data-testid={`${idPrefix}-contact-email-input`}
          required
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="Email"
          className={fieldClass}
        />
      </div>
      <input
        data-testid={`${idPrefix}-contact-company-input`}
        value={form.company}
        onChange={update("company")}
        placeholder="Company (optional)"
        className={fieldClass}
      />
      <textarea
        data-testid={`${idPrefix}-contact-message-input`}
        required
        rows={4}
        value={form.message}
        onChange={update("message")}
        placeholder="What should software stop making you do? (Or just drop your query here...)"
        className={`${fieldClass} resize-none`}
      />
      <button
        data-testid={`${idPrefix}-contact-submit-btn`}
        type="submit"
        disabled={sending}
        className="group inline-flex items-center gap-2 bg-emerald-500 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-emerald-400 disabled:opacity-60"
      >
        {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
        {sending ? "Transmitting" : "Transmit"}
      </button>
      <p className="text-xs text-slate-500" data-testid={`${idPrefix}-contact-legal-note`}>
        By sending this, you agree to our{" "}
        <a href="/legal" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-slate-300">
          Terms &amp; Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};
