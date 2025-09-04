"use client"
import React,{useEffect, useRef} from 'react'
import Link from "next/link";

import Image from 'next/image';

import WaitlistIcon from '../../public/assets/two_flags.svg';
import Union from '../../public/assets/Union.svg';
import Grownee from "../../public/assets/grownee-lockup.svg"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Header() {
 const hRef= useRef()
 const centerRef= useRef()
 const buttonRef= useRef()
 const phoneRef= useRef()
 const upRef= useRef()
 const downRef= useRef()

  useEffect(() => {
    const refs = [
      hRef.current, centerRef.current, buttonRef.current, phoneRef.current
    ]
 
   refs.forEach((ref, index) => {
  gsap.fromTo(
    ref,
    { opacity: 0, y: 10 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.2
    }
  )
})

}, []);


  useEffect(()=>{
     if (window.matchMedia("(min-width: 920px) and (max-width:1280px)").matches) {
      gsap.set([upRef.current, downRef.current], { scale: 0.8, opacity: 0 });
      ScrollTrigger.create({
        trigger: phoneRef.current,
        start: "top center", 
        onEnter: () => {
        if (!upRef.current || !downRef.current) return;
          gsap.to(
            [upRef.current, downRef.current],
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              stagger: 0.4,
              ease: "back.out(1.7)",
            }
          );
        },
      });
     }
     else{
      const pops =[upRef.current, downRef.current]
        pops.forEach((ref, index) => {
        gsap.fromTo(
          ref,
          { opacity: 0, scale: 0.6 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.4,
            ease: "back.out(1.7)",
            delay: 0.8+(0.2*index)
          }
        )
      })
     }
  },[])
  return (
    <div className='header'>
        <Grownee/>
        <div className='header__top'>
              <h2 ref={hRef}> Save, invest and <br/> budget wisely</h2>
              <p className='center' ref={centerRef}>Build better money habits with a personal finance assistant made just for you.</p>
              <Link href={"#waitlist"}>
                <button ref={buttonRef}><WaitlistIcon className="icon"/> <span>Join Waitlist</span></button>
              </Link>
             
        </div>
        <div className='header__bottom'>
         <Image
          src="/assets/header__phone.png"
          alt="Waiting list "
          width={500}
          height={350}
          className='header__bottom__image' ref={phoneRef}
        />
        <div className='pop_ups'>
          <div className='pop_ups__content up' ref={upRef}>
            <div className='union'>
              <Union/>
            </div>
            <div className='info'>
              <h6>Explore Grownee AI</h6>
              <p>{`You've saved for rent in 3 months using Grownee...`}</p>
            </div>
          </div>
          <div className='pop_ups__content down' ref={downRef}>
            <div className='union'>
              <Union/>
            </div>
            <div className='info'>
              <h6>Withdrawal successful</h6>
              <p>{`You've saved for rent in 3 months using Growne...`}</p>
            </div>
          </div>
        </div>
        </div>
       
    </div>
  )
}

export default Header
