import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  // STUDY-react: Any method that modifies state should live in the same component where that state lives.
  state = {
    fishes: {},
    order: {}
  };
  // addfish is like a property
  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // (doesnt work) -->  this.state.fishes.fish1 = fish;
    // 3. Set the new fishes object to state
    this.setState({
      fishes: fishes
    });
    console.log();
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  // showFishes = () => {
    // {Object.keys(this.state.fishes).map(key => {
    //   return (
    //     <p>key</p>
        // <Fish
        //   name={key.name}
        //   image={key.image}
        //   desc={key.desc}
        //   price={key.price}
        //   status={key.status}
        // />
      // );
    // }) }
  // }

  render() {
    return (
     <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" subTagLine='really fishy fish' />
        <ul className="fishes">
          {Object.keys(this.state.fishes).map(key =>
          <Fish key={key} details={this.state.fishes[key]} />)}
        </ul>
      </div>
      <Order />
      <Inventory
        addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
     </div>
    );
  }
}

export default App;
