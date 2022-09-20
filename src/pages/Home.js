import React from 'react'
import Hero from '../components/Hero'
import NewCars from '../components/NewCars'
import News from '../components/News'
import PopularCars from '../components/PopularCars'

const Home = () => {
  return (
   
    <>
      <Hero />
      <PopularCars/>
      <NewCars/>
      <News />
    </>
  )
}

export default Home