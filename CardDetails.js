import './cardDetails.css'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function CardDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductDetails();
  },[]);

  const getProductDetails = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((response) => setData(response));
      console.log(setData)

  };

  return (
    <div className="">
      <div className="Main-card ">
        <div class="card-img">
          <img src={data.thumbnail} class="card-img-top" alt="..." />
        </div>
        <div className=" my-img">
          <img src={require("./IMG_3849..jpg")} />
          <div>
            <h1>Junaid Ali</h1>
          </div>
          <div className="btn">
            <button className="show-btn">
              <i class="fa-solid fa-phone"></i>
              Show Phone Number
            </button>

            <button className="call">
              <i class="fa-regular fa-comments"></i>
              Chat
            </button>
          </div>
          <div class="card-body">
            <div>
              <h5 class="card-title">Title {data.title}</h5>
            </div>
            <span class="card-text">
              <h5>Description</h5>
              {data.description}
            </span>
            <h4 class="card-text">
              Price $ {data.price}
            </h4>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}

export default CardDetails;
