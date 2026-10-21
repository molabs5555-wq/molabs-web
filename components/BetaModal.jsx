import { createContext, useContext, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";

const BetaContext = createContext({ open: () => {} });

export const useBetaModal = () => useContext(BetaContext);

export const BetaModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BetaContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          data-testid="beta-access-modal"
          className="border-line bg-panel text-slate-100 sm:max-w-lg"
        >
          <DialogHeader>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400">{"// BETA ACCESS"}</p>
            <DialogTitle className="font-display text-2xl font-bold text-white">Request Beta Access</DialogTitle>
            <DialogDescription className="text-slate-400">
              We onboard a small number of operators each week. Tell us what you're running.
            </DialogDescription>
          </DialogHeader>
          <ContactForm idPrefix="beta" onSuccess={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </BetaContext.Provider>
  );
};
