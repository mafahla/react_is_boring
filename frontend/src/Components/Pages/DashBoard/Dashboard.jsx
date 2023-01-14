import React from 'react'
import Sidebar from '../../SideBar/Sidebar'
import './dashboard.css'


function Dashboard() {
  return (
    <div>
      <Sidebar />
      <div className='container'>
        <div className="header">
            <div className="nav">
                <div className="search">
                    <input type="text" placeholder='search...' />

                    <button type='submit'>
                        <img src='https://imgs.search.brave.com/bosXnONXx_7QFhZf-oQs3hzRGuZKBK-BwabMPvXCAfs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3NlYXJjaC1i/dXR0b24tcG5nLXNl/YXJjaC1pY29uLXRo/aXMtaWNvbi1pcy1z/dXBwb3NlZC10by1y/ZXByZXNlbnQtYS1t/YWduaWZ5aW5nLWds/YXNzLWl0LXMtYS1s/YXJnZS1wbmctNTAt/cHgtMTYwMC5wbmc'></img>
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

      </div>
    </div>
  )
}

export default Dashboard
