import Head from 'next/head';
import { useState } from 'react';
import * as IoIcons from 'react-icons/io'

function ProductDescrCart() {

    const [qty,setQty] = useState(0)
    function handleAdd(){
        setQty(qty+1)
    }
    function handleMinus(){
        qty==0 ? setQty(0) : setQty(qty-1)
    }
    const data=[1,2,3,4]
  return (
    <div>
    <section id="advertSection">
    <div className="ards">
      <img src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw0bb295cf/images/d_08/130125F_D_08X1.jpg?sw=406" alt=""/>
      <div className="flex small-images">
       {
        data.map(item=>(<img src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw0bb295cf/images/d_08/130125F_D_08X1.jpg?sw=406" alt=""/>))
       }

      </div>
    </div>
    <div id="sellsDecriptiom">
      <div className="title">LIGHT-ORDER COMPANY </div>
      <div className="descr">
        <p>Fall Limited Edition</p>
        <p>Sneakers</p>
      </div>
      <p>
        These low-profile sneakers are your perfect casual wear
        companion Featuring a durable rubber outer sole, they'll
        withstand everything the weather can offer.
      </p>
      <div id="cost">
        <div>
          <h3>$125.00</h3>
          <div><h4>50%</h4></div>
        </div>
        <p>$250.00</p>
      </div>
      <div className="items-shopping">
        <div className="addItems">
             <IoIcons.IoIosRemove className='add' size={30} onClick={handleMinus}/>
              <span id="cartAdd" className="icons2">{qty}</span>
              <IoIcons.IoIosAdd className='add' size={30} onClick={handleAdd}/>
          </div>
        <div className="add-To-Cart">
        <IoIcons.IoIosCart size={30}/>
            Add to cart
        </div>
        </div>
      </div>

   
  </section></div>
  )
}

export default ProductDescrCart
