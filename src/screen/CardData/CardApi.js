import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./api.css";

import { auth, getAds } from "../../config/firebase";

function CardApi() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const ads = await getAds();
    // console.log('ads components' ,ads)
    setProducts(ads);
    // console.log("setProduct data show", ads);
  };

  if (!products.length) {
    return (
      <div className="load-img">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*Gvgic29bgoiGVLmI6AVbUg.gif"
          alt="jpc
        g"
        />
      </div>
    );
  }

  return (
    <div className="App">

     
      <br />
<div className="Main-cards">

      {products.map((item) => {
        const { title, id, description, imageUrls, price } = item;
        return (
          <Card
            key={item.id}
            id={id}
            title={title}
            description={description}
            price={price}
            img={imageUrls}
            />
            );
          })}
          </div>
    </div>
  );
}

export default CardApi;
