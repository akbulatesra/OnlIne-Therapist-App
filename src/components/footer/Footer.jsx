import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import Subscribe from './Subscribe';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div
      data-testid="FooterTest"
      className="md:grid md:grid-flow-col px-8 py-4 bg-[#FEE89E] md:space-x-3 w-auto flex flex-col text-xl space-x-0 max:h-sixteen md:w-full lg:px-32 lg:py-8 items-center"
    >
      <div>
        <h3 className="pb-2 text-3xl font-normal sm:ml-0 sm:text-xl ">
          {t('Subscribe')}
        </h3>
        <p className="pb-2  text-[#718096] font-normal sm:ml-0 ">
          {t('subscribeText')}
        </p>
        <Subscribe className=" sm:ml-0" />
      </div>
      <div className="md:text-center text-start mt-4 lg:mt-0">
        <div className="text-[#718096] space-x-3 md:space-x-6 sm:mt-2 flex w-full justify-between lg:justify-evenly">
          <a href="/" alt="Home">
            {t('home')}
          </a>
          <a href="Blogs"> {t('blogs')} </a>
          <a href="About" alt="About">
            {t('about')}
          </a>
          <a href="Contacts" alt="Contacts">
            {t('contactTxt')}{' '}
          </a>
        </div>

        <div className="mt-8 flex space-x-4 md:space-x-8 justify-center sm:ml-0">
          <BsTwitter style={{ fontSize: '25px' }} />
          <BsInstagram style={{ fontSize: '25px' }} />
          <BsFacebook style={{ fontSize: '25px' }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
