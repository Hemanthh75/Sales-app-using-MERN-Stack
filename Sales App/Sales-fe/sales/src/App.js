import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SalesAdd from './Pages/SalesAdd';
import Topsales from './Pages/Topsales';
import Todaysrevenue from './Pages/Todaysrevenue';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  return (
    <div>
       <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path='salesadd' element={<SalesAdd/>}></Route>
          <Route exact path='top5sales' element={<Topsales/>}></Route>
          <Route exact path='todayrevenue' element={<Todaysrevenue/>}></Route>
          <Route exact path='login' element={<Login />}></Route>
          <Route exact path='register' element={<Register />}></Route>
        </Routes>
       </Router>
    </div>
  )
}

export default App;