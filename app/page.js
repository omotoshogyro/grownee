import Image from 'next/image'
import Header from "./components/Header"
import About from './components/About'
import Footer from './components/Footer'
import Waitlist from "./components/waitlist"
import Faqs from './components/Faqs'

export default function Home() {
  return (
    <main>
      <section>
        <Header/>
        <About/>
      </section>
      <section className='dark'>
        <Waitlist/>
        <Faqs/>
        <Footer/>
      </section>
      
      </main>
  )
}
