import * as IoIcons from 'react-icons/io'
import DashCard from "./DashCard"

function Dashbord() {

 const profile=['name',"username","Favourite",'Area of residence','Age']
  return (
    <div className="userItems ">
      <div className=" profile2 flex flex-row">
        <DashCard/>
        <DashCard/>
        <DashCard/>
        <DashCard/>
      </div>
      <div className=" flex profile  flex-row justify-between ">
        <div className="first mr-4 px-4 py-8">
        <h1 className='text-center name underline'>My Profile</h1>
        <ul className='flex flex-col pt-10'>

          {
            profile.map((item)=> {return (
              <li className='flex flex-row mb-4 text-center inline-block align-baseline'>
              <IoIcons.IoMdPerson size={30}/>
              <span >{item}</span>
          </li>
            )})
          }



        </ul>
        </div>
        <div className="second px-4 py-8 ml-4 ">

        </div>
      </div>
    </div>
  )
}

export default Dashbord
