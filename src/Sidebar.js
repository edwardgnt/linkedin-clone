import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="" />
            <Avatar className='sidebar__avatar' />
            <h2>Edward Güereque</h2>
            <h4>edwardgnt@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,448</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar