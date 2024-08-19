import { useTranslation } from 'react-i18next';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Counsler = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  function handleClick() {
    navigate('counselorRequirements');
  }

  return (
    <div
      data-testid="counselor"
      className="font-poppins card self-center lg:px-32 lg:pb-16 pt-0 p-8 w-5/6 mx-auto sm:w-full"
    >
      <div className="lg:px-12 lg:py-7 p-6  bg-white shadow-[0px_4px_12px_4px_rgba(178,171,171,0.25)] border rounded-md  border-gray-50">
        <p className="lg:text-5xl text-2xl text-center uppercase">
          {t('counselor')}
        </p>
        <p className="py-8 lg:text-md text-sm font-poppins font-lights text-center  text-black text-opacity-90">
          {t('counselorText')}
        </p>
        <div className=" flex justify-center">
          <div className="object-center font-poppins py-2 px-4 bg-cyan-400 hover:bg-cyan-600 rounded-md">
            <button
              type="button"
              onClick={handleClick}
              className=" flex-initial h-full lg:text-2xl text-xs text-center uppercase"
            >
              {t('learn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counsler;
