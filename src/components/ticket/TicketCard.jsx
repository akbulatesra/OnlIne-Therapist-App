import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { t } from 'i18next';

function TicketCard({ ticketNumber, ticketPrice }) {
  const user = useSelector((state) => state.user);
  const { firestoreObject } = user;
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate('/buy-ticket', { state: { ticket: item, price: ticketPrice } });
  };
  return (
    <div className="px-4 lg:px-8 py-6 lg:py-14 lg:space-y-3 space-y-2 lg:mt-4 shadow-[0px_4px_12px_4px_rgba(178,171,171,0.25)] rounded-lg align-start text-center lg:w-100 w-5/6 mx-auto sm:w-full">
      <div>
        <h1 className="text-2xl lg:text-4xl ">
          {ticketNumber} {t('Tickets')}
        </h1>
      </div>
      <div>
        <span className="text-xl lg:text-3xl text-[#0000008a]">
          {ticketPrice}$
        </span>
      </div>
      <div>
        <button
          onClick={() =>
            firestoreObject ? handleNavigate(ticketNumber) : navigate('/login')
          }
          className="uppercase py-2 px-4 self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100 text-md lg:text-2xl text-center lg:leading-9 text-black"
          type="button"
        >
          {t('Purchase')}
        </button>
      </div>
    </div>
  );
}

export default TicketCard;
