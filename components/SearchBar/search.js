import IconBtn from "./iconBtn"

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
          <IconBtn/>  
            
        </div>
    </div>
  )
}

export default Search
