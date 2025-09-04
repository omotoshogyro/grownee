"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import Image from "next/image";
import Checkbox from "../../public/assets/check_box.svg";
import CheckboxOutline from "../../public/assets/check_box_outline_blank.svg";
import BarIcon from "../../public/assets/bar-chart.svg";
import BarFilledIcon from "../../public/assets/bar_filled.svg";
import Group from "../../public/assets/group.svg";
import Bolt from "../../public/assets/bolt.svg";
import ChartIcon from "../../public/assets/bar-chart.svg"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const stickyref = useRef();
  const containerRef = useRef();
  const dynamicref = useRef();
  const firstRef = useRef();
  const secondref = useRef();
  const thirdref = useRef();
  const fourthRef = useRef();
  const sectFirst = useRef();
  const sectSecond = useRef();
  const sectThird = useRef();
  const sectFourth = useRef();
  const pop1 = useRef();
  const pop2 = useRef();
  const pop3 = useRef();
  const buttonRef = useRef();
  const specialRef = useRef();
  const infoRef = useRef();
  const mobileref1 = useRef();
  const mobileref2 = useRef();
  const mobileref3 = useRef();
  const mobileref4 = useRef();

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(min-width: 1281px)").matches) {
      const totalHeight = 3 * window.innerHeight;
      let trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalHeight}`,
        scrub: true,
        pin: containerRef.current,
        onUpdate: (self) => {
          const newIndex = Math.floor(self.progress * 4);
          setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
        },
      });

      return () => {
        trigger.kill();
      };
    } else if (
      window.matchMedia("(min-width: 920px) and (max-width:1280px)").matches
    ) {
      let trigger = ScrollTrigger.create({
        trigger: dynamicref.current,
        start: "top 10%",
        end: "bottom bottom",
        scrub: true,
        pin: stickyref.current,
        onUpdate: (self) => {
          const newIndex = Math.floor(self.progress * 4);
          setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
        },
      });

      return () => {
        trigger.kill();
      };
    }
  }, []);

  useEffect(() => {
    const pops = [
      pop1.current,
      pop2.current,
      pop3.current,
      specialRef.current,
      infoRef.current,
      buttonRef.current,
    ];

    pops.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.4,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });
    if (window.matchMedia("(min-width: 920px)").matches) {
      gsap.fromTo(
        firstRef.current,
        { opacity: 0, scale: 0.4, x: 105 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          scrollTrigger: {
            trigger: firstRef.current,
            start: "top bottom",
            end: "top 35%",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        secondref.current,
        { opacity: 0, scale: 0.4, x: -105 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          scrollTrigger: {
            trigger: secondref.current,
            start: "top bottom",
            end: "top 35%",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        thirdref.current,
        { opacity: 0, scale: 0.5, y: 55 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: thirdref.current,
            start: "top bottom",
            end: "top 35%",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        fourthRef.current,
        { opacity: 0, scale: 0.2, x: -105 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          scrollTrigger: {
            trigger: fourthRef.current,
            start: "top bottom",
            end: "top 35%",
            scrub: true,
          },
        }
      );
      const animateSection = (sectRef, triggerRef) => {
        gsap.fromTo(
          sectRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top bottom",
              end: "center center",
              scrub: true,
            },
          }
        );
      };
      animateSection(sectFirst, firstRef);
      animateSection(sectSecond, secondref);
      animateSection(sectThird, thirdref);
      animateSection(sectFourth, fourthRef);
    } else {
      const refs = [
        mobileref1.current,
        mobileref2.current,
        mobileref3.current,
        mobileref4.current,
        firstRef.current,
        secondref.current,
        thirdref.current,
        fourthRef.current,
      ];
      refs.forEach((ref) => {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
    }
  }, []);
  useEffect(() => {
    const currentSection = dynamicref.current;
    if (!currentSection) return;

    if (window.matchMedia("(min-width: 1280px)").matches) {
      gsap.fromTo(
        currentSection,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  return (
    <div className="about_container">
      <div className="about" ref={containerRef}>
        <div className="about__static" ref={stickyref}>
          <div className={`section`}>
            <div
              className={`box ${activeIndex === 0 ? "focus" : "not_focused"}`}
            >
              <div className="before" ref={sectFirst}></div>
              <h6>Invest smart without feeling lost</h6>
              <p>
                From fixed deposits to mutual funds, Grownee helps you invest
                with clarity.
              </p>
            </div>
          </div>
          <div className={`section`}>
            <div
              className={`box ${activeIndex === 1 ? "focus" : "not_focused"}`}
            >
              <div className="before" ref={sectSecond}></div>
              <h6>Budgeting That Understands Your Real Life.</h6>
              <p>
                Grownee helps you build a flexible budget you can actually stick
                to.
              </p>
            </div>
          </div>
          <div className={`section`}>
            <div
              className={`box ${activeIndex === 2 ? "focus" : "not_focused"}`}
            >
              <div className="before" ref={sectThird}></div>
              <h6>Save with intention</h6>
              <p>
                Pick a plan, automate contributions, track daily interest, and
                pause anytime.
              </p>
            </div>
          </div>
          <div className={`section`}>
            <div
              className={`box ${activeIndex === 3 ? "focus" : "not_focused"}`}
            >
              <div className="before" ref={sectFourth}></div>
              <h6>Ask Grownee Anything</h6>
              <p>{`Grownee's AI gives localized, and easy-to-follow to help guide your financial decision.`}</p>
            </div>
          </div>
        </div>
        <div className="about__dynamic" ref={dynamicref}>
          <div className="mobile" ref={mobileref1}>
            <h6>Invest smart without feeling lost</h6>
            <p>
              From fixed deposits to mutual funds, Grownee helps you invest with
              clarity.
            </p>
          </div>
          <div
            className={`content first ${
              activeIndex === 0 ? "inview" : "not_in_view"
            }`}
            ref={firstRef}
          >
            <div className="top">
              <div>
                <p>Investment</p>
                <p className="num">982,981.00</p>
              </div>
              <div>
                <p>Market position</p>
                <p className="num">0.34%</p>
              </div>
            </div>
            {/* <ChartIcon /> */}
            <Image
              src="/assets/barchart.png"
              alt="Bar chart "
              width={300}
              height={170}
              className="barchart"
            />
            <div className="caption">
              <p>July</p>
              <p>Today</p>
            </div>
            <div className="info" ref={infoRef}>
              <h6>23%</h6>
              <p>
                Increase in the FMD stock as of today, take advantage of this
                trade and shine ya teeth!
              </p>
            </div>
          </div>
          <div className="mobile" ref={mobileref2}>
            <h6>Budgeting That Understands Your Real Life.</h6>
            <p>
              Grownee helps you build a flexible budget you can actually stick
              to.
            </p>
          </div>
          <div
            className={`content second ${
              activeIndex === 1 ? "inview" : "not_in_view"
            }`}
            ref={secondref}
          >
            <div className="box">
              <CheckboxOutline />
              <p>Adobe Sub</p>
              <div className="priority">
                <BarIcon />
                <p>High priority</p>
              </div>
            </div>
            <div className="box">
              <Checkbox />
              <p>Food Stuff</p>
              <div className="priority">
                <BarIcon />
                <p>High priority</p>
              </div>
            </div>
            <div className="box">
              <CheckboxOutline />
              <p>School Fees</p>
              <div className="priority">
                <BarIcon />
                <p>High priority</p>
              </div>
            </div>
            <div className="box special" ref={specialRef}>
              <Group />
              <p>Apple Music</p>
              <div className="priority">
                <BarFilledIcon />
                <p>Low priority</p>
              </div>
            </div>
            <div className="box">
              <Checkbox />
              <p>New Wig</p>
              <div className="priority">
                <BarIcon />
                <p>Mid priority</p>
              </div>
            </div>
          </div>
          <div className="mobile" ref={mobileref3}>
            <h6>Save with intention</h6>
            <p>
              Pick a plan, automate contributions, track daily interest, and
              pause anytime.
            </p>
          </div>
          <div
            className={`content third ${
              activeIndex === 2 ? "inview" : "not_in_view"
            }`}
            ref={thirdref}
          >
            <div className="floats">
              <div className="popup" ref={pop1}>
                <p className="mini">Total Savings</p>
                <p>₦982,981.00</p>
              </div>
              <div className="popup" ref={pop2}>
                <p className="mini">My house rent</p>
                <p>₦647,054.00</p>
              </div>
              <div className="popup" ref={pop3}>
                <p className="mini">Group savings</p>
                <p>₦109,221.00</p>
              </div>
            </div>
            <Image
              src="/assets/header__phone.png"
              alt="Sorting list "
              width={300}
              height={400}
              className="phone"
            />
          </div>
          <div className="mobile" ref={mobileref4}>
            <h6>Ask Grownee Anything</h6>
            <p>{`Grownee's AI gives localized, and easy-to-follow to help guide your financial decision.`}</p>
          </div>
          <div
            className={`content fourth ${
              activeIndex === 3 ? "inview" : "not_in_view"
            }`}
            ref={fourthRef}
          >
            <div className="frame">
              <button ref={buttonRef}>
                <Bolt /> <span>Ask Grownee</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
