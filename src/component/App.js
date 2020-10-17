import React from 'react';
import { ListItems,ListItemDisplay } from './';

class App extends React.Component {
  render() {
    return (
      <div className="component-container">
        <ListItems/>
        <ListItemDisplay />
      </div>  
    );
  }
}

export default App;
