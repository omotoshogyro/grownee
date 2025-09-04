"use client"
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Faq from './FaqProp'

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const FaqData=[
  {
    question: "What is Grownee?",
    answer: "Grownee is a personal finance app built to help you save smarter, invest confidently, and manage your budget with ease. Think of it as your all-in-one money growth companion."
  },
  {
    question: "Why should I join the waitlist?",
    answer: "Joining the waitlist gives you early access to Grownee and a chance to experience a new, better way to manage your money before anyone else."
  },
  {
    question: "Is Grownee safe to use?",
    answer: "Yes. Grownee partners with SEC-licensed and regulated fund managers to keep your money safe. We prioritize security and transparency, so you can focus on reaching your goals with peace of mind."
  },
  {
    question: "When will Grownee launch?",
    answer: "We're going live in January 2026. Waitlist members will be the first to know and get early access to our features."
  },
  {
    question: "Who can join Grownee?",
    answer: "Anyone in Nigeria, 18 years or older, with a smartphone and a bank account."
  },
  {
    question: "How will I know when Grownee is ready?",
    answer: "You'll get an email notification once the app launches, along with exclusive updates and early-access invites."
  }
];
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
