import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
   return (
     <div className="app-bg">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
           <a className="navbar-brand">SALES APP</a>
           <button
             className="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNav"
             aria-controls="navbarNav"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <NavLink to='/salesadd' className='text-decoration-none'><a className="nav-link active" aria-current="page">
                   ADD SALES
                 </a></NavLink>
               </li>
               <li className="nav-item">
                 <NavLink to='/top5sales' className='text-decoration-none'><a className="nav-link">TOP 5 SALES</a></NavLink>
               </li>
               <li className="nav-item">
                 <NavLink to='/todayrevenue' className='text-decoration-none'><a className="nav-link">TODAY'S TOTAL REVENUE</a></NavLink>
               </li>
               <li className="nav-item">
                 <NavLink to='/login' className='text-decoration-none'><a className="nav-link disabled">LOGIN</a></NavLink>
               </li>
               <li className="nav-item">
                 <NavLink to='/register' className='text-decoration-none'><a className="nav-link disabled">REGISTER</a></NavLink>
               </li>
               <li className="nav-item">
                 <a className="nav-link disabled">LOGOUT</a>
               </li>
             </ul>
           </div>
         </div>
       </nav>
     </div>
   );
}

export default Navbar;