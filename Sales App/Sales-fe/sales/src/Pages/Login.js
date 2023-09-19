import React, { useState } from "react";
import "./Login.css";
import Swal from "sweetalert2";
import axios from "axios";


const Login = () => {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');



  const handlesubmit = (e) => {
     e.preventDefault();
     const requestData = {email, password}
     axios.post('http://localhost:3001/login', requestData)
     .then((response) => {
         if(response.status === 201) {
          Swal.fire({
            icon : 'success',
            title : 'User logged in successfully'
          });
         }
     })
     .catch((error) => {
        Swal.fire({
          icon : "error",
          title : "Some error during login"
        })
     })

  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 style={{ textAlign: "center" }}>LOGIN FORM</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                 <form onSubmit={handlesubmit}>
                    <label>
                        Email
                    </label>
                    <input type="email" value={email}  onChange={(ev) => setEmail(ev.target.value)}/>
                    <label>
                        Password
                    </label>
                    <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} />
                    <button type="submit" className="btn btn-primary">Login</button>
                 </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
