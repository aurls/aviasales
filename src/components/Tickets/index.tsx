import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../store/actions';
import thunks from '../../store/thunks';
import filterTickets from '../../services/filterTickets';
import sortTickets from '../../services/sortTickets';
import selectors from '../../store/selectors';

import Ticket from '../ticket';
import TicketsNotFound from '../tickets';
import TicketsAreProcessing from '../tickets';
import './tickets.scss';
import ErrorMessage from '../error-message';

class Tickets extends React.Component {
  componentDidMount () {
    const { fetchTickets } = this.props;
    fetchTickets();
  }

  render () {
    const { tickets, isFetching, hasError, setFilter } = this.props;
    if (hasError) return <ErrorMessage />;
    if (isFetching && tickets.length === 0) return <TicketsAreProcessing />;

    // const filteredTickets = filterTickets(tickets, appliedFilters);
    // if (filteredTickets.length === 0) {
    //   return <tickets.not-found
    //     ticketsCount={tickets.length}
    //     setFilter={setFilter} />;
    // }
    //
    // const sortedTickets = sortTickets(filteredTickets, appliedSorting);
    // const preparedTickets = sortedTickets.slice(0, 6);

    return (
      <div className="tickets">
        {
          // preparedTickets.map((ticket) =>
          //   <ticket
          //     key={ticket.id}
          //     ticket={ticket}
          //   />)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tickets: selectors.getTickets(state),
    isFetching: selectors.getIsFetching(state),
    hasError: selectors.getHasError(state)
  };
};

const mapDispatchToProps = {
  fetchTickets: thunks.fetchTickets,
  setFilter: actions.setFilter
};

Tickets.propTypes = {
  tickets: PropTypes.array.isRequired,
  appliedFilters: PropTypes.array.isRequired,
  appliedSorting: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  fetchTickets: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tickets);
