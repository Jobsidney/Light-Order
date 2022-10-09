import React from 'react'
import FloatCard from '../FloatCard'
import Title from '../../Title'
function WholeFLoating() {
  return (
    <div className="descr">
        <div className='floating-card xsm:w-ful' >  
        <Title title="Why " span={'Light Order?'} des="Light Order operates its retail work on a stand-alone basis"/>
        <div className='flex justify-center'>
        {/* xsm:w-full dp:justify-center xsm:overflow-x-scroll xsm:scroll xsm:white-space-nowrap xsm:scroll-smooth */}   
            <FloatCard/>
            <FloatCard/>
            <FloatCard/>
        </div>
        </div>
  </div>
  )
}

export default WholeFLoating
