"use client"
import React,{useEffect, useRef} from 'react'
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Page() {
  const waitlistRef = useRef()
  useEffect(()=>{
    gsap.fromTo(
        waitlistRef.current,
        { opacity: 0, y: 18 },
        {
          y:0,
          opacity: 1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: waitlistRef.current,
            start: "top center",
            end:"center center",
            toggleActions: "play none none none", 
            once: true, 
      },
        }
      )
  },[waitlistRef.current])
  return (
    <div className='waitlist'> 
        <div className='waitlist__wrapper'>
          <div className='waitlist__wrapper__section' ref={waitlistRef}>
            <h3>Join the waitlist</h3>
            <p>Get early access when we launch and unlock free budgeting templates, savings challenges, and goal trackers.</p>
            <form>
                <label htmlFor='name'>First name</label>
                <input type='text' name='name' id='name' placeholder='John'/>
                <label htmlFor='email'>Email Address</label>
                <input type='text' name='email' id='email' placeholder='name@example.com'/>
                <button type='submit'>Join waitlist</button>
            </form>
            <div className='info'>
                <div className='personas'>
                   <Image
                      src="/assets/persona1.png"
                      alt="Persona joining"
                      width={50}
                      height={50}
                      className='persona'
                    />
                    <Image
                      src="/assets/persona2.png"
                      alt="Persona joining"
                      width={50}
                      height={50}
                      className='persona'
                    />
                    <Image
                      src="/assets/persona3.png"
                      alt="Persona joining"
                      width={50}
                      height={50}
                      className='persona'
                    />
                </div>
                <p>1200+ joined the waitlist already</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Page
