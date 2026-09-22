import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type FeatureItem = {
  id: string;
  number: string;
  title: string;
  text: string;
  icon: React.ElementType;
};

type FeatureCollectionProps = {
  items: FeatureItem[];
  desktopColumns?: 2 | 3;
  mobileCarousel?: boolean;
};

const FeatureCard: React.FC<{ item: FeatureItem }> = ({ item }) => {
  const Icon = item.icon;

  return (
    <article className="group relative flex h-full min-h-[250px] flex-col border border-white/10 bg-[#08090d]/90 p-6 transition-colors duration-300 hover:border-[#ff143f]/45 hover:bg-[#0b0c11] sm:p-7">
      <div className="flex items-start gap-5">
        <div className="shrink-0">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ff143f] text-[#ff143f] shadow-[0_0_24px_rgba(248,3,45,0.2)] transition-all duration-300 group-hover:bg-[#ff143f] group-hover:text-white">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="mt-3 block text-center text-[10px] font-black tracking-[0.25em] text-[#5d606b]">
            {item.number}
          </span>
        </div>

        <div className="min-w-0 pt-1">
          <h3 className="text-xl font-black uppercase tracking-tight text-white lg:text-2xl">
            {item.title}
          </h3>
          <span className="my-4 block h-[3px] w-10 bg-[#ff143f] shadow-[0_0_12px_#f8032d]" />
          <p className="max-w-lg text-sm leading-7 text-[#aeb0b8]">
            {item.text}
          </p>
        </div>
      </div>
    </article>
  );
};

export const FeatureCollection: React.FC<FeatureCollectionProps> = ({
  items,
  desktopColumns = 3,
  mobileCarousel = false,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const desktopGrid =
    desktopColumns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  const goTo = (index: number) => {
    const nextIndex = Math.max(0, Math.min(items.length - 1, index));
    const target = trackRef.current?.children[nextIndex] as HTMLElement | undefined;

    target?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setActiveIndex(nextIndex);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;

    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActiveIndex(Math.max(0, Math.min(items.length - 1, index)));
  };

  if (!mobileCarousel) {
    return (
      <div className={`grid grid-cols-1 gap-4 ${desktopGrid}`}>
        {items.map((item) => (
          <FeatureCard key={item.id} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className={`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:snap-none md:overflow-visible md:pb-0 ${desktopGrid}`}
      >
        {items.map((item) => (
          <div key={item.id} className="min-w-full snap-center md:min-w-0">
            <FeatureCard item={item} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between md:hidden">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ff143f] hover:text-[#ff143f] disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Ver benefício anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2" aria-label="Posição do carrossel">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-7 bg-[#ff143f]" : "w-2 bg-white/20"}`}
              aria-label={`Ver benefício ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === items.length - 1}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ff143f] hover:text-[#ff143f] disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Ver próximo benefício"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
