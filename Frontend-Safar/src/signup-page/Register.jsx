import axios from "axios";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./SignUp.css";
export const Register = (props) => {
    const [id,setId] = useState();
    const [uname,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [passwd,setPassword] = useState("");
    const [isFormValidated, setIsFormValidated] = useState(false);


    // const [validEmail, setValidEmail] = useState(false);
    // const [validPassword, setValidPassword] = useState(false);

    // function handleChangePassword(event) {
    //     if (regex.test(event.target.value)) {
    //         setValidPassword(true);
    //     } else {
    //         setValidPassword(false);
    //     }
    
    // function handleChangeEmail(event) {
    //     if(regex.test(event.target.value)){
    //         setValidEmail(false);
    //     }
    //     else{
    //         setValidEmail(true);
    //     }
    // }

    const emailRegex = /^[A-Z0-9a-z._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,12}$/;

    async function save(event)
    {
        event.preventDefault();
        if(emailRegex.test(email)){
            try {
                await axios.post("http://localhost:8082/safar/user/register",
                {
                  username: uname,
                  email : email,
                  password : passwd
                });
                setId();
                setUserName("");
                setEmail("");
                setPassword("");
                alert("Account Created Successfully");
              }
              catch(err) {
                  alert("Registration Failed !");
              }
        }else{
            alert("enter valid email");
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (event.currentTarget.checkValidity() && emailRegex.test(email)) {
          setIsFormValidated(true);
          save(event);
        } else {
          setIsFormValidated(false);
        }
      };

    
    return (
        <div className="auth-form-container">
            <h2>Create New Account</h2>
        <form className={`register-form ${isFormValidated ? "was-validated" : ""}`} onSubmit={handleFormSubmit}>
            <div className="form-group">
                <FaUser/>
                <input value={uname} style={{textTransform:"none"}} type="username" name="username" id="username" placeholder="Username" required
                onChange={(event) => {
                    setUserName(event.target.value);
                }}
                />
            </div>
            
            <div className="form-group">
                <FaEnvelope/>
                <input
                value={email}
                style={{textTransform:"none"}}
                type="email"
                placeholder="Email"
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                />
            </div>
            
            <div className="form-group">
                <FaLock/>
                <input value={passwd}
                type="password"
                title="Password length should be between 6 to 12 characters"
                name="password" id="password"
                placeholder="Password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                />
            </div>
            
            <div className="create">
                <button type="submit" onClick={save}>Create Account</button>
            </div>    
        </form>
        <button className="link" onClick={() => props.onFormSwitch('/login')}>Already have an account? Login</button>
        </div>
    )
}
