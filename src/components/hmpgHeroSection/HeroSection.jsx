import { useTranslation } from 'react-i18next';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import background from './background.svg';
import illustration from './illustration.svg';

const HeroSec = () => {
  const user = useSelector((state) => state.user);
  const { firestoreObject } = user;
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div
      data-testid="HeroSec"
      className="bg-cover bg-no-repeat h-auto xl:h-screen xl:p-0 lg:px-32 lg:py-16 p-8 flex items-center xl:mx-auto"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col-reverse sm:flex-row justify-evenly w-screen lg:items-center">
        <div className="mt-14 lg:m-0 text-center lg:text-start">
          <p className="md:text-4xl text-3xl text-slate-800">{t('here')}</p>
          <p className="md:text-8xl text-6xl">{t('help')}</p>
          <button
            type="button"
            className="mx-auto xl:mx-0 w-auto lg:p-4 p-2 mt-10 text-center rounded-md transition duration-250 flex items-center justify-center bg-[#2DD3E3] hover:bg-cyan-500"
            onClick={() =>
              firestoreObject ? navigate('/Booking') : navigate('/login')
            }
          >
            <p className="md:text-2xl text-sm flex text-center uppercase">
              {t('bookAppointmet')}
            </p>
          </button>
        </div>
        <img
          className="flex mx-auto w-3/4 sm:w-3/5 xl:w-2/5 xl:mx-0"
          src={illustration}
          alt="illustration"
        />
      </div>
    </div>
  );
};

export default HeroSec;
