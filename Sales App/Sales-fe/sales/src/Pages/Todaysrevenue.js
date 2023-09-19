import React, { useEffect, useState } from "react";
import './Todaysrevenue.css';
import axios from "axios";

const Todaysrevenue = () => {
    const[totalrevenue, setTotalrevenue] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/totalrevenue')
        .then((response)=> {
            setTotalrevenue(response.data)
        })
        .catch((error) => {
            console.error('Error while fetching the total revenue:', error)
        })
    })

    return (
        <div>
            <h1 style={{textAlign: "center"}}>TODAY'S REVENUE IS {totalrevenue}</h1>
        </div>
    )
}

export default Todaysrevenue;