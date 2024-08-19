// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RiSendPlaneFill } from 'react-icons/ri';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../firebaseFile';

function Subscribe() {
  const [Email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(Email)) {
      await addDoc(collection(db, 'newsletter'), {
        email: Email,
        timestamp: new Date(),
      });
      navigate('/Thankyou');
    } else {
      setError('Invalid email');
    }
  };

  return (
    <form
      className="flex border-2 border-[#718096]  rounded box-border  flex-center w-fit"
      onSubmit={handleChange}
      data-testid="SubscribeTest"
    >
      <input
        className="border flex border-hidden p-1  rounded-sm box-border text-[#718096] text-md "
        name="name"
        data-testid="Subscribe"
        placeholder={t('EnterEmail')}
        type="email"
        value={Email}
        onChange={handleChange}
      />

      <button
        className="bg-[#2DD3E3] hover:bg-[#27B2C4] border-l-2 py-1 px-2 rounded-sm-x-2 rounded-r-sm box-border border-[#718096]  color-[#718096]"
        type="submit"
        name="submit"
        value="Submit"
        onSubmit={handleSubmit}
        data-testid="SubmitTest"
      >
        <RiSendPlaneFill />
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Subscribe;
