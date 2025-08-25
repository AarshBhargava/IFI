import React, { useEffect, useRef } from "react";

export default function Lightbox({ open=false, onClose=()=>{}, item={} }) {
  const dialogRef = useRef(null);
  const lastFocus = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        // simple tab trap within dialogRef
        const focusable = dialogRef.current.querySelectorAll('a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length-1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }

    if (open) {
      lastFocus.current = document.activeElement;
      setTimeout(()=> dialogRef.current?.focus(), 0);
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      if (lastFocus.current) lastFocus.current.focus();
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" aria-describedby="lightbox-desc">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div ref={dialogRef} tabIndex={-1} className="relative max-w-[1100px] w-full mx-4 bg-transparent">
        <div className="flex gap-4">
          <div className="flex-1">
            <img src={item.image?.jpg || '/placeholder.jpg'} alt={item.image?.alt || item.title} className="w-full h-auto rounded-md" />
          </div>
          <aside className="w-96 bg-a-surface p-4 rounded-md shadow-mid">
            <h2 id="lightbox-title" className="font-heading text-xl">{item.title}</h2>
            <div id="lightbox-desc" className="text-sm text-a-text-2">{item.artist} • {item.dimensions}</div>
            <p className="mt-3 text-sm">{item.description}</p>
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 rounded bg-a-accent text-white">Buy</button>
              <button className="px-3 py-2 rounded border" onClick={onClose}>Close</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
