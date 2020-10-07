import React from 'react';
import { connect } from 'react-redux';
import Types from '../../types';
import { State } from '../../store/storeTypes';
import actions from '../../store/actions';
import thunks from '../../store/thunks';
import selectors from '../../store/selectors';

import Header from '../../components/header';
import Filters from '../../components/filters';
import Sorting from '../../components/sorting';
import Tickets from '../../components/tickets';
import './app.scss';

type Props = {
  tickets: Types.Ticket[]
  filters: Types.Filter[]
  sorting: Types.Sorting
  isFetching: boolean
  hasError: boolean
  fetchTickets: ReturnType<typeof thunks.fetchTickets>
  setFilter: typeof actions.setFilter
  setSorting: typeof actions.setSorting
}

const App: React.FC<Props> = (props: Props) => {
  const {
    tickets,
    filters,
    sorting,
    isFetching,
    hasError,
    fetchTickets,
    setFilter,
    setSorting
  } = props;

  React.useEffect(() => {
    // fetchTickets();
  }, []);

  return (
    <React.Fragment>
      <Header isFetching={isFetching} />

      <div className="app">
        <aside className="app__sidebar">
          <Filters
            currentFilters={filters}
            setFilter={setFilter} />
        </aside>

        <main className="app__main">
          <Sorting
            currentSorting={sorting}
            setSorting={setSorting} />
          <Tickets
            tickets={tickets}
            isFetching={isFetching}
            hasError={hasError}
            setFilter={setFilter} />
        </main>
      </div>
    </React.Fragment>
  );
};

const mapState = (state: State) => ({
  tickets: selectors.getTickets(state),
  filters: selectors.getFilters(state),
  sorting: selectors.getSorting(state),
  isFetching: selectors.getIsFetching(state),
  hasError: selectors.getHasError(state)
});

const mapDispatch = {
  fetchTickets: thunks.fetchTickets,
  setFilter: actions.setFilter,
  setSorting: actions.setSorting
};

export default connect(
  mapState,
  mapDispatch
)(App);
