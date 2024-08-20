import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebaseFile';

function ContactForm() {
  const { t } = useTranslation();
  const [choosenOption, setChoosenOption] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMail, setEnteredMail] = useState('');
  const [enteredDetails, setEnteredDetails] = useState('');

  const navigate = useNavigate();

  const radioHandler = (event) => {
    setChoosenOption(event.target.value);
  };

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const mailHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const detailsHandler = (event) => {
    setEnteredDetails(event.target.value);
  };
  // formData contains the returning object for the entered inputs. && I just added console log for eslint error, will delete it later
  /* eslint-disable */

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = {
      option: choosenOption,
      name: enteredName,
      mail: enteredMail,
      details: enteredDetails,
    };
    formData;
    setEnteredName('');
    setEnteredMail('');
    setEnteredDetails('');
    navigate('/contact-thank-you');

    await addDoc(collection(db, 'contactUs'), {
      formData,
    });
  };
  /* eslint-enable */

  return (
    <form
      className="flex-col"
      data-testid="contactForm"
      onSubmit={submitHandler}
    >
      <div className="flex lg:flex-col md:flex-row flex-col items-center lg:mt-0 mt-4 justify-between">
        <div>
          <div>
            <h1 className="m-[3%] lg:text-2xl text-xs font-bold lg:font-medium leading-9">
              Type of contact
            </h1>
          </div>
          <div className="flex-col space-y-[3%] lg:text-xl text-xs font-normal">
            <input
              type="radio"
              name={choosenOption}
              value="question about the service"
              onChange={radioHandler}
              className="mr-3"
            />
            {t('contact1')}
            <br />
            <input
              type="radio"
              name={choosenOption}
              value="registered client-need support"
              onChange={radioHandler}
              className="mr-3"
            />
            {t('contact2')}
            <br />
            <input
              type="radio"
              name={choosenOption}
              value="counselor-join"
              onChange={radioHandler}
              className="mr-3"
            />
            {t('contact3')}
            <br />
            <input
              type="radio"
              name={choosenOption}
              value="registered counselor-need support"
              onChange={radioHandler}
              className="mr-3"
            />
            {t('contact4')}
            <br />
            <input
              type="radio"
              name={choosenOption}
              value="business-related inquiry"
              onChange={radioHandler}
              className="mr-3"
            />
            {t('contact5')}
            <br />
            <input
              type="radio"
              name={choosenOption}
              value="for organization"
              onChange={radioHandler}
              className="mr-3"
            />
            {t('contact6')}
            <br />
            <input
              type="radio"
              name={choosenOption}
              value="billing question"
              onChange={radioHandler}
              className="mr-3"
            />
            {t('contact7')}
          </div>
        </div>
        <div className="flex-col lg:text-xl text-xs justify-between md:w-1/2 lg:w-full w-full md:mt-0 lg:mt-4 mt-4">
          <label htmlFor="Full Name" className="block">
            {t('fullname')}:
          </label>
          <input
            className="w-11/12 h-14 rounded-md pt-[1%] drop-shadow-lg px-2 mb-3"
            type="text"
            value={enteredName}
            placeholder={t('fullnameText')}
            onChange={nameHandler}
          />
          <label htmlFor="E-mail" className="block">
            {t('email')}:
          </label>
          <input
            className=" w-11/12 h-14 rounded-md drop-shadow-lg px-2 mb-3 "
            type="text"
            value={enteredMail}
            placeholder={t('emailText')}
            onChange={mailHandler}
          />
          <label htmlFor="Details" className="block">
            {t('details')}
          </label>
          <textarea
            className=" w-11/12 h-20 rounded-md drop-shadow-lg p-2 "
            value={enteredDetails}
            placeholder={t('detailsText')}
            onChange={detailsHandler}
          />
        </div>
      </div>
      <div className="flex justify-center mt-6 lg:justify-start">
        <button
          type="submit"
          className="lg:text-xl text-sm self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100 px-4 py-2"
        >
          {t('submit')}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
