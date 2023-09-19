import React, { useState } from "react";
import "./SalesAdd.css";
import axios from "axios";
import Swal from "sweetalert2";

const SalesAdd = () => {

  const[name, setName] = useState('');
  const[quantity, setQuantity] = useState('');
  const[amount, setAmount] = useState('');
 
  const handlesubmit = (e) => {
     e.preventDefault();
     const requestData = {product_name : name, product_quantity : quantity, product_amount : amount};
     axios.post('http://localhost:3001/addsales', requestData)
     .then((response) => {
          if(response.status === 201) {
             Swal.fire({
              icon : 'success',
              title : 'Item added successfully'
             })
          }
     })
     .catch((error) => {
          Swal.fire({
             icon : 'error',
             title : 'Some error occurred while adding item'
          })
     })

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 style={{ textAlign: "center" }}>ADD SALE ENTRY</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handlesubmit}>
                <label>Product Name</label>
                <input type="text" value={name}  onChange={(ev) => setName(ev.target.value)}/>
                <label>Quantity</label>
                <input type="text" value={quantity} onChange={(ev) => setQuantity(ev.target.value)}/>
                <label>Amount</label>
                <input type="text" value={amount} onChange={(ev) => setAmount(ev.target.value)} />
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAdd;
