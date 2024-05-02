

import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToCart } from "../../store/cartSlice";

function Card(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, price, title, description, img } = props;

  const handleAddToCart = () => {
    dispatch(setToCart(props));
    alert("Item added to cart!");
  };

  return (
    <div className="Main-card mb-5">
      <div className="Main-card ">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="titleDiv">
          <h2 className="card-subtitle m-2 text-body">{title}</h2>
            <h5 className="card-title">Rs {price}</h5>
          </div>
          <br></br>
          <h6 className="card-subtitle m-2 text-body-secondary">
            {description}
          </h6>

          <button onClick={handleAddToCart} className="add-cart">
            Add to Cart
          </button>

          <button onClick={() => navigate(`/card/${id}`)} className="add-cart">
            Card Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

