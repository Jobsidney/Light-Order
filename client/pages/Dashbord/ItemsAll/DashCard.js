import * as Hi from "react-icons/hi";
function DashCard() {
  return (
    <div className="dashCard flex flex-col justify-center">
        <div className="exp flex justify-evenly align-middle ">
            <div>
            <span>54</span>
            <h2>orders</h2>
            </div>
            <Hi.HiOutlineUserGroup className="all-Icons" size={50}/>
        </div>
      
    </div>
  )
}

export default DashCard
