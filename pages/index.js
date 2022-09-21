import Head from 'next/head'
import Image from 'next/image'
import FloatCard from '../components/Cards/FloatCard'
import Items from '../components/ItemsBar/Items'
import IntroInfo from '../components/navBar/IntroInfo'
import NavBar from '../components/navBar/NavBar'
import Search from '../components/SearchBar/search'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='body'>
      {/* <div className='opacity'>
      </div> */}
      <div className="wholeINtro">
          <NavBar/>
          <IntroInfo/>
        </div>
        <div className="descr">
          <div className='floating-card'>
            <h1>Why Light Order?</h1>
            <p>Light Order operates its retail work on a stand-alone basis</p>
            <div className='inline-flex'>
              <FloatCard/>
              <FloatCard/>
              <FloatCard/>
            </div>

          </div>
        </div>
        <div className="products">
          <h2>Our Best Product</h2>
          <p>open-sell environment features an ever-increasing amount</p>
        </div>
    </div>
  )
}
