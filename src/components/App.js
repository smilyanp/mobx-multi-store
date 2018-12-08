import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('RootStore')
@observer
class App extends Component {
  render() {
    console.log('props: ', this.props.RootStore.oneStore.isLoading);
    console.log('Through store One from store Two: ', this.props.RootStore.twoStore.fromStoreOne);
    return (
      <div className="App">
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
