
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../config/firebase";
import "./login.css";

function Logins() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    await login({ email, password }, navigate);
  };

  return (
    <div className="container-fluid body-login">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img
            src="https://img.freepik.com/photos-premium/illustration-entreprise-ligne_863013-38590.jpg"
            className="img-fluid"
            alt="illustration"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="login-form bg-white p-4">
            <h1 className="mb-4">Login</h1>
            <input
              className="form-control mb-3"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-control mb-3"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary btn-block mb-3" onClick={signIn}>
              Login
            </button>
            <p>
              Don't have an account.{" "}
              <span
                className="text-primary"
                onClick={() => navigate("/register")}>
                Click here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logins;
