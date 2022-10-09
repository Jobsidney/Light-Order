import IconBtn from "./iconBtn"
import { BiGridSmall } from "react-icons/bi";
function Search() {
  return (
    <div className="search all">
        <div className="search">
            <div>logo</div>
            <input className='bg-slate-400' type="text" />
        </div>
        <div className="user search">
          <IconBtn/>
          <IconBtn/>
          <IconBtn/>
          <div className="div"></div>
          <IconBtn/>  
            
        </div>
    </div>
  )
}

export default Search
