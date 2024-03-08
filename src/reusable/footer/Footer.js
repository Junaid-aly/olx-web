
import '../footer/footer.css'
import React from "react";


export default function Footer() {
  return (
    <div className="Footer-img">
      {/* <h1>this footer page</h1> */}

      <div style={{ position: "relative", bottom: "0px", width: "100%" }}>
        <div id="foot1" style={{ backgroundColor: "#ebeeef", width: "100%" }}>
          <div style={{ display: "flex" }}>
            
           
           
          </div>
        </div>

        <div id="links">
          <ul>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                color: "rgb(0, 47, 82)",
              }}>
              POPULAR CATEGORIES
            </li>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Jobs</li>
            <li>Mobile Phones</li>
          </ul>

          <ul>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                color: "rgb(0, 47, 82)",
              }}>
              Trending Searches
            </li>
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
          </ul>
          <ul>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                color: "rgb(0, 47, 82)",
              }}>
              About US
            </li>
            <li>About OLX Group</li>
            <li>About US</li>
            <li>Contact US</li>
            <li>OLX for business</li>
          </ul>
          <ul>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                color: "rgb(0, 47, 82)",
              }}>
              OLX
            </li>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal and Privacy Information</li>
          </ul>
          <div style={{ marginLeft: "4%" }}>
            <p style={{ color: "rgb(0, 47, 82)" }}>FOLLOW US</p>
            <div style={{ display: "flex", fontSize: "20px" }}></div>
            <i className="fa-brands fa-square-facebook"></i> facebook <br />
            <i className="fa-brands fa-linkedin"></i> linkedin <br />
            <i className="fa-brands fa-twitter"></i> twitter <br />
          </div>
        </div>
      </div>
    </div>
  );
}