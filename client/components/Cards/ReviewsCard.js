import IconBtn from "../SearchBar/iconBtn"

function ReviewsCard() {
  return (
    <div className='fcard review  m-5 flex flex-col'>
        <div className='flex'>
            <IconBtn/>
            <div className="grid text-sm">
                <h2>Shee Tabz</h2>
                <p>Nairobi kenya</p>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit minima voluptatem reprehenderit a</p>
        <div></div>
    </div>
  )
}

export default ReviewsCard
