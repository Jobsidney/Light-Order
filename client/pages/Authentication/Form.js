
import React from 'react'

import SignUp from './SignUp'
function Form({data}) {
  
  return (
    <div className="image2">
        <div className='overlay'>
          <div className="all">
          {data}
          </div>
         </div>
    </div>
    
  )
}

export default Form