import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";

const ToastContext = createContext(() => {});

// Small "added to bag" confirmation that shows on every page, so shoppers see the cart change.
export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  const dismiss = useCallback(() => setToast(null), []);

  const show = useCallback((t) => {
    clearTimeout(timer.current);
    setToast({ ...t, key: Date.now() });
    timer.current = setTimeout(() => setToast(null), 3500);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 top-20 z-[60] flex justify-center px-4"
      >
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.key}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-xl border border-ink/16 bg-panel p-3 shadow-xl"
            >
              {toast.image && (
                <img src={toast.image} alt="" className="h-12 w-12 flex-none rounded-lg object-cover" />
              )}
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1.5 text-sm font-medium text-pearl">
                  <Check size={14} className="text-gold" /> {toast.title}
                </p>
                {toast.text && <p className="truncate text-xs text-mist">{toast.text}</p>}
              </div>
              <Link
                to="/cart"
                onClick={dismiss}
                className="flex-none rounded-full bg-ink px-3 py-1.5 text-[11px] uppercase tracking-wider text-sand hover:bg-gold hover:text-ink"
              >
                View bag
              </Link>
              <button type="button" onClick={dismiss} aria-label="Dismiss" className="flex-none p-1 text-mist hover:text-pearl">
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
