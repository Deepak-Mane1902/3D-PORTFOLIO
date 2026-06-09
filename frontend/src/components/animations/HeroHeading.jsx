import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroHeading = () => {
  const headingRef = useRef(null);
  const aspirantRef = useRef(null);
  const developerRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const aspirant = aspirantRef.current;
    const developer = developerRef.current;

    if (!heading || !aspirant || !developer) return;

    // ======================
    // SCROLL ANIMATION
    // ======================

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=1000",
        scrub: 1,
      },
    });

    tl.to(
      aspirant,
      {
        x: -150,
        y: -80,
        rotate: -4,
        ease: "none",
      },
      0
    );

    tl.to(
      developer,
      {
        x: 150,
        y: 80,
        rotate: 4,
        ease: "none",
      },
      0
    );

    // ======================
    // MAGNETIC LETTER EFFECT
    // ======================

    const letters = heading.querySelectorAll(".letter");

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = mouseX - centerX;
        const dy = mouseY - centerY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          gsap.to(letter, {
            x: dx * 0.04,
            y: dy * 0.04,
            duration: 0.25,
            overwrite: true,
          });
        } else {
          gsap.to(letter, {
            x: 0,
            y: 0,
            duration: 0.4,
            overwrite: true,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="letter inline-block will-change-transform"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <main>
      <h1
        ref={headingRef}
        className="hero-heading
    font-[inter]
    uppercase
    text-7xl
    sm:text-8xl
    md:text-[9rem]

    leading-[0.85]"
      >
        <div ref={aspirantRef} className="ml-7 mb-2 mt-[-6vw] md:ml-0 md:mb-0 md:mt-0">
          {splitText("Aspirant")}
        </div>

        <div
          ref={developerRef}
          className="text-(--primary-text-color)"
        >
          {splitText("Developer")}
        </div>
      </h1>
    </main>
  );
};

export default HeroHeading;