import Head from 'next/head'
import Image from 'next/image'
import Items from '../components/ItemsBar/Items'
import Search from '../components/SearchBar/search'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Search/>
      <hr />
      <Items/>
    </div>
  )
}
