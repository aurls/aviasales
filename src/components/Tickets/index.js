import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appearance, tickets as ticketsActions, filters as filtersActions } from '../../actions';
import Aviasales from '../../services/aviasales';
import filterTickets from '../../services/filterTickets';
import sortTickets from '../../services/sortTickets';

import Ticket from '../Ticket';
import TicketsNotFound from '../TicketsNotFound';
import TicketsAreProcessing from '../TicketsAreProcessing';
import './tickets.scss';
import ErrorMessage from '../ErrorMessage';

class Tickets extends React.Component {
  componentDidMount () {
    this.fetchTickets();
  }

  async fetchTickets () {
    const { setFetching, setError, saveTickets } = this.props;
    setFetching(true);
    const aviasales = new Aviasales();

    aviasales.getSearchId()
      .then(searchId => {
        getTickets(searchId);
      })
      .catch((error) => {
        setFetching(false);
        setError(true);
        throw new Error(error);
      });

    function getTickets (searchId) {
      aviasales.getTickets(searchId)
        .then(response => {
          saveTickets(response.tickets);
          if (response.stop) {
            setFetching(false);
          } else {
            getTickets(searchId);
          }
        })
        .catch((error) => {
          getTickets(searchId);
          throw new Error(error);
        });
    }
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
    setFetching: bindActionCreators(appearance.setFetching, dispatch),
    setError: bindActionCreators(appearance.setError, dispatch),
    saveTickets: bindActionCreators(ticketsActions.saveTickets, dispatch)
  };
};

Tickets.propTypes = {
  tickets: PropTypes.array.isRequired,
  appliedFilters: PropTypes.array.isRequired,
  appliedSorting: PropTypes.array.isRequired,
  appearance: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  setFetching: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  saveTickets: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tickets);
