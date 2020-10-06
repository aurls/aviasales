import React from 'react';
import './tickets-processing.scss';

type TicketPlaceholder = {
  segments: []
}

const TicketsProcessing: React.FC = () => {
  const ticketPlaceholder = { segments: [0, 1] };
  const tickets = new Array(6);
  tickets.fill(ticketPlaceholder, 0, 6);

  return (
    <div className="tickets">
      {
        tickets.map((item, index) =>
          <section key={index} className="ticket is-processing">
            <div className="ticket__price" />
            <div className="ticket__carrier" />
            {
              item.segments.map((item: TicketPlaceholder, index: number) =>
                <div key={index} className="ticket__segment">
                  <div className="ticket__time">
                    <div className="ticket__segment-subtitle" />
                    <div className="ticket__segment-info" />
                  </div>
                  <div className="ticket__duration">
                    <div className="ticket__segment-subtitle" />
                    <div className="ticket__segment-info" />
                  </div>
                  <div className="ticket__transfers">
                    <div className="ticket__segment-subtitle" />
                    <div className="ticket__segment-info" />
                  </div>
                </div>
              )
            }
          </section>
        )
      }
    </div>
  );
};

export default TicketsProcessing;
