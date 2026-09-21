import React from 'react';

interface VMLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  glow?: boolean;
}

export const VMLogo: React.FC<VMLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  glow = true,
}) => {
  // Dimensions for different sizes
  const sizeMap = {
    sm: {
      svgWidth: 110,
      svgHeight: 38,
      boxWidth: 70,
      boxHeight: 32,
      vmFontSize: 24,
      midiasFontSize: 7,
      spacing: 'tracking-[0.25em]',
    },
    md: {
      svgWidth: 150,
      svgHeight: 52,
      boxWidth: 95,
      boxHeight: 42,
      vmFontSize: 32,
      midiasFontSize: 9,
      spacing: 'tracking-[0.35em]',
    },
    lg: {
      svgWidth: 200,
      svgHeight: 70,
      boxWidth: 130,
      boxHeight: 56,
      vmFontSize: 44,
      midiasFontSize: 12,
      spacing: 'tracking-[0.4em]',
    },
    xl: {
      svgWidth: 260,
      svgHeight: 90,
      boxWidth: 170,
      boxHeight: 72,
      vmFontSize: 58,
      midiasFontSize: 15,
      spacing: 'tracking-[0.45em]',
    },
  };

  const config = sizeMap[size];

  return (
    <div
      id="vm-midias-logo"
      className={`inline-flex flex-col items-center select-none group ${className}`}
      aria-label="VM MÍDIAS - Sua Marca em Destaque"
    >
      <div className="relative flex items-center justify-center">
        {/* Subtle LED Glow behind the logo */}
        {glow && (
          <div
            className="absolute inset-0 bg-[#F8032D]/25 blur-lg rounded-lg -z-10 group-hover:bg-[#F8032D]/40 transition-all duration-300"
            aria-hidden="true"
          />
        )}

        <svg
          width={config.boxWidth}
          height={config.boxHeight}
          viewBox="0 0 100 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-[1.02]"
        >
          {/* Outer Rounded Frame with LED Red Stroke */}
          <rect
            x="2"
            y="2"
            width="96"
            height="44"
            rx="9"
            fill="#0F0F14"
            stroke="#F8032D"
            strokeWidth="2.75"
          />

          {/* High-tech corner accent markers */}
          <path
            d="M 2 10 L 2 2 L 10 2"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 90 2 L 98 2 L 98 10"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 2 38 L 2 46 L 10 46"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 90 46 L 98 46 L 98 38"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* VM Letters in LED Red with high-tech scanlines */}
          <g>
            {/* V Letter */}
            <path
              d="M 18 10 L 29 36 L 39 36 L 49 10 L 40 10 L 34 27 L 27 10 Z"
              fill="#F8032D"
            />
            {/* M Letter */}
            <path
              d="M 52 10 L 52 36 L 60 36 L 60 21 L 66 33 L 73 33 L 79 21 L 79 36 L 87 36 L 87 10 L 77 10 L 70 24 L 62 10 Z"
              fill="#F8032D"
            />

            {/* LED Stencil Line Accents */}
            <line x1="14" y1="23" x2="89" y2="23" stroke="#0F0F14" strokeWidth="1.2" />
          </g>
        </svg>
      </div>

      {showSubtitle && (
        <div className="mt-1 flex items-center justify-center">
          <span
            className={`font-black text-white text-center uppercase ${config.spacing} leading-none transition-colors group-hover:text-red-100`}
            style={{ fontSize: `${config.midiasFontSize}px` }}
          >
            M Í D I A S
          </span>
        </div>
      )}
    </div>
  );
};
