import BlogCards from "../Cards/BlogCards"
import Title from "../Title"
import ReviewsCard from "../Cards/ReviewsCard"
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

function WholeBlog() {
  const sliderLeft=()=>{
    let slider=document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft-400
  }
  const sliderRight=()=>{
    let slider=document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft+400
  }
  return (
    <div className="blogs text-center">
    <Title title="Our Blog" span2={'Read '} des="Light Order operates its retail work on a stand-alone basis"/>
    <div className="scrollbar-hide flex md:justify-center  xsm:overflow-x-scroll xsm:scroll xsm:white-space-nowrap xsm:scroll-smooth ">
      <BlogCards/>
      <BlogCards/>
      <BlogCards/>
        
    </div>
    <div className="reviews">
      <div className='pp'>
        <p><span>10,000+</span> trusted reviews</p>
        <h2>by customers</h2>
      </div>
      <div className="arrows flex flex-row items-center">
        <MdChevronLeft className='opac cursor-pointer' onClick={sliderLeft} size={70}/>
        <div id="slider" className="reviewCardsAll scrollbar-hide  flex flex-row  xsm:overflow-x-scroll xsm:scroll xsm:white-space-nowrap xsm:scroll-smooth xsm:flex xsm:flex-row">
          <ReviewsCard/>
          <ReviewsCard/>
          <ReviewsCard/>
          <ReviewsCard/>
          <ReviewsCard/>
          <ReviewsCard/>
          <ReviewsCard/>
          <ReviewsCard/>
         
        </div>
        <MdChevronRight className='opac cursor-pointer' onClick={sliderRight} size={70}/>
      </div>
    </div>
  </div>
  )
}

export default WholeBlog