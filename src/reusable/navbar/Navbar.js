import React from 'react'
import './Navbar.css'
// import { useNavigate } from 'react-router-dom';
function Navbar() {
  return (
    <div className="container">
      <div className="container-main">
        <nav className="Navbar-nav">
          <a href="">All categories</a>
          <i className="fa-solid fa-angle-down"></i>
          <a href="">Mobile Phone</a>
          <a href="">Car</a>
          <a href="">Motorcycles</a>
          <a href="">Houses</a>
          <a href="">Video-Audio</a>
          <a href="">Tablets</a>
          <a href="">Land & Plots</a>
        </nav>
        <br />
      </div>
      <div className="containers">
        <div className="wrapper ">
          <img src="https://images.olx.com.pk/thumbnails/422461769-800x600.webp" />
          <img src="https://cdn.homeshopping.pk/templates/ResGarden/images/HomeSlider2018/applicance-wf2022-1440x330.png" />
          <img src="https://cdn.homeshopping.pk/templates/ResGarden/images/HomeSlider2018/smartphones-wf2022-1440x330.png" />
          <img src="https://chasevalue.pk/cdn/shop/files/1._1_eb90415c-61a0-4d30-bce2-3e3d6affb582_2000x.jpg?v=1704481365 " />
          <img src="https://chasevalue.pk/cdn/shop/files/Banner_9f2122df-e4c9-495b-8d73-b6048be75333_2000x.jpg?v=1700314395" />
          <img src="https://images.olx.com.pk/thumbnails/422461769-800x600.webp" />
        </div>
      </div>
      <h4>All categories</h4>
      <div className="cat-area">
        <div>
          <div className="cat-card">
            <img
              src={require("./mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png")}
            />
            <p>
              Mobile <br />
              &nbsp;
            </p>
          </div>
          <div className="cat-card">
            <img
              src={require("./vehicles.29fb808d5118f0db56f68a39ce5392e2.png")}
            />
            <p>
              vehicles <br /> &nbsp;
            </p>
          </div>
          <div className="cat-card">
            <img
              src={require(".//property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png")}
            />
            <p>
              property for <br />
              sale
            </p>
          </div>
          <div className="cat-card">
            <img
              src={require("./property-for-rent.8436595fbaa90d47f0178006f57090a8.png")}
            />
            <p>
              property for <br /> rent
            </p>
          </div>
          <div className="cat-card">
            <img
              src={require("./electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984 (1).png")}
            />
            <p>
              electronics home <br /> appliances
            </p>
          </div>

          <div className="cat-card">
            <img
              src={require("./business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png")}
            />
            <p>
              business industrial <br /> agriculture
            </p>
          </div>
          <div className="cat-card">
            <img
              src={require("./furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png")}
            />
            <p>
              furniture home <br /> decor
            </p>
          </div>
          <div className="cat-card">
            <img
              src={require("./books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png")}
            />
            <p>
              books sports <br /> hobbies
            </p>
          </div>
          <div className="cat-card">
            <img
              src={require("./services.dc6aef196c0403dc61b0ee813f66fa5b.png")}
            />
            <p>
              services <br />
            </p>
          </div>
          <div className="cat-card">
            <img src={require("./jobs.79e6136dda02111cf8e7afe26b9e0f93.png")} />
            <p>Jobs</p>
          </div>
          <div className="cat-card">
            <img
              src={require("./animals.62d396e85f7523dbc8ff23889fdd5c31.png")}
            />
            <p>Animals</p>
          </div>
          <div className="cat-card">
            <img
              src={require("./bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png")}
            />
            <p>Bikes</p>
          </div>

          <div className="cat-card">
            <img
              src={require("./fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png")}
            />
            <p>fashion beauty</p>
          </div>

          <div className="cat-card">
            <img src={require("./kids.cd8d8864804f1c35dd6a7df68268a48d.png")} />
            <p>Kids</p>
          </div>
        </div>
      </div>

      <h3>More & Electronics & Home & Applicance</h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Navbar;
