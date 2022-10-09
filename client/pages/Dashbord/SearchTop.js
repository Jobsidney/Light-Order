import React from 'react'
import Button from '../../components/ItemsBar/Button'
import SmallNavBar from './SmallNavBar'
import * as IoIcons from 'react-icons/io'
function SearchTop() {
  return (
    <div className='flex flex row p-3 pt-6 justify-between bg'>
     <SmallNavBar/>
     <div className="searchBar">
        <form className='flex' action="">
            <input placeholder='' type="text" />
            <IoIcons.IoIosSearch size={40}/>
        </form>
     </div>
     <div className='flex'>
       {/* <IoIcons.IoIosCart  size={40}/> */}
     <div className="userInfo flex flex-row">
        <img src="https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg" alt="" />
        <div className="name flex flex-col align-center item-center">
            <div>Job sidney</div>
            <span>Customer</span>
        </div>
     </div>
     </div>
    </div>
  )
}

export default SearchTop
