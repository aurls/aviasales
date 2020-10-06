import React from 'react';
import PropTypes from 'prop-types';

import {
  formatPrice,
  getDepartureTime,
  getArrivalTime,
  getDuration,
  getTransfersTitle
} from '../../utils/formatters';
import './ticket.scss';

export const Ticket = ({ ticket }) => {
  const getCarrierUrl = (iataCode) => {
    return `http://pics.avs.io/99/36/${iataCode}.png`;
  };

  return (
    <section key={ticket.id} className="ticket">
      <div className="ticket__price">
        {formatPrice(ticket.price)}&nbsp;₽
      </div>
      <div className="ticket__carrier">
        <img className="ticket__carrier-logo"
          src={getCarrierUrl(ticket.carrier)}
          alt={`${ticket.carrier}-logo`} />
      </div>
      {
        ticket.segments.map((segment) => {
          return (
            <div key={`${ticket.id}${segment.duration}`} className="ticket__segment">
              <div className="ticket__time">
                <h3 className="ticket__segment-subtitle">
                  {segment.origin}&nbsp;&ndash;&nbsp;
                  {segment.destination}
                </h3>
                <p className="ticket__segment-info">
                  {getDepartureTime(segment.date)}&nbsp;&ndash;&nbsp;
                  {getArrivalTime(segment.date, segment.duration)}
                </p>
              </div>
              <div className="ticket__duration">
                <h3 className="ticket__segment-subtitle">
                  В&nbsp;пути
                </h3>
                <p className="ticket__segment-info">
                  {getDuration(segment.duration)}
                </p>
              </div>
              <div className="ticket__transfers">
                <h3 className="ticket__segment-subtitle">
                  {getTransfersTitle(segment.stops.length)}
                </h3>
                <p className="ticket__segment-info">
                  {segment.stops.join(', ')}
                </p>
              </div>
            </div>
          );
        })
      }
    </section>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired
};

export default Ticket;
