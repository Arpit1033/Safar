import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { setLoginStatus } from "./Auth";
import "./SignUp.css";
// let isLoggedIns = false;

let userLoggedIn="";
let lin=false;

export const Login = (props) => {

    let navigate = useNavigate();
    const [uname, setUsername] = useState('');
    const [passwd, setPassword] = useState('');
    const [isFormValidated, setIsFormValidated] = useState(false);

    const handleLogin = async (event) => {
      event.preventDefault();
        try {
          const response = await axios.post("http://localhost:8082/safar/user/login",
          { 
            username: uname,
            password: passwd
          });
          const { message, status } = response.data;
          setLoginStatus(status);
          // isLoggedIn = true;
          lin=true;
          alert(message);
            if(status){
              userLoggedIn=uname;
              navigate("/adduser");
            }
            else{
              navigate("/login");
            }
          }
        
        catch (error) {
            console.error(error);
        }
      };

      const handleFormSubmit = (event) => {
        event.preventDefault();
        if (event.currentTarget.checkValidity()) {
          setIsFormValidated(true);
        } else {
          setIsFormValidated(false);
        }
      };

    return (
        <div className="auth-form-container">
            <h2>WELCOME TO SAFAR</h2>
        <form className={`login-form ${isFormValidated ? "was-validated" : ""}`} onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username: </label>
            <input
            value={uname}
            style={{textTransform:"none"}}
            type="username"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(event) => {
                setUsername(event.target.value);
            }}
            required
            />
            <label htmlFor="password">Password: </label>
            <input
            value={passwd}
            style={{textTransform:"none"}}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(event) => {
                setPassword(event.target.value);
            }}
            required
            />

            <button
            type="submit"
            className="login"
            onClick={handleLogin}>Login</button>
        </form>
        <button className="link" onClick={() => props.onFormSwitch('/register')}>Don't have an account? Register</button>
        </div>
    )
}

export {userLoggedIn, lin};