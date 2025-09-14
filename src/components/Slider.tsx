import {  useLayoutEffect, useRef, useState } from "react";
import spinder01 from "../images/spider01.png";
import spinder02 from "../images/spider02.jpg";
import spinder03 from "../images/spider03.jpg";
import spinder04 from "../images/spider04.jpg";
import { Container } from "./container";
import { Header } from "./header";
import SpiderMan from "../images/Spider/Group 5267.png";
import { Cta } from "./cta";
import { Play } from "./play";
import { Social } from "./redeSocial";
import gsap from "gsap";
import { useMediaQuery } from "../Hook/mediaQuery";

export function Slider() {
  const image = [spinder01, spinder02, spinder03, spinder04];
  const [current, setCurrent] = useState(1);

  const isSm = useMediaQuery("(max-width: 640px)");

  const refNav = useRef<HTMLElement | null>(null);
  const refImg = useRef(null);
  const refSocial = useRef<HTMLDivElement | null>(null);
  const refArrow = useRef(null);

  const el = useRef(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const links = refNav.current?.querySelectorAll("a");
      tl.current = gsap.timeline({});
      tl.current.fromTo(
        ".bg-ground",
        {
          opacity: 0,
          scale: 2,
        },
        {
          opacity: 1,
          scale: 1,
        }
      );

      tl.current.fromTo(
        ".juntos",
        {
          opacity: 0,
          y: 220,
          stagger: 0.2,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          each: 0.25,
          stagger: 0.2,
        },
        "-=0.2"
      );

      tl.current
        .fromTo(
          ".TopSpider",
          { y: 1110, opacity: 0 },
          { y: 0, opacity: 1, duration: 2, ease: "power2.out" }
        )
        // Depois animação contínua de vai e volta (leves movimentos X e Y)
        .to(".TopSpider", {
          x: 5,
          y: -2,
          duration: 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

      if (links) {
        tl.current.fromTo(
          links,
          {
            opacity: 0,
            y: -50,
            stagger: 0.2,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
          },
        );
      }

      const SocialLinks = refSocial.current?.querySelectorAll("a");
      if (SocialLinks) {
        tl.current.fromTo(
          SocialLinks,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "sine.inOut",
            stagger: 0.4,
            repeat: 0,
          },"<"
        );
      }

      tl.current.fromTo(
        ".arrowSlider",
        {
          x: -80,
          y: 30,
          opacity: 0,
        },
        {
          keyframes: [
            { x: 20, y: 0, opacity: 1, duration: 1.5, ease: "sine.inOut" },
            { x: 0, duration: 1.5, ease: "sine.inOut" },
          ],
          each: 0.25,
          stagger: 0.2,
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-dvh relative" ref={el}>
      <div className="headerGsap">
        <Header navRef={refNav} />
        {/* <Container /> */}
      </div>

      <div
        ref={refImg}
        className="relative w-full h-[100svh] border overflow-hidden bg-ground
            after:content-[''] 
            after:w-full 
            after:h-full 
            after:absolute 
            after:top-0 
            after:left-0 
            after:bg-[linear-gradient(to_bottom,_#040C1B_8%,_rgba(4,12,27,0.7)_35%,_#040C1B_89%)]"
      >
        <img
          src={image[current]}
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        <Container />
        <div className="TopSpider w-full max-w-7xl left-0 right-0 mx-auto py-[11.125rem] px-[1.5rem] z-120  absolute  text-center text-[214px] text-[#eee] top-8">
          <img
            src={SpiderMan}
            alt=""
            className="w-full h-[500px] object-cover "
          />
        </div>
        <div className=" w-full left-153 right-0 absolute z-30 lg:top-100 xl:top-126    text-[#eee] juntos">
          <Cta />
        </div>
        {/* lg:top-100 lg:left-54 */}
        <div
          className={`w-83 absolute left-268 sm:top-120 sm:left-72 md:top-130 md:left-142 lg:top-130 lg:left-145  xl:top-135 xl:left-263 2xl:left-265 z-1120 text-[#eee] juntos`}
        >
          {
          !isSm && (
            <div>
              <span className="flex absolute top-15 right-0 items-center justify-center z-1121 w-2xs italic tracking-[0.1em] ">
                WATCH TRAILER
              </span>
            </div>
          ) 
          }

          <Play />
        </div>
        <div className=" absolute left-15 top-100 z-20">
          <Social ref={refSocial} />
        </div>
        <div className="absolute right-15 top-100 z-20">
          {image.map((item, index) => (
            <label key={index}>
              <input
                type="radio"
                name="slider"
                checked={current === index}
                onChange={() => setCurrent(index)}
                className="hidden"
              />
              <span
                ref={refArrow}
                className={` arrowSlider flex flex-col rounded-full gap-5 mb-[72px] cursor-pointer     ${
                  current === index
                    ? "bg-[#eee] w-5 h-5"
                    : "w-3 h-3 bg-[rgba(248,251,255,0.5)]"
                }`}
              ></span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
