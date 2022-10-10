import DashCard from "./DashCard"

function Dashbord() {
  return (
    <div className="userItems ">
      <div className=" profile2 flex flex-row">
        <DashCard/>
        <DashCard/>
        <DashCard/>
        <DashCard/>
      </div>
      <div className=" flex profile  flex-row justify-between">
        <div className="first ">
        <h1>My Profile</h1>
        </div>
        <div className="second ">

        </div>
      </div>
    </div>
  )
}

export default Dashbord
