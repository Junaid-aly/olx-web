
import "./cardDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function CardDetails() {
  const db = getFirestore();
  const { Id } = useParams();
  const [product, setProduct] = useState(null);

  console.log("id data", Id);
  useEffect(() => {
    const getDetail = async () => {
      try {
        const docRef = doc(db, "Todos", Id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setProduct(docSnap.data());
        } else {
          // console.log("No such document!");
        }
      } catch (error) {
        console.error("error fetching details");
      }

    };
    getDetail();
  }, [Id, db]);


  if (!product) {
    return (
      <div>
        <img src="https://www.jimphicdesigns.com/downloads/imgs-mockup/row-of-blocks-loader-animation.gif" />
      </div>
    );
  }

  return (
    <div className="">
      <div className="main-details row">
        <div className="img-div col-8">
          {product && (
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper">
              {product.imageUrls.map((imageUrl) => (
                <SwiperSlide>
                  <img src={imageUrl} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

        </div>
        <div className="col-4 user-info-div">
          <img className="my-img" src={require("./IMG_3849..jpg")} />

          <div className="col-12 user-details ">
            <h1>Junaid Ali</h1>
            <p>Mumber since Dec 2024</p>
            <a href="">See Profile</a>
            <div className="btn">
              <button className="show-btn">
                <i className="fa-solid fa-phone"></i>
                Show Phone Number
              </button>

              <button className="call-btn">
                <i className="fa-regular fa-comments"></i>
                Chat
              </button>
            </div>
          </div>
          <div className="location">
            <h3>Location</h3>
            <h4>DHA Valley, Islamabad</h4>
          </div>
        </div>
        <div className="Detail-by-user">
          <h5>
            {product.title}
            {product.price}
          </h5>
          <h5> {product.description}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
