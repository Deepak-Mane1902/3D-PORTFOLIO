import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const FootHeading = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Grab all individual letters and the arrow container for the magnetic draw
    const magneticElements = container.querySelectorAll(".magnetic-item");

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      magneticElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Magnetic pull radius (120px)
        if (distance < 120) {
          gsap.to(el, {
            x: dx * 0.08, // Increased slightly for a more noticeable pull
            y: dy * 0.08,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: "elastic2.out",
            overwrite: "auto",
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Splits words into magnetic letters while safely maintaining layout
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="magnetic-item inline-block will-change-transform transition-colors duration-500"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <main className="w-full overflow-hidden px-1 md:px-10" ref={containerRef}>
      <h1 className="group mt-16 text-[clamp(5rem,11vw,14rem)]
      md:text-[clamp(3.5rem,11vw,14rem)] font-black font-sans leading-[12vw] md:leading-[9.5vw] tracking-tighter select-none cursor-pointer">
        
        {/* ROW 1: Say Hi! 👋 */}
        <span className="inline-flex items-center gap-2 md:gap-4 text-(--primary-offwhite-color)">
          {splitText("Say hi!")}
        </span> 
        
        <br />

        {/* ROW 2: Let's talk ↗ (Triggers color sweep + underline on group hover) */}
        <span className="relative inline-flex items-center gap-2 md:gap-4 mt-8 pb-2 text-(--primary-offtext-color)
                         before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 md:before:h-2
                         before:bg-(--primary-text-color) before:scale-x-0 before:origin-left 
                         before:transition-transform before:duration-700 before:ease-out group-hover:before:scale-x-100">
          
          <span className="relative inline-block overflow-hidden">
            {/* Base Text layer */}
            <span className="cursor-greet flex text-(--primary-offtext-color) transition-colors duration-700 ease-out group-hover:text-(--primary-text-color)">
              {splitText("Let's talk")}
            </span>
          </span>

          {/* Arrow Icon */}
          <span className="magnetic-item inline-block mt-2 md:mt-5 transition-colors duration-700 ease-out text-(--primary-offwhite-color) group-hover:text-(--primary-text-color)">
            <ArrowUpRight 
              className="w-[10vw] h-[10vw] max-w-37.5 max-h-37.5 inline-block shrink-0 transition-transform duration-500 group-hover:rotate-45" 
            />
          </span>
        </span>

      </h1>
    </main>
  );
};

export default FootHeading;