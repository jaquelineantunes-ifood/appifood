function Icon19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <div className="absolute left-0 top-0" data-name="icon">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] whitespace-nowrap">
              <p className="leading-[normal]">{``}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="relative shrink-0 size-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 21C4.70544 21 0 16.2946 0 10.5C0 4.70544 4.70544 0 10.5 0C16.2946 0 21 4.70544 21 10.5C21 16.2946 16.284 21 10.5 21ZM10.5 2.1148C5.87915 2.1148 2.1148 5.87915 2.1148 10.5C2.1148 15.1208 5.87915 18.8852 10.5 18.8852C15.1208 18.8852 18.8852 15.1208 18.8852 10.5C18.8852 5.87915 15.1208 2.1148 10.5 2.1148Z" fill="#666666"/>
        <path d="M10.5897 9.29004C11.3087 9.29004 11.8903 9.87161 11.8903 10.5906C11.8903 11.3097 11.3087 11.8912 10.5897 11.8912C9.87063 11.8912 9.28906 11.3097 9.28906 10.5906C9.28906 9.87161 9.87063 9.29004 10.5897 9.29004Z" fill="#666666"/>
        <path d="M6.49336 16.3052C6.01753 16.3052 5.59457 16.1255 5.28792 15.8188C4.90726 15.4382 4.7275 14.8989 4.80152 14.3596L6.04925 8.4593C6.22901 7.23272 7.23354 6.22819 8.52357 6.02728L14.2124 4.89586C14.7834 4.81127 15.3332 4.98045 15.7139 5.36112C16.0946 5.74178 16.2743 6.28106 16.2003 6.80976V6.85205L15.09 12.5726C14.9103 13.8203 13.9057 14.8249 12.6157 15.0258L6.81058 16.2629C6.70484 16.2841 6.5991 16.2841 6.50393 16.2841L6.49336 16.3052ZM13.9798 7.09526L8.88309 8.11036C8.4707 8.17381 8.1852 8.4593 8.13233 8.82939L7.03263 14.0635L12.2245 12.9533C12.658 12.8898 12.9435 12.5937 12.9964 12.2237L13.9798 7.09526Z" fill="#666666"/>
      </svg>
    </div>
  );
}

function Busca() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0 size-[48px]" data-name="Busca">
      <Group13 />
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#666] text-[10px] text-center whitespace-nowrap">Descobrir</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <div className="absolute left-0 top-0" data-name="icon">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[24px] whitespace-nowrap">
              <p className="leading-[24px]">{``}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <div className="absolute left-0 top-0" data-name="icon">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[24px] whitespace-nowrap">
              <p className="leading-[24px]">{``}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <div className="absolute left-0 top-0" data-name="icon">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[24px] whitespace-nowrap">
              <p className="leading-[24px]">{``}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabItemList({ onTabClick }: { onTabClick: (tab: string) => void }) {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="TabItem list">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <button
            onClick={() => onTabClick("inicio")}
            className="relative shrink-0 size-[48px] hover:opacity-80 transition"
            data-name="Início"
          >
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative size-full">
                <Icon19 />
                <p className="[word-break:break-word] font-['iFood_RC_Textos:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#141414] text-[10px] text-center whitespace-nowrap">Início</p>
              </div>
            </div>
          </button>
          <button
            onClick={() => onTabClick("descobrir")}
            className="hover:opacity-80 transition"
          >
            <Busca />
          </button>
          <button
            onClick={() => onTabClick("promocoes")}
            className="relative shrink-0 size-[48px] hover:opacity-80 transition"
            data-name="Promoções"
          >
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative size-full">
                <Icon20 />
                <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#666] text-[10px] text-center whitespace-nowrap">Promoções</p>
              </div>
            </div>
          </button>
          <button
            onClick={() => onTabClick("pedidos")}
            className="relative shrink-0 size-[48px] hover:opacity-80 transition"
            data-name="Pedidos"
          >
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative size-full">
                <Icon21 />
                <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#666] text-[10px] text-center whitespace-nowrap">Pedidos</p>
              </div>
            </div>
          </button>
          <button
            onClick={() => onTabClick("perfil")}
            className="relative shrink-0 size-[48px] hover:opacity-80 transition"
            data-name="Perfil"
          >
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative size-full">
                <Icon22 />
                <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#666] text-[10px] text-center whitespace-nowrap">Perfil</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TabBar({ onTabClick }: { onTabClick: (tab: string) => void }) {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[2px] items-center left-[-0.5px] w-[376px]" data-name="Tab Bar">
      <div aria-hidden className="absolute border-[#ebebeb] border-solid border-t inset-0 pointer-events-none" />
      <TabItemList onTabClick={onTabClick} />
      <div className="h-[34px] relative shrink-0 w-[375px]" data-name="Home indicator">
        <div className="-translate-x-1/2 absolute bg-[#141414] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
      </div>
    </div>
  );
}
