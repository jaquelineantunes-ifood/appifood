import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Versão "Fogo" — barra de busca estilo iFood com botão Modo IA
// que faz o morph pill → círculo, estrela girando e faíscas ao fechar.
// Dependência: pacote `motion`  (pnpm add motion)

const STAR_PATH =
  "M5.94608 0.495553C6.29296 3.27055 8.62197 5.59957 11.397 5.94645C8.62197 6.29332 6.29296 8.62234 5.94608 11.3973C5.5992 8.62234 3.27019 6.29332 0.495187 5.94645C3.27019 5.59957 5.5992 3.27055 5.94608 0.495553Z";
const SEARCH_RING =
  "M7.33387 12C9.9112 12 12.0005 9.91068 12.0005 7.33336C12.0005 4.75603 9.9112 2.66669 7.33387 2.66669C4.75654 2.66669 2.6672 4.75603 2.6672 7.33336C2.6672 9.91068 4.75654 12 7.33387 12Z";
const SEARCH_HANDLE = "M13.3334 13.3334L11.2001 11.2001";

const FOGO = {
  background: "linear-gradient(120deg, #ff9a3d 0%, #ff3d6e 55%, #c9184a 100%)",
  ink: "#ffffff",
  glow: "rgba(255,61,110,0.55)",
};

const SPRING = { type: "spring", stiffness: 420, damping: 32, mass: 0.9 } as const;
const SNAP = { type: "spring", stiffness: 620, damping: 30, mass: 0.7 } as const;

const SPARKS = [
  { x: -15, y: -12, d: 0 },
  { x: 13, y: -14, d: 0.04 },
  { x: 15, y: 11, d: 0.08 },
  { x: -12, y: 13, d: 0.02 },
];

function Star({ open, ink }: { open: boolean; ink: string }) {
  return (
    <motion.div
      style={{ position: "relative", width: 11.893, height: 11.893, display: "grid", placeItems: "center", flexShrink: 0 }}
      animate={{ rotate: open ? 0 : -180, scale: open ? 1 : 1.18 }}
      transition={open ? { ...SPRING, delay: 0.02 } : SNAP}
    >
      <svg viewBox="0 0 11.8929 11.8929" width="11.893" height="11.893" fill="none" style={{ display: "block" }}>
        <path d={STAR_PATH} fill={ink} />
      </svg>
      <AnimatePresence>
        {!open &&
          SPARKS.map((s, i) => (
            <motion.span
              key={i}
              style={{ position: "absolute", width: 2.5, height: 2.5, borderRadius: 999, background: ink }}
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

export type ModoIAButtonProps = {
  placeholder?: string;
  label?: string;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
};

export default function ModoIAButton({
  placeholder = "Buscar em Todo iFood",
  label = "Modo IA",
  defaultOpen = true,
  onToggle,
}: ModoIAButtonProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [value, setValue] = useState("");
  const v = FOGO;

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      onToggle?.(next);
      return next;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
        borderRadius: 660,
        height: 48,
        width: 295,
        gap: 7.929,
        paddingLeft: 12,
        paddingRight: 7.929,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
        <path d={SEARCH_RING} stroke="#1C1C1E" strokeWidth="1.33333" />
        <path d={SEARCH_HANDLE} stroke="#1C1C1E" strokeLinecap="round" strokeWidth="1.33333" />
      </svg>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        style={{
          flex: 1,
          minWidth: 0,
          background: "transparent",
          outline: "none",
          border: "none",
          fontSize: 12,
          lineHeight: "16px",
          color: "#1c1c1e",
        }}
      />

      <motion.button
        layout
        onClick={toggle}
        transition={SPRING}
        aria-pressed={open}
        aria-label={label}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          outline: "none",
          border: "none",
          flexShrink: 0,
          borderRadius: 660,
          height: 32,
          width: open ? "auto" : 32,
          padding: open ? "0 12px" : 0,
          gap: open ? 4 : 0,
          background: v.background,
          color: v.ink,
          boxShadow: `0 6px 16px -6px ${v.glow}`,
          cursor: "pointer",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {open && (
            <motion.span
              key="label"
              layout="position"
              style={{ whiteSpace: "nowrap", fontSize: 10, fontWeight: 500, lineHeight: "16px" }}
              initial={{ opacity: 0, x: 5, filter: "blur(3px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 8, filter: "blur(3px)" }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.span layout="position" style={{ display: "grid", placeItems: "center", flexShrink: 0 }}>
          <Star open={open} ink={v.ink} />
        </motion.span>
      </motion.button>
    </div>
  );
}
