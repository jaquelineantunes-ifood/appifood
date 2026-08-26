import { useState } from "react";
import { motion } from "motion/react";
import TabBar from "./TabBar";

export default function SearchResultsScreen({ onClose }: { onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState("Hambúrguer");
  const [activeTab, setActiveTab] = useState("todo");

  const handleTabClick = (tab: string) => {
    if (tab === "inicio") onClose();
  };

  return (
    <div className="absolute inset-0 bg-white flex flex-col overflow-hidden" style={{ fontFamily: "'iFood RC Textos', system-ui, sans-serif" }}>
      {/* Status bar */}
      <div className="px-4 pt-2 pb-1 text-xs text-gray-600 flex justify-between bg-gray-100">
        <span>9:41</span>
        <span>📶 🔋</span>
      </div>

      {/* Gray container section */}
      <div className="bg-gray-100 px-4 py-3">
        {/* Search bar */}
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 mb-3">
          <span className="text-gray-400">🔍</span>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm text-gray-900 placeholder-gray-400"
            placeholder="Buscar..."
          />
          <button
            onClick={() => setSearchQuery("")}
            className="text-gray-400 hover:text-gray-600 text-lg"
          >
            ✕
          </button>
        </div>

        {/* Tabs as pills */}
        <div className="flex gap-2 overflow-x-auto pb-3">
          {["todo", "restaurantes", "mercados", "farmacias"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap text-sm font-medium px-3 py-1.5 rounded-full transition ${
                activeTab === tab
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              {tab === "todo" && "Todo iFood"}
              {tab === "restaurantes" && "Restaurantes"}
              {tab === "mercados" && "Mercados"}
              {tab === "farmacias" && "Farmácias"}
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 py-3 overflow-x-auto border-b border-gray-100">
        <div className="flex gap-2 whitespace-nowrap">
          <button className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-xs font-medium hover:bg-gray-200">
            ⇅ Ordenar
          </button>
          <button className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-xs font-medium hover:bg-gray-200">
            Por tipo ▼
          </button>
          <button className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-xs font-medium hover:bg-gray-200">
            Por proteína ▼
          </button>
          <button className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-xs font-medium hover:bg-gray-200">
            Aberto agora
          </button>
          <button className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-xs font-medium hover:bg-gray-200">
            Em até 30 min
          </button>
          <button className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-xs font-medium hover:bg-gray-200">
            Perto de mim
          </button>
          <button className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-xs font-medium hover:bg-gray-200">
            Distância ▼
          </button>
        </div>
      </div>

      {/* Results scroll area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-4">
        {/* Em Restaurante */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'iFood RC Titulos', system-ui, sans-serif", fontWeight: 500 }}>Em Restaurante</h3>

          {/* Restaurant 1 - Six Burger */}
          <div className="mb-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                SIX
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900" style={{ fontWeight: 600 }}>Six Burger</h4>
                <p className="text-xs text-gray-600">⭐ 4,8 (65) • 4,1 km • 45 min • R$ 9,90</p>
              </div>
            </div>

            {/* Products carousel */}
            <div className="overflow-x-auto -mx-4 px-4">
              <div className="flex gap-3 pb-2">
                {[
                  { price: "R$ 35,90", priceOld: "R$ 39,90", desc: "Super Six - O mais pedido!", discount: "-10%" },
                  { price: "R$ 32,90", desc: "Chicken + Fries Grátis" },
                  { price: "R$ 31,90", desc: "Pork Burger - De volta ao cardápio!" },
                ].map((item, i) => (
                  <div key={i} className="flex-shrink-0 w-32">
                    <div className="w-full h-24 bg-gray-300 rounded-lg mb-2 relative">
                      {item.discount && (
                        <div className="absolute bottom-1 right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">
                          {item.discount}
                        </div>
                      )}
                    </div>
                    <p className="font-bold text-gray-900 text-sm">{item.price}</p>
                    {item.priceOld && (
                      <p className="text-xs text-gray-500 line-through">{item.priceOld}</p>
                    )}
                    <p className="text-xs text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Restaurant 2 - Osnir */}
          <div>
            <div className="flex items-start gap-3 mb-3">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold">OSNIR</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Osnir Hamburger - Paraíso</h4>
                <p className="text-xs text-gray-600">⭐ 4,8 (354) • 3,2 km • 35 min • R$ 8,20</p>
              </div>
            </div>

            {/* Products carousel */}
            <div className="overflow-x-auto -mx-4 px-4 pb-4">
              <div className="flex gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-shrink-0 w-32">
                    <div className="w-full h-24 bg-gray-300 rounded-lg mb-2"></div>
                    <p className="font-bold text-gray-900 text-sm">R$ 25,00</p>
                    <p className="text-xs text-gray-700">Produto {i}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <TabBar onTabClick={handleTabClick} />
    </div>
  );
}
