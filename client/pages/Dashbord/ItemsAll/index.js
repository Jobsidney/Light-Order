import * as IoIcons from 'react-icons/io'
import DashCard from "./DashCard"
import * as AiIcons from 'react-icons/ai'
function Dashbord() {

 const profile=['name',"username","Favourite",'Area of residence','Age']
 const favorite=['Electronics',"Gaming","Fashion","Sporting gear",'Electronics',"Gaming","Fashion","Sporting gear",'Electronics',"Gaming","Fashion","Sporting gear",'Electronics',"Gaming","Fashion","Sporting gear"]
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
        <img src="https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg" alt="" />
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
          <h3 className="sampleOrder text-center name">Favourites</h3>
          <ul className='overflow-scroll scrollbar-hide'>
            {
              favorite.map(item=>(<li className='flex flex-row justify-between '>{item} <AiIcons.AiOutlineClose/></li>))
            }
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Dashbord
