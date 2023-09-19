import React, { useState } from "react";
import './Register.css';
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      const requestData = { firstName, lastName, email, password };
      axios.post('http://localhost:3001/register', requestData)
      .then((response) => {
          if (response.status === 201) {
            Swal.fire({
              icon: 'success',
              title: 'User registration is successful',
              text: 'You can now log in with your new account.',
            });
            clearFields();
          }
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          Swal.fire({
            icon: 'error',
            title: 'Registration Error',
            text: error.response.data.message,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Registration Error',
            text: 'An error occurred during registration.',
          });
        }
      })
    }

    const clearFields = () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    };

    return (
        <div className="container">
          <div className="row">
            <div className="col-12">
                <h1 style={{textAlign:"center"}}>REGISTRATION FORM</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
            <div className="card">
              <div className="card-body">
                 <form onSubmit={handleSubmit}>
                    <label>
                        First Name
                    </label>
                    <input type="text" value={firstName} onChange={(ev) => setFirstName(ev.target.value)}/>
                    <label>
                        Last Name
                    </label>
                    <input type="text" value={lastName} onChange={(ev) => setLastName(ev.target.value)} />
                    <label>
                        Email
                    </label>
                    <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
                    <label>
                        Password
                    </label>
                    <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                 </form>
              </div>
            </div>
            </div>
          </div>
        </div>
    )
}

export default Register;
