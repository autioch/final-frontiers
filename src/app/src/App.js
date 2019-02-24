import React, { Component } from 'react';
import './App.css';

import starMap from './core/board/starMap';
import StarMapView from './starMap/view';

class App extends Component {
  state = {
    starMap
  }

  render() {
    return (
      <div className="App">
        <StarMapView rows={this.state.starMap} starMapLocationId={47} />
      </div>
    );
  }
}

export default App;
