'use client';

import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

type ToastKind = 'success' | 'error' | 'info';

type Toast = {
  id: string;
  title: string;
  description?: string;
  kind: ToastKind;
};

type ToastInput = Omit<Toast, 'id'>;

type ToastContextValue = {
  showToast: (input: ToastInput) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((input: ToastInput) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, ...input }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed right-4 top-20 z-[100] flex w-[360px] max-w-[92vw] flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={
              toast.kind === 'success'
                ? 'rounded-lg border border-emerald-200 bg-emerald-50 p-3 shadow-lg dark:border-emerald-900 dark:bg-emerald-900/30'
                : toast.kind === 'error'
                ? 'rounded-lg border border-rose-200 bg-rose-50 p-3 shadow-lg dark:border-rose-900 dark:bg-rose-900/30'
                : 'rounded-lg border border-sky-200 bg-sky-50 p-3 shadow-lg dark:border-sky-900 dark:bg-sky-900/30'
            }
          >
            <p className="text-sm font-semibold">{toast.title}</p>
            {toast.description ? <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">{toast.description}</p> : null}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
