import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Common/components/Navbar';
import StartPage from './StartPage/StartPage';
import TodoPage from './TodoPage/TodoPage';
import MovieSearch from './MovieSearch/MovieSearch';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path='/' component={StartPage} />
        <Route exact path='/att-gora' component={TodoPage} />
        <Route exact path='/filmer' component={MovieSearch} />
      </div>
    );
  } 
}

export default App;
