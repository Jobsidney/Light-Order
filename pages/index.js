import Head from 'next/head'
import Image from 'next/image'
import AdvertCard from '../components/Cards/AdvertCard'
import BlogCards from '../components/Cards/BlogCards'
import FloatCard from '../components/Cards/FloatCard'
import ReviewsCard from '../components/Cards/ReviewsCard'
import Items from '../components/ItemsBar/Items'
import IntroInfo from '../components/navBar/IntroInfo'
import NavBar from '../components/navBar/NavBar'
import Search from '../components/SearchBar/search'
import styles from '../styles/Home.module.css'

export default function Home() {
  function Title({title,span,span2,des}){
    return(
      <div>
            <h1><span>{span2}</span>{title}<span>{span}</span></h1>
            <p>{des}</p>
      </div>
    )
  }
  return (
    <div className='body'>
      <div className="wholeINtro">
          <NavBar/>
          <IntroInfo/>
        </div>
        <div className="descr">
          <div className='floating-card'>
            <Title title="Why " span={'Light Order?'} des="Light Order operates its retail work on a stand-alone basis"/>
            <div className='inline-flex'>
              <FloatCard/>
              <FloatCard/>
              <FloatCard/>
            </div>

          </div>
        </div>
        <div className="products">
          <Title title={"Our Best "} span="Product" des={"open-sell environment features an ever-increasing amount"}/>
          <div className="itemsCard flex justify-center">
            <AdvertCard/>
            <AdvertCard/>
            <AdvertCard/>
            <AdvertCard/>
          </div>
        </div>
        <div className="blogs text-center">
          <Title title="Our Blog" span2={'Read '} des="Light Order operates its retail work on a stand-alone basis"/>
          <div className="flex justify-center">
            <BlogCards/>
            <BlogCards/>
            <BlogCards/>
          </div>
          <div className="reviews">
            <div>
              <p><span>10,000+</span> trusted reviews</p>
              <h2>by customers</h2>
            </div>
            <div className="reviewCardsAll flex flex-row">
              <ReviewsCard/>
              <ReviewsCard/>
              <ReviewsCard/>
              <ReviewsCard/>
            </div>
          </div>
        </div>
        <div className="subscription">
          
        </div>
    </div>
  )
}
