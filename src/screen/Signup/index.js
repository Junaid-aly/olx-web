
import React, { useState } from "react";
import { register } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import './signup.css'
function Register() {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    register({ email, password, age, fullname });
    // navigate('/login')
  };

  return (
    <div className="Main">
      <div className="container-fluid w-100 body-signup">
        <div className="Signup-form bg-white">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://static.vecteezy.com/system/resources/previews/001/436/600/non_2x/designer-work-with-internet-free-vector.jpg"
                className="img-fluid"
                alt="Registration"
              />
            </div>
            <div className="col-md-6 input-form">
              <h2>Register</h2>
              <input
                placeholder="Fullname"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                className="form-control"
              />
              <br />
              <input
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control"
              />
              <br />
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
              <br />
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
              <br />
              <button onClick={signup} className="btn btn-primary">
                Register
              </button>
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  style={{ cursor: "pointer" }}>
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
