import React, {Component} from "react";

class FoodImage extends Component {
  render() {
    const imgUrl = this.props.imgUrl;

    return (
      <img src={imgUrl ? imgUrl : "/assets/food-images/burger.jpg"}
        alt="Food Image"
        className={this.props.className} />
    );
  }
}

export default FoodImage;