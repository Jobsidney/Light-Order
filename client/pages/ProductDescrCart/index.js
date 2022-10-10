import Head from 'next/head';
import * as IoIcons from 'react-icons/io'

function ProductDescrCart() {
  return (
    <div>
    <section id="advertSection">
    <div className="ards">
      <img src="" alt=""/>
      <div className="small-images">
        <img src="./../assets/images/image-product-1.jpg" alt=""/>
        <img src="./assets/images/image-product-2-thumbnail.jpg" alt=""/>
        <img src="./assets/images/image-product-3-thumbnail.jpg" alt=""/>
        <img src="./assets/images/image-product-4-thumbnail.jpg" alt=""/>
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
             <IoIcons.IoIosRemove size={30}/>
              <span id="cartAdd" className="icons2">0</span>
              <IoIcons.IoIosAdd size={30}/>
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
