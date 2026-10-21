import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { KeyRound, RefreshCcw, Inbox } from "lucide-react";
import Seo from "@/components/Seo";
import { API } from "@/lib/site";

export default function Admin() {
  const [key, setKey] = useState(sessionStorage.getItem("ml_admin") || "");
  const [subs, setSubs] = useState(null);
  const [loading, setLoading] = useState(false);

  const load = async (k = key) => {
    setLoading(true);
    try {
      const res = await axios.get(`${API}/contact/submissions`, { headers: { "X-Admin-Key": k } });
      setSubs(res.data.submissions);
      sessionStorage.setItem("ml_admin", k);
    } catch {
      toast.error("Access denied. Check the admin key.");
      setSubs(null);
      sessionStorage.removeItem("ml_admin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 min-h-screen" data-testid="page-admin">
      <Seo title="Admin - Beta Access Submissions | M.O. LABS" siteName="M.O. LABS" description="Internal submissions inbox." />
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400">{"// INTERNAL - SUBMISSIONS INBOX"}</p>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">Beta Access Inbox</h1>

      {subs === null ? (
        <form
          data-testid="admin-key-form"
          className="mt-10 flex max-w-md gap-3"
          onSubmit={(e) => { e.preventDefault(); load(); }}
        >
          <input
            data-testid="admin-key-input"
            type="password"
            required
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Admin key"
            className="w-full border border-line bg-panel/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-emerald-500/70 focus:outline-none"
          />
          <button
            data-testid="admin-login-btn"
            type="submit"
            disabled={loading}
            className="inline-flex shrink-0 items-center gap-2 bg-emerald-500 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-emerald-400 disabled:opacity-60"
          >
            <KeyRound className="h-4 w-4" /> Unlock
          </button>
        </form>
      ) : (
        <div className="mt-10" data-testid="admin-submissions-list">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs text-slate-500 tracking-widest uppercase">{subs.length} submission{subs.length === 1 ? "" : "s"}</p>
            <button
              data-testid="admin-refresh-btn"
              onClick={() => load()}
              className="inline-flex items-center gap-2 border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-slate-300 transition-colors hover:border-emerald-500/60 hover:text-emerald-400"
            >
              <RefreshCcw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} /> Refresh
            </button>
          </div>
          {subs.length === 0 ? (
            <div className="mt-8 flex flex-col items-center gap-3 border border-line bg-panel/40 py-16 text-slate-500" data-testid="admin-empty-state">
              <Inbox className="h-8 w-8" />
              <p className="font-mono text-xs tracking-widest uppercase">inbox_zero: true</p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {subs.map((s) => (
                <article key={s.id} className="border border-line bg-panel/50 p-6" data-testid={`admin-submission-${s.id}`}>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="font-display text-base font-semibold text-white">{s.name}</span>
                    <a href={`mailto:${s.email}`} className="font-mono text-xs text-emerald-400 hover:underline">{s.email}</a>
                    {s.company && <span className="font-mono text-xs text-slate-500">{s.company}</span>}
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-slate-600">
                      {s.source_page} // {new Date(s.created_at).toLocaleString()}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{s.message}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
