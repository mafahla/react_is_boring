import React from 'react'
import { useState, useEffect } from "react";
import Sidebar from '../../Components/SideBar/Sidebar'
import TopNav from "../../Components/TopNav/TopNav";
import './dashboard.css'
import SingleCard from "../../Components/Reuseable/SingleCard"
import Loader from '../../Components/loader/Loader';


const carObj = {
  title: "Total Maids",
  totalNumber: 750,
  icon: "ri-team-fill",
};

const tripObj = {
  title: "Daily Bookings",
  totalNumber: 1697,
  icon: "ri-calendar-event-line",
};

const clientObj = {
  title: "Clients ",
  totalNumber: "85k",
  icon: "ri-user-line",
};

//   const distanceObj = {
//     title: "Kilometers Daily",
//     totalNumber: 2167,
//     icon: "ri-timer-flash-line",
//   };

function Dashboard() {


  return (
    <div>
      
      <Sidebar />
      <div className="main__layout">
        <TopNav />

        <div className="content">
        
          <div className="dashboard">
            <div className="dashboard__wrapper">
              <div className="dashboard__cards">
                <SingleCard item={carObj} />
                <SingleCard item={tripObj} />
                <SingleCard item={clientObj} />
                

              </div>
              <Loader />



            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
