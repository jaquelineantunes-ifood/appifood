import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";

const Carousel = lazy(() => import("@/imports/Carousel/index"));

const FONT = "'iFood RC Textos', system-ui, sans-serif";
const FONT_TITLE = "'iFood RC Titulos', system-ui, sans-serif";

const GRADIENT_CSS = "linear-gradient(135deg,#ed6256 0%,#ec4a65 50%,#dd405d 100%)";

const STAR_PATH =
  "M5.94608 0.495553C6.29296 3.27055 8.62197 5.59957 11.397 5.94645C8.62197 6.29332 6.29296 8.62234 5.94608 11.3973C5.5992 8.62234 3.27019 6.29332 0.495187 5.94645C3.27019 5.59957 5.5992 3.27055 5.94608 0.495553Z";

// Header icons
function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.0156 4.89062L7.85938 7.75L9.98438 10.4219C10.0677 10.526 10.099 10.6458 10.0781 10.7812C10.0677 10.9167 10.0104 11.0312 9.90625 11.125L9.39062 11.5312C9.27604 11.625 9.15104 11.6667 9.01562 11.6562C8.88021 11.6354 8.77083 11.5677 8.6875 11.4531L6 8.07812C5.92708 7.99479 5.89062 7.89583 5.89062 7.78125C5.89062 7.66667 5.92188 7.5625 5.98438 7.46875L8.67188 3.89062C8.75521 3.77604 8.86458 3.70833 9 3.6875C9.13542 3.66667 9.25521 3.69792 9.35938 3.78125L9.89062 4.1875C9.99479 4.28125 10.0521 4.39583 10.0625 4.53125C10.0729 4.66667 10.0417 4.78646 9.96875 4.89062H10.0156Z" fill="#141414" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13.2969 4.01562C13.5469 4.43229 13.7344 4.875 13.8594 5.34375C13.9948 5.80208 14.0625 6.28125 14.0625 6.78125C14.0625 7.29167 13.9948 7.77604 13.8594 8.23438C13.7344 8.69271 13.5469 9.11979 13.2969 9.51562C13.0469 9.92188 12.7448 10.2865 12.3906 10.6094C12.0469 10.9219 11.6458 11.1875 11.1875 11.4062C10.6042 11.6979 9.95312 11.8958 9.23438 12C8.51562 12.1042 7.75521 12.099 6.95312 11.9844L4.98438 13.4531C4.85938 13.5365 4.72396 13.5625 4.57812 13.5312C4.44271 13.5 4.33854 13.4219 4.26562 13.2969C4.20312 13.1719 4.19792 13.0417 4.25 12.9062L4.89062 11.1719C4.39062 10.8385 3.95312 10.4479 3.57812 10C3.21354 9.55208 2.92188 9.0625 2.70312 8.53125C2.48438 8 2.375 7.42708 2.375 6.8125C2.375 6.19792 2.48438 5.625 2.70312 5.09375C2.92188 4.5625 3.21354 4.08854 3.57812 3.67188C3.95312 3.25521 4.39062 2.89583 4.89062 2.59375C5.39062 2.29167 5.9375 2.0625 6.53125 1.90625C7.125 1.75 7.75 1.67188 8.40625 1.67188C9.0625 1.67188 9.67708 1.75 10.25 1.90625C10.8333 2.0625 11.3698 2.29167 11.8594 2.59375C12.3594 2.89583 12.7969 3.25521 13.1719 3.67188L13.2969 4.01562Z" fill="#141414" />
    </svg>
  );
}

function HistoricoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5.15625 4.82812C5.15625 5.03646 5.11458 5.23438 5.03125 5.42188C4.95833 5.60938 4.84896 5.78125 4.70312 5.9375C4.54688 6.09375 4.375 6.21354 4.1875 6.29688C4 6.36979 3.79688 6.40625 3.57812 6.40625C3.35938 6.40625 3.15625 6.36979 2.96875 6.29688C2.78125 6.21354 2.60938 6.09375 2.45312 5.9375C2.30729 5.78125 2.19271 5.60938 2.10938 5.42188C2.03646 5.23438 2 5.03646 2 4.82812C2 4.60938 2.03646 4.40625 2.10938 4.21875C2.19271 4.03125 2.30729 3.86458 2.45312 3.71875C2.60938 3.5625 2.78125 3.44271 2.96875 3.35938C3.15625 3.27604 3.35938 3.23438 3.57812 3.23438C3.79688 3.23438 4 3.27604 4.1875 3.35938C4.375 3.44271 4.54688 3.5625 4.70312 3.71875C4.84896 3.86458 4.95833 4.03125 5.03125 4.21875C5.11458 4.40625 5.15625 4.60938 5.15625 4.82812ZM5.15625 8C5.15625 8.20833 5.11458 8.40625 5.03125 8.59375C4.95833 8.78125 4.84896 8.95312 4.70312 9.10938C4.54688 9.25521 4.375 9.36979 4.1875 9.45312C4 9.52604 3.79688 9.5625 3.57812 9.5625C3.35938 9.5625 3.15625 9.52604 2.96875 9.45312C2.78125 9.36979 2.60938 9.25521 2.45312 9.10938C2.30729 8.95312 2.19271 8.78125 2.10938 8.59375C2.03646 8.40625 2 8.20833 2 8C2 7.79167 2.03646 7.58854 2.10938 7.39062C2.19271 7.20312 2.30729 7.03646 2.45312 6.89062C2.60938 6.73438 2.78125 6.61458 2.96875 6.53125C3.15625 6.44792 3.35938 6.40625 3.57812 6.40625C3.79688 6.40625 4 6.44792 4.1875 6.53125C4.375 6.61458 4.54688 6.73438 4.70312 6.89062C4.84896 7.03646 4.95833 7.20312 5.03125 7.39062C5.11458 7.58854 5.15625 7.79167 5.15625 8ZM14 4.5V5.15625C14 5.26042 13.9635 5.34896 13.8906 5.42188C13.8177 5.49479 13.7292 5.53125 13.625 5.53125H6.53125C6.42708 5.53125 6.33854 5.49479 6.26562 5.42188C6.19271 5.34896 6.15625 5.26042 6.15625 5.15625V4.5C6.15625 4.39583 6.19271 4.30729 6.26562 4.23438C6.33854 4.16146 6.42708 4.125 6.53125 4.125H13.625C13.7292 4.125 13.8177 4.16146 13.8906 4.23438C13.9635 4.30729 14 4.39583 14 4.5ZM14 7.67188V8.32812C14 8.43229 13.9635 8.52083 13.8906 8.59375C13.8177 8.66667 13.7292 8.70312 13.625 8.70312H6.53125C6.42708 8.70312 6.33854 8.66667 6.26562 8.59375C6.19271 8.52083 6.15625 8.43229 6.15625 8.32812V7.67188C6.15625 7.56771 6.19271 7.47917 6.26562 7.40625C6.33854 7.33333 6.42708 7.29688 6.53125 7.29688H13.625C13.7292 7.29688 13.8177 7.33333 13.8906 7.40625C13.9635 7.47917 14 7.56771 14 7.67188Z" fill="#141414" />
    </svg>
  );
}

function DescobrirIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 21 21" fill="none">
      <path d="M10.5 21C4.70544 21 0 16.2946 0 10.5C0 4.70544 4.70544 0 10.5 0C16.2946 0 21 4.70544 21 10.5C21 16.2946 16.284 21 10.5 21ZM10.5 2.1148C5.87915 2.1148 2.1148 5.87915 2.1148 10.5C2.1148 15.1208 5.87915 18.8852 10.5 18.8852C15.1208 18.8852 18.8852 15.1208 18.8852 10.5C18.8852 5.87915 15.1208 2.1148 10.5 2.1148Z" fill="#141414" />
      <path d="M10.5897 9.29004C11.3087 9.29004 11.8903 9.87161 11.8903 10.5906C11.8903 11.3096 11.3087 11.8912 10.5897 11.8912C9.87076 11.8912 9.28919 11.3096 9.28919 10.5906C9.28919 9.87161 9.87076 9.29004 10.5897 9.29004Z" fill="#141414" />
    </svg>
  );
}

function PlusButton() {
  return (
    <button
      style={{
        width: 36, height: 36,
        borderRadius: 999,
        background: "#f5f5f5",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
        <path d="M15.7852 8.36914V9.125C15.7852 9.23047 15.7441 9.31836 15.6621 9.38867C15.5918 9.45899 15.5098 9.49414 15.416 9.49414L9.59766 9.49414L9.59766 15.1543C9.59766 15.2598 9.55664 15.3535 9.47461 15.4355C9.4043 15.5059 9.32226 15.541 9.22851 15.541H8.47266C8.36719 15.541 8.2793 15.5059 8.20898 15.4355C8.13867 15.3535 8.10351 15.2598 8.10351 15.1543L8.10351 9.49414L2.58398 9.49414C2.49023 9.49414 2.40234 9.45899 2.32031 9.38867C2.25 9.31836 2.21484 9.23047 2.21484 9.125V8.36914C2.21484 8.26367 2.25 8.17578 2.32031 8.10547C2.40234 8.03516 2.49023 8 2.58398 8L8.10351 8L8.10351 2.33985C8.10351 2.23438 8.13867 2.14649 8.20898 2.07617C8.2793 2.00586 8.36719 1.9707 8.47266 1.9707L9.22851 1.9707C9.32226 1.9707 9.4043 2.00586 9.47461 2.07617C9.55664 2.14649 9.59766 2.23438 9.59766 2.33985L9.59766 8L15.416 8C15.5098 8 15.5918 8.03516 15.6621 8.10547C15.7441 8.17578 15.7852 8.26367 15.7852 8.36914Z" fill="#141414" />
      </svg>
    </button>
  );
}

function MicButton() {
  return (
    <button
      style={{
        width: 36, height: 36,
        borderRadius: 999,
        background: "#f5f5f5",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <path d="M14.9023 8.66797C15.0846 8.66797 15.2409 8.73307 15.3711 8.86328C15.5013 8.99349 15.5664 9.14974 15.5664 9.33203C15.5664 10.0091 15.4557 10.6471 15.2344 11.2461C15 11.8581 14.6745 12.3984 14.2578 12.8672C13.8542 13.3359 13.3789 13.7266 12.832 14.0391C12.2852 14.3385 11.6862 14.5339 11.0352 14.625V15.4648C11.0352 15.6471 10.9701 15.8034 10.8398 15.9336C10.7096 16.0638 10.5534 16.1289 10.3711 16.1289C10.1888 16.1289 10.0326 16.0638 9.90234 15.9336C9.77214 15.8034 9.70703 15.6471 9.70703 15.4648V14.625C9.05599 14.5339 8.45703 14.3385 7.91016 14.0391C7.36328 13.7266 6.88151 13.3359 6.46484 12.8672C6.0612 12.3984 5.74219 11.8581 5.50781 11.2461C5.28646 10.6471 5.17578 10.0091 5.17578 9.33203C5.17578 9.14974 5.24089 8.99349 5.37109 8.86328C5.5013 8.73307 5.65755 8.66797 5.83984 8.66797C6.02214 8.66797 6.17839 8.73307 6.30859 8.86328C6.4388 8.99349 6.50391 9.14974 6.50391 9.33203C6.50391 9.89193 6.60156 10.4128 6.79687 10.8945C7.00521 11.3763 7.28516 11.7995 7.63672 12.1641C7.98828 12.5286 8.39844 12.8151 8.86719 13.0234C9.33594 13.2318 9.83724 13.3359 10.3711 13.3359C10.9049 13.3359 11.4062 13.2318 11.875 13.0234C12.3437 12.8151 12.7539 12.5286 13.1055 12.1641C13.457 11.7995 13.7305 11.3763 13.9258 10.8945C14.1341 10.4128 14.2383 9.89193 14.2383 9.33203C14.2383 9.14974 14.3034 8.99349 14.4336 8.86328C14.5638 8.73307 14.7201 8.66797 14.9023 8.66797ZM10.3711 3.12109C11.1784 3.12109 11.8685 3.40755 12.4414 3.98047C13.0143 4.55339 13.3008 5.25 13.3008 6.07031V9.09766C13.3008 9.91797 13.0143 10.6146 12.4414 11.1875C11.8685 11.7604 11.1784 12.0469 10.3711 12.0469C9.5638 12.0469 8.8737 11.7604 8.30078 11.1875C7.72786 10.6146 7.44141 9.91797 7.44141 9.09766L7.44141 6.07031C7.44141 5.25 7.72786 4.55339 8.30078 3.98047C8.8737 3.40755 9.5638 3.12109 10.3711 3.12109Z" fill="#141414" />
      </svg>
    </button>
  );
}

function SendButton({ disabled, onClick }: { disabled: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.9 }}
      style={{
        width: 36, height: 36,
        borderRadius: 999,
        background: disabled ? "#e5e5e5" : GRADIENT_CSS,
        border: "none",
        cursor: disabled ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "background 0.2s",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M3.5 10L16.5 10M16.5 10L10.5 4M16.5 10L10.5 16" stroke={disabled ? "#a3a3a3" : "#fff"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.button>
  );
}

function ThinkingDots() {
  return (
    <span className="inline-flex gap-0.5 ml-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-block w-1 h-1 rounded-full bg-gray-400"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </span>
  );
}

type Phase = "idle" | "thinking" | "results";

export default function ChatScreen({ onClose }: { onClose: () => void }) {
  const [chatValue, setChatValue] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [userQuery, setUserQuery] = useState("");

  const handleSend = () => {
    if (!chatValue.trim()) return;
    setUserQuery(chatValue.trim());
    setChatValue("");
    setPhase("thinking");
    setTimeout(() => setPhase("results"), 3000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="absolute inset-0 flex flex-col overflow-hidden"
      style={{ background: "#ffffff", fontFamily: FONT }}
    >
      {/* Header */}
      <div style={{ background: "#ffffff" }} className="px-4 pt-12 pb-3">
        {/* Pills row */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="flex items-center justify-between"
        >
          {/* Left pill: star + title + address */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 border-none cursor-pointer"
            style={{
              background: "#F5F5F5",
              borderRadius: 999,
              height: 40,
              paddingLeft: 12,
              paddingRight: 16,
            }}
          >
            {/* Star icon */}
            <svg viewBox="0 0 11.8929 11.8929" width="14" height="14" fill="none">
              <defs>
                <linearGradient id="header-star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ed6256" />
                  <stop offset="50%" stopColor="#ec4a65" />
                  <stop offset="100%" stopColor="#dd405d" />
                </linearGradient>
              </defs>
              <path d="M5.94608 0.495553C6.29296 3.27055 8.62197 5.59957 11.397 5.94645C8.62197 6.29332 6.29296 8.62234 5.94608 11.3973C5.5992 8.62234 3.27019 6.29332 0.495187 5.94645C3.27019 5.59957 5.5992 3.27055 5.94608 0.495553Z" fill="url(#header-star-grad)" />
            </svg>
            <div className="flex flex-col items-start" style={{ gap: 4 }}>
              <span className="text-[#141414] text-xs font-medium" style={{ fontFamily: FONT_TITLE }}>
                Modo IA
              </span>
              <div className="flex items-center gap-1">
                <span style={{ color: "#a3a3a3", fontSize: 10, lineHeight: 1 }}>
                  R. Haddock Lobo, 595
                </span>
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <path d="M3 4L5 6L7 4" stroke="#a3a3a3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </button>

          {/* Right pill: action icons */}
          <div
            className="flex items-center gap-3"
            style={{
              background: "#F5F5F5",
              borderRadius: 999,
              height: 40,
              paddingLeft: 14,
              paddingRight: 14,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 21 21" fill="none">
              <path d="M10.5 21C4.70544 21 0 16.2946 0 10.5C0 4.70544 4.70544 0 10.5 0C16.2946 0 21 4.70544 21 10.5C21 16.2946 16.284 21 10.5 21ZM10.5 2.1148C5.87915 2.1148 2.1148 5.87915 2.1148 10.5C2.1148 15.1208 5.87915 18.8852 10.5 18.8852C15.1208 18.8852 18.8852 15.1208 18.8852 10.5C18.8852 5.87915 15.1208 2.1148 10.5 2.1148Z" fill="#141414" />
              <path d="M10.5897 9.29004C11.3087 9.29004 11.8903 9.87161 11.8903 10.5906C11.8903 11.3096 11.3087 11.8912 10.5897 11.8912C9.87076 11.8912 9.28919 11.3096 9.28919 10.5906C9.28919 9.87161 9.87076 9.29004 10.5897 9.29004Z" fill="#141414" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13.2969 4.01562C13.5469 4.43229 13.7344 4.875 13.8594 5.34375C13.9948 5.80208 14.0625 6.28125 14.0625 6.78125C14.0625 7.29167 13.9948 7.77604 13.8594 8.23438C13.7344 8.69271 13.5469 9.11979 13.2969 9.51562C13.0469 9.92188 12.7448 10.2865 12.3906 10.6094C12.0469 10.9219 11.6458 11.1875 11.1875 11.4062C10.6042 11.6979 9.95312 11.8958 9.23438 12C8.51562 12.1042 7.75521 12.099 6.95312 11.9844L4.98438 13.4531C4.85938 13.5365 4.72396 13.5625 4.57812 13.5312C4.44271 13.5 4.33854 13.4219 4.26562 13.2969C4.20312 13.1719 4.19792 13.0417 4.25 12.9062L4.89062 11.1719C4.39062 10.8385 3.95312 10.4479 3.57812 10C3.21354 9.55208 2.92188 9.0625 2.70312 8.53125C2.48438 8 2.375 7.42708 2.375 6.8125C2.375 6.19792 2.48438 5.625 2.70312 5.09375C2.92188 4.5625 3.21354 4.08854 3.57812 3.67188C3.95312 3.25521 4.39062 2.89583 4.89062 2.59375C5.39062 2.29167 5.9375 2.0625 6.53125 1.90625C7.125 1.75 7.75 1.67188 8.40625 1.67188C9.0625 1.67188 9.67708 1.75 10.25 1.90625C10.8333 2.0625 11.3698 2.29167 11.8594 2.59375C12.3594 2.89583 12.7969 3.25521 13.1719 3.67188L13.2969 4.01562Z" fill="#141414" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.15625 4.82812C5.15625 5.03646 5.11458 5.23438 5.03125 5.42188C4.95833 5.60938 4.84896 5.78125 4.70312 5.9375C4.54688 6.09375 4.375 6.21354 4.1875 6.29688C4 6.36979 3.79688 6.40625 3.57812 6.40625C3.35938 6.40625 3.15625 6.36979 2.96875 6.29688C2.78125 6.21354 2.60938 6.09375 2.45312 5.9375C2.30729 5.78125 2.19271 5.60938 2.10938 5.42188C2.03646 5.23438 2 5.03646 2 4.82812C2 4.60938 2.03646 4.40625 2.10938 4.21875C2.19271 4.03125 2.30729 3.86458 2.45312 3.71875C2.60938 3.5625 2.78125 3.44271 2.96875 3.35938C3.15625 3.27604 3.35938 3.23438 3.57812 3.23438C3.79688 3.23438 4 3.27604 4.1875 3.35938C4.375 3.44271 4.54688 3.5625 4.70312 3.71875C4.84896 3.86458 4.95833 4.03125 5.03125 4.21875C5.11458 4.40625 5.15625 4.60938 5.15625 4.82812ZM5.15625 8C5.15625 8.20833 5.11458 8.40625 5.03125 8.59375C4.95833 8.78125 4.84896 8.95312 4.70312 9.10938C4.54688 9.25521 4.375 9.36979 4.1875 9.45312C4 9.52604 3.79688 9.5625 3.57812 9.5625C3.35938 9.5625 3.15625 9.52604 2.96875 9.45312C2.78125 9.36979 2.60938 9.25521 2.45312 9.10938C2.30729 8.95312 2.19271 8.78125 2.10938 8.59375C2.03646 8.40625 2 8.20833 2 8C2 7.79167 2.03646 7.58854 2.10938 7.39062C2.19271 7.20312 2.30729 7.03646 2.45312 6.89062C2.60938 6.73438 2.78125 6.61458 2.96875 6.53125C3.15625 6.44792 3.35938 6.40625 3.57812 6.40625C3.79688 6.40625 4 6.44792 4.1875 6.53125C4.375 6.61458 4.54688 6.73438 4.70312 6.89062C4.84896 7.03646 4.95833 7.20312 5.03125 7.39062C5.11458 7.58854 5.15625 7.79167 5.15625 8ZM14 4.5V5.15625C14 5.26042 13.9635 5.34896 13.8906 5.42188C13.8177 5.49479 13.7292 5.53125 13.625 5.53125H6.53125C6.42708 5.53125 6.33854 5.49479 6.26562 5.42188C6.19271 5.34896 6.15625 5.26042 6.15625 5.15625V4.5C6.15625 4.39583 6.19271 4.30729 6.26562 4.23438C6.33854 4.16146 6.42708 4.125 6.53125 4.125H13.625C13.7292 4.125 13.8177 4.16146 13.8906 4.23438C13.9635 4.30729 14 4.39583 14 4.5ZM14 7.67188V8.32812C14 8.43229 13.9635 8.52083 13.8906 8.59375C13.8177 8.66667 13.7292 8.70312 13.625 8.70312H6.53125C6.42708 8.70312 6.33854 8.66667 6.26562 8.59375C6.19271 8.52083 6.15625 8.43229 6.15625 8.32812V7.67188C6.15625 7.56771 6.19271 7.47917 6.26562 7.40625C6.33854 7.33333 6.42708 7.29688 6.53125 7.29688H13.625C13.7292 7.29688 13.8177 7.33333 13.8906 7.40625C13.9635 7.47917 14 7.56771 14 7.67188Z" fill="#141414" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto px-4 flex flex-col">
        <AnimatePresence mode="wait">
          {/* Idle: star + prompt */}
          {phase === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center gap-4"
            >
              <motion.svg
                viewBox="0 0 11.8929 11.8929"
                width="40"
                height="40"
                fill="none"
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <defs>
                  <linearGradient id="idle-star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ed6256" />
                    <stop offset="50%" stopColor="#ec4a65" />
                    <stop offset="100%" stopColor="#dd405d" />
                  </linearGradient>
                </defs>
                <path d={STAR_PATH} fill="url(#idle-star-grad)" />
              </motion.svg>
              <p className="text-gray-400 text-sm text-center">
                Pergunte qualquer coisa sobre o iFood
              </p>
            </motion.div>
          )}

          {/* Thinking */}
          {phase === "thinking" && (
            <motion.div
              key="thinking"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex flex-col gap-4 pt-6"
            >
              {/* User bubble */}
              <div className="flex justify-end">
                <div className="bg-[#f5f5f5] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-[#141414] m-0">{userQuery}</p>
                </div>
              </div>

              {/* AI thinking */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                className="flex items-start gap-2"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: GRADIENT_CSS }}
                >
                  <svg viewBox="0 0 11.8929 11.8929" width="10" height="10" fill="none">
                    <path d={STAR_PATH} fill="#fff" />
                  </svg>
                </div>

                <motion.div
                  className="bg-[#fafafa] border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-sm text-gray-500 m-0 flex items-center">
                    <motion.svg
                      viewBox="0 0 11.8929 11.8929"
                      width="12"
                      height="12"
                      fill="none"
                      className="mr-2 flex-shrink-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <path d={STAR_PATH} fill="#ec4a65" />
                    </motion.svg>
                    Vasculhando base de conhecimento
                    <ThinkingDots />
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* Results */}
          {phase === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex flex-col gap-4 pt-6"
            >
              {/* User bubble */}
              <div className="flex justify-end">
                <div className="bg-[#f5f5f5] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-[#141414] m-0">{userQuery}</p>
                </div>
              </div>

              {/* AI response */}
              <div className="flex items-start gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: GRADIENT_CSS }}
                >
                  <svg viewBox="0 0 11.8929 11.8929" width="10" height="10" fill="none">
                    <path d={STAR_PATH} fill="#fff" />
                  </svg>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 25 }}
                  className="flex-1"
                >
                  <div className="bg-[#fafafa] border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 mb-3">
                    <p className="text-sm text-[#141414] m-0 leading-relaxed">
                      Encontrei alguns resultados pra você! Veja o que achei:
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, type: "spring", stiffness: 280, damping: 26 }}
                  >
                    <Suspense fallback={null}>
                      <Carousel />
                    </Suspense>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom input */}
      <motion.div
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 30, delay: 0.08 }}
        className="px-3 pb-6 pt-2"
      >
        <div
          className="flex items-center gap-2 h-14 px-2 rounded-full w-full"
          style={{
            background: "#ffffff",
            boxShadow: "0px 2px 4.2px 0px rgba(159,12,14,0.25), 0px 20px 87.8px 0px rgba(235,0,51,0.5)",
            fontFamily: FONT,
          }}
        >
          <PlusButton />

          <input
            value={chatValue}
            onChange={(e) => setChatValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Peça a IA do iFood"
            className="flex-1 min-w-0 bg-transparent outline-none border-none text-sm placeholder-gray-400"
            style={{ color: "#141414", fontFamily: FONT }}
          />

          {chatValue.trim() ? (
            <SendButton disabled={false} onClick={handleSend} />
          ) : (
            <MicButton />
          )}
        </div>
      </motion.div>
    </div>
  );
}
