import React, { Component } from 'react';
import Table from './Table';
import appStore from './Store';
class App extends Component {
  render() {
    return (
      <div>

      <Table store={appStore}/>
      </div>
    );
  }
}

export default App;
