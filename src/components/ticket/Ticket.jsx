import React from 'react';
import { useTranslation } from 'react-i18next';
import TicketCard from './TicketCard';

function Ticket() {
  const { t } = useTranslation();
  return (
    <div className="font-poppins lg:px-32 lg:py-16 p-8">
      <h1 className="text-3xl text-center lg:text-start uppercase font-medium lg:font-normal lg:text-5xl mb-4 ">
        {t('PurchaseTickets')}
      </h1>
      <p className="text-xl text-center lg:text-start font-medium mb-8 lg:font-normal lg:text-3xl">
        {t('purchaseTicketsText')}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 uppercase gap-6 lg:gap-10 ">
        <TicketCard ticketNumber="5" ticketPrice="10" />
        <TicketCard ticketNumber="25" ticketPrice="40" />
        <TicketCard ticketNumber="50" ticketPrice="70" />
      </div>
    </div>
  );
}

export default Ticket;
