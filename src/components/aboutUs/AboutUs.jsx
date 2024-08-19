import React from 'react';
import { useTranslation } from 'react-i18next';
import FounderPP from './HadiMaleh.jpg';

const HealingInfo = () => {
  const { t } = useTranslation();

  return (
    <div data-testid="AboutUs" className="font-poppins">
      <div className="bg-white lg:px-24 sm:px-12 py-10">
        <h1 className="lg:text-4xl sm:text-3xl uppercase mt-20">
          {t('healing')}
        </h1>
        <p className="lg:text-xl sm:text-lg mt-3 font-light leading-relaxed text-black text-opacity-50">
          {t('cool')}
        </p>
        <p className="lg:text-lg sm:text-base mt-12">{t('healingText')}</p>
      </div>
      <div className="bg-[#EAF8F9] flex flex-row sm:flex-col items-center w-full lg:px-24 sm:px-12 py-10">
        <img
          className="rounded-md lg:w-3/12 w-3/8"
          src={FounderPP}
          alt="FounderPP"
        />
        <div className="text-[#424A4F] flex flex-col mt-6">
          <h1 className="lg:text-4xl text-3xl mb-8">{t('founding')}</h1>
          <p className="lg:text-lg sm:text-base">{t('foundingText')}</p>
        </div>
      </div>
    </div>
  );
};
export default HealingInfo;
