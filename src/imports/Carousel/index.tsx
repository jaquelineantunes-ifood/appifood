import svgPaths from "./svg-q5mqrp39o2";
import imgImage from "./44dd74f9932fa5e7d04ebdc97c0abb870e754730.png";
import imgImage1 from "./45b15a00ac73be30c6cf278a1dc43bc9f5347d35.png";
import imgImage2 from "./25b1d21c87a35d97f7275487d9afce70078c4304.png";
import imgMerchantThumb from "./e84dcb5de5ed33ff2656b8419f6f05afcf3ca62d.png";
import imgImage3 from "./7020af9adce83de2353fd724b49f37be7eca4a3b.png";
import imgMerchantThumb1 from "./1109ff4ef7958c2a984b3d6543f8ed5dc00ca2f2.png";
import imgImage4 from "./0d1d50062c9b7f8fa412417ea995bcef38460e54.png";
import imgMerchantThumb2 from "./232249b83214a6eef76258f5332385bc99334702.png";
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
                  <path d={svgPaths.p1052d400} fill="url(#paint0_linear_0_137)" id="Vector" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_137" x1="2.56337" x2="2.56337" y1="0" y2="5.12674">
                      <stop stopColor="#FF477C" />
                      <stop offset="1" stopColor="#FF0048" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="-translate-y-1/2 absolute aspect-[125/125] left-[34.86%] opacity-0 right-[53.75%] top-[calc(50%-1.18px)]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="3.6459" preserveAspectRatio="none" viewBox="0 0 3.6459 3.6459" width="3.6459">
                  <path d={svgPaths.p2700300} fill="url(#paint0_linear_0_156)" id="Vector" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_156" x1="-0.0555468" x2="2.78286" y1="-0.48829" y2="3.3972">
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

function Frame() {
  return (
    <div className="flex items-center gap-2 relative shrink-0">
      <ActionButton className="cursor-pointer relative rounded-[20px] shrink-0 size-[32px]" />
      <div className="flex items-center justify-center relative shrink-0 rotate-180">
        <ActionButton className="cursor-pointer relative rounded-[20px] shrink-0 size-[32px]" />
      </div>
      <ActionButton1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex items-center relative shrink-0 w-full px-[16px]">
      <Frame />
    </div>
  );
}

export default function Carousel() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[16px] relative size-full" data-name="Carousel">
      <ProductList />
      <Frame1 />
    </div>
  );
}