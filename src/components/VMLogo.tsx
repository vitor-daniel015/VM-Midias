import React from "react";

interface VMLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  glow?: boolean;
}

const sizeClasses = {
  sm: "w-[92px]",
  md: "w-[150px]",
  lg: "w-[200px]",
  xl: "w-[260px]",
};

export const VMLogo: React.FC<VMLogoProps> = ({
  size = "md",
  className = "",
  glow = true,
}) => (
  <span
    id="vm-midias-logo"
    className={`relative inline-flex shrink-0 items-center justify-center select-none ${className}`}
  >
    {glow && (
      <span
        className="absolute inset-[24%] -z-10 bg-[#f40b36]/18 blur-xl"
        aria-hidden="true"
      />
    )}
    <img
      src="/images/logo-VMmidias.png"
      alt="VM MÍDIAS"
      className={`${sizeClasses[size]} h-auto object-contain transition-transform duration-300 hover:scale-[1.02]`}
      loading="eager"
      decoding="async"
    />
  </span>
);
