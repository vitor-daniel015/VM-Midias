import React from 'react';
import { ArrowRight } from 'lucide-react';

type Align = 'left' | 'center';

export const BrandEyebrow: React.FC<{
  children: React.ReactNode;
  align?: Align;
  className?: string;
}> = ({ children, align = 'left', className = '' }) => (
  <div
    className={`brand-eyebrow ${align === 'center' ? 'justify-center' : ''} ${className}`}
  >
    <span className="brand-eyebrow-line" aria-hidden="true" />
    <span>{children}</span>
  </div>
);

export const SectionHeading: React.FC<{
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
  align?: Align;
  className?: string;
}> = ({ eyebrow, title, accent, description, align = 'center', className = '' }) => (
  <div
    className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-4xl ${className}`}
  >
    <BrandEyebrow align={align}>{eyebrow}</BrandEyebrow>
    <h2 className="brand-section-title">
      {title}{' '}
      <span className="text-[#ff143f] text-led-glow">{accent}</span>
    </h2>
    {description && <p className="brand-section-copy">{description}</p>}
  </div>
);

export const BrandButton: React.FC<{
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  id?: string;
  className?: string;
}> = ({ href, children, variant = 'primary', id, className = '' }) => (
  <a
    id={id}
    href={href}
    className={`group brand-button ${variant === 'outline' ? 'brand-button-outline' : 'brand-button-primary'} ${className}`}
  >
    <span>{children}</span>
    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
  </a>
);
