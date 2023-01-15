import React from 'react'
import Sidebar from '../../SideBar/Sidebar'
import './dashboard.css'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <div className='container'>
        <div className="header">
            <div className="nav">
                <div className="search">
                    <input type="text" placeholder='search...' />

                    <button className='w' type='submit'>
                    <CDBSidebarMenuItem icon="search"></CDBSidebarMenuItem>
                        {/* <img src='https://imgs.search.brave.com/Mvf1m1shXlqNr56Ctk5qbv6D5luqvCuBkXAD4or-pTY/rs:fit:980:981:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfMjY4NDIxLnBu/Zw'></img> */}
                    </button>
                </div>
                <div className="user">
                    <a href="#" className='btn'>Add New</a>
                    <div className="img-case">
                        <img src='https://imgs.search.brave.com/9ZnNxjGl6-JREVThtBLenptIJzTMEpQjWflC2QcIoIg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/dUxUZkVNWEZBcEFp/dTltY1RSaGhnSGFI/YSZwaWQ9QXBp'></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="cards">
                <div className="card">
                    <div className="box">
                        <h1>2342</h1>
                        <p>Maids</p>
                    </div>
                    <div className="icon-case">
                        <img src="https://imgs.search.brave.com/mAvEXrMjqdrUgoKA5YVTDz5te-IWYmkd7AQiB6Pj_AI/rs:fit:512:512:1/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8xNTYwOS9t/YWlkcy5zdmc.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
