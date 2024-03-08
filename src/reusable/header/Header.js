import React, { useEffect, useState } from "react";
import "./header.css";
// import { Button , Card} from "bootstrap";
import Navbar from "../navbar/Navbar";
import CardData from "../../screen/CardData/CardApi";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { UpDateImg, UserData } from "../../config/firebase";
import cartItems from '../../screen/addToCart/App'

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [userData, setUserData] = useState();

  const [image, setImage] = useState();
  // console.log(cartItems, 'lenght');

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user;
        setUser(uid.email);
        console.log(user);
      } else {
        // User is signed out
        setUser(null); // Redirect to login page or handle the sign-out logic
      }
    });
  }, []);
  useEffect(() => {
    FetchUser();

    async function FetchUser() {
      try {
        const UserAll = await UserData();
        //  console.log("userALL ", UserAll);

        const FoundUser = UserAll.filter((res) => res.email === user);

        if (FoundUser.length > 0) {
          //  console.log("foundUser data", FoundUser);
          setUserData(FoundUser);
        } else {
          //  console.log("Founduser data not Found");
        }
      } catch (error) {
        console.error("Error fetching users data", error);
      }
    }
  }, [user]);

  async function UploadImg() {
    await UpDateImg(userData, image);
    console.log(userData[0].img);
  }

  return (
    <div className="hero">
      <div className="container-fluid bg-light  bg-body-tertiary rounded">
        <div className="container">
          <div className="row">
            <ul className="nav-header">
              <li className="nav-item ">
                <a className="nav-link text-block" aria-current="page" href="#">
                  <img
                    className="me-3"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"
                    width={"35px"}
                    height={"19px"}
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-block" href="#">
                  <span className="Car me-2">
                    <i className="m-1 fa fa-solid fa-car"></i>
                  </span>
                  MOTORS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-block" href="#">
                  <span className="Car ms-3 me-2">
                    <i className="m-1 fa fa-solid fa-building "></i>
                  </span>
                  PROPERTY
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container">
                <>
                  {/* Navbar*/}
                  <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                    <div className="container-fluid">
                      {/* Left elements */}
                      <div className="d-flex">
                        {/* Brand */}
                        <a
                          className="navbar-brand me-2 mb-1 d-flex align-items-center"
                          href="#">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Logotyp_OLX_.png/1200px-Logotyp_OLX_.png"
                            height={30}
                            alt=" Logo"
                            loading="lazy"
                          />
                        </a>
                        {/* Search form */}
                        <form className="input-group w-auto my-auto ">
                          <input
                            autoComplete="off"
                            type="search"
                            className="form-control "
                            placeholder="Search"
                            style={{ minWidth: 250, height: 43 }}
                          />
                        </form>
                      </div>
                    </div>
                  </nav>
                  {/* Navbar */}
                </>
                <>
                  {/* Navbar*/}
                  <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary search-btn-">
                    <div className="container-fluid justify-content-between">
                      {/* Left elements */}
                      <div className="d-flex">
                        {/* Brand */}
                        <a
                          className="navbar-brand me-2 mb-1 d-flex align-items-center"
                          href="#"></a>
                        {/* Search form */}
                        <form className="input-group s-block w-auto my-auto d-none d-sm-flex ">
                          <input
                            autoComplete=""
                            type="search"
                            className="form-control "
                            placeholder="Search"
                            style={{ minWidth: 400 }}
                          />
                          <button
                            className="btn btn-success search-btn"
                            type="submit">
                            <i className="fas fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </nav>

                </>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto ">
                    <div>
                      {user ? (
                        <div className="dropdown">
                          <div className="profile">
                            {userData ? (
                              <img src={userData[0].img} alt="jpg"/>
                            ) : (
                              <img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"  alt="jpg"/>
                            )}
                            <div className="dropdown-content">
                              <ul className="ul">
                                <li>
                                  <i className="" />
                                  {userData ? (
                                    <img src={userData[0].img} />
                                  ) : (
                                    <img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"  alt="jpg"/>
                                  )}
                                  <span>hello</span>
                                  <span> {user}</span>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="logout"
                                    onClick={() => navigate("/Profile")}>
                                    View and edit your profile
                                  </a>
                                </li>
                                <li>
                                  <i className="bx bx-log-in-circle" />
                                  <span>
                                    <button
                                      className="logout"
                                      onClick={() => signOut(auth)}>
                                      Logout
                                    </button>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <button
                          className="login-a"
                          onClick={() => navigate("/login")}>
                          Login
                        </button>
                      )}
                    </div>
                    <span className="adcart">
                      <span onClick={() => navigate("/addtocart")}>
                        <i class="fa-solid fa-cart-shopping"></i>
                        {cartItems.length}
                      </span>
                    </span>

                    <li>
                      {user ? (
                        <button
                          className="Sell-btn"
                          onClick={() => navigate("/additem")}>
                          <i className="fa-solid fa-plus"></i>SELL
                        </button>
                      ) : (
                        <button
                          className="Sell-btn"
                          onClick={() => navigate("/register")}>
                          <i className="fa-solid fa-plus"></i>Sell
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Navbar />
      <CardData />
    </div>
  );
}

export default Header;



