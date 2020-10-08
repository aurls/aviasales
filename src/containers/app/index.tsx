import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../store/storeTypes';
import actions from '../../store/actions';
import thunks from '../../store/thunks';
import selectors from '../../store/selectors';

import Header from '../../components/header';
import Filters from '../../components/filters';
import Sorting from '../../components/sorting';
import Tickets from '../../components/tickets';
import './app.scss';

type Props = PropsFromRedux

const App: React.FC<Props> = (props: Props) => {
  const {
    tickets,
    ticketsCount,
    filters,
    sorting,
    isFetching,
    hasError,
    fetchTickets,
    setFilter,
    setSorting
  } = props;

  React.useEffect(() => {
    fetchTickets();
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
            ticketsCount={ticketsCount}
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
  ticketsCount: selectors.getTicketsCount(state),
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

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App);
