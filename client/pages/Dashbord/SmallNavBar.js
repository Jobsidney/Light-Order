import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { a } from 'react-router-dom'
import {SideBarData} from './NavData'
function SmallNavBar() {
    const [sidebar,setSidebar]=useState(false)

    function toggle(){
        setSidebar(!sidebar)
        console.log(sidebar);
    }
  return (
    <>
    
      <div className="navBar2 blacky nav-active activate">
        <a to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={toggle}/>
        </a>
    </div> 
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
           <li className="navbar-toggle">
                <a to="#" className='menu-bars' onClick={toggle}>
                    <AiIcons.AiOutlineClose/>
                </a>
            </li>
            {
                SideBarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <a className='flex flex-row ' to={item.path} >
                                {item.icon}
                                <span>{item.Title}</span>
                            </a>
                        </li>
                    )
                })
            }
        </ul>    
    </nav> 
    </>
  )
}

export default SmallNavBar
