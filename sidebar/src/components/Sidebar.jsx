import React from 'react'
import { SidebarData } from './SidebarData'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        sidebar
        <ul className='menu'>
            {SidebarData.map((value, key) => {
                return (
                    <li className='sidebarMenu' key={key} onClick={() => {
                        window.location.pathname = value.url;
                    }}>
                        {/* <div>{vlaue.icon}</div> */}
                        <div className='picture'>{key}</div>
                        <div className='name'>{value.name}</div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Sidebar