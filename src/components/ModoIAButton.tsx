import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const STAR_PATH =
  "M5.94608 0.495553C6.29296 3.27055 8.62197 5.59957 11.397 5.94645C8.62197 6.29332 6.29296 8.62234 5.94608 11.3973C5.5992 8.62234 3.27019 6.29332 0.495187 5.94645C3.27019 5.59957 5.5992 3.27055 5.94608 0.495553Z";

const SPRING = { type: "spring", stiffness: 420, damping: 32, mass: 0.9 } as const;
const SNAP   = { type: "spring", stiffness: 620, damping: 30,  mass: 0.7 } as const;
const SPARKS = [
  { x: -15, y: -12, d: 0    },
  { x:  13, y: -14, d: 0.04 },
  { x:  15, y:  11, d: 0.08 },
  { x: -12, y:  13, d: 0.02 },
];

const GRADIENT_CSS = "linear-gradient(135deg,#ed6256 0%,#ec4a65 50%,#dd405d 100%)";
const GLOW_BTN     = "0px 6px 16px -6px rgba(237,98,86,0.55)";
const INK          = "#ffffff";

// Ambient glow behind the pill when active — matches the reference: wide, diffuse, rosé
const ACTIVE_SHADOW = [
  "0 0 70px 28px rgba(237,98,86,0.26)",
  "0 0 30px 10px rgba(236,74,101,0.20)",
  "0 2px 16px rgba(0,0,0,0.05)",
].join(", ");

const IDLE_SHADOW = "none";

function GradientStar() {
  const size = 19;
  const s = 11.893;
  const off = (size - s) / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <defs>
        <linearGradient id="star-fill-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#ed6256" />
          <stop offset="50%"  stopColor="#ec4a65" />
          <stop offset="100%" stopColor="#dd405d" />
        </linearGradient>
      </defs>
      <g transform={`translate(${off},${off})`}>
        <path d={STAR_PATH} fill="url(#star-fill-grad)" />
      </g>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M7.33387 12C9.9112 12 12.0005 9.91068 12.0005 7.33336C12.0005 4.75603 9.9112 2.66669 7.33387 2.66669C4.75654 2.66669 2.6672 4.75603 2.6672 7.33336C2.6672 9.91068 4.75654 12 7.33387 12Z" stroke="#1C1C1E" strokeWidth="1.33333" />
      <path d="M13.3334 13.3334L11.2001 11.2001" stroke="#1C1C1E" strokeLinecap="round" strokeWidth="1.33333" />
    </svg>
  );
}

function WhiteStar({ spinning }: { spinning: boolean }) {
  return (
    <motion.div
      style={{ position: "relative", width: 11.893, height: 11.893, display: "grid", placeItems: "center", flexShrink: 0 }}
      animate={{
        rotate: spinning ? 0 : 360,
        scale: spinning ? 1 : [1, 1.3, 0.94, 1.06, 1],
      }}
      transition={{
        rotate: { type: "spring", stiffness: 180, damping: 14, mass: 0.6 },
        scale: { duration: 0.55, ease: [0.22, 1.2, 0.36, 1], times: [0, 0.3, 0.55, 0.75, 1] },
      }}
    >
      <svg viewBox="0 0 11.8929 11.8929" width="11.893" height="11.893" fill="none">
        <path d={STAR_PATH} fill={INK} />
      </svg>
      <AnimatePresence>
        {!spinning && SPARKS.map((s, i) => (
          <motion.span
            key={i}
            style={{ position: "absolute", width: 2.5, height: 2.5, borderRadius: 999, background: INK }}
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            animate={{ x: s.x, y: s.y, scale: [0, 1, 0], opacity: [0, 0.9, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, delay: s.d, ease: [0.2, 0.7, 0.3, 1] }}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ModoIAButton({
  autoCloseDelay = 2000,
  isActive = false,
  onActivate,
  onClose,
  onSearchClick,
  onSubmit,
}: {
  autoCloseDelay?: number;
  isActive?: boolean;
  onActivate?: () => void;
  onClose?: () => void;
  onSearchClick?: () => void;
  onSubmit?: (value: string) => void;
}) {
  const [labelVisible, setLabelVisible] = useState(true);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLabelVisible(false), autoCloseDelay);
    return () => clearTimeout(t);
  }, [autoCloseDelay]);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setValue("");
    }
  }, [isActive]);

  const hasText = value.length > 0;
  const showLabel = labelVisible && !isActive;

  return (
    <motion.div
      animate={{
        background: isActive ? "#ffffff" : "#f5f5f5",
        boxShadow: isActive ? ACTIVE_SHADOW : IDLE_SHADOW,
      }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex items-center rounded-full h-12 w-full gap-2 px-3 touch-none"
      style={{
        fontFamily: "'iFood RC Textos', system-ui, sans-serif",
        cursor: isActive ? "text" : "pointer",
      }}
    >
      {/* Animated gradient stroke around the pill */}
      <AnimatePresence>
        {isActive && (
          <motion.svg
            key="stroke-ring"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            viewBox="0 0 343 48"
            preserveAspectRatio="none"
            fill="none"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, times: [0, 0.7, 1], ease: "easeOut" }}
          >
            <defs>
              <linearGradient id="stroke-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ed6256" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ec4a65" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#dd405d" stopOpacity="0.5" />
              </linearGradient>
              <filter id="stroke-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              </filter>
            </defs>
            {/* Glow layer — same animation, blurred behind */}
            <motion.rect
              x="1.5"
              y="1.5"
              width="340"
              height="45"
              rx="22.5"
              ry="22.5"
              stroke="url(#stroke-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#stroke-glow)"
              initial={{ strokeDasharray: "740", strokeDashoffset: 740 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />
            {/* Main stroke */}
            <motion.rect
              x="1.5"
              y="1.5"
              width="340"
              height="45"
              rx="22.5"
              ry="22.5"
              stroke="url(#stroke-grad)"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ strokeDasharray: "740", strokeDashoffset: 740 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />
          </motion.svg>
        )}
      </AnimatePresence>
      {/* Left icon */}
      <div className="flex-shrink-0 w-5 h-5 grid place-items-center">
        <AnimatePresence mode="wait" initial={false}>
          {isActive ? (
            <motion.div
              key="grad-star"
              initial={{ opacity: 0, scale: 0.4, rotate: -120 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <GradientStar />
            </motion.div>
          ) : (
            <motion.div
              key="search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <SearchIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input — clicks go to IA mode (active) or search journey (inactive) */}
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar em Todo iFood"
        readOnly={!isActive}
        onKeyDown={(e) => {
          if (e.key === "Enter" && value.trim()) {
            onSubmit?.(value.trim());
          }
        }}
        onClick={(e) => {
          if (isActive) {
            e.stopPropagation();
          } else {
            onSearchClick?.();
          }
        }}
        className="flex-1 min-w-0 bg-transparent outline-none border-none text-xs leading-4 placeholder-gray-600 touch-none"
        style={{
          color: "#1c1c1e",
          fontFamily: "inherit",
          cursor: isActive ? "text" : "pointer",
        }}
      />

      {/* Right button */}
      <AnimatePresence mode="wait" initial={false}>
        {isActive && !hasText ? (
          <motion.button
            key="close"
            onClick={(e) => { e.stopPropagation(); onClose?.(); }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={SNAP}
            className="w-8 h-8 rounded-full bg-gray-100 border-none cursor-pointer flex items-center justify-center flex-shrink-0 touch-none"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 1L9 9M9 1L1 9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.button>
        ) : (
          <motion.button
            key="ia-btn"
            layout
            onClick={(e) => {
              e.stopPropagation();
              if (isActive) { onClose?.(); } else { onActivate?.(); }
            }}
            transition={SPRING}
            className="relative flex items-center justify-center overflow-hidden outline-none border-none flex-shrink-0 touch-none"
            style={{
              borderRadius: 660,
              height: 32,
              width: showLabel ? "auto" : 32,
              padding: showLabel ? "0 12px" : 0,
              gap: showLabel ? 4 : 0,
              background: GRADIENT_CSS,
              color: INK,
              boxShadow: GLOW_BTN,
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {showLabel && (
                <motion.span
                  key="label"
                  layout="position"
                  style={{ whiteSpace: "nowrap", fontSize: 10, fontWeight: 500, lineHeight: "16px" }}
                  initial={{ opacity: 0, x: 5, filter: "blur(3px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 12, filter: "blur(4px)", scale: 0.92 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.15, 1] }}
                >
                  Modo IA
                </motion.span>
              )}
            </AnimatePresence>
            <motion.span
              layout="position"
              transition={{ layout: { type: "spring", stiffness: 200, damping: 26, mass: 0.8 } }}
              style={{ display: "grid", placeItems: "center", flexShrink: 0 }}
            >
              <WhiteStar spinning={showLabel} />
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
