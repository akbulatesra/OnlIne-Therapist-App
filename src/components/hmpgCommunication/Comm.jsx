import React from 'react';
import { useTranslation } from 'react-i18next';
import phonecallimg from './phonecall.svg';
import chatimg from './chat.svg';
import videocallimg from './videocall.svg';

const Comm = () => {
  const { t } = useTranslation();
  return (
    <div data-testid="Comm" className="lg:px-32 lg:py-16 p-8 font-poppins">
      <h1 className="text-3xl md:mb-4 lg:mb-0 font-medium lg:text-5xl uppercase text-center lg:text-start">
        {t('communicate')}
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:gap-4 lg:gap-10 lg:pt-10 pt-4 sm:grid-cols-3 text-xs">
        <div className="flex flex-col lg:p-10 lg:mt-4 rounded-lg align-start text-center py-4 px-2 shadow-[0px_4px_12px_4px_rgba(178,171,171,0.25)] w-5/6 mx-auto sm:w-full">
          <img
            className="flex object-center mx-auto h-1/4 w-1/4 sm:h-1/3 sm:w-1/3 mb-2"
            src={phonecallimg}
            alt="phonecallimg"
          />
          <h2 className="text-2xl sm:text-base lg:text-4xl mb-4">
            {t('voice')}
          </h2>
          <p className="my-auto pb-1 sm:text-xs text-[#0000008a]">
            {t('voiceText')}
          </p>
        </div>
        <div className="flex flex-col lg:p-10 lg:mt-4 rounded-lg align-start text-center py-4 px-2 shadow-[0px_4px_12px_4px_rgba(178,171,171,0.25)] w-5/6 mx-auto sm:w-full">
          <img
            className="flex object-center mx-auto h-1/4 w-1/4 sm:h-1/3 sm:w-1/3 mb-2"
            src={chatimg}
            alt="chatimg"
          />
          <h2 className="text-2xl sm:text-base lg:text-4xl mb-4">
            {t('chat')}
          </h2>
          <p className="my-auto pb-1 sm:text-xs text-[#0000008a]">
            {t('chatText')}
          </p>
        </div>
        <div className="flex flex-col lg:p-10 lg:mt-4 rounded-lg align-start text-center py-4 px-2 shadow-[0px_4px_12px_4px_rgba(178,171,171,0.25)] w-5/6 mx-auto sm:w-full">
          <img
            className="flex object-center mx-auto h-1/4 w-1/4 sm:h-1/3 sm:w-1/3 mb-2"
            src={videocallimg}
            alt="videocallimg"
          />
          <h2 className="text-2xl sm:text-base lg:text-4xl mb-4">
            {t('video')}
          </h2>
          <p className="my-auto pb-1 sm:text-xs text-[#0000008a]">
            {t('videoText')}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Comm;
