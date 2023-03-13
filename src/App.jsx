import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative z-0 bg-primary'>
        <div className=''>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  )
}

export default App
