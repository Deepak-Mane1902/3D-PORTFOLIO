import { useEffect, useRef } from "react";
import gsap from "gsap";

const Scroll = () => {
  const marqueeRef = useRef(null);
  const directionRef = useRef(-1);

  const keywords = [
    "Codex",
    "Design X Creative",
    "Data Management",
    "Styling",
    "Frontend Development",
    "React.js",
    "GSAP",
    "Creative Coding",
    "UI/UX Design",
    "Motion Graphics",
    "Brand Strategy",
    "Web Experiences",
  ];

  useEffect(() => {
    let xPercent = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > (window.lastScrollY || 0)) {
        directionRef.current = 1; // Right
      } else {
        directionRef.current = -1; // Left
      }

      window.lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      if (!marqueeRef.current) return;

      const itemsWidth = marqueeRef.current.scrollWidth / 2;

      xPercent += 0.5 * directionRef.current;

      if (xPercent <= -itemsWidth) {
        xPercent = 0;
      }

      if (xPercent >= 0) {
        xPercent = -itemsWidth;
      }

      gsap.set(marqueeRef.current, {
        x: xPercent,
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden w-full h-20 p-10 mt-6">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-black to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-black to-transparent" />

      <div
        ref={marqueeRef}
        className="flex w-max whitespace-nowrap"
      >
        {[...keywords, ...keywords].map((item, index) => (
        
          <div
            key={index}
            className="sm:mx-2 md:mx-4  mt-1 flex items-center  gap-8 "
          >

            
            <h2 className="text-xl font-black uppercase tracking-tight  text-(--primary-offwhite-color) hover:text-white/80 md:text-2xl ">
              {item}
            </h2>

            <span className="text-3xl pr-4 text-blue-500">.✦.</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Scroll;