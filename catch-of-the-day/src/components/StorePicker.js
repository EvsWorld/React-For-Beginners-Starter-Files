import React from 'react';
import { render } from 'react-dom';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  // goToStore is property on the component, with an arrow function assigned to it arrow funtions bind to the instance???? Arrow functions will always be called with the context in which it was defined.
  goToStore = event => {
   // 1. Keeps page from reloading with forms are submitted. The event object is an object that contains lots of info re: the event
   event.preventDefault();
    // 2. Get text from that input
    const storeName = this.myInput.value.value
    // 3. CHange the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
   }

   // runs after component mounts
   componentDidMount() {
     console.log(`Mounted!!      'this' above the render method of StorePicker:\n\n`, this);
   }

  render () {
    return (
      <form  className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        {/* getFunName() is here with parens, which calls it when component mounts. */}
        <input
          type='text'
          ref={this.myInput}
          required
          placeholder='Store Name' defaultValue={getFunName()}
           />
        <button type='submit'>Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
