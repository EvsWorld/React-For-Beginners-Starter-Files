import React from 'react';

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    // 1. Stop form from submitting
    event.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value), // Stores your money in cents
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value,
    }
    console.log(fish);
    // {Object.keys(fish).forEach( p => console.log(fish[p]))}
    // every time we submit form, creatFish is called, which now calls addFish (which was passed down from App component.)
    this.props.addFish(fish);
    event.currentTarget.reset();
  }



  render() {
    return (
      <form className='fish-edit' onSubmit={this.createFish} >
          <input name='name'ref={this.nameRef} type='text' placeholder='Name' />
          <input name='price'ref={this.priceRef} type='text' placeholder='Price' />
          <select name='status'ref={this.statusRef} >
            <option value='available'>Fresh</option>
            <option value='unavailable'>Sold Out</option>
          </select>
          <textarea name='desc'ref={this.descRef} placeholder='Desc' />
          <input name='image'ref={this.imageRef} type='text' placeholder='Image' />
          <button type='submit'> + Add Fish </button>
      </form>
    );
  }
}

export default AddFishForm;
