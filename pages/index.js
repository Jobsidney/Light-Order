import Head from 'next/head'
import Image from 'next/image'
import AdvertCard from '../components/Cards/AdvertCard'
import BlogCards from '../components/Cards/BlogCards'
import FloatCard from '../components/Cards/FloatCard'
import ReviewsCard from '../components/Cards/ReviewsCard'
import Footer from '../components/footer/Footer'
import Items from '../components/ItemsBar/Items'
import IntroInfo from '../components/navBar/IntroInfo'
import NavBar from '../components/navBar/NavBar'
import Search from '../components/SearchBar/search'
import styles from '../styles/Home.module.css'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import WholeFLoating from '../components/Cards/descrFLoating/WholeFLoating'
import Title from '../components/Title'
import ProductSec from '../components/ProductSection/ProductSec'
import WholeBlog from '../components/WholeBlog/WholeBlog'
import Blogy from '../components/newBlog/Blogy'
import Testimonials from '../components/WholeBlog/Testimonials'
export default function Home() {



  return (
    <div className='body'>
      
      <div className="wholeINtro">
          <NavBar/>
          <IntroInfo/>
        </div>
        <WholeFLoating/>
        <ProductSec/>
       <Testimonials/>
        <div className="subscription">
          <p>Subscribe Our Newsletter!</p>
          <form action="">
            <div>
            <input type="text" placeholder="Enter your Email" />
            <button type='submit'>Subscribe</button>
            </div>
          </form>
        </div>
        
        <Footer/>
    </div>
  )
}
