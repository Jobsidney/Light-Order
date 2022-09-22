import Head from 'next/head'
import Image from 'next/image'
import AdvertCard from '../components/Cards/AdvertCard'
import FloatCard from '../components/Cards/FloatCard'
import Items from '../components/ItemsBar/Items'
import IntroInfo from '../components/navBar/IntroInfo'
import NavBar from '../components/navBar/NavBar'
import Search from '../components/SearchBar/search'
import styles from '../styles/Home.module.css'

export default function Home() {
  function Title({title,des}){
    return(
      <div>
            <h1>{title}</h1>
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
            <Title title="Why Light Order?" des="Light Order operates its retail work on a stand-alone basis"/>
            <div className='inline-flex'>
              <FloatCard/>
              <FloatCard/>
              <FloatCard/>
            </div>

          </div>
        </div>
        <div className="products">
          <Title title={"Our Best Product"} des={"open-sell environment features an ever-increasing amount"}/>
          <div className="itemsCard flex">
            <AdvertCard/>
            <AdvertCard/>
            <AdvertCard/>
          </div>
        </div>
    </div>
  )
}
