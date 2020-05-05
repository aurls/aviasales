import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { tickets as ticketsActions, filters as filtersActions } from '../../actions';
import filterTickets from '../../services/filterTickets';
import sortTickets from '../../services/sortTickets';

import Ticket from '../Ticket';
import TicketsNotFound from '../TicketsNotFound';
import TicketsAreProcessing from '../TicketsAreProcessing';
import './tickets.scss';
import ErrorMessage from '../ErrorMessage';

class Tickets extends React.Component {
  componentDidMount () {
    const { fetchTickets } = this.props;
    fetchTickets();
  }

  render () {
    const { tickets, appliedFilters, appliedSorting, appearance, setFilter } = this.props;
    if (appearance.hasError) return <ErrorMessage />;
    if (appearance.isFetching && tickets.length === 0) return <TicketsAreProcessing />;

    const filteredTickets = filterTickets(tickets, appliedFilters);
    if (filteredTickets.length === 0) {
      return <TicketsNotFound
        ticketsCount={tickets.length}
        setFilter={setFilter} />;
    }

    const sortedTickets = sortTickets(filteredTickets, appliedSorting);
    const preparedTickets = sortedTickets.slice(0, 6);

    return (
      <div className="tickets">
        {
          preparedTickets.map((ticket) =>
            <Ticket
              key={ticket.id}
              ticket={ticket}
            />)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    appliedFilters: state.appliedFilters,
    appliedSorting: state.appliedSorting,
    appearance: state.appearance
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: bindActionCreators(filtersActions.setFilter, dispatch),
    fetchTickets: bindActionCreators(ticketsActions.fetchTickets, dispatch)
  };
};

Tickets.propTypes = {
  tickets: PropTypes.array.isRequired,
  appliedFilters: PropTypes.array.isRequired,
  appliedSorting: PropTypes.array.isRequired,
  appearance: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  fetchTickets: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tickets);
