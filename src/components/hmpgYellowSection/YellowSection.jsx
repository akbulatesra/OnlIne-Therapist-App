import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import therapistpp from './therapistpp.svg';

const YellowSec = () => {
  const user = useSelector((state) => state.user);
  const { firestoreObject } = user;
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div
      data-testid="YellowSec"
      className="flex flex-col font-poppins bg-[#FEE89E] lg:px-32 lg:py-16 p-8 "
    >
      <p className="lg:text-5xl text-3xl pt-[2rem] uppercase">
        {t('yellowTitle')}
      </p>
      <p className="lg:text-5xl text-3xl pt-[2rem] uppercase text-start">
        {t('yellowTitle2')}
      </p>
      <img
        className="pt-8 w-3/5 min-w-300px min-h-200px "
        src={therapistpp}
        alt="therapistpp"
      />
      <p className="lg:pt-16 pt-8 lg:text-xl text-sm font-light text-black">
        {t('yellowText')}
      </p>
      <button
        type="button"
        onClick={() =>
          firestoreObject ? navigate('/Booking') : navigate('/login')
        }
        className="w-fit lg:mt-16 mt-4 p-2 lg:p-4 text-xs lg:text-lg rounded-md transition duration-250 flex items-center justify-center bg-[#2DD3E3] hover:bg-cyan-500"
      >
        <p className="text-center uppercase text-ellipsis overflow-hidden">
          {t('bookAppointmet')}
        </p>
      </button>
    </div>
  );
};
export default YellowSec;
