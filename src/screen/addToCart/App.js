import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cartReducer.addToCart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <h2>length {cartItems.length}</h2>
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <div>
                  {cartItems.map((item, index) => (
                    <div key={item.id} className="card rounded-3 mb-4">
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={item.img}
                              className="img-fluid rounded-3"
                              alt={item.title}
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{item.title}</p>
                            <p>
                              <span className="text-muted">Size: </span>
                              {item.size}{" "}
                              <span className="text-muted">Color: </span>
                              {item.color}
                            </p>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2"></button>

                            <button className="btn btn-link px-2"></button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">{item.price}</h5>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <button
                              onClick={() => handleRemoveFromCart(index)}
                              className="btn btn-link text-danger">
                              <i className="fas fa-trash fa-lg" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Discount code section */}
              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      id="discountCode"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="discountCode">
                      Discount code
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-warning  ms-3">
                    Apply
                  </button>
                </div>
              </div>

              {/* Proceed to pay button */}
              <div className="card">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-warning btn-block btn-lg">
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
