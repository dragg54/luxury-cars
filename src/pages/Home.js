import React from 'react'
import Hero from '../components/Hero'
import NewCars from '../components/NewCars'
import PopularCars from '../components/PopularCars'

const Home = () => {
  return (
   
    <>
      <Hero />
      <PopularCars/>
      <NewCars/>
    </>
  )
}

export default Home