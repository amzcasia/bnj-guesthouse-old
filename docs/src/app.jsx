import { useState } from 'preact/hooks'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'


export function App() {
  

  return (
    <>
    <Header />
    <MainContent />
    <Footer />
    <div className='h-[1000px]'></div>
    </>
  )

}
