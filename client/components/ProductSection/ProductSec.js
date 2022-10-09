import React from 'react'
import Title from '../Title'
import AdvertCard from '../Cards/AdvertCard'
import Blogy from '../newBlog/Blogy'
function ProductSec() {
  return (
    <div className="products">
    <Title title={"Our Best "} span="Product" des={"open-sell environment features an ever-increasing amount"}/>
    <div className="scrollbar-hide itemsCard md:justify-center  xsm:overflow-x-scroll xsm:scroll xsm:white-space-nowrap xsm:scroll-smooth xsm:flex xsm:flex-row">
      {/* <AdvertCard/>
      <AdvertCard/>
      <AdvertCard/>
      <AdvertCard/> */}
      <Blogy/>
    </div>
  </div>
  )
}

export default ProductSec