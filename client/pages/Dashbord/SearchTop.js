import React from 'react'
import Button from '../../components/ItemsBar/Button'
import SmallNavBar from './SmallNavBar'

function SearchTop() {
  return (
    <div className='flex flex row p-3 pt-6 justify-between bg'>
     <SmallNavBar/>
     <div className="searchBar">
        <form action="">
            <input type="text" />
        </form>
     </div>

     <div className="userInfo flex flex-row">
        <img src="https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg" alt="" />
        <div className="name flex flex-col align-center item-center">
            <div>Job sidney</div>
            <span>Customer</span>
        </div>
     </div>
    </div>
  )
}

export default SearchTop
