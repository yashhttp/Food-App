import React from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/Exploremenu/Exploremenu'
import { useState } from 'react'
import Fooddiisplay from '../../Components/Fooddisplay/Fooddisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
const Home = () => {
  const[category, setcategory] = useState("All")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setcategory={setcategory}/>
      <Fooddiisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
