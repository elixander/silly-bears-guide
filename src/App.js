import React from 'react';

import './App.css';
import Blanket from './components/Blanket';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="bear">
        </div>
        <Blanket></Blanket>
      </div>
    );
  }
}

export default App;
