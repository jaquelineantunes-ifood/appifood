import svgPaths from "./svg-brzt9qmkif";
import imgImage from "./44dd74f9932fa5e7d04ebdc97c0abb870e754730.png";
import imgImage1 from "./45b15a00ac73be30c6cf278a1dc43bc9f5347d35.png";
import imgImage2 from "./25b1d21c87a35d97f7275487d9afce70078c4304.png";
import imgMerchantThumb from "./d208b3666cacfe0452704f716c726e7468bdb559.png";
import imgImage3 from "./7020af9adce83de2353fd724b49f37be7eca4a3b.png";
import imgMerchantThumb1 from "./d8471cace61c89599f91987cc66fa03e6e91841e.png";
import imgImage4 from "./0d1d50062c9b7f8fa412417ea995bcef38460e54.png";
import imgMerchantThumb2 from "./a1f5bc0cdb76a123326a8d2d3889dfc7614bc160.png";
import imgBrilhos1 from "./dac74095ce1b49894b29a1dab55dce2be6ae3e4d.png";
import imgOverlay from "./a7bfd3b767759a0bb2fb861f3132db7c47824ff5.png";
type BatteryProps = {
  className?: string;
  capacity?: "Full";
  theme?: "Light";
};

function Battery({ className, capacity = "Full", theme = "Light" }: BatteryProps) {
  return (
    <div className={className || "h-[12px] overflow-clip relative w-[24px]"}>
      <div className="absolute inset-[0_12.5%_0_0]" data-name="border">
        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 21.0015 12" width="21.0015">
          <path d={svgPaths.p26365380} fill="black" id="border" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bg-black inset-[16.67%_20.83%_16.67%_8.33%] rounded-[1px]" data-name="indicator" />
      <div className="absolute inset-[33.33%_0_33.33%_91.67%]" data-name="cap">
        <svg className="absolute block inset-0 size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 2 4" width="2">
          <path d={svgPaths.p248f4800} fill="black" id="cap" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}
type WifiProps = {
  className?: string;
  signalStrength?: "Full";
  theme?: "Light";
};

function Wifi({ className, signalStrength = "Full", theme = "Light" }: WifiProps) {
  return (
    <div className={className || "h-[11.619px] overflow-clip relative w-[16px]"}>
      <div className="absolute inset-[69.84%_34.38%_-0.01%_34.32%]" data-name="Bar 1">
        <svg className="absolute block inset-0 size-full" fill="none" height="3.5052" preserveAspectRatio="none" viewBox="0 0 5.00764 3.5052" width="5.00764">
          <path d={svgPaths.p3761f300} fill="black" id="Bar 1" />
        </svg>
      </div>
      <div className="absolute inset-[33.73%_18.68%_31.83%_18.75%]" data-name="Bar 2">
        <svg className="absolute block inset-0 size-full" fill="none" height="4.00134" preserveAspectRatio="none" viewBox="0 0 10.0118 4.00134" width="10.0118">
          <path d={svgPaths.p2a184900} fill="black" id="Bar 2" />
        </svg>
      </div>
      <div className="absolute inset-[0.01%_0.01%_56.96%_-0.02%]" data-name="Bar 3">
        <svg className="absolute block inset-0 size-full" fill="none" height="4.99924" preserveAspectRatio="none" viewBox="0 0 16.0014 4.99924" width="16.0014">
          <path d={svgPaths.p296b2880} fill="black" id="Bar 3" />
        </svg>
      </div>
    </div>
  );
}
type CellularSignalProps = {
  className?: string;
  signalStrength?: "Full";
  theme?: "Light";
};

function CellularSignal({ className, signalStrength = "Full", theme = "Light" }: CellularSignalProps) {
  return (
    <div className={className || "h-[10px] relative w-[18px]"}>
      <div className="absolute inset-[60%_83.33%_0_0]" data-name="Bar 1">
        <svg className="absolute block inset-0 size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 3 4" width="3">
          <path d={svgPaths.p17f47800} fill="black" id="Bar 1" />
        </svg>
      </div>
      <div className="absolute inset-[40%_55.56%_0_27.78%]" data-name="Bar 2">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 3 6" width="3">
          <path d={svgPaths.p18ec7000} fill="black" id="Bar 2" />
        </svg>
      </div>
      <div className="absolute inset-[20%_27.78%_0_55.56%]" data-name="Bar 3">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 3 8" width="3">
          <path d={svgPaths.p2ffd5e80} fill="black" id="Bar 3" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_0_83.33%]" data-name="Bar 4">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 3 10" width="3">
          <path d={svgPaths.p1cde4f80} fill="black" id="Bar 4" />
        </svg>
      </div>
    </div>
  );
}
type ActionButtonProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant5";
};

function ActionButton({ className, property1 = "Default" }: ActionButtonProps) {
  if (property1 === "Variant5") {
    return (
      <div className={className || "bg-[#ffebef] relative rounded-[9999px] size-[32px]"} data-name="Property 1=Variant5">
        <div aria-hidden className="absolute border border-[#ff61dd] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
            <div className="relative shrink-0" data-name="icon">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                  <div className="[word-break:break-word] bg-clip-text flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[20px] text-[20px] text-[transparent]" style={{ backgroundImage: "linear-gradient(143.85134753539387deg, rgb(255, 97, 221) 8.3824%, rgb(255, 0, 43) 86.066%)" }}>
                    <p className="leading-[20px]">{`\uE83B`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (property1 === "Variant2") {
    return (
      <div className={className || "relative rounded-[20px] size-[32px]"} data-name="Property 1=Variant2">
        <div aria-hidden className="absolute border-[#ebebeb] border-l border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
            <div className="content-stretch flex gap-[10px] items-start relative rounded-[9999px] shrink-0" data-name=".baseActionButtonSizes">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".baseActionButtonIcons">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
                  <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">
                    <p className="leading-[20px]">{`\uE83B`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute contents left-[34.86%] right-[39.88%] top-[calc(50%+0.5px)]">
              <div className="-translate-y-1/2 absolute aspect-[125/125] left-[44.1%] opacity-0 right-[39.88%] top-[calc(50%+1.44px)]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="5.12674" preserveAspectRatio="none" viewBox="0 0 5.12674 5.12674" width="5.12674">
                  <path d={svgPaths.p1052d400} fill="url(#paint0_linear_0_229)" id="Vector" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_229" x1="2.56337" x2="2.56337" y1="0" y2="5.12674">
                      <stop stopColor="#FF477C" />
                      <stop offset="1" stopColor="#FF0048" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="-translate-y-1/2 absolute aspect-[125/125] left-[34.86%] opacity-0 right-[53.75%] top-[calc(50%-1.18px)]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="3.6459" preserveAspectRatio="none" viewBox="0 0 3.6459 3.6459" width="3.6459">
                  <path d={svgPaths.p2700300} fill="url(#paint0_linear_0_243)" id="Vector" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_243" x1="-0.0555468" x2="2.78286" y1="-0.48829" y2="3.3972">
                      <stop stopColor="#FF61DD" />
                      <stop offset="1" stopColor="#FF002B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button className={className || "cursor-pointer relative rounded-[20px] size-[32px]"} data-name="Property 1=Default">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
          <div className="content-stretch flex gap-[10px] items-start relative rounded-[9999px] shrink-0" data-name=".baseActionButtonSizes">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".baseActionButtonIcons">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
                <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[20px] text-left whitespace-nowrap">
                  <p className="leading-[20px]">{`\uE83B`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function Content() {
  return (
    <div className="bg-[#e9e9e9] content-center flex flex-wrap gap-y-[4px] items-center justify-end max-w-[274px] min-h-[40px] pl-[12px] pr-[16px] py-[8px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] rounded-tr-[4px] shrink-0" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['iFood_RC_Textos:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#141414] text-[16px]">Shampoo</p>
    </div>
  );
}

function UserMessage() {
  return (
    <div className="content-stretch flex items-end justify-end px-[16px] relative shrink-0 w-[393px]" data-name="User message">
      <Content />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Medium',sans-serif] leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[18px] text-ellipsis w-full whitespace-nowrap">Uso diário e equilibrio</p>
    </div>
  );
}

function AgentMessage() {
  return (
    <div className="relative shrink-0 w-full" data-name="Agent message">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function ChatMessages() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-[-314px] w-[393px]" data-name="Chat messages">
      <UserMessage />
      <AgentMessage />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#e9e9e9] content-center flex flex-wrap gap-y-[4px] items-center justify-end max-w-[274px] min-h-[40px] pl-[12px] pr-[16px] py-[8px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] rounded-tr-[4px] shrink-0" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['iFood_RC_Textos:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#141414] text-[16px]">Quero um anticaspa para o dia a dia</p>
    </div>
  );
}

function UserMessage1() {
  return (
    <div className="content-stretch flex items-end justify-end px-[20px] relative shrink-0 w-full" data-name="User message">
      <Content1 />
    </div>
  );
}

function ChatMessages1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[140px]" data-name="Chat messages">
      <UserMessage1 />
    </div>
  );
}

function MerchantThumb() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name=".merchant_thumb">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgMerchantThumb} width="24" />
    </div>
  );
}

function BaseTag() {
  return (
    <div className="bg-white flex-[1_0_0] h-[20px] min-w-px relative rounded-[9999px]" data-name=".baseTag">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] py-[4px] relative size-full">
          <MerchantThumb />
        </div>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Tag">
      <BaseTag />
    </div>
  );
}

function Stamps() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[12px] top-[12px] w-[20px]" data-name="Stamps">
      <Tag />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 size-[40px]" data-name="Container">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[40px]" data-name="icon-plus">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eb0033] text-[16px] whitespace-nowrap">
                <p className="leading-[16px]">{`\uE86F`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function ImageCard() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[140px]" data-name="Image-Card">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mix-blend-multiply size-[120px] top-1/2" data-name="image">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
        </div>
      </div>
      <div className="absolute bg-white left-[109px] rounded-[9999px] top-[10px]" data-name=".ads_tips">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[4px] relative size-full">
            <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a3a3a3] text-[10px] whitespace-nowrap">Ad</p>
          </div>
        </div>
      </div>
      <Stamps />
      <div className="absolute bottom-[12px] left-[12px] right-[12px]" data-name="Counter">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end relative size-full">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageItem() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[140px] min-w-[140px] relative shrink-0" data-name=".imageItem">
      <ImageCard />
    </div>
  );
}

function Normal() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Normal">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">R$ 15,25</p>
    </div>
  );
}

function Prices() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Prices">
      <Normal />
    </div>
  );
}

function PricePromo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Price & Promo">
      <Prices />
    </div>
  );
}

function ItemName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item Name">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[14px] text-ellipsis w-full">Shampoo Clássico 300 ml Neutrox</p>
    </div>
  );
}

function DeliveryInfos() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Delivery Infos">
      <div className="relative shrink-0" data-name=".baseDeliveryTime">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[2px] items-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">25 min</p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px] text-center w-[6px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="relative shrink-0" data-name=".baseDeliveryPrice">
        <div className="content-stretch flex items-start relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">
            <p className="leading-[16px]">R$ 7,99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemDeliveryInfos() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Item & Delivery infos">
      <ItemName />
      <DeliveryInfos />
    </div>
  );
}

function BaseInfoItemCard() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-[140px]" data-name=".base-info-item-card">
      <PricePromo />
      <ItemDeliveryInfos />
    </div>
  );
}

function CardItemCatalog() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="card-item-catalog">
      <ImageItem />
      <BaseInfoItemCard />
    </div>
  );
}

function MerchantThumb1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name=".merchant_thumb">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgMerchantThumb1} width="24" />
    </div>
  );
}

function BaseTag1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[20px] min-w-px relative rounded-[9999px]" data-name=".baseTag">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] py-[4px] relative size-full">
          <MerchantThumb1 />
        </div>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Tag">
      <BaseTag1 />
    </div>
  );
}

function Stamps1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[12px] top-[12px] w-[20px]" data-name="Stamps">
      <Tag1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 size-[40px]" data-name="Container">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[40px]" data-name="icon-plus">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eb0033] text-[16px] whitespace-nowrap">
                <p className="leading-[16px]">{`\uE86F`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function ImageCard1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[140px]" data-name="Image-Card">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mix-blend-multiply size-[120px] top-1/2" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <Stamps1 />
      <div className="absolute bottom-[12px] left-[12px] right-[12px]" data-name="Counter">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end relative size-full">
            <Container1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageItem1() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[140px] min-w-[140px] relative shrink-0" data-name=".imageItem">
      <ImageCard1 />
    </div>
  );
}

function Normal1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Normal">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">R$ 15,19</p>
    </div>
  );
}

function Prices1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Prices">
      <Normal1 />
    </div>
  );
}

function PricePromo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Price & Promo">
      <Prices1 />
    </div>
  );
}

function ItemName1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item Name">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[14px] text-ellipsis w-full">Elseve Hidra Hialurônico Shampoo 400ml</p>
    </div>
  );
}

function DeliveryInfos1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Delivery Infos">
      <div className="relative shrink-0" data-name=".baseDeliveryTime">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[2px] items-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">39 min</p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px] text-center w-[6px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#007a3f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Grátis</p>
      </div>
    </div>
  );
}

function ItemDeliveryInfos1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Item & Delivery infos">
      <ItemName1 />
      <DeliveryInfos1 />
    </div>
  );
}

function BaseInfoItemCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-[140px]" data-name=".base-info-item-card">
      <PricePromo1 />
      <ItemDeliveryInfos1 />
    </div>
  );
}

function CardItemCatalog1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="card-item-catalog">
      <ImageItem1 />
      <BaseInfoItemCard1 />
    </div>
  );
}

function MerchantThumb2() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name=".merchant_thumb">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgMerchantThumb2} width="24" />
    </div>
  );
}

function BaseTag2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[20px] min-w-px relative rounded-[9999px]" data-name=".baseTag">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] py-[4px] relative size-full">
          <MerchantThumb2 />
        </div>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Tag">
      <BaseTag2 />
    </div>
  );
}

function Stamps2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[12px] top-[12px] w-[20px]" data-name="Stamps">
      <Tag2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 size-[40px]" data-name="Container">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[40px]" data-name="icon-plus">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eb0033] text-[16px] whitespace-nowrap">
                <p className="leading-[16px]">{`\uE86F`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function ImageCard2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[140px]" data-name="Image-Card">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mix-blend-multiply size-[120px] top-1/2" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Stamps2 />
      <div className="absolute bottom-[12px] left-[12px] right-[12px]" data-name="Counter">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end relative size-full">
            <Container2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageItem2() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[140px] min-w-[140px] relative shrink-0" data-name=".imageItem">
      <ImageCard2 />
    </div>
  );
}

function Normal2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Normal">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">R$ 14,92</p>
    </div>
  );
}

function Prices2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Prices">
      <Normal2 />
    </div>
  );
}

function PricePromo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Price & Promo">
      <Prices2 />
    </div>
  );
}

function ItemName2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item Name">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[14px] text-ellipsis w-full">{`Head&Shoulders Shampoo Anticaspa Limpeza Eficaz`}</p>
    </div>
  );
}

function DeliveryInfos2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Delivery Infos">
      <div className="relative shrink-0" data-name=".baseDeliveryTime">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[2px] items-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">39 min</p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px] text-center w-[6px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="relative shrink-0" data-name=".baseDeliveryPrice">
        <div className="content-stretch flex items-start relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">
            <p className="leading-[16px]">R$ 7,99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemDeliveryInfos2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Item & Delivery infos">
      <ItemName2 />
      <DeliveryInfos2 />
    </div>
  );
}

function BaseInfoItemCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-[140px]" data-name=".base-info-item-card">
      <PricePromo2 />
      <ItemDeliveryInfos2 />
    </div>
  );
}

function CardItemCatalog2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="card-item-catalog">
      <ImageItem2 />
      <BaseInfoItemCard2 />
    </div>
  );
}

function ProductList() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]" data-name="Product List">
      <CardItemCatalog />
      <CardItemCatalog1 />
      <CardItemCatalog2 />
    </div>
  );
}

function ActionButton1() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="flex-none rotate-180">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative rounded-[20px] size-[32px]" data-name="Action button">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="relative" data-name="icon">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[16px] whitespace-nowrap">
                      <p className="leading-[16px]">{`\uE8A3`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <ActionButton className="cursor-pointer relative rounded-[20px] shrink-0 size-[32px]" />
      <ActionButton className="flex items-center justify-center relative shrink-0" />
      <ActionButton1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Carousel() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start justify-center left-0 px-[16px] top-[-211px] w-[393px]" data-name="Carousel">
      <ProductList />
      <Frame2 />
    </div>
  );
}

function AgentThinking() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-0 px-[16px] top-[220px] w-[393px]" data-name="Agent Thinking">
      <div className="mix-blend-darken relative shrink-0 size-[24px]" data-name="brilhos 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-39.39%] max-w-none size-[178.31%] top-[-39.39%]" src={imgBrilhos1} />
        </div>
      </div>
      <p className="[word-break:break-word] bg-clip-text bg-gradient-to-r flex-[1_0_0] font-['iFood_RC_Textos:Regular',sans-serif] from-[#666] leading-[1.3] min-w-px not-italic relative text-[14px] text-[transparent] to-[#ccc]">Vasculhando minha base de conhecimento...</p>
    </div>
  );
}

function ChatArea({ showThinking }: { showThinking?: boolean }) {
  return (
    <div className="absolute bg-[#f5f5f5] h-[852px] left-0 right-0 overflow-clip rounded-[40px] top-0" data-name="Chat area">
      <ChatMessages1 />
      {showThinking && <AgentThinking />}
    </div>
  );
}

function Clock() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Display:Medium',sans-serif] items-center leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap" data-name="clock">
      <p className="relative shrink-0">9</p>
      <p className="relative shrink-0">:</p>
      <p className="relative shrink-0">41</p>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[8.5px] items-center justify-end relative shrink-0" data-name="Icons">
      <CellularSignal className="h-[10px] relative shrink-0 w-[18px]" />
      <Wifi className="h-[11.619px] overflow-clip relative shrink-0 w-[16px]" />
      <Battery className="h-[12px] overflow-clip relative shrink-0 w-[24px]" />
    </div>
  );
}

function LeftButtonTertiary({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name=".Left Button/Tertiary">
      <button onClick={onClose} className="relative rounded-[20px] shrink-0 size-[40px] cursor-pointer border-none p-0 bg-transparent" data-name="Action button">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
            <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[9999px] w-full" data-name=".baseActionButtonSizes">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[10px] items-center justify-center p-[6px] relative size-full">
                  <div className="relative shrink-0" data-name=".baseActionButtonIcons">
                    <div className="content-stretch flex flex-col items-start relative size-full">
                      <div className="relative shrink-0" data-name="icon">
                        <div className="flex flex-col items-center justify-center size-full">
                          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[20px] whitespace-nowrap">
                              <p className="leading-[20px]">{`\uE872`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[15.93%]" data-name="Group">
      <div className="absolute inset-[15.93%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.6272" preserveAspectRatio="none" viewBox="0 0 13.6273 13.6272" width="13.6273">
          <path d={svgPaths.p368e9e40} fill="url(#paint0_linear_0_247)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_247" x1="0" x2="13.6272" y1="0" y2="13.6273">
              <stop stopColor="#FF9A3D" />
              <stop offset="0.55" stopColor="#FF3D6E" />
              <stop offset="1" stopColor="#C9184A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function GradientStar() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="GradientStar">
      <Group />
    </div>
  );
}

function Container4() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-center relative row-1 self-center shrink-0 size-[20px]" data-name="Container">
      <GradientStar />
    </div>
  );
}

function Container3() {
  return (
    <div className="grid grid-cols-[_20px] grid-rows-[_20px] relative shrink-0 size-[20px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function LogoAiGeneric() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="logo-ai-generic">
      <Container3 />
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Bold',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] w-[64px]">
        <p className="leading-[1.3]">Modo IA</p>
      </div>
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0" data-name="Address">
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Av. dos Autonomistas, 1496</p>
      </div>
      <div className="relative shrink-0" data-name="icon">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[16px] whitespace-nowrap">
              <p className="leading-[16px]">{`\uE88F`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-start min-w-px relative">
      <LogoAiGeneric />
      <Address />
    </div>
  );
}

function ChatBubbleSquareWriteMessagesMessageBubbleChatSquareWriteReviewPenPencilCompose1() {
  return (
    <div className="absolute inset-[16.67%_16.67%_8.33%_21.79%]" data-name="chat-bubble-square-write--messages-message-bubble-chat-square-write-review-pen-pencil-compose">
      <div className="absolute inset-[-5.56%_-6.77%]">
        <svg className="block size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16.7693 20" width="16.7693">
          <g id="chat-bubble-square-write--messages-message-bubble-chat-square-write-review-pen-pencil-compose">
            <path d={svgPaths.p1af07180} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1cf439c0} id="Vector_2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChatBubbleSquareWriteMessagesMessageBubbleChatSquareWriteReviewPenPencilCompose() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chat-bubble-square-write--messages-message-bubble-chat-square-write-review-pen-pencil-compose">
      <ChatBubbleSquareWriteMessagesMessageBubbleChatSquareWriteReviewPenPencilCompose1 />
    </div>
  );
}

function BaseActionButtonIcons() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".baseActionButtonIcons">
      <ChatBubbleSquareWriteMessagesMessageBubbleChatSquareWriteReviewPenPencilCompose />
    </div>
  );
}

function BaseActionButtonSizes() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-start p-[8px] relative rounded-[9999px] shrink-0" data-name=".baseActionButtonSizes">
      <BaseActionButtonIcons />
    </div>
  );
}

function ActionButton2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Action button">
      <BaseActionButtonIcons />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Button group">
      <div className="bg-white relative rounded-[9999px] shrink-0 size-[40px] flex items-center justify-center" data-name="Action button">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[18px] whitespace-nowrap">
          <p className="leading-[18px]">{`\uE956`}</p>
        </div>
      </div>
      <ActionButton2 />
    </div>
  );
}

function Content2({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Content">
      <LeftButtonTertiary onClose={onClose} />
      <Frame3 />
      <ButtonGroup />
    </div>
  );
}

function TopBar({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[8px] relative shrink-0 w-full" data-name="Top bar">
      <Content2 onClose={onClose} />
    </div>
  );
}

function TopBarStatusBar({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top bar & Status bar">
      <div className="bg-[#f5f5f5] h-[64px] relative shrink-0 w-full" data-name="Status Bar/iOS">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between pl-[35px] pr-[20px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="Time">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                  <Clock />
                </div>
              </div>
            </div>
            <Icons />
          </div>
        </div>
      </div>
      <TopBar onClose={onClose} />
    </div>
  );
}

function Header({ onClose }: { onClose?: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-0 w-full" data-name="Header">
      <TopBarStatusBar onClose={onClose} />
      <div className="h-[24px] relative shrink-0 w-full" data-name="overlay">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOverlay} />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Button">
      <div className="relative shrink-0" data-name=".baseActionButtonIcons">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="relative shrink-0" data-name="icon">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[18px] whitespace-nowrap">
                  <p className="leading-[18px]">{`\uE86F`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-[259_0_0] flex-col h-[16px] items-start justify-center min-w-px overflow-clip relative" data-name="Text Input">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(28,28,30,0.5)] w-full">Peça a IA do iFood</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Button">
      <div className="relative shrink-0" data-name=".baseActionButtonIcons">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="relative shrink-0" data-name="icon">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[20px] whitespace-nowrap">
                  <p className="leading-[20px]">{`\uE844`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModoIaButton() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[56px] items-center px-[8px] relative rounded-[9999px] shadow-[0px_2px_4.2px_0px_rgba(159,12,14,0.25),0px_20px_87.8px_0px_rgba(235,0,51,0.5)] shrink-0 w-full" data-name="ModoIAButton">
      <Button />
      <TextInput />
      <Button1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-start left-[calc(50%-1px)] p-[4px] rounded-[1000px] top-[713px] w-[359px]">
      <ModoIaButton />
    </div>
  );
}

export default function ChatAi({ onClose, showThinking = true }: { onClose?: () => void; showThinking?: boolean }) {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[32px] size-full" data-name="Chat AI">
      <ChatArea showThinking={showThinking} />
      <Header onClose={onClose} />
    </div>
  );
}