import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link, useLocation, useAsyncError } from "react-router-dom";
import { Checkbox, Message, Button } from "semantic-ui-react";
import "./login.css";
import {API_URL} from "../../config/config";
import axios from "axios"
import loginPic from "../../assets/images/login.jpg"

const Login = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/welcome";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [open, setOpen] = React.useState(false);
  const [forgetEmailModal,setForgetEmailModal] = useState(false);

  const [unknowUserWarning, setUnknownUserWarning] = useState(false);
 


  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  useEffect(() => {
    let value = localStorage.getItem("accessToken");
    if(value){
      navigate("/orders");
    }else{
      navigate("/login");
    }
  },[])
//10.1.23.124
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        JSON.stringify({ email: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const accessToken = response?.data?.token;
      const exp = response?.data?.exp;
      const userId = response?.data?.userId;

      localStorage.setItem("user", user);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("exp", exp);
      localStorage.setItem("userId", userId);


      setUser("");
      setPwd("");
      navigate("/orders");
    } catch (err) {
      if (!err?.response) {
        // toastErrorNotify("No Server Response");
      } else if (err.response?.status === 400) {
        // toastErrorNotify("Wrong password");
      } else if (err.response?.status === 403) {
        // toastSuccessNotify('Login Successful!')
        setOpen(true);
      } else {
        // toastErrorNotify("Login Failed");
      }
      errRef.current.focus();
    }
  
  };

  return (
    <>
      <div className="loginSection">
        <div className="forms">
          <div className="login">
            <form onSubmit={handleSubmit} className="loginForm">

              <h1 className="soft">ANYTHING LOGIN</h1>
              <label htmlFor="username">Email</label>
              <input
                className="loginInput"
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                className="loginInput"
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                <Message negative color="red">
                  <p>{errMsg}</p>
                </Message>
              </p>
              <div class="subcontainer">
                {/* <label className="remember">
                  <input className="remembers" type="checkbox" name="remember" /> <span>Remember me</span>
                </label> */}
                <p class="forgotpsd">
                  <a onClick={() => setForgetEmailModal(true)}>Forgot Password?</a>
                </p>
              </div>
              <Button  basic color='blue'>Login</Button>
            </form>
          </div>

        </div>

      </div>
    </>
  );
};

export default Login;