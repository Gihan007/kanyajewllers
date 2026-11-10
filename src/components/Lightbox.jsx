import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

// Full-screen photo viewer: arrows / swipe to change photo, click or +/- to zoom, Esc to close.
export default function Lightbox({ images, index, alt, onClose, onChange }) {
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const count = images.length;

  const go = useCallback(
    (dir) => {
      setZoomed(false);
      onChange((index + dir + count) % count);
    },
    [index, count, onChange]
  );

  useEffect(() => {
    const prevFocus = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && count > 1) go(1);
      else if (e.key === "ArrowLeft" && count > 1) go(-1);
      else if (e.key === "Tab") {
        // keep keyboard focus inside the viewer
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, go, count]);

  const toggleZoom = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
    setZoomed((z) => !z);
  };

  const onTouchEnd = (e) => {
    if (touchX.current == null || zoomed || count < 2) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  const btn =
    "flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/30";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} photos`}
      className="fixed inset-0 z-[70] flex flex-col bg-black/90"
      onClick={onClose}
    >
      <div className="flex items-center justify-between p-4 text-white" onClick={(e) => e.stopPropagation()}>
        <span className="text-sm tracking-wider">
          {index + 1} / {count}
        </span>
        <div className="flex gap-2">
          <button type="button" className={btn} onClick={() => setZoomed((z) => !z)} aria-label={zoomed ? "Zoom out" : "Zoom in"}>
            {zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
          </button>
          <button ref={closeRef} type="button" className={btn} onClick={onClose} aria-label="Close photo viewer">
            <X size={20} />
          </button>
        </div>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={images[index]}
          alt={`${alt}, photo ${index + 1} of ${count}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleZoom(e);
          }}
          style={{ transformOrigin: origin }}
          className={`max-h-full max-w-full select-none object-contain transition-transform duration-300 ${
            zoomed ? "scale-[2.2] cursor-zoom-out" : "cursor-zoom-in"
          }`}
          draggable={false}
        />
        {count > 1 && (
          <>
            <button type="button" className={`${btn} absolute left-3`} onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous photo">
              <ChevronLeft size={22} />
            </button>
            <button type="button" className={`${btn} absolute right-3`} onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next photo">
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
