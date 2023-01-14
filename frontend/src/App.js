import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './Pages/Signin/SignIn'
import SignUp from './Pages/Signup/SignUp'
import Dashboard from './Pages/DashBoard/Dashboard'
import Profile from './Pages/Profile/Profile'
import Bookings from './Pages/Bookings/Bookings'

function App() {
  return (
    <Router>
      <div className="App">
       
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path='/dash' element={<Dashboard />} />
              <Route path='/bookings' element={<Bookings />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          
        
      </div>
    </Router>
  )
}

export default App