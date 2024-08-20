/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from './Forms/ContactForm';
import ContactPlace from './ContactPlace';
import contact from './contactImg.svg';

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="lg:px-32 lg:py-16 lg:pt-24 p-8 pt-14 font-poppins">
      <div>
        <h1 className="pb-[1%] lg:text-5xl text-xl">SEND US YOUR REQUEST!</h1>
        <p className="pb-[1%] lg:text-2xl text-base text-slate-500">
          {`Do you have a question, concern, idea, feedback, or problem? If you
          need assistance, please fill out the form below and we'd be
          happy to help!`}
        </p>
      </div>
      <div className="flex lg:flex-row flex-col">
        <ContactForm />
        <div className="lg:basis-1/2 basis-1/4 px-[6%] text-center lg:text-start">
          <aside className="space-y-10 flex lg:flex-col md:flex-row flex-col items-center gap-4">
            <img
              className="lg:w-full md:w-1/2 w-4/5 mt-10 mx-auto"
              src={contact}
              alt="smiling woman sitting in front of a computer with headphones, man on the background talking with the phone"
            />
            <ContactPlace />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Contact;
