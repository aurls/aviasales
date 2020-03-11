import React, { Fragment } from 'react';

import Header from '../Header';
import Filters from '../Filters';
import Sorting from '../Sorting';
import Tickets from '../Tickets';
import './app.scss';

class App extends React.Component {
  render () {
    return (
      <Fragment>
        <Header />
        <div className="app">
          <aside className="app__sidebar">
            <Filters />
          </aside>
          <main className="app__main">
            <Sorting />
            <Tickets />
          </main>
        </div>
      </Fragment>
    );
  }
}

export default App;
