import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const ICON_FONT = "'pomodoro-icon-line:Regular', sans-serif";

const RECENT_SEARCHES = [
  "Pizza",
  "Hambúrguer",
  "Açaí",
  "Farmácia",
  "Mercado",
];

const SUGGESTIONS = [
  { label: "Promoções", icon: "\uE8A2" },
  { label: "Frete Grátis", icon: "\uE83B" },
  { label: "Entrega rápida", icon: "\uE8D2" },
  { label: "Mais pedidos", icon: "\uE83B" },
];

function BackArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="#141414"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.5" stroke="#a3a3a3" strokeWidth="1.2" />
      <path d="M8 4.5V8L10.5 9.5" stroke="#a3a3a3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M7.33387 12C9.9112 12 12.0005 9.91068 12.0005 7.33336C12.0005 4.75603 9.9112 2.66669 7.33387 2.66669C4.75654 2.66669 2.6672 4.75603 2.6672 7.33336C2.6672 9.91068 4.75654 12 7.33387 12Z"
        stroke="#a3a3a3"
        strokeWidth="1.33333"
      />
      <path d="M13.3334 13.3334L11.2001 11.2001" stroke="#a3a3a3" strokeLinecap="round" strokeWidth="1.33333" />
    </svg>
  );
}

const STAR_PATH =
  "M5.94608 0.495553C6.29296 3.27055 8.62197 5.59957 11.397 5.94645C8.62197 6.29332 6.29296 8.62234 5.94608 11.3973C5.5992 8.62234 3.27019 6.29332 0.495187 5.94645C3.27019 5.59957 5.5992 3.27055 5.94608 0.495553Z";

const GRADIENT_CSS = "linear-gradient(135deg,#ed6256 0%,#ec4a65 50%,#dd405d 100%)";

function IAStarButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center justify-center overflow-hidden outline-none border-none flex-shrink-0 touch-none cursor-pointer"
      style={{
        borderRadius: 660,
        height: 32,
        width: 32,
        background: GRADIENT_CSS,
        boxShadow: "0px 6px 16px -6px rgba(237,98,86,0.55)",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 11.8929 11.8929" width="12" height="12" fill="none">
        <path d={STAR_PATH} fill="#ffffff" />
      </svg>
    </motion.button>
  );
}

export default function SearchScreen({
  onClose,
  onIAActivate,
}: {
  onClose: () => void;
  onIAActivate: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-white flex flex-col overflow-hidden"
      style={{ fontFamily: "'iFood RC Textos', system-ui, sans-serif" }}
    >
      {/* Header with search bar */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="px-4 pt-14 pb-3"
      >
        <div className="flex items-center gap-2">
          {/* Back button */}
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 border-none bg-transparent cursor-pointer"
          >
            <BackArrow />
          </button>

          {/* Search input */}
          <div className="flex-1 flex items-center gap-2 bg-[#f5f5f5] rounded-full h-11 px-3">
            <SearchIcon />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar em Todo iFood"
              className="flex-1 min-w-0 bg-transparent outline-none border-none text-sm placeholder-gray-400"
              style={{
                color: "#1c1c1e",
                fontFamily: "'iFood RC Textos', system-ui, sans-serif",
              }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center border-none cursor-pointer flex-shrink-0"
              >
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <path d="M1 1L9 9M9 1L1 9" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* IA button */}
          <IAStarButton onClick={onIAActivate} />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="flex-1 overflow-y-auto px-4"
      >
        {/* Recent searches */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-[#141414]" style={{ fontWeight: 500 }}>
              Buscas recentes
            </p>
            <button className="text-xs text-[#eb0033] border-none bg-transparent cursor-pointer" style={{ fontWeight: 500 }}>
              Limpar
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {RECENT_SEARCHES.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.25 }}
                className="flex items-center gap-3 py-3 px-1 border-none bg-transparent cursor-pointer w-full text-left"
              >
                <ClockIcon />
                <span className="text-sm text-[#141414]">{item}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <div>
          <p className="text-sm font-medium text-[#141414] mb-3" style={{ fontWeight: 500 }}>
            Sugestões
          </p>

          <div className="grid grid-cols-2 gap-2">
            {SUGGESTIONS.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + 0.05 * i, duration: 0.25 }}
                className="flex items-center gap-2 px-3 py-3 bg-[#f5f5f5] rounded-xl border-none cursor-pointer"
              >
                <span
                  className="text-[16px] text-[#666]"
                  style={{ fontFamily: ICON_FONT }}
                >
                  {item.icon}
                </span>
                <span className="text-xs text-[#141414]" style={{ fontWeight: 500 }}>
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
