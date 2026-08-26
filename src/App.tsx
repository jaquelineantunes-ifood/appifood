import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import BuscaNoTopo from "@/imports/BuscaNoTopo/index";
import ModoIAButton from "@/components/ModoIAButton";
import ChatScreen from "@/components/ChatScreen";
import SearchScreen from "@/components/SearchScreen";
import SearchResultsScreen from "@/components/SearchResultsScreen";

type View = "home" | "chat" | "search" | "searchResults";

export default function App() {
  const [view, setView] = useState<View>("home");

  const handleSubmit = (msg: string) => {
    setView("chat");
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-100 p-2">
      <div className="w-full max-w-sm aspect-[9/19.25] relative overflow-hidden rounded-[32px] shadow-2xl bg-white">
        <AnimatePresence mode="wait">
          {view === "home" && (
            <motion.div
              key="home"
              className="absolute inset-0"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <BuscaNoTopo />

              <div className="absolute top-[122px] left-4 right-4 h-12 z-20">
                <ModoIAButton
                  autoCloseDelay={2000}
                  isActive={false}
                  onActivate={() => setView("chat")}
                  onClose={() => {}}
                  onSearchClick={() => setView("search")}
                  onSubmit={handleSubmit}
                />
              </div>
            </motion.div>
          )}

          {view === "chat" && (
            <motion.div
              key="chat"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ChatScreen onClose={() => setView("home")} />
            </motion.div>
          )}

          {view === "search" && (
            <motion.div
              key="search"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <SearchScreen
                onClose={() => setView("home")}
                onIAActivate={() => {
                  setView("home");
                  setTimeout(() => setIaActive(true), 300);
                }}
              />
            </motion.div>
          )}

          {view === "searchResults" && (
            <motion.div
              key="searchResults"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <SearchResultsScreen onClose={() => setView("home")} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
