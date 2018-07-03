import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();


  createFish = event => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      des: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    //refresh the form
    event.currentTarget.reset();
  };

  render() {
    return (
     <form className="fish-edit" onSubmit={this.createFish}>
       <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
       <input price="price" ref={this.priceRef} type="text" placeholder="Price" />
       <select status="status" ref={this.statusRef}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold out!</option>
       </select>
       <textarea desc="desc" ref={this.descRef} type="text" placeholder="Desc"></textarea>
       <input image="image" ref={this.imageRef} type="text" placeholder="image" />
       <button type="submit">+ Add Fish</button>
     </form>
    );
  }
}

export default AddFishForm;
