import React from 'react';
import { Eye, Clock, Target } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      id: 'visibilidade',
      title: 'MAIS VISIBILIDADE',
      description: 'Sua marca onde as pessoas estão.',
      detail: 'Telas posicionadas na altura dos olhos nos pontos de maior circulação diária da cidade.',
      icon: Eye,
    },
    {
      id: 'lembranca',
      title: 'MAIS LEMBRANÇA',
      description: 'Presença frequente aumenta o reconhecimento.',
      detail: 'Quem vê sua marca todos os dias lembra da sua empresa primeiro na hora de decidir uma compra.',
      icon: Clock,
    },
    {
      id: 'oportunidades',
      title: 'MAIS OPORTUNIDADES',
      description: 'Sua empresa aparece para novos consumidores.',
      detail: 'Conecte seu negócio com clientes em momento receptivo, prontos para conhecer seus produtos e serviços.',
      icon: Target,
    },
  ];

  return (
    <section id="beneficios" className="relative py-16 bg-[#09090D] border-b border-[#1C1C26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#111116] border border-[#20202C] hover:border-[#F8032D]/60 transition-all duration-300 shadow-lg hover:shadow-card-hover flex flex-col justify-between"
              >
                {/* Subtle top indicator line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#F8032D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#181822] border border-[#282838] group-hover:border-[#F8032D]/50 flex items-center justify-center text-[#F8032D] mb-5 shadow-inner transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white tracking-wide uppercase mb-2 group-hover:text-red-50 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-base font-semibold text-gray-200 mb-3 leading-snug">
                    {benefit.description}
                  </p>

                  <p className="text-xs text-[#A9ACB3] leading-relaxed">
                    {benefit.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
