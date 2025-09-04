"use client"
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Faq from './FaqProp'

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const FaqData=[
    {question:"What is Grownee?",answer:"Grownee is your personal finance companion, built to help you save smarter, invest with confidence, and manage your budget effortlessly. It’s designed to simplify money growth, all in one app."},
    {question:"Why should I join the waitlist?",answer:"Grownee is your personal finance companion, built to help you save smarter, invest with confidence, and manage your budget effortlessly. It's designed to simplify money growth, all in one app."},
    {question:"Is Grownee safe to use?",answer:"Grownee is your personal finance companion, built to help you save smarter, invest with confidence, and manage your budget effortlessly. It’s designed to simplify money growth, all in one app."},
    {question:"When will Grownee launch?",answer:"Grownee is your personal finance companion, built to help you save smarter, invest with confidence, and manage your budget effortlessly. It’s designed to simplify money growth, all in one app."},
    {question:"Who can join Grownee?",answer:"Grownee is your personal finance companion, built to help you save smarter, invest with confidence, and manage your budget effortlessly. It’s designed to simplify money growth, all in one app."},
    {question:"How will I know when Grownee is ready?",answer:"Grownee is your personal finance companion, built to help you save smarter, invest with confidence, and manage your budget effortlessly. It’s designed to simplify money growth, all in one app."},
  ]
  const faqRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      faqRef.current,
      { opacity: 0, y:20 },
      {
        opacity: 1,y:0,
        duration:0.8,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: faqRef.current,
          start: `top center`,
          toggleActions: "play none none none", 
          once: true, 
        },
      }
    );
  }, []);
  return (
    <div className='faqs'>
    <h3>Frequently Asked Questions</h3>
     <div className="faqs__section"  ref={faqRef}>
        {FaqData.map((item, index) => (
          <Faq
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        ))}
      </div>
      
    </div>
  )
}

export default Faqs
