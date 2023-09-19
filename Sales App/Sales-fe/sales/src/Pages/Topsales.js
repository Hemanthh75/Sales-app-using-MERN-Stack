import React, { useEffect, useState } from "react";
import './Topsales.css';
import axios from "axios";

const Topsales = () => {
   
  const[topsales, setTopsales] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/top5sales')
    .then((response) => {
       setTopsales((response.data))
    })
    .catch((error) => {
      console.error('Error while fetching the top sales data', error)
    });
  }, [])


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 style={{ textAlign: "center" }}>TOP 5 SALES</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row salesheading">
                    <div className="col-1">
                         <h5>#</h5>
                    </div>
                    <div className="col-2">
                        <h5>Sales Id:</h5>
                    </div>
                    <div className="col-3">
                        <h5>Product Name</h5>
                    </div>
                    <div className="col-3">
                        <h5>Quantity</h5>
                    </div>
                    <div className="col-3">
                        <h5>Sale Amount</h5>
                    </div>
                </div>
                {topsales.map((sale, index) => (
                <div className="row product1 products">
                <div className="col-1">
                        <p>{index + 1}</p>
                    </div>
                    <div className="col-2">
                    <p>{sale._id}</p>
                    </div>
                    <div className="col-3">
                    <p>{sale.product_name}</p>
                    </div>
                    <div className="col-3">
                    <p>{sale.product_quantity}</p>
                    </div>
                    <div className="col-3">
                    <p>{sale.product_amount}</p>
                    </div>
                </div>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topsales;
