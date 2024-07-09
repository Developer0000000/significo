import React from 'react'
import Hero from './modules/Hero'
import Navbar from './components/Nav/Navbar'
import useLocomotive from './hooks/useLocomotive'
import DownBtn from './components/DownBtn'
import Craft from './modules/Craft'
import RealWork from './modules/RealWork'
import Team from './modules/Team'
import About from './modules/About'
import Insights from './modules/Insights'
import Build from './modules/Build'
import Footer from './modules/Footer'
import CustomCursor from './customCursor/CustomCursor'
import Preloader from './components/preloader/Preloader'

const App = () => {

  useLocomotive(true);

  return (
    <>
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <Preloader />
      <Navbar />
      <DownBtn />
      <main>
        <Hero />
        <Craft />
        <RealWork />
        <Team />
        <About />
        <Insights />
        <Build />
        <Footer />
        {/* <Insights /> */}
      </main>
    </>
  )
}

export default App